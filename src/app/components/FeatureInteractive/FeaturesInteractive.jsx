'use client';
import React, { useState, useRef, useEffect } from 'react';
import { 
    Zap, 
    Palette, 
    Code2, 
    Smartphone, 
    Globe,
    Brain,
    Layers,
    Sparkles,
    Shield,
    Rocket
} from 'lucide-react';
import './FeaturesInteractive.css';

const FeatureCard = ({ 
    title, 
    description, 
    icon: Icon, 
    className, 
    variant,
    metrics,
    highlight
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    return (
        <div
            ref={cardRef}
            className={`feature-card ${className} ${variant} ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            style={{
                '--mouse-x': `${mousePos.x}px`,
                '--mouse-y': `${mousePos.y}px`
            }}
        >
            {/* Background Effects */}
            <div className="card-background"></div>
            <div className="hover-gradient"></div>
            <div className="particle-field">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={`particle p-${i + 1}`}></div>
                ))}
            </div>

            {/* Content */}
            <div className="card-content">


                <h3 className="feature-title">
                    <span className="title-text">{title}</span>
                    <span className="title-highlight">{highlight}</span>
                </h3>

                <p className="feature-description">{description}</p>

                {/* Interactive Elements per Variant */}
                {variant === 'lightning' && (
                    <div className="lightning-effect">
                        <div className="bolt bolt-1"></div>
                        <div className="bolt bolt-2"></div>
                        <div className="bolt bolt-3"></div>
                    </div>
                )}

                {variant === 'morphing' && (
                    <div className="morphing-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                )}

                {variant === 'matrix' && (
                    <div className="matrix-rain">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className={`matrix-line line-${i + 1}`}>
                                {Array.from({length: 8}, () => Math.random() > 0.5 ? '1' : '0').join('')}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Border Effects */}
            <div className="animated-border"></div>
            <div className="corner-highlights">
                <div className="corner top-left"></div>
                <div className="corner top-right"></div>
                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>
            </div>
        </div>
    );
};

const FeaturesInteractive = () => {
    const [sectionVisible, setSectionVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSectionVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            title: "Lightning Fast",
            highlight: "Performance",
            description: "Optimized for speed with millisecond response times and seamless user experiences across all devices.",
            icon: Zap,
            className: "card-1",
            variant: "lightning",
            metrics: "< 100ms"
        },
        {
            title: "Pixel Perfect",
            highlight: "Design",
            description: "Crafted with attention to every detail, ensuring your brand shines through beautiful, modern interfaces.",
            icon: Palette,
            className: "card-2", 
            variant: "morphing",
            metrics: "100% Accurate"
        },
        {
            title: "Clean Code",
            highlight: "Architecture",
            description: "Scalable, maintainable code following best practices and industry standards for long-term success.",
            icon: Code2,
            className: "card-3",
            variant: "matrix",
            metrics: "AAA Grade"
        },
        {
            title: "Mobile First",
            highlight: "Responsive",
            description: "Seamlessly adapts to any screen size, delivering consistent experiences across all devices and platforms.",
            icon: Smartphone,
            className: "card-4",
            variant: "pulse",
            metrics: "All Devices"
        },
        {
            title: "Global Ready",
            highlight: "Deployment",
            description: "Built for scale with CDN optimization and worldwide accessibility for your growing user base.",
            icon: Globe,
            className: "card-5",
            variant: "orbit",
            metrics: "Worldwide"
        },
        {
            title: "AI Powered",
            highlight: "Intelligence",
            description: "Integrated smart features and automation to enhance user engagement and streamline workflows.",
            icon: Brain,
            className: "card-6",
            variant: "neural",
            metrics: "Smart AI"
        }
    ];

    return (
        <section 
            ref={sectionRef}
            className={`features-section ${sectionVisible ? 'visible' : ''}`}
        >
            {/* Background Elements */}
            <div className="section-background">
                <div className="bg-grid"></div>
                <div className="floating-elements">
                    <div className="float-orb orb-1"></div>
                    <div className="float-orb orb-2"></div>
                    <div className="float-orb orb-3"></div>
                </div>
            </div>

            <div className="features-container">
                {/* Header */}
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="title-main">Why Choose</span>
                        <span className="title-accent">Excellence</span>
                    </h2>
                    <p className="section-subtitle">
                        Cutting-edge solutions crafted with passion and precision
                    </p>
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <FeatureCard 
                            key={index} 
                            {...feature}
                            style={{ '--index': index }}
                        />
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="features-stats">
                    <div className="stat-group">
                        <Shield size={20} />
                        <span>99.9% Uptime</span>
                    </div>
                    <div className="stat-group">
                        <Rocket size={20} />
                        <span>10x Faster</span>
                    </div>
                    <div className="stat-group">
                        <Layers size={20} />
                        <span>Enterprise Grade</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesInteractive;