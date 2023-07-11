import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useSigner } from "wagmi";

const useNFTCount = (contractAddress: string): number => {
  const [pieceCount, setNFTCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const contractABI = [
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      const contract = new ethers.Contract(contractAddress, contractABI, WagmiProvider);
      const result = await contract.totalSupply();

      setNFTCount(result);
    };

    fetchData();
  }, [contractAddress]);

  return NFTCount;
};

export default useNFTCount;
