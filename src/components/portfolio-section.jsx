"use client"

import { useEffect, useState } from "react"
import PortfolioCard from "./portfolio-card"

const portfolioItems = [
  {
    id: 1,
    title: "Delicious Food Restaurant Flyer",
    category: "Print Design",
    image: "/images/food-flyer.jpg",
    description: "Vibrant restaurant flyer design with promotional offers and appetizing food imagery.",
  },
  {
    id: 2,
    title: "Pringles Advertisement Campaign",
    category: "Brand Design",
    image: "/images/pringles-ad.jpg",
    description: "Dynamic product advertisement showcasing Pringles flavors with engaging copy.",
  },
  {
    id: 3,
    title: "Kobe Bryant Tribute Poster",
    category: "Sports Design",
    image: "/images/kobe-tribute.jpg",
    description: "Emotional tribute design celebrating the legacy of basketball legend Kobe Bryant.",
  },
  {
    id: 4,
    title: "Food & Beverages Menu Design",
    category: "Print Design",
    image: "/images/food-menu.jpg",
    description: "Elegant menu design with organized sections and appetizing food photography.",
  },
  {
    id: 5,
    title: "Lost - Artistic Poster",
    category: "Artistic Design",
    image: "/images/lost-poster.jpg",
    description: "Dramatic black and white poster design with powerful typography and imagery.",
  },
  {
    id: 6,
    title: "Match Day Sports Poster",
    category: "Sports Design",
    image: "/images/match-day.jpg",
    description: "Professional sports match poster featuring team information and player imagery.",
  },
  {
    id: 7,
    title: "Coca-Cola Brand Campaign",
    category: "Brand Design",
    image: "/images/coca-cola.jpg",
    description: "Refreshing brand campaign design with product focus and brand consistency.",
  },
   {
    id: 17,
    title: "Heritage Assembly Quote Poster",
    category: "Social Media",
    image: "/images/heritage-assembly-quote.png",
    description: "Inspirational quote poster for a religious assembly, designed for social sharing.",
  },
]

export default function PortfolioSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500) // Delay after about section
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-8">
      <div className="container mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-playwrite-qld font-bold text-center mb-12 transition-all duration-1000 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ease-out ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <PortfolioCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
