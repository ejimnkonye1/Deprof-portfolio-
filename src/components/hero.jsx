"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }} // Apply background image for parallax
    >
      {/* The Image component is removed here as we are using background-image for parallax */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div> {/* Increased opacity slightly */}
      <div className="relative z-20 text-center p-4">
      
        <h1
  className={`text-4xl  md:text-7xl font-extrabold mb-4 transition-all duration-1000 ease-out ${
    isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  } tracking-[.25em] leading-[1.3em] md:leading-{size} md:tracking-normal`} // 
>
  HI! I'M CHIEMERIE COLLINS
</h1>
        <p
          className={`text-3xl md:text-3xl font-medium tracking-wide font-playwrite-qld transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          A Graphics Designer
        </p>
      </div>
    </section>
  )
}
