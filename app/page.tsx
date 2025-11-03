import { 
  Wifi, 
  Printer, 
  Scan, 
  PenTool, 
  ShoppingBag, 
  Smartphone, 
  Clock, 
  MapPin, 
  Star,
  Phone,
  ArrowRight,
  Zap,
  Sparkles,
  Rocket,
  Shield,
  Target,
  Users,
  Globe,
  Monitor,
  Code,
  Smartphone as Mobile
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const services = [
    {
      icon: Wifi,
      title: "Internet Browsing Changamwe",
      description: "High-speed fiber internet with premium workspace experience in Changamwe, Mombasa",
      price: "KSh 2/min",
      features: [
        "Ultra-fast fiber connection",
        "Premium workstations",
        "Climate-controlled environment", 
        "24/7 availability"
      ]
    },
    {
      icon: Printer,
      title: "Professional Printing Mombasa",
      description: "State-of-the-art printing technology for all your document needs in Changamwe",
      price: "KSh 5/page",
      features: [
        "Laser-quality printing",
        "Color & monochrome options",
        "Multiple paper formats",
        "Same-day delivery"
      ]
    },
    {
      icon: Scan,
      title: "Digital Services Changamwe",
      description: "Advanced scanning and document digitization services in Mombasa",
      price: "KSh 10/page",
      features: [
        "4K resolution scanning",
        "Multi-format output",
        "Instant cloud upload",
        "Bulk processing discounts"
      ]
    },
    {
      icon: PenTool,
      title: "Content Creation Services",
      description: "Professional document design and typing services in Changamwe",
      price: "KSh 20/page",
      features: [
        "CV/Resume design",
        "Business proposals",
        "Academic formatting",
        "Express delivery"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Tech Accessories Mombasa",
      description: "Premium stationery and computer accessories in Changamwe",
      price: "Competitive",
      features: [
        "Premium brands only",
        "Latest tech accessories",
        "Student discounts",
        "Warranty included"
      ]
    },
    {
      icon: Smartphone,
      title: "M-Pesa Services Changamwe",
      description: "Complete mobile money and financial services in Mombasa",
      price: "Standard rates",
      features: [
        "All mobile money platforms",
        "International transfers",
        "Bill payments",
        "Financial consulting"
      ]
    }
  ]

  const developmentServices = [
    {
      icon: Globe,
      title: "Web Design Mombasa",
      description: "Professional website design and development services starting from KSh 45,000",
      price: "From KSh 45,000",
      features: [
        "Responsive design",
        "SEO optimization",
        "Modern UI/UX",
        "Fast loading"
      ]
    },
    {
      icon: Mobile,
      title: "Mobile Apps Kenya",
      description: "Native and cross-platform mobile application development from KSh 75,000",
      price: "From KSh 75,000",
      features: [
        "iOS & Android",
        "App store deployment",
        "Push notifications",
        "API integration"
      ]
    },
    {
      icon: Monitor,
      title: "Web Applications",
      description: "Custom web application development for businesses from KSh 80,000",
      price: "From KSh 80,000",
      features: [
        "Custom business logic",
        "Database integration",
        "Admin dashboard",
        "Cloud deployment"
      ]
    }
  ]

  const testimonials = [
    {
      name: "Mary Wanjiku",
      role: "University Student",
      content: "CyberAds Changamwe is the best cyber café in Mombasa! Their fast internet and professional printing services helped me complete my research projects on time.",
      rating: 5,
      avatar: "👩‍🎓"
    },
    {
      name: "James Ochieng",
      role: "Digital Entrepreneur", 
      content: "As a business owner in Changamwe, CyberAds provides all the digital services I need - from printing to web design. Their M-Pesa services are very convenient.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Grace Muthoni",
      role: "Local Business Owner",
      content: "The team at CyberAds Changamwe designed my business website and now handle all my printing needs. Best cyber services in Mombasa!",
      rating: 5,
      avatar: "👩‍💼"
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
            
            {/* SEO-Optimized Headline */}
            <h1 className="text-5xl md:text-8xl font-bold mb-8 mt-30 leading-tight">
              <span className="block text-white drop-shadow-lg">CyberAds Changamwe</span>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl transform scale-110"></div>
                <span 
                  data-text="Mombasa's Premier Cyber Café"
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 30%, #ec4899 60%, #f59e0b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Mombasa's Premier Cyber Café
                </span>
              </div>
            </h1>

            {/* SEO-Optimized Description */}
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Your trusted <strong>cyber café in Changamwe, Mombasa</strong> offering premium 
              <strong> internet browsing, printing services, scanning, M-Pesa services</strong>, and professional 
              <strong> web design & mobile app development</strong>. Experience the best digital services in Kenya.
            </p>

            {/* Innovative CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="group btn-morph bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white border-0 text-lg px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <Rocket className="h-6 w-6 group-hover:animate-bounce" />
                  <span>Start Your Project</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button className="group glass hover:glass-dark text-white border border-white/30 text-lg px-10 py-4 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-xl">
                <a href="/services" className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <span>View All Services</span>
                  <Sparkles className="h-6 w-6 text-cyan-400 group-hover:animate-spin" />
                </a>
              </Button>
            </div>

            {/* Innovation Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {[
                { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
                { number: "1000+", label: "Happy Clients", icon: Users },
                { number: "24/7", label: "Service Available", icon: Clock },
                { number: "#1", label: "In Changamwe", icon: Target }
              ].map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6 border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Cyber Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-purple-200/50">
              <Zap className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800 font-medium">Cyber Services</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Premium Cyber Café</span>
              <span className="block text-gradient bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text">
                Services in Changamwe
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions at <strong>CyberAds Changamwe</strong> - your one-stop cyber café in Mombasa for all internet, printing, and business services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform-3d">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group card-3d glass rounded-3xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 p-4 rounded-2xl w-fit group-hover:animate-pulse-glow transition-all duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse opacity-80"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text mb-6">
                    {service.price}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full btn-morph bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 rounded-xl group-hover:shadow-xl transition-all duration-300">
                    <a href="/services">Explore Service</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-purple-200/50">
              <Code className="h-5 w-5 text-purple-400" />
              <span className="text-purple-200 font-medium">Development Services</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Professional</span>
              <span className="block text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
                Web & App Development
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Custom software solutions by <strong>CyberAds Changamwe</strong> - professional web design, mobile apps, and web applications for businesses in Mombasa and Kenya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transform-3d">
            {developmentServices.map((service, index) => (
              <div 
                key={index} 
                className="group card-3d glass rounded-3xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4 rounded-2xl w-fit group-hover:animate-pulse-glow transition-all duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse opacity-80"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text mb-6">
                    {service.price}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full btn-morph bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 rounded-xl group-hover:shadow-xl transition-all duration-300">
                    <a href="/services">Get Quote</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CyberAds Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 particles-bg"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">CyberAds Changamwe?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The most trusted cyber café and digital services provider in Mombasa, Kenya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Always available to serve your digital needs in Changamwe, Mombasa",
                gradient: "from-emerald-400 to-cyan-400"
              },
              {
                icon: Star,
                title: "Premium Quality Services", 
                description: "Enterprise-grade equipment and professional service standards in Kenya",
                gradient: "from-purple-400 to-pink-400"
              },
              {
                icon: MapPin,
                title: "Changamwe Location",
                description: "Conveniently located in Changamwe, Mombasa with easy access for all",
                gradient: "from-yellow-400 to-orange-400"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group transform hover:scale-105 transition-all duration-500">
                <div className="glass rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:animate-pulse-glow`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-blue-200/50">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Client Reviews</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read why businesses and individuals in Mombasa choose CyberAds Changamwe for their digital needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="glass rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 card-3d">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-purple-600 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-white/20">
              <Rocket className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-white font-medium">Get Started Today</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Experience
              <span className="block text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-neon">
                Mombasa's Best Cyber Café?
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Visit <strong>CyberAds Changamwe</strong> today for all your internet browsing, printing, scanning, and software development needs in Mombasa, Kenya
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="group btn-morph bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white border-0 text-xl px-12 py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 group-hover:animate-pulse" />
                  <span>Call +254 123 456 789</span>
                  <Zap className="h-6 w-6 group-hover:animate-bounce" />
                </a>
              </Button>
              
              <Button className="group glass hover:glass-dark text-white border border-white/30 text-xl px-12 py-5 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-2xl">
                <a href="/contact" className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <span>Visit Changamwe Hub</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Location Info */}
            <div className="mt-12 glass rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3 text-white/90">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="font-medium">CyberAds Changamwe, Mombasa, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}