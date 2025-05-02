"use client"

import Link from "next/link"
import { useState } from "react"
import { useCart } from "@/context/CartContext"
import MiniCart from "./MiniCart"

export default function Header() {
  const [open, setOpen] = useState(false)
  const { state } = useCart()

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold">MyShop</Link>
      <div className="relative">
        <button onClick={() => setOpen(!open)} className="relative text-xl">
          🛒
          {state.cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {state.cartItems.length}
            </span>
          )}
        </button>
        {open && <MiniCart />}
      </div>
    </header>
  )
}
