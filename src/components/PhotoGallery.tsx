import styles from "@/styles/Primary.module.css";

import Gallery from "react-photo-gallery";
import { photos } from "../data/photos";

const PhotoGallery = () => {
  return (
    <div>
      <div className={styles.desktop}>
        <Gallery photos={photos} />
      </div>
      <div className={styles.mobile}>
        <Gallery photos={photos.slice(0, 4)} />
      </div>
    </div>
  );
};

export default PhotoGallery;
