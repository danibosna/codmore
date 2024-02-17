'use client';
import { useWeb3React } from '@web3-react/core';
import { connector } from '~/config/web3.config';
import { useCallback, useEffect, useState } from 'react';
import useTruncatedAddress from '~/lib/useTruncatedAddress';
import Link from 'next/link';
import { useRouter } from 'next/router';

const WalletData = () => {
  const [balance, setBalance] = useState(0);
  const { 
    account,
    accounts,
    connector,
    chainId,
    isActive,
    isActivating,
    provider,
    ENSName,
    ENSNames
  } = useWeb3React();

  const router = useRouter();

  // const isUnsupportedChain = error;
  //
  // const connect = useCallback(() => {
  //   activate(connector);
  //   localStorage.setItem('previouslyConnected', 'true');
  // }, [activate]);
  //
  // const disconnect = () => {
  //   deactivate();
  //   localStorage.removeItem('previouslyConnected');
  // };
  //
  // const getBalance = useCallback(async () => {
  //   const toSet = await library.eth.getBalance(account);
  //   setBalance(Number((toSet / 1e18).toFixed(2)));
  // }, [library?.eth, account]);
  //
  // const login = () => {
  //   return router.replace('/desarrollos');
  // };
  //
  // useEffect(() => {
  //   if (active) getBalance();
  // }, [active, getBalance]);
  //
  // useEffect(() => {
  //   if (localStorage.getItem('previouslyConnected') === 'true') connect();
  // }, [connect]);

  const truncatedAddress = useTruncatedAddress(account);

  return (
    <div className={`text-slate-50 text-2xl w-full font-bold border-slate-50 py-1 custom-button ${isActive && 'bg-green-600 bg-opacity-50'}`}>
      {isActive ? (
        <div className="flex justify-around w-full">
          <div>
            <Link href={'/tokens'}>{truncatedAddress}</Link>
          </div>
          <span>~{balance} </span>
          <button type="button" >
            Îž
          </button>
        </div>
      ) : (
        <button type="button" >
          {'Sepolia-Testnet'}
        </button>
      )}
    </div>
  );
};

export default WalletData;
