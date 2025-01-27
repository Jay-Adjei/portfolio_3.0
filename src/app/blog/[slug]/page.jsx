// app/blog/[slug]/page.js (Server Component)
import BlogPost from '../../components/BlogPost/BlogPost';

// Statische Generierung
export async function generateStaticParams() {
  return [
    { slug: 'slug1' },
    { slug: 'My-Progress-of-Learning-Coding' },
    { slug: 'Best-CSS-Tricks' },
    // Weitere slugs...
  ];
}

export default function PostPage({ params }) {
  const { slug } = params;
  return <BlogPost slug={slug} />;
}