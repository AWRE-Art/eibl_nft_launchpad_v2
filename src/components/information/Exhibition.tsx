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
            Ed In Between Lines
          </Text>
          <Text color={color} fontSize='md'>
            A thought-provoking exhibition orchestrated by the local mixed media artist Omar Ochoa, is more than just a
            collection of artworks. It&apos;s a profound narrative intricately woven through multiple layers of artistic
            expression and societal reflection.
          </Text>
          <Text color={color} fontSize='md'>
            The genesis of this exhibition traces back to &apos;Ed,&apos; an evocative character created by Ochoa for
            local event promotions. As people began identifying with Ed, seeing fragments of their own stories and
            struggles in him, Ochoa recognized the potential for a more expansive exploration. Motivated by this
            connection, he transformed a simple character into an immersive narrative, culminating in a substantial body
            of 41 thoughtfully curated artworks.
          </Text>
          <Text color={color} fontSize='md'>
            This exhibition is not just a visual spectacle; it&apos;s a journey that navigates through several profound
            concepts. It bravely confronts the often-unspoken struggle of being boxed in by societal expectations,
            boldly illuminating the pressure to conform that many of us grapple with. At the same time, it celebrates
            the liberating power of self-expression and the courage to follow one&apos;s passions, even when they
            diverge from the norm.
          </Text>
        </Stack>
      </div>
      <div className={styles.side}>
        <img className={styles.image} src='./exhibition/exhibition-01.jpg' alt='' />
      </div>
    </>
  );
};

export default AINFTs;
