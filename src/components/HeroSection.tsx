"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import bn1 from "@publicImages/Banners/Ads Banner/1-Banner-Design.jpg";
import bn2 from "@publicImages/Banners/Ads Banner/2-Banner-Design.jpg";
import bn3 from "@publicImages/Banners/Ads Banner/3-Banner-Design.jpg";
import f1 from "@publicImages/Banners/Features/1-DailyFreshCatches.jpg";
import f2 from "@publicImages/Banners/Features/2-ExpertQualityCheck.jpg";
import f3 from "@publicImages/Banners/Features/3-PremiumProducts.jpg";
import f4 from "@publicImages/Banners/Features/4-FreeFromChemicals.jpg";
import { url } from "inspector";


export function HeroSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {/* First Slide */}
            <CarouselItem>
              <div
                className="relative w-full h-[400px] rounded-xl overflow-hidden flex"
                style={{
                  backgroundImage: `url(${bn1.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <div className="flex-1 p-10 flex flex-col justify-center ">
                  <h1 className="text-4xl font-bold mb-4">Daily Fresh Catches</h1>
                  <p className="text-gray-600 mb-6 max-w-md">
                    Experience the finest seafood delivered straight from the ocean to your doorstep. Our fresh catches are sourced daily to ensure premium quality.
                  </p>
                  <Button className="w-fit">Shop Now</Button>
                </div> */}
{/* <div className="flex-1 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[400px] h-[300px]">
                      <Image
                        src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1925&auto=format&fit=crop"
                        alt="Fresh seafood"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </CarouselItem>

            {/* Second Slide */}
            <CarouselItem>
              <div className="relative w-full h-[400px] bg-gradient-to-r from-orange-50 to-red-50 rounded-xl overflow-hidden flex"
              style={{
                backgroundImage: `url(${bn2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              
                {/* <div className="flex-1 p-10 flex flex-col justify-center">
                  <h1 className="text-4xl font-bold mb-4">Premium Products</h1>
                  <p className="text-gray-600 mb-6 max-w-md">
                    Our curated selection of seafood is carefully selected for exceptional taste and quality. Discover the DayHawk difference.
                  </p>
                  <Button className="w-fit">Explore</Button>
                </div> */}
                {/* <div className="flex-1 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[400px] h-[300px]">
                      <Image
                        src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=1974&auto=format&fit=crop"
                        alt="Premium seafood selection"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </CarouselItem>

            {/* Third Slide */}
            <CarouselItem>
              <div className="relative w-full h-[400px] bg-gradient-to-r from-green-50 to-teal-50 rounded-xl overflow-hidden flex"
              style={{
                backgroundImage: `url(${bn3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
                {/* <div className="flex-1 p-10 flex flex-col justify-center">
                  <h1 className="text-4xl font-bold mb-4">Free From Chemicals</h1>
                  <p className="text-gray-600 mb-6 max-w-md">
                    We guarantee that all our seafood is free from harmful chemicals and preservatives. Enjoy natural taste and nutrition.
                  </p>
                  <Button className="w-fit">Learn More</Button>
                </div> */}
                {/* <div className="flex-1 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[400px] h-[300px]">
                      <Image
                        src="https://images.unsplash.com/photo-1572043865414-2c56c7bf3bf2?q=80&w=1974&auto=format&fit=crop"
                        alt="Natural seafood"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {/* Feature 1 */}
          <div className="bg-blue-100 p-6 rounded-lg relative overflow-hidden flex items-center"
          style={{
            backgroundImage: `url(${f1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div className="z-10">
              <h3 className="text-xl font-semibold text-white mb-1">Daily Fresh Catches</h3>
              <p className="text-blue-50">Direct from the ocean</p>
            </div>
            <div className="absolute right-0 bottom-0 h-full w-1/2 opacity-30">
              <Image
                src="https://images.unsplash.com/photo-1546622653-89d72e8d2239?q=80&w=1974&auto=format&fit=crop"
                alt="Fresh catches"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-emerald-100 p-6 rounded-lg relative overflow-hidden flex items-center"
          style={{
            backgroundImage: `url(${f2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div className="z-10">
              <h3 className="text-xl font-semibold text-white mb-1">Expert Quality Check</h3>
              <p className="text-emerald-50">Rigorous quality standards</p>
            </div>
            <div className="absolute right-0 bottom-0 h-full w-1/2 opacity-30">
              <Image
                src="https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=1964&auto=format&fit=crop"
                alt="Quality check"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-amber-100 p-6 rounded-lg relative overflow-hidden flex items-center"
          style={{
            backgroundImage: `url(${f3.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div className="z-10">
              <h3 className="text-xl font-semibold text-white mb-1">Premium Products</h3>
              <p className="text-amber-50">Finest selection</p>
            </div>
            <div className="absolute right-0 bottom-0 h-full w-1/2 opacity-30">
              <Image
                src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1974&auto=format&fit=crop"
                alt="Premium products"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-rose-100 p-6 rounded-lg relative overflow-hidden flex items-center"
          style={{
            backgroundImage: `url(${f4.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div className="z-10">
              <h3 className="text-xl font-semibold text-white mb-1">Free From Chemicals</h3>
              <p className="text-rose-50">Naturally sourced</p>
            </div>
            <div className="absolute right-0 bottom-0 h-full w-1/2 opacity-30">
              <Image
                src="https://images.unsplash.com/photo-1553787762-b5f5721f3270?q=80&w=2070&auto=format&fit=crop"
                alt="No chemicals"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
