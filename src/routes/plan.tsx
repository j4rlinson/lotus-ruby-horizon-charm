import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { planBlocks } from "@/content/plan";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/plan")({ component: PlanPage });

function PlanPage() {
  const { tasks, toggleTask } = useProgress();
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          48 horas
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">Plan ganador</h1>
        <p className="mt-3 text-muted leading-relaxed">
          Hoy cierras técnica e interpretación. Mañana corres el simulacro a 90
          minutos y memorizas el formulario. No releas el libro: ataca el
          simulacro, que es el mapa del parcial.
        </p>
      </header>
      {planBlocks.map((block) => {
        const done = block.tasks.filter((t) => tasks[t.id]).length;
        return (
          <section
            key={block.id}
            className="rounded-[var(--radius-xl)] border border-border bg-surface p-5"
          >
            <div className="flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-subtle">
                  Día {block.day} · {block.totalMin} min
                </p>
                <h2 className="font-display text-2xl tracking-tight">{block.title}</h2>
                <p className="text-sm text-muted">{block.subtitle}</p>
              </div>
              <p className="font-mono text-xs tabular-nums text-muted">
                {done}/{block.tasks.length}
              </p>
            </div>
            <ul className="mt-4 space-y-2">
              {block.tasks.map((task) => {
                const on = !!tasks[task.id];
                return (
                  <li
                    key={task.id}
                    className="rounded-[var(--radius-md)] border border-border bg-bg p-3 sm:p-4"
                  >
                    <div className="flex items-start gap-3">
                      <button
                        type="button"
                        onClick={() => toggleTask(task.id)}
                        className={cn(
                          "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border",
                          on
                            ? "border-ok bg-ok text-accent-fg"
                            : "border-border bg-surface",
                        )}
                        aria-pressed={on}
                        aria-label={on ? "Desmarcar" : "Marcar hecha"}
                      >
                        {on ? <Check className="size-3.5" /> : null}
                      </button>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <a href={task.href} className="font-medium hover:underline">
                            {task.label}
                          </a>
                          <span className="font-mono text-[11px] text-subtle">
                            {task.minutes} min
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-muted">{task.why}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
