import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { FaBars, FaMountain } from "react-icons/fa";
import Container from "../widget/Container";


interface INavigationMenuList {
  name: string;
  path: string
}

const navigationMenuList: INavigationMenuList[] = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'about-us',
    path: '/about'
  }
]


export default function Component() {
  return (
    <header className="border-b border-b-slate-200">
      <Container>
        {/* Header  */}
        <header className="flex justify-between items-center py-5 w-full px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <FaBars className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link to="#">
                <FaMountain className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <div className="grid gap-2 py-6">
                <Link to="#" className="flex w-full items-center py-2 text-lg font-semibold">
                  Home
                </Link>
                <Link to="#" className="flex w-full items-center py-2 text-lg font-semibold">
                  About
                </Link>
                <Link to="#" className="flex w-full items-center py-2 text-lg font-semibold">
                  Services
                </Link>
                <Link to="#" className="flex w-full items-center py-2 text-lg font-semibold">
                  Portfolio
                </Link>
                <Link to="#" className="flex w-full items-center py-2 text-lg font-semibold">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>


          {/* Desktop Menu  */}
          <div className="flex justify-between w-full">
            <div className="flex justify-start items-center">
              <Link to="#" className="mr-6 hidden lg:flex">
                <FaMountain className="h-6 w-6" />
                <span className="sr-only">Car Reservation</span>
              </Link>
              <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                  {
                    navigationMenuList.map((item, index) =>
                      <NavigationMenuLink asChild key={index}>
                        <Link
                          to={item.path}
                          className="group inline-flex h-9 w-max items-center justify-center  bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 capitalize"
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>)
                  }
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <Button>Account</Button>
          </div>
        </header>
      </Container>

    </header>
  );
}
