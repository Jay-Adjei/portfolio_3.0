'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import BlogGrid from '../BlogGrid/BlogGrid';
import './blogpost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [activeSection, setActiveSection] = useState('');
  const [likes, setLikes] = useState(1);
  const [views, setViews] = useState(1);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Lade Aktuelle Blog-Posts aus blogpost.json
  useEffect(() => {
    const loadPostData = async () => {
      const response = await fetch('/data/blogpost.json');
      const posts = await response.json();
      const selectedPost = posts.find((post) => post.slug === slug);
      setPost(selectedPost || posts[0]);
    };

    loadPostData();
  }, [slug]);

  // Lade "You might also like"-Posts aus bloggrid.json
  useEffect(() => {
    const loadRelatedPosts = async () => {
      try {
        const response = await fetch('/data/bloggrid.json');
        const allPosts = await response.json();
  
        // Sicherst3dellen, dass `post` existiert, bevor darauf zugegriffen wird
        if (!post || !post.tags) return;
  
        const filteredPosts = allPosts.filter((p) => {
          if (p.slug === slug) return false;
          return p.tags.some((tag) => post.tags.includes(tag));
        });
  
        setRelatedPosts(filteredPosts);
      } catch (error) {
        console.error('Error loading related posts:', error);
      }
    };
  
    if (post) {
      loadRelatedPosts();
    }
  }, [post, slug]);
  

  // Funktion zum Scrollen in bestimmte Bereiche für Table of Contents
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Table of Contents Scroll useEffect
  useEffect(() => {
    const handleScroll = () => {
      const sections = post?.sections || [];
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  if (!post) return null;

  {/* Blog Post Design */}
  return (
    <div className="blog-post">
      <header className="header">
        <h1 className="title">{post.title}</h1>
        <div className="author-info">
          <img src={post.authorImage} alt={post.author} className="author-image" />
          <div>
            <p className="author-name">{post.author}</p>
            <p className="publish-date">{post.date}</p>
          </div>
        </div>

        <div className="post-stats">
          <div className="stat-item">
            <span className="stat-label">Read Time</span>
            <span className="stat-number">{post.readTime}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Views</span>
            <span className="stat-number">{views}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Likes</span>
            <span className="stat-number">{likes}</span>
            <button>Like</button>
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="content">
          {post.content.map((section) => (
            <section
              key={section.sectionId}
              id={section.sectionId}
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          ))}
        </div>

      {/* Table of Contents */}
        <aside className="table-of-contents">
          <nav>
            <ul>
              {post.sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      scrollToSection(section.id);
                      setActiveSection(section.id);
                    }}
                    className={activeSection === section.id ? 'active' : ''}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      {/* You might also like Section */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <h2>You might also like</h2>
          <div className="related-posts-grid">
          {relatedPosts.slice(0, 3).map((related) => (
              <article key={related.id} className="post-card">
                <Link href={`/blog/${related.slug}`} className="post-card-link">
                  <div className="post-card-image-container">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="post-card-image"
                    />
                  </div>
                  <div className="post-card-content">
                    <div className="post-card-meta">
                      <span className="post-card-date">{related.date}</span>
                      <span className="post-card-readtime">
                        {related.readTime} read
                      </span>
                    </div>
                    <h2 className="post-card-title">{related.title}</h2>
                    <p className="post-card-excerpt">{related.excerpt}</p>
                    <div className="post-card-footer">
                      <div className="post-card-author">
                      <img
                          src={related.authorImage ? related.authorImage : '/assets/img/blog/author.webp'}
                          alt={related.author || 'Author'}
                          className="post-card-author-image"
                        />
                        <div>
                          <p className="post-card-author-name">{related.author}</p>
                        </div>
                      </div>
                      <div className="post-card-stats">
                        <div className="post-card-stat">
                          <span>{related.views}</span>
                        </div>
                        <div className="post-card-stat">
                          <span>{related.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>





      )}
    </div>
  );
};

export default BlogPost;
