"use client"

import type React from "react"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import type { Slide } from "@/types/presentation"

interface SlideProps {
  slide: Slide
}

const SlideQuestions: React.FC<SlideProps> = ({ slide }) => {
  const questions = [
    "¿Qué preguntas tienen sobre la aplicación de la IA en sus departamentos?",
    "¿Qué áreas ven con mayor potencial para la implementación de la IA?",
    "¿Cómo podemos colaborar para explorar e implementar soluciones de IA en Cosmopolitan Group?",
  ]

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="text-xl font-bold">Cosmopolitan Group</div>
        <div className="text-sm opacity-70">curso 1 de 2 / 03 de abril de 2025</div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-[100px]"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <HelpCircle className="h-8 w-8 text-blue-400" />
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

        <div className="w-full max-w-4xl space-y-8">
          {questions.map((question, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 flex items-center gap-6"
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-500/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">?</span>
              </div>
              <p className="text-xl text-white">{question}</p>
            </motion.div>
          ))}
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

export default SlideQuestions

