// Definición de tipos para la estructura de la presentación

export interface Presentation {
  titulo: string;
  presentador: string;
  fecha: string;
  slides: Slide[];
}

export interface Slide {
  titulo: string;
  subtitulo: string;
  contenido: SlideContent[];
  diseño: string;
  color_esquema: string;
}

export type SlideContent = 
  | TextoPrincipal
  | ListaPuntos
  | TextoDestacado
  | TablaContenidos
  | ListaDestacada
  | TextoInferior;

interface TextoPrincipal {
  tipo: 'texto-principal';
  texto: string;
}

interface ListaPuntos {
  tipo: 'lista-puntos';
  items: string[];
  titulo?: string;
}

interface TextoDestacado {
  tipo: 'texto-destacado';
  texto: string;
}

interface TablaContenidos {
  tipo: 'tabla-contenidos';
  secciones: { titulo: string; pagina: string }[];
}

interface ListaDestacada {
  tipo: 'lista-destacada';
  items: string[];
}

interface TextoInferior {
  tipo: 'texto-inferior';
  texto: string;
} 