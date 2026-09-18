import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { examPacing, simulacro } from "@/content/simulacro";
import { Formula } from "@/components/formula";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

type Search = { mode?: string };

export const Route = createFileRoute("/simulacro")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    mode: typeof s.mode === "string" ? s.mode : undefined,
  }),
  component: SimulacroPage,
});

function SimulacroPage() {
  const { mode } = Route.useSearch();
  const exam = mode === "exam";
  const [left, setLeft] = useState(90 * 60);
  const [running, setRunning] = useState(exam);
  const { simulacroParts, markSimulacroPart } = useProgress();

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setLeft((s) => (s <= 0 ? 0 : s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Primer simulacro de corte I · 55 pts
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-tight">Simulacro</h1>
          <p className="mt-3 max-w-xl text-muted">
            Es el mapa del parcial. En modo estudio revelas cada paso. En modo
            examen corres 90 minutos, tinta mental, sin abrir soluciones hasta el
            final.
          </p>
        </div>
        <div className="rounded-[var(--radius-lg)] border border-border bg-surface px-4 py-3 text-right">
          <p className="text-[11px] uppercase tracking-wide text-subtle">
            {exam ? "Cronómetro" : "Modo estudio"}
          </p>
          <p
            className={cn(
              "font-mono text-3xl tabular-nums tracking-tight",
              exam && left < 8 * 60 && "text-bad",
            )}
          >
            {mm}:{ss}
          </p>
          <div className="mt-2 flex justify-end gap-2">
            <Button size="sm" variant="secondary" onClick={() => setRunning((v) => !v)}>
              {running ? "Pausa" : "Play"}
            </Button>
            <Button size="sm" variant="ghost" onClick={() => { setLeft(90 * 60); setRunning(exam); }}>
              Reset 90
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap gap-2">
        {examPacing.map((p) => (
          <span
            key={p.n}
            className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
          >
            P{p.n} · {p.min}
            {p.pts ? ` · ${p.pts} pts` : ""}
          </span>
        ))}
      </div>

      <ol className="space-y-6">
        {simulacro.map((item) => (
          <li
            key={item.id}
            className="rounded-[var(--radius-xl)] border border-border bg-surface p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-2xl tracking-tight">
                Punto {item.n} · {item.title}
              </h2>
              <span className="font-mono text-xs text-muted">{item.pts} pts</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed">{item.prompt}</p>
            <div className="mt-4 space-y-4">
              {item.parts.map((part) => (
                <div key={part.id} className="rounded-[var(--radius-md)] border border-border bg-bg p-4">
                  <p className="text-sm font-medium">
                    {part.label}) {part.ask}
                  </p>
                  {exam ? (
                    <label className="mt-3 flex items-center gap-2 text-sm text-muted">
                      <input
                        type="checkbox"
                        className="size-4 accent-[var(--color-accent)]"
                        checked={!!simulacroParts[part.id]}
                        onChange={() =>
                          markSimulacroPart(part.id, !simulacroParts[part.id])
                        }
                      />
                      Ya respondí esta parte en papel
                    </label>
                  ) : (
                    <div className="mt-3">
                      <Reveal title="Ver solución">
                        <ol className="space-y-2 text-sm">
                          {part.steps.map((st) => (
                            <li key={st.t}>
                              <p>{st.t}</p>
                              {st.tex ? <Formula tex={st.tex} display /> : null}
                            </li>
                          ))}
                        </ol>
                        {part.numeric ? (
                          <p className="mt-3 font-medium">
                            Resultado: {part.numeric}
                          </p>
                        ) : null}
                        {part.interp ? (
                          <p className="mt-2 rounded-[var(--radius-sm)] bg-ok-bg px-3 py-2 text-sm text-ok">
                            {part.interp}
                          </p>
                        ) : null}
                      </Reveal>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>

      {exam ? (
        <div className="rounded-[var(--radius-xl)] border border-border bg-surface p-5">
          <h2 className="font-display text-xl">Al terminar los 90 min</h2>
          <p className="mt-2 text-sm text-muted">
            Quita <span className="font-mono">?mode=exam</span> de la dirección o
            entra otra vez en modo estudio y confronta cada parte. Anota solo lo
            que fallaste. No reescribas lo que ya te salió.
          </p>
        </div>
      ) : null}
    </div>
  );
}
