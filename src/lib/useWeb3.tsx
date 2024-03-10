import { useQueryClient, useQuery } from "@tanstack/react-query";
import type { BigNumber } from "@ethersproject/bignumber";
import { formatEther } from "@ethersproject/units";
import {
  useWeb3React,
  Web3ReactProviderProps,
  type Web3ReactHooks,
} from "@web3-react/core";
import React, { useState } from "react";

const useWeb3 = () => {
  const { provider, account, accounts, isActive, chainId } = useWeb3React(); // Obtener la biblioteca web3

  const getAvatarAccount = useQuery({
    queryKey: ["avatar", account],
    queryFn: async () => {
      if (!provider || !accounts)
        throw new Error("No se proporcionaron cuentas o biblioteca");

      return Promise.all(
        accounts.map((account) => provider.getAvatar(account)),
      );
    },
    enabled: !!provider && !!accounts, // Solo activar la consulta si la biblioteca y las cuentas están presentes
  });

  const getBalances = useQuery<BigNumber[], Error>({
    queryKey: ["balances", accounts],
    queryFn: async () => {
      if (!provider || !accounts)
        throw new Error("No se proporcionaron cuentas o biblioteca");

      return Promise.all(
        accounts.map((account) => provider.getBalance(account)),
      );
    },
    enabled: !!provider && !!accounts, // Solo activar la consulta si la biblioteca y las cuentas están presentes
  });

  return {
    chainId,
    provider,
    isActive,
    account,
    accounts,
    getBalances,
    getAvatarAccount,
  };
};

export default useWeb3;
