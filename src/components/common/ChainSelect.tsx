"use client";
import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { ConnectionType, switchNetwork } from "~/lib/connectors/connections";
import { CHAIN_INFO } from "~/lib/connectors/constants";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import useWeb3 from "~/lib/useWeb3";

// Listen for new blocks and update the wallet
const useOnBlockUpdated = (callback: (blockNumber: number) => void) => {
  const { provider } = useWeb3React();
  useEffect(() => {
    if (!provider) {
      return;
    }
    const subscription = provider.on("block", callback);
    return () => {
      subscription.removeAllListeners();
    };
  });
};

const ChainSelect = () => {
  const { chainId } = useWeb3React();
  const [connectionType, setConnectionType] = useState<ConnectionType | null>(
    null,
  );

  return (
    <Select>
      <SelectTrigger className="font-semibold text-white">
        <SelectValue
          onChange={async () => {
            if (chainId) {
              await switchNetwork(chainId, connectionType);
            }
          }}
          placeholder={chainId && `(${chainId}) ${CHAIN_INFO[chainId]?.label}`}
        />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(CHAIN_INFO).map((chainId) => (
          <SelectItem
            className="text-center font-semibold"
            key={chainId}
            value={chainId}
          >
            {`(${chainId}) ${CHAIN_INFO[chainId]?.label}`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ChainSelect;
