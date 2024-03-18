import type { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'
import { useWeb3React, type Web3ReactHooks } from '@web3-react/core'
import useWeb3 from '~/lib/useWeb3'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import useTruncatedAddress from '~/lib/useTruncatedAddress'
import { AvatarUser } from './AvatarUser'
import useWalletStore from '~/lib/store/useWalletStore'
import { useEffect, useMemo } from 'react'


export const Accounts = () => {
  // const { accounts, balance, updateBalance, updateAccounts } = useWalletStore();
  const { getBalances, getAvatarAccount, accounts } = useWeb3();
  const { data: avatar } = getAvatarAccount;
  const { data: balance, status, isError, } = getBalances;

  // console.log(connector);
  // console.log(balance);
  // console.log(avatar);
  // console.log(accounts);

  if (status === 'error') return null

  if (status === 'loading') return <div>......</div>

  return (
    <div>
        {accounts?.map((account, i) => (
              <ul key={account} style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <li className='flex items-center gap-1'>
                  <AvatarUser />
                  <span>{useTruncatedAddress(account)}</span>
                </li>
                {balance?.[i] ? `ETH: ${formatEther(balance[i]!)}` : null}
              </ul>
        ))}
    </div>
  )
};
