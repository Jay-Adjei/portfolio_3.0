'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogGrid from '../BlogGrid/BlogGrid';
import './blogpost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [activeSection, setActiveSection] = useState('');
  const [likes, setLikes] = useState(1);
  const [views, setViews] = useState(1);

  useEffect(() => {
    const loadPostData = async () => {
      const response = await fetch('/data/blogpost.json');
      const posts = await response.json();
      const selectedPost = posts.find((post) => post.slug === slug);
      setPost(selectedPost || posts[0]);

    };

    loadPostData();
  }, [slug]);



  {/* Table of Contents */}
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  {/* Table of Contents Scroll useEffect */}
  useEffect(() => {
    const handleScroll = () => {
      const sections = post?.sections || [];
      const scrollPosition = window.scrollY + 150;
  
      // Find the last section whose offset is less than scroll position
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

  return (
    <div className="blog-post">
      <header className="header">
        <h1 className="title">{post.title}</h1>
        {/* Weitere Post-Inhalte hier */}
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
            <section key={section.sectionId} id={section.sectionId} dangerouslySetInnerHTML={{ __html: section.content }} />
          ))}
        </div>

        <aside className="table-of-contents">
          <nav>
            <ul>
              {post.sections.map((section) => (
                <li key={section.id}>
<button
  onClick={() => {
    scrollToSection(section.id);
    setActiveSection(section.id);  // Ensure this updates the state
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

    </div>
  );
};

export default BlogPost;
