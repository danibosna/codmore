import { Inter } from "next/font/google";
import { Buffer } from "buffer";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import MainLayout from "~/components/layouts/main-layout";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Web3ContextProvider } from "~/lib/Web3ContextProvider";
import "~/styles/globals.css";

interface EthereumWithNetwork extends Window {
  ethereum: {
    autoRefreshOnNetworkChange?: boolean;
  };
}

export const metadata = {
  title: "Codmore",
  description: "Software Technologies",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window !== "undefined") {
    if (window.ethereum as EthereumWithNetwork) {
      const { ethereum } = window as EthereumWithNetwork;
      ethereum.autoRefreshOnNetworkChange = false;
    }

    // Node polyfills required by WalletConnect are no longer bundled with webpack
    window.Buffer = Buffer;
  }
  return (
    <html lang="es">
      <body className={`font-sans ${inter.variable}`}>
        <Web3ContextProvider>
          <TRPCReactProvider cookies={cookies().toString()}>
            <MainLayout>{children}</MainLayout>
            <ReactQueryDevtools initialIsOpen={false} />
          </TRPCReactProvider>
        </Web3ContextProvider>
      </body>
    </html>
  );
}
