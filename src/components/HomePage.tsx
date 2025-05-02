"use client"

import { useEffect, useState } from "react"
import { Product } from "@/types"
import ProductCard from "@/components/ProductCard"

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("All")
  const [sortOption, setSortOption] = useState("price-asc")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  // Filter and Sort Logic
  const filteredProducts = products
    .filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
      (category === "All" || product.category === category)
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price
      if (sortOption === "price-desc") return b.price - a.price
      if (sortOption === "rating") return b.rating.rate - a.rating.rate
      return a.title.localeCompare(b.title)
    })

  return (
    <main className="p-6">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search Products..."
          className="p-2 border rounded-md w-full sm:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          {/* Category Filter */}
          <select
            className="p-2 border rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelry</option>
            <option value="electronics">Electronics</option>
          </select>

          {/* Sort Options */}
          <select
            className="p-2 border rounded-md"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating: High to Low</option>
            <option value="title-asc">Title: A to Z</option>
            <option value="title-desc">Title: Z to A</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Skeleton Loaders */}
          {[...Array(8)].map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-300 h-60 rounded-md"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  )
}
