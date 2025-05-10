import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart, Share2, Star, Camera, ThumbsUp, ThumbsDown } from "lucide-react"

export async function generateStaticParams() {
  // Replace this with your actual data fetching logic
  const products = [
    { id: "seer-fish" },
    { id: "black-pomfret" },
    { id: "sea-prawn" },
    { id: "indian-salmon" },
    { id: "squid" },
  ];

  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {

  const product = {
    id: params.id,
    name: "Seer Fish",
    localName: "வஞ்சரம்",
    rating: 4,
    reviewCount: 145,
    description:
      "The other names are Vanjram meen, Vanchiram Meen. It is widely known as the king of fishes and one of the expensive fish. Vanjaram is one of the popular delicacies which are fish pickle, seer fish thala curry, fish curry and fish fry.",
    price: 1111.0,
    mrp: 1234.0,
    discount: "5% off",
    weight: "1000-1250 g",
    netWeight: "1000-1250 g",
    pieces: "2-4 Pieces",
    serves: "2-3",
    totalPrice: 3355.0,
    images: ["/placeholder.svg?height=400&width=500"],
    variants: [
      { id: 1, name: "Whole Uncleaned - Small", isActive: false },
      { id: 2, name: "Small Fish - 1 Kg to 1.25 Kg", isActive: true },
      { id: 3, name: "Steak - Large", isActive: false },
      { id: 4, name: "Curry Cut / Steak", isActive: false },
      { id: 5, name: "Cubes", isActive: false },
      { id: 6, name: "Slices - Medium", isActive: false },
    ],
  }

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      author: "Ashwin Reddy",
      location: "Hyderabad",
      date: "Dec, 2024",
      rating: 5,
      text: "I loved the Seer Fish Fillets I bought from here, thanks to BayHawk😊😊😊",
      likes: 143,
      dislikes: 10,
      images: [
        "/placeholder.svg?height=80&width=80",
        "/placeholder.svg?height=80&width=80",
        "/placeholder.svg?height=80&width=80",
      ],
    },
    {
      id: 2,
      author: "Monith Shetty",
      location: "Bengaluru",
      date: "Nov, 2024",
      rating: 4,
      text: "Their Seer Fish is always succulent👌",
      likes: 120,
      dislikes: 5,
      images: [],
    },
    {
      id: 3,
      author: "Ankit Sharma",
      location: "Mumbai",
      date: "Sep, 2024",
      rating: 5,
      text: "I was skeptical at first, but their Seer Fish are amazing!",
      likes: 83,
      dislikes: 3,
      images: [
        "/placeholder.svg?height=80&width=80",
        "/placeholder.svg?height=80&width=80",
        "/placeholder.svg?height=80&width=80",
      ],
    },
  ]

  // Sample related products
  const relatedProducts = [
    {
      id: 1,
      name: "Black Pomfret",
      localName: "கருப்பு வாவல்",
      price: 340,
      mrp: 357,
      discount: "5% off",
      weight: "1 Kg",
      pieces: "12-18 Pieces",
      serves: "4",
      rating: 4,
      reviewCount: 145,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Ribbon dried fish",
      localName: "வாளை மீன் கருவாடு",
      price: 104,
      mrp: 110,
      discount: "5% off",
      weight: "1 Kg",
      pieces: "12-18 Pieces",
      serves: "4",
      rating: 4,
      reviewCount: 145,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Sea Prawn",
      localName: "கடல் இறால்",
      price: 209,
      mrp: 220,
      discount: "5% off",
      weight: "1 Kg",
      pieces: "12-18 Pieces",
      serves: "4",
      rating: 4,
      reviewCount: 145,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Indian Salmon",
      localName: "காரை",
      price: 457,
      mrp: 480,
      discount: "5% off",
      weight: "1 Kg",
      pieces: "12-18 Pieces",
      serves: "4",
      rating: 4,
      reviewCount: 145,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Squid",
      localName: "கணவாய்",
      price: 195,
      mrp: 217,
      discount: "5% off",
      weight: "1 Kg",
      pieces: "12-18 Pieces",
      serves: "4",
      rating: 4,
      reviewCount: 145,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  // More related products for second row
  const moreRelatedProducts = [
    {
      id: 6,
      name: "Sea Crab",
      localName: "கடல் நண்டு",
      price: 270,
      mrp: 285,
      discount: "5% off",
      weight: "1 Kg",
      pieces: "12-18 Pieces",
      serves: "4",
      rating: 4,
      reviewCount: 145,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 7,
      name: "Seer Fish",
      localName: "வஞ்சரம்",
      price: 393,
      mrp: 415,
      discount: "5% off",
      weight: "1 Kg",
      pieces: "12-18 Pieces",
      serves: "4",
      rating: 4,
      reviewCount: 145,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 8,
      name: "Anchovy dried fish",
      localName: "நெத்திலி கருவாடு",
      price: 163,
      mrp: 172,
      discount: "5% off",
      weight: "1 Kg",
      pieces: "12-18 Pieces",
      serves: "4",
      rating: 4,
      reviewCount: 145,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 9,
      name: "Sea Bass",
      localName: "கோடுவா",
      price: 618,
      mrp: 650,
      discount: "5% off",
      weight: "1 Kg",
      pieces: "12-18 Pieces",
      serves: "4",
      rating: 4,
      reviewCount: 145,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 10,
      name: "Sea Prawn",
      localName: "கடல் இறால்",
      price: 209,
      mrp: 247,
      discount: "5% off",
      weight: "1 Kg",
      pieces: "12-18 Pieces",
      serves: "4",
      rating: 4,
      reviewCount: 145,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="mr-8">
                <Image
                  src="/placeholder.svg?height=40&width=150"
                  alt="BayHawk"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <div className="relative hidden md:block">
                <button className="flex items-center space-x-1 text-sm border rounded-md px-3 py-1.5 mr-4">
                  <span>Your Location</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for your delicious product"
                    className="w-64 border rounded-l-md py-2 px-3 focus:outline-none"
                  />
                  <button className="absolute right-0 top-0 bg-red-600 text-white h-full px-3 rounded-r-md">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="hidden md:flex items-center space-x-1 text-sm">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>Categories</span>
              </button>
              <button>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="relative">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="hidden md:flex items-center space-x-1">
                <span className="text-sm">EN</span>
                <ChevronRight className="h-4 w-4" />
              </div>
              <div className="hidden md:block text-right">
                <div className="text-xs text-gray-500">India</div>
                <div className="text-sm">My Account</div>
              </div>
              <div className="hidden md:block text-right">
                <div className="text-xs text-gray-500">Home Delivery</div>
                <div className="text-sm">+91 984 044 0209</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center text-sm">
          <Link href="/" className="text-gray-600 hover:text-[#00b8e4]">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <Link href="/marine-fish" className="text-gray-600 hover:text-[#00b8e4]">
            Marine Fish
          </Link>
          <span className="mx-2">&gt;</span>
          <Link href="/marine-fish/seer-fish" className="text-gray-600 hover:text-[#00b8e4]">
            Seer Fish
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-600">{product.localName}</span>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="relative">
              <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                  <Heart className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                <button className="w-3 h-3 bg-[#00b8e4] rounded-full"></button>
                <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
                <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
                <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
                <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-bold mb-1 flex items-center justify-between">
                <span>
                  {product.name} <span className="text-[#00b8e4]">{product.localName}</span>
                </span>
                <Share2 className="h-5 w-5 text-gray-500" />
              </h1>

              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.reviewCount} Customer Review)</span>
              </div>

              <p className="text-gray-700 mb-4">
                {product.description}
                <button className="text-[#00b8e4] font-medium ml-1">Read more</button>
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`text-left px-3 py-2 border rounded-md text-sm ${
                      variant.isActive ? "border-[#00b8e4] text-[#00b8e4]" : "border-gray-300 text-gray-700"
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>

              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">Priced for Gross Weight :</div>
                  <div className="font-bold text-red-600">{product.weight}</div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                    <span className="text-sm">Net Wt: {product.netWeight}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                      />
                    </svg>
                    <span className="text-sm">{product.pieces}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="text-sm">Serves {product.serves}</span>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold">₹{product.price.toFixed(2)}</span>
                      <span className="ml-2 text-green-600 font-medium">{product.discount}</span>
                    </div>
                    <div className="text-sm text-gray-500">MRP: ₹{product.mrp.toFixed(2)} (incl. of all taxes)</div>
                  </div>
                  <div className="flex items-center">
                    <button className="bg-red-600 text-white rounded-l-md px-3 py-2">-</button>
                    <span className="bg-white border-t border-b px-4 py-2">2</span>
                    <button className="bg-red-600 text-white rounded-r-md px-3 py-2">+</button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-lg font-bold">
                  Total Price : <span className="text-xl">₹{product.totalPrice.toFixed(2)}</span>
                </div>
                <button className="bg-red-600 text-white rounded-md px-6 py-2 font-medium">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Ratings & Reviews */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6">Customer Ratings & Reviews</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rating Summary */}
            <div className="border-r border-gray-200 pr-8">
              <div className="flex items-center mb-4">
                <div className="text-4xl font-bold text-green-600 mr-2">4.2</div>
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400" />
                  <Star className="h-5 w-5 text-gray-300" />
                </div>
              </div>
              <div className="text-gray-500 mb-6">13,608 Ratings & 734 Reviews</div>

              {/* Rating Bars */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 text-sm font-medium">5 ★</div>
                  <div className="flex-1 mx-3 h-2.5 rounded-full bg-gray-200 overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <div className="w-12 text-sm text-gray-500">7,534</div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 text-sm font-medium">4 ★</div>
                  <div className="flex-1 mx-3 h-2.5 rounded-full bg-gray-200 overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: "25%" }}></div>
                  </div>
                  <div className="w-12 text-sm text-gray-500">3,103</div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 text-sm font-medium">3 ★</div>
                  <div className="flex-1 mx-3 h-2.5 rounded-full bg-gray-200 overflow-hidden">
                    <div className="bg-yellow-500 h-full rounded-full" style={{ width: "15%" }}></div>
                  </div>
                  <div className="w-12 text-sm text-gray-500">1,599</div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 text-sm font-medium">2 ★</div>
                  <div className="flex-1 mx-3 h-2.5 rounded-full bg-gray-200 overflow-hidden">
                    <div className="bg-orange-500 h-full rounded-full" style={{ width: "7%" }}></div>
                  </div>
                  <div className="w-12 text-sm text-gray-500">804</div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 text-sm font-medium">1 ★</div>
                  <div className="flex-1 mx-3 h-2.5 rounded-full bg-gray-200 overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: "5%" }}></div>
                  </div>
                  <div className="w-12 text-sm text-gray-500">570</div>
                </div>
              </div>

              {/* Rate Product */}
              <div className="mt-8">
                <div className="font-medium mb-2">Rate this product:</div>
                <div className="flex text-gray-300 mb-6">
                  <Star className="h-6 w-6 cursor-pointer hover:text-yellow-400" />
                  <Star className="h-6 w-6 cursor-pointer hover:text-yellow-400" />
                  <Star className="h-6 w-6 cursor-pointer hover:text-yellow-400" />
                  <Star className="h-6 w-6 cursor-pointer hover:text-yellow-400" />
                  <Star className="h-6 w-6 cursor-pointer hover:text-yellow-400" />
                </div>

                <div className="font-medium mb-2">Review this product:</div>
                <input type="text" placeholder="Enter title..." className="w-full border rounded-md px-3 py-2 mb-3" />
                <textarea
                  placeholder="Description..."
                  className="w-full border rounded-md px-3 py-2 h-32 mb-3"
                ></textarea>

                <div className="flex justify-between">
                  <button className="flex items-center border rounded-md px-4 py-2">
                    <Camera className="h-5 w-5 mr-2" />
                    <span>Add Photo</span>
                  </button>
                  <button className="bg-green-600 text-white rounded-md px-6 py-2 font-medium">SUBMIT</button>
                </div>
              </div>
            </div>

            {/* Reviews List */}
            <div>
              {reviews.map((review) => (
                <div key={review.id} className="mb-8 pb-8 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
                  <div className="mb-2">
                    <div className="font-medium text-lg">{review.text}</div>
                  </div>

                  {review.images.length > 0 && (
                    <div className="flex gap-2 mb-4">
                      {review.images.map((img, idx) => (
                        <Image
                          key={idx}
                          src={img || "/placeholder.svg"}
                          alt={`Review image ${idx + 1}`}
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="bg-green-600 text-white text-xs rounded px-1.5 py-0.5 mr-2">{review.rating}★</div>
                      <div className="font-medium">
                        {review.author} - {review.location} | {review.date}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-gray-500">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span className="text-sm">{review.likes}</span>
                      </button>
                      <button className="flex items-center text-gray-500">
                        <ThumbsDown className="h-4 w-4 mr-1" />
                        <span className="text-sm">{review.dislikes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button className="flex items-center text-[#00b8e4] font-medium mt-4">
                <span>View all 734 reviews</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* You May Like Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            You May <span className="text-[#00b8e4]">Like</span>
          </h2>
          <p className="text-gray-500">Most popular products near you!</p>
          <div className="mx-auto mt-2 h-1 w-16 bg-[#00b8e4]"></div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {relatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
                    <Heart className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <button>
                      <Share2 className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                  <div className="text-sm text-[#00b8e4] mb-1">{product.localName}</div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.reviewCount} Customer Review)</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600 mb-2">
                    <span>{product.weight}</span>
                    <span className="mx-1">|</span>
                    <span>{product.pieces}</span>
                    <span className="mx-1">|</span>
                    <span>Serves {product.serves}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold">₹{product.price}</span>
                      <span className="text-xs text-gray-500 line-through ml-1">₹{product.mrp}</span>
                      <span className="text-xs text-green-600 ml-1">{product.discount}</span>
                    </div>
                    <button className="bg-red-600 text-white text-xs rounded px-2 py-1">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="relative mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {moreRelatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
                    <Heart className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <button>
                      <Share2 className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                  <div className="text-sm text-[#00b8e4] mb-1">{product.localName}</div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.reviewCount} Customer Review)</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600 mb-2">
                    <span>{product.weight}</span>
                    <span className="mx-1">|</span>
                    <span>{product.pieces}</span>
                    <span className="mx-1">|</span>
                    <span>Serves {product.serves}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold">₹{product.price}</span>
                      <span className="text-xs text-gray-500 line-through ml-1">₹{product.mrp}</span>
                      <span className="text-xs text-green-600 ml-1">{product.discount}</span>
                    </div>
                    <button className="bg-red-600 text-white text-xs rounded px-2 py-1">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="container mx-auto px-4 py-6">
        <div className="relative overflow-hidden rounded-lg bg-[#0a2d5c] p-6 text-white">
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 py-4 text-center">
            <h2 className="text-3xl font-bold">Get 15% offer! Min Order of 350₹</h2>
            <div className="rounded-md border border-dashed border-white px-4 py-2">Use Code : bayhawk786</div>
          </div>
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=200&width=1200"
              alt="Seafood promotion"
              fill
              className="object-cover opacity-40"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#0a4d8c] px-4 py-12 text-white">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-2xl font-bold">BayHawk</h2>
              <p className="mb-4 max-w-xs">
                Your trusted source for fresh, sustainable seafood delivered right to your door.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold uppercase">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-[#00b8e4]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00b8e4]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00b8e4]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00b8e4]">
                    Our Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold uppercase">Help</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-[#00b8e4]">
                    Payments
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00b8e4]">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00b8e4]">
                    Cancellation & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00b8e4]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold uppercase">Consumer Policy</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-[#00b8e4]">
                    Cancellation & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00b8e4]">
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00b8e4]">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00b8e4]">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-4 text-lg font-bold uppercase">Subscribe to our newsletter</h3>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-l-md border-0 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00b8e4]"
              />
              <button className="rounded-r-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700">
                Sign up
              </button>
            </div>
            <div className="mt-4 flex gap-2">
              <Image src="/placeholder.svg?height=30&width=40" alt="Visa" width={40} height={30} />
              <Image src="/placeholder.svg?height=30&width=40" alt="Mastercard" width={40} height={30} />
              <Image src="/placeholder.svg?height=30&width=40" alt="PayPal" width={40} height={30} />
              <Image src="/placeholder.svg?height=30&width=40" alt="American Express" width={40} height={30} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

