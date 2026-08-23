import React from 'react';
import { notFound } from 'next/navigation';
import { getQuestionById, ALL_QUESTIONS } from '@/lib/data-loader';
import { QuizPlayer } from '@/components/quiz/QuizPlayer';

export default async function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = getQuestionById(id);

  if (!question) {
    notFound();
  }

  const subjectQuestions = ALL_QUESTIONS.filter((q) => q.subjectId === question.subjectId);
  const questionsSet = subjectQuestions.length > 0 ? subjectQuestions : ALL_QUESTIONS;

  return <QuizPlayer question={question} allQuestions={questionsSet} />;
}
