"use client"

import { useCart } from "@/context/CartContext"

export default function CartPage() {
  const { state, dispatch } = useCart()

  const total = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {state.cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
          <img src={item.image} className="w-20 h-20 object-contain" alt={item.title} />
          <div className="flex-1 ml-4">
            <p>{item.title}</p>
            <p className="font-semibold">${item.price}</p>
            <div className="flex items-center gap-2 mt-1">
              <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity - 1 } })}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity + 1 } })}>+</button>
            </div>
          </div>
          <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>❌</button>
        </div>
      ))}
      <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
    </main>
  )
}
