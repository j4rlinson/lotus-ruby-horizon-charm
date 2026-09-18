export const interpCards = [
  {
    tag: "Costo marginal",
    symbol: "C'(a)",
    template:
      "Cuando ya se producen a unidades, producir una unidad adicional cuesta aproximadamente C'(a) [unidades del enunciado].",
    good: "Con 2 unidades producidas, una extra cuesta ≈ 30 cientos de miles de pesos.",
    bad: "La derivada es 30.",
  },
  {
    tag: "Ingreso marginal",
    symbol: "I'(a)",
    template:
      "Al nivel de a unidades vendidas, vender una unidad más aumenta (si I'>0) o reduce (si I'<0) el ingreso total en ≈ |I'(a)|.",
    good: "Con 60 unidades, una venta extra aumenta el ingreso ≈ 40.",
    bad: "El ingreso sube.",
  },
  {
    tag: "Utilidad marginal",
    symbol: "U'(a)",
    template:
      "U'>0: la utilidad todavía crece, conviene aumentar x. U'<0: ya se pasó el máximo. U'=0: óptimo, I'=C'.",
    good: "U'(15)=20>0: en 15 unidades la utilidad sigue creciendo; el máximo está más adelante (x=20).",
    bad: "Es positivo.",
  },
  {
    tag: "Cadena / tiempo",
    symbol: "f'(t)",
    template:
      "En el instante t, la magnitud crece (o decrece) a razón de f'(t) por unidad de tiempo.",
    good: "En el mes 6 el ingreso aumenta ≈ 73,79 unidades por mes.",
    bad: "f'(6) vale 73,79 y ya.",
  },
  {
    tag: "Implícita precio-cantidad",
    symbol: "dq/dp",
    template:
      "Si dq/dp < 0, precio y cantidad se mueven al revés. |dq/dp| es la caída aproximada de q si p sube 1.",
    good: "Con p=15, si el precio sube 1, la demanda baja ≈ 0,75 unidades.",
    bad: "La derivada es negativa.",
  },
  {
    tag: "Segunda derivada",
    symbol: "U''(x), V''(t)",
    template:
      "U''<0 en el crítico → máximo. V''>0 → el crecimiento se acelera. V''<0 → se desacelera (V' puede seguir >0).",
    good: "U''(25)=−6<0, por el criterio de la segunda derivada x=25 es un máximo.",
    bad: "Es un máximo porque sí.",
  },
  {
    tag: "Recomendación 7e",
    symbol: "una línea",
    template:
      "Producir x* unidades para maximizar la utilidad. Más allá, el costo marginal supera al ingreso marginal.",
    good: "Se recomienda producir 40 unidades, donde la utilidad llega a 3050; producir de más reduce el resultado porque C' supera a I'.",
    bad: "Hay que vender mucho.",
  },
];

export const glossary = [
  { k: "Costo fijo CF", v: "No depende de x. Desaparece en C'." },
  { k: "Costo variable CV", v: "Crece con x. C(x)=CV(x)+CF." },
  { k: "Costo marginal C'", v: "Costo de 1 unidad extra." },
  { k: "Ingreso marginal I'", v: "Ingreso de 1 unidad extra." },
  { k: "Utilidad U", v: "I − C. Lo que se maximiza." },
  { k: "Punto crítico x*", v: "Donde U'=0 (candidato a máx/mín)." },
  { k: "Criterio 2.ª", v: "U''<0 máximo; U''>0 mínimo." },
  { k: "Dominio económico", v: "x ≥ 0. Descarta raíces negativas." },
];
