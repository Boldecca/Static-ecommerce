"use client"

import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-[#0f1117]/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🔹 Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-2xl shadow-lg shadow-indigo-500/30 transition-transform transform group-hover:scale-110 duration-300">
              <span className="text-white font-extrabold text-xl tracking-tight drop-shadow-sm">
                T
              </span>
              {/* Soft glow on hover */}
              <div className="absolute inset-0 rounded-2xl blur-lg bg-gradient-to-br from-indigo-500/40 to-pink-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <span className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text tracking-wide group-hover:from-indigo-300 group-hover:to-pink-300 transition-all duration-300">
              TechStore
            </span>
          </Link>

          {/* 🔹 Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isActive(link.path)
                    ? "text-indigo-400 border-b-2 border-indigo-500 pb-1"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 🔹 Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 🔹 Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-3 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
