import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"
import sword from "/public/sword.png"
import helmet from "/public/helmet.png"
import leather from "/public/leather.png"
import clothing from "/public/clothing.png"
import armour from "/public/armour.png"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const WelcomeText = () => {
  return (
    <div className="w-full relative flex flex-col items-start px-4 sm:px-8 md:px-16 lg:px-32 py-5">
      <div className="flex flex-col">
        <Heading
          level="h2"
          style={{
            fontFamily: "'Jacques Francois', cursive",
            fontWeight: "400",
          }}
          className="py-2 text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-normal leading-none" // Using Tailwind classes for typography
          data-testid="product-title"
        >
          WELCOME TO QUEENS HANDICRAFT
        </Heading>

        <Text
          className="py-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-500 leading-7" // Using Tailwind classes for typography
          style={{
            fontFamily: "'Jacques Francois', cursive",
            fontWeight: "400",
            color: "#828282",
          }}
          data-testid="product-description"
        >
          We are your one-stop-shop for collectors of Medieval Weapons,
          Renaissance Clothing, and many other Medieval & Renaissance items. We
          have been serving the online community since 2003. We carry
          high-quality battle-ready and decorative weapons, armour, shields, and
          other weaponry of the past and present. Our site is updated daily to
          bring you the most current information on things like pre-orders and
          new products. We also upload products weekly so there is always
          something new and exciting. Use our Advanced Search option to see what
          we have added recently.{" "}
        </Text>
      </div>

      <div className="mt-10 p-2 sm:p-4 md:p-6 lg:p-8">
        {" "}
        {/* Added padding to the left */}
        <Heading
          level="h3"
          style={{
            fontFamily: "'Jacques Francois', cursive",
            fontWeight: "400",
          }}
          className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-none" // Using Tailwind classes for typography
          data-testid="category-title"
        >
          Shop by Category
        </Heading>
        <div className="flex justify-around items-center mt-8">
          {[
            { src: helmet, label: "Helmets" },
            { src: armour, label: "Armour" },
            { src: leather, label: "Leather" },
            { src: sword, label: "Sword" },
            { src: clothing, label: "Clothing" },
          ].map((category, index) => (
            <div key={index} className="flex flex-col items-center mx-2">
              <LocalizedClientLink href={`/collections/${category.label.toLowerCase()}`}>
              <Image
                src={category.src}
                alt={category.label}
                width={768}
                height={768}
                objectFit="fill"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full"
              />
              <Text
                className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-700 text-center"
                style={{
                  fontFamily: "'Jacques Francois', cursive",
                  fontWeight: "400",
                }}
                data-testid={`category-${category.label.toLowerCase()}`}
              >
                {category.label}
              </Text>
              </LocalizedClientLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WelcomeText
