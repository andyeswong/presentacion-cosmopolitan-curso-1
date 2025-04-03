"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"
import type { Slide } from "@/types/presentation"

interface SlideProps {
  slide: Slide
}

const SlideWorkflow: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="text-xl font-bold">Cosmopolitan Group</div>
        <div className="text-sm opacity-70">curso 1 de 2 / 03 de abril de 2025</div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-[30%] left-[50%] transform -translate-x-1/2 translate-y-1/2 w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="absolute left-0 top-0 h-full w-full p-16 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center flex-col gap-4 mb-8"
        >
          <Lightbulb className="h-16 w-16 text-yellow-300" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold mb-6 max-w-4xl"
        >
          Identificando Oportunidades: IA en tu Workflow Diario
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-blue-300 max-w-3xl"
        >
          Aplicaciones prácticas para aumentar tu productividad y transformar tu día a día profesional
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mx-auto"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default SlideWorkflow 