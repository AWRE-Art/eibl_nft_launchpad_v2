"use client";

import styles from "@/styles/Information.module.css";
import { Stack, Text } from "@chakra-ui/react";

const EdInBetweenLines = () => {
  const color = "white";

  return (
    <>
      <div className={styles.main}>
        <img className={styles.image} src='./omar.jpg' alt='' />
      </div>
      <div className={styles.side}>
        <Stack spacing={4} color='yellow'>
          <Text color={color} fontSize='4xl' fontWeight='bold'>
            Omar Ochoa
          </Text>
          <Text color={color} fontSize='md'>
            J. Omar Ochoa is an artist with a diverse background, originally from Guerrero, Mexico, and now living in
            the United States. His artistic journey began in his early years, and over time, he developed a strong
            passion for various forms of art, including photography, design, printmaking, and painting.
          </Text>
          <Text color={color} fontSize='md'>
            In 2010, Omar founded the renowned design brand AWRE where he expressed his imagination and artistic vision.
            Through this platform, he ventured into art markets, captivating audiences with his leather goods,
            hand-screened shirts, and art prints. Known for pushing artistic boundaries and conveying meaningful
            narratives through his work, Omar&apos;s talent extends beyond traditional art forms as he crafts logos and
            innovative concepts for various projects.
          </Text>
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
    </>
  );
};

export default EdInBetweenLines;
