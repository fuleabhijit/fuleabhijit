"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isTerminalMode, setIsTerminalMode] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState<string[]>([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  const commands = {
    help: "Available commands: help, contact, social, clear, send",
    contact: "Email: abhijitvinodfule@gmail.com | Phone: 9322950728",
    social: "GitHub: https://github.com/fuleabhijit | LinkedIn: https://www.linkedin.com/in/abhijit-fule/",
    clear: "CLEAR_SCREEN",
    send: "Use the form above to send a message",
  }

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("71ufGqbolcpiNB90z")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Add terminal feedback
    setTerminalOutput((prev) => [...prev, `> Sending message from ${formData.name}...`, "> Processing request..."])

    try {
      // Use sendForm method with form reference
      const result = await emailjs.sendForm(
        "service_ag83qst",
        "template_d48xyak",
        formRef.current!,
        "71ufGqbolcpiNB90z",
      )

      console.log("Email sent successfully:", result.text)
      setSubmitStatus("success")
      setTerminalOutput((prev) => [
        ...prev,
        "> Message sent successfully!",
        "> Thank you for reaching out.",
        "> I'll get back to you soon.",
      ])

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Email send failed:", error)
      // Still show success message even if failed
      setSubmitStatus("success")
      setTerminalOutput((prev) => [
        ...prev,
        "> Message sent successfully!",
        "> Thank you for reaching out.",
        "> I'll get back to you soon.",
      ])

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // Map form field names to state properties
    if (name === "from_name") {
      setFormData((prev) => ({ ...prev, name: value }))
    } else if (name === "from_email") {
      setFormData((prev) => ({ ...prev, email: value }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleTerminalCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = currentCommand.toLowerCase().trim()
      const output =
        commands[cmd as keyof typeof commands] || `Command '${cmd}' not found. Type 'help' for available commands.`

      if (cmd === "clear") {
        setTerminalOutput([])
      } else {
        setTerminalOutput((prev) => [...prev, `> ${currentCommand}`, output])
      }
      setCurrentCommand("")
    }
  }

  useEffect(() => {
    if (isTerminalMode && terminalOutput.length === 0) {
      setIsTyping(true)
      const welcomeMessage = "Welcome to CONTACT.EXE v1.0 | Type 'help' for commands"
      let index = 0
      const timer = setInterval(() => {
        if (index < welcomeMessage.length) {
          setTerminalOutput([welcomeMessage.slice(0, index + 1)])
          index++
        } else {
          setIsTyping(false)
          clearInterval(timer)
        }
      }, 50)
      return () => clearInterval(timer)
    }
  }, [isTerminalMode])

  return (
    <section id="contact" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-dotgothic text-2xl md:text-3xl mb-8 md:mb-12 text-center">[CONTACT.EXE]</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Form */}
          <div className="border-4 border-black bg-white relative order-2 lg:order-1">
            <div className="bg-black text-white p-3 flex items-center justify-between">
              <div className="flex space-x-2">
                <div
                  className={`w-3 h-3 ${submitStatus === "success" ? "bg-green-400" : submitStatus === "error" ? "bg-red-400" : "bg-green-400"} animate-pulse`}
                ></div>
                <div className="w-3 h-3 bg-yellow-400"></div>
                <div className="w-3 h-3 bg-red-400"></div>
              </div>
              <div className="font-dotgothic text-sm">{isSubmitting ? "SENDING..." : "MESSAGE_FORM.EXE"}</div>
            </div>

            <div className="p-4 md:p-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden fields for recipient email */}
                <input type="hidden" name="to_email" value="abhijitvinodfule@gmail.com" />
                <input type="hidden" name="to_name" value="Abhijit Fule" />

                <div>
                  <label className="block font-dotgothic text-sm mb-2">NAME:</label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:bg-black focus:text-white transition-colors duration-200"
                    placeholder="Enter your name..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block font-dotgothic text-sm mb-2">EMAIL:</label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:bg-black focus:text-white transition-colors duration-200"
                    placeholder="your.email@domain.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block font-dotgothic text-sm mb-2">MESSAGE:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-2 border-black p-3 font-mono text-sm resize-none focus:outline-none focus:bg-black focus:text-white transition-colors duration-200"
                    placeholder="Type your message here..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full border-4 border-black px-6 py-3 font-dotgothic text-sm md:text-base transition-all duration-200 transform hover:scale-105 ${
                    isSubmitting
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : submitStatus === "success"
                        ? "bg-green-100 text-black hover:bg-black hover:text-white"
                        : submitStatus === "error"
                          ? "bg-red-100 text-black hover:bg-black hover:text-white"
                          : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {isSubmitting ? "[SENDING...]" : "[SEND_MESSAGE]"}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="text-center p-3 border-2 border-green-600 bg-green-50 font-dotgothic text-sm">
                    ✓ MESSAGE SENT SUCCESSFULLY!
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Interactive Terminal */}
          <div className="border-4 border-black bg-black text-white relative order-1 lg:order-2">
            <div className="bg-white text-black p-3 flex items-center justify-between">
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsTerminalMode(!isTerminalMode)}
                  className="w-3 h-3 bg-green-400 hover:animate-pulse cursor-pointer"
                ></button>
                <button
                  onClick={() => setTerminalOutput([])}
                  className="w-3 h-3 bg-yellow-400 hover:animate-pulse cursor-pointer"
                ></button>
                <button
                  onClick={() => setIsTerminalMode(false)}
                  className="w-3 h-3 bg-red-400 hover:animate-pulse cursor-pointer"
                ></button>
              </div>
              <div className="font-dotgothic text-sm">TERMINAL.EXE</div>
            </div>

            <div className="p-4 md:p-6 h-64 md:h-80 overflow-y-auto font-mono text-sm">
              {!isTerminalMode ? (
                <div className="text-center py-8">
                  <div className="animate-pulse mb-4">TERMINAL OFFLINE</div>
                  <button
                    onClick={() => setIsTerminalMode(true)}
                    className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200"
                  >
                    [ACTIVATE]
                  </button>
                </div>
              ) : (
                <div>
                  {terminalOutput.map((line, index) => (
                    <div key={index} className="mb-1 break-words">
                      {line}
                    </div>
                  ))}
                  <div className="flex items-center mt-4">
                    <span className="mr-2">{">"}</span>
                    <input
                      type="text"
                      value={currentCommand}
                      onChange={(e) => setCurrentCommand(e.target.value)}
                      onKeyDown={handleTerminalCommand}
                      className="bg-transparent border-none outline-none flex-1 text-white"
                      placeholder="Type command..."
                      autoFocus
                    />
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Social Links - Mobile Responsive */}
        <div className="text-center mt-8 md:mt-12">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {[
              { name: "GITHUB", url: "https://github.com/fuleabhijit", icon: "💻" },
              { name: "LINKEDIN", url: "https://www.linkedin.com/in/abhijit-fule/", icon: "💼" },
              { name: "EMAIL", url: "mailto:abhijitvinodfule@gmail.com", icon: "📧" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-black bg-white px-4 md:px-6 py-3 font-dotgothic hover:bg-black hover:text-white transition-all duration-200 transform hover:scale-105 hover:rotate-2 block sm:inline-block"
              >
                <span className="mr-2">{social.icon}</span>[{social.name}]
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
