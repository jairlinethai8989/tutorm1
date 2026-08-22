import React from 'react';
import { notFound } from 'next/navigation';
import { getMockExamById } from '@/lib/data-loader';
import { ExamSimulator } from '@/components/mock-exam/ExamSimulator';

export default async function MockExamRunnerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exam = getMockExamById(id);

  if (!exam) {
    notFound();
  }

  return <ExamSimulator exam={exam} />;
}
