"use client";

import styles from "@/styles/Footer.module.css";

import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link
        color='teal.500'
        href='https://etherscan.io/address/0x79FCDEF22feeD20eDDacbB2587640e45491b757f#code'
        isExternal
      >
        Verified Contract Address <ExternalLinkIcon mx='2px' />
      </Link>
    </div>
  );
};

export default Footer;
