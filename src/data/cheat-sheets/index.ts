import { SubjectCheatSheetData, FormulaItem, SubjectCategory } from '@/types/cheatSheet';
import { MATH_CHEAT_SHEET } from './mathCheatSheet';
import { SCIENCE_CHEAT_SHEET } from './scienceCheatSheet';
import { ENGLISH_CHEAT_SHEET } from './englishCheatSheet';
import { THAI_CHEAT_SHEET } from './thaiCheatSheet';
import { SOCIAL_CHEAT_SHEET } from './socialCheatSheet';

export const ALL_CHEAT_SHEETS: SubjectCheatSheetData[] = [
  MATH_CHEAT_SHEET,
  SCIENCE_CHEAT_SHEET,
  ENGLISH_CHEAT_SHEET,
  THAI_CHEAT_SHEET,
  SOCIAL_CHEAT_SHEET,
];

export const getCheatSheetBySubject = (subjectId: SubjectCategory): SubjectCheatSheetData | undefined => {
  return ALL_CHEAT_SHEETS.find((cs) => cs.subjectId === subjectId);
};

export const getAllFormulaItems = (): FormulaItem[] => {
  const items: FormulaItem[] = [];
  ALL_CHEAT_SHEETS.forEach((cs) => {
    cs.sections.forEach((sec) => {
      items.push(...sec.items);
    });
  });
  return items;
};
