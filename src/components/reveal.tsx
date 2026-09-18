import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="text-sm font-medium">{title}</span>
        <ChevronDown
          className={cn(
            "size-4 text-muted transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? <div className="border-t border-border px-4 py-4">{children}</div> : null}
    </div>
  );
}
