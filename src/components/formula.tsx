import katex from "katex";
import { cn } from "@/lib/utils";

export function Formula({
  tex,
  display = false,
  className,
}: {
  tex: string;
  display?: boolean;
  className?: string;
}) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  const Tag = display ? "div" : "span";
  return (
    <Tag
      className={cn(display ? "my-3 overflow-x-auto" : "inline", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function F({ children }: { children: string }) {
  return <Formula tex={children} />;
}
