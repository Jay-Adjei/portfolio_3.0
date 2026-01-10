'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import '../../app/styles/globals.css';

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="page home-page timeline-container" ref={containerRef}>
      <div className="about-me-container">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 lg:mt-6 text-center">
          <h2 className="project-heading">
            Project <span className="project-gradient">Progress</span> Journey
          </h2>
          <p className="project-subheading mx-auto">
            I&apos;ve been working on Aceternity for the past 2 years.
            Here&apos;s a timeline of my journey.
          </p>
        </div>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 px-4 md:px-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-16 md:gap-10 group"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 absolute w-12 rounded-full bg-[rgba(255,255,255,0.03)] dark:bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] dark:border-[rgba(255,255,255,0.1)] flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#433ecf] -translate-x-1/2">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#433ecf] to-[#570978] border-2 border-[rgba(255,255,255,0.2)] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#433ecf]/50" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-24 md:text-5xl font-bold project-gradient">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-6 text-left font-bold project-gradient">
                {item.title}
              </h3>
              <div className="relative rounded-2xl bg-[rgba(255,255,255,0.03)] dark:bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] dark:border-[rgba(255,255,255,0.1)] p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(67,62,207,0.3)] hover:shadow-lg hover:shadow-[#433ecf]/10 hover:-translate-y-1">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[rgba(255,255,255,0.1)] dark:via-[rgba(255,255,255,0.1)] to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#433ecf] via-[#570978] to-transparent from-[0%] via-[10%] rounded-full shadow-lg shadow-[#433ecf]/20"
          />
        </div>
      </div>
    </div>
  );
};
