"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function About() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-50"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-slate-700/50 overflow-hidden">
                <img src="/larabi-profile.jpeg" alt="Larabi Islam" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm <span className="font-semibold text-blue-400">Larabi Islam</span>, a passionate and curious computer
              science student in my 1st year Master's program in Intelligent Computer Systems at USTHB (Algeria).
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                
                <p className="text-slate-300">
                  I enjoy building real-world applications that solve real problems and make a tangible impact.
                </p>
              </div>
              <div className="flex gap-3">
                
                <p className="text-slate-300">
                  Full-stack web & mobile developer, always looking to learn, grow, and contribute to open source or
                  collaborative projects.
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-300 font-semibold">Let's build something meaningful together! 🤝</p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-slate-800/50 hover:bg-blue-500/20 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all"
                  >
                    <Icon size={24} className="text-blue-400" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
