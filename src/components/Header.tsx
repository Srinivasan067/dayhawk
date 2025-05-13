"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@publicImages/BayHawk.svg";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
  Menu
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [location, setLocation] = useState("Your Location");

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
                            src={logo}
                            alt="DayHawk"
                            width={150}
                            height={40}
                            className="h-10 w-auto"
                          />
        </Link>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-8">
                <Button variant="ghost" className="flex justify-start items-center gap-2">
                  {location} <ChevronDown className="h-4 w-4" />
                </Button>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search for your delicious product"
                    className="w-full pr-10 pl-4"
                  />
                  <Button size="icon" variant="ghost" className="absolute right-0 top-0">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <Link href="/categories">
                  <Button variant="ghost" className="w-full justify-start">Categories</Button>
                </Link>
                <Link href="/wishlist">
                  <Button variant="ghost" className="w-full justify-start">Wishlist</Button>
                </Link>
                <Link href="/cart">
                  <Button variant="ghost" className="w-full justify-start">Cart</Button>
                </Link>
                <Link href="/account">
                  <Button variant="ghost" className="w-full justify-start">My Account</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 flex-1 ml-10">
          {/* Location Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1">
                {location} <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLocation("New York")}>New York</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocation("Los Angeles")}>Los Angeles</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocation("Chicago")}>Chicago</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocation("Miami")}>Miami</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-xl">
            <Input
              type="text"
              placeholder="Search for your delicious product"
              className="w-full pr-10 pl-4"
            />
            <Button size="icon" variant="ghost" className="absolute right-0 top-0">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Side Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Categories
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </Button>
          <div className="flex items-center gap-1">
            <div className="text-right text-sm">
              <div className="text-gray-500">India</div>
              <Link href="/account" className="font-medium">My Account</Link>
            </div>
            <User className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-2">
            <div className="text-gray-500 text-sm">Home Delivery</div>
            <div className="font-semibold text-sm">+91 984 044 0209</div>
          </div>
        </div>
      </div>
    </header>
  );
}
