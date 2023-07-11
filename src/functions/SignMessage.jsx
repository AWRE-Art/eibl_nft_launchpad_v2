import * as React from "react";
import { useAccount, useSignMessage } from "wagmi";
import { verifyMessage } from "ethers/lib/utils";
import { Button, Stack, Text } from "@chakra-ui/react";

export function SignMessage() {
  const recoveredAddress = React.useRef();
  const { address, connector, isConnected } = useAccount();
  const { data, error, isLoading, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data);
      recoveredAddress.current = address;
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const message = formData.get("message");
    signMessage({ message });
    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Text color='white'>{!address ? "No wallet connected" : address}</Text>
        <Text htmlFor='message' color='white'>
          Enter a message to sign
        </Text>
        <textarea id='message' name='message' placeholder='The quick brown fox…' />

        <Button colorScheme='blue' type='submit' disabled={isLoading}>
          <Text color='white'>{!isConnected ? "Check Wallet" : "Sign Message"}</Text>
        </Button>

        {data && (
          <div>
            <Text color='white'>Recovered Address: {recoveredAddress.current}</Text>
            <Text color='white'>Signature: {data}</Text>
          </div>
        )}

        <Text color='white'>{error && <div>{error.message}</div>}</Text>
      </Stack>
    </form>
  );
}
