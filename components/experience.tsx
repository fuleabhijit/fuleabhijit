export default function Experience() {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Araizona Simplesphere",
      period: "2024 - Present",
      description: "Developing AI solutions and machine learning models for enterprise applications.",
    },
    {
      title: "Gen AI Intern",
      company: "CodeFlow Studios",
      period: "2024",
      description: "Worked on generative AI projects and contributed to AI-powered development tools.",
    },
  ]

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-dotgothic text-3xl mb-12 text-center">[EXPERIENCE.LOG]</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-4 border-black bg-white relative group hover:scale-102 transition-transform duration-200"
            >
              {/* Window header */}
              <div className="bg-black text-white p-3 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-white"></div>
                  <div className="w-3 h-3 bg-white"></div>
                  <div className="w-3 h-3 bg-white"></div>
                </div>
                <div className="font-dotgothic text-sm">JOB_{index + 1}.EXE</div>
              </div>

              {/* Window content */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-dotgothic text-xl">{exp.title}</h3>
                    <p className="font-dotgothic text-lg">{exp.company}</p>
                  </div>
                  <div className="font-mono text-sm bg-black text-white px-3 py-1 mt-2 md:mt-0">{exp.period}</div>
                </div>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
