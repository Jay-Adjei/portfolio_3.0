import { DarkModeProvider } from './contexts/DarkModeContext';
import ClientLayout from './components/ClientLayout/ClientLayout';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './fonts/fonts.css';
import './styles/globals.css';

export const metadata = {
  title: 'Portify - Portfolio & Blog',
  description:
    'Professional portfolio and blog showcasing modern development skills',
  keywords: 'portfolio, blog, development, web design, coding',
  authors: [{ name: 'Portify' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Portify - Portfolio & Blog',
    description:
      'Professional portfolio and blog showcasing modern development skills',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <DarkModeProvider>
          <ErrorBoundary>
            {/* Enable the global preloader so it mounts on first load */}
            <ClientLayout enablePreloader={true}>{children}</ClientLayout>
          </ErrorBoundary>
        </DarkModeProvider>
        <Footer />
      </body>
    </html>
  );
}
