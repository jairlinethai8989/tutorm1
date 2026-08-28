'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { SubjectCategory, FormulaItem } from '@/types/cheatSheet';
import { ALL_CHEAT_SHEETS, getAllFormulaItems } from '@/data/cheat-sheets';
import { FormulaCard } from './FormulaCard';
import { FlashcardPrintModal } from './FlashcardPrintModal';
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
  Layers,
} from 'lucide-react';

const BOOKMARK_STORAGE_KEY = 'tutor_m1_bookmarked_formulas';

export const CheatSheetHub: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectCategory | 'all' | 'bookmarks'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [singlePrintItem, setSinglePrintItem] = useState<FormulaItem | null>(null);

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-yellow-300 text-xs font-black font-prompt shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>คลังการ์ดสรุปสูตร Flashcard 5 วิชาหลัก</span>
          </div>

          <h1 className="font-prompt font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
            📑 สรุปสูตร & หัวใจสำคัญ สอบเข้า ม.1
          </h1>

          <p className="font-sarabun text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
            รวบรวมสูตรคณิตศาสตร์, วิทยาศาสตร์, แกรมม่าอังกฤษ, หลักภาษาไทย และสังคมศึกษา พร้อมตัวอย่างและเทคนิคคิดลัดในรูปแบบ Flashcard พกพาง่าย
          </p>

          {/* Quick Print Banner Action */}
          <div className="pt-2 flex items-center gap-2.5 flex-wrap">
            <button
              type="button"
              onClick={() => {
                setSinglePrintItem(null);
                setIsPrintModalOpen(true);
              }}
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-yellow-300 text-blue-900 font-prompt font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-blue-800" />
              <span>🖨️ พิมพ์การ์ดสรุปสูตรชุดนี้ (4 ใบ/แผ่น A4)</span>
            </button>
            <div className="text-xs font-sarabun text-blue-200">
              ({filteredItems.length} สูตรในหน้านี้)
            </div>
          </div>
        </div>

        {/* Decorative Watermark Icons */}
        <div className="absolute right-4 -bottom-6 text-white/10 select-none pointer-events-none hidden md:block">
          <Calculator className="w-48 h-48" />
        </div>
      </div>

      {/* 2. Filter Tabs & Search Bar */}
      <div className="space-y-4">
        {/* Subject Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {subjectTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedSubject === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedSubject(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-2xl font-prompt font-extrabold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : tab.color || 'text-slate-500'}`} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                      isSelected ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ค้นหาชื่อสูตร, เนื้อหา, เทคนิคคิดลัด หรือแฮชแท็ก เช่น #สามเหลี่ยม #ร้อยละ..."
            className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 font-sarabun focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 3. Formula Flashcards Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <FormulaCard
              key={item.id}
              item={item}
              isBookmarked={bookmarkedIds.includes(item.id)}
              onToggleBookmark={toggleBookmark}
              onPrintSingle={(targetItem) => {
                setSinglePrintItem(targetItem);
                setIsPrintModalOpen(true);
              }}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-prompt font-extrabold text-base text-slate-900">
            ไม่พบสูตรที่ตรงกับคำค้นหา
          </h3>
          <p className="font-sarabun text-xs text-slate-500">
            ลองเปลี่ยนคำค้นหา หรือเลือกหมวดหมู่อื่นเพื่อค้นหาสูตรที่ต้องการ
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedSubject('all');
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-prompt font-bold text-xs hover:bg-blue-700 transition-colors cursor-pointer"
          >
            แสดงสูตรทั้งหมด
          </button>
        </div>
      )}

      {/* 4. Flashcard Print Modal */}
      {isPrintModalOpen && (
        <FlashcardPrintModal
          items={filteredItems}
          singleItem={singlePrintItem}
          onClose={() => {
            setIsPrintModalOpen(false);
            setSinglePrintItem(null);
          }}
        />
      )}
    </div>
  );
};
