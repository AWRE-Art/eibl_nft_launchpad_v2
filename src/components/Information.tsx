"use client";

import styles from "@/styles/Information.module.css";
import { Text, Box, Stack } from "@chakra-ui/react";

import { useState, useEffect } from "react";

const Information = () => {
  const color = "white";
  return (
    <div className={styles.primary}>
      <div className={styles.container}>
        <div className={styles.main}>
          <img className={styles.image} src='./omar.jpeg' alt='' />
        </div>
        <div className={styles.side}>
          <Stack spacing={4} color='yellow'>
            <Text color={color} fontSize='4xl' fontWeight='bold'>
              Ed In Between Lines
            </Text>
            <Text color={color} fontSize='lg'>
              A thought-provoking exhibition orchestrated by the local mixed media artist Omar Ochoa, is more than just
              a collection of artworks. It's a profound narrative intricately woven through multiple layers of artistic
              expression and societal reflection.
            </Text>
            <Text color={color} fontSize='lg'>
              The genesis of this exhibition traces back to 'Ed,' an evocative character created by Ochoa for local
              event promotions. As people began identifying with Ed, seeing fragments of their own stories and struggles
              in him, Ochoa recognized the potential for a more expansive exploration. Motivated by this connection, he
              transformed a simple character into an immersive narrative, culminating in a substantial body of 41
              thoughtfully curated artworks.
            </Text>
            <Text color={color} fontSize='lg'>
              This exhibition is not just a visual spectacle; it's a journey that navigates through several profound
              concepts. It bravely confronts the often-unspoken struggle of being boxed in by societal expectations,
              boldly illuminating the pressure to conform that many of us grapple with. At the same time, it celebrates
              the liberating power of self-expression and the courage to follow one's passions, even when they diverge
              from the norm.
            </Text>
            <Text color={color} fontSize='4xl' fontWeight='bold'>
              Web3/AI Fusion
            </Text>
            <Text color={color} fontSize='lg'>
              The NFT exhibition showcases 41 original pieces by artist Omar Ochoa, followed by AI-generated pieces
              inspired by his style. This experiment explores the creative potential of AI and promotes artist-AI
              partnerships within the web3 ecosystem. The exhibition demonstrates the fusion of artistic skill and
              advanced technology, emphasizing the collaborative power of AI-human interaction. It invites viewers to
              contemplate the intricate relationship between human artistry, technology, and the transformative nature
              of web3.
            </Text>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Information;
