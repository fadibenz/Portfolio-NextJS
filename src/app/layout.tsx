import type { Metadata } from 'next';
import Navigation  from '@/components/layout/Navigation/Navigation';
import { Footer } from '../components/layout/Footer/Footer';
import './globals.css';



export const metadata: Metadata = {
  title: 'Fadi Benzaima - Frontend Developer',
  description: 'Frontend developer specializing in React and Next.js',
  openGraph: {
    title: 'Fadi Benzaima - Frontend Developer',
    description: 'Frontend developer specializing in React and Next.js',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <div className="container">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}