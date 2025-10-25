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
      image:
        "https://imgs.search.brave.com/3dVXQEdFwCXLw8R6dgR1keSCPcRxJXokIEeaR90riIE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waXNj/ZXMuYmJ5c3RhdGlj/LmNvbS9pbWFnZTIv/QmVzdEJ1eV9VUy9p/bWFnZXMvcHJvZHVj/dHMvNzI4YjAzYzMt/NzA3YS00MDUyLTk0/YWEtZjIyNGZiMGI4/ZmMyLmpwZw",
    },
    {
      id: 2,
      name: "Smart Watch Pro Series 8",
      price: 449,
      category: "Wearables",
      image:
        "https://imgs.search.brave.com/lK5Mv5pjJvuAwMG3KjP6GW17bUXALH5xe9d5dFv0nm0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzQxNi80MTYveGlm/MHEvc21hcnR3YXRj/aC91LzAvYy8zOS1p/OC1ibGFjay0wNTAt/YW5kcm9pZC1pb3Mt/dGVjaGlvLXllcy1v/cmlnaW5hbC1pbWFo/YWc5YjVxOHJiY3Ro/LmpwZWc_cT03MCZj/cm9wPWZhbHNl",
    },
    {
      id: 3,
      name: "4K Ultra HD Action Camera",
      price: 379,
      category: "Cameras",
      image:
        "https://imgs.search.brave.com/W3DOYaIGOxrCQujQJCOXtRCVwKLUH5SFBGAaZW2VUEY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjF4TTR6YmNldkwu/anBn",
    },
    {
      id: 4,
      name: "Mechanical Gaming Keyboard RGB",
      price: 159,
      category: "Gaming",
      image:
        "https://imgs.search.brave.com/bu3N-4mMIUCC71ljAnea6mHMOODC07wO-VQPzL40Dl8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFVc3VONmdUMEwu/anBn",
    },
    {
      id: 5,
      name: "Portable Bluetooth Speaker",
      price: 129,
      category: "Audio",
      image:
        "https://imgs.search.brave.com/L088WCHKVXoNZbbLOZssFxT3Zoo4EhY4I-iUQquTC84/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFUdlJUcWFPdkwu/anBn",
    },
    {
      id: 6,
      name: "Wireless Gaming Mouse",
      price: 89,
      category: "Gaming",
      image:
        "https://imgs.search.brave.com/VkPxOD7CH3vZu2mwHwhtv8bzH9EmvAMCaoyiSaaqw94/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9rcmVv/LXRlY2guY29tL2Nk/bi9zaG9wL2ZpbGVz/L2JsYWNrX2QyY19w/ZHBfMS5wbmc_dj0x/NzU5MzM5MDg4Jndp/ZHRoPTEyMDA",
    },
    {
      id: 7,
      name: "USB-C Hub Multi-Port Adapter",
      price: 69,
      category: "Accessories",
      image:
        "https://imgs.search.brave.com/VlSKgY5UH1ChMvH8TjvDHtUWfmFVc8B3lfoQu1DhTYk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFzSXd0QUd1OEwu/anBn",
    },
    {
      id: 8,
      name: "Wireless Charging Pad",
      price: 49,
      category: "Accessories",
      image:
        "https://imgs.search.brave.com/QAphJpqebdUCdjoBs8IDTcO6YhweBja9WYiMe9iwVUU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFGRnRmLUlDWUwu/anBn",
    },
    {
      id: 9,
      name: "Professional Studio Microphone",
      price: 199,
      category: "Audio",
      image:
        "https://imgs.search.brave.com/lbKozcfUu3nqZ3NJlL3H8aVZIw2DhhLRWEgY0azexP8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdHVk/aW8tbWljcm9waG9u/ZS0xNzk0MjM4MS5q/cGc",
    },
    {
      id: 10,
      name: "Fitness Tracker Band",
      price: 79,
      category: "Wearables",
      image:
        "https://imgs.search.brave.com/4axOsLzUcVi7L_yefahYjD4dkMhCOz6YDXqc0-bs_Sc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8x/MS8wMy8wNS8zMy9m/aXRuZXNzLWJhbmQt/Njc2NDczOV82NDAu/anBn",
    },
    {
      id: 11,
      name: "Gaming Headset with Mic",
      price: 119,
      category: "Gaming",
      image:
        "https://imgs.search.brave.com/YQejhJ4xmz56tfMfHIUIn4uTagwl_93BVgLHKMgkz_I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF4Tmpyekc2OUwu/anBn",
    },
    {
      id: 12,
      name: "Webcam 1080p HD",
      price: 89,
      category: "Cameras",
      image:
        "https://imgs.search.brave.com/rjnQQRGdd5aFn9eGNCyu5BOk37HBoOlhEGQKycqRo3o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFrOG1vYnRmUEwu/anBn",
    },
  ]

  const categories = ["All", "Audio", "Gaming", "Wearables", "Cameras", "Accessories"]

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a1f] min-h-screen">
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
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md shadow-blue-800/30"
                  : "bg-[#1b1b21] text-gray-300 hover:bg-[#23232b]"
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
