import { Button } from "@chakra-ui/react";
import { ConnectKitButton } from "connectkit";

export const CustomConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        return (
          <Button maxWidth='100%' whiteSpace='normal' onClick={show}>
            {isConnected ? "Connected" : "Connect Wallet"}
          </Button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
