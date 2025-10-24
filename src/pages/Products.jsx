"use client"

import { useState } from "react"
import ProductCard from "../components/ProductCard"

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const products = [
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      price: 299,
      category: "Audio",
      image: "/premium-wireless-headphones.png",
    },
    {
      id: 2,
      name: "Smart Watch Pro Series 8",
      price: 449,
      category: "Wearables",
      image: "/modern-smartwatch.png",
    },
    {
      id: 3,
      name: "4K Ultra HD Action Camera",
      price: 379,
      category: "Cameras",
      image: "/action-camera.png",
    },
    {
      id: 4,
      name: "Mechanical Gaming Keyboard RGB",
      price: 159,
      category: "Gaming",
      image: "/gaming-keyboard-rgb.jpg",
    },
    {
      id: 5,
      name: "Portable Bluetooth Speaker",
      price: 129,
      category: "Audio",
      image: "/bluetooth-speaker.jpg",
    },
    {
      id: 6,
      name: "Wireless Gaming Mouse",
      price: 89,
      category: "Gaming",
      image: "/gaming-mouse.png",
    },
    {
      id: 7,
      name: "USB-C Hub Multi-Port Adapter",
      price: 69,
      category: "Accessories",
      image: "/usb-hub-adapter.jpg",
    },
    {
      id: 8,
      name: "Wireless Charging Pad",
      price: 49,
      category: "Accessories",
      image: "/wireless-charger.png",
    },
    {
      id: 9,
      name: "Professional Studio Microphone",
      price: 199,
      category: "Audio",
      image: "/studio-microphone.jpg",
    },
    {
      id: 10,
      name: "Fitness Tracker Band",
      price: 79,
      category: "Wearables",
      image: "/fitness-tracker-lifestyle.png",
    },
    {
      id: 11,
      name: "Gaming Headset with Mic",
      price: 119,
      category: "Gaming",
      image: "/gaming-headset.png",
    },
    {
      id: 12,
      name: "Webcam 1080p HD",
      price: 89,
      category: "Cameras",
      image: "/webcam-hd.jpg",
    },
  ]

  const categories = ["All", "Audio", "Gaming", "Wearables", "Cameras", "Accessories"]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="py-16 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Browse our complete collection of premium tech products
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-dark-lighter text-gray-300 hover:bg-dark-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
