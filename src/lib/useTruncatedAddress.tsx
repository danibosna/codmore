import { useMemo } from 'react';

const useTruncatedAddress = (account: string | null | undefined): string => {
  const truncated = `${account?.slice(0, 6)}...${account?.slice(-4)}`;
  return truncated;
};

export default useTruncatedAddress;
