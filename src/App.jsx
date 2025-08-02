"use client"
import Header from "./components/header"
import Hero from './components/hero'
import About from "./components/about"
import PortfolioSection from "./components/portfolio-section"
import Footer from "./components/footer" 

export default function Home() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <Header />
      <main>
        <Hero />
         <About />
       <PortfolioSection />
      </main>
      <Footer /> 
    </div>
  )
}
