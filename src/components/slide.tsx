"use client"

import type React from "react"

import { motion } from "framer-motion"
import type { Slide as SlideType, SlideContent } from "@/types/presentation"
import { cn } from "@/lib/utils"
import {
  Briefcase,
  Users,
  MessageCircle,
  BarChart3,
  Sunrise,
  Key,
  Rocket,
  CheckSquare,
  Lightbulb,
  Award,
  HelpCircle,
} from "lucide-react"

interface SlideProps {
  slide: SlideType
  index: number
}

const getIconForTitle = (title: string) => {
  if (title.includes("Amanecer")) return <Sunrise className="h-6 w-6" />
  if (title.includes("Impacto")) return <Rocket className="h-6 w-6" />
  if (title.includes("Beneficios")) return <BarChart3 className="h-6 w-6" />
  if (title.includes("Componentes")) return <Key className="h-6 w-6" />
  if (title.includes("Acción")) return <Rocket className="h-6 w-6" />
  if (title.includes("Herramientas")) return <Briefcase className="h-6 w-6" />
  if (title.includes("Regla")) return <CheckSquare className="h-6 w-6" />
  if (title.includes("Emprendiendo")) return <Lightbulb className="h-6 w-6" />
  if (title.includes("Conclusiones")) return <Award className="h-6 w-6" />
  if (title.includes("Preguntas")) return <HelpCircle className="h-6 w-6" />
  return null
}

const getIconForContent = (text: string) => {
  if (text.includes("Marketing")) return <Rocket className="h-5 w-5 text-blue-400" />
  if (text.includes("Recursos Humanos")) return <Users className="h-5 w-5 text-green-400" />
  if (text.includes("Atención al Cliente")) return <MessageCircle className="h-5 w-5 text-yellow-400" />
  if (text.includes("Finanzas")) return <BarChart3 className="h-5 w-5 text-purple-400" />
  return null
}

const Slide: React.FC<SlideProps> = ({ slide, index }) => {
  const getColorClass = () => {
    switch (slide.color_esquema) {
      case "azul-gris":
        return "from-blue-600/20 to-slate-700/20 border-blue-400/30"
      case "azul-gris-acento":
        return "from-blue-600/20 to-slate-700/20 border-cyan-400/30"
      case "gris-azul-acento":
        return "from-slate-700/20 to-blue-600/20 border-indigo-400/30"
      case "azul-acento":
        return "from-blue-600/20 to-blue-800/20 border-cyan-400/30"
      case "gris-acento":
        return "from-slate-700/20 to-slate-800/20 border-blue-400/30"
      case "acento-gris":
        return "from-cyan-600/20 to-slate-700/20 border-blue-400/30"
      default:
        return "from-blue-600/20 to-slate-700/20 border-blue-400/30"
    }
  }

  const slideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: 0.3 + i * 0.1, duration: 0.4 },
    }),
  }

  // Función para renderizar el contenido según su tipo
  const renderContentItem = (item: SlideContent, i: number) => {
    // Objetos de tipo SlideContent (nuevo formato)
    if ('tipo' in item) {
      if (item.tipo === "texto-principal") {
        return (
          <motion.div
            key={i}
            variants={contentVariants}
            custom={i}
            className="text-white"
          >
            <p className="text-base md:text-lg font-medium">
              {item.texto}
            </p>
          </motion.div>
        )
      } else if (item.tipo === "lista-puntos") {
        return (
          <motion.div
            key={i}
            variants={contentVariants}
            custom={i}
            className="ml-6 space-y-2"
          >
            {item.titulo && (
              <p className="text-base md:text-lg font-medium text-white">{item.titulo}</p>
            )}
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
            variants={contentVariants}
            custom={i}
            className="text-white"
          >
            <p className="text-base md:text-lg font-semibold text-blue-200">
              {item.texto}
            </p>
          </motion.div>
        )
      } else if (item.tipo === "texto-inferior") {
        return (
          <motion.div
            key={i}
            variants={contentVariants}
            custom={i}
            className="text-white mt-4"
          >
            <p className="text-base md:text-lg text-blue-100">
              {item.texto}
            </p>
          </motion.div>
        )
      } else if (item.tipo === "lista-destacada") {
        return (
          <motion.div
            key={i}
            variants={contentVariants}
            custom={i}
            className="space-y-3"
          >
            {item.items.map((punto, j) => (
              <div key={j} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-white/90">{punto}</p>
              </div>
            ))}
          </motion.div>
        )
      } else if (item.tipo === "tabla-contenidos") {
        return (
          <motion.div
            key={i}
            variants={contentVariants}
            custom={i}
            className="space-y-2"
          >
            {item.secciones.map((seccion, j) => (
              <div key={j} className="flex justify-between items-center py-2 border-b border-white/20">
                <p className="text-white/90">{seccion.titulo}</p>
                <p className="text-white/60">{seccion.pagina}</p>
              </div>
            ))}
          </motion.div>
        )
      }
    }
    
    return null;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideVariants}
      key={index}
      className={cn(
        "w-full max-w-5xl rounded-2xl backdrop-blur-xl bg-gradient-to-br border p-8 md:p-12",
        getColorClass(),
      )}
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        {getIconForTitle(slide.titulo) && <div className="text-white/90">{getIconForTitle(slide.titulo)}</div>}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{slide.titulo}</h1>
      </div>

      {slide.subtitulo && (
        <motion.h2 variants={contentVariants} custom={0} className="text-lg md:text-xl text-blue-200 mb-8">
          {slide.subtitulo}
        </motion.h2>
      )}

      <div className="space-y-4">
        {slide.contenido.map((item, i) => renderContentItem(item, i))}
      </div>
    </motion.div>
  )
}

export default Slide

