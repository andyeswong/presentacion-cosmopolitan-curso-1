"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import type { Slide } from "@/types/presentation"

interface SlideProps {
  slide: Slide
}

const SlideToolbox: React.FC<SlideProps> = ({ slide }) => {
  const tools = [
    {
      category: "Asistentes de Escritura",
      tools: [
        { name: "ChatGPT", url: "https://www.openai.com/chatgpt" },
        { name: "Jasper AI", url: "https://www.jasper.ai" },
        { name: "Rytr", url: "https://rytr.me" },
      ],
      description: "Para generar texto y contenido",
    },
    {
      category: "Comunicación y Reuniones",
      tools: [
        { name: "Fireflies", url: "https://fireflies.ai" },
        { name: "Fathom", url: "https://fathom.video" },
      ],
      description: "Transcripción y resumen de reuniones",
    },
    {
      category: "Productividad y Organización",
      tools: [
        { name: "Guru", url: "https://www.getguru.com" },
      ],
      description: "Búsqueda de información empresarial",
    },
    {
      category: "Creación de Contenido",
      tools: [
        { name: "Canva Magic Studio", url: "https://www.canva.com/magic-studio" },
        { name: "Synthesia", url: "https://www.synthesia.io" },
        { name: "V0", url: "https://v0.dev" },
        { name: "ScriptWise", url: "https://scriptwise.mx" },
      ],
      description: "Diseño y video fáciles, generación de landing pages o contenido con UI/UX",
    },
    {
      category: "Análisis de Datos",
      tools: [
        { name: "Google Analytics 4", url: "https://analytics.google.com" },
        { name: "HubSpot", url: "https://www.hubspot.com" },
      ],
      description: "Con funciones de IA integradas",
    },
  ]

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="text-xl font-bold">Cosmopolitan Group</div>
        <div className="text-sm opacity-70">curso 1 de 2 / 03 de abril de 2025</div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-bl from-blue-800/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-indigo-800/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center p-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <Briefcase className="h-8 w-8 text-blue-400" />
          <h1 className="text-4xl font-bold">{slide.titulo}</h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-blue-300 mb-12"
        >
          {slide.subtitulo}
        </motion.h2>

        <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
          {tools.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6 flex flex-col"
            >
              <h3 className="text-lg font-medium text-white mb-3">{item.category}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {Array.isArray(item.tools) && item.tools.map((tool, j) => (
                  <a key={j} href={tool.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300">
                    {typeof tool.name === 'string' ? tool.name : ''}
                  </a>
                ))}
              </div>
              <p className="text-white/70 text-sm mt-auto">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 max-w-3xl text-center"
        >
          <p className="text-lg text-blue-300">IA al alcance de todos, sin necesidad de ser expertos</p>
        </motion.div>
      </div>
    </div>
  )
}

export default SlideToolbox

