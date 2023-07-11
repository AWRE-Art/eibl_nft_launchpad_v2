import { Button } from "@chakra-ui/react";
import * as React from "react";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";

import { Text } from "@chakra-ui/react";

export function MintNFT() {
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    abi: [
      {
        "name": "mint",
        "type": "function",
        "stateMutability": "payable",
        "inputs": [
          {
            "internalType": "uint256",
            "name": "numberOfTokens",
            "type": "uint256",
          },
        ],
        "outputs": [],
      },
    ],
    functionName: "mint",
    args: [1],
  });
  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <Button maxWidth='100%' disabled={!write || isLoading} onClick={() => write?.()}>
        {isLoading ? "Minting..." : "Mint"}
      </Button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
      {/* {(isPrepareError || isError) && <div>Error: {(prepareError || error)?.message}</div>} */}
      {(isPrepareError || isError) && (
        <Text color='white' fontSize='lg'>
          Error
          {/* Error: {(prepareError || error)?.message} */}
        </Text>
      )}
    </div>
  );
}
