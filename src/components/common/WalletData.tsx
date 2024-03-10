"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import ChainSelect from "./ChainSelect";
import { CHAIN_INFO } from "~/lib/connectors/constants";
import Wallet from "./Wallet";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "~/lib/useWeb3";

const WalletData = () => {
  const { chainId, isActive } = useWeb3React();
  const { getAvatarAccount } = useWeb3();
  const { data } = getAvatarAccount;

  console.log(data);

  return (
    <div
      className={`custom-button mb-2 border-slate-50 text-xs font-bold text-slate-50 md:text-sm`}
    >
      <span className="mx-2">
        {isActive && chainId ? CHAIN_INFO[chainId]?.label : ""}
      </span>
      <Popover>
        <PopoverTrigger>
          <Avatar className="custom-button">
            <AvatarImage src="https://c8.alamy.com/comp/2HWBMC7/3d-bored-ape-character-nft-prime-ape-planet-swag-monkey-portrait-avatar-for-profile-picture-blockchain-based-artwork-art-collectibles-2HWBMC7.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="custom-container mr-6">
          <Tabs defaultValue="wallet" className="text-center">
            <TabsList className="custom-container gap-8">
              <TabsTrigger value="chain">{"Chain & Swap"}</TabsTrigger>
              <TabsTrigger value="wallet">{"Wallet"}</TabsTrigger>
            </TabsList>
            <TabsContent className="text-start text-white" value="chain">
              <ChainSelect />
            </TabsContent>
            <TabsContent className="text-start text-white" value="wallet">
              <Wallet />
            </TabsContent>
          </Tabs>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default WalletData;
