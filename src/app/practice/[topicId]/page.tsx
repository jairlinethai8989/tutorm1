import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PracticeMode } from '@/components/practice/PracticeMode';
import { getTemplatesByTopic } from '@/lib/template-engine';
import { SUBJECTS } from '@/lib/constants/subjects';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default async function TopicPracticePage({
  params,
}: {
  params: Promise<{ topicId: string }>;
}) {
  const { topicId } = await params;

  // Find topic details from SUBJECTS
  let foundTopicName = 'ฝึกทำโจทย์ไม่จำกัด';
  let foundSubjectSlug = 'math';

  for (const subject of SUBJECTS) {
    const t = subject.topics.find((topic) => topic.id === topicId || topic.slug === topicId);
    if (t) {
      foundTopicName = t.name;
      foundSubjectSlug = subject.slug;
      break;
    }
  }

  const topicTemplates = getTemplatesByTopic(topicId);

  return (
    <div className="space-y-6 pb-16">
      <Link
        href={`/subjects/${foundSubjectSlug}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>กลับหน้ารายวิชา</span>
      </Link>

      <PracticeMode
        topicId={topicId}
        topicName={foundTopicName}
        title={`🎲 ฝึกทำโจทย์ไม่จำกัด: ${foundTopicName}`}
      />
    </div>
  );
}
