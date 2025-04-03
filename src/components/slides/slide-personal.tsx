"use client"

import type React from "react"

import { motion } from "framer-motion"
import { User } from "lucide-react"
import type { Slide } from "@/types/presentation"

interface SlideProps {
  slide: Slide
}

const SlidePersonal: React.FC<SlideProps> = ({ slide }) => {
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
      </div>

      {/* Content */}
      <div className="absolute left-0 top-0 h-full w-full p-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex-shrink-0"
          >
            <div className="w-64 h-96 rounded-md bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center overflow-hidden border-4 border-white/20">
              <img src="me.jpeg" alt="Profile" className="w-full h-full object-cover rounded-md" />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <h1 className="text-4xl font-bold mb-3">Andrés González Wong</h1>
            <h2 className="text-2xl text-blue-300 mb-6">Ingeniero en Software especializado en Inteligencia Artificial</h2>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2"></div>
                  <p className="text-white/80">Programador desde los 7 años y experiencia con servidores desde los 14</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2"></div>
                  <p className="text-white/80">Desarrollo profesional desde los 17 años creando soluciones privadas</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2"></div>
                  <p className="text-white/80">CTO de una multinacional con 500 empleados (EE.UU. y México)</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2"></div>
                  <p className="text-white/80">Liderazgo en certificaciones ISO 9001:2015 y preparación para ISO 27000/27001</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2"></div>
                  <p className="text-white/80">Lideré equipos de BI, Desarrollo y digitalización departamental</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2"></div>
                  <p className="text-white/80">Especialización en IA con Enteracloud</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SlidePersonal 