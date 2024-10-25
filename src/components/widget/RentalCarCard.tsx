import { CalendarIcon, CarIcon, UsersIcon, ZapIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface RentalCar {
    id: number
    name: string
    image: string
    price: number
    available: boolean
    seats: number
    type: string
    year: number
    specialFeature: string
  }

export default function RentalCarCard({ car }: { car: RentalCar }) {
  return (
    <Card className="overflow-hidden shadow-lg bg-white">
      <CardHeader className="p-0">
        <div className="relative w-full">
          <img
            src={car.image}
            alt={car.name}
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 w-full h-48"
          />
          <Badge className={`absolute rounded-none -skew-x-6 top-2 right-2 ${car.available ? 'bg-emerald-500' : 'bg-red-500'} text-white`}>
            {car.available ? 'Available' : 'Unavailable'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{car.name}</CardTitle>
        <p className="text-3xl font-semibold text-emerald-600 mb-4">${car.price}<span className="text-sm font-normal text-gray-600">/day</span></p>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div className="flex items-center">
            <UsersIcon className="h-4 w-4 mr-2 text-emerald-500" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center">
            <CarIcon className="h-4 w-4 mr-2 text-emerald-500" />
            <span>{car.type}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2 text-emerald-500" />
            <span>{car.year} Model</span>
          </div>
          <div className="flex items-center">
            <ZapIcon className="h-4 w-4 mr-2 text-emerald-500" />
            <span>{car.specialFeature}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-gray-50">
        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" disabled={!car.available}>
          {car.available ? 'Book Now' : 'Not Available'}
        </Button>
      </CardFooter>
    </Card>
  )
}