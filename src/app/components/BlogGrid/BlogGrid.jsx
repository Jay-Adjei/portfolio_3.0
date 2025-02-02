'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './bloggrid.css';

const BlogGrid = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch('/data/bloggrid.json');
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Alle eindeutigen Tags aus den Posts extrahieren
  const uniqueTags = [...new Set(blogPosts.flatMap(post => post.tags || []))];

  // Beiträge filtern anhand von Suchtext und ausgewähltem Tag
  const filteredPosts = blogPosts.filter(post => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)));
    
    const matchesTag = selectedTag
      ? post.tags && post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="blog-grid-container">
      <header className="blog-grid-header">
        <h1 className="blog-grid-title">All Blog Posts</h1>
        <p className="blog-grid-subtitle">Grateful for Your Time: Thanks for Reading!</p>
      </header>

      {/* Suchfeld und Tag-Filter */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search posts by title, excerpt or tags..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        
        <div className="tag-filter">
          {uniqueTags.map(tag => (
            <button 
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`tag-button ${selectedTag.toLowerCase() === tag.toLowerCase() ? 'active' : ''}`}
            >
              {tag}
            </button>
          ))}
          {selectedTag && (
            <button onClick={() => setSelectedTag('')} className="tag-button clear">
              Clear Tags
            </button>
          )}
        </div>
      </div>

      <div className="blog-grid">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="post-card skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                  <div className="skeleton-title"></div>
                  <div className="skeleton-text"></div>
                  <div className="skeleton-footer"></div>
                </div>
              </div>
            ))
          : filteredPosts.map((post) => (
              <article key={post.id} className="post-card">
                <Link href={`/blog/${post.slug}`} className="post-card-link">
                  <div className="post-card-image-container">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="post-card-image"
                    />
                  </div>
                  <div className="post-card-content">
                    <div className="post-card-meta">
                      <span className="post-card-date">{post.date}</span>
                      <span className="post-card-readtime">{post.readTime} read</span>
                    </div>
                    <h2 className="post-card-title">{post.title}</h2>
                    <p className="post-card-excerpt">{post.excerpt}</p>
                    <div className="post-card-footer">
                      <div className="post-card-author">
                        <img
                          src={post.authorImage || '/assets/img/blog/author.webp'}
                          alt={post.author}
                          className="post-card-author-image"
                        />
                        <div>
                          <p className="post-card-author-name">{post.author}</p>
                        </div>
                      </div>
                      <div className="post-card-stats">
                        <div className="post-card-stat">
                          <EyeIcon />
                          <span>{post.views}</span>
                        </div>
                        <div className="post-card-stat">
                          <HeartIcon />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
      </div>
    </div>
  );
};

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
  </svg>
);

export default BlogGrid;
