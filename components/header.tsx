"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Wifi, Phone, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Animated gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Revolutionary Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-3 rounded-2xl shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 animate-pulse-glow">
                <Wifi className="h-7 w-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
            </div>
            <div className="relative">
              <h1 className="text-2xl font-bold text-gradient bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text">
                CyberAds
              </h1>
              <div className="flex items-center space-x-1 text-xs">
                <Sparkles className="h-3 w-3 text-purple-500 animate-pulse" />
                <span className="text-gray-600 dark:text-gray-300">Changamwe • Premium Tech Hub</span>
              </div>
            </div>
          </Link>

          {/* Modern Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact" }
            ].map((item, index) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="relative px-4 py-2 text-gray-700 dark:text-gray-200 font-medium transition-all duration-300 hover:text-purple-600 group rounded-xl hover:bg-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Futuristic CTA Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">+254 123 456 789</span>
              </div>
            </div>
            <Button className="btn-morph bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Quick Chat</span>
              </a>
            </Button>
          </div>

          {/* Innovative Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Futuristic Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 py-6' 
            : 'max-h-0 opacity-0 py-0'
        } overflow-hidden`}>
          <div className="glass rounded-3xl p-6 border border-white/20">
            <nav className="space-y-4">
              {[
                { href: "/", label: "Home", icon: "🏠" },
                { href: "/about", label: "About", icon: "📖" },
                { href: "/services", label: "Services", icon: "⚡" },
                { href: "/pricing", label: "Pricing", icon: "💎" },
                { href: "/contact", label: "Contact", icon: "📍" }
              ].map((item, index) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="flex items-center space-x-3 p-3 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-purple-600 transition-colors">
                    {item.label}
                  </span>
                  <div className="ml-auto w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-white/20">
                <div className="flex items-center space-x-2 p-3 bg-white/5 rounded-xl mb-4">
                  <Phone className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">+254 123 456 789</span>
                </div>
                <Button className="w-full btn-morph bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-lg">
                  <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                    <Zap className="h-4 w-4" />
                    <span>Start Conversation</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
