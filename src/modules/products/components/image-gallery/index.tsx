import { Image as MedusaImage } from "@medusajs/medusa"
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import MyCarousel from "./Carousel";

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 gap-y-4">
        <MyCarousel images={images} />
      </div>
    </div>
  )
}

export default ImageGallery
