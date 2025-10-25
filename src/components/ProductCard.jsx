function ProductCard({ image, name, price, category, onAddToCart }) {
  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`)
    alert(`${name} has been added to your cart!`)
    if (onAddToCart) {
      onAddToCart({ name, price, category })
    }
  }

  return (
    <div className="bg-dark-lighter border border-dark-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 group">
      <div className="aspect-square overflow-hidden bg-dark-border">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-accent font-medium mb-1">{category}</p>
        <h3 className="text-white font-semibold mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">${price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
