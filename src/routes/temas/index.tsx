import { createFileRoute, Link } from "@tanstack/react-router";
import { topics } from "@/content/topics";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/temas/")({ component: TemasIndex });

function TemasIndex() {
  const { topics: done } = useProgress();
  return (
    <div className="space-y-6">
      <header className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Unidad 1
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">Temas</h1>
        <p className="mt-3 text-muted">
          Ocho lecciones. Cada una cierra con el ejercicio que va a salir, no con
          teoría suelta. Márcalas cuando puedas reproducir el ejemplo sin mirar.
        </p>
      </header>
      <div className="grid gap-3">
        {topics.map((t) => (
          <Link
            key={t.slug}
            to="/temas/$slug"
            params={{ slug: t.slug }}
            className="grid gap-2 rounded-[var(--radius-xl)] border border-border bg-surface p-5 sm:grid-cols-[4rem_1fr_auto]"
          >
            <span className="font-mono text-sm text-subtle">{t.n}</span>
            <div>
              <h2 className="font-display text-xl tracking-tight">{t.title}</h2>
              <p className="mt-1 text-sm text-muted">{t.blurb}</p>
            </div>
            <div className="text-sm text-muted sm:text-right">
              <p>{t.exam}</p>
              <p className="font-mono text-xs">{t.minutes} min</p>
              {done[t.slug] ? (
                <p className="mt-1 text-ok">Visto</p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
