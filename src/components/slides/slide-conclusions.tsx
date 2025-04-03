"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import type { Slide } from "@/types/presentation"

interface SlideProps {
  slide: Slide
}

const SlideConclusions: React.FC<SlideProps> = ({ slide }) => {
  const conclusions = [
    "La IA ya es una herramienta práctica y accesible en el entorno laboral.",
    "Comprender sus fundamentos y aplicaciones es clave para todos.",
    "Puede optimizar procesos, mejorar la toma de decisiones y enriquecer las experiencias.",
    "Herramientas fáciles de usar están democratizando el acceso a la IA.",
    "La 'Regla de 3' facilita la interacción efectiva con la IA.",
    "El aprendizaje continuo es fundamental en este campo en evolución.",
    "¡Aprovechemos juntos el poder de la IA para el éxito de Cosmopolitan Group!",
  ]

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="text-xl font-bold">Cosmopolitan Group</div>
        <div className="text-sm opacity-70">curso 1 de 2 / 03 de abril de 2025</div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 bottom-0 w-[50%] bg-gradient-to-l from-blue-800/30 to-transparent"></div>
        <div className="absolute left-0 bottom-0 w-[40%] h-[40%] rounded-tr-full bg-gradient-to-tr from-indigo-800/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center p-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <Award className="h-8 w-8 text-yellow-300" />
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

        <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
          {conclusions.slice(0, 4).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-blue-500/20 p-5 flex items-start gap-3"
            >
              <div className="h-6 w-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-medium">{i + 1}</span>
              </div>
              <p className="text-white/90">{item}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6 w-full max-w-5xl">
          {conclusions.slice(4, 6).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-blue-500/20 p-5 flex items-start gap-3"
            >
              <div className="h-6 w-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-medium">{i + 5}</span>
              </div>
              <p className="text-white/90">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-6 w-full max-w-5xl"
        >
          <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-500/30 p-5 flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-blue-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm font-medium">7</span>
            </div>
            <p className="text-white font-medium">{conclusions[6]}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SlideConclusions

