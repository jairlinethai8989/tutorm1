import React from 'react';
import { MistakeBookView } from '@/components/mistake-book/MistakeBookView';

export const metadata = {
  title: 'สมุดบันทึกจุดอ่อน & ข้อสอบติดดาว (Mistake Book) | Tutor M.1',
  description: 'รวบรวมข้อสอบที่เคยทำผิด ข้อที่ติดดาว และระบบซ้อมสอบซ่อมจุดอ่อนสำหรับเตรียมสอบเข้า ม.1',
};

export default function MistakeBookPage() {
  return <MistakeBookView />;
}
