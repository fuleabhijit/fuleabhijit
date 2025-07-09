"use client"

import { useState } from "react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Tweet Sentiment Analyzer",
      description:
        "AI-powered sentiment analysis tool for social media data using NLP techniques and machine learning algorithms.",
      tech: "Python, NLTK, Scikit-learn",
      github: "#",
      features: ["Real-time Analysis", "Multi-language Support", "API Integration"],
    },
    {
      title: "Stock Price Predictor",
      description: "Machine learning model for predicting stock prices using historical data and technical indicators.",
      tech: "Python, TensorFlow, Pandas",
      github: "#",
      features: ["LSTM Networks", "Technical Indicators", "Risk Assessment"],
    },
    {
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot built with natural language processing capabilities for customer support automation.",
      tech: "Python, OpenAI API, Flask",
      github: "#",
      features: ["Context Awareness", "Multi-turn Conversations", "Custom Training"],
    },
  ]

  return (
    <section id="projects" className="py-12 md:py-16 bg-white border-t-4 border-black">
      <div className="container mx-auto px-4">
        <h2 className="font-dotgothic text-2xl md:text-3xl mb-8 md:mb-12 text-center">[PROJECTS.DIR]</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`border-4 border-black bg-white relative group transition-all duration-300 cursor-pointer ${
                selectedProject === index ? "scale-105 shadow-2xl" : "hover:scale-102"
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              {/* Interactive window header */}
              <div className="bg-black text-white p-2 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400"></div>
                  <div className="w-3 h-3 bg-red-400"></div>
                </div>
                <div className="font-dotgothic text-xs">PROJECT_{index + 1}.EXE</div>
              </div>

              {/* Window content */}
              <div className="p-4 md:p-6">
                <h3 className="font-dotgothic text-lg md:text-xl mb-3 group-hover:animate-pulse">{project.title}</h3>
                <p className="text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="text-xs mb-4 font-mono bg-black text-white p-2 break-words">TECH: {project.tech}</div>

                {/* Interactive features list */}
                {selectedProject === index && (
                  <div className="mb-4 animate-fade-in">
                    <div className="font-dotgothic text-sm mb-2">FEATURES:</div>
                    <div className="space-y-1">
                      {project.features.map((feature, fIndex) => (
                        <div key={fIndex} className="font-mono text-xs flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <button className="border-2 border-black px-4 py-2 font-dotgothic text-sm hover:bg-black hover:text-white transition-all duration-200 flex-1">
                    [VIEW_PROJECT]
                  </button>
                  <button className="border-2 border-black px-3 py-2 font-dotgothic text-sm hover:bg-black hover:text-white transition-all duration-200">
                    [CODE]
                  </button>
                </div>
              </div>

              {/* Hover indicator */}
              {hoveredProject === index && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-black flex items-center justify-center animate-bounce">
                  <span className="text-white text-xs">!</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive project counter */}
        <div className="text-center mt-8 md:mt-12">
          <div className="inline-block border-4 border-black bg-white p-4">
            <div className="font-dotgothic text-base md:text-lg">TOTAL_PROJECTS: {projects.length}</div>
            <div className="font-mono text-sm">Click projects for details</div>
          </div>
        </div>
      </div>
    </section>
  )
}
