import { Users, Target, Heart, Award, Clock, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best experience for our customers."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "You can count on us for consistent, high-quality services whenever you need them."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We continuously strive to exceed expectations and deliver exceptional results."
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "We value your time and ensure quick, efficient service without compromising quality."
    }
  ]

  const team = [
    {
      name: "Samuel Kiprotich",
      role: "Founder & Manager",
      description: "With over 10 years in the tech industry, Samuel founded CyberAds to bridge the digital divide in Changamwe."
    },
    {
      name: "Grace Wanjiku",
      role: "Customer Service Lead",
      description: "Grace ensures every customer receives personalized attention and leaves satisfied with our services."
    },
    {
      name: "David Mwangi",
      role: "Technical Specialist",
      description: "David handles all technical operations and maintains our equipment to ensure optimal performance."
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
              About <span className="text-yellow-300">CyberAds</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Serving the Changamwe community with reliable technology and business services since 2017
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">From a Vision to Reality</h3>
                <p className="text-gray-600 mb-6">
                  CyberAds was born from a simple observation: the people of Changamwe needed reliable, 
                  affordable access to technology and business services. What started as a small cyber café 
                  in 2017 has grown into a comprehensive business hub that serves hundreds of customers 
                  every month.
                </p>
                <p className="text-gray-600 mb-6">
                  Our founder, Samuel Kiprotich, noticed that students, entrepreneurs, and residents 
                  were traveling far from Changamwe to access basic services like internet browsing, 
                  printing, and document services. He envisioned a local solution that would not only 
                  provide these services but also contribute to the economic growth of our community.
                </p>
                <p className="text-gray-600">
                  Today, CyberAds stands as a testament to what's possible when technology meets 
                  community spirit. We're proud to be a part of Changamwe's growth story.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Milestones</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium">2017 - Founded</p>
                      <p className="text-sm text-gray-600">Started with 3 computers and big dreams</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium">2019 - Expansion</p>
                      <p className="text-sm text-gray-600">Added printing and stationery services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium">2021 - Digital Revolution</p>
                      <p className="text-sm text-gray-600">Upgraded to fiber internet and modern equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <p className="font-medium">2023 - Full Service Hub</p>
                      <p className="text-sm text-gray-600">Added M-Pesa and became a complete business center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white">
              <CardHeader className="text-center">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  To provide accessible, reliable, and affordable technology and business services 
                  that empower individuals and businesses in Changamwe to achieve their goals and 
                  contribute to the community's economic growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="text-center">
                <div className="bg-green-100 text-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  To be the leading technology and business services hub in Changamwe, 
                  fostering digital literacy and entrepreneurship while building a stronger, 
                  more connected community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at CyberAds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The dedicated professionals who make CyberAds a success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white text-center">
                <CardHeader>
                  <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-600" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              How CyberAds is making a difference in the Changamwe community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">1000+</div>
              <div className="text-blue-100">Students Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-blue-100">CVs Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-blue-100">Local Businesses Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
              <div className="text-blue-100">Community Access</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
