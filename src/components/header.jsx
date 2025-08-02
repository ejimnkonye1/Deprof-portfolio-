"use client"

import { useEffect, useState } from "react"

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false) // New state for scroll

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust 50px as needed for when the background appears
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-8 text-white transition-all duration-300 ${
        scrolled ? "bg-[#2a2a2a] bg-opacity-70 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
      
        <div
          className={` font-black tracking-widest transition-all duration-1000 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
        <span className="font-playwrite-qld md:text-3xl">Deprof</span>   <span className="text-gray-400 md:text-3xl pl-2 font-playwrite-pl">Portfolio</span>
        </div>

        {/* Navigation can go here if needed */}
      </div>
    </header>
  )
}
