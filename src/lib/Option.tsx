import React from "react";
import { GrLogout } from "react-icons/gr";
import {
  ConnectionType,
  getConnection,
  tryActivateConnector,
  tryDeactivateConnector,
} from "./connectors/connections";
import Image from "next/image";
import metaMaskIcon from '~/components/assets/icons/metaMask.svg';
import coinbaseWalletIcon from '~/components/assets/icons/Coinbase-icon.svg';
import walletConnectIcon from '~/components/assets/icons/walletConnect.svg';

export const Option = ({
  isEnabled,
  isConnected,
  connectionType,
  onActivate,
  onDeactivate,
}: {
  isEnabled: boolean;
  isConnected: boolean;
  connectionType: ConnectionType;
  onActivate: (connectionType: ConnectionType) => void;
  onDeactivate: (connectionType: null) => void;
}) => {
  const onClick = async () => {
    if (isConnected) {
      const deactivation = await tryDeactivateConnector(
        getConnection(connectionType).connector,
      );
      // undefined means the deactivation failed
      if (deactivation === undefined) {
        return;
      }
      onDeactivate(deactivation);
      return;
    }

    const activation = await tryActivateConnector(
      getConnection(connectionType).connector,
    );
    if (!activation) {
      return;
    }
    onActivate(activation);
    return;
  };

  const getConnectionIcon = (connection: ConnectionType) => {
  let icon;
  let text;
  switch (connection) {
    case ConnectionType.INJECTED:
      icon = <Image className="mx-2" src={metaMaskIcon as string} alt="" width={30} />;
      text = "MetaMask";
      break;
    case ConnectionType.COINBASE_WALLET:
      icon = <Image className="mx-2" src={coinbaseWalletIcon as string} alt="" width={30} />;
      text = "Coinbase Wallet";
      break;
    case ConnectionType.WALLET_CONNECT:
      icon = <Image className="mx-2" src={walletConnectIcon as string} alt="" width={30} />;
      text = "WalletConnect";
      break;
    default:
      break;
  }
  return (
    <div className="flex items-center text-white font-semibold text-lg">
      {icon} {text}
    </div>
  );
};

  return (
  <div className="w-full text-start">
    <button onClick={onClick} disabled={!isEnabled}>
      {isConnected ? (<div className="flex items-center"><GrLogout size={25} className="mr-2" />{"Logout"}</div>) : getConnectionIcon(connectionType)}
    </button>
  </div>
);
};
