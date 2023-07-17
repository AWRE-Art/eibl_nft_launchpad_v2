import { Button } from "@chakra-ui/react";
import * as React from "react";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import { ethers } from "ethers";

import { Text } from "@chakra-ui/react";

export function MintNFT(numberOfTokens: number) {
  const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const abi = {
    name: "mint",
    type: "function",
    stateMutability: "payable",
    inputs: [
      {
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
    ],
    outputs: [],
  };

  const cost = ethers.parseEther("0.069");
  // console.log(cost);

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: address,
    abi: [abi],
    functionName: "mint",
    args: [numberOfTokens],
    value: cost,
  });

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <Button maxWidth='100%' whiteSpace='normal' disabled={!write || isLoading} onClick={() => write()}>
        {isLoading ? "Minting..." : "Mint"}
      </Button>
      {isSuccess && (
        <Text color='white'>
          <div>
            Successfully minted your NFT!
            <div>
              <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
            </div>
          </div>
        </Text>
      )}
      {(isPrepareError || isError) && <Text color='white'>Error: {(prepareError || error)?.message}</Text>}
    </div>
  );
}
