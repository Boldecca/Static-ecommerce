function About() {
  const features = [
    {
      title: "Premium Quality",
      description:
        "We source only the highest quality products from trusted manufacturers worldwide.",
      icon: "✨",
    },
    {
      title: "Fast Shipping",
      description:
        "Get your orders delivered quickly with our expedited shipping options.",
      icon: "🚀",
    },
    {
      title: "Expert Support",
      description:
        "24/7 customer support from our team of tech experts ready to help you.",
      icon: "💬",
    },
    {
      title: "Best Prices",
      description:
        "Competitive pricing with regular deals and discounts on top products.",
      icon: "💰",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a1f] text-gray-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-blue-500">TechStore</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in bringing the latest technology to your doorstep.
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-[#15151a] border border-gray-700/50 rounded-2xl p-8 md:p-12 mb-16 shadow-lg shadow-black/30">
          <h2 className="text-3xl font-semibold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Founded in <span className="text-blue-400 font-medium">2020</span>, TechStore
              started with a mission to make cutting-edge technology accessible to
              everyone. What began as a small online shop has grown into a trusted
              global destination for tech enthusiasts.
            </p>
            <p>
              We believe that technology should enhance lives, not complicate them.
              Every product is handpicked for quality, innovation, and value.
            </p>
            <p>
              Today, we proudly serve over{" "}
              <span className="text-blue-400 font-medium">10,000+</span> satisfied customers,
              providing everything from the latest gadgets to gaming gear — all with
              reliability and style.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-white text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1d1d23] border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/70 transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-blue-500/20"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-10 md:p-14 text-center shadow-lg shadow-blue-800/30">
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            To empower individuals and businesses with innovative technology
            solutions that inspire creativity, boost productivity, and enhance
            everyday life. We're dedicated to delivering exceptional products and
            unmatched customer experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
