"use client";

import { useEffect, useState, useRef } from "react";
import './TestimonialsGrid.css';

// Beispiel-Icons für jeden Filter (kannst du natürlich anpassen)
const filterIcons = {
  1: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1"
    >
      <circle cx="8" cy="8" r="7" />
    </svg>
  ),
  2: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path d="M13.95.879a3 3 0 0 0-4.243 0L1.293 9.293a1 1 0 0 0-.274.51l-1 5a1 1 0 0 0 1.177 1.177l5-1a1 1 0 0 0 .511-.273l1.16-1.16a1 1 0 0 0-1.414-1.414l-.946.946-3.232.646.646-3.232 8.2-8.2a1 1 0 0 1 1.414 0l1.172 1.172a1 1 0 0 1 0 1.414l-.55.549a1 1 0 0 0 1.415 1.414l.55-.55a3 3 0 0 0 0-4.241L13.948.879ZM3.25 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm11.474 6.029-1.521-.752-.752-1.521c-.168-.341-.73-.341-.896 0l-.752 1.52-1.521.753a.498.498 0 0 0 0 .896l1.52.752.753 1.52a.5.5 0 0 0 .896 0l.752-1.52 1.52-.752a.498.498 0 0 0 0-.896Z" />
    </svg>
  ),  
  3: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path d="M10 1 L15 19 L5 19 Z" />
    </svg>
  ),
  4: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  ),
  5: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6 L12 12 L16 14" />
    </svg>
  ),
};

export default function Testimonials() {
  const masonryContainer = useRef(null);
  const [activeCategory, setActiveCategory] = useState(1);

  // Masonry Positionierung
  useEffect(() => {
    const handleMasonry = () => {
      if (!masonryContainer.current) return;

      const visibleItems = Array.from(masonryContainer.current.children).filter(
        (el) => !el.classList.contains("testimonial-card--inactive")
      );

      if (visibleItems.length === 0) return;

      const gapSize = parseInt(
        window.getComputedStyle(masonryContainer.current).getPropertyValue("grid-row-gap")
      );

      visibleItems.forEach((el) => {
        if (!(el instanceof HTMLElement)) return;

        el.style.marginTop = "0";

        const elTop = el.offsetTop;
        const elLeft = el.offsetLeft;
        let prev = el.previousElementSibling;

        while (prev) {
          if (
            prev instanceof HTMLElement &&
            !prev.classList.contains("testimonial-card--inactive") &&
            prev.offsetLeft === elLeft
          ) {
            const prevBottom = prev.offsetTop + prev.offsetHeight;
            const marginTop = prevBottom + gapSize - elTop;

            el.style.marginTop = marginTop > 0 ? marginTop + "px" : "0";
            break;
          }
          prev = prev.previousElementSibling;
        }
      });
    };

    handleMasonry();
    window.addEventListener("resize", handleMasonry);
    return () => {
      window.removeEventListener("resize", handleMasonry);
    };
  }, [activeCategory]);

  const categories = [
    "View All",
    "Design & Branding",
    "Websites",
    "Web Applications",
    "E-Commerce",
    "Custom Solutions",
  ];
  

  return (
    <div className="testimonials">
      <div className="testimonials__border">
        {/* Section header */}
        <div className="testimonials__header">
          <h2 className="testimonials__title">Trusted to bring innovation.</h2>
          <p className="testimonials__subtitle">
          I provide smart, tech-focused solutions that enable professionals to foster healthier, 
          happier workspaces from anywhere.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="testimonials__filters">
          <div className="testimonials__filter-group">
            {categories.map((categoryName, idx) => (
              <button
              key={idx + 1}
              className={`testimonials__filter-btn ${
                activeCategory === idx + 1
                  ? "testimonials__filter-btn--active"
                  : ""
              }`}
              onClick={() => setActiveCategory(idx + 1)}
            >
              <span className="testimonials__filter-icon">
                {filterIcons[idx + 1] || filterIcons[1]}
              </span>
              <span>{categoryName}</span>
            </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid" ref={masonryContainer}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${
                activeCategory !== 1 && !testimonial.categories.includes(activeCategory)
                  ? "testimonial-card--inactive"
                  : ""
              }`}
            >
              <div className="testimonial-card__content-wrapper">
                <img
                  src={testimonial.clientImg}
                  className="testimonial-card__client-logo"
                  alt="Client logo"
                />
                <p className="testimonial-card__content">
                  {testimonial.content}
                </p>
                <div className="testimonial-card__author">
                  <img
                    className="testimonial-card__author-image"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                    <span className="testimonial-card__author-name">{testimonial.name}</span>
                  <div className="testimonial-card__author-info">
                    <a href="#0" className="testimonial-card__author-company">
                      {testimonial.company}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    img: "/assets/img/testimonial/testimonial-07.jpg",
    clientImg: "/assets/img/testimonial/client-logo-07.svg",
    name: "Pierre-Gilles L.",
    company: "Binance",
    content:
      "I was blown away by how easy it was to create my content using this tool! Within a few hours, I had a professional-looking platform up and running, and my client could not believe it.",
    categories: [1, 3],
  },
  {
    img: "/assets/img/testimonial/testimonial-02.jpg",
    clientImg: "/assets/img/testimonial/client-logo-02.svg",
    name: "Andrew K.",
    company: "Samsung",
    content:
      "I've tried several content generation tools, but this AI-driven tool is by far the best. It understands my brand's voice and consistently produces content that resonates with my audience!",
    categories: [2],
  },
  {
    img: "/assets/img/testimonial/testimonial-05.jpg",
    clientImg: "/assets/img/testimonial/client-logo-05.svg",
    name: "Miriam E.",
    company: "Cadbury",
    content:
      "The AI-driven content tool has been a lifesaver for my marketing agency. We can now produce high-quality content for multiple clients quickly and efficiently. It's an invaluable asset to our team.",
    categories: [3],
  },
  {
    img: "/assets/img/testimonial/testimonial-01.jpg",
    clientImg: "/assets/img/testimonial/client-logo-01.svg",
    name: "MaKayla P.",
    company: "Disney",
    content:
      "As a content creator, I was always on the lookout for a tool that could help me keep up with the demand. The AI-driven content tool has been a game-changer. It generates high-quality content in a fraction of the time it used to take me.",
    categories: [1, 3, 5],
  },
  {
    img: "/assets/img/testimonial/testimonial-09.jpg",
    clientImg: "/assets/img/testimonial/client-logo-09.svg",
    name: "Mary P.",
    company: "Ray Ban",
    content:
      "I've never been one for coding, so finding an AI tool that doesn't require any technical skills was a dream come true. This tool exceeded my expectations, and I'm proud to show off my new stuff to friends.",
    categories: [3, 5],
  },
  {
    img: "/assets/img/testimonial/testimonial-04.jpg",
    clientImg: "/assets/img/testimonial/client-logo-04.svg",
    name: "Pavel M.",
    company: "Canon",
    content:
      "The quality of the content generated by this AI tool is outstanding. It has taken our content marketing to new heights, allowing us to publish more frequently without compromising on quality. Highly recommended for anyone.",
    categories: [4, 5],
  },
  {
    img: "/assets/img/testimonial/testimonial-06.jpg",
    clientImg: "/assets/img/testimonial/client-logo-06.svg",
    name: "Eloise V.",
    company: "Maffell",
    content:
      "I'm amazed at how well this AI-driven content tool performs. It's incredibly versatile and can generate content for blogs, social media, and even product descriptions effortlessly. It's fantastic!",
    categories: [1, 4],
  },
  {
    img: "/assets/img/testimonial/testimonial-08.jpg",
    clientImg: "/assets/img/testimonial/client-logo-08.svg",
    name: "Danielle K.",
    company: "Forbes Inc.",
    content:
      "I've never been a fan of complicated website AI tools, which is why Open PRO is perfect for me. Its minimalist design and simple functionality make staying organized feel like second nature.",
    categories: [2, 4],
  },
  {
    img: "/assets/img/testimonial/testimonial-03.jpg",
    clientImg: "/assets/img/testimonial/client-logo-03.svg",
    name: "Lucy D.",
    company: "Rio",
    content:
      "Content creation used to be a bottleneck in our workflow, but not anymore. This AI tool is intuitive and produces top-notch content every time. It's like having an extra team member who never sleeps! Definitely recommend.",
    categories: [1, 2],
  },
];
