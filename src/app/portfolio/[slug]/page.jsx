// app/portfolio/[slug]/page.js (Server Component)
import PortfolioPost from '../../components/PortfolioPost/PortfolioPost';

// Statische Generierung
export async function generateStaticParams() {
  return [
    { slug: 'Projekt1' },
    { slug: 'Projekt2' },
    { slug: 'Projekt3' },
    // Weitere slugs...
  ];
}

export default function PostPage({ params }) {
  const { slug } = params;
  return <PortfolioPost slug={slug} />;
}