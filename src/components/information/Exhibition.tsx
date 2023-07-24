"use client";

import styles from "@/styles/Information.module.css";
import { Stack, Text } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const images = [
  { image: "./exhibition/exhibition-01.jpg" },
  { image: "./exhibition/exhibition-02.jpg" },
  // { image: "./exhibition/exhibition-03.jpg" },
  { image: "./exhibition/exhibition-04.jpg" },
  { image: "./exhibition/exhibition-05.jpg" },
  { image: "./exhibition/exhibition-07.jpg" },
];

const Exhibition = () => {
  const color = "white";

  return (
    <>
      <div className={styles.main}>
        {/* <img className={styles.image} src='./exhibition/exhibition-01.jpg' alt='' /> */}
        <Carousel>
          {images.map((object, index) => (
            <div key={index}>
              <img className={styles.image} src={object.image} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.side}>
        <Stack spacing={4} color='yellow'>
          <Text color={color} fontSize='4xl' fontWeight='bold'>
            Ed In Between Lines
          </Text>
          <Text color={color} fontSize='lg'>
            A thought-provoking exhibition orchestrated by the local mixed media artist Omar Ochoa, is more than just a
            collection of artworks. It&apos;s a profound narrative intricately woven through multiple layers of artistic
            expression and societal reflection.
          </Text>
          <Text color={color} fontSize='lg'>
            The genesis of this exhibition traces back to &apos;Ed,&apos; an evocative character created by Ochoa for
            local event promotions. As people began identifying with Ed, seeing fragments of their own stories and
            struggles in him, Ochoa recognized the potential for a more expansive exploration. Motivated by this
            connection, he transformed a simple character into an immersive narrative, culminating in a substantial body
            of 41 thoughtfully curated artworks.
          </Text>
          <Text color={color} fontSize='lg'>
            This exhibition is not just a visual spectacle; it&apos;s a journey that navigates through several profound
            concepts. It bravely confronts the often-unspoken struggle of being boxed in by societal expectations,
            boldly illuminating the pressure to conform that many of us grapple with. At the same time, it celebrates
            the liberating power of self-expression and the courage to follow one&apos;s passions, even when they
            diverge from the norm.
          </Text>
          <Text color={color} fontSize='lg'>
            More than anything, &apos;Ed in Between Lines&apos; serves as a symbolic reflection of our innermost selves.
            It captures the universal human yearning for freedom, encapsulating the inherent desire within all of us to
            break free from our internal constraints. Each piece in the exhibition serves as a mirror, offering a moment
            for introspection and encouraging us to confront and embrace our individual truths.
          </Text>
        </Stack>
      </div>
    </>
  );
};

export default Exhibition;
