import { DarkModeProvider } from './contexts/DarkModeContext';
import ClientLayout from './components/ClientLayout/ClientLayout';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './fonts/fonts.css';
import './styles/globals.css';

const SITE_URL = 'https://japhets-realm.vercel.app';

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || SITE_URL
  ),
  title: {
    default: 'Japhet Adofo-Adjei | Software Developer Portfolio',
    template: '%s | Japhet Adofo-Adjei',
  },
  description:
    'Japhet Adofo-Adjei is a Software Developer specializing in React, Node.js, and JavaScript. Explore projects in modern web development, frontend, and full-stack applications.',
  keywords: [
    'Japhet Adofo-Adjei',
    'Software Developer',
    'portfolio',
    'React',
    'Node.js',
    'JavaScript',
    'web development',
    'frontend',
    'Next.js',
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
    url: SITE_URL,
    siteName: 'Japhet Adofo-Adjei | Software Developer',
    title: 'Japhet Adofo-Adjei | Software Developer',
    description:
      'Japhet Adofo-Adjei is a Software Developer specializing in React, Node.js, and JavaScript. Explore projects and experience in modern web development.',
    images: [
      {
        // Use 1200×630; compress to <200 KB (e.g. WebP) for faster social/crawler loads — see docs/LCP-TTFB-REPORT.md
        url: `${SITE_URL}/assets/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Japhet Adofo-Adjei | Software Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japhet Adofo-Adjei | Software Developer',
    description:
      'Japhet Adofo-Adjei is a Software Developer specializing in React, Node.js, and JavaScript.',
    images: [`${SITE_URL}/assets/images/og-image.png`],
    creator: '@Adjei_Japhet',
  },
  alternates: {
    canonical: SITE_URL,
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
    <html lang="en" className="dark-mode" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="6XDYGJ_Osm2AW2lXr_mFIVYJKCz0YUSzDlLwCbtoN4A" />
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
