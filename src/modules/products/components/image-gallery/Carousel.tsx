'use client';
import React from 'react';
import Image from 'next/image';
import { Container } from "@medusajs/ui"
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel"
import { Image as MedusaImage } from "@medusajs/medusa"

type ImageGalleryProps = {
  images: MedusaImage[]
}

export default function MyCarousel({ images }: ImageGalleryProps) {

  const renderCustomThumbs = () => (
    images.map((image, index) => (
      <div key={index}> {/* Adjust styling as needed */}
        <Image
          src={image.url}
          alt="Thumbnail"
          style={{
            objectFit: "cover",
            width:"100px",
            height:"100px",
          }}
          width={30}
          height={15} // Optional: Adjust objectFit as needed
        />
      </div>
    ))
  );

return(
  <Carousel showArrows={true} renderThumbs={renderCustomThumbs}>
        {images.map((image, index) => {
          return (
            <Container
              key={image.id}
              className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
              id={image.id}
            >
              <Image
                src={image.url}
                priority={index <= 2 ? true : false}
                className="absolute inset-0 rounded-rounded"
                alt={`Product image ${index + 1}`}
                fill
                sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                style={{
                  objectFit: "cover",
                }}
              />
            </Container>
          )
        })}
        </Carousel>
)
}
