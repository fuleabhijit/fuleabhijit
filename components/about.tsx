"use client"

import { useState, useEffect } from "react"

export default function About() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [isTerminalActive, setIsTerminalActive] = useState(false)

  const lines = [
    "I'm Abhijit Fule — a relentless problem-solver with a curious mind and a compass that always points toward innovation.",
    "I thrive at the intersection of product, business, and data — where challenges get decoded and decisions gain impact.",
    "With a sharp analytical mindset and an insatiable hunger to learn, I love untangling complex problems, extracting meaningful insights, and transforming them into elegant, data-driven solutions.",
    "Structured thinking is my anchor, curiosity is my fuel, and adaptability is my superpower.",
    "I'm not just here to keep up — I'm here to lead, learn, and leave things better than I found them.",
  ]

  useEffect(() => {
    if (isTerminalActive && visibleLines < lines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [isTerminalActive, visibleLines, lines.length])

  const handleTerminalClick = () => {
    if (!isTerminalActive) {
      setIsTerminalActive(true)
      setVisibleLines(0)
    } else {
      setVisibleLines(lines.length)
    }
  }

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-dotgothic text-3xl mb-8 text-center">[ABOUT_ME.TXT]</h2>

          <div className="border-4 border-black bg-white relative group">
            {/* Interactive window header */}
            <div
              className="bg-black text-white p-3 flex items-center justify-between cursor-pointer"
              onClick={handleTerminalClick}
            >
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-white hover:animate-pulse cursor-pointer"></div>
                <div className="w-3 h-3 bg-white hover:animate-pulse cursor-pointer"></div>
                <div className="w-3 h-3 bg-white hover:animate-pulse cursor-pointer"></div>
              </div>
              <div className="font-dotgothic text-sm">
                {isTerminalActive ? "TERMINAL_ACTIVE.EXE" : "CLICK_TO_START.EXE"}
              </div>
            </div>

            <div className="p-8">
              {!isTerminalActive ? (
                <div className="text-center py-8">
                  <div className="font-dotgothic text-xl mb-4 animate-pulse">{">"} CLICK HEADER TO INITIALIZE</div>
                  <div className="font-mono text-sm">Loading personal data...</div>
                </div>
              ) : (
                <div className="font-mono text-lg leading-relaxed">
                  <div className="mb-4 font-dotgothic">{">"} cat about_abhijit.txt</div>
                  {lines.map((line, index) => (
                    <div
                      key={index}
                      className={`mb-4 transition-all duration-500 ${
                        index < visibleLines
                          ? "opacity-100 transform translate-y-0"
                          : "opacity-0 transform translate-y-4"
                      }`}
                    >
                      <span className="text-green-600">{">"}</span> {line}
                    </div>
                  ))}

                  {visibleLines === lines.length && (
                    <div className="mt-6 pt-4 border-t-2 border-black animate-fade-in">
                      <div className="flex flex-wrap gap-2">
                        {["Problem Solver", "Data Scientist", "AI Engineer", "Innovation Leader"].map(
                          (skill, index) => (
                            <span
                              key={skill}
                              className="border-2 border-black px-3 py-1 font-dotgothic text-sm hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
                              style={{ animationDelay: `${index * 0.2}s` }}
                            >
                              [{skill.toUpperCase()}]
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 font-dotgothic">
                    {">"}
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
