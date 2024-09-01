import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import Image from "next/image";
import logo from "/public/queens.jpg";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

const Hero = () => {
  return (
    <div className="w-full relative flex px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 justify-center items-center">
  <div className="text-center py-5">
    <Image
      className="rounded-2xl"
      src={logo}
      height={380}
      alt="Queens Handicrafts"// Ensure you specify both width and height for better control over aspect ratio
      objectFit="fill"
    />
  </div>
</div>

  );
};

export default Hero;
