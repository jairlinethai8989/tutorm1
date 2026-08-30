import React from 'react';
import { Metadata } from 'next';
import { getMockExams } from '@/lib/data-loader';
import { MockExamHub } from '@/components/mock-exam/MockExamHub';

export const metadata: Metadata = {
  title: 'ชุดข้อสอบจำลอง ม.1 โรงเรียนชั้นนำ | Timed Mock Exam',
  description:
    'ฝึกจับเวลาจริง กระดาษคำตอบดิจิทัล และเกณฑ์ตัดตัวห้องเรียนพิเศษ (Gifted, SMA, EP, สสวท.) จาก 7 โรงเรียนชั้นนำ',
};

export default function MockExamListPage() {
  const exams = getMockExams();

  return <MockExamHub exams={exams} />;
}
