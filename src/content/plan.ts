export type PlanTask = {
  id: string;
  label: string;
  minutes: number;
  href: string;
  why: string;
};

export type PlanBlock = {
  id: string;
  day: 1 | 2;
  title: string;
  subtitle: string;
  totalMin: number;
  tasks: PlanTask[];
};

export const examMeta = {
  course: "Matemáticas 2",
  program: "Mercadeo y Gestión Comercial",
  campus: "UTS sede principal · Bucaramanga",
  semester: "Tercer semestre · 2026-I",
  unit: "Unidad 1 · Principios de derivadas",
  ra: "RA1: Resolver problemas relacionados con funciones económicas utilizando los criterios de la primera y segunda derivada.",
  professor: "Blanca E. Tarazona S.",
  duration: "1 hora y 30 minutos",
  weight: "Prueba escrita 60 %",
  points: "55 puntos (7 ítems)",
  items: [
    { n: 1, pts: 5, topic: "Definición de derivada + costo marginal" },
    { n: 2, pts: 5, topic: "Potencia y cociente" },
    { n: 3, pts: 5, topic: "Logaritmo y exponencial" },
    { n: 4, pts: 5, topic: "Regla de la cadena + interpretación" },
    { n: 5, pts: 5, topic: "Derivación implícita" },
    { n: 6, pts: 15, topic: "Máximo de U(x) · 1.ª y 2.ª derivada" },
    { n: 7, pts: 15, topic: "U = I − C · óptimo · recomendación" },
  ],
};

export const examRules = [
  "La interpretación forma parte de la nota. Un número sin frase pierde puntos.",
  "No se aceptan respuestas sin procedimiento.",
  "Escriba en TINTA. No reclamos sobre lápiz.",
  "Sin calculadora, sin borrador, sin lápiz.",
  "Celular apagado y guardado. Su uso anula la prueba.",
  "Tiempo: 90 minutos. Resalte las respuestas finales.",
];

export const planBlocks: PlanBlock[] = [
  {
    id: "d1a",
    day: 1,
    title: "Bloque A · Cimientos",
    subtitle: "Hoy · 70 min · puntos 1 y 2 del simulacro",
    totalMin: 70,
    tasks: [
      {
        id: "d1a-def",
        label: "Definición de derivada (límite del cociente incremental)",
        minutes: 25,
        href: "/temas/definicion",
        why: "El punto 1 pide el límite, no la regla de la potencia.",
      },
      {
        id: "d1a-bas",
        label: "Reglas básicas: constante, potencia, suma, raíces",
        minutes: 25,
        href: "/temas/reglas",
        why: "Si no conviertes √x en x^{1/2}, el taller 2 te come.",
      },
      {
        id: "d1a-quiz",
        label: "Drill A: definición y potencia (10 preguntas)",
        minutes: 20,
        href: "/practica?set=basico",
        why: "Cierra el bloque con repetición, no con relectura.",
      },
    ],
  },
  {
    id: "d1b",
    day: 1,
    title: "Bloque B · Producto y cociente",
    subtitle: "Hoy · 50 min · punto 2b",
    totalMin: 50,
    tasks: [
      {
        id: "d1b-pc",
        label: "Regla del producto y del cociente, con ejemplos del taller",
        minutes: 30,
        href: "/temas/producto-cociente",
        why: "En el cociente el signo menos es el error #1 del curso.",
      },
      {
        id: "d1b-quiz",
        label: "Drill B: producto y cociente",
        minutes: 20,
        href: "/practica?set=producto",
        why: "Hay que dejar el resultado simplificado, no a medias.",
      },
    ],
  },
  {
    id: "d1c",
    day: 1,
    title: "Bloque C · Cadena, exp, ln, implícita",
    subtitle: "Hoy · 90 min · puntos 3, 4 y 5",
    totalMin: 90,
    tasks: [
      {
        id: "d1c-exp",
        label: "Exponencial y logaritmo (e^{kx}, ln(u))",
        minutes: 25,
        href: "/temas/exponencial",
        why: "Punto 3 es directo si recuerdas multiplicar por u'.",
      },
      {
        id: "d1c-cad",
        label: "Regla de la cadena — y el error de tus apuntes",
        minutes: 25,
        href: "/temas/cadena",
        why: "En el cuaderno mezclaste cadena con producto. Hay que corregirlo hoy.",
      },
      {
        id: "d1c-imp",
        label: "Derivación implícita (círculo y tasa-demanda)",
        minutes: 20,
        href: "/temas/implicita",
        why: "Punto 5 del simulacro es p² + q² = 625. Plantilla fija.",
      },
      {
        id: "d1c-quiz",
        label: "Drill C: cadena + implícita + exp/ln",
        minutes: 20,
        href: "/practica?set=cadena",
        why: "Estos tres puntos valen 15. No son opcionales.",
      },
    ],
  },
  {
    id: "d1d",
    day: 1,
    title: "Bloque D · El 55 % de la nota",
    subtitle: "Hoy noche · 90 min · puntos 6 y 7 (30 pts)",
    totalMin: 90,
    tasks: [
      {
        id: "d1d-max",
        label: "Máximos: U'=0, U''<0, U(x*)",
        minutes: 30,
        href: "/temas/maximos",
        why: "15 + 15 puntos. Si fallas el signo de U'', se cae el criterio.",
      },
      {
        id: "d1d-int",
        label: "Banco de interpretaciones (frases que sí puntúan)",
        minutes: 25,
        href: "/interpretar",
        why: "La profe lo dice: la interpretación forma parte de la evaluación.",
      },
      {
        id: "d1d-err",
        label: "Errores de tus apuntes (I(x)=200x−0,8x² y cadena)",
        minutes: 15,
        href: "/errores",
        why: "Esos dos errores, si se cuelan mañana, te cuestan el punto 4 o el 7.",
      },
      {
        id: "d1d-sim",
        label: "Leer el simulacro en modo estudio (sin cronómetro)",
        minutes: 20,
        href: "/simulacro",
        why: "Mañana lo harás contra reloj. Hoy solo la estructura.",
      },
    ],
  },
  {
    id: "d2a",
    day: 2,
    title: "Bloque E · Simulacro a 90 min",
    subtitle: "Día del parcial · 90 min cronometrados",
    totalMin: 90,
    tasks: [
      {
        id: "d2a-sim",
        label: "Simulacro oficial en modo examen",
        minutes: 90,
        href: "/simulacro?mode=exam",
        why: "Tinta, sin calculadora, 90 min. Entrena el ritmo: 5-5-5-5-5 y 20+20 para 6 y 7.",
      },
    ],
  },
  {
    id: "d2b",
    day: 2,
    title: "Bloque F · Corrección y fórmulas",
    subtitle: "Después del simulacro · 45 min",
    totalMin: 45,
    tasks: [
      {
        id: "d2b-rev",
        label: "Confrontar cada punto con la solución",
        minutes: 25,
        href: "/simulacro",
        why: "Solo estudias lo que fallaste. No releas todo.",
      },
      {
        id: "d2b-form",
        label: "Formulario en voz alta (una pasada)",
        minutes: 20,
        href: "/formulario",
        why: "Sin calculadora, las identidades tienen que salir solas.",
      },
    ],
  },
];

export const timeBudget = [
  { label: "Puntos 1–5", min: 40, note: "8 min c/u. Si te trabas, deja el procedimiento y sigue." },
  { label: "Punto 6", min: 20, note: "U', x*, U'', U(x*). Frase de máximo." },
  { label: "Punto 7", min: 22, note: "Armar U, óptimo, I* C* U*, recomendación de una línea." },
  { label: "Repaso tinta", min: 8, note: "Resalta resultados. Relee interpretaciones." },
];
