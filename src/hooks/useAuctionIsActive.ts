import { useState, useEffect } from "react";
import { useContractRead } from "wagmi";
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const contract_address = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS || "0000000000000000000000000000000000000000";
const abiFile = require("../abi/EdArt.json");
const parsedABI = JSON.parse(JSON.stringify(abiFile));
const iface = new ethers.Interface(parsedABI.abi);

const useAuctionIsActive = () => {
  const [auctionIsActive, setAuctionIsActive] = useState<boolean>(false);
  const contractABI = [iface.getFunction("saleIsActive")];

  const { data, isError, isLoading } = useContractRead({
    address: `0x${contract_address}`,
    abi: contractABI,
    functionName: "saleIsActive",
  });

  useEffect(() => {
    if (!isError && !isLoading && data) {
      setAuctionIsActive(Boolean(data));
    }
  }, [data, isError, isLoading]);

  return { auctionIsActive, isError, isLoading };
};

export default useAuctionIsActive;
