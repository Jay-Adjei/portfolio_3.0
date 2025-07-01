// app/blog/[slug]/page.js (Server Component)
import BlogPost from '../../components/BlogPost/BlogPost';

// Statische Generierung
export async function generateStaticParams() {
  return [
    { slug: 'clean-code-nextjs-react-css' },
    { slug: 'ui-ux-design-trends-2025' },
    { slug: 'best-website-designs' },
    { slug: 'mastering-tailwind-css' },
    { slug: 'nextjs-performance-optimization' },
    { slug: 'dark-mode-ui-design' },
    // Weitere slugs...
  ];
}

export default async function PostPage({ params }) {
  const { slug } = params;
  return <BlogPost slug={slug} />;
}
