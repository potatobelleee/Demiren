"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi,faConciergeBell, faUserFriends, faSmokingBan, faParking, faUtensils, faBreadSlice, faBed, faSignHanging} from '@fortawesome/free-solid-svg-icons';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useRouter } from "next/navigation";




  
export default function Home() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/signin"); 
  };

  const handleRegister = () => {
    router.push("/register"); 
  };

  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
  ]


  return (
    
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between text-white px-6 py-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png" 
            alt="Company Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold">DEMIREN HOTEL AND RESTAURANT</h1>
        </div>
        <div className="flex items-center space-x-4">
        <Button variant="link" style={{ color: "white" }} onClick={handleRegister}>Register</Button>
        
        <Button variant="link" style={{ color: "white" }} onClick={handleSignIn}>Login</Button>
     
      </div>
      </header>

{/* Section 1: Introduction */}
<section className="bg-[#F5EFE7] p-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-18 pt-28 ">
  {/* Left Column - Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="/assets/demerin.jpeg"
      alt="Demiren Hotel"
      className="w-[600px] h-auto rounded-lg shadow-lg"
    />
</div>

      {/* Right Column - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 ">
        <h2 className="text-2xl font-bold">Welcome to Demiren Hotel</h2>
        <p className="mt-4 text-lg">
        Set in Cagayan de Oro, within less than 1 km of Centrio Mall and a 13-minute walk of Department of Foreign Affairs – Cagayan de Oro, Demiren Hotel offers accommodation with a restaurant and free WiFi throughout the property as well as free private parking for guests who drive. The property is around 1.9 km from Limketkai Center, 1.7 km from The Atrium and 5.2 km from SM City Cagayan De Oro. The accommodation features room service and a 24-hour front desk for guests.    </p>
        <p className="mt-4 text-lg">
        The rooms in the hotel are equipped with a kettle. All rooms come with
    a private bathroom with a bidet, free toiletries and a hairdryer. The units will
    provide guests with air conditioning, a safety deposit box and a 
    flat-screen TV.
        </p>
        <div className="mt-8">
      <p className="text-xl font-bold">Most Popular Facilities</p>
      <div className="grid grid-cols-3 gap-x-8 gap-y-4 mt-4">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faWifi} className="w-5 h-5" />
          <p className="text-sm">Free WiFi</p>
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faConciergeBell} className="w-5 h-5" />
          <p className="text-sm">Room Service</p>
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faUserFriends} className="w-5 h-5" />
          <p className="text-sm">Family Rooms</p>
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faSmokingBan} className="w-5 h-5" />
          <p className="text-sm">Non-Smoking</p>
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faParking} className="w-5 h-5" />
          <p className="text-sm">Free Parking</p>
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faUtensils} className="w-5 h-5" />
          <p className="text-sm">Restaurant</p>
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBreadSlice} className="w-5 h-5" />
          <p className="text-sm">Breakfast</p>
        </div>
      </div>
    </div>
      </div>
</section>

{/* Section 2: Carousel with Images */}
 <section className=" p-8  flex flex-col items-center">
        <h2 className="text-2xl font-bold color text-white">Our Gallery</h2>
        <Carousel className="w-full mt-4 max-w-lg">
          <CarouselContent>
            {/* Map through the images array */}
            {images.map((src, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-2">
                      <Image
                        src={src}
                        alt={`Carousel Image ${index + 1}`}
                        width={300}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

{/* Section 3: Room Types */}
      <section className=" p-8">
        <h2 className="text-2xl font-bold colors text-white">Room Types</h2>
        <div>
        <Card className="p-8">
          <Table>
  <TableCaption>List of rooms.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-1/2 text-left">Room Type</TableHead>
      <TableHead className="w-1/2 text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  <TableRow>
  <TableCell className="font-medium w-1/2 text-left">
    Ngalan sa room
  </TableCell>
  <TableCell className="w-1/2 text-right">
    <div className="flex justify-end gap-2">
      <Button className="bg-[#213555] text-white px-4 py-2 rounded-lg hover:bg-[#324A65]">
        View
      </Button>
      <Button variant="outline">Show Price</Button>
    </div>
  </TableCell>
</TableRow>
  </TableBody>
</Table>
          </Card>
          </div>
      </section>
 
{/* Section 4: Services */}
   <section className="bg-[#F5EFE7] p-8">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Service Cards */}
          <Card className="bg-[#F5EFE7] shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle>Room Booking</CardTitle>
            </CardHeader>
            <CardContent>
              Book a room at our hotel for a luxurious stay.
            </CardContent>
            <CardFooter>
              < Button className="bg-[#213555] text-white px-4 py-2 rounded-lg hover:bg-[#324A65]">Book Now</Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#F5EFE7] shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle>Restaurant</CardTitle>
            </CardHeader>
            <CardContent>
              Enjoy a wide variety of meals at our restaurant.
            </CardContent>
            <CardFooter>
              <Button className="bg-[#213555] text-white px-4 py-2 rounded-lg hover:bg-[#324A65]">Explore Menu</Button>
            </CardFooter>
          </Card>

         
        </div>
      </section>

{/* Section 5: Facilities */}
      <section className="bg-[#F5EFE7] p-8">
        <h2 className="text-2xl font-bold">Facilities of Demiren Hotel</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
        <p className="text-md font-bold">Most popular facilities</p>
        </div>
      
  <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
  <div className="flex items-center gap-2">
    <FontAwesomeIcon icon={faWifi} className="w-5 h-5" />
    <p className="text-sm">Free WiFi</p>
  </div>
  <div className="flex items-center gap-2">
    <FontAwesomeIcon icon={faConciergeBell} className="w-5 h-5" />
    <p className="text-sm">Room Service</p>
  </div>
  <div className="flex items-center gap-2">
    <FontAwesomeIcon icon={faUserFriends} className="w-5 h-5" />
    <p className="text-sm">Family Rooms</p>
  </div>
  <div className="flex items-center gap-2">
    <FontAwesomeIcon icon={faSmokingBan} className="w-5 h-5" />
    <p className="text-sm">Non-Smoking</p>
  </div>
  <div className="flex items-center gap-2">
    <FontAwesomeIcon icon={faParking} className="w-5 h-5" />
    <p className="text-sm">Free Parking</p>
  </div>
  <div className="flex items-center gap-2">
    <FontAwesomeIcon icon={faUtensils} className="w-5 h-5" />
    <p className="text-sm">Restaurant</p>
  </div>
  <div className="flex items-center gap-2">
    <FontAwesomeIcon icon={faBreadSlice} className="w-5 h-5" />
    <p className="text-sm">Breakfast</p>
  </div>
  

</div>
<div className="flex flex-col items-start gap-2">
  <div className="flex items-center gap-2">
    <FontAwesomeIcon icon={faSignHanging} className="w-5 h-5" />
    <p className="text-md font-bold">Great for your stay</p>
  </div>
  <ul className="list-disc ml-5">
    <li>Restaurant</li>
    <li>Parking</li>
    <li>Private bathroom</li>
    <li>Air conditioning</li>
    <li>Free WiFi</li>
    <li>Family rooms</li>
    <li>Flat-screen TV</li>
    <li>Room service</li>
    <li>Free parking</li>
    <li>Shower</li>
  </ul>
</div>


 </section>

{/* Section 6: FQnA */}
<section className="bg-[#F5EFE7] p-8">
  <div className="flex flex-col lg:flex-row gap-8">
    {/* Left Column - Image */}
    <div className="flex-1">
      <img src="/path/to/your/image.jpg" alt="Hotel Image" className="w-full h-auto rounded-lg" />
    </div>

    {/* Right Column - FAQ */}
    <div className="flex-1">
      <Card className="p-8 lg:p-12">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm font-semibold">
                Is Demiren Hotel popular with families?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Demiren Hotel is popular with guests booking family stays.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-sm font-semibold">
                How much does it cost to stay at Demiren Hotel?
              </AccordionTrigger>
              <AccordionContent>
                The prices at Demiren Hotel may vary depending on your stay (e.g., dates you select, hotel's policy etc.). See the prices by entering your dates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-sm font-semibold">
                How far is Demiren Hotel from the centre of Cagayan de Oro?
              </AccordionTrigger>
              <AccordionContent>
                Demiren Hotel is 850 m from the centre of Cagayan de Oro. All distances are measured in straight lines. Actual travel distances may vary.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-sm font-semibold">
                What is there to do at Demiren Hotel?
              </AccordionTrigger>
              <AccordionContent>
                Demiren Hotel offers the following activities / services (charges may apply):
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-sm font-semibold">
                Does Demiren Hotel have a restaurant on site?
              </AccordionTrigger>
              <AccordionContent>
                Demiren Hotel has 1 restaurant:
                <ul className="list-disc list-inside">
                  <li>Restaurant #1</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-sm font-semibold">
                What are the check-in and check-out times at Demiren Hotel?
              </AccordionTrigger>
              <AccordionContent>
                Check-in at Demiren Hotel is from 12:00, and check-out is until 1:00PM.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-sm font-semibold">
                What type of room can I book at Demiren Hotel?
              </AccordionTrigger>
              <AccordionContent>
                Room options at Demiren Hotel include:
                <ul className="list-disc list-inside">
                  <li>Twin</li>
                  <li>Double</li>
                  <li>Triple</li>
                  <li>Family</li>
                  <li>Single</li>
                  <li>Quadruple</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Card>
    </div>
  </div>
</section>

          
{/* Section 7: Footer */}
 <section className="bg-gray-800 text-white p-4 mt-8">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-lg">Contact Us</h3>
            <p>123 Main Street, City, Country</p>
          </div>
          <div>
            <Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link>
            <br />
            <Link href="/terms" className="text-sm hover:underline">Terms of Service</Link>
          </div>
        </div>
      </section>
  
    </div>
  );
}
