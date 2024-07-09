"use client";
import Masonry from "react-masonry-css";

import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";

import Image from "next/image";

import image2 from "../../public/pic2.png";
import image3 from "../../public/pic3.png";
import image4 from "../../public/pic4.png";
import image5 from "../../public/pic5.png";
import image6 from "../../public/pic6.png";
import image7 from "../../public/pic7.png";
import image8 from "../../public/pic8.png";
import image9 from "../../public/pic9.png";
import image10 from "../../public/pic10.png";
import image11 from "../../public/pic11.png";
import image12 from "../../public/pic12.png";
import image13 from "../../public/pic13.png";
import image14 from "../../public/pic14.png";
import image15 from "../../public/pic15.png";
import image16 from "../../public/pic16.png";
import image17 from "../../public/pic17.png";
import image18 from "../../public/pic18.png";
import logo from "../../public/logo.png";

import { useRef } from "react";
import type { LightGallery } from "lightgallery/lightgallery";

const images = [image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18
];

export default function Home() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <>
      <div className="header-area">
        <header className="flex justify-center items-center">
          <div>
          <Image src={logo} alt="placeholder" width={300} className="m-8"/>
          </div>
        </header>
      </div>

      <div className="main-content-area">
        <main>
          <div className="flex flex-col items-center">
            <Masonry
              breakpointCols={2}
              className="my-masonry-grid flex"
              columnClassName="my-masonry-grid_column"
            >
              {images.map((image, idx) => (
                <Image
                  key={image.src}
                  src={image}
                  alt="placeholder"
                  className="mb-7"
                  placeholder="blur"
                  onClick={() => {
                    lightboxRef.current?.openGallery(idx);
                  }}
                />
              ))}
            </Masonry>

            <LightGalleryComponent
              onInit={(ref) => {
                if (ref) {
                  lightboxRef.current = ref.instance;
                }
              }}
              speed={500}
              plugins={[lgThumbnail]}
              download={false}
              dynamic
              dynamicEl={images.map((image) => ({
                src: image.src,
                thumb: image.src,
              }))}
            />
          </div>
        </main>
      </div>

      <div className="footer-area">
        <footer></footer>
      </div>
    </>
  );
}
