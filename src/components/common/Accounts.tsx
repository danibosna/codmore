import type { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'
import type { Web3ReactHooks } from '@web3-react/core'
import useWeb3 from '~/lib/useWeb3'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import useTruncatedAddress from '~/lib/useTruncatedAddress'


export function Accounts() {
  const { getBalances, getAvatarAccount, accounts } = useWeb3();
  const { data: avatar, status: avatarStatus } = getAvatarAccount;
  const { data: balances, status, isError } = getBalances;

  console.log(avatar);
  console.log(balances);
  console.log(accounts);

  if (status === 'error') return null

  if (status === 'loading') return <div>......</div>

  return (
    <div>
      <b>
        {isError
          ? 'None'
          : accounts?.map((account, i) => (
              <ul key={account} style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <li className='flex items-center gap-1'>
                  <Avatar className="custom-button">
                    <AvatarImage src={ avatarStatus === 'success' ? "https://c8.alamy.com/comp/2HWBMC7/3d-bored-ape-character-nft-prime-ape-planet-swag-monkey-portrait-avatar-for-profile-picture-blockchain-based-artwork-art-collectibles-2HWBMC7.jpg" : "https://c8.alamy.com/comp/2HWBMC7/3d-bored-ape-character-nft-prime-ape-planet-swag-monkey-portrait-avatar-for-profile-picture-blockchain-based-artwork-art-collectibles-2HWBMC7.jpg"} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span>{useTruncatedAddress(account)}</span>
                </li>
                {balances?.[i] ? `ETH: ${formatEther(balances[i]!)}` : null}
              </ul>
            ))}
      </b>
    </div>
  )
}
