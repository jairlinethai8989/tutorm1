'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Question } from '@/types/question';
import {
  getAllMistakeRecords,
  getStoredBookmarks,
  MistakeRecord,
  getUnresolvedMistakeCount,
} from '@/lib/storage';
import { ALL_QUESTIONS } from '@/lib/data-loader';
import { MistakeCard } from './MistakeCard';
import { MistakeRetakeQuiz } from './MistakeRetakeQuiz';
import { CommonPitfallsFlashcards } from './CommonPitfallsFlashcards';
import {
  BookMarked,
  AlertTriangle,
  CheckCircle2,
  Bookmark,
  Sparkles,
  Zap,
  Filter,
  ArrowLeft,
  Flame,
  RotateCcw,
  Search,
  Award,
  Lightbulb,
} from 'lucide-react';

type TabType = 'mistakes' | 'bookmarks' | 'retake' | 'flashcards';

export const MistakeBookView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('mistakes');
  const [mistakeRecords, setMistakeRecords] = useState<MistakeRecord[]>([]);
  const [bookmarkIds, setBookmarkIds] = useState<string[]>([]);
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unresolved' | 'resolved'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const loadData = () => {
    setMistakeRecords(getAllMistakeRecords());
    setBookmarkIds(getStoredBookmarks());
  };

  useEffect(() => {
    loadData();
  }, []);

  // Map mistake records to full Question objects
  const questionMap = new Map<string, Question>();
  ALL_QUESTIONS.forEach((q) => questionMap.set(q.id, q));

  // Resolved & Unresolved counts
  const totalMistakes = mistakeRecords.length;
  const unresolvedCount = mistakeRecords.filter((m) => !m.isResolved).length;
  const resolvedCount = mistakeRecords.filter((m) => m.isResolved).length;
  const bookmarkCount = bookmarkIds.length;

  // Filtered mistake questions
  const filteredMistakes = mistakeRecords.filter((record) => {
    const q = questionMap.get(record.questionId);
    if (!q) return false;

    // Subject filter
    if (subjectFilter !== 'all' && q.subjectId !== subjectFilter) {
      return false;
    }

    // Status filter
    if (statusFilter === 'unresolved' && record.isResolved) return false;
    if (statusFilter === 'resolved' && !record.isResolved) return false;

    // Search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchContent = q.content.toLowerCase().includes(query);
      const matchTopic = (q.topicName || '').toLowerCase().includes(query);
      const matchSchool = (q.school || '').toLowerCase().includes(query);
      if (!matchContent && !matchTopic && !matchSchool) return false;
    }

    return true;
  });

  // Bookmarked questions
  const bookmarkedQuestions = bookmarkIds
    .map((id) => questionMap.get(id))
    .filter((q): q is Question => q !== undefined);

  // Questions for Retake Quiz (only unresolved mistakes by default, or all mistakes if all resolved)
  const retakeQuestions = (
    unresolvedCount > 0
      ? mistakeRecords.filter((m) => !m.isResolved)
      : mistakeRecords
  )
    .map((m) => questionMap.get(m.questionId))
    .filter((q): q is Question => q !== undefined);

  return (
    <div className="space-y-8 pb-16">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>กลับหน้าหลัก</span>
          </Link>
          <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-1">
            <BookMarked className="w-4 h-4" />
            <span>Smart Mistake Recovery System</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            สมุดบันทึกจุดอ่อน & ข้อสอบติดดาว
          </h1>
        </div>

        {/* Quick Action to Re-Take Mistakes */}
        {totalMistakes > 0 && activeTab !== 'retake' && (
          <button
            type="button"
            onClick={() => setActiveTab('retake')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-extrabold text-xs shadow-md shadow-rose-500/25 transition-all hover:scale-105 cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>⚡ ซ้อมสอบซ่อมจุดอ่อน ({unresolvedCount} ข้อ)</span>
          </button>
        )}
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-semibold block">ข้อที่เคยตอบผิด</span>
            <span className="text-2xl font-black text-slate-900">{totalMistakes}</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Flame className="w-6 h-6 fill-amber-500" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-semibold block">รอทบทวนซ้ำ</span>
            <span className="text-2xl font-black text-amber-600">{unresolvedCount}</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-semibold block">เข้าใจแล้ว (Mastered)</span>
            <span className="text-2xl font-black text-emerald-600">{resolvedCount}</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <Bookmark className="w-6 h-6 fill-purple-500" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-semibold block">ข้อสอบติดดาว</span>
            <span className="text-2xl font-black text-purple-600">{bookmarkCount}</span>
          </div>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('mistakes')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'mistakes'
              ? 'bg-white text-rose-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-rose-500" />
          <span>ข้อที่ตอบผิด ({totalMistakes})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('bookmarks')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'bookmarks'
              ? 'bg-white text-purple-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Bookmark className="w-4 h-4 text-purple-500 fill-purple-500" />
          <span>ข้อสอบติดดาว ({bookmarkCount})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('retake')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'retake'
              ? 'bg-white text-blue-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Zap className="w-4 h-4 text-blue-600 fill-blue-600" />
          <span>⚡ ซ้อมสอบซ่อมจุดอ่อน</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('flashcards')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'flashcards'
              ? 'bg-white text-amber-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <span>💡 Flashcards จุดลวงยอดฮิต</span>
        </button>
      </div>

      {/* Tab 1: Mistakes List */}
      {activeTab === 'mistakes' && (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาตามเนื้อหาโจทย์, โรงเรียน, หัวข้อ..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                วิชา:
              </span>
              <select
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">ทุกวิชา</option>
                <option value="math">คณิตศาสตร์</option>
                <option value="science">วิทยาศาสตร์</option>
                <option value="english">ภาษาอังกฤษ</option>
                <option value="thai">ภาษาไทย</option>
                <option value="social">สังคมศึกษา</option>
              </select>

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">ทุกสถานะ</option>
                <option value="unresolved">เฉพาะรอทบทวน ({unresolvedCount})</option>
                <option value="resolved">เข้าใจแล้ว ({resolvedCount})</option>
              </select>
            </div>
          </div>

          {/* List of Mistake Cards */}
          {filteredMistakes.length > 0 ? (
            <div className="space-y-4">
              {filteredMistakes.map((record) => {
                const q = questionMap.get(record.questionId);
                if (!q) return null;
                return (
                  <MistakeCard
                    key={record.questionId}
                    question={q}
                    record={record}
                    onStatusChange={loadData}
                  />
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {totalMistakes === 0
                  ? 'ยังไม่มีประวัติข้อที่ทำผิด'
                  : 'ไม่พบข้อสอบที่ตรงกับตัวกรอง'}
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {totalMistakes === 0
                  ? 'เมื่อคุณทำแบบฝึกหัดหรือทำข้อสอบจำลอง ระบบจะบันทึกข้อที่ตอบผิดลงในสมุดบันทึกนี้โดยอัตโนมัติ'
                  : 'ลองเปลี่ยนตัวกรองวิชาหรือสถานะเพื่อดูข้อสอบในสมุดบันทึก'}
              </p>
              {totalMistakes === 0 && (
                <Link
                  href="/mock-exam"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-blue-600 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
                >
                  <span>เริ่มทำข้อสอบจำลอง</span>
                </Link>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Bookmarked Questions */}
      {activeTab === 'bookmarks' && (
        <div className="space-y-4">
          {bookmarkedQuestions.length > 0 ? (
            bookmarkedQuestions.map((q) => (
              <MistakeCard
                key={q.id}
                question={q}
                onStatusChange={loadData}
              />
            ))
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Bookmark className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">ยังไม่มีข้อสอบที่ติดดาวไว้</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                คุณสามารถกดไอคอนรูปริบบิ้น (Bookmark) ที่ข้อสอบใด ๆ ในระบบ เพื่อบันทึกมาทบทวนในหน้านี้ได้ตลอดเวลา
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Re-Take Mistake Quiz */}
      {activeTab === 'retake' && (
        <MistakeRetakeQuiz
          questions={retakeQuestions}
          onFinish={() => {
            loadData();
            setActiveTab('mistakes');
          }}
          onExit={() => {
            loadData();
            setActiveTab('mistakes');
          }}
        />
      )}

      {/* Tab 4: Common Pitfalls Flashcards */}
      {activeTab === 'flashcards' && <CommonPitfallsFlashcards />}
    </div>
  );
};
