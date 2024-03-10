"use client";
import { Web3ReactProvider } from "@web3-react/core";
import { type Connector } from "@web3-react/types";
import React, { type ReactNode, useEffect, useState } from "react";

import {
  ConnectionType,
  getConnection,
  PRIORITIZED_CONNECTORS,
} from "~/lib/connectors/connections";

async function connect(connector: Connector) {
  try {
    if (connector.connectEagerly) {
      await connector.connectEagerly();
    } else {
      await connector.activate();
    }
  } catch (error) {
    console.debug(`web3-react eager connection error: ${error as string}`);
  }
}

const connectEagerly = async () => {
  await connect(getConnection(ConnectionType.NETWORK).connector);
  await connect(getConnection(ConnectionType.GNOSIS_SAFE).connector);
};

export const Web3ContextProvider = ({ children }: { children: ReactNode }) => {
  const [connectionType, setConnectionType] = useState<ConnectionType | null>(
    null,
  );
  useEffect(() => {
    void connectEagerly();
  }, []);

  return (
    <Web3ReactProvider
      connectors={Object.values(PRIORITIZED_CONNECTORS).map((connector) => [
        connector.connector,
        connector.hooks,
      ])}
    >
      {children}
    </Web3ReactProvider>
  );
};
