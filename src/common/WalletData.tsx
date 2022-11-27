import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { connector } from '@utils/web3.config';
import { useCallback, useEffect, useState } from 'react';
import useTruncatedAddress from '@hooks/useTruncatedAddress';
import Link from 'next/link';

const WalletData = () => {
  const [balance, setBalance] = useState(0);
  const { active, activate, deactivate, account, error, library } = useWeb3React();

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

  useEffect(() => {
    if (active) getBalance();
  }, [active, getBalance]);

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') connect();
  }, [connect]);

  const truncatedAddress = useTruncatedAddress(account);

  return (
    <div className={`flex absolute bottom-3 left-[85%] w-34 custom-button py-1 px-3 ${active && 'bg-green-600 bg-opacity-50'}`}>
      {active ? (
        <div className="flex w-full">
          <div>
            <Link href={'/tokens'}>{truncatedAddress}</Link>
          </div>
          <span>~{balance} </span>
          <button type="button" onClick={disconnect}>
            Îž
          </button>
        </div>
      ) : (
        <button type="button" onClick={connect} disabled={isUnsupportedChain}>
          {isUnsupportedChain ? 'no support' : 'Goerli Testnet'}
        </button>
      )}
    </div>
  );
};

export default WalletData;
