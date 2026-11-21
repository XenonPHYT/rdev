export type Lesson = {
  id: string; title: string; category: string; path: string; level: 'Beginner'|'Intermediate'|'Advanced';
  minutes: number; summary: string; objectives: string[]; body: string[]; code: string;
  explanation: string[]; mistakes: string[]; exercise: string; version: string; status: string;
  references: { label: string; url: string }[];
};
