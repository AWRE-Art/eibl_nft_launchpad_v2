"use client";

import styles from "@/styles/Header.module.css";

import { Box, Button, ButtonGroup, Link, Spacer, Stack } from "@chakra-ui/react";
import { CustomConnectButton } from "@/components/CustomConnectButton";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link href='https://www.instagram.com/awreart/' target='_blank'>
          <img className={styles.logo} src='/logo.svg' alt='AWRE logo' />
        </Link>
      </div>
      <div className={styles.right}>
        <Stack width='100%'>
          <CustomConnectButton />
          <Spacer />
          <Button maxWidth='100%' whiteSpace='normal'>
            <Link href='/redeem'>Redeem</Link>
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Header;
