"use client"

import { Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-8 px-8 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Collins. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://x.com/CollinsDeprof"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://linkedin.com/in/collins-okoro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
              <a
            href="https://www.instagram.com/collins_deprof"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}
