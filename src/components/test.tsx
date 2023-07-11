"use client";

import styles from "@/styles/Primary.module.css";

import { MintNFT } from "@/functions/MintNFT";
import {
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const test = (color: string, connector: any, address: string, handleSelect: (selectedValue: string) => void) => {
  return (
    <div className={styles.side}>
      <div color={color} fontSize='lg'>
        <Text fontWeight='bold' color={color} fontSize='lg'>
          Connected to:{" "}
        </Text>
        <Text color={color} fontSize='lg'>
          {connector ? connector.name : "Not Connected"}
        </Text>
      </div>
      <div>
        <Text fontWeight='bold' color={color} fontSize='lg'>
          Address:{" "}
        </Text>
        <Text color={color} fontSize='lg'>
          {address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : "Not Connected"}
        </Text>
      </div>
      <NumberInput width='100%' defaultValue={1} min={1} max={20} step={1} precision={0} onChange={handleSelect}>
        <NumberInputField color={color} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <MintNFT />
      <div>
        <Text color={color} fontSize='lg' fontWeight='bold'>
          Pieces left:
        </Text>
        <Text color={color} fontSize='lg'>
          300/341
        </Text>
      </div>
      <Link color='teal.500' fontSize='lg' href='https://opensea.io/collection/mfers'>
        Check OpenSea <ExternalLinkIcon mx='2px' />
      </Link>
    </div>
  );
};

export default test;
