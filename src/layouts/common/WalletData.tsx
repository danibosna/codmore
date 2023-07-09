import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { connector } from '@utils/web3.config';
import { useCallback, useEffect, useState } from 'react';
import useTruncatedAddress from '@hooks/useTruncatedAddress';
import Link from 'next/link';
import { useRouter } from "next/router";

const WalletData = () => {
  const [balance, setBalance] = useState(0);
  const { active, activate, deactivate, account, error, library } = useWeb3React();
  const router = useRouter();

  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem('previouslyConnected', 'true');
  }, [activate]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem('previouslyConnected');
  };

  const getBalance = useCallback(async () => {
    const toSet = await library.eth.getBalance(account);
    setBalance(Number((toSet / 1e18).toFixed(2)));
  }, [library?.eth, account]);

  const login = () => {
    return router.replace("/desarrollos");
  };

  useEffect(() => {
    if (active) getBalance();
  }, [active, getBalance]);

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') connect();
  }, [connect]);

  const truncatedAddress = useTruncatedAddress(account);

  return (
    <div className={`text-slate-50 text-2xl w-full font-bold border-slate-50 py-1 custom-button ${active && 'bg-green-600 bg-opacity-50'}`}>
      {active ? (
        <div className="flex justify-around w-full">
          <div>
            <Link href={'/tokens'}>{truncatedAddress}</Link>
          </div>
          <span>~{balance} </span>
          <button type="button" onClick={disconnect}>
            Îž
          </button>
        </div>
      ) : (
        <button type="button" onClick={ isUnsupportedChain ? login : connect} >
          {isUnsupportedChain ? 'login' : 'Sepolia Testnet'}
        </button>
      )}
    </div>
  );
};

export default WalletData;