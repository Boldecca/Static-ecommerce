import { Link } from "react-router-dom"

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 md:py-32"
      style={{
        backgroundImage:
          "url('https://imgs.search.brave.com/i9zk2ArKnvMrNgQTfgKxAinlEqxGkV_fSs51VztGyro/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/NzczMTA0MS9waG90/by9yZXRhaWwtYW5k/LXRlY2hub2xvZ3kt/cmV0YWlsLWFzLWEt/c2VydmljZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9UlFx/cjVmRTRhbGNNQzdm/SnJ2Q3NJT2dWYTFL/VmMxaVlPNTczWkI5/clpGOD0')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of Technology{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            Discover cutting-edge electronics and gadgets that transform the way you live, work, and play. Premium
            quality at unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
