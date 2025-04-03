"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Rocket } from "lucide-react"
import type { Slide } from "@/types/presentation"

interface SlideProps {
  slide: Slide
}

const SlideImpact: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="text-xl font-bold">Cosmopolitan Group</div>
        <div className="text-sm opacity-70">curso 1 de 2 / 03 de abril de 2025</div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-[60%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0"></div>
        <div className="absolute left-[60%] top-[50%] w-[40%] h-[1px] bg-gradient-to-r from-blue-500/20 to-blue-500/0"></div>
        <div className="absolute right-[10%] top-[30%] w-[20vw] h-[20vw] rounded-full border border-blue-500/10"></div>
        <div className="absolute right-[15%] top-[35%] w-[10vw] h-[10vw] rounded-full border border-blue-500/20"></div>
      </div>

      {/* Content */}
      <div className="absolute left-0 top-0 h-full w-[60%] p-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <Rocket className="h-8 w-8 text-blue-400" />
          <h1 className="text-3xl font-bold">{slide.titulo}</h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-blue-300 mb-12"
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
                  <p className="text-lg font-medium text-white">{item.texto}</p>
                </motion.div>
              )
            } else if (item.tipo === "lista-puntos") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="space-y-4"
                >
                  {item.titulo && <h3 className="text-lg font-medium text-white">{item.titulo}</h3>}
                  <div className="ml-6 space-y-3">
                    {item.items.map((punto, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 + j * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2"></div>
                        <p className="text-white/80">{punto}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            } else if (item.tipo === "texto-destacado") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="mt-8 p-4 border-l-2 border-blue-400 bg-blue-500/10"
                >
                  <p className="text-lg font-medium text-blue-300">{item.texto}</p>
                </motion.div>
              )
            }
            return null
          })}
        </div>
      </div>

      {/* Right side image/illustration */}
      <div className="absolute right-0 top-0 h-full w-[40%] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl blur-xl"></div>
          <div className="relative bg-slate-800/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-[25vw]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-300 text-lg">01</span>
                </div>
                <div>
                  <h4 className="font-medium">Automatización</h4>
                  <p className="text-sm text-white/60">Tareas repetitivas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <span className="text-indigo-300 text-lg">02</span>
                </div>
                <div>
                  <h4 className="font-medium">Personalización</h4>
                  <p className="text-sm text-white/60">Experiencia del cliente</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-300 text-lg">03</span>
                </div>
                <div>
                  <h4 className="font-medium">Asistencia</h4>
                  <p className="text-sm text-white/60">Chatbots y asistentes</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SlideImpact

