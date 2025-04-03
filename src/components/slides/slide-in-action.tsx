"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Rocket, Users, MessageCircle, BarChart3 } from "lucide-react"
import type { Slide } from "@/types/presentation"

interface SlideProps {
  slide: Slide
}

const SlideInAction: React.FC<SlideProps> = ({ slide }) => {
  const departments = [
    {
      name: "Marketing",
      icon: <Rocket className="h-6 w-6 text-blue-400" />,
      points: [
        "Personalización de experiencias del cliente.",
        "Automatización de creación de contenido (Jasper, Gemini).",
        "Optimización de campañas y segmentación precisa.",
      ],
    },
    {
      name: "Recursos Humanos",
      icon: <Users className="h-6 w-6 text-green-400" />,
      points: [
        "Agilización de la contratación (Workday).",
        "Mejora del compromiso y desarrollo personalizado.",
        "Creación de descripciones de puestos y materiales de capacitación (Gemini).",
      ],
    },
    {
      name: "Atención al Cliente",
      icon: <MessageCircle className="h-6 w-6 text-yellow-400" />,
      points: [
        "Soporte instantáneo y automatizado (chatbots).",
        "Análisis del sentimiento del cliente.",
        "Respuestas personalizadas (Gemini).",
      ],
    },
    {
      name: "Finanzas",
      icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
      points: [
        "Detección de fraudes.",
        "Automatización de informes.",
        "Predicción de tendencias (potencial con Gemini para análisis de datos).",
      ],
    },
    {
      name: "Ventas",
      icon: <BarChart3 className="h-6 w-6 text-red-400" />,
      points: [
        "Análisis de datos de ventas para identificar oportunidades.",
        "Automatización de seguimiento de clientes potenciales.",
        "Optimización de precios y promociones.",
      ],
    },
    {
      name: "Logística",
      icon: <BarChart3 className="h-6 w-6 text-orange-400" />,
      points: [
        "Optimización de rutas de entrega.",
        "Predicción de demanda y gestión de inventarios.",
        "Automatización de procesos de envío.",
      ],
    },
    {
      name: "Desarrollo de Productos",
      icon: <BarChart3 className="h-6 w-6 text-teal-400" />,
      points: [
        "Análisis de tendencias del mercado para nuevas ideas de productos.",
        "Automatización de pruebas de calidad.",
        "Personalización de productos según preferencias del cliente.",
      ],
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
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center p-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <Rocket className="h-8 w-8 text-blue-400" />
          <h1 className="text-4xl font-bold">{slide.titulo}asd</h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-blue-300 mb-12"
        >
          {slide.subtitulo}
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
          {departments.map((dept, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                {dept.icon}
                <h3 className="text-xl font-medium text-white">{dept.name}</h3>
              </div>
              <div className="space-y-3 ml-2">
                {dept.points.map((point, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2"></div>
                    <p className="text-white/80">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlideInAction

