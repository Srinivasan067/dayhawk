"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, ShoppingCart, Star } from "lucide-react";

type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isFavorite: boolean;
};

export function ProductSection() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Fresh Atlantic Salmon",
      price: 24.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=1974&auto=format&fit=crop",
      rating: 4.8,
      reviewCount: 124,
      isFavorite: false,
    },
    {
      id: "2",
      name: "King Prawns - Large",
      price: 18.50,
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1974&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 86,
      isFavorite: true,
    },
    {
      id: "3",
      name: "Fresh Sea Bass Fillet",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=1964&auto=format&fit=crop",
      rating: 4.9,
      reviewCount: 142,
      isFavorite: false,
    },
    {
      id: "4",
      name: "Wild-caught Tuna Steak",
      price: 26.75,
      originalPrice: 32.50,
      image: "https://images.unsplash.com/photo-1553787762-b5f5721f3270?q=80&w=2070&auto=format&fit=crop",
      rating: 4.6,
      reviewCount: 98,
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Our Best Seller Products</h2>
          <p className="text-gray-500">Freshest sea meats and much more!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm"
                >
                  <Heart
                    className={`h-4 w-4 ${product.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                  />
                </button>
                {product.originalPrice && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1 hover:text-blue-600 transition-colors">
                  <Link href={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 text-sm line-through ml-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full flex items-center justify-center gap-2">
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
