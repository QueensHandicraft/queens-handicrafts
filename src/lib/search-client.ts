import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"

const endpoint =
  process.env.NEXT_PUBLIC_SEARCH_ENDPOINT || "http://127.0.0.1:7700"

// const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "test_key"

// export const searchClient = instantMeiliSearch(endpoint, apiKey)

// export const SEARCH_INDEX_NAME =
//   process.env.NEXT_PUBLIC_INDEX_NAME || "products"

// If you want to use Algolia instead then uncomment the following lines, and delete the above lines
// you should also install algoliasearch - yarn add algoliasearch

import algoliasearch from "algoliasearch/lite"

const appId = process.env.NEXT_PUBLIC_SEARCH_APP_ID || "A4M8XC900L"

const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "9784952b9610b93b93828a543c976a32"

export const searchClient = algoliasearch(appId, apiKey)

export const SEARCH_INDEX_NAME =
process.env.NEXT_PUBLIC_INDEX_NAME || "products"
