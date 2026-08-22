import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getQuestionById, ALL_QUESTIONS } from '@/lib/data-loader';
import { SolutionViewer } from '@/components/solution/SolutionViewer';
import { ArrowLeft, ArrowRight, Play, BookOpen } from 'lucide-react';

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = getQuestionById(id);

  if (!question) {
    notFound();
  }

  const currentIndex = ALL_QUESTIONS.findIndex((q) => q.id === id);
  const prevQuestion = currentIndex > 0 ? ALL_QUESTIONS[currentIndex - 1] : null;
  const nextQuestion = currentIndex < ALL_QUESTIONS.length - 1 ? ALL_QUESTIONS[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <Link
          href={`/subjects/${question.subjectId}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>กลับหน้ารวมวิชา</span>
        </Link>

        <Link
          href={`/quiz/${question.id}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>ทดลองฝึกทำข้อนี้</span>
        </Link>
      </div>

      {/* Main Solution Viewer */}
      <SolutionViewer question={question} />

      {/* Navigation Between Questions */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        {prevQuestion ? (
          <Link
            href={`/solutions/${prevQuestion.id}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>เฉลยข้อก่อนหน้า</span>
          </Link>
        ) : (
          <div />
        )}

        {nextQuestion && (
          <Link
            href={`/solutions/${nextQuestion.id}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-2xs"
          >
            <span>เฉลยข้อถัดไป</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
