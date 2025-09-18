import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Car, Bus, Star, Zap, Shield, ArrowRight, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Contact() {
  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 9:00 PM", icon: Clock },
    { day: "Saturday", hours: "7:00 AM - 9:00 PM", icon: Clock },
    { day: "Sunday", hours: "8:00 AM - 6:00 PM", icon: Clock },
    { day: "Public Holidays", hours: "9:00 AM - 5:00 PM", icon: Clock }
  ]

  const directions = [
    {
      method: "Matatu",
      description: "Take a matatu to Changamwe town center. We&apos;re located near the main market, opposite Changamwe Social Hall.",
      icon: Bus,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      method: "Private Car",
      description: "Drive along Changamwe Road. Look for CyberAds signage near the shopping center. Parking available.",
      icon: Car,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      method: "Walking",
      description: "We&apos;re in the heart of Changamwe, walking distance from most residential areas and the railway station.",
      icon: Navigation,
      gradient: "from-emerald-500 to-teal-500"
    }
  ]

  const contactMethods = [
    {
      icon: MapPin,
      title: "Our Location",
      primary: "Changamwe Town Center",
      secondary: "Opposite Changamwe Social Hall, Near Main Market",
      details: "Changamwe, Mombasa County, Kenya",
      gradient: "from-blue-500 to-cyan-500",
      action: { text: "Get Directions", link: "https://maps.google.com/?q=Changamwe+Town+Center,+Mombasa&navigate=yes" }
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "+254 123 456 789",
      secondary: "Available during business hours",
      details: "Quick response guaranteed",
      gradient: "from-green-500 to-emerald-500",
      action: { text: "Call Now", link: "tel:+254123456789" }
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+254 123 456 789",
      secondary: "Quick response guaranteed",
      details: "Best for urgent requests",
      gradient: "from-purple-500 to-pink-500",
      action: { text: "Chat Now", link: "https://wa.me/254123456789" }
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@cyberads.co.ke",
      secondary: "We respond within 24 hours",
      details: "For detailed inquiries",
      gradient: "from-orange-500 to-red-500",
      action: { text: "Send Email", link: "mailto:info@cyberads.co.ke" }
    }
  ]

  const landmarks = [
    {
      name: "Changamwe Social Hall",
      description: "Directly opposite our location",
      distance: "0 min walk",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Main Market",
      description: "Major shopping area",
      distance: "2 min walk",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Railway Station",
      description: "SGR Changamwe Station",
      distance: "5 min walk",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Bus Stop",
      description: "Main matatu terminus",
      distance: "Right outside",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg animate-gradient">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-500/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/20 rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white drop-shadow-lg">Visit</span>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl transform scale-110"></div>
                <span 
                  className="block text-gradient-enhanced font-extrabold tracking-tight animate-text-glow relative z-10"
                  data-text="CyberAds"
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 30%, #ec4899 60%, #f59e0b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  CyberAds
                </span>
              </div>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Find us in the 
              <span className="text-cyan-300 font-semibold"> heart of Changamwe</span>, Mombasa. 
              <span className="text-purple-300 font-semibold"> We&apos;re here</span> to serve you with 
              <span className="text-pink-300 font-semibold"> cutting-edge technology!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="group btn-morph bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white border-0 text-lg px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
                  <span>WhatsApp Us Now</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button className="group glass hover:glass-dark text-white border border-white/30 text-lg px-10 py-4 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-xl">
                <a href="https://maps.google.com/?q=Changamwe+Town+Center,+Mombasa&navigate=yes" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <span>Get Directions</span>
                  <Navigation className="h-6 w-6 text-cyan-400 group-hover:animate-spin" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-purple-200/50">
              <Phone className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800 font-medium">Get In Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Contact</span>
              <span className="block text-gradient bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text">
                Information
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us for all your digital service needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="group card-3d glass rounded-3xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="relative mb-6">
                    <div className={`bg-gradient-to-br ${method.gradient} p-4 rounded-2xl w-fit group-hover:animate-pulse-glow transition-all duration-300`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse opacity-80"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {method.title}
                  </h3>
                  
                  <div className="space-y-2 mb-6">
                    <p className="font-semibold text-gray-800">{method.primary}</p>
                    <p className="text-sm text-gray-600">{method.secondary}</p>
                    <p className="text-xs text-gray-500">{method.details}</p>
                  </div>
                  
                  <Button className="w-full btn-morph bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 rounded-xl group-hover:shadow-xl transition-all duration-300">
                    <a href={method.action.link} target={method.action.link.startsWith('http') ? '_blank' : '_self'} rel={method.action.link.startsWith('http') ? 'noopener noreferrer' : ''}>
                      {method.action.text}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 particles-bg"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Business <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Hours</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Extended hours to serve you better, almost always open!
              </p>
            </div>
            
            <div className="glass rounded-3xl p-8 border border-white/20 bg-white/5 backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-4 rounded-2xl w-fit mb-6 animate-pulse-glow">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-cyan-300">We&apos;re Open</h3>
                  
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-3 px-4 glass rounded-xl border border-white/10">
                        <span className="font-medium text-white">{schedule.day}</span>
                        <span className="text-cyan-300 font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="glass rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 p-3 rounded-xl w-fit mb-4">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-green-300 mb-3">Special Note</h4>
                    <p className="text-white/80 leading-relaxed">
                      <strong>We&apos;re almost always open!</strong> Even during holidays, 
                      we try to maintain limited hours to serve emergency needs and support our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-green-200/50">
              <MapPin className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">Location</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Us on the <span className="text-gradient bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">Map</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Changamwe for easy access from anywhere in Mombasa
            </p>
          </div>
          
          <div className="glass rounded-3xl border border-white/20 overflow-hidden bg-white/10 backdrop-blur-xl">
            {/* Placeholder for Google Maps - In production, you would embed actual Google Maps */}
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-3xl w-fit mx-auto mb-6 animate-pulse-glow">
                  <MapPin className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Map</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  CyberAds Digital Hub<br />
                  Changamwe Town Center<br />
                  Opposite Changamwe Social Hall
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-morph bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 rounded-xl">
                    <a 
                      href="https://maps.google.com/?q=Changamwe+Town+Center,+Mombasa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <MapPin className="h-5 w-5" />
                      <span>Open in Google Maps</span>
                    </a>
                  </Button>
                  <Button className="glass hover:glass-dark text-gray-800 border border-purple-300 rounded-xl">
                    <a 
                      href="https://maps.google.com/?q=Changamwe+Town+Center,+Mombasa&navigate=yes" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <Navigation className="h-5 w-5" />
                      <span>Get Directions</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Here - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 particles-bg"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How to <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Get Here</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Multiple convenient ways to reach our digital hub
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directions.map((direction, index) => (
              <div key={index} className="glass rounded-3xl p-8 border border-white/20 text-center group transform hover:scale-105 transition-all duration-500 card-3d">
                <div className={`bg-gradient-to-r ${direction.gradient} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:animate-pulse-glow`}>
                  <direction.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
                  {direction.method}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {direction.description}
                </p>
                
                <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-blue-200/50">
              <Star className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Landmarks</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nearby <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Landmarks</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Easy to find using these well-known local landmarks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landmarks.map((landmark, index) => (
              <div key={index} className="text-center group transform hover:scale-105 transition-all duration-500">
                <div className="glass rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${landmark.gradient} p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:animate-pulse-glow`}>
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {landmark.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{landmark.description}</p>
                  <div className="text-sm font-semibold text-purple-600">{landmark.distance}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact - Enhanced */}
      <section className="py-24 relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-white/20">
              <Zap className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-white font-medium">Urgent Service</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Need
              <span className="block text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-neon">
                Urgent Service?
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contact us immediately for urgent printing, typing, internet, or any emergency digital service needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="group btn-morph bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white border-0 text-xl px-12 py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <a href="https://wa.me/254123456789?text=Hi,%20I%20need%20urgent%20service" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
                  <span>Urgent WhatsApp</span>
                  <Rocket className="h-6 w-6 group-hover:animate-bounce" />
                </a>
              </Button>
              
              <Button className="group glass hover:glass-dark text-white border border-white/30 text-xl px-12 py-5 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-2xl">
                <a href="tel:+254123456789" className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-emerald-400" />
                  <span>Emergency Call</span>
                  <Shield className="h-6 w-6 text-cyan-400 group-hover:animate-spin" />
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