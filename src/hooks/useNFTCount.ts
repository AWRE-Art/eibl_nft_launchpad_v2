import { useEffect, useState } from "react";
import { ethers } from "ethers";

const useNFTCount = (contractAddress: string, provider: ethers.Provider): number => {
  const [NFTCount, setNFTCount] = useState<number>(0);

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
      const contract = new ethers.Contract(contractAddress, contractABI, provider);
      const result = await contract.totalSupply();

      setNFTCount(result);
    };

    fetchData();
  }, [contractAddress]);

  return NFTCount;
};

export default useNFTCount;
