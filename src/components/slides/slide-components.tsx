"use client"

import type React from "react"
import { useState } from "react"

import { motion } from "framer-motion"
import { Key, Copy, Check, Maximize2, X } from "lucide-react"
import type { Slide } from "@/types/presentation"

interface SlideProps {
  slide: Slide
}

const SlideComponents: React.FC<SlideProps> = ({ slide }) => {
  const [workArea, setWorkArea] = useState("")
  const [generatedPrompts, setGeneratedPrompts] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState<number | null>(null)
  const [fullscreen, setFullscreen] = useState(false)

  // Assuming the slide has the right structure for this component
  const content = [
    {
      title: "Procesamiento del Lenguaje Natural (PLN)",
      icon: "🗣️",
      description: [
        "Permitir a las máquinas entender y procesar el lenguaje humano (texto y voz).",
        "Ejemplos: asistentes virtuales, chatbots, recomendaciones personalizadas.",
      ],
    },
    {
      title: "Ingeniería de Prompts",
      icon: "✍️",
      description: [
        "El arte de comunicarse eficazmente con la IA para obtener resultados específicos.",
        "Diseñar y refinar las 'entradas' para una mejor comprensión de la IA.",
      ],
    },
    {
      title: "Tipos de Modelos de IA",
      icon: "👀",
      description: [
        "Lenguaje (ChatGPT, Gemini): generación y comprensión de texto.",
        "Visión: interpretación de imágenes y videos.",
        "IA Estrecha (la más común hoy): tareas específicas.",
      ],
    },
    {
      title: "Contexto",
      icon: "📚",
      description: [
        "El contexto se refiere a la información adicional que ayuda a la IA a entender mejor las consultas.",
        "Ejemplo: el historial de interacciones previas puede influir en las respuestas actuales.",
      ],
    },
    {
      title: "Historial del Chat",
      icon: "🗒️",
      description: [
        "Registro de interacciones pasadas que permite a la IA recordar y personalizar las respuestas.",
        "Facilita una experiencia más coherente y relevante para el usuario.",
      ],
    },
    {
      title: "System Prompt",
      icon: "🖥️",
      description: [
        "Instrucciones que guían el comportamiento de un modelo de IA para generar respuestas específicas.",
        "Ejemplo: establecer el tono, el estilo y el contexto de las respuestas de la IA.",
      ],
    },
  ]

  const generatePrompts = () => {
    if (!workArea.trim()) return;
    
    setIsGenerating(true);
    
    // Ejemplos de prompts personalizados según el área de trabajo
    const area = workArea.toLowerCase();
    setTimeout(() => {
      const prompts = [
        `## Asistente de Documentación para ${workArea}\n\n**ENTRADA**: El usuario proporcionará requisitos o características que necesitan ser documentados.\n\n**PROCESO**: Analizaré la información proporcionada, organizaré los puntos clave y estructuraré la documentación de manera lógica.\n\n**SALIDA**:\n\`\`\`markdown\n# Documentación de [Característica/Requisito]\n\n## Descripción\n[Descripción detallada]\n\n## Requisitos\n- Requisito 1\n- Requisito 2\n\n## Implementación\n[Pasos de implementación]\n\n## Ejemplos de uso\n[Ejemplos prácticos]\n\`\`\``,
        
        `## Generador de Planes de Proyecto para ${workArea}\n\n**ENTRADA**: El usuario describirá un proyecto que necesita planificar.\n\n**PROCESO**: Dividiré el proyecto en fases lógicas, estableceré hitos y asignaré tiempos estimados.\n\n**SALIDA**:\n\`\`\`markdown\n# Plan de Proyecto: [Nombre del Proyecto]\n\n## Objetivo\n[Objetivo principal]\n\n## Fases del Proyecto\n\n### Fase 1: [Nombre]\n- Duración: [tiempo estimado]\n- Tareas:\n  1. [Tarea 1]\n  2. [Tarea 2]\n- Entregables:\n  - [Entregable 1]\n\n### Fase 2: [Nombre]\n[Detalles de la fase]\n\n## Recursos Necesarios\n- [Recurso 1]\n- [Recurso 2]\n\n## Riesgos y Mitigación\n| Riesgo | Impacto | Estrategia de mitigación |\n|--------|---------|---------------------------|\n| [Riesgo 1] | Alto | [Estrategia] |\n\`\`\``,
        
        `## Asistente de Resolución de Problemas para ${workArea}\n\n**ENTRADA**: El usuario describirá un problema técnico o desafío que está enfrentando.\n\n**PROCESO**: Analizaré el problema, identificaré posibles causas y sugeriré soluciones en orden de probabilidad y facilidad de implementación.\n\n**SALIDA**:\n\`\`\`markdown\n# Análisis de Problema: [Descripción breve]\n\n## Causas Probables\n1. [Causa 1] - Probabilidad: Alta/Media/Baja\n2. [Causa 2] - Probabilidad: Alta/Media/Baja\n\n## Soluciones Recomendadas\n\n### Solución 1\n- **Dificultad**: Fácil/Media/Difícil\n- **Tiempo estimado**: [tiempo]\n- **Pasos**:\n  1. [Paso 1]\n  2. [Paso 2]\n- **Ventajas**: [ventajas]\n- **Desventajas**: [desventajas]\n\n### Solución 2\n[Detalles de la solución]\n\n## Prevención Futura\n- [Recomendación 1]\n- [Recomendación 2]\n\`\`\``,
        
        `## Creador de Informes de Análisis para ${workArea}\n\n**ENTRADA**: El usuario proporcionará datos o métricas que necesitan ser analizados.\n\n**PROCESO**: Organizaré los datos, identificaré tendencias, patrones o anomalías, y extraeré insights significativos.\n\n**SALIDA**:\n\`\`\`markdown\n# Informe de Análisis: [Título]\n\n## Resumen Ejecutivo\n[Resumen conciso de los hallazgos clave]\n\n## Metodología\n[Descripción del enfoque analítico utilizado]\n\n## Hallazgos Clave\n1. [Hallazgo 1]\n   - Detalles: [explicación]\n   - Impacto: [descripción del impacto]\n\n2. [Hallazgo 2]\n   [Detalles del hallazgo]\n\n## Visualización de Datos\n[Descripción de gráficos o visualizaciones relevantes]\n\n## Recomendaciones\n- [Recomendación 1]\n- [Recomendación 2]\n\n## Próximos Pasos\n1. [Acción 1]\n2. [Acción 2]\n\`\`\``,
        
        `## Asistente de Comunicación para ${workArea}\n\n**ENTRADA**: El usuario proporcionará un contexto y audiencia para un mensaje que necesita crear.\n\n**PROCESO**: Analizaré la audiencia objetivo, adaptaré el tono y estilo, y estructuraré el mensaje para máximo impacto.\n\n**SALIDA**:\n\`\`\`markdown\n# [Tipo de Comunicación] para [Audiencia]\n\n## Objetivo del Mensaje\n[Descripción clara del propósito]\n\n## Mensaje Principal\n[Contenido principal formateado apropiadamente]\n\n## Puntos Clave a Enfatizar\n- [Punto 1]\n- [Punto 2]\n- [Punto 3]\n\n## Lenguaje y Tono\n- Tono: [Formal/Informal/Técnico/etc.]\n- Lenguaje: [Características específicas]\n\n## Llamada a la Acción\n[Acción específica que se espera de la audiencia]\n\n## Seguimiento Recomendado\n[Pasos de seguimiento si aplican]\n\`\`\``,
      ];
      
      setGeneratedPrompts(prompts);
      setIsGenerating(false);
    }, 1000);
  };

  const copyToClipboard = (index: number) => {
    navigator.clipboard.writeText(generatedPrompts[index]);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="text-xl font-bold">Cosmopolitan Group</div>
        <div className="text-sm opacity-70">curso 1 de 2 / 03 de abril de 2025</div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[20%] h-[20%] rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      {/* Fullscreen iframe overlay */}
      {fullscreen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center">
          <div className="w-full h-full max-w-7xl max-h-[90vh] relative">
            <button 
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white z-10 transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://dify.andres-wong.com/chatbot/ZM9Cfgj2LLfuIi6Q"
              style={{ width: "100%", height: "100%" }}
              frameBorder="0"
              allow="microphone"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center p-16 pt-24 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <Key className="h-8 w-8 text-indigo-400" />
          <h1 className="text-4xl font-bold">{slide.titulo}</h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-indigo-300 mb-12"
        >
          {slide.subtitulo}
        </motion.h2>

        <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
          {content.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-gradient-to-br from-slate-800/80 to-indigo-900/80 backdrop-blur-sm rounded-xl border border-indigo-500/20 p-6 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
              </div>
              <div className="space-y-3 mt-2">
                {item.description.map((desc, j) => (
                  <p key={j} className="text-white/70 text-sm">
                    {desc}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Chatbot Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 mb-4 w-full max-w-6xl"
        >
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-800/40 backdrop-blur-sm rounded-xl border border-indigo-500/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-medium text-white">Ejemplo de Systemprompt de Chatbot de IA</h3>
              <button 
                onClick={toggleFullscreen}
                className="bg-indigo-600/80 hover:bg-indigo-700/80 text-white rounded-lg px-4 py-2 flex items-center gap-2 transition-all duration-200"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Ver pantalla completa</span>
              </button>
            </div>
            

            <p className="mt-3 text-indigo-300/70 text-sm">
              Este es un chatbot diseñado para probar system prompts. Puedes interactuar con él para experimentar con diferentes prompts y ver cómo responde.
            </p>
          </div>
        </motion.div>

        {/* System Prompt Generator Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-full max-w-6xl bg-gradient-to-br from-indigo-900/40 to-slate-800/40 backdrop-blur-sm rounded-xl border border-indigo-500/20 p-6"
        >
          <h3 className="text-2xl font-medium text-white mb-6">Generador de System Prompts Personalizados</h3>
          
          <div className="mb-6">
            <label htmlFor="workArea" className="block text-indigo-300 mb-2">
              Trabajo en:
            </label>
            <div className="flex gap-4">
              <input
                id="workArea"
                type="text"
                value={workArea}
                onChange={(e) => setWorkArea(e.target.value)}
                placeholder="Ingresa tu área de trabajo..."
                className="flex-1 bg-slate-800/80 border border-indigo-500/30 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
              <button
                onClick={generatePrompts}
                disabled={isGenerating || !workArea.trim()}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  !workArea.trim()
                    ? "bg-slate-700/50 text-white/50 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
              >
                {isGenerating ? "Generando..." : "Generar Prompts"}
              </button>
            </div>
            <p className="mt-2 text-white/60 text-sm">
              Ingresa tu área de trabajo para recibir 5 system prompts personalizados que te ayudarán a trabajar con IA.
            </p>
          </div>

          {generatedPrompts.length > 0 && (
            <div className="space-y-4 mt-6">
              <h4 className="text-xl text-indigo-300 font-medium">System Prompts Generados:</h4>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {generatedPrompts.map((prompt, i) => (
                  <div key={i} className="bg-slate-800/80 rounded-lg border border-indigo-500/20 p-4 relative">
                    <button
                      onClick={() => copyToClipboard(i)}
                      className="absolute top-3 right-3 p-2 bg-slate-700/80 hover:bg-indigo-600/80 rounded-lg transition-all duration-200"
                      title="Copiar prompt"
                    >
                      {copied === i ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-white/70" />
                      )}
                    </button>
                    <div className="prose prose-invert max-w-none text-sm">
                      <pre className="whitespace-pre-wrap font-sans">{prompt}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 max-w-3xl text-center"
        >
          <p className="text-lg text-indigo-300">
            Sin jerga técnica, solo lo esencial para entender y aprovechar la IA.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default SlideComponents

