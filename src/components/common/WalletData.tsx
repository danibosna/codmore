"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import ChainSelect from "./ChainSelect";
import { CHAIN_INFO } from "~/lib/connectors/constants";
import Wallet from "./Wallet";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import avatar from "../assets/icons/5.svg"
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "~/lib/useWeb3";
import Image from "next/image";
import { AvatarUser } from "./AvatarUser";

const WalletData = () => {
  const { chainId, isActive } = useWeb3React();
  const { getAvatarAccount } = useWeb3();
  const { data } = getAvatarAccount;

  const userAvatar = "" ?? undefined;

  console.log(data)

  return (
    <div
      className={`group custom-button mb-2 border-slate-50 text-xs font-bold text-slate-50 md:text-sm`}
    >
      <span className="mx-2 hidden group-hover:block">
        {isActive && chainId ? CHAIN_INFO[chainId]?.label : ""}
      </span>
      <Popover>
        <PopoverTrigger>
          <AvatarUser />
        </PopoverTrigger>
        <PopoverContent className="custom-container mr-3">
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
