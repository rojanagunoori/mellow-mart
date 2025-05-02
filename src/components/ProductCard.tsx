import { Product } from "@/types"
import { useCart } from "@/context/CartContext"
import { Star } from "lucide-react" // optional: use any star icon

export default function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart()

  return (
    <div className="relative bg-white hover:bg-gray-50 transition duration-300 shadow-md hover:shadow-lg rounded-2xl overflow-hidden group border border-gray-100">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-contain p-4 group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition line-clamp-2">
          {product.title}
        </h3>

        {/* Category + Rating */}
        <div className="flex justify-between text-xs text-gray-500">
          <span className="bg-gray-100 px-2 py-1 rounded-full text-[11px]">{product.category}</span>
          <span className="flex items-center gap-1">
            <Star size={14} className="text-yellow-400" />
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>

        {/* Description preview */}
        <p className="text-sm text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 ease-in-out">
          {product.description}
        </p>

        {/* Read More arrow (only on hover) */}
        <div className="opacity-0 group-hover:opacity-100 text-blue-600 text-sm transition duration-300">
          Read More →
        </div>

        {/* Price & Cart */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-gray-800">${product.price}</span>
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-full transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
