export default function Certifications() {
  const certifications = [
    {
      title: "Practical GitHub Actions",
      issuer: "LinkedIn Learning",
      date: "Feb 2025",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Forage",
      date: "Jun 2025",
    },
    {
      title: "Full Data Science Bootcamp",
      issuer: "Udemy",
      date: "2024",
    },
  ]

  return (
    <section id="certifications" className="py-16 bg-white border-t-4 border-black">
      <div className="container mx-auto px-4">
        <h2 className="font-dotgothic text-3xl mb-12 text-center">[CERTIFICATIONS.ZIP]</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border-4 border-black bg-white p-6 relative group hover:scale-105 transition-transform duration-200"
            >
              {/* Stamp-like design */}
              <div className="absolute top-2 right-2 w-8 h-8 border-2 border-black transform rotate-12">
                <div className="w-full h-full flex items-center justify-center font-dotgothic text-xs">✓</div>
              </div>

              <div className="pr-8">
                <h3 className="font-dotgothic text-lg mb-2">{cert.title}</h3>
                <p className="text-sm mb-2 font-mono">{cert.issuer}</p>
                <div className="text-xs bg-black text-white px-2 py-1 inline-block">{cert.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
