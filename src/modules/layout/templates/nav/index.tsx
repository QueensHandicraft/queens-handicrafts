import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SearchBar from "./searchBar.jsx"
import Country from "./Country.jsx"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="top-0 inset-x-0 z-50 group">
      <header className="relative mx-auto duration-200 bg-white">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex flex-col md:flex-row items-center justify-end w-full h-8 text-small-regular">
          <div className="flex flex-col md:flex-row items-center gap-y-6 md:gap-x-6 justify-end">
            <LocalizedClientLink
              className="hover:text-ui-fg-base font-bold text-base mb-4 md:mb-0"
              href="/account"
              data-testid="nav-account-link"
            >
              Account
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base font-bold text-base mb-4 md:mb-0"
              href="/cart"
              data-testid="nav-cart-link"
            >
              Cart
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base font-bold text-base mb-4 md:mb-0"
              href="/help"
              data-testid="nav-help-link"
            >
              Help
            </LocalizedClientLink>
            {regions && <Country props={regions} />}
          </div>
        </nav>

        {/* Include the client-side search bar */}
        <hr className="border-t-1 border-gray-300 w-full" style={{ borderWidth: '1px' }} />

        <Suspense fallback={<div>Loading...</div>}>
          <SearchBar />
        </Suspense>

        <hr className="border-t-1 border-gray-300 w-full" style={{ borderWidth: '1px' }} />

        <nav 
        className="content-container flex flex-wrap justify-center items-center text-ui-fg-subtle"
        >
          <LocalizedClientLink
            href="/collections/armour"
            className="font-category px-4 font-inter font-medium line-h-8 text-left hover:text-ui-fg-base md:mb-0"
          >
            Armours
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/collections/clothing"
            className="font-category px-4 font-inter font-medium line-h-8 text-left hover:text-ui-fg-base md:mb-0"
          >
            Clothing
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/collections/weaponry"
            className="font-category px-4 font-inter font-medium line-h-8 text-left hover:text-ui-fg-base md:mb-0"
          >
            Weaponry
          </LocalizedClientLink>
        </nav>
        <hr className="border-t-1 border-gray-300 w-full" style={{ borderWidth: '1px' }} />
      </header>
    </div>
  )
}
