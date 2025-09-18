import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  price?: string
  features: string[]
  ctaText?: string
  ctaLink?: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  price,
  features,
  ctaText = "Learn More",
  ctaLink = "/services"
}: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="text-center">
        <div className="mx-auto bg-blue-100 text-blue-600 p-3 rounded-full w-fit mb-4">
          <Icon className="h-8 w-8" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {price && (
          <div className="text-2xl font-bold text-green-600 mt-2">{price}</div>
        )}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-2 text-sm text-gray-600 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button asChild className="w-full">
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
