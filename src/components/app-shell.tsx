import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  ClipboardList,
  Home,
  ListChecks,
  Menu,
  PenLine,
  Sigma,
  X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useProgress } from "@/lib/progress";
import { useHasHydrated } from "@/lib/hydrated";
import { planBlocks } from "@/content/plan";
import { topics } from "@/content/topics";

const nav = [
  { to: "/", label: "Inicio", icon: Home },
  { to: "/plan", label: "Plan 48 h", icon: ClipboardList },
  { to: "/temas", label: "Temas", icon: BookOpen },
  { to: "/formulario", label: "Fórmulas", icon: Sigma },
  { to: "/practica", label: "Drills", icon: ListChecks },
  { to: "/simulacro", label: "Simulacro", icon: PenLine },
] as const;

const more = [
  { to: "/interpretar", label: "Interpretar" },
  { to: "/errores", label: "Errores" },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const hydrated = useHasHydrated();
  const { tasks, topics: done } = useProgress();
  const totalTasks = planBlocks.flatMap((b) => b.tasks).length;
  const doneTasks = hydrated
    ? planBlocks.flatMap((b) => b.tasks).filter((t) => tasks[t.id]).length
    : 0;
  const topicPct = hydrated
    ? Math.round((topics.filter((t) => done[t.slug]).length / topics.length) * 100)
    : 0;

  return (
    <div className="min-h-dvh bg-bg text-fg font-sans">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Saltar al contenido
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-[10px] bg-accent text-accent-fg">
              <PenLine className="size-4" strokeWidth={1.75} />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[17px] font-medium tracking-tight">
                Tinta
              </span>
              <span className="block text-[11px] text-muted">Corte 1 · Matemáticas 2</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(`${item.to}/`);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-[var(--radius-sm)] px-3 py-2 text-sm transition-colors",
                    active ? "bg-surface text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            {more.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-[var(--radius-sm)] px-3 py-2 text-sm transition-colors",
                  pathname === item.to ? "bg-surface text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-[11px] uppercase tracking-wide text-subtle">Plan 48 h</p>
              <p className="font-mono text-xs tabular-nums text-muted">
                {doneTasks}/{totalTasks} · temas {topicPct}%
              </p>
            </div>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-surface lg:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <div className="border-t border-border bg-surface px-4 py-3 lg:hidden">
            <div className="grid grid-cols-2 gap-1">
              {[...nav, ...more].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-[var(--radius-sm)] px-3 py-3 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>
      <main id="contenido" className="mx-auto w-full max-w-6xl px-4 pb-28 pt-6 sm:pb-16">
        {children}
      </main>
      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 backdrop-blur-md lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-5">
          {nav.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px]",
                  active ? "text-accent" : "text-muted",
                )}
              >
                <Icon className="size-5" strokeWidth={1.75} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
