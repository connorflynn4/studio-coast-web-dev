import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Studio Coast / AI-Powered Web Applications',
  description: 'We build intelligent web applications that learn, adapt, and deliver exceptional user experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden" data-theme="dark">
        {children}
      </body>
    </html>
  );
}

