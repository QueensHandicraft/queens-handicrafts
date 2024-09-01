import { Region } from "@medusajs/medusa"
import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"
import styles from "./FeaturedProducts.module.css"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  return (
    <>
      <div style={{marginTop:'2rem'}} className="w-full relative flex flex-col items-start px-8 sm:px-16 md:px-32">
        <h1 className={styles.title}>Trending Products</h1>
        <h2 className={styles.subtitle}>Recommended for you</h2>
      </div>
      <ul className={`${styles.featuredProductsList} px-8 sm:px-16 md:px-32`}>
        {collections.map((collection) => (
          collection.products.length > 0 &&
          <li key={collection.id} className={styles.collectionItem}>
            <ProductRail collection={collection} region={region} />
          </li>
        ))}
      </ul>
    </>
  )
}
