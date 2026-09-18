import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { quizById, quizSets } from "@/content/quizzes";
import { useProgress } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Search = { set?: string };

export const Route = createFileRoute("/practica")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    set: typeof s.set === "string" ? s.set : undefined,
  }),
  component: Practica,
});

function Practica() {
  const { set } = Route.useSearch();
  const quiz = set ? quizById(set) : undefined;
  if (!quiz) {
    return (
      <div className="space-y-6">
        <header className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Repetición
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-tight">Drills</h1>
          <p className="mt-3 text-muted">
            Preguntas del taller y del simulacro. Elige, responde, lee el porqué.
            El porcentaje queda guardado en este dispositivo.
          </p>
        </header>
        <div className="grid gap-3 sm:grid-cols-2">
          {quizSets.map((q) => (
            <Link
              key={q.id}
              to="/practica"
              search={{ set: q.id }}
              className="rounded-[var(--radius-xl)] border border-border bg-surface p-5 hover:bg-raised"
            >
              <h2 className="font-display text-xl tracking-tight">{q.title}</h2>
              <p className="mt-1 text-sm text-muted">{q.blurb}</p>
              <p className="mt-3 font-mono text-xs text-subtle">
                {q.questions.length} preguntas
              </p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  return <QuizPlay key={quiz.id} id={quiz.id} />;
}

function QuizPlay({ id }: { id: string }) {
  const quiz = quizById(id)!;
  const save = useProgress((s) => s.saveQuiz);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = quiz.questions[i];
  const total = quiz.questions.length;
  const pct = Math.round((score / total) * 100);

  function choose(idx: number) {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (i + 1 >= total) {
      const correct = score + (picked === q.answer ? 0 : 0);
      save(quiz.id, Math.round((correct / total) * 100));
      setDone(true);
      return;
    }
    setI((n) => n + 1);
    setPicked(null);
  }

  if (done) {
    return (
      <div className="mx-auto max-w-lg rounded-[var(--radius-xl)] border border-border bg-surface p-6 text-center">
        <p className="text-xs uppercase tracking-wide text-subtle">{quiz.title}</p>
        <p className="mt-3 font-display text-5xl tracking-tight tabular-nums">{pct}%</p>
        <p className="mt-2 text-muted">
          {score} de {total} correctas
        </p>
        <p className="mt-4 text-sm text-muted">
          {pct >= 90
            ? "Listo para tinta. Pasa al siguiente bloque."
            : pct >= 70
              ? "Bien. Repite las que fallaste leyendo el porqué."
              : "Vuelve al tema y corre el drill otra vez. No sigas con agujeros."}
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <Button
            onClick={() => {
              setI(0);
              setPicked(null);
              setScore(0);
              setDone(false);
            }}
          >
            Repetir
          </Button>
          <Button asChild variant="secondary">
            <Link to="/practica">Otros drills</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="flex items-baseline justify-between">
        <h1 className="font-display text-2xl tracking-tight">{quiz.title}</h1>
        <p className="font-mono text-xs tabular-nums text-muted">
          {i + 1}/{total}
        </p>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-border">
        <div
          className="h-full bg-accent transition-[width] duration-200"
          style={{
            width: `${((i + (picked !== null ? 1 : 0)) / total) * 100}%`,
          }}
        />
      </div>
      <p className="text-lg leading-snug">{q.prompt}</p>
      <div className="grid gap-2">
        {q.options.map((opt, idx) => {
          const show = picked !== null;
          const ok = idx === q.answer;
          const mine = idx === picked;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => choose(idx)}
              className={cn(
                "min-h-12 rounded-[var(--radius-md)] border px-4 py-3 text-left text-sm",
                !show && "border-border bg-surface hover:bg-raised",
                show && ok && "border-ok bg-ok-bg text-ok",
                show && mine && !ok && "border-bad bg-bad-bg text-bad",
                show && !ok && !mine && "border-border bg-surface text-muted",
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null ? (
        <div className="rounded-[var(--radius-md)] bg-bg px-4 py-3 text-sm leading-relaxed">
          {q.why}
        </div>
      ) : null}
      <Button disabled={picked === null} onClick={next} className="w-full sm:w-auto">
        {i + 1 >= total ? "Ver resultado" : "Siguiente"}
      </Button>
    </div>
  );
}
