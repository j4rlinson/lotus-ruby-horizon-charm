export type QuizQ = {
  id: string;
  prompt: string;
  tex?: string;
  options: string[];
  answer: number;
  why: string;
};

export type QuizSet = {
  id: string;
  title: string;
  blurb: string;
  questions: QuizQ[];
};

export const quizSets: QuizSet[] = [
  {
    id: "basico",
    title: "Definición y potencia",
    blurb: "Bloque A. Si fallas el de la definición, vuelve al tema 01.",
    questions: [
      {
        id: "b1",
        prompt: "La derivada de una constante c es",
        options: ["c", "1", "0", "x"],
        answer: 2,
        why: "(c)' = 0. Siempre.",
      },
      {
        id: "b2",
        prompt: "La derivada de x es",
        options: ["0", "1", "x", "2x"],
        answer: 1,
        why: "(x)' = 1.",
      },
      {
        id: "b3",
        prompt: "f(x) = 5x³ − 4x² + 2x − 9. Entonces f'(x) =",
        options: [
          "15x² − 8x + 2",
          "5x² − 4x + 2",
          "15x² − 8x + 2 − 9",
          "15x³ − 8x² + 2x",
        ],
        answer: 0,
        why: "Potencia término a término. El −9 se va.",
      },
      {
        id: "b4",
        prompt: "f(x) = 7/x². f'(x) =",
        options: ["7/x", "−14/x³", "14/x³", "−7/x²"],
        answer: 1,
        why: "7x^{−2} → −14 x^{−3} = −14/x³.",
      },
      {
        id: "b5",
        prompt: "(√x)' =",
        options: ["1/2", "√x / 2", "1/(2√x)", "2√x"],
        answer: 2,
        why: "x^{1/2} → (1/2)x^{−1/2}.",
      },
      {
        id: "b6",
        prompt: "Por definición, f'(x) es el límite de",
        options: [
          "f(x)/h",
          "[f(x+h)+f(x)]/h",
          "[f(x+h)−f(x)]/h",
          "f(x+h)−f(x)",
        ],
        answer: 2,
        why: "Cociente incremental. Hay que restar f(x).",
      },
      {
        id: "b7",
        prompt: "C(x)=x²+20x+100. C'(10) =",
        options: ["40", "30", "120", "20"],
        answer: 0,
        why: "C'=2x+20. C'(10)=40.",
      },
      {
        id: "b8",
        prompt: "f(x)=4x⁵−3x³+x−8. f'(x)=",
        options: ["20x⁴−9x²+1", "20x⁴−9x²+1−8", "4x⁴−3x²+1", "20x⁵−9x³+x"],
        answer: 0,
        why: "El −8 desaparece.",
      },
      {
        id: "b9",
        prompt: "Si f describe posición en el tiempo, f'(3) es",
        options: [
          "La posición en t=3",
          "La velocidad instantánea en t=3",
          "La aceleración en t=3",
          "El desplazamiento total",
        ],
        answer: 1,
        why: "Primera derivada de posición = velocidad instantánea.",
      },
      {
        id: "b10",
        prompt: "f(x)=4x²+14x. Por definición, f'(x)=",
        options: ["8x", "8x+14", "4x+14", "8x+14h"],
        answer: 1,
        why: "El 4h se va con h→0. Queda 8x+14.",
      },
    ],
  },
  {
    id: "producto",
    title: "Producto y cociente",
    blurb: "Bloque B. El signo del cociente decide el punto 2b.",
    questions: [
      {
        id: "p1",
        prompt: "Regla del producto (uv)' =",
        options: ["u'v'", "u'v + uv'", "u' + v'", "uv' − u'v"],
        answer: 1,
        why: "Suma, no producto de derivadas.",
      },
      {
        id: "p2",
        prompt: "f(x)=(x²+1)(x−3). f'(x)=",
        options: ["3x²−6x+1", "2x(x−3)", "x²−6x+1", "2x"],
        answer: 0,
        why: "2x(x−3)+(x²+1)=3x²−6x+1.",
      },
      {
        id: "p3",
        prompt: "Cociente (u/v)' =",
        options: [
          "(u'v + uv')/v²",
          "(uv' − u'v)/v²",
          "(u'v − uv')/v²",
          "u'/v'",
        ],
        answer: 2,
        why: "Menos en el medio. Primero u'.",
      },
      {
        id: "p4",
        prompt: "f(x)=(3x+2)/(2x−4). f'(x)=",
        options: [
          "−16/(2x−4)²",
          "16/(2x−4)²",
          "−16/(2x−4)",
          "6/(2x−4)²",
        ],
        answer: 0,
        why: "3(2x−4)−2(3x+2)=−16.",
      },
      {
        id: "p5",
        prompt: "f(x)=x(x²−4x+5). f'(x)=",
        options: ["x²−4x+5", "3x²−8x+5", "3x²−4x+5", "2x−4"],
        answer: 1,
        why: "Expande: x³−4x²+5x → 3x²−8x+5.",
      },
      {
        id: "p6",
        prompt: "f(x)=(x+1)². Derivada (cualquier método) =",
        options: ["2x", "2(x+1)", "x+1", "2x+1"],
        answer: 1,
        why: "Binomio: 2x+2. Cadena: 2(x+1)·1. Igual.",
      },
      {
        id: "p7",
        prompt: "f(x)=(x²−3)(2x+5). f'(x)=",
        options: ["6x²+10x−6", "2x(2x+5)", "4x+5", "6x²+10x"],
        answer: 0,
        why: "2x(2x+5)+(x²−3)·2 = 6x²+10x−6.",
      },
      {
        id: "p8",
        prompt: "f(x)=x³ − 1/x. f'(x)=",
        options: ["3x²−1/x²", "3x²+1/x²", "3x²−1", "3x²+1/x"],
        answer: 1,
        why: "−x^{−1} deriva a +x^{−2}.",
      },
    ],
  },
  {
    id: "cadena",
    title: "Cadena, exp/ln, implícita",
    blurb: "Bloque C. Puntos 3, 4 y 5 del simulacro.",
    questions: [
      {
        id: "c1",
        prompt: "La regla de la cadena correcta es",
        options: [
          "f'(g(x)) + g'(x)",
          "f'(g(x)) · g'(x)",
          "f'(g(x)) · g'(x) + g(x) g'(x)",
          "f'(x) g'(x)",
        ],
        answer: 1,
        why: "Solo el producto f'(afuera)·g'(adentro). El tercer distractor es el error de tus apuntes.",
      },
      {
        id: "c2",
        prompt: "f(x)=4 ln(x²+9). f'(x)=",
        options: ["4/(x²+9)", "8x/(x²+9)", "4/x", "8x"],
        answer: 1,
        why: "4 · (2x)/(x²+9).",
      },
      {
        id: "c3",
        prompt: "f(x)=220 e^{−0,045x}. f'(x)=",
        options: [
          "220 e^{−0,045x}",
          "−0,045 e^{−0,045x}",
          "−9,9 e^{−0,045x}",
          "9,9 e^{−0,045x}",
        ],
        answer: 2,
        why: "220 · (−0,045) = −9,9, por la exponencial.",
      },
      {
        id: "c4",
        prompt: "f(t)=480(1+0,035t)³. f'(t)=",
        options: [
          "1440(1+0,035t)²",
          "50,4(1+0,035t)²",
          "50,4(1+0,035t)³",
          "480·0,035",
        ],
        answer: 1,
        why: "480·3·0,035 = 50,4, y baja el exponente a 2.",
      },
      {
        id: "c5",
        prompt: "p² + q² = 625. dq/dp =",
        options: ["p/q", "−p/q", "q/p", "−q/p"],
        answer: 1,
        why: "2p + 2q q' = 0 → q' = −p/q.",
      },
      {
        id: "c6",
        prompt: "En p=15 (q=20), dq/dp =",
        options: ["−0,75", "0,75", "−1,33", "15"],
        answer: 0,
        why: "−15/20 = −0,75. q=20 porque 15²+q²=25².",
      },
      {
        id: "c7",
        prompt: "(a^u)' =",
        options: ["a^u", "a^u ln a · u'", "u a^{u−1}", "ln a"],
        answer: 1,
        why: "Base constante, exponente variable: aparece ln a y la cadena.",
      },
      {
        id: "c8",
        prompt: "N(t)=500 e^{0,08 t}. N'(t)=",
        options: ["500 e^{0,08 t}", "40 e^{0,08 t}", "0,08 e^{0,08 t}", "500·0,08"],
        answer: 1,
        why: "500·0,08 = 40, por la exponencial.",
      },
    ],
  },
  {
    id: "optimo",
    title: "Máximos y utilidad",
    blurb: "Bloque D. 30 puntos del parcial. No salgas con menos de 90 % aquí.",
    questions: [
      {
        id: "o1",
        prompt: "U(x)= −3x² + 150x − 100. U'(x)=",
        options: ["−6x+150", "−3x+150", "−6x−100", "−6x"],
        answer: 0,
        why: "El −100 se va.",
      },
      {
        id: "o2",
        prompt: "El crítico de esa U es x* =",
        options: ["50", "25", "150", "−25"],
        answer: 1,
        why: "−6x+150=0 → x=25.",
      },
      {
        id: "o3",
        prompt: "U''(x)= −6. Entonces x* es",
        options: ["mínimo", "máximo", "inflexión", "no se sabe"],
        answer: 1,
        why: "U''<0 ⇒ máximo.",
      },
      {
        id: "o4",
        prompt: "U(25) =",
        options: ["1775", "3750", "1875", "1650"],
        answer: 0,
        why: "−1875+3750−100=1775.",
      },
      {
        id: "o5",
        prompt: "I= −2x²+200x, C=40x+150. U(x)=",
        options: [
          "−2x²+240x−150",
          "−2x²+160x−150",
          "−2x²+160x+150",
          "−2x²+200x−150",
        ],
        answer: 1,
        why: "200x−40x=160x. El 150 resta.",
      },
      {
        id: "o6",
        prompt: "En ese U, x* =",
        options: ["20", "40", "80", "50"],
        answer: 1,
        why: "U'=−4x+160=0 → x=40.",
      },
      {
        id: "o7",
        prompt: "I(40), C(40), U(40) =",
        options: [
          "4800, 1750, 3050",
          "8000, 1750, 6250",
          "4800, 1600, 3200",
          "4000, 1750, 2250",
        ],
        answer: 0,
        why: "I=−3200+8000=4800. C=1600+150=1750. U=3050.",
      },
      {
        id: "o8",
        prompt: "En el máximo de utilidad se cumple",
        options: ["I=C", "I'=C'", "I''=0", "C'=0"],
        answer: 1,
        why: "U'=I'−C'=0.",
      },
      {
        id: "o9",
        prompt: "I(x)=200x−0,8x². I'(x)=0 en",
        options: ["199,4", "0,16", "125", "250"],
        answer: 2,
        why: "I'=200−1,6x=0 → x=125. No es 199,4.",
      },
      {
        id: "o10",
        prompt: "U'(15)=20>0 significa",
        options: [
          "Ya se pasó el máximo",
          "La utilidad sigue creciendo en 15",
          "La utilidad es 20",
          "Hay que cerrar la empresa",
        ],
        answer: 1,
        why: "Signo de U': todavía conviene aumentar x.",
      },
    ],
  },
];

export function quizById(id: string) {
  return quizSets.find((q) => q.id === id);
}
