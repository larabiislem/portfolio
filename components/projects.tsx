"use client"

import { motion } from "framer-motion"
import { Github, X } from "lucide-react"
import { useState } from "react"

export default function Projects() {
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      title: "Los Pollos Hermanos",
      type: "Mobile",
      github: "https://github.com/larabiislem/Connected-restaurant_client-mobile-app.git",
      description:
        "Smart connected restaurant app with AI-powered dish recommendation and multi-interface system (clients, chefs, servers, managers). Enhances dining experience and optimizes restaurant workflow.",
      tech: ["React Native", "Express.js", "PostgreSQL", "AI"],
      image: "/los-pollos-home.png",
      gallery: ["/los-pollos-home.png", "/los-pollos-orders.png", "/los-pollos-booking.png"],
    },
    {
      title: "A9ra Brk",
      type: "Web",
      github: "https://github.com/larabiislem/A9ra_brk_backend.git",
      description:
        "Peer-to-peer knowledge exchange platform with user management, video classrooms, and course creation. Enables collaborative and social learning through interactive features.",
      tech: ["Next.js", "Express.js", "PostgreSQL", "WebRTC"],
      image: "/aqra-prk-landing.png",
      gallery: ["/aqra-prk-landing.png"],
    },
    {
      title: "SALA7LI",
      type: "Mobile",
      github: "https://github.com/larabiislem/Sala7li_front.git",
      description:
        "Service marketplace connecting clients with skilled professionals (plumbers, electricians, carpenters, etc.) through a negotiation-based experience. Promotes local employment.",
      tech: ["React Native", "MySQL", "Express.js"],
      image: "/aqra-app.png",
      gallery: ["/aqra-app.png"],
    },
    {
      title: "Mobadarati",
      type: "Mobile",
      github: "https://github.com/larabiislem/mobadarati_mobile_app.git",
      description:
        "Platform for Algerian volunteers featuring secure registration, recommended missions, real-time task management, donation tracking, and digital rewards. Empowers communities through organized volunteering.",
      tech: ["React Native", "Firebase", "Express.js", "MongoDB"],
      image: "/mobadarati-app.png",
      gallery: ["/mobadarati-app.png", "/aqra-prk-landing.png"],
    },
    {
      title: "CRM Application",
      type: "Web",
      github: "https://github.com/larabiislem/CRM.git",
      description:
        "Customer Relationship Management app for managing clients, sales, and support. Helps teams organize data, track interactions, and boost productivity.",
      tech: ["Next.js", "Express.js", "PostgreSQL"],
      image: "/crm-dashboard.png",
      gallery: ["/crm-dashboard.png"],
    },
    {
      title: "My Store Website",
      type: "Web",
      github: "https://github.com/larabiislem/My-store-web-site.git",
      description:
        "E-commerce platform built with Next.js using fakestoreapi.com. Includes authentication, product CRUD, filtering, and a clean, modern UI for users.",
      tech: ["Next.js", "Express.js", "PostgreSQL"],
      image: "/ecommerce-store.png",
      gallery: ["/ecommerce-store.png"],
    },
    {
      title: "Komunet",
      type: "Web",
      github: "https://github.com/larabiislem/komunet_web.git",
      description:
        "Social networking platform for community engagement — supports posts, real-time chat, group discussions, event organization, and personalized news feeds.",
      tech: ["Next.js"],
      image: "/komunet-groups.png",
      gallery: ["/komunet-groups.png"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const openGallery = (gallery: string[]) => {
    setSelectedGallery(gallery)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setSelectedGallery(null)
  }

  const nextImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.length)
    }
  }

  const prevImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length)
    }
  }

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          All Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 overflow-hidden transition-all h-full flex flex-col"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden bg-slate-900 h-48 flex-shrink-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-5 space-y-3 flex flex-col flex-grow">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      project.type === "Mobile"
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    }`}
                  >
                    {project.type}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Gallery and Links */}
                <div className="space-y-3 pt-3 border-t border-slate-700/50">
                  {project.gallery && (
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {project.gallery.slice(0, 2).map((img, idx) => (
                          <div
                            key={idx}
                            className="rounded border border-slate-600/50 overflow-hidden flex-shrink-0 cursor-pointer hover:border-blue-400/50 transition-all w-5 h-7"
                            onClick={() => openGallery(project.gallery)}
                          >
                            <img
                              src={img || "/placeholder.svg"}
                              alt={`${project.title} screenshot ${idx + 1}`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform"
                            />
                          </div>
                        ))}
                      </div>
                      {project.gallery.length > 2 && (
                        <button
                          onClick={() => openGallery(project.gallery)}
                          className="text-xs text-blue-400 hover:text-blue-300 px-2 py-1 rounded border border-blue-500/30 hover:border-blue-500/50 transition-all"
                        >
                          +{project.gallery.length - 2}
                        </button>
                      )}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-all flex items-center justify-center gap-1 text-sm"
                    >
                      <Github size={14} /> View Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedGallery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-xl border border-slate-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-all"
            >
              <X size={24} className="text-slate-300" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center bg-slate-950">
              <img
                src={selectedGallery[currentImageIndex] || "/placeholder.svg"}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>

            {selectedGallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-all"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-all"
                >
                  →
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800/80 rounded-lg text-slate-300 text-sm">
              {currentImageIndex + 1} / {selectedGallery.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
