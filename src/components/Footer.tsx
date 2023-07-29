"use client";

import styles from "@/styles/Footer.module.css";

import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link
        color='teal.500'
        href='https://goerli.etherscan.io/address/0x3908f1d57cf1c394e342f41836dd83482724f360#code'
        isExternal
      >
        Verified Contract Address <ExternalLinkIcon mx='2px' />
      </Link>
    </div>
  );
};

export default Footer;
