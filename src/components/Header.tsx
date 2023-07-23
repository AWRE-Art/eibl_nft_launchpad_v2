"use client";

import styles from "@/styles/Header.module.css";
import Image from "next/image";

import { Button, Link, Spacer, Stack } from "@chakra-ui/react";
import { CustomConnectButton } from "@/components/CustomConnectButton";

import { PageType } from "../data/pages";

const Header = ({
  currentPage,
  setCurrentPage,
}: {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}) => {
  const PageButton = (page: PageType) => {
    switch (page) {
      case PageType.PRIMARY:
        return (
          <Button maxWidth='100%' whiteSpace='normal' onClick={() => setCurrentPage(PageType.INFO)}>
            Information
          </Button>
        );
      case PageType.INFO:
        return (
          <Button maxWidth='100%' whiteSpace='normal' onClick={() => setCurrentPage(PageType.PRIMARY)}>
            Mint NFT
          </Button>
        );
      default:
        break;
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link href='https://www.instagram.com/awreart/' target='_blank'>
          <img className={styles.logo} src='/logos/logo.svg' alt='AWRE logo' />
        </Link>
      </div>
      <div className={styles.right}>
        <Stack width='100%'>
          <CustomConnectButton />
          <Spacer />
          {PageButton(currentPage)}
        </Stack>
      </div>
    </div>
  );
};

export default Header;
