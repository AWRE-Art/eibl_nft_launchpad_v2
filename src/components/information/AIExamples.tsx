import { useState, useEffect } from "react";
import styles from "@/styles/Information.module.css";
import { Stack, Text } from "@chakra-ui/react";

const ai_image_url = (index: number) => {
  const base_url = "./ai/ai-";
  const indexed_url = `${base_url}${index.toString().padStart(2, "0")}.png`;
  return indexed_url;
};

const AIExamples = () => {
  const color = "white";
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentImageURL, setCurrentImageURL] = useState(ai_image_url(currentIndex));

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex > 9) {
        setCurrentIndex(1);
        setCurrentImageURL(ai_image_url(currentIndex));
        console.log(currentImageURL);
      } else {
        setCurrentIndex(currentIndex + 1);
        setCurrentImageURL(ai_image_url(currentIndex));
        console.log(currentImageURL);
      }
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [currentIndex]);

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
        <Text color={color} fontSize='md'>
          {currentImageURL}
        </Text>
        <img className={styles.image} src={currentImageURL} alt='' />
      </div>
    </>
  );
};

export default AIExamples;
