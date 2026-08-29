/**
 * Question Data Validation Script
 * ================================
 * ตรวจสอบความถูกต้องของข้อมูลคำถาม-คำตอบทั้งหมด
 * 
 * รัน: npx tsx src/scripts/validate-questions.ts
 * 
 * กฎการตรวจสอบ 15 ข้อ:
 * 
 * โครงสร้าง (Structural):
 *  1. ทุก question ต้องมี id ที่ไม่ซ้ำกัน
 *  2. ทุก question ต้องมี content ไม่ว่าง
 *  3. multiple_choice ต้องมี choices อย่างน้อย 2 ตัวเลือก
 *  4. ทุกตัวเลือกต้องมี id, label, content ไม่ว่าง
 *  5. short_answer ต้องมี correctAnswer ไม่ว่าง
 *  6. ทุก question ต้องมี solution ที่มี summary และ steps อย่างน้อย 1 step
 * 
 * ความถูกต้อง (Correctness):
 *  7. multiple_choice ต้องมีเพียง 1 ตัวเลือกที่ isCorrect: true
 *  8. ทุกตัวเลือกต้องมี isCorrect กำหนดค่า (boolean)
 * 
 * LaTeX:
 *  9. LaTeX commands ในตัวเลือกต้องอยู่ภายใน $...$ หรือ $$...$$
 * 10. LaTeX braces ต้อง balanced ({ เท่ากับ })
 * 11. ไม่มี $ ที่ไม่มีคู่ (unmatched dollar signs)
 * 
 * Metadata:
 * 12. difficulty ต้องเป็นค่า valid
 * 13. type ต้องเป็นค่า valid
 * 14. points ต้องเป็นจำนวนเต็มบวก
 * 15. timeEstimateSeconds ต้องเป็นจำนวนเต็มบวก
 */

import { Question, Choice, SolutionStep, Solution } from '../types/question';

// ---- Validation types ----
type Severity = 'ERROR' | 'WARNING';

interface ValidationIssue {
  severity: Severity;
  ruleId: number;
  ruleName: string;
  questionId: string;
  sourceFile: string;
  message: string;
  field?: string;
}

// ---- LaTeX detection patterns ----
const LATEX_COMMANDS = [
  'frac', 'dfrac', 'cfrac', 'sqrt', 'binom', 'sum', 'prod', 'int', 'lim',
  'vec', 'hat', 'bar', 'dot', 'ddot', 'overline', 'underline', 'mathbb',
  'mathcal', 'mathrm', 'times', 'div', 'pm', 'mp', 'cdot', 'circ',
  'angle', 'perp', 'parallel', 'pi', 'alpha', 'beta', 'gamma', 'theta',
  'infty', 'leq', 'geq', 'neq', 'approx', 'equiv', 'subset', 'supset',
  'cap', 'cup', 'in', 'notin', 'forall', 'exists', 'rightarrow', 'leftarrow',
  'Rightarrow', 'Leftarrow', 'text',
];

const LATEX_COMMAND_RE = new RegExp(`\\\\(${LATEX_COMMANDS.join('|')})(\\{|\\s|$|\\\\)`);

const VALID_DIFFICULTIES = ['easy', 'medium', 'hard', 'olympiad'];
const VALID_TYPES = ['multiple_choice', 'short_answer', 'long_answer'];

// ---- Validation functions ----

function hasRawLatex(text: string): boolean {
  // Check if text contains LaTeX commands NOT inside $...$ or $$...$$
  // First remove all math-delimited sections
  const withoutBlockMath = text.replace(/\$\$[\s\S]*?\$\$/g, '');
  const withoutInlineMath = withoutBlockMath.replace(/\$[^$]+?\$/g, '');
  // Check remaining text for LaTeX commands
  return LATEX_COMMAND_RE.test(withoutInlineMath);
}

function countUnmatchedDollars(text: string): number {
  // Remove escaped dollar signs
  const clean = text.replace(/\\\$/g, '');
  // Remove $$...$$ pairs
  const withoutBlock = clean.replace(/\$\$[\s\S]*?\$\$/g, '');
  // Remove properly matched inline math $...$
  const withoutInlineMath = withoutBlock.replace(/\$[^$]+\$/g, '');
  // Remove currency patterns like $80, $120 (standalone $ followed by digits, not part of math)
  const withoutCurrency = withoutInlineMath.replace(/\$\d[\d,.]*/g, '');
  // Count remaining $
  const dollars = (withoutCurrency.match(/\$/g) || []).length;
  return dollars;
}

function checkBracesBalance(text: string): boolean {
  let depth = 0;
  for (const ch of text) {
    if (ch === '{') depth++;
    if (ch === '}') depth--;
    if (depth < 0) return false;
  }
  return depth === 0;
}

function validateQuestion(q: Question, sourceFile: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  const addIssue = (severity: Severity, ruleId: number, ruleName: string, message: string, field?: string) => {
    issues.push({ severity, ruleId, ruleName, questionId: q.id || '(no id)', sourceFile, message, field });
  };

  // Rule 2: content not empty
  if (!q.content || q.content.trim() === '') {
    addIssue('ERROR', 2, 'content-required', 'Question content is empty', 'content');
  }

  // Rule 3: multiple_choice needs choices
  if (q.type === 'multiple_choice') {
    if (!q.choices || q.choices.length < 2) {
      addIssue('ERROR', 3, 'choices-minimum', `multiple_choice must have at least 2 choices, found ${q.choices?.length || 0}`, 'choices');
    }
  }

  // Rule 4: choice fields not empty
  if (q.choices) {
    q.choices.forEach((c, i) => {
      if (!c.id) addIssue('ERROR', 4, 'choice-id-required', `Choice[${i}] missing id`, `choices[${i}].id`);
      if (!c.label) addIssue('ERROR', 4, 'choice-label-required', `Choice[${i}] missing label`, `choices[${i}].label`);
      if (!c.content || c.content.trim() === '') {
        addIssue('ERROR', 4, 'choice-content-required', `Choice[${i}] (${c.label || '?'}) has empty content`, `choices[${i}].content`);
      }
    });
  }

  // Rule 5: short_answer needs correctAnswer
  if (q.type === 'short_answer' && (!q.correctAnswer || q.correctAnswer.trim() === '')) {
    addIssue('ERROR', 5, 'correct-answer-required', 'short_answer question missing correctAnswer', 'correctAnswer');
  }

  // Rule 6: solution structure
  if (!q.solution) {
    addIssue('ERROR', 6, 'solution-required', 'Question missing solution', 'solution');
  } else {
    if (!q.solution.summary || q.solution.summary.trim() === '') {
      addIssue('WARNING', 6, 'solution-summary-required', 'Solution missing summary', 'solution.summary');
    }
    if (!q.solution.steps || q.solution.steps.length === 0) {
      addIssue('WARNING', 6, 'solution-steps-required', 'Solution has no steps', 'solution.steps');
    }
  }

  // Rule 7: exactly one isCorrect: true for multiple_choice
  if (q.type === 'multiple_choice' && q.choices) {
    const correctCount = q.choices.filter(c => c.isCorrect === true).length;
    if (correctCount === 0) {
      addIssue('ERROR', 7, 'no-correct-answer', 'No choice has isCorrect: true', 'choices');
    } else if (correctCount > 1) {
      addIssue('ERROR', 7, 'multiple-correct-answers', `${correctCount} choices have isCorrect: true (expected exactly 1)`, 'choices');
    }
  }

  // Rule 8: isCorrect must be explicitly boolean
  if (q.choices) {
    q.choices.forEach((c, i) => {
      if (typeof c.isCorrect !== 'boolean') {
        addIssue('ERROR', 8, 'isCorrect-type', `Choice[${i}] (${c.label}) isCorrect is ${typeof c.isCorrect}, expected boolean`, `choices[${i}].isCorrect`);
      }
    });
  }

  // Rule 9: LaTeX in choices must be wrapped in $...$
  if (q.choices) {
    q.choices.forEach((c, i) => {
      if (c.content && hasRawLatex(c.content)) {
        addIssue('ERROR', 9, 'latex-missing-delimiter', `Choice[${i}] (${c.label}) contains raw LaTeX without \$...\$ delimiter: "${c.content}"`, `choices[${i}].content`);
      }
    });
  }

  // Check question content
  if (q.content && hasRawLatex(q.content)) {
    addIssue('ERROR', 9, 'latex-missing-delimiter', `Question content contains raw LaTeX without \$...\$ delimiter`, 'content');
  }

  // Check solution fields
  if (q.solution) {
    if (q.solution.summary && hasRawLatex(q.solution.summary)) {
      addIssue('ERROR', 9, 'latex-missing-delimiter', `Solution summary contains raw LaTeX without \$...\$ delimiter: "${q.solution.summary}"`, 'solution.summary');
    }
    if (q.solution.trickTip && hasRawLatex(q.solution.trickTip)) {
      addIssue('ERROR', 9, 'latex-missing-delimiter', `Solution trickTip contains raw LaTeX without \$...\$ delimiter: "${q.solution.trickTip}"`, 'solution.trickTip');
    }
    if (q.solution.commonMistake && hasRawLatex(q.solution.commonMistake)) {
      addIssue('ERROR', 9, 'latex-missing-delimiter', `Solution commonMistake contains raw LaTeX without \$...\$ delimiter: "${q.solution.commonMistake}"`, 'solution.commonMistake');
    }
    if (q.solution.steps) {
      q.solution.steps.forEach((step, sIdx) => {
        const stepContent = typeof step === 'string' ? step : step.content;
        if (stepContent && hasRawLatex(stepContent)) {
          addIssue('ERROR', 9, 'latex-missing-delimiter', `Solution step[${sIdx + 1}] contains raw LaTeX without \$...\$ delimiter: "${stepContent}"`, `solution.steps[${sIdx}]`);
        }
      });
    }
  }

  // Check correctAnswer
  if (q.correctAnswer && hasRawLatex(q.correctAnswer)) {
    addIssue('ERROR', 9, 'latex-missing-delimiter', `correctAnswer contains raw LaTeX without \$...\$ delimiter: "${q.correctAnswer}"`, 'correctAnswer');
  }

  // Rule 10: balanced braces in LaTeX
  const allTextFields = [
    q.content,
    ...(q.choices?.map(c => c.content) || []),
    q.solution?.summary,
    q.solution?.trickTip,
    ...(q.solution?.steps?.map(s => typeof s === 'string' ? s : s.content) || []),
  ].filter(Boolean) as string[];

  allTextFields.forEach((text, i) => {
    if (text && !checkBracesBalance(text)) {
      addIssue('WARNING', 10, 'unbalanced-braces', `Unbalanced braces {} in text field`, 'text');
    }
  });

  // Rule 11: unmatched dollar signs
  allTextFields.forEach((text, i) => {
    if (text && countUnmatchedDollars(text) !== 0) {
      // Exclude English questions where dollar is currency ($)
      if (q.subjectId !== 'english') {
        addIssue('WARNING', 11, 'unmatched-dollar', `Unmatched \$ sign in text field`, 'text');
      }
    }
  });

  // Rule 12: valid difficulty
  if (!VALID_DIFFICULTIES.includes(q.difficulty)) {
    addIssue('ERROR', 12, 'invalid-difficulty', `Invalid difficulty: "${q.difficulty}"`, 'difficulty');
  }

  // Rule 13: valid type
  if (!VALID_TYPES.includes(q.type)) {
    addIssue('ERROR', 13, 'invalid-type', `Invalid type: "${q.type}"`, 'type');
  }

  // Rule 14: points must be positive integer
  if (!Number.isInteger(q.points) || q.points <= 0) {
    addIssue('ERROR', 14, 'invalid-points', `Points must be positive integer, got: ${q.points}`, 'points');
  }

  // Rule 15: timeEstimateSeconds must be positive integer
  if (!Number.isInteger(q.timeEstimateSeconds) || q.timeEstimateSeconds <= 0) {
    addIssue('ERROR', 15, 'invalid-time', `timeEstimateSeconds must be positive integer, got: ${q.timeEstimateSeconds}`, 'timeEstimateSeconds');
  }

  return issues;
}

// ---- Main execution ----
async function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║     🔍 Question Data Validation - Tutor M1               ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log('');

  // Dynamic imports of all question data files
  const questionSources: { name: string; getQuestions: () => Promise<Question[]> }[] = [
    {
      name: 'benchamaMath.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/benchamaMath');
        return m.BENCHAMA_MATH_QUESTIONS;
      },
    },
    {
      name: 'benchamaScience.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/benchamaScience');
        return m.BENCHAMA_SCIENCE_QUESTIONS;
      },
    },
    {
      name: 'benchamaEnglish.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/benchamaEnglish');
        return m.BENCHAMA_ENGLISH_QUESTIONS;
      },
    },
    {
      name: 'benchamaThai.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/benchamaThai');
        return m.BENCHAMA_THAI_QUESTIONS;
      },
    },
    {
      name: 'benchamaSocial.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/benchamaSocial');
        return m.BENCHAMA_SOCIAL_QUESTIONS;
      },
    },
    {
      name: 'chulabhornMath.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/chulabhornMath');
        return m.CHULABHORN_MATH_QUESTIONS;
      },
    },
    {
      name: 'samsenMath.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/samsenMath');
        return m.SAMSEN_2565_SPECIAL_MATH_QUESTIONS;
      },
    },
    {
      name: 'suankularbMath.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/suankularbMath');
        return m.SUANKULARB_PRETEST_9_MATH_QUESTIONS;
      },
    },
    {
      name: 'patumwanMath.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/patumwanMath');
        return m.PATUMWAN_MATH_QUESTIONS;
      },
    },
    {
      name: 'chulabhornScience.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/chulabhornScience');
        // CHULABHORN_SCIENCE_QUESTIONS already spreads SET1 and 2562 arrays
        return m.CHULABHORN_SCIENCE_QUESTIONS || [];
      },
    },
    {
      name: 'chulabhornThai.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/chulabhornThai');
        return m.CHULABHORN_THAI_QUESTIONS;
      },
    },
    {
      name: 'satriwitScience.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/satriwitScience');
        return m.SATRIWIT_SCIENCE_QUESTIONS;
      },
    },
    {
      name: 'suankularbScience.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/suankularbScience');
        return m.SUANKULARB_SCIENCE_QUESTIONS;
      },
    },
    {
      name: 'suksanariScience.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/suksanariScience');
        return m.SUKSANARI_SCIENCE_QUESTIONS;
      },
    },
    {
      name: 'rittiyaScience.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/rittiyaScience');
        return m.RITTIYA_SCIENCE_QUESTIONS;
      },
    },
    {
      name: 'sarawittayaScience.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/sarawittayaScience');
        return m.SARAWITTAYA_SCIENCE_QUESTIONS;
      },
    },
    {
      name: 'samsenScience.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/samsenScience');
        return m.SAMSEN_SCIENCE_QUESTIONS;
      },
    },
    {
      name: 'samsenEnglish.ts',
      getQuestions: async () => {
        const m = await import('../data/questions/samsenEnglish');
        return m.SAMSEN_ENGLISH_QUESTIONS;
      },
    },
  ];

  const allIssues: ValidationIssue[] = [];
  const allIds = new Set<string>();
  let totalQuestions = 0;
  let totalFiles = 0;

  for (const source of questionSources) {
    try {
      const questions = await source.getQuestions();
      totalFiles++;
      totalQuestions += questions.length;

      console.log(`📄 ${source.name}: ${questions.length} questions`);

      for (const q of questions) {
        // Rule 1: unique ID check
        if (!q.id) {
          allIssues.push({
            severity: 'ERROR',
            ruleId: 1,
            ruleName: 'id-required',
            questionId: '(no id)',
            sourceFile: source.name,
            message: 'Question missing id',
          });
        } else if (allIds.has(q.id)) {
          allIssues.push({
            severity: 'ERROR',
            ruleId: 1,
            ruleName: 'id-unique',
            questionId: q.id,
            sourceFile: source.name,
            message: `Duplicate question ID: "${q.id}"`,
          });
        } else {
          allIds.add(q.id);
        }

        // Run all other validations
        const issues = validateQuestion(q, source.name);
        allIssues.push(...issues);
      }
    } catch (err) {
      console.error(`  ❌ Failed to load ${source.name}: ${err}`);
    }
  }

  // ---- Print results ----
  console.log('');
  console.log('─'.repeat(60));
  console.log('');

  const errors = allIssues.filter(i => i.severity === 'ERROR');
  const warnings = allIssues.filter(i => i.severity === 'WARNING');

  if (errors.length > 0) {
    console.log(`❌ ERRORS (${errors.length}):`);
    console.log('');
    for (const issue of errors) {
      console.log(`  [Rule ${issue.ruleId}] ${issue.sourceFile} > ${issue.questionId}`);
      console.log(`    ${issue.message}`);
      if (issue.field) console.log(`    Field: ${issue.field}`);
      console.log('');
    }
  }

  if (warnings.length > 0) {
    console.log(`⚠️  WARNINGS (${warnings.length}):`);
    console.log('');
    for (const issue of warnings) {
      console.log(`  [Rule ${issue.ruleId}] ${issue.sourceFile} > ${issue.questionId}`);
      console.log(`    ${issue.message}`);
      if (issue.field) console.log(`    Field: ${issue.field}`);
      console.log('');
    }
  }

  // ---- Summary ----
  console.log('═'.repeat(60));
  console.log('📊 VALIDATION SUMMARY');
  console.log('═'.repeat(60));
  console.log(`  Files scanned:    ${totalFiles}`);
  console.log(`  Questions found:  ${totalQuestions}`);
  console.log(`  Unique IDs:       ${allIds.size}`);
  console.log(`  Errors:           ${errors.length}`);
  console.log(`  Warnings:         ${warnings.length}`);
  console.log('');

  // Rule coverage report
  const rulesCovered = new Set(allIssues.map(i => i.ruleId));
  console.log('📋 Rules checked: 1-15');
  const rulesTriggered = Array.from(rulesCovered).sort((a, b) => a - b);
  if (rulesTriggered.length > 0) {
    console.log(`  Rules triggered: ${rulesTriggered.join(', ')}`);
  } else {
    console.log('  No rules triggered (all data is clean!)');
  }
  console.log('');

  if (errors.length > 0) {
    console.log('❌ VALIDATION FAILED');
    process.exit(1);
  } else if (warnings.length > 0) {
    console.log('⚠️  VALIDATION PASSED WITH WARNINGS');
    process.exit(0);
  } else {
    console.log('✅ ALL VALIDATIONS PASSED');
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
