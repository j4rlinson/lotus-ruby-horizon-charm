export type FormulaRow = {
  name: string;
  tex: string;
  when: string;
};

export const formulaGroups: { title: string; rows: FormulaRow[] }[] = [
  {
    title: "Definición",
    rows: [
      {
        name: "Cociente incremental",
        tex: "f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
        when: "Punto 1. Nunca saltárselo.",
      },
    ],
  },
  {
    title: "Algebraicas",
    rows: [
      { name: "Constante", tex: "(c)'=0", when: "Término independiente." },
      { name: "Identidad", tex: "(x)'=1", when: "x solo." },
      { name: "Potencia", tex: "(x^n)'=n x^{n-1}", when: "n real." },
      { name: "Constante por función", tex: "(c f)'=c f'", when: "Saca el número." },
      { name: "Suma / resta", tex: "(f\\pm g)'=f'\\pm g'", when: "Término a término." },
      { name: "Producto", tex: "(uv)'=u'v+uv'", when: "Dos factores." },
      {
        name: "Cociente",
        tex: "\\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}",
        when: "Fracción. Menos en el medio.",
      },
    ],
  },
  {
    title: "Raíces y recíprocos",
    rows: [
      { name: "Raíz", tex: "\\sqrt{x}=x^{1/2},\\; (\\sqrt{x})'=\\frac{1}{2\\sqrt{x}}", when: "Taller 2." },
      { name: "Cúbica", tex: "(\\sqrt[3]{x})'=\\frac{1}{3 x^{2/3}}", when: "Convierte primero." },
      { name: "1/x", tex: "(x^{-1})'=-x^{-2}=-1/x^2", when: "No uses cociente si no hace falta." },
    ],
  },
  {
    title: "Cadena, exp, ln",
    rows: [
      {
        name: "Cadena",
        tex: "[f(g(x))]'=f'(g(x))\\,g'(x)",
        when: "Paréntesis, e^{u}, ln u, ( )^n.",
      },
      { name: "Potencia de u", tex: "(u^n)'=n u^{n-1} u'", when: "Punto 4." },
      { name: "e^u", tex: "(e^u)'=e^u u'", when: "Punto 3b." },
      { name: "a^u", tex: "(a^u)'=a^u\\ln a\\, u'", when: "Base distinta de e." },
      { name: "ln u", tex: "(\\ln u)'=u'/u", when: "Punto 3a." },
      { name: "log_a u", tex: "(\\log_a u)'=\\frac{u'}{u\\ln a}", when: "Cambio de base." },
    ],
  },
  {
    title: "Implícita y óptimo",
    rows: [
      {
        name: "Implícita (círculo)",
        tex: "p^2+q^2=r^2\\Rightarrow dq/dp=-p/q",
        when: "Punto 5.",
      },
      { name: "Utilidad", tex: "U=I-C", when: "Punto 7a." },
      { name: "Crítico", tex: "U'(x^*)=0", when: "Puntos 6 y 7." },
      { name: "Máximo", tex: "U''(x^*)<0", when: "Criterio de la 2.ª." },
      { name: "Regla económica", tex: "I'(x^*)=C'(x^*)", when: "Comprobación del 7." },
      { name: "Vértice", tex: "x=-b/(2a)", when: "Atajo si U es cuadrática." },
    ],
  },
];
