import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector';
import { provider } from '../../node_modules/.pnpm/node_modules/web3-core/types/index';

const connector = new InjectedConnector({ supportedChainIds: [11155111] });

const getLibrary = (provider: provider) => {
  return new Web3(provider);
};

export { getLibrary, connector };
