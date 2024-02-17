import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import MainLayout from "~/components/layouts/main-layout";
import "~/styles/globals.css";

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
  return (
    <html lang="es">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <MainLayout>{children}</MainLayout>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
