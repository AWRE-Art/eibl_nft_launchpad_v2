"use client";

import styles from "@/styles/Information.module.css";
import { Stack, Text } from "@chakra-ui/react";

const AINFTs = () => {
  const color = "white";

  return (
    <>
      <div className={styles.main}>
        <Stack spacing={4} color='yellow'>
          <Text color={color} fontSize='4xl' fontWeight='bold'>
            Web3/AI Fusion
          </Text>
          <Text color={color} fontSize='md'>
            The NFT collection showcases 41 original pieces by artist Omar Ochoa, followed by AI-generated pieces
            inspired by his style. This experiment explores the creative potential of AI and promotes artist-AI
            partnerships within the web3 ecosystem. The exhibition demonstrates the fusion of artistic skill and
            advanced technology, emphasizing the collaborative power of AI-human interaction. It invites viewers to
            contemplate the intricate relationship between human artistry, technology, and the transformative nature of
            web3.
          </Text>
        </Stack>
      </div>
      <div className={styles.side}>
        <img className={styles.image} src='./installation.jpg' alt='' />
      </div>
    </>
  );
};

export default AINFTs;
