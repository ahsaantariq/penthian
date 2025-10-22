const express = require("express");
const router = express.Router();
const axios = require("axios");
const crypto = require("node:crypto");
const User = require("../models/user");
require("dotenv").config();

// === CONFIG ===
// const VERIFF_API_BASE = "https://stationapi.veriff.com";
// const VERIFF_CLIENT = "4014911e-396e-49a5-998e-08115c800fe8"; // x-auth-client (API key)
// const VERIFF_SECRET = "2c0f0b83-9b9e-452e-b8b9-721a4b6d4612"; // shared secret for HMAC signing
const VERIFF_API_BASE = "https://stationapi.veriff.com";

//======= GOD WILL =============
const VERIFF_CLIENT = "65193703-135d-40e7-9fe0-1f49df34b681";
const VERIFF_SECRET = "12d8c187-b6d4-4ab1-a4cf-0e7b13f63bf2";

//======= CHIRS =============
// const VERIFF_CLIENT = "e3a8ada1-d1ca-483e-aa20-4329a4590583";
// const VERIFF_SECRET = "5ddf5252-f755-450c-bd9d-cdae742a94a0";

if (!VERIFF_CLIENT || !VERIFF_SECRET) {
  console.error("Missing VERIFF_CLIENT or VERIFF_SECRET in env");
  process.exit(1);
}

// === HMAC helper ===
function signHmac(payload) {
  let data = typeof payload === "string" ? payload : JSON.stringify(payload);
  return crypto
    .createHmac("sha256", VERIFF_SECRET)
    .update(Buffer.from(data, "utf8"))
    .digest("hex");
}

// === Veriff helpers ===
async function getVeriffDecision(sessionId) {
  console.log("🚀 ~ getVeriffDecision ~ sessionId:", sessionId);
  const headers = {
    "X-AUTH-CLIENT": VERIFF_CLIENT,
    "X-HMAC-SIGNATURE": signHmac(sessionId),
  };
  // console.log("🚀 ~ getVeriffDecision ~ headers:", headers);
  const resp = await axios.get(
    `${VERIFF_API_BASE}/v1/sessions/${sessionId}/decision/fullauto?version=1.0.0`,
    { headers }
  );
  console.log("🚀 ~ getVeriffDecision ~ resp.data:", resp?.data?.decision);
  return resp?.data?.decision ?? null;
}

async function deleteVeriffSession(sessionId) {
  const headers = {
    "X-AUTH-CLIENT": VERIFF_CLIENT,
    "X-HMAC-SIGNATURE": signHmac(sessionId),
  };
  await axios.delete(`${VERIFF_API_BASE}/v1/sessions/${sessionId}`, {
    headers,
  });
}

// === Routes ===

// 1. Save session with cleanup
router.post("/save-session", async (req, res) => {
  try {
    const { walletAddress, sessionId } = req.body;
    if (!walletAddress || !sessionId) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const wallet = walletAddress.toLowerCase();
    const existing = await User.findOne({ walletAddress: wallet }).lean();

    if (existing?.sessionId) {
      // check decision for existing session
      const decision = await getVeriffDecision(existing.sessionId);
      console.log("🚀 ~ decision?.status:", decision);
      if (decision == "approved") {
        // if status exists (approved/declined) → don't overwrite
        return res.status(200).json({
          success: true,
          message: "User already has a completed KYC session",
        });

      } else {

                // if status is null → delete old session in Veriff
        await deleteVeriffSession(existing.sessionId).catch((err) => {
          console.error(
            "Delete session error:",
            err.response?.data || err.message
          );
        });
      }
    }

    // Save new session
    await User.updateOne(
      { walletAddress: wallet },
      { $set: { walletAddress: wallet, sessionId } },
      { upsert: true }
    );

    return res.status(200).json({
      success: true,
      message: "Session saved",
    });
  } catch (err) {
    console.error("Save session error:", err.response?.data || err.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// 2. Get KYC status
router.get("/status/:wallet", async (req, res) => {
  try {
    const wallet = req.params.wallet?.toLowerCase();
    if (!wallet) {
      return res.status(400).json({ message: "wallet is required" });
    }

    const user = await User.findOne(
      { walletAddress: wallet },
      { sessionId: 1 }
    ).lean();

    if (!user?.sessionId) {
      return res.status(200).json({
        success: true,
        data: {
          walletAddress: wallet,
          decision: null,
        },
      });
    }

    const decision = await getVeriffDecision(user.sessionId); //null | approved

    return res.status(200).json({
      success: true,
      data: {
        walletAddress: wallet,
        decision: decision === null ? "pending" : decision ,
      },
    });
  } catch (err) {
    console.error("KYC status error:", err.response?.data || err.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// 3. KYC WEBHOOK
// router.post("/webhook", async (req, res) => {
//   try {
//     console.log("Received a webhook");

//     const signature = req.get("x-hmac-signature");
//     const secret = API_SECRET;
//     const payload = req.body;

//     console.log(
//       "🚀 ~ ==============================================================:"
//     );
//     console.log("🚀 ~ req.headers:", req.headers);
//     console.log("🚀 ~ req.body:", req.body);
//     console.log(
//       "🚀 ~ ==============================================================:"
//     );

//     const isValid = isSignatureValid({ signature, secret, payload });
//     console.log("Validated signature:", isValid);

//     if (!isValid) {
//       return res.status(400).json({ message: "Invalid signature" });
//     }
//     const wallet = req.body?.vendorData;

//     if (!wallet) {
//       return res.status(404).json({ message: "wallet not found" });
//     }
//     const decision = req.body?.data?.verification?.decision; //'declined'
//     console.log("🚀 ~ decision:", decision)

//     if (!decision) {
//       return res.status(404).json({ message: "decision not found" });
//     }

//     if (decision !== "declined") {
//       return res.status(404).json({ message: "Invalid decision" });
//     }

//     const updated = await User.updateOne(
//       { walletAddress: wallet },
//       { $set: { kycStatus: decision } },
//       { upsert: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ message: "wallet record not found" });
//     }

//     return res.status(200).json({ message: "received" });
//   } catch (error) {
//     return res.status(500).json({ message: "internal server error" });
//   }
// });

module.exports = router;
