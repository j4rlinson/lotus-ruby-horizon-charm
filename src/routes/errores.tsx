import { createFileRoute } from "@tanstack/react-router";
import { mistakes } from "@/content/mistakes";
import { Formula } from "@/components/formula";

export const Route = createFileRoute("/errores")({ component: ErroresPage });

function ErroresPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          De tu cuaderno, no de un banco genérico
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">Errores a cerrar</h1>
        <p className="mt-3 text-muted leading-relaxed">
          Saqué estos de tus apuntes y del ABP. Si uno se cuela mañana, duele.
          Tacha la fórmula falsa en el cuaderno y escribe al lado la buena.
        </p>
      </header>
      <ol className="space-y-4">
        {mistakes.map((m, i) => (
          <li
            key={m.id}
            className="rounded-[var(--radius-xl)] border border-border bg-surface p-5"
          >
            <p className="font-mono text-[11px] text-subtle">
              {String(i + 1).padStart(2, "0")} · {m.from}
            </p>
            <h2 className="mt-1 font-display text-xl tracking-tight">{m.title}</h2>
            <div className="mt-4 grid gap-3">
              <div className="rounded-[var(--radius-md)] bg-bad-bg px-3 py-2 text-sm text-bad">
                <p className="text-[11px] uppercase tracking-wide">Mal</p>
                <p className="mt-1">{m.wrong}</p>
                {m.wrongTex ? <Formula tex={m.wrongTex} display /> : null}
              </div>
              <div className="rounded-[var(--radius-md)] bg-ok-bg px-3 py-2 text-sm text-ok">
                <p className="text-[11px] uppercase tracking-wide">Bien</p>
                <p className="mt-1">{m.right}</p>
                {m.rightTex ? <Formula tex={m.rightTex} display /> : null}
              </div>
            </div>
            <p className="mt-3 text-sm text-muted">{m.why}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
