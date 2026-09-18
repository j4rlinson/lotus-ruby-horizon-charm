import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { topicBySlug, topics } from "@/content/topics";
import { Formula } from "@/components/formula";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/temas/$slug")({
  component: TopicPage,
});

function TopicPage() {
  const { slug } = Route.useParams();
  const topic = topicBySlug(slug);
  if (!topic) throw notFound();
  const idx = topics.findIndex((t) => t.slug === slug);
  const prev = topics[idx - 1];
  const next = topics[idx + 1];
  const { topics: done, markTopic } = useProgress();
  const marked = !!done[topic.slug];

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {topic.n} · {topic.exam}
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">{topic.title}</h1>
        <p className="mt-3 text-muted leading-relaxed">{topic.blurb}</p>
      </header>

      <section className="rounded-[var(--radius-xl)] border border-border bg-surface p-5">
        <h2 className="text-sm font-medium">Debe salir de memoria</h2>
        <ul className="mt-3 space-y-2">
          {topic.mustKnow.map((m) => (
            <li key={m} className="text-sm leading-relaxed">
              {m}
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-3">
          {topic.formulas.map((f) => (
            <div key={f.name} className="rounded-[var(--radius-md)] bg-bg px-3 py-2">
              <p className="text-[11px] uppercase tracking-wide text-subtle">{f.name}</p>
              <Formula tex={f.tex} display />
            </div>
          ))}
        </div>
      </section>

      {topic.sections.map((s) => (
        <section key={s.h}>
          <h2 className="font-display text-2xl tracking-tight">{s.h}</h2>
          {s.p ? <p className="mt-2 leading-relaxed text-muted">{s.p}</p> : null}
          {s.bullets ? (
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ol>
          ) : null}
          {s.tex ? <Formula tex={s.tex} display /> : null}
          {s.note ? (
            <p className="mt-3 rounded-[var(--radius-md)] bg-ok-bg px-3 py-2 text-sm text-ok">
              {s.note}
            </p>
          ) : null}
          {s.trap ? (
            <p className="mt-3 rounded-[var(--radius-md)] bg-bad-bg px-3 py-2 text-sm text-bad">
              Trampa: {s.trap}
            </p>
          ) : null}
        </section>
      ))}

      {topic.examples.length ? (
        <section className="space-y-3">
          <h2 className="font-display text-2xl tracking-tight">Ejemplos resueltos</h2>
          {topic.examples.map((ex) => (
            <Reveal key={ex.title} title={ex.title} defaultOpen>
              <p className="text-sm text-muted">{ex.given}</p>
              <ol className="mt-4 space-y-3">
                {ex.steps.map((st) => (
                  <li key={st.label}>
                    <p className="text-xs font-medium uppercase tracking-wide text-subtle">
                      {st.label}
                    </p>
                    <p className="text-sm">{st.text}</p>
                    {st.tex ? <Formula tex={st.tex} display /> : null}
                  </li>
                ))}
              </ol>
              <div className="mt-4 rounded-[var(--radius-md)] bg-bg px-3 py-2">
                <p className="text-xs text-subtle">Respuesta</p>
                {ex.answerTex ? (
                  <Formula tex={ex.answerTex} display />
                ) : (
                  <p className="font-medium">{ex.answer}</p>
                )}
              </div>
              {ex.interp ? (
                <p className="mt-3 text-sm leading-relaxed">
                  <span className="font-medium">Interpretación. </span>
                  {ex.interp}
                </p>
              ) : null}
            </Reveal>
          ))}
        </section>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <Button
          variant={marked ? "secondary" : "default"}
          onClick={() => markTopic(topic.slug, !marked)}
        >
          {marked ? "Tema marcado" : "Marcar como dominado"}
        </Button>
        <div className="flex gap-2">
          {prev ? (
            <Button asChild variant="ghost">
              <Link to="/temas/$slug" params={{ slug: prev.slug }}>
                Anterior
              </Link>
            </Button>
          ) : null}
          {next ? (
            <Button asChild variant="secondary">
              <Link to="/temas/$slug" params={{ slug: next.slug }}>
                Siguiente
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link to="/practica">Ir a drills</Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
