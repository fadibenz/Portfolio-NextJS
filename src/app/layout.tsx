import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google'; // Import the fonts
import Navigation  from '@/components/layout/Navigation/Navigation';
import { Footer } from '../components/layout/Footer/Footer';
import './globals.css';

// Load the fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional: Define a CSS variable
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk', // Optional: Define a CSS variable
});

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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-secondary-cream">
        <div className="container">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}