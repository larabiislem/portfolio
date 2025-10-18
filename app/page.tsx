"use client"
import Hero from "@/components/hero"
import About from "@/components/about"
import Toolbox from "@/components/toolbox"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <Hero />
      <About />
      <Toolbox />
      <Projects />
      <Contact />
    </main>
  )
}
