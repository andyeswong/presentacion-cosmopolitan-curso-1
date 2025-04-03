"use client"

import type React from "react"
import { useState } from "react"

import { motion } from "framer-motion"
import { BarChart3, Clipboard, Check, Maximize2, Minimize2, X } from "lucide-react"
import type { Slide } from "@/types/presentation"

interface SlideProps {
  slide: Slide
}

const SlideBenefits: React.FC<SlideProps> = ({ slide }) => {
  const [copied, setCopied] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  
  const promptText = `¡Hola Kanny! Listo para empezar la semana aquí en Tijuana. Necesito organizar varias cosas hoy.

Tengo pendiente:
- Llamar al cliente Sr. Fernández para confirmar reunión.
- Comprar los boletos de avión para el viaje de negocios.
- Hacer la lista del supermercado.

Ya estoy trabajando en:
- Preparar el borrador del informe trimestral.

Y (¡por fin!) terminé:
- Responder todos los correos del viernes pasado.

¿Puedes ayudarme a poner esto en orden? Quizás un tablero Kanban me ayudaría a verlo claro. ¿Qué crees que debería ser mi prioridad #1 hoy?`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promptText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-100 to-blue-50 text-slate-800 relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="text-xl font-bold text-slate-800">Cosmopolitan Group</div>
        <div className="text-sm text-slate-600">curso 1 de 2 / 03 de abril de 2025</div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-[50%] h-[50%] bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-[100px]"></div>
        <div className="absolute left-0 bottom-0 w-[30%] h-[30%] bg-gradient-to-tr from-blue-100 to-transparent rounded-tr-[50px]"></div>
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
              src="https://dify.andres-wong.com/chatbot/v2ZXUu0x8bBc78X8"
              style={{ width: "100%", height: "100%" }}
              frameBorder="0"
              allow="microphone"
              className="rounded-lg"
            ></iframe>
          </div>
          <div className="mt-4">
            <button
              onClick={copyToClipboard}
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-all duration-200 shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>¡Prompt copiado!</span>
                </>
              ) : (
                <>
                  <Clipboard className="w-5 h-5" />
                  <span>Copiar prompt de prueba</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <BarChart3 className="h-8 w-8 text-blue-500" />
          <h1 className="text-4xl font-bold text-slate-800">{slide.titulo}</h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-blue-600 mb-8"
        >
          {slide.subtitulo}
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Beneficios directos:</h3>
            {slide.contenido.map((item, i) => {
              if (item.tipo === "lista-destacada") {
                return (
                  <div key={i} className="space-y-4">
                    {item.items.slice(0, 2).map((punto, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + j * 0.1 }}
                        className="bg-white rounded-xl shadow-lg p-4 border-l-4 border-blue-500"
                      >
                        <p className="text-base font-medium text-slate-800">{punto}</p>
                      </motion.div>
                    ))}
                  </div>
                )
              }
              return null
            })}
            
            {slide.contenido.map((item, i) => {
              if (item.tipo === "lista-destacada") {
                return (
                  <div key={i} className="space-y-4 mt-2">
                    {item.items.slice(2, 4).map((punto, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + j * 0.1 }}
                        className="bg-white rounded-xl shadow-lg p-4 border-l-4 border-blue-500"
                      >
                        <p className="text-base font-medium text-slate-800">{punto}</p>
                      </motion.div>
                    ))}
                  </div>
                )
              }
              return null
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden relative">
              <div className="p-3 bg-blue-500 text-white font-medium flex justify-between items-center">
                <span>Ejemplo: IA para gestión de tareas y productividad</span>
                <button 
                  onClick={toggleFullscreen}
                  className="bg-white/10 hover:bg-white/20 rounded-full p-1 transition-all duration-200"
                  title="Ver en pantalla completa"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
              
            </div>
            
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              onClick={copyToClipboard}
              className="flex items-center justify-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 py-3 px-4 rounded-lg transition-all duration-200 shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>¡Prompt copiado!</span>
                </>
              ) : (
                <>
                  <Clipboard className="w-5 h-5" />
                  <span>Copiar prompt de prueba</span>
                </>
              )}
            </motion.button>
          </motion.div>
        </div>

        {slide.contenido.map((item, i) => {
          if (item.tipo === "texto-inferior") {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-6 max-w-3xl text-center"
              >
                <p className="text-lg text-blue-700">{item.texto}</p>
              </motion.div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default SlideBenefits

