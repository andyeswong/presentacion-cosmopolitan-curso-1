import type { Presentation } from "@/types/presentation"

export const presentationData: Presentation = {
  titulo: "Inteligencia Artificial Aplicada: Una Guía Introductoria para el Cosmopolitan Group",
  presentador: "Andrés González Wong, Enteracloud",
  fecha: "curso 1 de 2 / 03 de abril de 2025",
  slides: [
    {
      titulo: "El Amanecer de la IA en Nuestro Entorno Laboral",
      subtitulo: "Una Introducción para Todos en Cosmopolitan Group",
      contenido: [
        {
          tipo: "texto-principal",
          texto: "¿Qué es la Inteligencia Artificial (IA)?",
        },
        {
          tipo: "lista-puntos",
          items: [
            "Tecnologías que permiten a las computadoras realizar funciones avanzadas: ver, comprender lenguaje, analizar datos, hacer recomendaciones.",
            "Enseñar a las máquinas a 'pensar' y actuar como humanos para resolver problemas complejos.",
          ],
        },
        {
          tipo: "texto-principal",
          texto: "¿Por qué debería importarnos a los no técnicos?",
        },
        {
          tipo: "lista-puntos",
          items: [
            "Rápida expansión en el mundo empresarial: agiliza procesos, mejora productividad, enriquece la experiencia del cliente.",
            "Aplicaciones en todos los departamentos, no solo TI.",
            "Comprender la IA es crucial para el futuro del trabajo.",
          ],
        },
        {
          tipo: "texto-destacado",
          texto: "Nuestro enfoque: Aplicaciones prácticas y beneficios tangibles",
        },
      ],
      diseño: "titulo-subtitulo-contenido-centrado",
      color_esquema: "fondo-oscuro-texto-claro",
    },
    {
      titulo: "Presentación del Instructor",
      subtitulo: "Andrés González Wong - Ingeniero en Software especializado en IA",
      contenido: [
        {
          tipo: "texto-principal",
          texto: "Experiencia y trayectoria profesional",
        },
        {
          tipo: "lista-puntos",
          items: [
            "Programador desde los 7 años, experiencia con servidores desde los 14",
            "Desarrollo profesional desde los 17 años creando soluciones privadas",
            "CTO de una multinacional con 500 empleados entre EE.UU. y México",
            "Liderazgo en certificaciones ISO 9001:2015 y preparación para ISO 27000/27001",
            "Digitalización y automatización de múltiples departamentos empresariales",
            "Especialización en Inteligencia Artificial con Enteracloud"
          ],
        },
      ],
      diseño: "titulo-subtitulo-contenido-centrado",
      color_esquema: "fondo-oscuro-texto-claro",
    },
    {
      titulo: "Tabla de Contenidos",
      subtitulo: "",
      contenido: [
        {
          tipo: "tabla-contenidos",
          secciones: [
            { titulo: "Introducción", pagina: "2" },
            { titulo: "El Creciente Impacto de la IA", pagina: "3" },
            { titulo: "Beneficios Tangibles", pagina: "4" },
            { titulo: "Componentes Fundamentales", pagina: "5" },
            { titulo: "La IA en Acción", pagina: "6" },
            { titulo: "Su Caja de Herramientas de IA", pagina: "7" },
            { titulo: "La 'Regla de 3'", pagina: "8" },
            { titulo: "Aprendizaje Continuo", pagina: "9" },
            { titulo: "Conclusiones", pagina: "10" },
            { titulo: "Preguntas y Discusión", pagina: "11" },
            { titulo: "La IA en tu Workflow Diario", pagina: "12" },
          ],
        },
      ],
      diseño: "titulo-centrado-tabla",
      color_esquema: "fondo-claro-texto-oscuro",
    },
    {
      titulo: "El Creciente Impacto de la IA en Nuestras Empresas y Tareas Diarias",
      subtitulo: "Más allá del Departamento de Tecnología",
      contenido: [
        {
          tipo: "texto-principal",
          texto: "Aplicaciones en cada departamento: automatización de tareas rutinarias, enfoque en lo estratégico.",
        },
        {
          tipo: "lista-puntos",
          titulo: "Ejemplos concretos en la gestión empresarial:",
          items: [
            "Automatización de tareas repetitivas.",
            "Personalización de la experiencia del cliente.",
            "Chatbots y asistentes virtuales.",
            "Optimización de la cadena de suministro.",
            "Detección de fraudes.",
            "Mantenimiento predictivo.",
          ],
        },
        {
          tipo: "texto-destacado",
          texto:
            "Herramientas de IA accesibles: Guru, ChatGPT, Gemini - información y aprendizaje al alcance de todos.",
        },
      ],
      diseño: "titulo-subtitulo-contenido-izquierda",
      color_esquema: "fondo-oscuro-texto-claro-izquierda",
    },
    {
      titulo: "Beneficios Tangibles: ¿Qué Gana Cosmopolitan Group con el uso de la IA?",
      subtitulo: "Eficiencia, Productividad y Mejora Continua",
      contenido: [
        {
          tipo: "lista-destacada",
          items: [
            "Asistentes virtuales para la gestión del tiempo personal.",
            "Herramientas de IA para la organización de tareas y proyectos.",
            "Análisis de datos personales para la toma de decisiones informadas.",
            "Automatización de recordatorios y seguimientos de tareas.",
          ],
        },
        {
          tipo: "texto-inferior",
          texto:
            "Automatización de tareas tediosas para liberar talento estratégico. Mejor eficiencia operativa y toma de decisiones informada.",
        },
      ],
      diseño: "titulo-subtitulo-lista-destacada",
      color_esquema: "fondo-claro-texto-oscuro-destacado",
    },
    {
      titulo: "Componentes Fundamentales de la IA: Conceptos Clave Explicados",
      subtitulo: "Sin jerga técnica, solo lo esencial",
      contenido: [],
      diseño: "titulo-subtitulo-contenido-secciones-iconos",
      color_esquema: "gris-azul-acento",
    },
    {
      titulo: "La IA en Acción: Transformando Nuestros Departamentos",
      subtitulo: "Aplicaciones Prácticas en Cosmopolitan Group",
      contenido: [],
      diseño: "titulo-subtitulo-contenido-departamentos-iconos",
      color_esquema: "azul-acento",
    },
    {
      titulo: "Su Caja de Herramientas de IA: Herramientas Prácticas para el Día a Día",
      subtitulo: "IA al alcance de todos, sin necesidad de ser expertos",
      contenido: [],
      diseño: "titulo-subtitulo-contenido-lista-iconos",
      color_esquema: "gris-acento",
    },
    {
      titulo: "La 'Regla de 3': Su Guía Sencilla para Interactuar con la IA",
      subtitulo: "Entrada, Tarea y Salida: ¡Así de Fácil!",
      contenido: [],
      diseño: "titulo-subtitulo-contenido-numerado-iconos",
      color_esquema: "azul-gris",
    },
    {
      titulo: "La IA como Copiloto: Potenciando Nuestro Aprendizaje",
      subtitulo: "Recursos e Información para Navegar Juntos",
      contenido: [],
      diseño: "titulo-subtitulo-contenido-lista-iconos",
      color_esquema: "azul-acento",
    },
    {
      titulo: "Conclusiones: La IA como Aliada Estratégica en Cosmopolitan Group",
      subtitulo: "Un Futuro de Eficiencia, Innovación y Mejora Continua",
      contenido: [],
      diseño: "titulo-subtitulo-contenido-lista-destacados",
      color_esquema: "azul-gris-acento",
    },
    {
      titulo: "Preguntas y Discusión",
      subtitulo: "Abierto a sus inquietudes y comentarios",
      contenido: [],
      diseño: "titulo-subtitulo-contenido-bulletpoints",
      color_esquema: "acento-gris",
    },
    {
      titulo: "Identificando Oportunidades: IA en tu Workflow Diario",
      subtitulo: "Aplicaciones prácticas para aumentar tu productividad y transformar tu día a día profesional",
      contenido: [],
      diseño: "titulo-subtitulo-centrado",
      color_esquema: "fondo-oscuro-texto-claro",
    },
  ],
}

