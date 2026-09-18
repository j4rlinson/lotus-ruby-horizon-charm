export type SimPart = {
  id: string;
  label: string;
  ask: string;
  tex?: string;
  numeric?: string;
  steps: { t: string; tex?: string }[];
  interp?: string;
};

export type SimItem = {
  id: string;
  n: number;
  pts: number;
  title: string;
  prompt: string;
  parts: SimPart[];
};

export const simulacro: SimItem[] = [
  {
    id: "p1",
    n: 1,
    pts: 5,
    title: "Definición y costo marginal",
    prompt:
      "La función de costos totales de la empresa (en cientos de miles de pesos), según las x unidades producidas, es f(x) = 4x² + 14x.",
    parts: [
      {
        id: "p1a",
        label: "a",
        ask: "Utilice la definición de derivada (límite del cociente incremental) para hallar f'(x).",
        numeric: "8x+14",
        steps: [
          { t: "Escribe la definición.", tex: "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}" },
          {
            t: "f(x+h)=4(x+h)²+14(x+h)=4x²+8xh+4h²+14x+14h",
          },
          { t: "f(x+h)−f(x)=8xh+4h²+14h" },
          { t: "Divide por h: 8x+4h+14" },
          { t: "h→0: f'(x)=8x+14", tex: "f'(x)=8x+14" },
        ],
      },
      {
        id: "p1b",
        label: "b",
        ask: "Calcule f'(2) e interprete el resultado como costo marginal.",
        numeric: "30",
        steps: [{ t: "f'(2)=8(2)+14=16+14=30" }],
        interp:
          "Cuando ya se producen 2 unidades, producir una unidad adicional cuesta aproximadamente 30 cientos de miles de pesos.",
      },
    ],
  },
  {
    id: "p2",
    n: 2,
    pts: 5,
    title: "Potencia y cociente",
    prompt: "Calcule la derivada de las siguientes funciones.",
    parts: [
      {
        id: "p2a",
        label: "a",
        ask: "f(x)=3x³−8x²+5x−4  (regla de la potencia)",
        numeric: "9x^2-16x+5",
        steps: [{ t: "Término a término.", tex: "f'(x)=9x^2-16x+5" }],
      },
      {
        id: "p2b",
        label: "b",
        ask: "f(x)=(3x+2)/(2x−4)  (regla del cociente)",
        numeric: "-16/(2x-4)^2",
        steps: [
          { t: "u=3x+2, u'=3; v=2x−4, v'=2" },
          {
            t: "Numerador: 3(2x−4)−(3x+2)·2=6x−12−6x−4=−16",
            tex: "f'(x)=\\frac{-16}{(2x-4)^2}",
          },
        ],
      },
    ],
  },
  {
    id: "p3",
    n: 3,
    pts: 5,
    title: "Logaritmo y exponencial",
    prompt: "Calcule la derivada.",
    parts: [
      {
        id: "p3a",
        label: "a",
        ask: "f(x)=4 ln(x²+9)",
        numeric: "8x/(x^2+9)",
        steps: [
          {
            t: "4 · 1/(x²+9) · 2x",
            tex: "f'(x)=\\frac{8x}{x^2+9}",
          },
        ],
      },
      {
        id: "p3b",
        label: "b",
        ask: "f(x)=220 e^{−0,045x}",
        numeric: "-9.9 e^{-0.045x}",
        steps: [
          {
            t: "220 · e^{−0,045x} · (−0,045) = −9,9 e^{−0,045x}",
            tex: "f'(x)=-9{,}9\\,e^{-0{,}045x}",
          },
        ],
      },
    ],
  },
  {
    id: "p4",
    n: 4,
    pts: 5,
    title: "Regla de la cadena",
    prompt:
      "El ingreso total de la empresa en el tiempo t (meses) se modela con f(t)=480(1+0,035t)³.",
    parts: [
      {
        id: "p4a",
        label: "a",
        ask: "Calcule f'(t) usando la regla de la cadena.",
        numeric: "50.4(1+0.035t)^2",
        steps: [
          { t: "480 · 3 (1+0,035t)² · 0,035" },
          { t: "1440 · 0,035 = 50,4", tex: "f'(t)=50{,}4(1+0{,}035t)^2" },
        ],
      },
      {
        id: "p4b",
        label: "b",
        ask: "Calcule f'(6) e interprete.",
        numeric: "73.79",
        steps: [
          { t: "1+0,035·6=1,21" },
          { t: "1,21²=1,4641" },
          { t: "50,4×1,4641=73,79064 ≈ 73,79" },
        ],
        interp:
          "En el mes 6, el ingreso total aumenta aproximadamente 73,79 unidades monetarias por mes.",
      },
    ],
  },
  {
    id: "p5",
    n: 5,
    pts: 5,
    title: "Derivación implícita",
    prompt:
      "La relación entre el precio p y la cantidad demandada q satisface p² + q² = 625.",
    parts: [
      {
        id: "p5a",
        label: "a",
        ask: "Determine dq/dp mediante derivación implícita.",
        numeric: "-p/q",
        steps: [
          { t: "2p + 2q dq/dp = 0", tex: "\\frac{dq}{dp}=-\\frac{p}{q}" },
        ],
      },
      {
        id: "p5b",
        label: "b",
        ask: "Evalúe dq/dp cuando p=15 (halle primero q) e interprete.",
        numeric: "-0.75",
        steps: [
          { t: "225 + q² = 625 → q²=400 → q=20 (q>0)" },
          { t: "dq/dp = −15/20 = −0,75" },
        ],
        interp:
          "Cuando el precio es 15, si el precio aumenta en 1, la cantidad demandada disminuye aproximadamente 0,75 unidades.",
      },
    ],
  },
  {
    id: "p6",
    n: 6,
    pts: 15,
    title: "Máximo de la utilidad",
    prompt: "La función de utilidad de la empresa es U(x)= −3x² + 150x − 100.",
    parts: [
      {
        id: "p6a",
        label: "a",
        ask: "Calcule U'(x) y el valor crítico x* que la maximiza.",
        numeric: "25",
        steps: [
          { t: "U'(x)= −6x + 150" },
          { t: "−6x+150=0 → x*=25", tex: "x^*=25" },
        ],
      },
      {
        id: "p6b",
        label: "b",
        ask: "Calcule U''(x) y confirme el máximo con el criterio de la segunda derivada.",
        numeric: "-6",
        steps: [
          { t: "U''(x)= −6" },
          {
            t: "U''(25)= −6 < 0 → por el criterio de la segunda derivada, x*=25 es un máximo.",
          },
        ],
      },
      {
        id: "p6c",
        label: "c",
        ask: "Calcule U(x*).",
        numeric: "1775",
        steps: [
          { t: "U(25)= −3(625)+150(25)−100= −1875+3750−100=1775" },
        ],
        interp:
          "La utilidad máxima es 1775, alcanzada al producir 25 unidades.",
      },
    ],
  },
  {
    id: "p7",
    n: 7,
    pts: 15,
    title: "Ingreso, costo y recomendación",
    prompt:
      "Ingreso I(x)= −2x² + 200x y costo C(x)= 40x + 150, en función de las unidades x.",
    parts: [
      {
        id: "p7a",
        label: "a",
        ask: "Plantee U(x)=I(x)−C(x).",
        numeric: "-2x^2+160x-150",
        steps: [
          {
            t: "U(x)=(−2x²+200x)−(40x+150)= −2x²+160x−150",
            tex: "U(x)=-2x^2+160x-150",
          },
        ],
      },
      {
        id: "p7b",
        label: "b",
        ask: "Calcule U'(x) y el x* que maximiza la utilidad.",
        numeric: "40",
        steps: [
          { t: "U'(x)= −4x + 160 = 0 → x*=40" },
        ],
      },
      {
        id: "p7c",
        label: "c",
        ask: "Calcule U''(x) y confirme que es máximo.",
        numeric: "-4",
        steps: [
          { t: "U''(x)= −4 < 0 → máximo." },
        ],
      },
      {
        id: "p7d",
        label: "d",
        ask: "Calcule I(x*), C(x*) y U(x*), e interprete los tres.",
        numeric: "4800, 1750, 3050",
        steps: [
          { t: "I(40)= −2(1600)+200(40)= −3200+8000=4800" },
          { t: "C(40)=40(40)+150=1750" },
          { t: "U(40)=4800−1750=3050" },
        ],
        interp:
          "Al vender 40 unidades, el ingreso es 4800, el costo 1750 y la utilidad 3050 (máxima). En ese nivel I'(40)=C'(40).",
      },
      {
        id: "p7e",
        label: "e",
        ask: "Redacte, en una línea, una recomendación gerencial.",
        steps: [
          {
            t: "Se recomienda producir y vender 40 unidades para maximizar la utilidad en 3050; producir por encima reduce el resultado porque el costo marginal supera al ingreso marginal.",
          },
        ],
        interp:
          "Se recomienda producir y vender 40 unidades para maximizar la utilidad en 3050; producir por encima reduce el resultado porque el costo marginal supera al ingreso marginal.",
      },
    ],
  },
];

export const examPacing = [
  { n: "1–5", min: "8 min c/u", pts: 25 },
  { n: "6", min: "20 min", pts: 15 },
  { n: "7", min: "22 min", pts: 15 },
  { n: "Repaso", min: "8 min", pts: 0 },
];
