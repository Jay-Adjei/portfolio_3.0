// SkillsShowcase.jsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
    Code2, 
    Palette, 
    Smartphone, 
    Database, 
    Globe, 
    Zap, 
    Brain, 
    Coffee,
    GitBranch,
    Layers,
    MessageCircle,
    Award
} from 'lucide-react';
import './FeaturesInteractive.css';

const SkillCard = ({ 
    title, 
    description, 
    skills, 
    className, 
    icon: Icon, 
    variant, 
    experience,
    projects,
    bgPattern
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [ripples, setRipples] = useState([]);
    const cardRef = useRef(null);
    const rippleId = useRef(0);

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const handleClick = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const newRipple = {
                id: rippleId.current++,
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
            
            setRipples(prev => [...prev, newRipple]);
            
            setTimeout(() => {
                setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
            }, 1000);
        }
    };

    return (
        <div
            ref={cardRef}
            className={`skill-card ${className} ${variant} ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            style={{
                '--mouse-x': `${mousePos.x}px`,
                '--mouse-y': `${mousePos.y}px`
            }}
        >
            {/* Background Pattern */}
            <div className={`card-bg-pattern ${bgPattern}`}></div>
            
            {/* Interactive Cursor Follow */}
            <div className="cursor-glow"></div>
            
            {/* Ripple Effects */}
            {ripples.map(ripple => (
                <div
                    key={ripple.id}
                    className="ripple-effect"
                    style={{
                        left: ripple.x,
                        top: ripple.y
                    }}
                />
            ))}
            
            {/* Main Content */}
            <div className="skill-card-content">
                <div className="skill-header">
                    <div className="icon-wrapper">
                        <Icon className="skill-icon" size={28} />
                        <div className="icon-glow"></div>
                    </div>
                    <div className="experience-badge">{experience}</div>
                </div>
                
                <h3 className="skill-title">{title}</h3>
                <p className="skill-description">{description}</p>
                
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-tag" style={{ '--delay': `${index * 0.1}s` }}>
                            {skill}
                        </span>
                    ))}
                </div>
                
                <div className="card-footer">
                    <div className="projects-count">{projects} Projekte</div>
                    <div className="availability-indicator">
                        <div className="status-dot"></div>
                        Verfügbar
                    </div>
                </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="floating-particles">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`particle particle-${i + 1}`}></div>
                ))}
            </div>
            
            {/* Border Glow */}
            <div className="border-glow"></div>
        </div>
    );
};

const SkillsShowcase = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [animationPhase, setAnimationPhase] = useState('loading');

    const skillsData = [
        {
            title: "Frontend Development",
            description: "Moderne, responsive Webentwicklung mit neuesten Technologien und optimaler User Experience.",
            skills: ["React", "Next.js", "TypeScript", "Vue.js", "CSS3", "SASS"],
            className: "skill-main-1",
            icon: Code2,
            variant: "frontend",
            experience: "5+ Jahre",
            projects: 45,
            bgPattern: "code-pattern"
        },
        {
            title: "UI/UX Design",
            description: "Kreative Designs die funktionieren - von der Idee bis zur perfekten Umsetzung.",
            skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Design Systems"],
            className: "skill-main-2",
            icon: Palette,
            variant: "design",
            experience: "4+ Jahre",
            projects: 32,
            bgPattern: "design-pattern"
        },
        {
            title: "Mobile Development",
            description: "Native und Cross-Platform Apps für iOS und Android mit modernsten Frameworks.",
            skills: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
            className: "skill-main-3",
            icon: Smartphone,
            variant: "mobile",
            experience: "3+ Jahre",
            projects: 18,
            bgPattern: "mobile-pattern"
        },
        {
            title: "Backend & APIs",
            description: "Skalierbare Backend-Systeme und RESTful APIs für komplexe Anwendungen.",
            skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
            className: "skill-small-1",
            icon: Database,
            variant: "backend",
            experience: "4+ Jahre",
            projects: 28,
            bgPattern: "data-pattern"
        },
        {
            title: "Web Performance",
            description: "Optimierung für Geschwindigkeit, SEO und beste Core Web Vitals.",
            skills: ["Lighthouse", "Webpack", "Vite", "CDN", "Caching"],
            className: "skill-small-2",
            icon: Zap,
            variant: "performance",
            experience: "3+ Jahre",
            projects: 35,
            bgPattern: "speed-pattern"
        },
        {
            title: "DevOps & Cloud",
            description: "Automatisierte Deployments und Cloud-Infrastructure Management.",
            skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "Kubernetes"],
            className: "skill-small-3",
            icon: Globe,
            variant: "devops",
            experience: "2+ Jahre",
            projects: 22,
            bgPattern: "cloud-pattern"
        },
        {
            title: "AI Integration",
            description: "Integration von KI-Services und Machine Learning in Web-Anwendungen.",
            skills: ["OpenAI API", "TensorFlow.js", "Langchain", "Vector DBs"],
            className: "skill-small-4",
            icon: Brain,
            variant: "ai",
            experience: "1+ Jahr",
            projects: 8,
            bgPattern: "ai-pattern"
        }
    ];

    useEffect(() => {
        // Staggered loading animation
        setTimeout(() => setAnimationPhase('loaded'), 500);
    }, []);

    return (
        <div className="skills-showcase-container">
            <div className="showcase-header">
                <div className="header-content">
                    <h1 className="main-title">
                        <span className="title-part">Meine</span>
                        <span className="title-highlight">Expertise</span>
                    </h1>
                    <p className="subtitle">
                        Als erfahrener Full-Stack Developer bringe ich Ihre digitalen Visionen zum Leben
                    </p>
                </div>
                
                <div className="availability-banner">
                    <div className="banner-content">
                        <Coffee size={20} />
                        <span>Aktuell verfügbar für neue Projekte</span>
                        <div className="pulse-dot"></div>
                    </div>
                </div>
            </div>

            <div className={`Talent-Grid ${animationPhase}`}>
                <div className="grid-main">
                    {skillsData.filter(skill => skill.className.includes('main')).map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
                
                <div className="grid-small">
                    {skillsData.filter(skill => skill.className.includes('small')).map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </div>


        </div>
    );
};

export default SkillsShowcase;