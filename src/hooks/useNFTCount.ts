import { useState, useEffect } from "react";
import { useContractRead } from "wagmi";
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const contract_address = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS || "0000000000000000000000000000000000000000";
const abiFile = require("../abi/EdArt.json");
const parsedABI = JSON.parse(JSON.stringify(abiFile));
const iface = new ethers.Interface(parsedABI.abi);

const useNFTCount = () => {
  const [NFTCount, setNFTCount] = useState<string>("");
  const contractABI = [iface.getFunction("totalSupply")];

  const { data, isError, isLoading } = useContractRead({
    address: `0x${contract_address}`,
    abi: contractABI,
    functionName: "totalSupply",
  });

  useEffect(() => {
    if (!isError && !isLoading && data) {
      setNFTCount(data.toString());
    }
  }, [data, isError, isLoading]);

  return { NFTCount, isError, isLoading };
};

export default useNFTCount;
