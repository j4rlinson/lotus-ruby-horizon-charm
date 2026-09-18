import { createFileRoute } from "@tanstack/react-router";
import { glossary, interpCards } from "@/content/interpretations";

export const Route = createFileRoute("/interpretar")({ component: InterpPage });

function InterpPage() {
  return (
    <div className="space-y-8">
      <header className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          La nota escondida
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">Interpretar</h1>
        <p className="mt-3 text-muted leading-relaxed">
          La hoja lo dice: la interpretación forma parte de la evaluación. Una
          frase que puntúa tiene punto de evaluación, dirección, magnitud y
          unidades. Copia estas plantillas al papel de ensayo.
        </p>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {interpCards.map((c) => (
          <article
            key={c.tag}
            className="rounded-[var(--radius-xl)] border border-border bg-surface p-5"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="font-display text-xl tracking-tight">{c.tag}</h2>
              <span className="font-mono text-xs text-subtle">{c.symbol}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed">{c.template}</p>
            <div className="mt-4 grid gap-2 text-sm">
              <p className="rounded-[var(--radius-sm)] bg-ok-bg px-3 py-2 text-ok">
                Sí: {c.good}
              </p>
              <p className="rounded-[var(--radius-sm)] bg-bad-bg px-3 py-2 text-bad">
                No: {c.bad}
              </p>
            </div>
          </article>
        ))}
      </div>
      <section>
        <h2 className="font-display text-2xl tracking-tight">Glosario rápido</h2>
        <div className="mt-4 overflow-hidden rounded-[var(--radius-xl)] border border-border">
          {glossary.map((g, i) => (
            <div
              key={g.k}
              className={`grid gap-1 px-4 py-3 sm:grid-cols-[14rem_1fr] ${i % 2 ? "bg-raised" : "bg-surface"}`}
            >
              <p className="text-sm font-medium">{g.k}</p>
              <p className="text-sm text-muted">{g.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
