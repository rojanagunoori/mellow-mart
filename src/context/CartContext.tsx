"use client"

import { createContext, useContext, useReducer, ReactNode } from "react"
import { CartItem, Product } from "@/types"

type CartState = {
  cartItems: CartItem[]
}

type Action =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }

const initialState: CartState = {
  cartItems: [],
}

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.cartItems.find(item => item.id === action.payload.id)
      if (exists) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      }
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      }
    default:
      return state
  }
}

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => null,
})

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
