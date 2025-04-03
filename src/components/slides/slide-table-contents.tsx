"use client"

import { motion } from "framer-motion"

const SlideTableOfContents = () => {
  const sections = [
    { number: "01", title: "Introducción", subtitle: "El Amanecer de la IA" },
    { number: "02", title: "Impacto", subtitle: "Más allá de la Tecnología" },
    { number: "03", title: "Beneficios", subtitle: "Valor Tangible" },
    { number: "04", title: "Componentes", subtitle: "Conceptos Clave" },
    { number: "05", title: "IA en Acción", subtitle: "Transformando Departamentos" },
    { number: "06", title: "Herramientas", subtitle: "Caja de Herramientas" },
    { number: "07", title: "Regla de 3", subtitle: "Guía Sencilla" },
    { number: "08", title: "IA como Copiloto", subtitle: "Asistente efectivo" },
    { number: "09", title: "Conclusiones", subtitle: "Aliada Estratégica" },
    { number: "10", title: "Discusión", subtitle: "Preguntas y Respuestas" },
  ]

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="text-xl font-bold">Cosmopolitan Group</div>
        <div className="text-sm opacity-70">curso 1 de 2 / 03 de abril de 2025</div>
      </div>

      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Tabla de Contenidos
        </motion.h1>

        <div className="grid grid-cols-5 gap-6 w-full max-w-6xl">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="flex flex-col items-center"
            >
              <div className="text-2xl font-bold text-blue-300 mb-2">{section.number}</div>
              <div className="h-32 w-px bg-gradient-to-b from-blue-400/80 to-blue-400/20"></div>
              <div className="text-center mt-4">
                <div className="font-medium">{section.title}</div>
                <div className="text-sm text-blue-300/80 mt-1">{section.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlideTableOfContents

