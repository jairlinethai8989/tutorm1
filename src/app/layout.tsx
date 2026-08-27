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

import { APP_CONFIG } from '@/lib/constants/app';

import { SupportCoffeeWidget } from '@/components/shared/SupportCoffeeWidget';

export const metadata: Metadata = {
  title: APP_CONFIG.titleFull,
  description: APP_CONFIG.description,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.png', type: 'image/png', sizes: '64x64' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '192x192', type: 'image/png' },
    ],
  },
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
        <SupportCoffeeWidget />
      </body>
    </html>
  );
}
