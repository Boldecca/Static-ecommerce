function About() {
  const features = [
    {
      title: "Premium Quality",
      description: "We source only the highest quality products from trusted manufacturers worldwide.",
      icon: "✨",
    },
    {
      title: "Fast Shipping",
      description: "Get your orders delivered quickly with our expedited shipping options.",
      icon: "🚀",
    },
    {
      title: "Expert Support",
      description: "24/7 customer support from our team of tech experts ready to help you.",
      icon: "💬",
    },
    {
      title: "Best Prices",
      description: "Competitive pricing with regular deals and discounts on top products.",
      icon: "💰",
    },
  ]

  return (
    <div className="py-16 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About TechStore</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in bringing the latest technology to your doorstep
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-dark-lighter border border-dark-border rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Founded in 2020, TechStore emerged from a simple vision: to make cutting-edge technology accessible to
              everyone. What started as a small online shop has grown into a trusted destination for tech enthusiasts
              worldwide.
            </p>
            <p>
              We believe that technology should enhance lives, not complicate them. That's why we carefully curate every
              product in our catalog, ensuring it meets our high standards for quality, innovation, and value.
            </p>
            <p>
              Today, we serve over 10,000 satisfied customers across the globe, offering everything from the latest
              smartphones and laptops to smart home devices and gaming gear. Our commitment to excellence drives
              everything we do.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-dark-lighter border border-dark-border rounded-xl p-6 hover:border-primary transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            To empower individuals and businesses with innovative technology solutions that inspire creativity, boost
            productivity, and enhance everyday life. We're committed to delivering exceptional products and service that
            exceed expectations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
