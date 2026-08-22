import { Question } from '@/types/question';
import { UserAnswer, ExamAttempt } from '@/types/exam';

// Convert Thai numerals to Arabic numerals
export const convertThaiToArabicNumerals = (input: string): string => {
  const thaiNumerals = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
  let result = input;
  thaiNumerals.forEach((num, index) => {
    result = result.replaceAll(num, index.toString());
  });
  return result;
};

// Normalize text/number answers for fair checking
export const normalizeAnswer = (input: string): string => {
  if (!input) return '';
  let cleaned = input.trim().toLowerCase();
  cleaned = convertThaiToArabicNumerals(cleaned);

  // Remove common units and punctuation that students might write
  const unitPatterns = [
    /ตารางเซนติเมตร/g,
    /ตร\.?ซม\.?/g,
    /เซนติเมตร/g,
    /ซม\.?/g,
    /เมตร/g,
    /กิโลกรัม/g,
    /กก\.?/g,
    /กรัม/g,
    /ลิตร/g,
    /มิลลิลิตร/g,
    /มล\.?/g,
    /ลูกบาศก์เซนติเมตร/g,
    /ลบ\.?ซม\.?/g,
    /บาท/g,
    /องศา/g,
    /ชั่วโมง/g,
    /นาที/g,
    /วินาที/g,
    /คน/g,
    /ตัว/g,
    /ชิ้น/g,
    /แห่ง/g,
    /เท่า/g,
    /percent/g,
    /%/g,
    /,/g,
    /\s+/g,
  ];

  unitPatterns.forEach((pattern) => {
    cleaned = cleaned.replace(pattern, '');
  });

  return cleaned.trim();
};

export const checkShortAnswer = (
  userAnswerText: string,
  correctAnswer: string,
  acceptableAnswers?: string[]
): boolean => {
  const normUser = normalizeAnswer(userAnswerText);
  const normCorrect = normalizeAnswer(correctAnswer);

  if (normUser === normCorrect) return true;

  // Check float equality if both are valid numbers
  const userNum = parseFloat(normUser);
  const correctNum = parseFloat(normCorrect);
  if (!isNaN(userNum) && !isNaN(correctNum)) {
    if (Math.abs(userNum - correctNum) < 0.001) return true;
  }

  // Check acceptable alternatives if provided
  if (acceptableAnswers && acceptableAnswers.length > 0) {
    return acceptableAnswers.some((alt) => {
      const normAlt = normalizeAnswer(alt);
      if (normUser === normAlt) return true;
      const altNum = parseFloat(normAlt);
      return !isNaN(userNum) && !isNaN(altNum) && Math.abs(userNum - altNum) < 0.001;
    });
  }

  return false;
};

export const evaluateAnswer = (
  question: Question,
  userAns?: { selectedChoiceId?: string; textAnswer?: string; timeSpentSeconds?: number }
): UserAnswer => {
  const timeSpent = userAns?.timeSpentSeconds || 0;
  const maxScore = question.points || 1;

  if (!userAns) {
    return {
      questionId: question.id,
      questionType: question.type,
      isCorrect: false,
      scoreAwarded: 0,
      maxScore,
      timeSpentSeconds: 0,
    };
  }

  if (question.type === 'multiple_choice') {
    const selectedChoice = question.choices?.find((c) => c.id === userAns.selectedChoiceId);
    const isCorrect = selectedChoice ? selectedChoice.isCorrect : false;
    return {
      questionId: question.id,
      questionType: 'multiple_choice',
      selectedChoiceId: userAns.selectedChoiceId,
      isCorrect,
      scoreAwarded: isCorrect ? maxScore : 0,
      maxScore,
      timeSpentSeconds: timeSpent,
    };
  }

  if (question.type === 'short_answer') {
    const isCorrect = checkShortAnswer(
      userAns.textAnswer || '',
      question.correctAnswer || '',
      question.acceptableAnswers
    );
    return {
      questionId: question.id,
      questionType: 'short_answer',
      textAnswer: userAns.textAnswer,
      isCorrect,
      scoreAwarded: isCorrect ? maxScore : 0,
      maxScore,
      timeSpentSeconds: timeSpent,
    };
  }

  if (question.type === 'long_answer') {
    // For long answer in practice mode: Check key keywords or assign full score upon self-review
    const text = userAns.textAnswer?.trim() || '';
    const hasSubstantialText = text.length >= 10;
    return {
      questionId: question.id,
      questionType: 'long_answer',
      textAnswer: text,
      isCorrect: hasSubstantialText,
      scoreAwarded: hasSubstantialText ? maxScore : 0,
      maxScore,
      timeSpentSeconds: timeSpent,
    };
  }

  return {
    questionId: question.id,
    questionType: question.type,
    isCorrect: false,
    scoreAwarded: 0,
    maxScore,
    timeSpentSeconds: timeSpent,
  };
};

export const calculateAttemptSummary = (
  examId: string,
  examTitle: string,
  subjectId: string,
  mode: 'practice' | 'mock_exam',
  questions: Question[],
  rawAnswers: Record<string, { selectedChoiceId?: string; textAnswer?: string; timeSpentSeconds?: number; markedForReview?: boolean }>,
  timeLimitSeconds: number,
  timeSpentSeconds: number,
  startedAt: string
): ExamAttempt => {
  let totalScore = 0;
  let maxPossibleScore = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  const answers: Record<string, UserAnswer> = {};
  const topicBreakdown: Record<string, { total: number; correct: number; score: number; maxScore: number }> = {};

  questions.forEach((q) => {
    const raw = rawAnswers[q.id];
    const evaluated = evaluateAnswer(q, raw);
    if (raw?.markedForReview) evaluated.markedForReview = true;

    answers[q.id] = evaluated;
    maxPossibleScore += evaluated.maxScore;
    totalScore += evaluated.scoreAwarded || 0;

    const hasAnswered =
      (q.type === 'multiple_choice' && !!raw?.selectedChoiceId) ||
      (q.type !== 'multiple_choice' && !!raw?.textAnswer && raw.textAnswer.trim() !== '');

    if (!hasAnswered) {
      unansweredCount++;
    } else if (evaluated.isCorrect) {
      correctCount++;
    } else {
      wrongCount++;
    }

    // Topic breakdown
    const topic = q.topicName || 'ทั่วไป';
    if (!topicBreakdown[topic]) {
      topicBreakdown[topic] = { total: 0, correct: 0, score: 0, maxScore: 0 };
    }
    topicBreakdown[topic].total += 1;
    topicBreakdown[topic].maxScore += evaluated.maxScore;
    if (evaluated.isCorrect) {
      topicBreakdown[topic].correct += 1;
      topicBreakdown[topic].score += evaluated.scoreAwarded || 0;
    }
  });

  const scorePercentage = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;

  return {
    id: `attempt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    examId,
    examTitle,
    subjectId,
    mode,
    startedAt,
    completedAt: new Date().toISOString(),
    totalQuestions: questions.length,
    correctCount,
    wrongCount,
    unansweredCount,
    totalScore,
    maxPossibleScore,
    scorePercentage,
    timeSpentSeconds,
    timeLimitSeconds,
    answers,
    topicBreakdown,
  };
};
