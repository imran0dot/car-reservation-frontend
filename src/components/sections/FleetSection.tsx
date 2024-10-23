import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Truck, Gem, Users } from "lucide-react"
import Title from "../widget/Title"

const fleetCategories = [
  {
    name: "Economy",
    description: "Fuel-efficient and budget-friendly options for everyday driving.",
    icon: Car,
    features: ["Compact size", "Great fuel economy", "Easy to park"],
    models: ["Toyota Corolla", "Honda Civic", "Nissan Versa"]
  },
  {
    name: "SUVs",
    description: "Spacious and versatile vehicles perfect for family trips and outdoor adventures.",
    icon: Truck,
    features: ["Ample cargo space", "Higher ground clearance", "Optional 4WD"],
    models: ["Ford Explorer", "Honda CR-V", "Toyota RAV4"]
  },
  {
    name: "Luxury",
    description: "Premium vehicles offering superior comfort, performance, and style.",
    icon: Gem,
    features: ["High-end interiors", "Advanced tech features", "Powerful engines"],
    models: ["BMW 5 Series", "Mercedes-Benz E-Class", "Audi A6"]
  },
  {
    name: "Minivans",
    description: "Ideal for group travel with maximum comfort and space.",
    icon: Users,
    features: ["Seating for 7-8", "Sliding doors", "Flexible seating arrangements"],
    models: ["Chrysler Pacifica", "Honda Odyssey", "Toyota Sienna"]
  }
]

export default function OurFleet() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Title
          batch="Fleet"
          title="Our Fleet"
          subtitle="Discover our diverse range of vehicles to suit every need and preference. From economical options to luxury rides, we've got you covered." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-4">
                  <category.icon size={24} />
                </div>
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside mb-4 text-sm text-gray-600">
                  {category.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <h4 className="font-semibold mb-2">Popular Models:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.models.map((model, i) => (
                    <Badge key={i} variant="secondary">{model}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section >
  )
}