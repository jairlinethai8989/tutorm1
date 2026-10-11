import { Question } from '@/types/question';
import { BENCHAMA_MATH_2564_PART1 } from './part1';
import { BENCHAMA_MATH_2564_PART2 } from './part2';

export { BENCHAMA_MATH_2564_PART1 } from './part1';
export { BENCHAMA_MATH_2564_PART2 } from './part2';

/**
 * รวมข้อสอบคณิตศาสตร์ Pre-Test รร.เบ็ญจะมะมหาราช ปี 2564 (Math Contest 2020)
 * จำนวน 45 ข้อ (ปรนัย 35 ข้อ, อัตนัย 10 ข้อ รวม 100 คะแนน เวลา 120 นาที)
 */
export const BENCHAMA_MATH_2564_QUESTIONS: Question[] = [
  ...BENCHAMA_MATH_2564_PART1,
  ...BENCHAMA_MATH_2564_PART2,
];
