import RentalCarCard from '../widget/RentalCarCard';

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

const CarList = () => {

    // creating a demo array 
    const rentalCars: RentalCar[] = [
        {
          id: 1,
          name: "Tesla Model 3",
          image: "/placeholder.svg?height=200&width=300",
          price: 89,
          available: true,
          seats: 4,
          type: "Electric",
          year: 2023,
          specialFeature: "Autopilot"
        },
        {
          id: 2,
          name: "Toyota Camry",
          image: "/placeholder.svg?height=200&width=300",
          price: 59,
          available: true,
          seats: 5,
          type: "Hybrid",
          year: 2022,
          specialFeature: "Lane Assist"
        },
        {
          id: 3,
          name: "Ford Mustang",
          image: "/placeholder.svg?height=200&width=300",
          price: 79,
          available: false,
          seats: 4,
          type: "Gas",
          year: 2023,
          specialFeature: "Sport Mode"
        },
        {
            id: 4,
            name: "Tesla Model 4",
            image: "/placeholder.svg?height=200&width=300",
            price: 89,
            available: true,
            seats: 4,
            type: "Electric",
            year: 2023,
            specialFeature: "Autopilot"
          },
      ];
    return (
        <div className='grid grid-cols-4 gap-10'>
            {
                rentalCars.map((rentalCar, index) => <RentalCarCard key={index} car={rentalCar} />)
            }
        </div>
    );
};

export default CarList;