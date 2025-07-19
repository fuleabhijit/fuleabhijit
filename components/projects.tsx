"use client"

import { useState } from "react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Farmer Support Tool",
      description:
        "Built a tool to support farmers—the ones who keep this country running. Snap a photo → instant crop disease diagnosis. Ask by voice → answers in 10+ Indian languages. Check live mandi prices, all in one place. No logins. No clutter. Just useful tech.",
      tech: "Next.js, Firebase Studio, Google Vertex AI, Gov APIs, Tailwind CSS",
      viewLink:
        "https://www.linkedin.com/posts/abhijit-fule_built-a-tool-to-support-farmers-the-ones-activity-7351580200909930497-YSBc",
    },
    {
      title: "Multi-Agent Stock Analyzer",
      description:
        "Multi-Agent AI App that simplifies research on stocks, fundamentals, analyst calls & public sentiment—all in one prompt. Fully modular, extendable, blazing fast.",
      tech: "Streamlit, Python, Agno, Groq, DuckDuckGoTools, YFinanceTools",
      viewLink: "https://www.linkedin.com/posts/abhijit-fule_ai-streamlit-python-activity-7344003364122165249-lZU6",
    },
    {
      title: "EngageFlow – Social Media Engagement Analyzer",
      description:
        "Finalist at Level SuperMind Hackathon. Combines real-time analytics with Instagram-inspired UI for beautiful, actionable social media insights.",
      tech: "React, Tailwind CSS, LangFlow, DataStax",
      viewLink: "https://level-hack.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-12 md:py-16 bg-white border-t-4 border-black">
      <div className="container mx-auto px-4">
        <h2 className="font-dotgothic text-2xl md:text-3xl mb-8 md:mb-12 text-center">[PROJECTS.DIR]</h2>

        {/* 3-Column Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-4 border-black bg-white transition-all duration-300 hover:scale-102 hover:shadow-lg"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Header Bar with Colored Dots */}
              <div className="bg-black text-white p-3 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                </div>
                <div className="font-dotgothic text-sm">PROJECT_{index + 1}.EXE</div>
              </div>

              {/* Card Content with Uniform Spacing */}
              <div className="p-6 flex flex-col">
                {/* Project Title - Monospace ~1.25rem */}
                <h3 className="font-dotgothic text-xl mb-4 leading-tight">{project.title}</h3>

                {/* Description - Max 5-6 lines */}
                <p className="font-mono text-sm leading-relaxed mb-6 text-gray-800 line-clamp-6">
                  {project.description}
                </p>

                {/* TECH_STACK Box - Fixed Height 6rem */}
                <div className="bg-black text-white p-4 mb-6 h-24 flex items-start">
                  <div className="font-mono text-sm">
                    <div className="font-dotgothic mb-2">TECH_STACK:</div>
                    <div className="overflow-wrap-anywhere leading-relaxed">{project.tech}</div>
                  </div>
                </div>

                {/* VIEW_PROJECT Button - Full Width */}
                <a
                  href={project.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border-2 border-black px-4 py-3 font-dotgothic text-sm text-center bg-white text-black hover:bg-black hover:text-white transition-all duration-200"
                >
                  [VIEW_PROJECT]
                </a>
              </div>

              {/* Hover Indicator */}
              {hoveredProject === index && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-black flex items-center justify-center animate-bounce">
                  <span className="text-white text-xs">!</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-12">
          <div className="inline-block border-4 border-black bg-white p-4">
            <div className="font-dotgothic text-lg">TOTAL_PROJECTS: {projects.length}</div>
            <div className="font-mono text-sm">Real projects • Live demos available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
