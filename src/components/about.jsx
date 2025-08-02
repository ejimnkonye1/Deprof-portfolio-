

import { useEffect, useState } from "react"

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000) // Delay to allow hero animation
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div
          className={`relative w-full md:w-1/3 flex justify-center transition-all duration-1000 ease-out ${
            isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/about.png"
              alt="Joshua's profile picture"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="absolute left-4 top-0 bottom-0 w-2 bg-blue-400 rounded-l-lg"></div>
        </div>
        <div
          className={`w-full md:w-2/3 text-center md:text-left transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playwrite-qld">About Me!</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I'm a graphics designer  that has been at this for about 3 years and have worked with a
            couple of individuals and Start-ups to solve their design related problems, like branding, logo design,
            animation.
          </p>
        </div>
      </div>
    </section>
  )
}
