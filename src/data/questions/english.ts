import { Question } from '@/types/question';
import { BENCHAMA_ENGLISH_QUESTIONS } from './benchamaEnglish';

export const ENGLISH_QUESTIONS: Question[] = [
  ...BENCHAMA_ENGLISH_QUESTIONS,
  {
    id: 'eng-gram-001',
    subjectId: 'english',
    topicId: 'eng-grammar',
    topicName: 'Grammar & Structure',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 60,
    tags: ['มศว.', 'เบ็ญจะมะมหาราช', 'Tenses', 'Grammar'],
    source: 'SMA Benchama Maharat Entrance Exam Guide',
    targetSchool: 'benchama',
    content: 'Choose the correct option to complete the sentence:\n"Neither of the boys ________ able to solve the math puzzle yesterday."',
    choices: [
      { id: 'c1', label: 'A', content: 'is', isCorrect: false },
      { id: 'c2', label: 'B', content: 'are', isCorrect: false },
      { id: 'c3', label: 'C', content: 'was', isCorrect: true },
      { id: 'c4', label: 'D', content: 'were', isCorrect: false },
    ],
    solution: {
      summary: 'The correct answer is "was" because "Neither of + plural noun" takes a singular verb in standard formal grammar, and "yesterday" indicates past tense.',
      trickTip: '💡 Rule: "Neither of / Either of / Each of / One of + Plural Noun" -> ALWAYS takes a SINGULAR VERB! + "yesterday" = Past tense (was).',
      commonMistake: '⚠️ Students often see "boys" and incorrectly choose "were". Look at "Neither" as the subject pronoun!',
      steps: [
        {
          stepNumber: 1,
          title: 'Identify Subject-Verb Agreement',
          content: 'The subject phrase "Neither of the boys" has "Neither" as the core indefinite pronoun, which is singular.',
        },
        {
          stepNumber: 2,
          title: 'Check the Time Marker (Tense)',
          content: 'The word "yesterday" requires a past tense verb. The singular past form of verb to be is **was**.',
        },
      ],
    },
  },
  {
    id: 'eng-read-001',
    subjectId: 'english',
    topicId: 'eng-reading',
    topicName: 'Reading Comprehension',
    type: 'multiple_choice',
    difficulty: 'medium',
    points: 2,
    timeEstimateSeconds: 90,
    tags: ['มศว.', 'Reading', 'Inference'],
    source: 'SWU Model English Test',
    targetSchool: 'benchama',
    content: 'Read the short passage and answer the question:\n"Honeybees perform a unique \'waggle dance\' inside their hive. By waggling their bodies in specific angles and rhythms, they communicate the precise direction and distance of newly discovered flower fields to other bees."\n\nWhat is the main purpose of the waggle dance?',
    choices: [
      { id: 'c1', label: 'A', content: 'To protect the hive from enemy insects', isCorrect: false },
      { id: 'c2', label: 'B', content: 'To share navigation information about food locations', isCorrect: true },
      { id: 'c3', label: 'C', content: 'To entertain the queen bee in the hive', isCorrect: false },
      { id: 'c4', label: 'D', content: 'To keep themselves warm during winter', isCorrect: false },
    ],
    solution: {
      summary: 'The waggle dance is used to communicate the direction and distance of flower fields (food sources) to fellow bees.',
      trickTip: '💡 Key phrases in passage: "communicate the precise direction and distance of newly discovered flower fields"',
      steps: [
        {
          stepNumber: 1,
          title: 'Scan for the keyword "waggle dance"',
          content: 'The text directly states: "...they communicate the precise direction and distance of newly discovered flower fields to other bees."',
        },
        {
          stepNumber: 2,
          title: 'Match with the correct option',
          content: 'Flower fields are where bees get nectar/food, hence option B is the most accurate summary.',
        },
      ],
    },
  },
];
