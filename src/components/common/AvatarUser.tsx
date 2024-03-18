import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import avatar from "../assets/icons/5.svg"
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "~/lib/useWeb3";
import Image from "next/image";

export const AvatarUser = () => {
  const { chainId, isActive } = useWeb3React();
  const { getAvatarAccount } = useWeb3();
  const { data } = getAvatarAccount;

  const userAvatar = "" ?? undefined;

  console.log(data)

  return (
    <Avatar className="custom-button">
      <AvatarImage src={userAvatar ?? undefined} />
      <AvatarFallback>
        <Image src={avatar as string} alt="" />
      </AvatarFallback>
    </Avatar>
  )
}
