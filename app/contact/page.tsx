import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Car, Bus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Contact() {
  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "7:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 6:00 PM" },
    { day: "Public Holidays", hours: "9:00 AM - 5:00 PM" }
  ]

  const directions = [
    {
      method: "Matatu",
      description: "Take a matatu to Changamwe town center. We're located near the main market, opposite Changamwe Social Hall.",
      icon: Bus
    },
    {
      method: "Private Car",
      description: "Drive along Changamwe Road. Look for CyberAds signage near the shopping center. Parking available.",
      icon: Car
    },
    {
      method: "Walking",
      description: "We're in the heart of Changamwe, walking distance from most residential areas and the railway station.",
      icon: Navigation
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Visit <span className="text-yellow-300">CyberAds</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Find us in the heart of Changamwe, Mombasa. We&apos;re here to serve you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
                    <p className="text-gray-600">
                      Changamwe Town Center<br />
                      Opposite Changamwe Social Hall<br />
                      Near Main Market<br />
                      Changamwe, Mombasa County<br />
                      Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+254 123 456 789</p>
                    <p className="text-sm text-gray-500">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+254 123 456 789</p>
                    <p className="text-sm text-gray-500">Quick response guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 text-red-600 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@cyberads.co.ke</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 mr-4">
                  <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button size="lg" variant="outline">
                  <a href="tel:+254123456789" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Hours</h2>
              
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-fit">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle>We&apos;re Open</CardTitle>
                  <CardDescription>Extended hours to serve you better</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-blue-600 font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Note:</strong> We&apos;re almost always open! Even during holidays, 
                      we try to maintain limited hours to serve emergency needs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
            <p className="text-xl text-gray-600">Located in the heart of Changamwe for easy access</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Placeholder for Google Maps - In production, you would embed actual Google Maps */}
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
                <p className="text-gray-500 mb-4">
                  CyberAds, Changamwe Town Center<br />
                  Opposite Changamwe Social Hall
                </p>
                <div className="space-x-4">
                  <Button>
                    <a 
                      href="https://maps.google.com/?q=Changamwe+Town+Center,+Mombasa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                  <Button variant="outline">
                    <a 
                      href="https://maps.google.com/?q=Changamwe+Town+Center,+Mombasa&navigate=yes" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Here */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Get Here</h2>
            <p className="text-xl text-gray-600">Multiple convenient ways to reach CyberAds</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directions.map((direction, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-fit mx-auto mb-4">
                    <direction.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{direction.method}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{direction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nearby Landmarks</h2>
            <p className="text-xl text-gray-600">Easy to find using these local landmarks</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-fit mx-auto mb-3">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900">Changamwe Social Hall</h3>
              <p className="text-sm text-gray-600">Directly opposite our location</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-fit mx-auto mb-3">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900">Main Market</h3>
              <p className="text-sm text-gray-600">2 minutes walk</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-fit mx-auto mb-3">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900">Railway Station</h3>
              <p className="text-sm text-gray-600">5 minutes walk</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-full w-fit mx-auto mb-3">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900">Bus Stop</h3>
              <p className="text-sm text-gray-600">Right outside</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Urgent Service?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us immediately for urgent printing, typing, or internet needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                <a href="https://wa.me/254123456789?text=Hi,%20I%20need%20urgent%20service" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Urgent WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-3">
                <a href="tel:+254123456789" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
