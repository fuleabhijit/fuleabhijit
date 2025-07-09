"use client"

import { useState } from "react"

export default function QuickLinks() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const links = [
    { name: "About", icon: "📋", description: "Learn about me" },
    { name: "Projects", icon: "💾", description: "View my work" },
    { name: "Certifications", icon: "🏆", description: "My achievements" },
    { name: "Contact", icon: "📧", description: "Get in touch" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 md:py-16 bg-white border-t-4 border-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-dotgothic text-xl md:text-2xl mb-2">[QUICK_ACCESS.BAR]</h2>
          <div className="font-mono text-sm">Click to navigate {">"}</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.name)}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="group border-4 border-black bg-white p-4 md:p-6 hover:bg-black hover:text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg relative"
            >
              <div className="text-2xl md:text-3xl mb-2 group-hover:animate-bounce">{link.icon}</div>
              <div className="font-dotgothic text-xs md:text-sm mb-1">[{link.name.toUpperCase()}]</div>
              <div
                className={`font-mono text-xs transition-opacity duration-200 ${
                  hoveredLink === link.name ? "opacity-100" : "opacity-0"
                }`}
              >
                {link.description}
              </div>

              {/* Hover effect indicator */}
              <div
                className={`absolute -top-1 -right-1 w-3 h-3 bg-black transition-transform duration-200 ${
                  hoveredLink === link.name ? "scale-100 animate-pulse" : "scale-0"
                }`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
