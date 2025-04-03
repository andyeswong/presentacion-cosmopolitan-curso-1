"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"
import type { Slide } from "@/types/presentation"

interface SlideProps {
  slide: Slide
}

const SlideLearning: React.FC<SlideProps> = ({ slide }) => {
  const resources = [
    {
      category: "IA como Copiloto en el Trabajo Diario",
      items: [
        "Utilizar asistentes virtuales para la gestión de tareas y recordatorios.",
        "Implementar herramientas de IA para mejorar la productividad y la organización.",
        "Explorar aplicaciones de IA que faciliten la toma de decisiones informadas.",
      ],
    },
    {
      category: "Mejorando la Colaboración con IA",
      items: [
        "Adoptar plataformas que integren IA para la comunicación y el trabajo en equipo.",
        "Participar en formaciones sobre el uso de IA en el entorno laboral.",
        "Mantenerse al tanto de las últimas tendencias en IA para optimizar procesos.",
      ],
    },
  ]

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="text-xl font-bold">Cosmopolitan Group</div>
        <div className="text-sm opacity-70">curso 1 de 2 / 03 de abril de 2025</div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.15) 2%, transparent 0%)",
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-indigo-500/10 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center p-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <Lightbulb className="h-8 w-8 text-yellow-300" />
          <h1 className="text-4xl font-bold">{slide.titulo}</h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-blue-300 mb-16"
        >
          {slide.subtitulo}
        </motion.h2>

        <div className="grid grid-cols-2 gap-12 w-full max-w-6xl">
          {resources.map((resource, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8"
            >
              <h3 className="text-xl font-medium text-white mb-6">{resource.category}</h3>
              <div className="space-y-4">
                {resource.items.map((item, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + j * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="h-6 w-6 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-medium">{j + 1}</span>
                    </div>
                    <p className="text-white/80">{item}</p>
                  </motion.div>
                ))}
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
          <p className="text-lg text-blue-300">La IA está aquí para asistirnos y mejorar nuestro trabajo; al final, somos nosotros quienes tomamos las decisiones.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default SlideLearning

