import HeroSection from "../components/HeroSection"
import ProductCard from "../components/ProductCard"

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      price: 299,
      category: "Audio",
      image:
        "https://imgs.search.brave.com/YPVg486pVosORz8QFZsIZyTsTdnEw1jtQ8uYAoMIWNY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzkzLzM5Lzk1/LzM2MF9GXzQ5MzM5/OTU2NV9ZejBxOWJq/V1FpSE16RktWUVFM/TGx3ejI5YnFtUW8x/VC5qcGc",
    },
    {
      id: 2,
      name: "Smart Watch Pro Series 8",
      price: 449,
      category: "Wearables",
      image:
        "https://imgs.search.brave.com/sDntKTRvlUSShtSMPtYPJRXfDASRMKp65siym3Zw1oU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ibGFjay1zbWFy/dHdhdGNoLXdpdGgt/Y29sb3JmdWwtZGlz/cGxheS1zaG93aW5n/LWhlYXJ0LXJhdGUt/bW9uaXRvcl8xNDEx/Ny04ODQ1NjMuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw",
    },
    {
      id: 3,
      name: "4K Ultra HD Action Camera",
      price: 379,
      category: "Cameras",
      image:
        "https://imgs.search.brave.com/Uee04mA9AEQgEvhkKUyDasJhsr2RprEQwDXMCQJ2gU4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFmSW9LdEREY0wu/anBn",
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
        "https://imgs.search.brave.com/LIdaCRa_6OODmigjsDiHKnO2vQcOFdjUJouY9qiIJBg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxQnlvTE1zWERM/LmpwZw",
    },
    {
      id: 6,
      name: "Wireless Gaming Mouse",
      price: 89,
      category: "Gaming",
      image:
        "https://imgs.search.brave.com/eGnKxkOuq3aO5rGRPbqBB6lm9vaR9uBDw_-UOrpkKdA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMzMx/NDk5NDcvcGV4ZWxz/LXBob3RvLTMzMTQ5/OTQ3L2ZyZWUtcGhv/dG8tb2Ytd2lyZWxl/c3MtZ2FtaW5nLW1v/dXNlLXdpdGgtcHVy/cGxlLWFjY2VudHMu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw",
    },
    {
      id: 7,
      name: "USB-C Hub Multi-Port Adapter",
      price: 69,
      category: "Accessories",
      image:
        "https://imgs.search.brave.com/sFT-dk-3wj87_CqFuNLMLS4v11UPduOxqOjG5lI9y_4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFrQ1kzemlueEwu/anBn",
    },
    {
      id: 8,
      name: "Wireless Charging Pad",
      price: 49,
      category: "Accessories",
      image:
        "https://imgs.search.brave.com/SFNfPBf2ia352Y7E_15I8ARlbtM2UutxhDxp9OrW7zQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxRDVQc3JuaVZM/LmpwZw",
    },
  ]

  return (
    <div>
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore our handpicked selection of the latest and greatest tech products
            </p>
          </div>

          <div className="bg-gray-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-16 bg-gray-800">
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
