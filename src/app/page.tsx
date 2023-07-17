"use client";

import Image from "next/image";
import styles from "@/styles/Loading.module.css";

import Primary from "@/components/Primary";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Information from "@/components/Information";

import { ChakraProvider } from "@chakra-ui/react";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { mainnet, hardhat, polygon } from "wagmi/chains";

import { Text } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

import { PageType } from "../data/pages";

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
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(PageType.PRIMARY);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <h1 className={styles.loading}>Loading...</h1>;
  }

  return (
    <main>
      <ChakraProvider>
        <WagmiConfig config={config}>
          <ConnectKitProvider>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {currentPage === PageType.PRIMARY ? <Primary /> : <Information />}
            <Footer />
          </ConnectKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </main>
  );
}
