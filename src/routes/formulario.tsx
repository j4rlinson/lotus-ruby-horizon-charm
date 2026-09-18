import { createFileRoute } from "@tanstack/react-router";
import { formulaGroups } from "@/content/formulas";
import { Formula } from "@/components/formula";

export const Route = createFileRoute("/formulario")({ component: Formulario });

function Formulario() {
  return (
    <div className="space-y-8">
      <header className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Una pasada, en voz alta
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">Formulario</h1>
        <p className="mt-3 text-muted">
          Esto es lo que tiene que salir sin pensarlo. Dilo en voz alta. Si
          tartamudeas una fórmula, escríbela tres veces en un papel (en tinta).
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {formulaGroups.map((g) => (
          <section
            key={g.title}
            className="rounded-[var(--radius-xl)] border border-border bg-surface p-5"
          >
            <h2 className="font-display text-xl tracking-tight">{g.title}</h2>
            <ul className="mt-3 space-y-4">
              {g.rows.map((r) => (
                <li key={r.name}>
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="text-[11px] text-subtle">{r.when}</p>
                  </div>
                  <Formula tex={r.tex} display />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
