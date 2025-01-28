'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import './blogpost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [activeSection, setActiveSection] = useState('');
  const [likes, setLikes] = useState(1); // Initial Likes
  const [views, setViews] = useState(1); // Initial Views

  useEffect(() => {
    // Lade die JSON-Datei und finde den entsprechenden Post
    const loadPostData = async () => {
      const response = await fetch('/data/blogpost.json'); // daten abfragen für public json file
      const posts = await response.json();  // daten abfrage abwarten für public json file
      const selectedPost = posts.find((post) => post.slug === slug);
      setPost(selectedPost || posts[0]); // Standardmäßig ersten Post wählen, falls der slug nicht gefunden wird
    };

    loadPostData();
  }, [slug]);

  useEffect(() => {
    // Erhöhe die Views bei jedem Laden
    setViews((prevViews) => prevViews + 1);
  }, [slug]);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  if (!post) return ;

  return (
    <div className="blog-post">
      <header className="header">
        <h1 className="title">{post.title}</h1>
        <p className="subtitle">{post.subtitle}</p>
        
        <div className="author-info">
          <img 
            src={post.authorImage} 
            alt={post.author} 
            className="author-image" 
          />
          <div>
            <p className="author-name">{post.author}</p>
            <p className="publish-date">{post.date}</p>
          </div>
        </div>

        <div className="post-stats">
          <div className="stat-item">
            <span className="stat-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
              </svg>
            </span>
            <span className="stat-number">{post.readTime}</span>
          </div>

          <div className="stat-item">
            <span className="stat-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </span>
            <span className="stat-number">{views}</span>
          </div>

          <div className="stat-item">
            <span className="stat-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg>
            </span>
            <span className="stat-number">{likes}</span>
            <button onClick={handleLike}>Like</button>
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
                    onClick={() => scrollToSection(section.id)}
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
