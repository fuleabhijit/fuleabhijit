"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Projects")
  const [time, setTime] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour12: false }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const tabs = ["Projects", "About", "Certifications", "Contact"]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveTab(sectionId)
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <nav className="sticky top-0 z-50 bg-black text-white border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="font-dotgothic text-lg md:text-xl animate-pulse">{">"}_ABHIJIT.EXE</div>
            <div className="hidden sm:block font-mono text-xs md:text-sm bg-white text-black px-2 py-1">{time}</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`px-3 lg:px-4 py-2 font-dotgothic text-sm border-2 transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                  activeTab === tab
                    ? "bg-white text-black border-white animate-pulse"
                    : "bg-black text-white border-white hover:bg-white hover:text-black"
                }`}
              >
                [{tab.toUpperCase()}]
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden border-2 border-white px-3 py-2 font-dotgothic text-sm hover:bg-white hover:text-black transition-colors duration-200"
          >
            [MENU]
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t-2 border-white bg-black">
            <div className="py-4 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => scrollToSection(tab)}
                  className={`block w-full text-left px-4 py-3 font-dotgothic text-sm border-2 transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-white text-black border-white"
                      : "bg-black text-white border-white hover:bg-white hover:text-black"
                  }`}
                >
                  [{tab.toUpperCase()}]
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
