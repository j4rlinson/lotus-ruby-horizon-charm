export type Worked = {
  title: string;
  given: string;
  steps: { label: string; text: string; tex?: string }[];
  answer: string;
  answerTex?: string;
  interp?: string;
};

export type Topic = {
  slug: string;
  n: string;
  title: string;
  exam: string;
  minutes: number;
  pts: string;
  blurb: string;
  mustKnow: string[];
  formulas: { name: string; tex: string }[];
  sections: {
    h: string;
    p?: string;
    bullets?: string[];
    tex?: string;
    note?: string;
    trap?: string;
  }[];
  examples: Worked[];
};

export const topics: Topic[] = [
  {
    slug: "definicion",
    n: "01",
    title: "Definición de derivada",
    exam: "Punto 1 · 5 pts",
    minutes: 25,
    pts: "5",
    blurb:
      "El simulacro pide el límite del cociente incremental, no la regla de la potencia. Si saltas el límite, el punto 1 se cae entero.",
    mustKnow: [
      "f'(x) = lim_{h→0} [f(x+h) − f(x)] / h",
      "f'(a) es la razón de cambio instantánea en x = a",
      "En costos, C'(q) es el costo marginal: cuánto cuesta producir una unidad más cuando ya se producen q",
    ],
    formulas: [
      {
        name: "Definición",
        tex: "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
      },
      {
        name: "Pendiente secante",
        tex: "m=\\frac{f(x+h)-f(x)}{h}",
      },
    ],
    sections: [
      {
        h: "Qué es",
        p: "La derivada en un punto es el límite de las pendientes de las secantes cuando el segundo punto se acerca al primero. Geométricamente es la pendiente de la recta tangente. En mercadeo y finanzas es la tasa de cambio instantánea: costo, ingreso o utilidad por una unidad extra.",
      },
      {
        h: "Receta del punto 1 (escríbela así en tinta)",
        bullets: [
          "Escribe la definición completa, con el límite.",
          "Calcula f(x+h) expandiendo el paréntesis. No te comas el 2xh.",
          "Resta f(x): se deben cancelar los términos sin h.",
          "Divide entre h (factoriza h en el numerador).",
          "Aplica el límite: todo lo que tenga h se va.",
          "Evalúa f'(2) y redacta la frase de costo marginal.",
        ],
      },
      {
        h: "Plantilla de interpretación (costo marginal)",
        p: "«Cuando ya se producen a unidades, producir una unidad adicional cuesta aproximadamente f'(a) [unidades monetarias del enunciado].»",
        note: "Copia las unidades del problema (cientos de miles de pesos, miles de pesos, etc.). No inventes pesos si el enunciado está en otra escala.",
      },
      {
        trap: "No uses la regla de la potencia en el punto 1 aunque sepas el resultado. El ítem dice «utilice la definición». El procedimiento es la nota.",
      },
    ],
    examples: [
      {
        title: "Simulacro · Punto 1",
        given:
          "Costo total (en cientos de miles de pesos): f(x) = 4x² + 14x. Hallar f'(x) por definición y f'(2).",
        steps: [
          {
            label: "1. Definición",
            text: "Escribe el límite.",
            tex: "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
          },
          {
            label: "2. f(x+h)",
            text: "Sustituye x+h.",
            tex: "f(x+h)=4(x+h)^2+14(x+h)=4(x^2+2xh+h^2)+14x+14h=4x^2+8xh+4h^2+14x+14h",
          },
          {
            label: "3. Resta",
            text: "f(x+h) − f(x) = 8xh + 4h² + 14h",
            tex: "f(x+h)-f(x)=8xh+4h^2+14h",
          },
          {
            label: "4. Divide",
            text: "Factoriza h y simplifica.",
            tex: "\\frac{8xh+4h^2+14h}{h}=8x+4h+14",
          },
          {
            label: "5. Límite",
            text: "h → 0.",
            tex: "f'(x)=8x+14",
          },
          {
            label: "6. Evalúa",
            text: "f'(2) = 8(2)+14 = 16+14 = 30",
            tex: "f'(2)=30",
          },
        ],
        answer: "f'(x) = 8x + 14,  f'(2) = 30",
        answerTex: "f'(x)=8x+14,\\quad f'(2)=30",
        interp:
          "Cuando ya se producen 2 unidades, producir una unidad adicional cuesta aproximadamente 30 cientos de miles de pesos (es decir, unos $3.000.000 en la escala del enunciado).",
      },
      {
        title: "Taller de refuerzo 1 · C(x) = x² + 20x + 100",
        given: "Hallar C'(x) por definición y C'(10).",
        steps: [
          {
            label: "f(x+h)",
            text: "(x+h)² + 20(x+h) + 100 = x² + 2xh + h² + 20x + 20h + 100",
          },
          {
            label: "Resta y divide",
            text: "(2xh + h² + 20h)/h = 2x + h + 20",
          },
          {
            label: "Límite",
            text: "C'(x) = 2x + 20.  C'(10) = 40.",
            tex: "C'(x)=2x+20,\\quad C'(10)=40",
          },
        ],
        answer: "C'(x)=2x+20, C'(10)=40",
        interp:
          "Con 10 unidades ya producidas, una unidad extra cuesta aproximadamente 40 unidades monetarias.",
      },
    ],
  },
  {
    slug: "reglas",
    n: "02",
    title: "Reglas básicas y raíces",
    exam: "Punto 2a · Taller refuerzo 2",
    minutes: 25,
    pts: "5",
    blurb:
      "Potencia, constante, suma y convertir raíces a exponentes fraccionarios. El taller 2 es exactamente esto.",
    mustKnow: [
      "(c)' = 0",
      "(x)' = 1",
      "(x^n)' = n x^{n−1}  (n real)",
      "(c·f)' = c·f'",
      "(f±g)' = f' ± g'",
      "√x = x^{1/2},  ∛x = x^{1/3},  1/x^n = x^{−n}",
    ],
    formulas: [
      { name: "Potencia", tex: "(x^n)'=n x^{n-1}" },
      { name: "Raíz cuadrada", tex: "(\\sqrt{x})'=\\frac{1}{2\\sqrt{x}}" },
      { name: "Raíz cúbica", tex: "(\\sqrt[3]{x})'=\\frac{1}{3\\sqrt[3]{x^2}}" },
      { name: "Recíproco", tex: "\\left(\\frac{1}{x}\\right)'=-\\frac{1}{x^2}" },
    ],
    sections: [
      {
        h: "Cómo se baja el exponente",
        p: "Multiplica por el exponente y réstale 1 al exponente. El coeficiente se queda adelante.",
        tex: "(5x^3)'=5\\cdot 3x^{2}=15x^2",
      },
      {
        h: "Raíces → potencia, siempre",
        bullets: [
          "√x = x^{1/2} → (1/2) x^{−1/2} = 1/(2√x)",
          "∛x = x^{1/3} → (1/3) x^{−2/3}",
          "√(x^5) = x^{5/2} → (5/2) x^{3/2}",
          "1/√x = x^{−1/2} → (−1/2) x^{−3/2}",
        ],
        note: "Si el exponente nuevo es negativo, déjalo como fracción al final. Se ve más limpio y es lo que espera la profe.",
      },
      {
        trap: "La derivada de una constante NUNCA es la constante. (5)' = 0, no 5. En tus apuntes esto está bien; no lo desaprendas bajo presión.",
      },
    ],
    examples: [
      {
        title: "Simulacro · 2a",
        given: "f(x) = 3x³ − 8x² + 5x − 4",
        steps: [
          {
            label: "Término a término",
            text: "9x² − 16x + 5 − 0",
            tex: "f'(x)=9x^2-16x+5",
          },
        ],
        answer: "f'(x) = 9x² − 16x + 5",
        answerTex: "f'(x)=9x^2-16x+5",
      },
      {
        title: "Taller corte 1 · n.º 3",
        given: "f(x) = 5x³ − 4x² + 2x − 9",
        steps: [
          {
            label: "Derivar",
            text: "15x² − 8x + 2",
            tex: "f'(x)=15x^2-8x+2",
          },
        ],
        answer: "15x² − 8x + 2",
      },
      {
        title: "Raíz del taller 2",
        given: "f(x) = 5√x + 4/√x",
        steps: [
          {
            label: "Reescribe",
            text: "5 x^{1/2} + 4 x^{−1/2}",
          },
          {
            label: "Deriva",
            text: "(5)(1/2)x^{−1/2} + 4(−1/2)x^{−3/2}",
            tex: "f'(x)=\\frac{5}{2\\sqrt{x}}-\\frac{2}{x^{3/2}}",
          },
        ],
        answer: "5/(2√x) − 2/x^{3/2}",
      },
    ],
  },
  {
    slug: "producto-cociente",
    n: "03",
    title: "Producto y cociente",
    exam: "Punto 2b · 5 pts",
    minutes: 30,
    pts: "5",
    blurb:
      "Dos fórmulas que se confunden. Producto: suma de dos términos. Cociente: resta en el numerador y denominador al cuadrado.",
    mustKnow: [
      "(uv)' = u'v + uv'",
      "(u/v)' = (u'v − uv') / v²",
      "En el cociente: primero la derivada del de arriba. El menos va en el medio.",
    ],
    formulas: [
      { name: "Producto", tex: "(uv)'=u'v+uv'" },
      {
        name: "Cociente",
        tex: "\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}",
      },
    ],
    sections: [
      {
        h: "Producto — mantra",
        p: "«Derivada del primero por el segundo, más el primero por la derivada del segundo.» No derivas los dos al mismo tiempo y multiplicas (eso es un error clásico).",
      },
      {
        h: "Cociente — mantra",
        p: "«Abajo por derivada de arriba, menos arriba por derivada de abajo, todo sobre abajo al cuadrado.»",
        note: "Memoriza el orden: LO-D(HI) minus HI-D(LO) over LO², o en español: denominador · (num)' − numerador · (den)'.",
      },
      {
        trap: "El signo menos del cociente. Si lo pones al revés, todo el punto 2b queda mal y no hay forma de «casi».",
      },
    ],
    examples: [
      {
        title: "Simulacro · 2b",
        given: "f(x) = (3x + 2)/(2x − 4)",
        steps: [
          {
            label: "Identifica",
            text: "u = 3x+2,  u' = 3,  v = 2x−4,  v' = 2",
          },
          {
            label: "Aplica",
            text: "Numerador: 3(2x−4) − (3x+2)(2) = 6x − 12 − 6x − 4 = −16",
            tex: "f'(x)=\\frac{3(2x-4)-(3x+2)\\cdot 2}{(2x-4)^2}=\\frac{-16}{(2x-4)^2}",
          },
        ],
        answer: "f'(x) = −16 / (2x − 4)²",
        answerTex: "f'(x)=\\dfrac{-16}{(2x-4)^2}",
      },
      {
        title: "Taller · producto (x²+1)(x−3)",
        given: "Usar la regla del producto, no expandir primero (aunque se puede comprobar).",
        steps: [
          {
            label: "u y v",
            text: "u=x²+1, u'=2x; v=x−3, v'=1",
          },
          {
            label: "Producto",
            text: "2x(x−3) + (x²+1)(1) = 2x² − 6x + x² + 1 = 3x² − 6x + 1",
            tex: "f'(x)=3x^2-6x+1",
          },
        ],
        answer: "3x² − 6x + 1",
      },
      {
        title: "Taller · (x²+5)/(2x−1)",
        given: "Cociente.",
        steps: [
          {
            label: "u'=2x, v'=2",
            text: "Numerador: 2x(2x−1) − (x²+5)(2) = 4x² − 2x − 2x² − 10 = 2x² − 2x − 10",
            tex: "f'(x)=\\frac{2x^2-2x-10}{(2x-1)^2}",
          },
        ],
        answer: "(2x² − 2x − 10)/(2x−1)²",
      },
    ],
  },
  {
    slug: "exponencial",
    n: "04",
    title: "Exponencial y logaritmo",
    exam: "Punto 3 · 5 pts",
    minutes: 25,
    pts: "5",
    blurb:
      "Dos fórmulas con cadena escondida: ln(u) y e^{u}. El punto 3 del simulacro es exactamente eso.",
    mustKnow: [
      "(e^x)' = e^x",
      "(e^{u})' = e^{u} · u'",
      "(a^x)' = a^x ln a",
      "(a^{u})' = a^{u} ln a · u'",
      "(ln x)' = 1/x",
      "(ln u)' = u' / u",
      "(log_a u)' = u' / (u ln a)",
    ],
    formulas: [
      { name: "Natural", tex: "(\\ln u)'=\\frac{u'}{u}" },
      { name: "Exponencial e", tex: "(e^u)'=e^u\\, u'" },
      { name: "Base a", tex: "(a^u)'=a^u\\ln a\\, u'" },
    ],
    sections: [
      {
        h: "Ln de algo",
        p: "Deriva el adentro y divide por el adentro. Si hay un coeficiente afuera (el 4 del simulacro), se queda multiplicando.",
        tex: "(4\\ln(x^2+9))'=4\\cdot\\frac{2x}{x^2+9}=\\frac{8x}{x^2+9}",
      },
      {
        h: "e elevado a algo",
        p: "La exponencial se copia y se multiplica por la derivada del exponente. Si el exponente es −0,045x, esa derivada es −0,045 (un número negativo: la función decrece).",
        tex: "(220e^{-0{,}045x})'=220(-0{,}045)e^{-0{,}045x}=-9{,}9\\,e^{-0{,}045x}",
      },
      {
        trap: "En tus apuntes de logaritmo mezclaste ln con log₂. Si el enunciado dice ln, base e. Si dice log sin base en este curso, pregunta al contexto: en cálculo económico casi siempre es ln.",
      },
    ],
    examples: [
      {
        title: "Simulacro · 3a",
        given: "f(x) = 4 ln(x² + 9)",
        steps: [
          {
            label: "Cadena",
            text: "4 · (1/(x²+9)) · 2x",
            tex: "f'(x)=\\frac{8x}{x^2+9}",
          },
        ],
        answer: "8x / (x² + 9)",
        answerTex: "f'(x)=\\dfrac{8x}{x^2+9}",
      },
      {
        title: "Simulacro · 3b",
        given: "f(x) = 220 e^{−0,045x}",
        steps: [
          {
            label: "Copia e multiplica por el exponente derivado",
            text: "220 · e^{−0,045x} · (−0,045)",
            tex: "f'(x)=-9{,}9\\,e^{-0{,}045x}",
          },
        ],
        answer: "−9,9 e^{−0,045x}",
        interp:
          "La función decrece: cada unidad extra de x reduce el valor en 9,9 e^{−0,045x}. En un modelo de demanda o de saldo, es una caída proporcional.",
      },
    ],
  },
  {
    slug: "cadena",
    n: "05",
    title: "Regla de la cadena",
    exam: "Punto 4 · 5 pts",
    minutes: 25,
    pts: "5",
    blurb:
      "Función afuera por derivada de adentro. En el cuaderno escribiste un término de más: hay que borrar esa fórmula falsa.",
    mustKnow: [
      "Si y = f(g(x)), entonces y' = f'(g(x)) · g'(x)",
      "Afuera se deriva como si el adentro fuera x; luego se multiplica por la derivada del adentro.",
      "Potencia de un paréntesis: n[u]^{n−1} · u'",
    ],
    formulas: [
      { name: "Cadena", tex: "\\frac{d}{dx}f(g(x))=f'(g(x))\\cdot g'(x)" },
      { name: "Potencia de u", tex: "(u^n)'=n u^{n-1} u'" },
    ],
    sections: [
      {
        h: "La fórmula correcta (y la que no)",
        p: "Correcta: f'(g(x)) · g'(x). Nada más. En tus apuntes aparece un «+ g(x)·h'(x)». Eso es mezclar cadena con producto. Si la usas mañana, el punto 4 queda mal.",
        trap: "Falsa: f'(x) = g'(h(x))·h'(x) + g(x)·h'(x). Táchala del cuaderno.",
      },
      {
        h: "El punto 4 del simulacro",
        p: "Ingreso f(t) = 480(1 + 0,035t)³. Es una potencia de un paréntesis. Baja el 3, deja el paréntesis al cuadrado, multiplica por 480 y por 0,035.",
        tex: "f'(t)=480\\cdot 3(1+0{,}035t)^2\\cdot 0{,}035=50{,}4(1+0{,}035t)^2",
      },
      {
        h: "Sin calculadora en t = 6",
        bullets: [
          "1 + 0,035·6 = 1 + 0,21 = 1,21",
          "1,21² = (1,2 + 0,01)² = 1,44 + 0,024 + 0,0001 = 1,4641",
          "50,4 × 1,4641 = 50×1,4641 + 0,4×1,4641 = 73,205 + 0,58564 = 73,79064",
        ],
        note: "Deja 73,79 (o 73,8) e interpreta: en el mes 6 el ingreso crece a razón de ≈ 73,79 unidades por mes.",
      },
    ],
    examples: [
      {
        title: "Simulacro · Punto 4",
        given: "f(t) = 480(1 + 0,035t)³. Hallar f'(t) y f'(6).",
        steps: [
          {
            label: "Cadena",
            text: "480 · 3 (1+0,035t)² · 0,035",
            tex: "f'(t)=50{,}4(1+0{,}035t)^2",
          },
          {
            label: "t = 6",
            text: "50,4 (1,21)² = 50,4 · 1,4641 = 73,79064",
            tex: "f'(6)\\approx 73{,}79",
          },
        ],
        answer: "f'(t)=50,4(1+0,035t)²,  f'(6)≈73,79",
        interp:
          "En el mes 6, el ingreso total de la empresa está aumentando aproximadamente 73,79 unidades monetarias por mes.",
      },
    ],
  },
  {
    slug: "implicita",
    n: "06",
    title: "Derivación implícita",
    exam: "Punto 5 · 5 pts",
    minutes: 20,
    pts: "5",
    blurb:
      "Cuando p y q vienen mezcladas en una ecuación, derivas todo respecto a p (o x) y despejas dq/dp.",
    mustKnow: [
      "Deriva ambos lados respecto a la variable independiente.",
      "Cada vez que derives una función de q, multiplica por dq/dp (cadena).",
      "Despeja dq/dp: todos esos términos a un lado.",
      "Elige la rama positiva de q si es cantidad demandada.",
    ],
    formulas: [
      {
        name: "Círculo",
        tex: "p^2+q^2=r^2 \\;\\Rightarrow\\; \\frac{dq}{dp}=-\\frac{p}{q}",
      },
    ],
    sections: [
      {
        h: "Receta",
        bullets: [
          "Deriva término a término.",
          "Producto: si aparece p·q, usa (pq)' = p'q + p q' respecto a la variable que elegiste.",
          "Agrupa los términos que tienen dq/dp.",
          "Factoriza dq/dp y despeja.",
          "Evalúa con el punto pedido. Si q² = 400, q = 20 (demanda > 0).",
        ],
      },
      {
        h: "Interpretación de dq/dp < 0",
        p: "Si el precio sube un poco, la cantidad demandada baja. El valor absoluto |dq/dp| dice cuánto baja, aproximadamente, por cada unidad de precio.",
      },
    ],
    examples: [
      {
        title: "Simulacro · Punto 5",
        given: "p² + q² = 625. Hallar dq/dp y evaluarla en p = 15.",
        steps: [
          {
            label: "Deriva respecto a p",
            text: "2p + 2q dq/dp = 0",
            tex: "2p+2q\\frac{dq}{dp}=0 \\Rightarrow \\frac{dq}{dp}=-\\frac{p}{q}",
          },
          {
            label: "q cuando p = 15",
            text: "225 + q² = 625 → q² = 400 → q = 20 (cantidad ≥ 0)",
            tex: "q=20",
          },
          {
            label: "Evalúa",
            text: "dq/dp = −15/20 = −3/4 = −0,75",
            tex: "\\frac{dq}{dp}=-0{,}75",
          },
        ],
        answer: "dq/dp = −p/q;  en p=15, vale −0,75",
        interp:
          "Cuando el precio es 15, si el precio aumenta en 1 unidad, la cantidad demandada disminuye aproximadamente 0,75 unidades.",
      },
      {
        title: "ABP · tasa y demanda",
        given: "px + 2p + 0,5x = 1000. Hallar dp/dx.",
        steps: [
          {
            label: "Producto en px",
            text: "p + x dp/dx + 2 dp/dx + 0,5 = 0",
          },
          {
            label: "Despeja",
            text: "(x+2) dp/dx = −(p+0,5)",
            tex: "\\frac{dp}{dx}=-\\frac{p+0{,}5}{x+2}",
          },
        ],
        answer: "dp/dx = −(p+0,5)/(x+2)  < 0",
        interp:
          "Si sube la demanda de crédito x, la tasa p tiende a bajar.",
      },
    ],
  },
  {
    slug: "maximos",
    n: "07",
    title: "Máximos: 1.ª y 2.ª derivada",
    exam: "Puntos 6 y 7 · 30 pts",
    minutes: 40,
    pts: "30",
    blurb:
      "Aquí está más de la mitad del parcial. Misma receta dos veces: armar U, derivar, crítico, segunda derivada, evaluar, interpretar.",
    mustKnow: [
      "U(x) = I(x) − C(x)",
      "Punto crítico: U'(x*) = 0",
      "Si U''(x*) < 0 → máximo. Si U''(x*) > 0 → mínimo.",
      "En el máximo de utilidad se cumple I'(x*) = C'(x*)",
      "El vértice de ax²+bx+c también es x = −b/(2a)",
    ],
    formulas: [
      { name: "Utilidad", tex: "U(x)=I(x)-C(x)" },
      { name: "Crítico", tex: "U'(x^*)=0" },
      { name: "Criterio", tex: "U''(x^*)<0 \\Rightarrow \\text{máximo}" },
      { name: "Óptimo económico", tex: "I'(x^*)=C'(x^*)" },
    ],
    sections: [
      {
        h: "Receta de 8 renglones (puntos 6 y 7)",
        bullets: [
          "1. Si dan I y C, arma U = I − C. Distribuye el menos.",
          "2. Deriva: U'(x).",
          "3. U'(x) = 0 y despeja x*. Descarta x < 0.",
          "4. U''(x). Mira el signo.",
          "5. Frase: «U''(x*) = … < 0, por el criterio de la segunda derivada x* es un máximo.»",
          "6. Calcula U(x*). En el 7, también I(x*) y C(x*).",
          "7. Interpreta los tres números en el contexto de la empresa.",
          "8. Recomendación gerencial de UNA línea.",
        ],
      },
      {
        h: "Aritmética sin calculadora",
        p: "Organiza: primero x*², luego los productos, al final resta. Recuadra el resultado. En el punto 6 del simulacro: x*=25, U=1775. En el 7: x*=40, I=4800, C=1750, U=3050.",
      },
      {
        trap: "Olvidar el signo menos al restar C(x). U = (−2x²+200x) − (40x+150) = −2x² + 160x − 150. El 150 es negativo.",
      },
    ],
    examples: [
      {
        title: "Simulacro · Punto 6",
        given: "U(x) = −3x² + 150x − 100",
        steps: [
          {
            label: "U'",
            text: "U'(x) = −6x + 150 = 0 → x* = 25",
            tex: "x^*=25",
          },
          {
            label: "U''",
            text: "U''(x) = −6 < 0 → máximo",
            tex: "U''(x)=-6<0",
          },
          {
            label: "U(25)",
            text: "−3(625) + 150(25) − 100 = −1875 + 3750 − 100 = 1775",
            tex: "U(25)=1775",
          },
        ],
        answer: "x* = 25, máximo, U = 1775",
        interp:
          "La utilidad se maximiza produciendo 25 unidades, con una utilidad de 1775 unidades monetarias.",
      },
      {
        title: "Simulacro · Punto 7",
        given: "I(x)= −2x²+200x,  C(x)=40x+150",
        steps: [
          {
            label: "U",
            text: "U(x)= −2x² + 200x − 40x − 150 = −2x² + 160x − 150",
            tex: "U(x)=-2x^2+160x-150",
          },
          {
            label: "Crítico",
            text: "U' = −4x + 160 = 0 → x* = 40",
            tex: "x^*=40",
          },
          {
            label: "Segunda",
            text: "U'' = −4 < 0 → máximo",
          },
          {
            label: "Evaluar",
            text: "I(40)= −2(1600)+8000=4800.  C(40)=1600+150=1750.  U=3050.",
            tex: "I(40)=4800,\\; C(40)=1750,\\; U(40)=3050",
          },
        ],
        answer: "x*=40, I=4800, C=1750, U=3050",
        interp:
          "Al vender 40 unidades el ingreso es 4800, el costo 1750 y la utilidad máxima 3050. Recomendación: producir y vender 40 unidades; más allá el costo extra se come el ingreso extra (I' = C' en el óptimo).",
      },
    ],
  },
  {
    slug: "interpretacion",
    n: "08",
    title: "Lenguaje económico",
    exam: "Todos los puntos · transversal",
    minutes: 20,
    pts: "transversal",
    blurb:
      "Un número correcto con frase vacía pierde. Una frase con unidades, punto de evaluación y dirección del cambio gana.",
    mustKnow: [
      "C'(x) = costo marginal",
      "I'(x) = ingreso marginal",
      "U'(x) = I'(x) − C'(x) = utilidad marginal",
      "U'(x)>0: todavía conviene producir más. U'(x)<0: ya se pasó el óptimo.",
      "V'(t) velocidad, V''(t) aceleración. Signo de V'' decide si se acelera o se frena.",
    ],
    formulas: [
      { name: "Marginal", tex: "U'(x)=I'(x)-C'(x)" },
      { name: "Óptimo", tex: "I'(x)=C'(x)\\iff U'(x)=0" },
    ],
    sections: [
      {
        h: "Frase mínima que puntúa",
        p: "Sujeto + punto de evaluación + dirección + magnitud + unidades + «aproximadamente» (porque es instantánea, no el salto exacto de 1 unidad).",
        bullets: [
          "Costo marginal: «Con x=a unidades ya producidas, una unidad extra cuesta ≈ C'(a) [unidades].»",
          "Ingreso marginal: «Al vender a unidades, una venta extra aumenta (o reduce, si I'<0) el ingreso ≈ I'(a).»",
          "Utilidad marginal positiva: «En x=a la utilidad todavía crece; conviene aumentar la producción.»",
          "Utilidad marginal cero: «En x* se maximiza la utilidad: el ingreso extra iguala al costo extra.»",
          "Cadena en el tiempo: «En el mes t, la magnitud crece a razón de f'(t) por mes.»",
          "Implícita: «Si el precio sube 1, la cantidad baja ≈ |dq/dp|. Relación inversa.»",
          "Segunda derivada: «V''(t)>0 se acelera; V''(t)<0 se desacelera (aunque V' siga positiva).»",
        ],
      },
      {
        h: "Recomendación gerencial (punto 7e)",
        p: "Una línea, con el número x* y la consecuencia de pasarse:",
        note: "«Se recomienda producir y comercializar x* unidades, nivel en el que se maximiza la utilidad; producir por encima de x* reduce el resultado porque el costo marginal supera al ingreso marginal.»",
      },
    ],
    examples: [],
  },
];

export function topicBySlug(slug: string) {
  return topics.find((t) => t.slug === slug);
}
