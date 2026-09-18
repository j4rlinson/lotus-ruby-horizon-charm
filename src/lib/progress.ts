import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressState = {
  tasks: Record<string, boolean>;
  topics: Record<string, boolean>;
  quizBest: Record<string, number>;
  simulacroParts: Record<string, boolean>;
  toggleTask: (id: string) => void;
  markTopic: (slug: string, done?: boolean) => void;
  saveQuiz: (id: string, pct: number) => void;
  markSimulacroPart: (id: string, done?: boolean) => void;
  reset: () => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      tasks: {},
      topics: {},
      quizBest: {},
      simulacroParts: {},
      toggleTask: (id) =>
        set((s) => ({ tasks: { ...s.tasks, [id]: !s.tasks[id] } })),
      markTopic: (slug, done = true) =>
        set((s) => ({ topics: { ...s.topics, [slug]: done } })),
      saveQuiz: (id, pct) =>
        set((s) => ({
          quizBest: {
            ...s.quizBest,
            [id]: Math.max(s.quizBest[id] ?? 0, pct),
          },
        })),
      markSimulacroPart: (id, done = true) =>
        set((s) => ({
          simulacroParts: { ...s.simulacroParts, [id]: done },
        })),
      reset: () =>
        set({ tasks: {}, topics: {}, quizBest: {}, simulacroParts: {} }),
    }),
    { name: "tinta-progress" },
  ),
);
