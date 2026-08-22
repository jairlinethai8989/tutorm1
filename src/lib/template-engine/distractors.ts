import { Choice } from '@/types/question';
import { DistractorStrategy } from './types';

/**
 * Format a number according to the specified format
 */
export function formatNumber(value: number, format?: 'integer' | 'decimal1' | 'decimal2'): string {
  if (format === 'decimal1') {
    return (Math.round(value * 10) / 10).toFixed(1);
  }
  if (format === 'decimal2') {
    return (Math.round(value * 100) / 100).toFixed(2);
  }
  // Default integer
  return Math.round(value).toString();
}

/**
 * Generate 3 unique distractors based on strategies and backup perturbations
 */
export function generateDistractors(
  strategies: DistractorStrategy[],
  params: Record<string, number>,
  correctAnswer: number,
  format?: 'integer' | 'decimal1' | 'decimal2'
): number[] {
  const formattedCorrect = formatNumber(correctAnswer, format);
  const values = new Set<string>();
  const results: number[] = [];

  // 1. Try strategies
  for (const strategy of strategies) {
    try {
      const val = strategy.compute(params, correctAnswer);
      const strVal = formatNumber(val, format);
      if (strVal !== formattedCorrect && !values.has(strVal) && Number.isFinite(val) && val >= 0) {
        values.add(strVal);
        results.push(Number(strVal));
      }
    } catch {
      // Ignore compute errors
    }
  }

  // 2. Perturbation fallbacks if fewer than 3 distractors
  const perturbationFactors = [1.2, 0.8, 1.5, 0.5, 2.0, 1.1, 0.9, 1.25, 0.75];
  let pIndex = 0;

  while (results.length < 3 && pIndex < perturbationFactors.length) {
    const factor = perturbationFactors[pIndex];
    pIndex++;
    let val = correctAnswer * factor;
    if (correctAnswer === 0) {
      val = (results.length + 1) * 2;
    }
    const strVal = formatNumber(val, format);
    if (strVal !== formattedCorrect && !values.has(strVal) && Number.isFinite(val) && val >= 0) {
      values.add(strVal);
      results.push(Number(strVal));
    }
  }

  // 3. Fallback offset
  let offset = 1;
  while (results.length < 3) {
    const val = Math.max(1, correctAnswer + (results.length % 2 === 0 ? offset : -offset));
    offset += 2;
    const strVal = formatNumber(val, format);
    if (strVal !== formattedCorrect && !values.has(strVal)) {
      values.add(strVal);
      results.push(Number(strVal));
    }
  }

  return results.slice(0, 3);
}

/**
 * Shuffle choices and assign labels 1, 2, 3, 4
 */
export function buildChoices(
  correctAnswer: number,
  distractors: number[],
  unit?: string,
  format?: 'integer' | 'decimal1' | 'decimal2'
): Choice[] {
  const allValues = [
    { value: correctAnswer, isCorrect: true },
    ...distractors.map((d) => ({ value: d, isCorrect: false })),
  ];

  // Fisher-Yates Shuffle
  for (let i = allValues.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allValues[i], allValues[j]] = [allValues[j], allValues[i]];
  }

  const labels = ['1', '2', '3', '4'];
  return allValues.map((item, index) => {
    const formatted = formatNumber(item.value, format);
    const content = unit ? `${formatted} ${unit}` : formatted;
    return {
      id: `c${index + 1}`,
      label: labels[index],
      content,
      isCorrect: item.isCorrect,
    };
  });
}
