"use client";
import { useWeb3React } from "@web3-react/core";
import React from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { ConnectionOptions } from "~/lib/ConnectionOptions";
import { INPUT_CHAIN_URL } from "~/lib/connectors/constants";
import Link from "next/link";
import { RxTokens } from "react-icons/rx";
import { Accounts } from "./Accounts";
import useWalletStore from "~/lib/store/useWalletStore";

const FallbackComponent = ({ error }: FallbackProps) => {
  return (
    <div>
      <h1>An error occurred: {(error as Error)?.message}</h1>
      <p>Please reload the application</p>
    </div>
  );
};

const Wallet = () => {
  const { isActive } = useWeb3React();
  const { connectionType, setConnectionType } = useWalletStore();

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {INPUT_CHAIN_URL === "" && (
        <h2 className="error">Please set your RPC URL in config.ts</h2>
      )}
      {connectionType !== null && (
        <div className="my-4 border-b border-slate-300">
          <Accounts />
          <div className="my-4 w-full">
            <div className="">
              <Link className="flex" href={"/tokens"}>
                <RxTokens size={25} className="mr-2" />
                <span className="font-semibold">{"Tokens"}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
      <ConnectionOptions
        activeConnectionType={connectionType}
        isConnectionActive={isActive}
        onActivate={setConnectionType}
        onDeactivate={setConnectionType}
      />
    </ErrorBoundary>
  );
};

export default Wallet;
