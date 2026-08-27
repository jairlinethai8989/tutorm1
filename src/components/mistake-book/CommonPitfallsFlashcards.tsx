'use client';

import React, { useState } from 'react';
import { MathText } from '@/components/shared/MathText';
import {
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  RotateCw,
  Layers,
  Calculator,
  Atom,
  Languages,
} from 'lucide-react';

interface PitfallCard {
  id: string;
  subject: 'math' | 'science' | 'english';
  subjectLabel: string;
  topic: string;
  trapTitle: string;
  commonMistake: string;
  correctConcept: string;
  fastTrick: string;
  exampleQuestion: string;
  exampleAnswer: string;
}

const PITFALL_CARDS: PitfallCard[] = [
  // Math Traps
  {
    id: 'pitfall-m-1',
    subject: 'math',
    subjectLabel: 'คณิตศาสตร์',
    topic: 'การนับเลขโดด',
    trapTitle: 'หลุมพรางการนับเลขโดด vs จำนวนหน้าหนังสือ',
    commonMistake: 'คิดว่าหน้า 1-100 ใช้เลขโดด 100 ตัว หรือคำนวณจำนวนหลักผิด',
    correctConcept: 'หน้า 1-9 (9 ตัว) = 9 หลัก, หน้า 10-99 (90 จำนวน) = 180 หลัก, หน้า 100-999 (900 จำนวน) = 2,700 หลัก',
    fastTrick: 'สูตรลัดผลรวมเลขโดด 1 ถึง $N$: แยกคิดทีละช่วง (หลักหน่วย 1-9, สองหลัก 10-99, สามหลัก 100-999)',
    exampleQuestion: 'หนังสือเล่มหนึ่งมี 120 หน้า ต้องพิมพ์เลขโดดทั้งหมดกี่ตัว',
    exampleAnswer: '$(9 \\times 1) + (90 \\times 2) + (21 \\times 3) = 9 + 180 + 63 = 252\\text{ ตัว}$',
  },
  {
    id: 'pitfall-m-2',
    subject: 'math',
    subjectLabel: 'คณิตศาสตร์',
    topic: 'ร้อยละและกำไร-ขาดทุน',
    trapTitle: 'กับดักการขึ้นราคา $x\\%$ แล้วลดราคา $x\\%$',
    commonMistake: 'คิดว่าขึ้นราคา 20% แล้วลดราคา 20% จะกลับมาเท่ากับราคาเดิม',
    correctConcept: 'การลด 20% คำนวณจากราคาใหม่ที่สูงขึ้น จึงทำให้ราคาขายสุดท้าย "ขาดทุนเสมอ"',
    fastTrick: 'สูตรลัดขึ้น $x\\%$ แล้วลด $x\\%$: ขาดทุนเสมอ $= \\frac{x^2}{100}\\%$ (เช่น $20\\% \\implies \\text{ขาดทุน } \\frac{400}{100} = 4\\%$)',
    exampleQuestion: 'ตั้งราคาบวกกำไร 25% ต่อมาติดป้ายลด 25% สรุปผลกำไรหรือขาดทุนกี่ %',
    exampleAnswer: 'ขาดทุน $= \\frac{25^2}{100} = 6.25\\%$',
  },
  {
    id: 'pitfall-m-3',
    subject: 'math',
    subjectLabel: 'คณิตศาสตร์',
    topic: 'พื้นที่วงกลมและรูปซ้อน',
    trapTitle: 'รัศมีเพิ่ม $k$ เท่า $\\implies$ พื้นที่เพิ่ม $k^2$ เท่า ไม่ใช่ $k$ เท่า',
    commonMistake: 'คิดว่ารัศมีเพิ่ม 2 เท่า พื้นที่จะเพิ่ม 2 เท่าด้วย',
    correctConcept: 'พื้นที่วงกลม $A = \\pi r^2$ แปรผันตามรัศมียกกำลังสอง',
    fastTrick: 'ถ้ารัศมีเพิ่มขึ้น $p\\%$ $\\implies$ พื้นที่เพิ่ม $= 2p + \\frac{p^2}{100}\\%$',
    exampleQuestion: 'ถ้ารัศมีของวงกลมเพิ่มขึ้น 3 เท่า พื้นที่วงกลมจะเพิ่มเป็นกี่เท่าของเดิม',
    exampleAnswer: 'พื้นที่เพิ่มเป็น $3^2 = 9\\text{ เท่าของเดิม}$',
  },

  // Science Traps
  {
    id: 'pitfall-s-1',
    subject: 'science',
    subjectLabel: 'วิทยาศาสตร์',
    topic: 'พันธุศาสตร์และยีนด้อย',
    trapTitle: 'พ่อแม่ลักษณะเด่น แต่มีลูกลักษณะด้อย',
    commonMistake: 'คิดว่าพ่อแม่เด่น ลูกต้องเด่น 100% เสมอ',
    correctConcept: 'ถ้าพ่อและแม่มีจีโนไทป์เป็นพาหะยีนด้อย ($Aa \\times Aa$) ลูกมีโอกาสแสดงลักษณะด้อย ($aa$) ถึง 25% (1 ใน 4)',
    fastTrick: 'เห็นพ่อแม่เด่นทั้งคู่แต่มีลูกลักษณะด้อย $\\implies$ พ่อแม่ต้องเป็น Heterozygous ($Aa$) ทั้งคู่ทันที',
    exampleQuestion: 'พ่อแม่มีลักยิ้มทั้งคู่ แต่ลูกชายไม่มีลักยิ้ม จีโนไทป์ของพ่อแม่คืออะไร',
    exampleAnswer: 'พ่อแม่ต้องเป็น $Aa$ ทั้งคู่ ลูกชายจึงได้รับ $a$ จากพ่อและแม่เป็น $aa$',
  },
  {
    id: 'pitfall-s-2',
    subject: 'science',
    subjectLabel: 'วิทยาศาสตร์',
    topic: 'สารอาหารและพลังงาน',
    trapTitle: 'สัดส่วนพลังงานสารอาหารต่อกรัม (4-4-9)',
    commonMistake: 'จำสับสนว่าไขมันให้ 4 หรือโปรตีนให้ 9',
    correctConcept: 'โปรตีน = 4 kcal/g, คาร์โบไฮเดรต = 4 kcal/g, ไขมัน = 9 kcal/g (วิตามิน/เกลือแร่/น้ำ ไม่ให้พลังงาน)',
    fastTrick: 'ท่องจำ: "โปรสี่ คาร์บสี่ ไขเก้า" (วิตามิน แร่ธาตุ น้ำ = 0 kcal)',
    exampleQuestion: 'อาหารชิ้นหนึ่งมีโปรตีน 4 g, คาร์โบไฮเดรต 5 g, ไขมัน 1 g ให้พลังงานกี่ kcal',
    exampleAnswer: '$(4 \\times 4) + (5 \\times 4) + (1 \\times 9) = 16 + 20 + 9 = 45\\text{ kcal}$',
  },
  {
    id: 'pitfall-s-3',
    subject: 'science',
    subjectLabel: 'วิทยาศาสตร์',
    topic: 'มวล vs น้ำหนัก',
    trapTitle: 'มวลคงที่ทุกที่ แต่น้ำหนักเปลี่ยนตามค่า g',
    commonMistake: 'คิดว่าไปดวงจันทร์หรือดาวพฤหัสแล้ว "มวล" ของเราจะเปลี่ยน',
    correctConcept: 'มวล ($m$, กิโลกรัม) คือเนื้อสาร มีค่าคงที่เสมอทั่วทั้งจักรวาล ส่วนน้ำหนัก ($W = mg$, นิวตัน) เปลี่ยนตามแรงโน้มถ่วง',
    fastTrick: 'มวลคงที่ $100\\%$ | น้ำหนักบนดวงจันทร์ $= \\frac{1}{6}$ ของโลก | น้ำหนักบนดาวพฤหัส $= 2.5$ เท่าของโลก',
    exampleQuestion: 'วัตถุมวล 60 kg ชั่งน้ำหนักบนโลกได้ 600 N เมื่อนำไปชั่งบนดวงจันทร์ มวลและน้ำหนักเป็นเท่าใด',
    exampleAnswer: 'มวลยังคงเป็น $60\\text{ kg}$ เท่าเดิม แต่น้ำหนักลดเหลือ $600 \\div 6 = 100\\text{ N}$',
  },

  // English Traps
  {
    id: 'pitfall-e-1',
    subject: 'english',
    subjectLabel: 'ภาษาอังกฤษ',
    topic: 'Subject-Verb Agreement',
    trapTitle: 'Neither of / Either of / One of + Plural Noun',
    commonMistake: 'เห็นนามข้างหลังเติม s (เช่น boys, students) แล้วเผลอเลือกกริยาพหูพจน์ (are/were/have)',
    correctConcept: 'ประธานแกนหลักคือ Neither, Either, One, Each ซึ่งเป็น "เอกพจน์" เสมอ จึงต้องใช้ Verb เอกพจน์ (is/was/has/V-s)',
    fastTrick: 'ท่องจำ: "One of / Neither of / Either of / Each of + นามพหูพจน์" $\\implies$ กริยาเอกพจน์เสมอ!',
    exampleQuestion: 'Neither of the students (is / are) absent today.',
    exampleAnswer: 'ใช้ **is** เพราะประธานหลักคือ Neither (เอกพจน์)',
  },
  {
    id: 'pitfall-e-2',
    subject: 'english',
    subjectLabel: 'ภาษาอังกฤษ',
    topic: 'Gerund vs Infinitive',
    trapTitle: 'spend time + V-ing vs would love + to + V.inf',
    commonMistake: 'สับสนว่า spend time ตามด้วย to + V.inf หรือ V-ing',
    correctConcept: 'spend time/money + V-ing (doing) เสมอ | ส่วน would like / would love / would prefer + to + V.inf',
    fastTrick: 'spend time + V-ing | look forward to + V-ing | would love + to + V.inf',
    exampleQuestion: 'He spent two hours (to study / studying) for the exam.',
    exampleAnswer: 'ใช้ **studying** (spend time + V-ing)',
  },
  {
    id: 'pitfall-e-3',
    subject: 'english',
    subjectLabel: 'ภาษาอังกฤษ',
    topic: 'Conditionals (If-Clause)',
    trapTitle: 'If-Clause Type 2 (สมมุติตรงข้ามความจริงปัจจุบัน)',
    commonMistake: 'ใช้ If + will หรือ If + would ในประโยคย่อย If-clause',
    correctConcept: 'Type 2: If + S + V.2 (were/knew), S + would/could + V.infinitive',
    fastTrick: 'หลังคำว่า If ห้ามใส่ will หรือ would เด็ดขาด!',
    exampleQuestion: 'If I (know / knew) his phone number right now, I would call him.',
    exampleAnswer: 'ใช้ **knew** (สมมุติตรงข้ามปัจจุบัน Type 2)',
  },
];

export const CommonPitfallsFlashcards: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<'all' | 'math' | 'science' | 'english'>('all');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const filteredCards = PITFALL_CARDS.filter((c) => {
    if (selectedSubject === 'all') return true;
    return c.subject === selectedSubject;
  });

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl p-6 text-white shadow-md">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-amber-200 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>High-Yield Entrance Exam Traps</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black">
            💡 Flashcards สรุปจุดหลอก & หลุมพรางยอดฮิต
          </h2>
          <p className="text-amber-100 text-xs sm:text-sm">
            รวบรวมข้อสอบจุดลวงที่เด็ก ป.6 มักสับสนและโดนหลอกบ่อยที่สุดในห้องสอบ รร.ดัง
          </p>
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-1.5 bg-black/20 p-1.5 rounded-2xl backdrop-blur-md self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setSelectedSubject('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedSubject === 'all'
                ? 'bg-white text-orange-700 shadow-xs'
                : 'text-white/80 hover:text-white'
            }`}
          >
            ทั้งหมด
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubject('math')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              selectedSubject === 'math'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <Calculator className="w-3 h-3" />
            คณิต
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubject('science')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              selectedSubject === 'science'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <Atom className="w-3 h-3" />
            วิทย์
          </button>
          <button
            type="button"
            onClick={() => setSelectedSubject('english')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              selectedSubject === 'english'
                ? 'bg-white text-purple-700 shadow-xs'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <Languages className="w-3 h-3" />
            อังกฤษ
          </button>
        </div>
      </div>

      {/* Flashcards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCards.map((card) => {
          const isFlipped = !!flippedCards[card.id];

          return (
            <div
              key={card.id}
              onClick={() => toggleFlip(card.id)}
              className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all p-5 cursor-pointer flex flex-col justify-between min-h-[300px] hover:border-amber-400 relative overflow-hidden"
            >
              {/* Top Meta */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-lg text-[11px] font-bold ${
                      card.subject === 'math'
                        ? 'bg-blue-100 text-blue-700'
                        : card.subject === 'science'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {card.subjectLabel} • {card.topic}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1 group-hover:text-amber-600">
                    <RotateCw className="w-3 h-3" />
                    คลิกเพื่อพลิก
                  </span>
                </div>

                {!isFlipped ? (
                  /* Front Side */
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                        {card.trapTitle}
                      </h3>
                    </div>

                    <div className="bg-rose-50 border border-rose-100 rounded-2xl p-3 text-xs text-rose-900">
                      <strong className="block mb-1 text-rose-700">❌ จุดที่มักเข้าใจผิด/ทำผิด:</strong>
                      <p>{card.commonMistake}</p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-xs text-slate-700">
                      <strong className="block mb-1 text-slate-900">📝 ตัวอย่างโจทย์ลวง:</strong>
                      <MathText text={card.exampleQuestion} />
                    </div>
                  </div>
                ) : (
                  /* Back Side (The Solution & Concept) */
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <h3 className="font-extrabold text-emerald-900 text-base leading-snug">
                        หลักคิดที่ถูกต้อง & เทคนิคแก้เกม
                      </h3>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 text-xs text-emerald-950">
                      <strong className="block mb-1 text-emerald-800">✅ Concept ที่ถูกต้อง:</strong>
                      <MathText text={card.correctConcept} />
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-xs text-amber-950">
                      <strong className="block mb-1 text-amber-800">⚡ สูตรลัดคิดเร็ว:</strong>
                      <MathText text={card.fastTrick} />
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3 text-xs text-blue-950">
                      <strong className="block mb-1 text-blue-800">🎯 คำตอบตัวอย่าง:</strong>
                      <MathText text={card.exampleAnswer} />
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  {isFlipped ? 'แตะเพื่อดูโจทย์' : 'แตะเพื่อดูเฉลย & สูตรลัด'}
                </span>
                <span className="font-bold text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{isFlipped ? 'Front' : 'Flip'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
