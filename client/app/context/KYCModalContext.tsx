"use client";

import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { BACKEND_BASE_URL } from "../utils/constants";
import { useAccount } from "wagmi";

interface ModalContextProps {
  showModal: boolean;
  openModal: (_account: string) => Promise<void>;
  closeModal: () => void;
  kycStatus: string;
  checkKycStatus: (_account: string) => Promise<void>;
  setKycStatus: Dispatch<SetStateAction<string>>;
}

const KYCModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useKYCModal = () => {
  const context = useContext(KYCModalContext);
  if (!context) {
    throw new Error("useKYCModal must be used within a KYCModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const KYCModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [kycStatus, setKycStatus] = useState("");
  const { address: account } = useAccount();

  const closeModal = () => {
    setShowModal(false);
  };

  // Open modal and start Veriff
  const openModal = async (_account: string) => {
    setShowModal(true);
  };

  // Check wallet KYC status on connect
  const checkKycStatus = async (account: string) => {
    // const _account = "0xe4666e96df678286d42944619fde27f5ad79b0ec";
    const _account = account;
    try {
      const resp = await axios.get(
        `${BACKEND_BASE_URL}/api/kyc/status/${_account}`
      );
      console.log(
        "🚀 ~ checkKycStatus ~ resp.data?.data?.decision:",
        resp.data?.data?.decision
      );
      if (resp.data?.data?.decision == "approved") {
        setKycStatus("completed");
        setShowModal(false);
      } else if (resp.data?.data?.decision == "declined") {

        setKycStatus("declined");
        setShowModal(true);

      } else if (resp.data?.data?.decision == "pending") {
        setKycStatus("pending");
        setShowModal(true);
      } else {
        // No decision → open KYC modal
        setKycStatus("");
        setShowModal(true);
      }
    } catch (err: any) {
      setKycStatus("");
      setShowModal(true);
      console.error("Error checking KYC status:", err.message);
    }
  };

  useEffect(() => {
    if (!account) return;
    checkKycStatus(account);
  }, [account]);

  return (
    <KYCModalContext.Provider
      value={{ showModal, openModal, closeModal, kycStatus, checkKycStatus,setKycStatus }}
    >
      {children}
    </KYCModalContext.Provider>
  );
};
