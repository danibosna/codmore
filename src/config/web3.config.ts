import Web3, { type SupportedProviders } from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector';

const connector = new InjectedConnector({ supportedChainIds: [11155111] });

const getLibrary = (provider: SupportedProviders) => {
  return new Web3(provider);
};

export { getLibrary, connector };
