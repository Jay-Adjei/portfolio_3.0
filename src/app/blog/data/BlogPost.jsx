'use client';

import { useEffect, useState } from 'react';
import './blogpost.css';

const BlogPost = () => {
  const [activeSection, setActiveSection] = useState('');

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
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="blog-post">
    <header class="header">
  <h1 className="title">The 2025 Starting</h1>
  <p className="subtitle">
    My Progress of learning Coding
  </p>
  <div className="author-info">
    <img 
      src="/assets/img/blog/author.jpg" 
      alt="Gylan Salihe" 
      className="author-image" 
    />
    <div>
      <p className="author-name">Gylan Salih</p>
      <p className="publish-date">January 26, 2025</p>
    </div>
  </div>
  
  {/* Bar with Read, View and Likes Stats */}
<div className="post-stats">
  <div className="stat-item">
    <span className="stat-label">
      {/* SVG für Read */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
      </svg>
    </span>
    <span className="stat-number">5 min</span>
  </div>
  
  <div className="stat-item">
    <span className="stat-label">
      {/* SVG für Views */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
      </svg>
    </span>
    <span className="stat-number">2.4k</span>
  </div>

  <div className="stat-item">
    <span className="stat-label">
      {/* SVG für Likes */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
      </svg>
    </span>
    <span className="stat-number">128</span>
  </div>
</div>

</header>

      <div className="main-content">
        <div className="content">

        <section id="testing">
          <h2>testing</h2>
          <p>
            CSS is a powerful tool that can make your websites truly stand out. Here are a few quick tips to improve your styling:
          </p>
          <ul class="list-technical">
            <li class="list-item-technical">Use <code>flexbox</code> or <code>grid</code> to create responsive and clean layouts.</li>
            <li class="list-item-technical">Take advantage of <code>variables</code> for consistent colors and font sizes.</li>
            <li class="list-item-technical">Add interactivity with <code>transitions</code> and <code>animations</code>.</li>
          </ul>
        </section>
        

        <section id="css-tips1">
          <h2>CSS Tips</h2>
          <p>
            CSS is a powerful tool that can make your websites truly stand out. Here are a few quick tips to improve your styling:
          </p>
          <ul class="list-technical">
            <li class="list-item-technical">Use <code>flexbox</code> or <code>grid</code> to create responsive and clean layouts.</li>
            <li class="list-item-technical">Take advantage of <code>variables</code> for consistent colors and font sizes.</li>
            <li class="list-item-technical">Add interactivity with <code>transitions</code> and <code>animations</code>.</li>
          </ul>
        </section>
        
        <section id="css-tips2">
        <h2>CSS Tips</h2>
          <p>
            CSS is a powerful tool that can make your websites truly stand out. Here are a few quick tips to improve your styling:
          </p>
        <ul class="list-technical">
          <li class="list-item-technical">list-style-type: disc; // displays bullet points as filled circles.</li>
          <li class="list-item-technical">"circle" displays empty circles as bullet points.</li>
          <li class="list-item-technical">"square" uses square bullet points.</li>
          <li class="list-item-technical">"none" removes all bullet points.</li>
        </ul>
        <img 
            src="/assets/img/blog/meme.jpg" 
            alt="MacBook" 
            className="content-image"
          />
        </section>

        <section id="css-tips3">
          <h2>CSS Tips: Flexbox</h2>
          <p>
            Flexbox is a layout model that helps you design responsive layouts with ease. Here are some key points:
          </p>
          <ul class="list-technical">
            <li class="list-item-technical">Use <code>display: flex;</code> on a container to enable flexbox.</li>
            <li class="list-item-technical">Align items with <code>justify-content</code> and <code>align-items</code>.</li>
            <li class="list-item-technical">Use <code>flex-wrap: wrap;</code> to allow items to wrap within the container.</li>
          </ul>
        </section>

        <section id="css-tips4">
          <h2>CSS Tips: Box Model</h2>
          <p>
            Understanding the CSS box model is crucial for proper layout design. Here are some tips:
          </p>
          <ul class="list-technical">
            <li class="list-item-technical">The box model consists of content, padding, border, and margin.</li>
            <li class="list-item-technical">Use <code>box-sizing: border-box;</code> to include padding and borders in the element's total width and height.</li>
            <li class="list-item-technical">Adjust margins for spacing between elements without affecting the layout.</li>
          </ul>
        </section>

        <section id="css-tips5">
          <h2>CSS Tips: Media Queries</h2>
          <p>
            Media queries are used to create responsive designs that adapt to different screen sizes.
          </p>
          <ul class="list-technical">
            <li class="list-item-technical">Use <code>@media</code> to apply different styles based on screen width or other features.</li>
            <li class="list-item-technical">Example: <code>@media (max-width: 768px) { /* Styles for small screens */ }</code></li>
            <li class="list-item-technical">Combine media queries with flexbox or grid for flexible layouts.</li>
          </ul>
        </section>

        <section id="css-tips6">
          <h2>CSS Tips: Transitions</h2>
          <p>
            CSS transitions allow you to add smooth animations to elements. Here are some tips to get started:
          </p>
          <ul class="list-technical">
            <li class="list-item-technical">Use <code>transition: property duration timing-function;</code> to specify the transition.</li>
            <li class="list-item-technical">Example: <code>transition: all 0.3s ease;</code> for a smooth transition effect.</li>
            <li class="list-item-technical">You can transition properties like color, background-color, and transform.</li>
          </ul>
        </section>

        <section id="css-tips7">
          <h2>CSS Tips: Shadows</h2>
          <p>
            CSS shadows can add depth and focus to your design. Here's how you can use them:
          </p>
          <ul class="list-technical">
            <li class="list-item-technical">Use <code>box-shadow</code> for adding shadows to elements.</li>
            <li class="list-item-technical">Example: <code>box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);</code> for a soft shadow.</li>
            <li class="list-item-technical">Use <code>text-shadow</code> to add shadows to text, e.g., <code>text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);</code></li>
          </ul>
        </section>

        </div>

        <aside className="table-of-contents">
          <nav>
            <ul>
            {[
              ['testing', 'testing'],
              ['css-tips1', 'CSS Tips 1'],
              ['css-tips2', 'CSS Tips 2'],
              ['css-tips3', 'CSS Tips 3'],
              ['css-tips4', 'CSS Tips 4'],
              ['css-tips5', 'CSS Tips 5'],
              ['css-tips6', 'CSS Tips 6'],
              ['css-tips7', 'CSS Tips 7'],
              ['css-tips8', 'CSS Tips 8'],
              ['css-tips9', 'CSS Tips 9']
            ].map(([id, text]) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={activeSection === id ? 'active' : ''}
                >
                  {text}
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
