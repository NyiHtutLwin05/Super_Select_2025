import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Super Select Glass & Aluminum',
  description: 'Premium glass and aluminum solutions for your needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}