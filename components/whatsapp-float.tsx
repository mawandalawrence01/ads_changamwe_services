"use client"

import { MessageCircle, X, Zap, Sparkles, Rocket, Send } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const whatsappNumber = "254123456789"
  const defaultMessage = "Hi! I'm interested in CyberAds premium services. Can you help me experience the future of digital solutions?"

  useEffect(() => {
    // Show notification after 5 seconds
    const timer = setTimeout(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 4000)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const openWhatsApp = (message?: string) => {
    setIsTyping(true)
    setTimeout(() => {
      const encodedMessage = encodeURIComponent(message || defaultMessage)
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      window.open(whatsappUrl, '_blank')
      setIsOpen(false)
      setIsTyping(false)
    }, 1000)
  }

  const quickMessages = [
    { 
      text: "🖨️ Premium Printing", 
      message: "Hi! I'm interested in your premium printing services. What advanced options do you offer?",
      emoji: "🖨️",
      color: "from-purple-500 to-blue-500"
    },
    { 
      text: "🌐 Ultra-Fast Internet", 
      message: "Hello! I need access to your ultra-fast fiber internet. What are the rates?",
      emoji: "🌐",
      color: "from-cyan-500 to-blue-500"
    },
    { 
      text: "✍️ Content Creation", 
      message: "Hi! I need professional document design and typing services. Can you help?",
      emoji: "✍️",
      color: "from-emerald-500 to-cyan-500"
    },
    { 
      text: "💰 FinTech Services", 
      message: "Hello! I need M-Pesa and financial services. Do you support crypto as well?",
      emoji: "💰",
      color: "from-yellow-500 to-orange-500"
    },
    { 
      text: "⏰ Business Hours", 
      message: "Hi! What are your current business hours? Are you open 24/7?",
      emoji: "⏰",
      color: "from-pink-500 to-purple-500"
    },
    { 
      text: "📍 Hub Location", 
      message: "Hello! I need directions to your premium tech hub in Changamwe.",
      emoji: "📍",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <>
      {/* Notification Bubble */}
      {showNotification && !isOpen && (
        <div className="fixed bottom-24 right-4 z-40 glass rounded-2xl border border-white/20 p-4 w-72 animate-slide-up">
          <div className="flex items-start space-x-3">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-xl animate-pulse-glow">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm">👋 Welcome to CyberAds!</h4>
              <p className="text-xs text-gray-600 mt-1">Experience the future of digital services. Need help?</p>
            </div>
          </div>
        </div>
      )}

      {/* Revolutionary Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-40 glass rounded-3xl border border-white/20 p-6 w-96 max-w-[calc(100vw-2rem)] backdrop-blur-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-2xl animate-pulse-glow">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">CyberAds</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-xs text-gray-600">Online • Premium Support</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-2 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Quick Actions */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="h-4 w-4 text-purple-600" />
              <p className="text-sm font-medium text-gray-800">Quick Actions</p>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {quickMessages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(item.message)}
                  className={`group relative p-3 text-left rounded-2xl bg-gradient-to-r ${item.color} text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative z-10">
                    <div className="text-lg mb-1">{item.emoji}</div>
                    <p className="text-xs font-medium">{item.text}</p>
                  </div>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
            
            {/* Custom Message Button */}
            <div className="pt-4 border-t border-white/20">
              {isTyping ? (
                <div className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">Connecting to WhatsApp...</span>
                </div>
              ) : (
                <Button 
                  onClick={() => openWhatsApp()} 
                  className="w-full btn-morph bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-white border-0 rounded-2xl py-4 shadow-lg group"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <span className="font-medium">Start Premium Chat</span>
                    <Zap className="h-5 w-5 group-hover:animate-bounce" />
                  </div>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Revolutionary Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 animate-pulse-glow"></div>
          
          {/* Main Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-5 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 group magnetic"
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle className={`h-7 w-7 transition-all duration-500 ${isOpen ? 'rotate-12 scale-110' : ''}`} />
            
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
          </button>
          
          {/* Status Indicators */}
          <div className="absolute -top-2 -right-2 flex flex-col space-y-1">
            <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse shadow-lg"></div>
            {!isOpen && (
              <div className="w-3 h-3 bg-blue-400 rounded-full border border-white animate-ping"></div>
            )}
          </div>
          
          {/* Counter Animation */}
          {!isOpen && (
            <div className="absolute -top-3 -left-3 glass rounded-full px-2 py-1 border border-white/20">
              <span className="text-xs font-bold text-white">24/7</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
