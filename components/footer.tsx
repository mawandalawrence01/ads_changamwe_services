import Link from "next/link"
import { MapPin, Phone, Clock, Mail, Wifi, Globe, Code } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                <Wifi className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CyberAds</h3>
                <p className="text-sm text-gray-400">Digital Solutions Hub</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your complete digital partner in Changamwe. From cyber services to custom software development, 
              we provide comprehensive solutions for individuals and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors duration-300">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Services
              </Link>
              <Link href="/pricing" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Pricing
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services - Cyber Services First */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Wifi className="h-4 w-4 text-green-400" />
                  <h5 className="text-green-400 font-medium text-sm">Cyber Services</h5>
                </div>
                <ul className="space-y-1 text-gray-400 text-sm ml-6">
                  <li>Internet Browsing</li>
                  <li>Printing & Photocopying</li>
                  <li>Typing Services</li>
                  <li>M-Pesa Services</li>
                  <li>Scanning & Lamination</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Code className="h-4 w-4 text-blue-400" />
                  <h5 className="text-blue-400 font-medium text-sm">Development</h5>
                </div>
                <ul className="space-y-1 text-gray-400 text-sm ml-6">
                  <li>Web Design - KSh 45,000</li>
                  <li>Mobile Applications - KSh 75,000</li>
                  <li>Web Applications - KSh 80,000</li>
                  <li>Custom Software</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Changamwe, Mombasa<br />
                    Kenya
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+254 123 456 789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">info@cyberads.co.ke</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Mon - Sat: 7:00 AM - 9:00 PM<br />
                    Sunday: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CyberAds. All rights reserved. | 
            Developed by CyberAds Development Team.
          </p>
        </div>
      </div>
    </footer>
  )
}