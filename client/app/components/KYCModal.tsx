"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useAccount } from "wagmi";
import { useKYCModal } from "../context/KYCModalContext";
import { BACKEND_BASE_URL } from "../utils/constants";
import { MESSAGES } from "@veriff/incontext-sdk";
import { shortenWalletAddress } from "../context/helper";

declare global {
  interface Window {
    Veriff?: any;
    veriffSDK?: any;
  }
}

const KYCModal = () => {
  const { 
    showModal, 
    closeModal, 
    checkKycStatus, 
    kycStatus, 
    setKycStatus 
  } = useKYCModal();
  
  const { address: account } = useAccount();
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  // ✅ Load Veriff SDK scripts only once globally
  useEffect(() => {
    const loadVeriffScripts = async () => {
      const existing = document.querySelectorAll('script[src*="veriff"]');
      if (existing.length >= 2) {
        setScriptsLoaded(true);
        return;
      }

      const loadScript = (src: string) =>
        new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Failed to load ${src}`));
          document.body.appendChild(script);
        });

      try {
        await Promise.all([
          loadScript("https://cdn.veriff.me/sdk/js/1.5/veriff.min.js"),
          loadScript("https://cdn.veriff.me/incontext/js/v1/veriff.js"),
        ]);
        setScriptsLoaded(true);
      } catch (err) {
        console.error("Error loading Veriff SDK:", err);
      }
    };

    loadVeriffScripts();
  }, []);

  // ✅ Initialize Veriff only when scripts + modal + wallet are ready
  useEffect(() => {
    if (!showModal || !account || kycStatus === "pending" || !scriptsLoaded)
      return;

    const initVeriff = () => {
      if (!window.Veriff) return console.warn("Veriff not available yet");

      const veriff = window.Veriff({
        host: "https://stationapi.veriff.com",
        apiKey: process.env.NEXT_PUBLIC_VERIFF_API_KEY,
        parentId: "veriff-root",
        onSession: async (err: any, response: any) => {
          if (!err && response?.verification) {
            try {
              // Mount iframe
              window.veriffSDK.createVeriffFrame({
                url: response.verification.url,
                onEvent: async function (msg: string) {
                  if (msg === MESSAGES.FINISHED) {
                    try {
                      
                      await axios.post(
                        `${BACKEND_BASE_URL}/api/kyc/save-session`,
                        {
                          walletAddress: account,
                          sessionId: response.verification.id,
                        }
                      );
                      setKycStatus("pending");
                      await checkKycStatus(account);
                    } catch (error) {
                      
                    }
                  }
                },
              });
            } catch (error) {
              console.error("Error saving KYC session:", error);
            }
          }
        },
      });

      veriff.setParams({
        person: { givenName: " ", lastName: " " },
        vendorData: account.toLowerCase(),
      });

      veriff.mount();
    };

    // Wait briefly to ensure global object initialized
    const timeout = setTimeout(initVeriff, 300);
    return () => clearTimeout(timeout);
  }, [showModal, account, scriptsLoaded, kycStatus]);

  if (!showModal || !account) return null;

  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50">
  <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl mx-4 min-h-[500px] flex flex-col items-center">
    
    {/* Close Button - now properly positioned */}
    <button
      onClick={closeModal}
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl leading-none"
      aria-label="Close"
    >
      ×
    </button>
        
        {kycStatus === "pending" ? (
          <p className="mb-6">We have received your KYC for wallet ({shortenWalletAddress(account)}). Review in progress.</p>
        ) : kycStatus === "declined" ? (
          <>
            <p className="mb-6">
              Your KYC submission for wallet ({shortenWalletAddress(account)}) was been declined, Please resubmit.
            </p>
            <div id="veriff-root" className="w-full h-full" />
          </>
        ) : (
          <>
            <p className="mb-6">Complete KYC for wallet ({shortenWalletAddress(account)}) to keep using Penthian.</p>
            <div id="veriff-root" className="w-full h-full" />
          </>
        )}
      </div>
    </div>
  );
};

export default KYCModal;
