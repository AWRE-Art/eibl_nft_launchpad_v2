import React, { useCallback, useEffect, useState } from "react";
import styles from "@/styles/Primary.module.css";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../data/photos";

const AWREGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

  return (
    <div>
      <div className={styles.desktop}>
        {/* <Gallery photos={photos} onClick={openLightbox} /> */}
        <Gallery photos={photos} />
      </div>
      <div className={styles.mobile}>
        {/* <Gallery photos={photos.slice(0, 4)} onClick={openLightbox} /> */}
        <Gallery photos={photos.slice(0, 4)} />
      </div>
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </div>
  );
};

export default AWREGallery;
