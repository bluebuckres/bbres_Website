import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Cinzel } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600'],
  variable: '--font-cormorant',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: 'BlueBuck Research - Quantitative Algo Trading Firm',
  description: 'BlueBuck Research is a leading quantitative algorithmic trading firm specializing in systematic trading strategies and advanced market analysis.',
  keywords: 'algorithmic trading, quantitative trading, systematic trading, financial technology, investment management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} ${cinzel.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}