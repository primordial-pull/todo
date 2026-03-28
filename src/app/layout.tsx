import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import { nanumSquare } from './fonts';

export const metadata: Metadata = {
  title: 'Todo List App',
  description:
    'A simple todo list app where you can easily add tasks and toggle them as done or not done.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nanumSquare.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
