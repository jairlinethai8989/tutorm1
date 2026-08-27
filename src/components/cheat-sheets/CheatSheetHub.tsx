'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { SubjectCategory, FormulaItem } from '@/types/cheatSheet';
import { ALL_CHEAT_SHEETS, getAllFormulaItems } from '@/data/cheat-sheets';
import { FormulaCard } from './FormulaCard';
import { PrintableCheatSheet } from './PrintableCheatSheet';
import {
  Search,
  BookOpen,
  Calculator,
  FlaskConical,
  Languages,
  BookMarked,
  Globe2,
  Star,
  Printer,
  Sparkles,
  Filter,
  X,
} from 'lucide-react';

const BOOKMARK_STORAGE_KEY = 'tutor_m1_bookmarked_formulas';

export const CheatSheetHub: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectCategory | 'all' | 'bookmarks'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);

  // Load bookmarks on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(BOOKMARK_STORAGE_KEY);
      if (stored) {
        setBookmarkedIds(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load formula bookmarks', e);
    }
  }, []);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.error('Failed to save formula bookmarks', e);
      }
      return next;
    });
  };

  const allItems = useMemo(() => getAllFormulaItems(), []);

  // Filter items based on selected tab and search query
  const filteredItems = useMemo(() => {
    let list = allItems;

    if (selectedSubject === 'bookmarks') {
      list = list.filter((item) => bookmarkedIds.includes(item.id));
    } else if (selectedSubject !== 'all') {
      list = list.filter((item) => item.category === selectedSubject);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      list = list.filter((item) => {
        return (
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.subCategory.toLowerCase().includes(query) ||
          (item.fastTrick && item.fastTrick.toLowerCase().includes(query)) ||
          (item.formula && item.formula.toLowerCase().includes(query)) ||
          item.tags.some((t) => t.toLowerCase().includes(query))
        );
      });
    }

    return list;
  }, [allItems, selectedSubject, searchQuery, bookmarkedIds]);

  const subjectTabs = [
    { id: 'all', label: 'ทั้งหมด', icon: BookOpen, count: allItems.length },
    { id: 'math', label: 'คณิตศาสตร์', icon: Calculator, color: 'text-blue-600' },
    { id: 'science', label: 'วิทยาศาสตร์', icon: FlaskConical, color: 'text-emerald-600' },
    { id: 'english', label: 'ภาษาอังกฤษ', icon: Languages, color: 'text-violet-600' },
    { id: 'thai', label: 'ภาษาไทย', icon: BookMarked, color: 'text-amber-600' },
    { id: 'social', label: 'สังคมศึกษา', icon: Globe2, color: 'text-rose-600' },
    { id: 'bookmarks', label: 'สูตรโปรดของฉัน', icon: Star, color: 'text-amber-500', count: bookmarkedIds.length },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-yellow-300 text-xs font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>มิติที่ 5: Cheat Sheets & Formula Hub</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight drop-shadow-xs">
            คลังสรุปสูตร & หัวใจสำคัญ 5 วิชาหลัก
          </h1>

          <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
            รวบรวมสูตรเรขาคณิต, สมการ, เทคนิคลัดฟิสิกส์-เคมี-ชีวะ, 12 Tenses, สมาส-สนธิ และพิกัดภูมิศาสตร์ อ่านทบทวนฉบับเร่งด่วนก่อนเข้าห้องสอบ!
          </p>

          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPrintModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white text-indigo-900 text-xs font-black shadow-md hover:bg-yellow-300 hover:scale-105 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-indigo-700" />
              <span>พิมพ์ชีทสรุป (Print / PDF)</span>
            </button>
            <span className="text-xs text-indigo-200 font-medium hidden sm:inline">
              มีทั้งหมด {allItems.length} สูตรและเทคนิคสำคัญ
            </span>
          </div>
        </div>

        {/* Decorative background circles */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-20 top-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl pointer-events-none" />
      </div>

      {/* 2. Controls: Search Bar & Subject Filter Tabs */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ค้นหาสูตร, เทคนิคลัด, คีย์เวิร์ด (เช่น สามเหลี่ยม, tenses, สมาส, ละติจูด)..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-medium"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {subjectTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedSubject === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedSubject(tab.id as any)}
                className={`px-3.5 py-2 rounded-2xl text-xs font-black flex items-center gap-1.5 shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : tab.color || ''}`} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Items Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredItems.map((item) => (
            <FormulaCard
              key={item.id}
              item={item}
              isBookmarked={bookmarkedIds.includes(item.id)}
              onToggleBookmark={toggleBookmark}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-slate-300 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-black text-slate-800">
            {selectedSubject === 'bookmarks' ? 'ยังไม่มีสูตรโปรดที่คุณบันทึกไว้' : 'ไม่พบสูตรหรือเทคนิคที่ตรงกับคำค้นหา'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {selectedSubject === 'bookmarks'
              ? 'กดที่ไอคอนรูปดาว ⭐ บนการ์ดสูตรใดก็ได้ เพื่อบันทึกไว้ทบทวนก่อนเข้าห้องสอบ!'
              : 'ลองพิมพ์คำค้นหาอื่น เช่น "พื้นที่", "Tense", "กฎอุปสงค์", หรือเปลี่ยนหมวดวิชาดูนะครับ'}
          </p>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 text-xs font-bold hover:bg-indigo-100 transition-colors cursor-pointer"
            >
              ล้างคำค้นหา
            </button>
          )}
        </div>
      )}

      {/* 4. Modal Printable Preview */}
      {isPrintModalOpen && (
        <PrintableCheatSheet
          items={filteredItems.length > 0 ? filteredItems : allItems}
          title={`ชีทสรุปสูตร (${selectedSubject === 'all' ? 'ทุกวิชา' : selectedSubject})`}
          onClose={() => setIsPrintModalOpen(false)}
        />
      )}
    </div>
  );
};
