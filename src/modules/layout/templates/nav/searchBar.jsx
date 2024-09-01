"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import logo from "/public/logo.png"
import logoText from "/public/logoText.png"

import LocalizedClientLink from "@modules/common/components/localized-client-link";


function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter()

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (process.env.FEATURE_SEARCH_ENABLED) {
      if(query) router.push(`/search?query=${query}`)
      query && setQuery("");
    }
  };

  return (
    <div className="flex justify-center items-center flex-wrap py-2">
      {/* Logo containers */}
      <LocalizedClientLink href='/' style={{ cursor: "pointer", marginRight: "20px" }}>
        <Image
          src={logo}
          alt="Logo"
          width={75}
          height={75}
        />
      </LocalizedClientLink>
      <LocalizedClientLink href='/' style={{ cursor: "pointer", marginRight: "20px" }}>
        <Image
          src={logoText}
          alt="Logo Text"
          width={100}
          height={40}
        />
      </LocalizedClientLink>
      {/* Search Bar */}
      <div className="flex justify-center items-center w-3/5"> {/* Adjusted max-width here */}
        <form onSubmit={handleSearch} className="flex justify-between items-center w-full">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
            className="border-2 border-gray-400 rounded p-2 flex-grow ml-4"
          />
          <button
            className="ml-2 px-4 py-2 text-white rounded"
            style={{ background: "#A15149" }}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;


