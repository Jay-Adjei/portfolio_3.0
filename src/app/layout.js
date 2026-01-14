import { DarkModeProvider } from './contexts/DarkModeContext';
import ClientLayout from './components/ClientLayout/ClientLayout';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './fonts/fonts.css';
import './styles/globals.css';

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: {
    default: "Japhet's Portfolio",
    template: "%s | Japhet's Portfolio",
  },
  description:
    'Professional portfolio showcasing modern development skills, web design, and coding projects by Japhet Adofo-Adjei',
  keywords: [
    'portfolio',
    'development',
    'web design',
    'coding',
    'frontend',
    'react',
    'next.js',
    'javascript',
  ],
  authors: [{ name: 'Japhet Adofo-Adjei' }],
  creator: 'Japhet Adofo-Adjei',
  publisher: 'Japhet Adofo-Adjei',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: "Japhet's Portfolio",
    title: "Japhet's Portfolio - Modern Web Development & Design",
    description:
      'Professional portfolio showcasing modern development skills, web design, and coding projects. Explore my work in React, Next.js, and modern web technologies.',
    images: [
      {
        url: '/assets/images/og-image.png', // You'll need to create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Japhet's Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Japhet's Portfolio - Modern Web Development & Design",
    description:
      'Professional portfolio showcasing modern development skills, web design, and coding projects.',
    images: ['/assets/images/og-image.png'],
    creator: '@Adjei_Japhet', // Replace with your Twitter handle if you have one
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    // Add your verification codes if you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <DarkModeProvider>
          <ErrorBoundary>
            {/* Preloader is handled per-page (Home). Do not enable globally. */}
            <ClientLayout enablePreloader={false}>{children}</ClientLayout>
          </ErrorBoundary>
        </DarkModeProvider>
        <Footer />
      </body>
    </html>
  );
}
