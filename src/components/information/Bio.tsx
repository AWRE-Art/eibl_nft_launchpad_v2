"use client";

import styles from "@/styles/Information.module.css";
import { Stack, Text } from "@chakra-ui/react";

const EdInBetweenLines = () => {
  const color = "white";

  return (
    <>
      <div className={styles.main}>
        <img className={styles.image} src='./exhibition/omar.jpg' alt='' />
      </div>
      <div className={styles.side}>
        <Stack spacing={4} color='yellow'>
          <Text color={color} fontSize='4xl' fontWeight='bold'>
            Omar Ochoa
          </Text>
          <Text color={color} fontSize='lg'>
            J. Omar Ochoa is an artist with a diverse background, originally from Guerrero, Mexico, and now living in
            the United States. His artistic journey began in his early years, and over time, he developed a strong
            passion for various forms of art, including photography, design, printmaking, and painting.
          </Text>
          <Text color={color} fontSize='lg'>
            In 2010, Omar founded the renowned design brand AWRE where he expressed his imagination and artistic vision.
            Through this platform, he ventured into art markets, captivating audiences with his leather goods,
            hand-screened shirts, and art prints. Known for pushing artistic boundaries and conveying meaningful
            narratives through his work, Omar&apos;s talent extends beyond traditional art forms as he crafts logos and
            innovative concepts for various projects.
          </Text>
        </Stack>
      </div>
    </>
  );
};

export default EdInBetweenLines;
