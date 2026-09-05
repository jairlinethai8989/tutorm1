import type { Metadata } from 'next';
import Script from 'next/script';
import { Prompt, Sarabun } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileNav } from '@/components/layout/MobileNav';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import { APP_CONFIG } from '@/lib/constants/app';
import { SupportCoffeeWidget } from '@/components/shared/SupportCoffeeWidget';
import { AnalyticsProvider } from '@/components/shared/AnalyticsProvider';

const prompt = Prompt({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['thai', 'latin'],
  variable: '--font-prompt',
  display: 'swap',
  preload: false,
});

const sarabun = Sarabun({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-sarabun',
  display: 'swap',
  preload: false,
});

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

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${prompt.variable} ${sarabun.variable}`}>
      <head>
        {/* GA4 Script Bootstrap with send_page_view disabled (Manual single-owner tracking) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  send_page_view: false
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-16 md:pb-0 selection:bg-blue-500 selection:text-white">
        {/* 1. Mount Vercel Analytics SDK first so it is ready before telemetry dispatchers */}
        <VercelAnalytics />
        {/* 2. Mount Tutor M.1 Analytics Provider second */}
        <AnalyticsProvider />
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
