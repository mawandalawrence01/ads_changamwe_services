import { 
  Wifi, 
  Printer, 
  Scan, 
  PenTool, 
  ShoppingBag, 
  Smartphone, 
  FileText,
  Camera,
  HardDrive,
  Mouse,
  Keyboard,
  CreditCard,
  Phone,
  ArrowRight,
  Zap,
  Sparkles,
  Star,
  Shield,
  Rocket,
  Globe,
  Monitor,
  Code,
  Smartphone as Mobile
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

// In your services/page.tsx
export const metadata = {
  title: "Cyber Services & Software Development in Changamwe | CyberAds",
  description: "Professional cyber services including internet browsing, printing, photocopying, scanning, plus web design, mobile apps, and custom software development in Changamwe, Mombasa.",
  keywords: "cyber services changamwe, printing mombasa, web design kenya, mobile app development, software development changamwe",
}

export default function Services() {
  const mainServices = [
    {
      icon: Wifi,
      title: "Internet Browsing",
      description: "High-speed fiber internet access for all your online needs",
      price: "KSh 2/min",
      gradient: "from-cyan-500 to-blue-500",
      features: [
        "Fiber optic internet connection",
        "10+ browsing stations",
        "Comfortable workspace",
        "Air-conditioned environment",
        "Research assistance available",
        "Social media access",
        "Email services",
        "Online learning support"
      ]
    },
    {
      icon: Printer,
      title: "Printing Services",
      description: "Professional printing solutions for all document types",
      price: "KSh 5/page (B&W)",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "High-quality laser printing",
        "Color printing available",
        "A4, A3, and letter sizes",
        "Photo printing",
        "Poster printing",
        "Certificate printing",
        "Business cards",
        "Flyer printing"
      ]
    },
    {
      icon: Scan,
      title: "Scanning & Photocopying",
      description: "Digital scanning and professional photocopying services",
      price: "KSh 10/page",
      gradient: "from-emerald-500 to-teal-500",
      features: [
        "High-resolution scanning",
        "PDF and image formats",
        "ID document copying",
        "Book scanning",
        "Photo digitization",
        "Bulk scanning discounts",
        "Email delivery",
        "USB storage options"
      ]
    },
    {
      icon: PenTool,
      title: "Typing & Document Services",
      description: "Professional document preparation and formatting",
      price: "KSh 20/page",
      gradient: "from-amber-500 to-orange-500",
      features: [
        "CV and resume writing",
        "Cover letter creation",
        "Business proposals",
        "Academic papers",
        "Official applications",
        "Letter writing",
        "Data entry services",
        "Document formatting"
      ]
    }
  ]

  const developmentServices = [
    {
      icon: Globe,
      title: "Web Design",
      description: "Professional website design with modern UI/UX principles",
      price: "From KSh 45,000",
      gradient: "from-blue-500 to-indigo-500",
      features: [
        "Responsive design for all devices",
        "Modern UI/UX principles",
        "SEO optimization",
        "Fast loading speeds",
        "Custom graphics and branding",
        "Content management system",
        "Social media integration",
        "Google Analytics setup"
      ]
    },
    {
      icon: Mobile,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android",
      price: "From KSh 75,000",
      gradient: "from-green-500 to-emerald-500",
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "App store deployment",
        "Push notifications",
        "Offline functionality",
        "API integration",
        "User authentication",
        "Performance optimization"
      ]
    },
    {
      icon: Monitor,
      title: "Web Applications",
      description: "Custom web applications for business automation and management",
      price: "From KSh 80,000",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Custom business logic",
        "Database integration",
        "User management systems",
        "Real-time features",
        "Payment gateway integration",
        "Admin dashboard",
        "Cloud deployment",
        "Ongoing maintenance"
      ]
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions for unique business requirements",
      price: "Custom Quote",
      gradient: "from-orange-500 to-red-500",
      features: [
        "Requirement analysis",
        "Custom development",
        "Quality assurance testing",
        "Documentation",
        "Training and support",
        "Scalable architecture",
        "Security implementation",
        "Regular updates"
      ]
    }
  ]

  const additionalServices = [
    {
      icon: ShoppingBag,
      title: "Stationery & Supplies",
      description: "Complete range of office and school supplies",
      price: "Competitive prices",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "M-Pesa & Mobile Money",
      description: "Full mobile money and financial services",
      price: "Standard Safaricom rates",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Lamination",
      description: "Protect your important documents",
      price: "KSh 20-50",
      gradient: "from-blue-400 to-indigo-400"
    },
    {
      icon: Camera,
      title: "Passport Photos",
      description: "Professional passport and ID photos",
      price: "KSh 100",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      icon: HardDrive,
      title: "Computer Accessories",
      description: "USB drives, cables, and peripherals",
      price: "Various",
      gradient: "from-gray-400 to-slate-400"
    },
    {
      icon: CreditCard,
      title: "Card Services",
      description: "ID applications and renewals",
      price: "Government rates",
      gradient: "from-violet-400 to-purple-400"
    }
  ]

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "Discuss your project requirements and goals",
      icon: ArrowRight,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "2",
      title: "Planning",
      description: "Create detailed project specifications and timeline",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "3",
      title: "Development",
      description: "Build your solution with quality and precision",
      icon: Zap,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      number: "4",
      title: "Delivery",
      description: "Launch and provide ongoing support",
      icon: Star,
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
              <span className="block text-white drop-shadow-lg">Digital Solutions</span>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl transform scale-110"></div>
                <span 
                  className="block text-gradient-enhanced font-extrabold tracking-tight animate-text-glow relative z-10"
                  data-text="& Services"
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 30%, #ec4899 60%, #f59e0b 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  & Services
                </span>
              </div>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              From <span className="text-cyan-300 font-semibold">cyber services</span> to 
              <span className="text-purple-300 font-semibold"> custom software development</span> - 
              your complete <span className="text-pink-300 font-semibold">digital transformation</span> partner
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="group btn-morph bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white border-0 text-lg px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <Rocket className="h-6 w-6 group-hover:animate-bounce" />
                  <span>Start Your Project</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cyber Services - Primary Focus */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-purple-200/50">
              <Zap className="h-5 w-5 text-purple-600" />
              <span className="text-purple-800 font-medium">Core Services</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Premium</span>
              <span className="block text-gradient bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text">
                Cyber Solutions
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Essential digital services that power Changamwe&apos;s daily operations and community needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transform-3d">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className="group card-3d glass rounded-3xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-2xl w-fit group-hover:animate-pulse-glow transition-all duration-300`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse opacity-80"></div>
                    </div>
                    <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text">
                      {service.price}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full btn-morph bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 rounded-xl group-hover:shadow-xl transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Services - Secondary Focus */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-purple-200/50">
              <Code className="h-5 w-5 text-purple-400" />
              <span className="text-purple-200 font-medium">Development Services</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Custom</span>
              <span className="block text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
                Digital Solutions
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional software development services to grow your business online
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 transform-3d">
            {developmentServices.map((service, index) => (
              <div 
                key={index} 
                className="group card-3d glass rounded-3xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-700"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-2xl w-fit group-hover:animate-pulse-glow transition-all duration-300`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse opacity-80"></div>
                    </div>
                    <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
                      {service.price}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full btn-morph bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 rounded-xl group-hover:shadow-xl transition-all duration-300">
                    Get Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 particles-bg"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Additional <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Services</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive solutions for every digital and business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="glass rounded-3xl p-6 border border-white/20 text-center group transform hover:scale-105 transition-all duration-500">
                <div className={`bg-gradient-to-r ${service.gradient} p-3 rounded-2xl w-fit mx-auto mb-4 group-hover:animate-pulse-glow`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-cyan-300 mb-4">{service.price}</div>
                <Button className="w-full glass hover:glass-dark text-white border border-white/30 rounded-xl">
                  <a href="/contact">Inquire</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 border border-blue-200/50">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Our Process</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamlined process for both cyber services and development projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group transform hover:scale-105 transition-all duration-500">
                <div className="glass rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className={`bg-gradient-to-r ${step.gradient} text-white rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center text-2xl font-bold group-hover:animate-pulse-glow`}>
                    {step.number}
                  </div>
                  <step.icon className="h-8 w-8 text-purple-600 mx-auto mb-4 group-hover:animate-bounce" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers - Enhanced */}
      <section className="py-24 relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-white/20">
              <Star className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-white font-medium">Special Offers</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Exclusive
              <span className="block text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-neon">
                Digital Deals
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Premium discounts for students, businesses, and development projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Student Discount",
                subtitle: "For all students with valid ID",
                discount: "15% OFF",
                description: "On all printing and typing services",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Web Design Package",
                subtitle: "For small businesses",
                discount: "20% OFF",
                description: "Website + hosting + 1 year support",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Business Bundle",
                subtitle: "Monthly service package",
                discount: "KSh 5,000",
                description: "Includes development consultation",
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((offer, index) => (
              <div key={index} className="glass rounded-3xl p-8 border border-white/20 text-center group transform hover:scale-105 transition-all duration-500">
                <div className={`bg-gradient-to-r ${offer.gradient} p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:animate-pulse-glow`}>
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-white/70 mb-4">{offer.subtitle}</p>
                <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                  {offer.discount}
                </div>
                <p className="text-white/60 text-sm mb-6">{offer.description}</p>
                <Button className="w-full btn-morph bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 rounded-xl">
                  <a href="/contact">Claim Offer</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 particles-bg"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-white/20">
              <Rocket className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-white font-medium">Ready to Transform?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Build Your
              <span className="block text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-neon">
                Digital Future
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              From cyber services to custom software - we&apos;ve got your digital needs covered
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="group btn-morph bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white border-0 text-xl px-12 py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 group-hover:animate-pulse" />
                  <span>WhatsApp +254 123 456 789</span>
                  <Zap className="h-6 w-6 group-hover:animate-bounce" />
                </a>
              </Button>
              
              <Button className="group glass hover:glass-dark text-white border border-white/30 text-xl px-12 py-5 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-2xl">
                <a href="/contact" className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-purple-400" />
                  <span>Visit Our Hub</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
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