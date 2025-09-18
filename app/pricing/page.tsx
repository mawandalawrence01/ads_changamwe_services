import { Check, Clock, Printer, Scan, PenTool, Wifi, Smartphone, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Pricing() {
  const internetPricing = [
    { duration: "30 minutes", price: "KSh 60", popular: false },
    { duration: "1 hour", price: "KSh 120", popular: true },
    { duration: "2 hours", price: "KSh 200", popular: false },
    { duration: "Half day (4 hours)", price: "KSh 350", popular: false },
    { duration: "Full day (8 hours)", price: "KSh 600", popular: false }
  ]

  const printingPricing = [
    { service: "Black & White (A4)", price: "KSh 5", unit: "per page" },
    { service: "Color Printing (A4)", price: "KSh 20", unit: "per page" },
    { service: "Black & White (A3)", price: "KSh 10", unit: "per page" },
    { service: "Color Printing (A3)", price: "KSh 40", unit: "per page" },
    { service: "Passport Photos", price: "KSh 100", unit: "per set" },
    { service: "Photo Printing (4x6)", price: "KSh 30", unit: "per photo" }
  ]

  const scanningPricing = [
    { service: "Document Scanning", price: "KSh 10", unit: "per page" },
    { service: "ID Scanning/Copying", price: "KSh 20", unit: "per ID" },
    { service: "Photo Scanning", price: "KSh 50", unit: "per photo" },
    { service: "Book Scanning", price: "KSh 15", unit: "per page" },
    { service: "Bulk Scanning (50+ pages)", price: "KSh 8", unit: "per page" }
  ]

  const typingPricing = [
    { service: "CV/Resume Typing", price: "KSh 200", unit: "per CV" },
    { service: "Cover Letter", price: "KSh 150", unit: "per letter" },
    { service: "General Typing", price: "KSh 20", unit: "per page" },
    { service: "Data Entry", price: "KSh 5", unit: "per entry" },
    { service: "Business Proposal", price: "KSh 500", unit: "per proposal" },
    { service: "Academic Paper", price: "KSh 30", unit: "per page" }
  ]

  const otherServices = [
    { service: "Lamination (A4)", price: "KSh 20", unit: "per sheet" },
    { service: "Lamination (A3)", price: "KSh 40", unit: "per sheet" },
    { service: "Binding (Spiral)", price: "KSh 50", unit: "per document" },
    { service: "Binding (Hardcover)", price: "KSh 200", unit: "per document" },
    { service: "USB Flash Drive (8GB)", price: "KSh 800", unit: "each" },
    { service: "USB Flash Drive (16GB)", price: "KSh 1,200", unit: "each" },
    { service: "Computer Cables", price: "KSh 300-800", unit: "each" },
    { service: "Data Recovery", price: "KSh 500+", unit: "per service" }
  ]

  const packages = [
    {
      name: "Student Package",
      price: "KSh 500",
      period: "per month",
      description: "Perfect for students with regular printing and internet needs",
      features: [
        "10 hours of internet access",
        "100 pages of B&W printing",
        "20 pages of scanning",
        "2 CV typing sessions",
        "10% discount on all services",
        "Priority during exam periods"
      ],
      popular: true
    },
    {
      name: "Business Package",
      price: "KSh 2,000",
      period: "per month",
      description: "Comprehensive package for small businesses and entrepreneurs",
      features: [
        "30 hours of internet access",
        "300 pages of B&W printing",
        "50 pages of color printing",
        "100 pages of scanning",
        "Unlimited typing services",
        "M-Pesa transaction support",
        "Business document templates",
        "Priority customer service"
      ],
      popular: false
    },
    {
      name: "Professional Package",
      price: "KSh 3,500",
      period: "per month",
      description: "For professionals requiring extensive services",
      features: [
        "50 hours of internet access",
        "500 pages of B&W printing",
        "100 pages of color printing",
        "200 pages of scanning",
        "Unlimited typing & formatting",
        "Professional binding services",
        "Document design services",
        "24/7 priority support",
        "Free lamination (up to 20 sheets)"
      ],
      popular: false
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
              Transparent <span className="text-yellow-300">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Affordable rates for all your cyber café and business service needs
            </p>
          </div>
        </div>
      </section>

      {/* Internet Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Wifi className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Internet Browsing</h2>
            <p className="text-xl text-gray-600">High-speed fiber internet with comfortable workstations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {internetPricing.map((plan, index) => (
              <Card key={index} className={`${plan.popular ? 'ring-2 ring-blue-500 bg-blue-50' : 'bg-white'} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader className="text-center">
                  {plan.popular && (
                    <div className="bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full mb-2">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-lg">{plan.duration}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">{plan.price}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Printing & Scanning */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Printing */}
            <div>
              <div className="text-center mb-8">
                <div className="bg-green-100 text-green-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Printer className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Printing Services</h3>
                <p className="text-gray-600">High-quality printing for all your document needs</p>
              </div>
              
              <div className="space-y-4">
                {printingPricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.service}</h4>
                      <p className="text-sm text-gray-600">{item.unit}</p>
                    </div>
                    <div className="text-lg font-bold text-green-600">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scanning */}
            <div>
              <div className="text-center mb-8">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Scan className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Scanning & Copying</h3>
                <p className="text-gray-600">Professional scanning and digital services</p>
              </div>
              
              <div className="space-y-4">
                {scanningPricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.service}</h4>
                      <p className="text-sm text-gray-600">{item.unit}</p>
                    </div>
                    <div className="text-lg font-bold text-purple-600">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typing & Other Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Typing */}
            <div>
              <div className="text-center mb-8">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <PenTool className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Typing Services</h3>
                <p className="text-gray-600">Professional document typing and formatting</p>
              </div>
              
              <div className="space-y-4">
                {typingPricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg border shadow-sm">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.service}</h4>
                      <p className="text-sm text-gray-600">{item.unit}</p>
                    </div>
                    <div className="text-lg font-bold text-orange-600">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Services */}
            <div>
              <div className="text-center mb-8">
                <div className="bg-red-100 text-red-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Camera className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Other Services</h3>
                <p className="text-gray-600">Additional services and supplies</p>
              </div>
              
              <div className="space-y-4">
                {otherServices.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg border shadow-sm">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.service}</h4>
                      <p className="text-sm text-gray-600">{item.unit}</p>
                    </div>
                    <div className="text-lg font-bold text-red-600">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M-Pesa Rates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-green-100 text-green-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Smartphone className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">M-Pesa Services</h2>
            <p className="text-xl text-gray-600">All M-Pesa services at standard Safaricom rates</p>
          </div>

          <Card className="max-w-2xl mx-auto bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Standard Safaricom Rates Apply</CardTitle>
              <CardDescription>No additional charges for M-Pesa transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Send Money</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Withdraw Cash</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Buy Airtime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Pay Bills</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Bank Transfers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Statement Printing</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Monthly Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Monthly Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save money with our monthly service packages designed for regular customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`${pkg.popular ? 'ring-2 ring-blue-500 bg-blue-50' : 'bg-white'} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader className="text-center">
                  {pkg.popular && (
                    <div className="bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full mb-4">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                  <div className="text-sm text-gray-600">{pkg.period}</div>
                  <CardDescription className="mt-2">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                    <a href="/contact">Choose Package</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Discounts */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Discounts</h2>
            <p className="text-xl text-blue-100">Great savings for students and bulk orders</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white text-gray-900">
              <CardHeader className="text-center">
                <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8" />
                </div>
                <CardTitle>Student Discount</CardTitle>
                <CardDescription>Valid student ID required</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10% OFF</div>
                <p className="text-sm text-gray-600">All printing and typing services</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900">
              <CardHeader className="text-center">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Printer className="h-8 w-8" />
                </div>
                <CardTitle>Bulk Orders</CardTitle>
                <CardDescription>100+ pages at once</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15% OFF</div>
                <p className="text-sm text-gray-600">On all printing services</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900">
              <CardHeader className="text-center">
                <div className="bg-green-100 text-green-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Scan className="h-8 w-8" />
                </div>
                <CardTitle>Early Bird</CardTitle>
                <CardDescription>Before 9 AM weekdays</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5% OFF</div>
                <p className="text-sm text-gray-600">All services except M-Pesa</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us for special pricing on large projects or custom requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              <a href="https://wa.me/254123456789" target="_blank" rel="noopener noreferrer">
                Get Quote on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <a href="/contact">Visit Our Office</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
