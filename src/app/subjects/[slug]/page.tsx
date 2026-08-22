import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSubjectBySlug, getQuestionsBySubject, getQuestionsByTopic } from '@/lib/data-loader';
import { ArrowLeft, BookOpen, Sparkles, CheckCircle2, ArrowRight, Layers, HelpCircle } from 'lucide-react';
import { MathText } from '@/components/shared/MathText';

export default async function SubjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subject = getSubjectBySlug(slug);

  if (!subject) {
    notFound();
  }

  const subjectQuestions = getQuestionsBySubject(subject.id);

  return (
    <div className="space-y-8 pb-12">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>กลับหน้าหลักเลือกวิชา</span>
      </Link>

      {/* Subject Header Banner */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${subject.color}, #1E293B)`,
        }}
      >
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold backdrop-blur-md">
            <span>{subject.nameEn}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {subject.name}
          </h1>

          <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
            {subject.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold">
            <div className="bg-black/20 px-3 py-1.5 rounded-lg">
              คลังข้อสอบทั้งหมด: {subjectQuestions.length} ข้อ
            </div>
            <div className="bg-black/20 px-3 py-1.5 rounded-lg">
              จำนวน {subject.topics.length} หมวดความรู้
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            <span>เลือกหมวดหมู่ที่ต้องการฝึกฝน</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subject.topics.map((topic, index) => {
            const topicQuestions = getQuestionsByTopic(topic.id);
            const firstQuestionId = topicQuestions[0]?.id || subjectQuestions[0]?.id || 'math-geo-001';

            return (
              <div
                key={topic.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-blue-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 font-extrabold text-xs flex items-center justify-center border border-blue-100">
                        {index + 1}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">
                        {topic.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 pl-9">
                    {topic.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 pl-9">
                  <span className="text-xs font-semibold text-slate-500">
                    {topicQuestions.length > 0 ? `${topicQuestions.length} ข้อในหมวดนี้` : 'คลังข้อสอบเข้มข้น'}
                  </span>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/practice/${topic.id}`}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold bg-purple-50 hover:bg-purple-100 text-purple-700 transition-colors border border-purple-200/60"
                      title="สุ่มโจทย์และตัวเลขใหม่ไม่จำกัด"
                    >
                      <Sparkles className="w-3 h-3 text-purple-600" />
                      <span>ฝึกทำไม่จำกัด</span>
                    </Link>
                    <Link
                      href={`/quiz/${firstQuestionId}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-xs transition-all hover:opacity-90"
                      style={{ backgroundColor: subject.color }}
                    >
                      <span>เริ่มฝึกข้อสอบจริง</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Questions Quick List */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>แนวข้อสอบเด่นประจำวิชา (มศว. & สสวท.)</span>
        </h2>

        <div className="space-y-3">
          {subjectQuestions.map((q, idx) => (
            <div
              key={q.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-slate-300 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    ข้อที่ {idx + 1}
                  </span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                    q.type === 'multiple_choice' ? 'bg-blue-50 text-blue-700' :
                    q.type === 'short_answer' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'
                  }`}>
                    {q.type === 'multiple_choice' ? 'ปรนัย 4 ตัวเลือก' :
                     q.type === 'short_answer' ? 'อัตนัยเติมคำ' : 'อัตนัยแสดงวิธีทำ'}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700">
                    {q.points} คะแนน
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {q.source}
                  </span>
                </div>

                <div className="text-sm font-medium text-slate-800 line-clamp-2">
                  <MathText content={q.content} />
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href={`/solutions/${q.id}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>ดูเฉลยละเอียด</span>
                </Link>
                <Link
                  href={`/quiz/${q.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors"
                >
                  <span>ทำข้อนี้</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
