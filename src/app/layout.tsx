import { Metadata } from "next"
import "styles/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  
  return (
    <html lang="en" data-mode="light">
      <head>

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link 
        rel="preconnect"
        href="https://fonts.gstatic.com"
        ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Jacques+Francois&display=swap"
        rel="stylesheet"
        suppressHydrationWarning
        ></link>
        </head>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
