import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createWalletSlice, type WalletState } from "./slice/walletSlice";

const useWalletStore = create<WalletState>()(
  persist(
    (...a) => ({
      ...createWalletSlice(...a),
    }),
    { name: "walletStore" },
  ),
);

export default useWalletStore;
