import { Question, Subject, Topic } from '@/types/question';
import { MockExam } from '@/types/exam';
import { SUBJECTS } from './constants/subjects';
import { MOCK_EXAMS } from './constants/mockExams';
import { MATH_QUESTIONS } from '@/data/questions/math';
import { SCIENCE_QUESTIONS } from '@/data/questions/science';
import { ENGLISH_QUESTIONS } from '@/data/questions/english';
import { THAI_QUESTIONS } from '@/data/questions/thai';
import { SOCIAL_QUESTIONS } from '@/data/questions/social';

import { SATRIWIT_SCIENCE_QUESTIONS } from '@/data/questions/satriwitScience';
import { SUANKULARB_SCIENCE_QUESTIONS } from '@/data/questions/suankularbScience';
import { SUKSANARI_SCIENCE_QUESTIONS } from '@/data/questions/suksanariScience';
import { RITTIYA_SCIENCE_QUESTIONS } from '@/data/questions/rittiyaScience';
import { SARAWITTAYA_SCIENCE_QUESTIONS } from '@/data/questions/sarawittayaScience';
import { CHULABHORN_SCIENCE_QUESTIONS, CHULABHORN_SET1_SCIENCE_QUESTIONS, CHULABHORN_2562_SCIENCE_QUESTIONS } from '@/data/questions/chulabhornScience';
import { CHULABHORN_MATH_QUESTIONS } from '@/data/questions/chulabhornMath';
import { SAMSEN_2565_SPECIAL_MATH_QUESTIONS } from '@/data/questions/samsenMath';
import { SUANKULARB_PRETEST_9_MATH_QUESTIONS } from '@/data/questions/suankularbMath';
import { PATUMWAN_MATH_QUESTIONS } from '@/data/questions/patumwanMath';

export const ALL_QUESTIONS: Question[] = [
  ...MATH_QUESTIONS,
  ...SCIENCE_QUESTIONS,
  ...ENGLISH_QUESTIONS,
  ...THAI_QUESTIONS,
  ...SOCIAL_QUESTIONS,
];

export const getSubjects = (): Subject[] => {
  return SUBJECTS;
};

export const getSubjectBySlug = (slug: string): Subject | undefined => {
  return SUBJECTS.find((s) => s.slug === slug || s.id === slug);
};

export const getQuestionsBySubject = (subjectId: string): Question[] => {
  return ALL_QUESTIONS.filter((q) => q.subjectId === subjectId);
};

export const getQuestionsByTopic = (topicId: string): Question[] => {
  return ALL_QUESTIONS.filter((q) => q.topicId === topicId);
};

export const getQuestionById = (id: string): Question | undefined => {
  return ALL_QUESTIONS.find((q) => q.id === id);
};

export const getMockExams = (): MockExam[] => {
  return MOCK_EXAMS.map((exam) => {
    let questions: Question[] = [];
    if (exam.id === 'benchama-math-01') {
      questions = ALL_QUESTIONS.filter((q) => q.subjectId === 'math');
    } else if (exam.id === 'benchama-sci-01') {
      questions = ALL_QUESTIONS.filter((q) => q.subjectId === 'science');
    } else if (exam.id === 'chulabhorn-combined-01') {
      questions = [...CHULABHORN_SCIENCE_QUESTIONS, ...CHULABHORN_MATH_QUESTIONS];
    } else if (exam.id === 'chulabhorn-math-intensive') {
      questions = CHULABHORN_MATH_QUESTIONS;
    } else if (exam.id === 'chulabhorn-pretest-sci-62') {
      questions = CHULABHORN_2562_SCIENCE_QUESTIONS;
    } else if (exam.id === 'chulabhorn-sci-set1') {
      questions = CHULABHORN_SET1_SCIENCE_QUESTIONS;
    } else if (exam.id === 'satriwit-pretest-sci-05') {
      questions = SATRIWIT_SCIENCE_QUESTIONS;
    } else if (exam.id === 'suankularb-pretest-sci-64') {
      questions = SUANKULARB_SCIENCE_QUESTIONS;
    } else if (exam.id === 'suksanari-pretest-sci-63') {
      questions = SUKSANARI_SCIENCE_QUESTIONS;
    } else if (exam.id === 'rittiya-pre-sci-64') {
      questions = RITTIYA_SCIENCE_QUESTIONS;
    } else if (exam.id === 'sarawittaya-pretest-sci-63') {
      questions = SARAWITTAYA_SCIENCE_QUESTIONS;
    } else if (exam.id === 'samsen-pretest-math-65') {
      questions = SAMSEN_2565_SPECIAL_MATH_QUESTIONS;
    } else if (exam.id === 'suankularb-pretest-math-9') {
      questions = SUANKULARB_PRETEST_9_MATH_QUESTIONS;
    } else if (exam.id === 'patumwan-math-60') {
      questions = PATUMWAN_MATH_QUESTIONS;
    } else {
      questions = ALL_QUESTIONS.slice(0, 10);
    }
    return {
      ...exam,
      totalQuestions: questions.length,
      questions,
      questionIds: questions.map((q) => q.id),
    };
  });
};

export const getMockExamById = (id: string): MockExam | undefined => {
  const exams = getMockExams();
  return exams.find((e) => e.id === id);
};
