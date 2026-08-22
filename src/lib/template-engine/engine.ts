import { Question } from '@/types/question';
import { QuestionTemplate, ParamDef } from './types';
import { generateDistractors, buildChoices } from './distractors';
import { MATH_ARITHMETIC_TEMPLATES } from './templates/math-arithmetic';
import { MATH_ALGEBRA_TEMPLATES } from './templates/math-algebra';
import { MATH_GEOMETRY_TEMPLATES } from './templates/math-geometry';
import { MATH_WORD_TEMPLATES } from './templates/math-word';
import { MATH_STATS_TEMPLATES } from './templates/math-stats';
import { SCI_PHYSICS_TEMPLATES } from './templates/sci-physics';

// All 33 registered templates
export const ALL_TEMPLATES: QuestionTemplate[] = [
  ...MATH_ARITHMETIC_TEMPLATES,
  ...MATH_ALGEBRA_TEMPLATES,
  ...MATH_GEOMETRY_TEMPLATES,
  ...MATH_WORD_TEMPLATES,
  ...MATH_STATS_TEMPLATES,
  ...SCI_PHYSICS_TEMPLATES,
];

/**
 * Randomize a single parameter according to its definition
 */
function randomParamValue(def: ParamDef): number {
  const step = def.step || 1;
  const stepsCount = Math.floor((def.max - def.min) / step);
  const randomStepIndex = Math.floor(Math.random() * (stepsCount + 1));
  return def.min + randomStepIndex * step;
}

/**
 * Sample all parameters until constraints are satisfied
 */
export function randomizeParams(
  paramDefs: ParamDef[],
  constraints?: (params: Record<string, number>) => boolean
): Record<string, number> {
  const maxAttempts = 100;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const params: Record<string, number> = {};
    for (const def of paramDefs) {
      params[def.name] = randomParamValue(def);
    }
    if (!constraints || constraints(params)) {
      return params;
    }
  }

  // Fallback: Return simple bounds
  const fallbackParams: Record<string, number> = {};
  for (const def of paramDefs) {
    fallbackParams[def.name] = def.min;
  }
  return fallbackParams;
}

/**
 * Generate a single Question instance from a template
 */
export function generateQuestionFromTemplate(template: QuestionTemplate): Question {
  const params = randomizeParams(template.params, template.constraints);
  const rawCorrectAnswer = template.correctAnswer(params);
  const correctAnswer = Number.isFinite(rawCorrectAnswer) ? rawCorrectAnswer : 1;

  const rawDistractors = generateDistractors(
    template.distractors,
    params,
    correctAnswer,
    template.answerFormat
  );

  const choices = buildChoices(
    correctAnswer,
    rawDistractors,
    template.answerUnit,
    template.answerFormat
  );

  const steps = template.solutionSteps(params, correctAnswer);
  const trickTip = template.trickTip ? template.trickTip(params) : undefined;

  const timestamp = Date.now() + Math.floor(Math.random() * 1000);
  const questionId = `gen-${template.id}-${timestamp}`;

  return {
    id: questionId,
    subjectId: template.subjectId,
    topicId: template.topicId,
    topicName: template.topicName,
    type: 'multiple_choice',
    difficulty: template.difficulty,
    points: 2,
    timeEstimateSeconds: 75,
    tags: [
      ...template.tags,
      '🎲 สุ่มโจทย์อัตโนมัติ (AI-Generated)',
      'Dynamic Template',
    ],
    source: 'ระบบสุ่มโจทย์อัตโนมัติ (Dynamic Template Engine)',
    targetSchool: 'all',
    content: template.questionText(params),
    choices,
    solution: {
      summary: `คำตอบที่ถูกต้องคือ ${choices.find((c) => c.isCorrect)?.content || correctAnswer}`,
      steps,
      trickTip,
      commonMistake:
        template.commonMistake ||
        '⚠️ หมายเหตุ: โจทย์ข้อนี้สร้างโดยระบบสุ่มอัตโนมัติ (AI-Generated) โปรดตรวจสอบขั้นตอนการคำนวณเพื่อฝึกฝนความแม่นยำ',
    },
  };
}

/**
 * Get templates filtered by topic
 */
export function getTemplatesByTopic(topicId: string): QuestionTemplate[] {
  return ALL_TEMPLATES.filter((t) => t.topicId === topicId);
}

/**
 * Get templates filtered by subject
 */
export function getTemplatesBySubject(subjectId: string): QuestionTemplate[] {
  return ALL_TEMPLATES.filter((t) => t.subjectId === subjectId);
}

/**
 * Get template by ID
 */
export function getTemplateById(id: string): QuestionTemplate | undefined {
  return ALL_TEMPLATES.find((t) => t.id === id);
}

/**
 * Generate a set of questions for practice mode
 */
export function generatePracticeSet(
  filter: { topicId?: string; subjectId?: string },
  count: number = 10
): Question[] {
  let pool: QuestionTemplate[] = [];

  if (filter.topicId) {
    pool = getTemplatesByTopic(filter.topicId);
  } else if (filter.subjectId) {
    pool = getTemplatesBySubject(filter.subjectId);
  }

  if (pool.length === 0) {
    pool = ALL_TEMPLATES;
  }

  const questions: Question[] = [];
  for (let i = 0; i < count; i++) {
    const template = pool[Math.floor(Math.random() * pool.length)];
    questions.push(generateQuestionFromTemplate(template));
  }

  return questions;
}
