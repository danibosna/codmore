import { BigNumber } from "@ethersproject/bignumber";
import { type StateCreator } from "zustand";
import type { ConnectionType } from "~/lib/connectors/connections";

export interface WalletState {
  accounts: string[] | undefined;
  balance: BigNumber[] | null;
  connectionType: ConnectionType | null;
  updateAccounts: (newAccounts: string[] | undefined) => void;
  updateBalance: (newBalance: BigNumber[]) => void;
  setConnectionType: (connectionType: null | ConnectionType) => void;
}

export const createWalletSlice: StateCreator<WalletState> = (set) => ({
  accounts: [],
  balance: null,
  connectionType: null,
  updateAccounts: (newAccounts) => set({ accounts: newAccounts }),
  updateBalance: (newBalance) => set({ balance: newBalance }),
  setConnectionType: (newConnectionType) =>
    set({ connectionType: newConnectionType }),
});
