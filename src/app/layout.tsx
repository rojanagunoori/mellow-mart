import "./globals.css"
import { Inter } from "next/font/google"
import { CartProvider } from "@/context/CartContext"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "My E-Commerce Store",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
