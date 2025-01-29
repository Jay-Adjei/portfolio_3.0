"use client";

import React, { useState } from 'react';
import './FeaturesInteractive.css';

const FeatureCard = ({ title, description, className, isGif, src }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`feature-card-wrapper ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isGif ? (
                <>
                    <img src={src} alt={title} className="feature-card-image" />
                    {isHovered && className === 'feature-card-1-4' && (
                        <div className="hover-glow-effect" />
                    )}
                </>
            ) : (
                <div className="feature-card-placeholder" />
            )}
            <div className="feature-card-content">
                <h1 className="feature-card-title">{title}</h1>
                {description && <p className="feature-card-description">{description}</p>}
            </div>
        </div>
    );
};

const FeaturesInteractive = () => {
    return (
        <section className="features-section2">
            <div className="grid-smaller-containers">
                <FeatureCard
                    src="/assets/videos/video7.mp4"
                    title="Arcadia"
                    description="Interactive Platform"
                    className="feature-card-1-4"
                    isGif={true}
                />
                <FeatureCard
                    title="Dynamic Content"
                    description="Real-time updates"
                    className="feature-card-2-4"
                    isGif={true}
                />
                <FeatureCard
                    title="Secure Access"
                    description="Encrypted connections"
                    className="feature-card-3-4"
                    isGif={true}
                />
            </div>

            <div className="grid-smaller-containers2">
                <FeatureCard
                    title="Analytics"
                    description="Detailed insights"
                    className="feature-card-small-nextoeachother-1-4"
                    isGif={true}
                />
                <FeatureCard
                    title="API Integration"
                    description="Easy connectivity"
                    className="feature-card-small-nextoeachother-2-4"
                    isGif={true}
                />
                <FeatureCard
                    title="Cloud Storage"
                    description="Scalable solutions"
                    className="feature-card-small-nextoeachother-3-4"
                    isGif={true}
                />
                <FeatureCard
                    title="Support"
                    description="24/7 assistance"
                    className="feature-card-small-nextoeachother-4-4"
                    isGif={true}
                />
            </div>
        </section>
    );
};

export default FeaturesInteractive;