// components/BlogPost.js
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import './blogpost.css';

const posts = {
  'slug1': {
    title: "Blog Title 1",
    subtitle: "My Progress of Learning Coding",
    author: "Gylan Salih",
    date: "January 26, 2025",
    readTime: "5 min",
    views: "2.4k",
    likes: "128",
    authorImage: "/assets/img/blog/author.jpg",
    sections: [
      { id: 'testing', title: 'Testing' },
      { id: 'css-tips1', title: 'CSS Tips 1' },
      { id: 'css-tips2', title: 'CSS Tips 2' },
      // Add more sections as needed
    ],
    content: (
      <div className="content">
        <section id="testing">
          <h2>Testing</h2>
          <p>CSS is a powerful tool that can make your websites truly stand out...</p>
          <ul className="list-technical">
            <li className="list-item-technical">Use <code>flexbox</code> or <code>grid</code>...</li>
          </ul>
        </section>

        <section id="css-tips1">
          <h2>CSS Tips</h2>
          <p>CSS is a powerful tool that can make your websites truly stand out...</p>
          <ul className="list-technical">
            <li className="list-item-technical">Use <code>flexbox</code> or <code>grid</code>...</li>
          </ul>
        </section>

        {/* Add more sections as needed */}
      </div>
    )
  },
  'My-Progress-of-Learning-Coding': {
    title: "Blog Title 2",
    subtitle: "My Progress of Learning Coding",
    author: "Gylan Salih",
    date: "January 26, 2025",
    readTime: "5 min",
    views: "2.4k",
    likes: "128",
    authorImage: "/assets/img/blog/author.jpg",
    sections: [
      { id: 'testing', title: 'Testing' },
      { id: 'css-tips1', title: 'CSS Tips 1' },
      { id: 'css-tips2', title: 'CSS Tips 2' },
      // Add more sections as needed
    ],
    content: (
      <div className="content">
        <section id="testing">
          <h2>Testing</h2>
          <p>CSS is a powerful tool that can make your websites truly stand out...</p>
          <ul className="list-technical">
            <li className="list-item-technical">Use <code>flexbox</code> or <code>grid</code>...</li>
          </ul>
        </section>

        <section id="css-tips1">
          <h2>CSS Tips</h2>
          <p>CSS is a powerful tool that can make your websites truly stand out...</p>
          <ul className="list-technical">
            <li className="list-item-technical">Use <code>flexbox</code> or <code>grid</code>...</li>
          </ul>
        </section>

        {/* Add more sections as needed */}
      </div>
    )
  },
  'Best-CSS-Tricks': {
    title: "Blog Title 3",
    subtitle: "Advanced Styling Techniques",
    author: "Gylan Salih",
    date: "February 1, 2025",
    readTime: "8 min",
    views: "1.8k",
    likes: "95",
    authorImage: "/assets/img/blog/author.jpg",
    sections: [
      { id: 'flexbox', title: 'Flexbox' },
      { id: 'grid', title: 'CSS Grid' },
    ],
    content: (
      <div className="content">
        <section id="flexbox">
          <h2>Flexbox Mastery</h2>
          <p>Flexbox is a powerful layout tool...</p>
        </section>
        <section id="grid">
          <h2>CSS Grid Systems</h2>
          <p>CSS Grid takes layout to the next level...</p>
        </section>
      </div>
    )
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setPost(posts[slug] || posts['the-2025-starting']);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.content section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]); // Re-run when post changes

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  if (!post) return <div>Loading...</div>;

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
            <span className="stat-number">{post.views}</span>
          </div>

          <div className="stat-item">
            <span className="stat-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg>
            </span>
            <span className="stat-number">{post.likes}</span>
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="content">
          {post.content}
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