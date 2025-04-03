"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Sunrise } from "lucide-react"
import type { Slide } from "@/types/presentation"

interface SlideProps {
  slide: Slide
}

const SlideIntroduction: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="text-xl font-bold">Cosmopolitan Group</div>
        <div className="text-sm opacity-70">curso 1 de 2 / 03 de abril de 2025</div>
      </div>

      {/* Background elements */}
      <div className="absolute right-0 top-0 w-[60%] h-screen">
        <div className="absolute top-[10%] right-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-3xl"></div>
        <svg className="absolute right-0 top-0 h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="90" cy="50" r="40" fill="url(#grad1)" />
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(30, 58, 138, 0)" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="absolute left-0 top-0 h-full w-[60%] p-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <Sunrise className="h-8 w-8 text-blue-400" />
          <h1 className="text-5xl font-bold">{slide.titulo}</h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-blue-300 mb-12"
        >
          {slide.subtitulo}
        </motion.h2>

        <div className="space-y-8">
          {slide.contenido.map((item, i) => {
            if (item.tipo === "texto-principal") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <h3 className="text-xl font-medium text-white">{item.texto}</h3>
                </motion.div>
              )
            } else if (item.tipo === "lista-puntos") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="ml-6 space-y-2"
                >
                  {item.items.map((punto, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2"></div>
                      <p className="text-white/80">{punto}</p>
                    </div>
                  ))}
                </motion.div>
              )
            } else if (item.tipo === "texto-destacado") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="mt-8"
                >
                  <p className="text-xl font-semibold text-blue-300">{item.texto}</p>
                </motion.div>
              )
            }
            return null
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-16 left-16"
        >
          <p className="text-sm text-white/60">Andrés González Wong, Enteracloud</p>
        </motion.div>
      </div>
    </div>
  )
}

export default SlideIntroduction

