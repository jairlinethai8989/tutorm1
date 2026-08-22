import type { Metadata } from 'next';
import { Prompt, Sarabun } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileNav } from '@/components/layout/MobileNav';

const prompt = Prompt({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['thai', 'latin'],
  variable: '--font-prompt',
  display: 'swap',
});

const sarabun = Sarabun({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-sarabun',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ระบบติวสอบเข้า ม.1 — แนว มศว. (เบ็ญจะมะมหาราช & จุฬาภรณ์มุกดาหาร)',
  description: 'ระบบติวและคลังข้อสอบออนไลน์สอบเข้า ม.1 โรงเรียนชั้นนำ ทั้งปรนัยและอัตนัย พร้อมเฉลยละเอียดแบบ Step-by-Step และระบบจำลองสอบเสมือนจริง',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${prompt.variable} ${sarabun.variable}`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-16 md:pb-0 selection:bg-blue-500 selection:text-white">
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
