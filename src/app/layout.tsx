import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Discover Our Products | mettà muse - Premium Fashion & Lifestyle Collection',
  description: 'Explore our curated collection of premium products including bags, accessories, and lifestyle items. Find the perfect items for your style at mettà muse. Shop trending fashion with exclusive deals.',
  keywords: 'products, fashion, lifestyle, mettà muse, shop, bags, accessories, premium products, online shopping, fashion store',
  authors: [{ name: 'mettà muse' }],
  creator: 'mettà muse',
  publisher: 'mettà muse',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://appscrip-task-ankit-malviya.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Discover Our Products | mettà muse - Premium Fashion & Lifestyle Collection',
    description: 'Explore our curated collection of premium products. Find the perfect items for your lifestyle at mettà muse.',
    type: 'website',
    locale: 'en_US',
    siteName: 'mettà muse',
    images: [
      {
        url: '/images/Logo.png',
        width: 1200,
        height: 630,
        alt: 'mettà muse - Premium Fashion & Lifestyle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Our Products | mettà muse',
    description: 'Explore our curated collection of premium products.',
    images: ['/images/Logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
