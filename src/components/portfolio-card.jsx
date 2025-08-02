"use client"
// Removed Card and CardContent imports as they are no longer used

export default function PortfolioCard({ item }) {
  return (
    <section>
      {/* This div now contains only the image and its visual card styling */}
      <div className="group bg-[#2a2a2a] border-none rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="relative w-full h-100 overflow-hidden">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      {/* This div contains the title and description, now visually separate from the card's background */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
          {item.title}
        </h3>
        {item.description && <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>}
      </div>
    </section>
  )
}
