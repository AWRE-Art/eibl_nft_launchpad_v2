import { Button, Text } from "@chakra-ui/react";
import * as React from "react";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const contract_address = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS || "0000000000000000000000000000000000000000";
const abiFile = require("../abi/EdArt.json");
const parsedABI = JSON.parse(JSON.stringify(abiFile));
const iface = new ethers.Interface(parsedABI.abi);

export function MintNFT({ numberOfTokens }: { numberOfTokens: number }) {
  const contractABI = [iface.getFunction("mint(uint256)")];

  const cost_number = Number("0.069");
  const total_cost = cost_number * numberOfTokens;
  const cost = ethers.parseEther(total_cost.toString());

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: `0x${contract_address}`,
    abi: contractABI,
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
      <Button
        maxWidth='100%'
        whiteSpace='normal'
        disabled={!write || isLoading}
        onClick={() => {
          if (write) {
            write();
          }
        }}
      >
        {isLoading ? "Minting..." : "Mint"}
      </Button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
      {(isPrepareError || isError) && <Text color='white'>Error: {(prepareError || error)?.message}</Text>}
    </div>
  );
}
