// Sets if the example should run locally or on chain
export enum Chain {
  POLYGON,
  MAINNET,
  SEPOLIA,
}

// Inputs that configure this example to run
interface ExampleConfig {
  chain: Chain;
  rpc: {
    polygon: string;
    mainnet: string;
    sepolia: string;
  };
}

// Example Configuration
export const CurrentConfig: ExampleConfig = {
  chain: Chain.SEPOLIA,
  rpc: {
    polygon: "https://polygon-mumbai.g.alchemy.com/v2/CpTF3m1l3OPzKrBWtObN-4HKxCTNfa4L",
    mainnet: "",
    sepolia:
      "https://eth-sepolia.g.alchemy.com/v2/i-Zca_DDzENzrObKaWPYtLl7VpcLZXoK",
  },
};
