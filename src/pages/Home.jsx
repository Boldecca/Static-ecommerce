import HeroSection from "../components/HeroSection"
import ProductCard from "../components/ProductCard"

function Home() {
  const featuredProducts = [
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
  ]

  return (
    <div>
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore our handpicked selection of the latest and greatest tech products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-400 text-sm">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-gray-400 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
