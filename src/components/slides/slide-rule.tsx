"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CheckSquare } from "lucide-react"
import type { Slide } from "@/types/presentation"

interface SlideProps {
  slide: Slide
}

const SlideRule: React.FC<SlideProps> = ({ slide }) => {
  const steps = [
    {
      number: "01",
      title: "Entrada",
      description: "Lo que le das a la IA (pregunta, texto, imagen).",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500",
    },
    {
      number: "02",
      title: "Tarea",
      description: "Lo que quieres que la IA haga (resumir, traducir, generar ideas).",
      color: "from-indigo-500/20 to-indigo-600/20",
      borderColor: "border-indigo-500",
    },
    {
      number: "03",
      title: "Salida",
      description: "El resultado o formato deseado (lista, párrafo, tono específico).",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500",
    },
  ]

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="text-xl font-bold">Cosmopolitan Group</div>
        <div className="text-sm opacity-70">curso 1 de 2 / 03 de abril de 2025</div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center p-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <CheckSquare className="h-8 w-8 text-blue-400" />
          <h1 className="text-4xl font-bold">{slide.titulo}</h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-blue-300 mb-6"
        >
          {slide.subtitulo}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-3xl mb-12 text-white/80"
        >
          Desmitificando la interacción con la IA: un marco simple.
        </motion.p>

        <div className="flex flex-col gap-8 w-full max-w-4xl">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className={`bg-gradient-to-r ${step.color} backdrop-blur-sm rounded-xl border ${step.borderColor}/30 p-6 flex items-center gap-6`}
            >
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-1">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 max-w-3xl text-center"
        >
          <p className="text-lg text-blue-300">
            Ejemplos prácticos: Resumir un artículo, generar ideas, traducir texto, escribir una publicación en redes
            sociales.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default SlideRule

