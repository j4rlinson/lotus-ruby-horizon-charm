import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, PenLine } from "lucide-react";
import { examMeta, examRules, planBlocks, timeBudget } from "@/content/plan";
import { topics } from "@/content/topics";
import { useProgress } from "@/lib/progress";
import { useHasHydrated } from "@/lib/hydrated";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const hydrated = useHasHydrated();
  const { tasks, topics: doneTopics } = useProgress();
  const allTasks = planBlocks.flatMap((b) => b.tasks);
  const done = hydrated ? allTasks.filter((t) => tasks[t.id]).length : 0;
  const next = hydrated ? allTasks.find((t) => !tasks[t.id]) : allTasks[0];
  const topicDone = hydrated
    ? topics.filter((t) => doneTopics[t.slug]).length
    : 0;

  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            UTS Bucaramanga · Mercadeo · 3.er semestre
          </p>
          <h1 className="mt-3 font-display text-[2.35rem] leading-[1.12] tracking-[-0.03em] sm:text-5xl">
            Corte 1 en tinta.
            <span className="block text-muted">Derivadas que sí puntúan.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            Guía cerrada para el parcial de 90 minutos. Todo sale del simulacro,
            los talleres y tus apuntes. Objetivo: no solo pasar — sacar los 30
            puntos de máximos y no regalar la interpretación.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/plan">
                {next ? "Seguir el plan" : "Repasar el plan"}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/simulacro">Abrir simulacro</Link>
            </Button>
          </div>
        </div>
        <aside className="rounded-[var(--radius-xl)] border border-border bg-surface p-5 sm:p-6">
          <p className="text-xs uppercase tracking-wide text-subtle">Progreso 48 h</p>
          <p className="mt-2 font-display text-4xl tracking-tight tabular-nums">
            {done}
            <span className="text-2xl text-muted">/{allTasks.length}</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            tareas del plan · {topicDone}/{topics.length} temas
          </p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-border">
            <div
              className="h-full bg-accent transition-[width] duration-300"
              style={{ width: `${(done / allTasks.length) * 100}%` }}
            />
          </div>
          {next ? (
            <p className="mt-4 text-sm">
              Siguiente: <span className="font-medium">{next.label}</span>
            </p>
          ) : (
            <p className="mt-4 text-sm text-ok">
              Plan completo. Corre el simulacro otra vez.
            </p>
          )}
          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-[var(--radius-md)] bg-bg px-3 py-2">
              <dt className="text-subtle">Duración</dt>
              <dd className="font-medium">{examMeta.duration}</dd>
            </div>
            <div className="rounded-[var(--radius-md)] bg-bg px-3 py-2">
              <dt className="text-subtle">Peso</dt>
              <dd className="font-medium">{examMeta.weight}</dd>
            </div>
            <div className="rounded-[var(--radius-md)] bg-bg px-3 py-2">
              <dt className="text-subtle">Puntos</dt>
              <dd className="font-medium">{examMeta.points}</dd>
            </div>
            <div className="rounded-[var(--radius-md)] bg-bg px-3 py-2">
              <dt className="text-subtle">Profesora</dt>
              <dd className="font-medium">Tarazona S.</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section>
        <h2 className="font-display text-2xl tracking-tight">El parcial, despiezado</h2>
        <p className="mt-1 text-sm text-muted">{examMeta.ra}</p>
        <div className="mt-4 overflow-hidden rounded-[var(--radius-xl)] border border-border">
          {examMeta.items.map((it, i) => (
            <div
              key={it.n}
              className={cn(
                "grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3",
                i % 2 === 0 ? "bg-surface" : "bg-raised",
              )}
            >
              <span className="font-mono text-xs text-subtle">P{it.n}</span>
              <span className="text-sm">{it.topic}</span>
              <span className="font-mono text-xs tabular-nums text-muted">
                {it.pts} pts
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">
          Puntos 6 y 7 = 30/55. Si dominas la receta U′ = 0, U″ menor que 0,
          interpretación, el resto es mecánica.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[var(--radius-xl)] border border-border bg-surface p-5">
          <div className="flex items-center gap-2 text-sm font-medium">
            <PenLine className="size-4 text-accent" />
            Reglas de la hoja
          </div>
          <ul className="mt-3 space-y-2">
            {examRules.map((r) => (
              <li key={r} className="flex gap-2 text-sm leading-snug text-muted">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[var(--radius-xl)] border border-border bg-surface p-5">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Clock className="size-4 text-accent" />
            Reloj de 90 minutos
          </div>
          <ul className="mt-3 space-y-3">
            {timeBudget.map((t) => (
              <li key={t.label}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{t.label}</span>
                  <span className="font-mono text-xs text-muted">{t.min} min</span>
                </div>
                <p className="text-sm text-muted">{t.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl tracking-tight">
            Temas, en orden de ataque
          </h2>
          <Link to="/temas" className="text-sm text-accent hover:underline">
            Ver todos
          </Link>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {topics.map((t) => (
            <Link
              key={t.slug}
              to="/temas/$slug"
              params={{ slug: t.slug }}
              className="rounded-[var(--radius-lg)] border border-border bg-surface p-4 transition-colors hover:bg-raised"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-mono text-[11px] text-subtle">{t.n}</span>
                <span className="text-[11px] text-muted">{t.exam}</span>
              </div>
              <h3 className="mt-1 font-display text-lg tracking-tight">{t.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted">{t.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
