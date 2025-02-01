'use client';
import styles from './TestimonialsGrid.css';

export default function TestimonialsGrid() {
  const testimonials = [
    {
      id: 1,
      quote: "As a designer, I appreciate the attention to detail. The design system is intuitive, and everything just works seamlessly.",
      author: "John Doe",
      role: "Full-Stack Developer",
      logo: "/assets/img/testimonials/ImagineArt.png"
    },
    {
      id: 2,
      quote: "As a designer, I appreciate the attention to detail. The design system is intuitive, and everything just works seamlessly.",
      author: "Jane Smith",
      role: "UI/UX Designer",
      logo: "/assets/img/testimonials/ImagineArt.png"
    },
    {
      id: 3,
      quote: "As a designer, I appreciate the attention to detail. The design system is intuitive, and everything just works seamlessly.",
      author: "Michael Brown",
      role: "Frontend Engineer",
      logo: "/assets/img/testimonials/ars.png"
    },
    {
      id: 4,
      quote: "As a designer, I appreciate the attention to detail. The design system is intuitive, and everything just works seamlessly.",
      author: "Marco Franzese",
      role: "Product Designer",
      logo: "/assets/img/testimonials/ImagineArt.png"
    },
    {
      id: 5,
      quote: "As a designer, I appreciate the attention to detail. The design system is intuitive, and everything just works seamlessly.",
      author: "John Doe",
      role: "Full-Stack Developer",
      logo: "/assets/img/testimonials/ImagineArt.png"
    },
    {
      id: 6,
      quote: "As a designer, I appreciate the attention to detail. The design system is intuitive, and everything just works seamlessly.",
      author: "Jane Smith",
      role: "UI/UX Designer",
      logo: "/assets/img/testimonials/ImagineArt.png"
    },
    {
      id: 7,
      quote: "As a designer, I appreciate the attention to detail. The design system is intuitive, and everything just works seamlessly.",
      author: "Michael Brown",
      role: "Frontend Engineer",
      logo: "/assets/img/testimonials/ars.png"
    },
    {
      id: 8,
      quote: "As a designer, I appreciate the attention to detail. The design system is intuitive, and everything just works seamlessly.",
      author: "Marco Franzese",
      role: "Product Designer",
      logo: "/assets/img/testimonials/ImagineArt.png"
    }
  ];
  
  return (
    <div className="Testimonials-testimonials-wrapper">
      <div className="Testimonials-testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="Testimonials-testimonial-card">
            <div className="gradient-border"></div>
            <div className="Testimonials-card-content">
              <div className="Testimonials-quote-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00ff88"
                  strokeWidth="2"
                >
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>

              <blockquote className="Testimonials-testimonial-text">
                <p>{testimonial.quote}</p>
              </blockquote>

              <div className="Testimonials-author-info">

              <div className="Testimonials-company-logo">
                  <img
                    src={testimonial.logo}
                    alt="Company Logo"
                    className="Testimonials-logo-image"
                  />
                </div>

                <div className="Testimonials-author-details">
                  <h3 className="Testimonials-author-name">{testimonial.author}</h3>
                  <p className="Testimonials-author-role">{testimonial.role}</p>
                </div>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}