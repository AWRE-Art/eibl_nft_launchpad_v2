"use client";

import Image from "next/image";

import Primary from "@/components/Primary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ChakraProvider } from "@chakra-ui/react";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { mainnet, hardhat, polygon } from "wagmi/chains";

import { Text } from "@chakra-ui/react";
import { useAccount } from "wagmi";

const config = createConfig(
  getDefaultConfig({
    appName: "ConnectKit Next.js demo",
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    //alchemyId:  process.env.NEXT_PUBLIC_ALCHEMY_ID,
    chains: [hardhat, mainnet, polygon],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  })
);

export default function Home() {
  return (
    <main>
      <ChakraProvider>
        <WagmiConfig config={config}>
          <ConnectKitProvider>
            <Header />
            <Primary />
            <Footer />
          </ConnectKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </main>
  );
}
