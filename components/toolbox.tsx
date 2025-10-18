"use client"

import { motion } from "framer-motion"

export default function Toolbox() {
  const tools = [
    // Frontend
    { name: "React", category: "Frontend" },
    { name: "React Native", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    // Databases
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Firebase", category: "Database" },
    { name: "Oracle", category: "Database" },
    { name: "Teradata", category: "Database" },
    // DevOps
    { name: "Docker", category: "DevOps" },
  ]

  const categories = ["Frontend", "Backend", "Database", "DevOps"]

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

  return (
    <section id="toolbox" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          My Toolbox
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all cursor-pointer overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all"></div>

              <div className="relative z-10 flex flex-col items-center gap-3">
                <p className="font-semibold text-slate-200 text-center text-lg">{tool.name}</p>
                <p className="text-xs text-slate-400">{tool.category}</p>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 text-slate-200 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {tool.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
