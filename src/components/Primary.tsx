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
import { useAccount, useContractRead } from "wagmi";
import PhotoGallery from "@/components/PhotoGallery";
import { MintNFT } from "@/functions/MintNFT";
import useNFTCount from "@/hooks/useNFTCount";
import useAuctionIsActive from "@/hooks/useAuctionIsActive";

const Primary = () => {
  const { address, connector, isConnected } = useAccount();
  const { NFTCount, isErrorNFTCount, isLoadingNFTCount } = useNFTCount();
  const { auctionIsActive, isErrorAuctionIsActive, isLoadingAuctionIsActive } = useAuctionIsActive();

  const [selectedOption, setSelectedOption] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [supply, setSupply] = useState("nothing");
  const [auctionState, setAuctionState] = useState("Not Active");

  const color = "white";

  useEffect(() => {
    setMounted(true);
    setSupply(NFTCount);

    if (auctionIsActive) {
      setAuctionState("Active");
    }
  }, [NFTCount]);

  const handleSelect = (valueAsString: string, valueAsNumber: number) => {
    setSelectedOption(valueAsNumber);
    console.log("Selected option:", valueAsNumber);
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
      <NumberInput
        width='80%'
        defaultValue={selectedOption}
        min={1}
        max={20}
        step={1}
        precision={0}
        onChange={handleSelect}
      >
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

  // console.log(NFTCount);

  return (
    <div className={styles.primary}>
      <div className={styles.container}>
        <div className={styles.main}>
          <PhotoGallery />
        </div>
        <div className={styles.side}>
          <TitleValuePair title='Connected to:' value={connector ? connector.name : "Not Connected"} />
          <TitleValuePair title='Connected to:' value={AddressHider(address)} />
          <MintSelector />
          <MintNFT numberOfTokens={selectedOption} />
          <div>
            <Text color={color} fontSize='lg' fontWeight='bold'>
              Auction Status:
            </Text>
            <Text color={auctionState === "Active" ? "green" : "red"} fontSize='lg'>
              {auctionState}
            </Text>
          </div>
          <div>
            <Text color={color} fontSize='lg' fontWeight='bold'>
              Pieces left:
            </Text>
            <Text color={color} fontSize='lg'>
              {341 - parseFloat(supply.toString())}/341
            </Text>
          </div>
          <Link color='teal.500' fontSize='lg' href='https://testnets.opensea.io/collection/ed-in-between-lines'>
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
};

export default Primary;
