"use client";

import styles from "@/styles/Primary.module.css";

import { useState, useEffect } from "react";

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
import { useAccount } from "wagmi";
import AWREGallery from "@/components/AWREGallery";
import { MintNFT } from "@/functions/MintNFT";
// import usePieceCount from "@/hooks/useNFTCount";

// import { useProvider } from "wagmi";

const Primary = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const { address, connector, isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);
  const color = "white";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSelect = (selectedValue) => {
    setSelectedOption(selectedValue);
    console.log("Selected option:", selectedValue);
  };

  const TitleValuePair = ({ title, value }: { title: string; value: string }) => {
    return (
      <div>
        <Text fontWeight='bold' color='white' fontSize='lg'>
          {title}
        </Text>
        <Text color={color} fontSize='lg'>
          {value}
        </Text>
      </div>
    );
  };

  const MintSelector = () => {
    return (
      <NumberInput width='80%' defaultValue={1} min={1} max={20} step={1} precision={0} onChange={handleSelect}>
        <NumberInputField color={color} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    );
  };

  const AddressHider = (address: string = "0x0000000000000000000000000000000000000000") => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  if (mounted) {
    return (
      <div className={styles.primary}>
        <div className={styles.container}>
          <div className={styles.main}>
            {/* <AWRECollage /> */}
            <AWREGallery />
          </div>
          <div className={styles.side}>
            <TitleValuePair title='Connected to:' value={AddressHider(address)} />
            <MintSelector />
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
        </div>
        <div className={styles.bottom}>
          <Text color={color} fontSize='2xl'>
            Art generated is trained from art created entirely by hand ...
          </Text>
        </div>
      </div>
    );
  }
};

export default Primary;
