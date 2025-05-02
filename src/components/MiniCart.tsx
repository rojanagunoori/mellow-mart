"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"

export default function MiniCart() {
  const { state } = useCart()

  const total = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-72 p-4 z-10">
      <h2 className="font-semibold mb-2">Cart</h2>
      {state.cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul>
            {state.cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <img src={item.image} className="w-10 h-10 object-contain" alt="" />
                <span className="text-sm">{item.title.slice(0, 20)}...</span>
                <span className="text-sm">${item.price} × {item.quantity}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 font-bold">Subtotal: ${total.toFixed(2)}</p>
          <Link href="/cart" className="mt-2 block bg-blue-600 text-white text-center py-1 rounded">
            View Cart
          </Link>
        </>
      )}
    </div>
  )
}
