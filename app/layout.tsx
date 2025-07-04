import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: '75 Hard HQ',
  description: 'Luxury spa-calming personal wellness HQ',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-eucalyptus-light text-gray-800">
      <body className="font-sans">{children}</body>
    </html>
  );
}
