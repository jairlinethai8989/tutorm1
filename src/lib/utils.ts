import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Question } from '@/types/question';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (hours > 0) {
    return `${hours} ชม. ${mins} นาที`;
  }
  return `${mins} นาที`;
}

/**
 * สุ่มลำดับอาเรย์ (Fisher-Yates Shuffle)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * สุ่มสลับตำแหน่งตัวเลือก (Choice Shuffling) ป้องกันการเดาช้อยส์ 1 เสมอ
 * และรันหมายเลขช้อยส์ใหม่ (1, 2, 3, 4 หรือ ก, ข, ค, ง) ให้เรียบร้อย
 */
export function shuffleQuestionChoices(q: Question): Question {
  if (!q.choices || q.choices.length <= 1) return q;

  const isThaiLabel = q.choices.some((c) => ['ก', 'ข', 'ค', 'ง'].includes(c.label));
  const labels = isThaiLabel ? ['ก', 'ข', 'ค', 'ง'] : ['1', '2', '3', '4'];

  const shuffledChoices = shuffleArray(q.choices).map((choice, index) => ({
    ...choice,
    label: labels[index] || `${index + 1}`,
  }));

  return {
    ...q,
    choices: shuffledChoices,
  };
}

/**
 * สลับตัวเลือกของชุดข้อสอบทั้งหมด
 */
export function shuffleQuestionsChoices(questions: Question[]): Question[] {
  return questions.map((q) => shuffleQuestionChoices(q));
}
