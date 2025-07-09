import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import QuickLinks from "@/components/quick-links"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-space-grotesk">
      <Navbar />
      <main>
        <Hero />
        <QuickLinks />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
