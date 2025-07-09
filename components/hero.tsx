"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isBooting, setIsBooting] = useState(true)
  const [bootProgress, setBootProgress] = useState(0)

  const fullText = "Hello. I'm Abhijit."
  const bootMessages = [
    "INITIALIZING SYSTEM...",
    "LOADING PORTFOLIO.EXE...",
    "CONNECTING TO DATABASE...",
    "SYSTEM READY",
  ]

  useEffect(() => {
    // Boot sequence
    const bootTimer = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(bootTimer)
          setIsBooting(false)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(bootTimer)
  }, [])

  useEffect(() => {
    if (!isBooting) {
      let index = 0
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.slice(0, index + 1))
          index++
        } else {
          clearInterval(timer)
        }
      }, 100)

      return () => clearInterval(timer)
    }
  }, [isBooting])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  if (isBooting) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="text-center font-mono w-full max-w-md">
          <div className="mb-8">
            {bootMessages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 text-sm md:text-base ${bootProgress > index * 25 ? "opacity-100" : "opacity-30"}`}
              >
                {">"} {msg}
              </div>
            ))}
          </div>
          <div className="w-full max-w-64 h-4 border-2 border-white mx-auto mb-4">
            <div className="h-full bg-white transition-all duration-100" style={{ width: `${bootProgress}%` }}></div>
          </div>
          <div className="font-dotgothic text-sm md:text-base">[{bootProgress}%]</div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden px-4">
      <div className="container mx-auto text-center">
        {/* Simplified geometric design - responsive */}
        <div className="mb-8 md:mb-12 animate-fade-in">
          <div className="relative mx-auto w-36 h-20 md:w-48 md:h-24 mb-6 md:mb-8">
            {/* Main rectangle */}
            <div className="absolute inset-0 border-4 border-black bg-white"></div>

            {/* Decorative elements - responsive */}
            <div className="absolute -top-2 left-6 md:left-8 w-6 md:w-8 h-2 bg-black"></div>
            <div className="absolute -bottom-2 right-6 md:right-8 w-6 md:w-8 h-2 bg-black"></div>
            <div className="absolute top-3 md:top-4 left-3 md:left-4 w-2 h-3 md:h-4 border-2 border-black"></div>
            <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-2 h-3 md:h-4 border-2 border-black"></div>

            {/* Center text - responsive */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-dotgothic text-lg md:text-2xl">PORTFOLIO</div>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-l-4 border-t-4 border-black"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-r-4 border-t-4 border-black"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-4 border-b-4 border-black"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-4 border-b-4 border-black"></div>
          </div>
        </div>

        <h1 className="font-dotgothic text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 min-h-[3rem] md:min-h-[4rem] px-4">
          {displayText}
          <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 font-space-grotesk animate-fade-in max-w-2xl mx-auto leading-relaxed px-4">
          "Transforming data into decisions through innovation and analytical thinking."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
          <button className="group border-4 border-black bg-white px-6 md:px-8 py-3 md:py-4 font-dotgothic text-base md:text-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto">
            [VIEW_RESUME.PDF]
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-300">{">"}</span>
          </button>

          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group border-4 border-black bg-black text-white px-6 md:px-8 py-3 md:py-4 font-dotgothic text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            [VIEW_PROJECTS]
            <span className="ml-2 group-hover:animate-bounce">↓</span>
          </button>
        </div>

        {/* Responsive stats */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 text-sm font-mono px-4">
          <div className="border-2 border-black px-3 md:px-4 py-2 bg-white">
            <div className="font-dotgothic text-xs md:text-sm">EXPERIENCE</div>
            <div className="text-xs md:text-sm">2+ YEARS</div>
          </div>
          <div className="border-2 border-black px-3 md:px-4 py-2 bg-white">
            <div className="font-dotgothic text-xs md:text-sm">PROJECTS</div>
            <div className="text-xs md:text-sm">10+ BUILT</div>
          </div>
          <div className="border-2 border-black px-3 md:px-4 py-2 bg-white">
            <div className="font-dotgothic text-xs md:text-sm">FOCUS</div>
            <div className="text-xs md:text-sm">AI & DATA</div>
          </div>
        </div>
      </div>

      {/* Much lighter grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(black 1px, transparent 1px),
            linear-gradient(90deg, black 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
    </section>
  )
}
