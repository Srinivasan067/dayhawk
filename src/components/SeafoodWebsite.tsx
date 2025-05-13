import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"




const p1 = "/Website Source Files/Peoples/1.jpg";
const p2 = "/Website Source Files/Peoples/2.jpg";
const p3 = "/Website Source Files/Peoples/3.jpg";
const b1 = "/Website Source Files/Banners/OfferBanner.jpg";
const b2 = "/Website Source Files/Banners/BestforyourHealth.jpg";
const d1 = "/Website Source Files/other/Crab.png";
const e1 = "/Website Source Files/img1.jpg";
const e2 = "/Website Source Files/img2.jpg";
const f1 = "/Website Source Files/seer.jpg";
const f2 = "/Website Source Files/black.jpg";
import payment from "@publicImages/payment.png";

const f3 = "/Website Source Files/prawn.jpg";


export default function SeafoodWebsite() {
  // Sample products data for the homepage
  const products = [
    {
      id: "seer-fish",
      name: "Seer Fish",
      localName: "வஞ்சரம்",
      price: 393,
      mrp: 415,
      discount: "5% off",
      image: f1,
    },
    {
      id: "black-pomfret",
      name: "Black Pomfret",
      localName: "கருப்பு வாவல்",
      price: 340,
      mrp: 357,
      discount: "5% off",
      image: f2,
    },
    {
      id: "sea-prawn",
      name: "Sea Prawn",
      localName: "கடல் இறால்",
      price: 209,
      mrp: 220,
      discount: "5% off",
      image: f3,
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Banners Section */}
      <section className="w-full px-4 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto grid gap-6 md:grid-cols-2">
          {/* Best Seafood Banner */}
          <div className="relative overflow-hidden rounded-lg bg-[#0a2d5c] p-6 text-white">
            <div className="relative z-10 flex flex-col gap-4">
              <div className="absolute right-4 top-4 rounded-full bg-green-500 px-3 py-1 text-sm font-bold">50%</div>
              <div className="absolute right-4 top-12 rounded-full bg-green-500 px-3 py-1 text-sm font-bold">
           
              </div>
              <h2 className="text-4xl font-bold leading-tight">
          <br />
            <br />
                <span className="text-2xl"></span>
              </h2>
              <Link
                href="/product/seer-fish"
                className="flex w-fit items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-[#0a2d5c] transition-colors hover:bg-gray-100"
              >
             <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="absolute inset-0">
              
              <Image
                src={e1}
                alt="Salmon with herbs"
                fill
                className="object-cover opacity-60"
                priority
              />
            </div>
          </div>

          {/* Fresh Fish Banner */}
          <div className="relative overflow-hidden rounded-lg bg-[#0a2d5c] p-6 text-white">
            <div className="relative z-10 flex flex-col gap-4">
              <div className="absolute right-4 top-4 rounded-full bg-[#0a2d5c] px-3 py-1 text-sm font-bold">
            
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                <span className="text-2xl italic"></span> <br />
               
              </h2>
              <Link
                href="/product/seer-fish"
                className="flex w-fit items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-[#0a2d5c] transition-colors hover:bg-gray-100"
              >
               <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="absolute inset-0">
              <Image
                src={e2}
                alt="Salmon with herbs"
                fill
                className="object-cover opacity-60"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              Why to <span className="text-[#00b8e4]">Choose Us</span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500">
              Here are some distinctive things which makes us different from others!
            </p>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#00b8e4]"></div>
          </div>

          <div className="relative">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 text-4xl font-bold text-[#00b8e4]">01</div>
                <h3 className="mb-3 text-xl font-bold">Freshness Guaranteed</h3>
                <p className="text-gray-600">
                  We source our seafood directly from local fishermen and suppliers to ensure maximum freshness and
                  quality.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 text-4xl font-bold text-[#00b8e4]">02</div>
                <h3 className="mb-3 text-xl font-bold">Wide Variety & Availability</h3>
                <p className="text-gray-600">
                  Explore our extensive selection of seafood products, including hard-to-find species, and enjoy
                  convenient delivery or pickup options.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 text-4xl font-bold text-[#00b8e4]">03</div>
                <h3 className="mb-3 text-xl font-bold">Competitive Pricing</h3>
                <p className="text-gray-600">
                  We offer fair and competitive prices for our high-quality seafood products, ensuring you get the best
                  value for your money.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 text-4xl font-bold text-[#00b8e4]">04</div>
                <h3 className="mb-3 text-xl font-bold">Expert Handling & Packaging</h3>
                <p className="text-gray-600">
                  Our experienced team carefully handles and packages each order to ensure your seafood arrives in
                  pristine condition, ready to cook and enjoy.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-16 -top-16 hidden md:block">
              <Image
                src={d1}
                alt="Decorative crab"
                width={150}
                height={150}
                className="opacity-80"
              />
            </div>
            <div className="absolute -bottom-16 -right-16 hidden md:block">
              <Image
                src={d1}
                alt="Decorative lobster"
                width={150}
                height={150}
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              Best for your <span className="text-[#00b8e4]">Health</span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500">
              Support sustainable seafood embrace healthier choices right at your fingertips!
            </p>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#00b8e4]"></div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-[#0a2d5c] p-6 text-white">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative">
                <Image
                  src={b2}
                  alt="Fresh seafood display"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-8">
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-[#00b8e4]">Nutrient-Rich</h3>
                  <p>
                    Sea fish provide high-quality protein essential for muscle growth, repair, and overall bodily
                    functions. Protein also helps with weight management by promoting satiety. DHA in fish supports
                    cognitive function, memory, and development, especially in children and older adults. It may also
                    reduce the risk of neurodegenerative diseases like Alzheimer's.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-[#00b8e4]">Healthier Option</h3>
                  <p>
                    Regular consumption of sea fish reduces the risk of heart disease by lowering triglycerides,
                    reducing blood pressure, and improving cholesterol levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              Featured <span className="text-[#00b8e4]">Services</span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500">
              Here you will get some extra services which you will get only here!
            </p>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#00b8e4]"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Service 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-red-50 p-4">
                <svg
                  className="h-12 w-12 text-red-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Save Time</h3>
              <p className="text-gray-600">Time is money save your time</p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-red-50 p-4">
                <svg
                  className="h-12 w-12 text-red-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H19M12 15V20M12 20H7M12 20H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Delivered from 52H</h3>
              <p className="text-gray-600">Fresh from the Ocean, to Your Door</p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-red-50 p-4">
                <svg
                  className="h-12 w-12 text-red-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12H16L14 15H10L8 12H2M5.45 5.11L2 12V15H22V12L18.55 5.11C18.3 4.72 17.87 4.5 17.4 4.5H6.6C6.13 4.5 5.7 4.72 5.45 5.11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Home Delivery</h3>
              <p className="text-gray-600">Get your desired product at your doorstep</p>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-red-50 p-4">
                <svg
                  className="h-12 w-12 text-red-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6L6 7.5M6 7.5L3 9M6 7.5L12 3L18 7.5M18 7.5L21 6M18 7.5L21 9M12 3V6M12 21V18M12 21L6 16.5M12 21L18 16.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Price Comparison</h3>
              <p className="text-gray-600">Now you can compare our price with local market</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full px-4 py-8">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              Featured <span className="text-[#00b8e4]">Products</span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500">Our most popular seafood items</p>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#00b8e4]"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="block">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-105">
                  <div className="relative h-48">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-[#00b8e4]">{product.localName}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <div>
                        <span className="font-bold">₹{product.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">₹{product.mrp}</span>
                        <span className="text-sm text-green-600 ml-2">{product.discount}</span>
                      </div>
                      <button className="bg-red-600 text-white px-3 py-1 rounded-md text-sm">View Details</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="w-full px-4 py-8">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-lg bg-[#0a2d5c] p-6 text-white">
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 py-4 text-center">
              <h2 className="text-3xl font-bold">Get 15% offer! Min Order of 350₹</h2>
              <div className="rounded-md border border-dashed border-white px-4 py-2">Use Code : Bayhawk786</div>
            </div>
            <div className="absolute inset-0">
              <Image
                src={b1}
                alt="Seafood promotion"
                fill
                className="object-cover opacity-40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              What People Says <span className="text-[#00b8e4]">About Us</span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500">Our customers honest reviews for our products!</p>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#00b8e4]"></div>
          </div>

          <div className="relative">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="relative rounded-lg bg-gray-50 p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={p1}
                      alt="Ashwin Reddy"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Ashwin Reddy</h3>
                    <p className="text-sm text-[#00b8e4]">Hyderabad</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The indian salmon fillets I received were incredibly fresh and flavorful! Will definitely order
                  again."
                </p>
                <div className="absolute right-6 top-6 text-6xl font-serif text-gray-200">"</div>
              </div>

              {/* Testimonial 2 */}
              <div className="relative rounded-lg bg-gray-50 p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={p2}
                      alt="Monith Shetty"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Monith Shetty</h3>
                    <p className="text-sm text-[#00b8e4]">Bengaluru</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Love the variety of seafood options on your website. The shrimp were succulent and perfect for my
                  BBQ."
                </p>
                <div className="absolute right-6 top-6 text-6xl font-serif text-gray-200">"</div>
              </div>

              {/* Testimonial 3 */}
              <div className="relative rounded-lg bg-gray-50 p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={p3}
                      alt="Ankit Sharma"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Ankit Sharma</h3>
                    <p className="text-sm text-[#00b8e4]">Mumbai</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The seafood arrived promptly and was packaged with care. Impressed with the quality and service."
                </p>
                <div className="absolute right-6 top-6 text-6xl font-serif text-gray-200">"</div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

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
              <Image src={payment} alt="Visa" width={290} height={160} />

            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

