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
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ServiceCard from "@/components/service-card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Services() {
  const mainServices = [
    {
      icon: Wifi,
      title: "Internet Browsing",
      description: "High-speed fiber internet access for all your online needs",
      price: "KSh 2/min",
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
    },
    {
      icon: ShoppingBag,
      title: "Stationery & Supplies",
      description: "Complete range of office and school supplies",
      price: "Competitive prices",
      features: [
        "Pens, pencils, markers",
        "Notebooks and exercise books",
        "A4 printing paper",
        "Envelopes and folders",
        "Staplers and clips",
        "Calculators",
        "Rulers and geometry sets",
        "Art supplies"
      ]
    },
    {
      icon: Smartphone,
      title: "M-Pesa & Mobile Money",
      description: "Full mobile money and financial services",
      price: "Standard Safaricom rates",
      features: [
        "Send and receive money",
        "Cash deposit and withdrawal",
        "Bill payments (KPLC, Water)",
        "Airtime purchase",
        "Bank transfers",
        "PayBill services",
        "Buy Goods payments",
        "Statement printing"
      ]
    }
  ]

  const additionalServices = [
    {
      icon: FileText,
      title: "Lamination",
      description: "Protect your important documents",
      price: "KSh 20-50"
    },
    {
      icon: Camera,
      title: "Passport Photos",
      description: "Professional passport and ID photos",
      price: "KSh 100"
    },
    {
      icon: HardDrive,
      title: "Computer Accessories",
      description: "USB drives, cables, and peripherals",
      price: "Various"
    },
    {
      icon: Mouse,
      title: "Computer Repairs",
      description: "Basic computer troubleshooting",
      price: "On request"
    },
    {
      icon: Keyboard,
      title: "Data Recovery",
      description: "Recover lost files and data",
      price: "KSh 500+"
    },
    {
      icon: CreditCard,
      title: "Card Services",
      description: "ID applications and renewals",
      price: "Government rates"
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
              Our <span className="text-yellow-300">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Comprehensive digital and business services under one roof in Changamwe
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Get Quote on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Main Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core services that serve the daily needs of our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} ctaText="Learn More" ctaLink="/pricing" />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Extra services to meet all your business and personal needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-fit mx-auto mb-3">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-xl font-bold text-green-600 mb-3">{service.price}</div>
                  <Button variant="outline" size="sm" className="w-full">
                    <a href="/contact">Inquire</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to get the services you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Come to our location in Changamwe with your requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consult</h3>
              <p className="text-gray-600">Our staff will guide you on the best service options</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execute</h3>
              <p className="text-gray-600">We&apos;ll complete your service with professional quality</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deliver</h3>
              <p className="text-gray-600">Receive your completed work and make payment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Great deals for students, businesses, and regular customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white text-gray-900">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-blue-700">Student Discount</CardTitle>
                <CardDescription>For all students with valid ID</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10% OFF</div>
                <p className="text-sm text-gray-600 mb-4">On all printing and typing services</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="/contact">Claim Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-blue-700">Bulk Printing</CardTitle>
                <CardDescription>For orders over 100 pages</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15% OFF</div>
                <p className="text-sm text-gray-600 mb-4">Save on large printing jobs</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="/contact">Get Quote</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-blue-700">Business Package</CardTitle>
                <CardDescription>Monthly service bundle</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">KSh 2,000</div>
                <p className="text-sm text-gray-600 mb-4">Includes printing, typing & internet</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="/contact">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp +254 123 456 789
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <a href="/contact">Visit Our Location</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
