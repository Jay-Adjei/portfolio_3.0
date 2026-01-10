import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import '../../app/styles/globals.css';

export function TimelineDemo() {
  const data = [
    {
      title: '2024',
      content: (
        <div>
          <p className="mb-6 text-sm md:text-base text-[#94a3b8] dark:text-[#94a3b8] font-['RedHat'] leading-relaxed">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Early 2023',
      content: (
        <div>
          <p className="mb-4 text-sm md:text-base text-[#94a3b8] dark:text-[#94a3b8] font-['RedHat'] leading-relaxed">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-6 text-sm md:text-base text-[#94a3b8] dark:text-[#94a3b8] font-['RedHat'] leading-relaxed">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Changelog',
      content: (
        <div>
          <p className="mb-6 text-sm md:text-base text-[#94a3b8] dark:text-[#94a3b8] font-['RedHat'] leading-relaxed">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-[#94a3b8] dark:text-[#94a3b8] font-['RedHat']">
              <span className="text-[#3ecf8e]">✓</span>
              <span>Card grid component</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#94a3b8] dark:text-[#94a3b8] font-['RedHat']">
              <span className="text-[#3ecf8e]">✓</span>
              <span>Startup template Aceternity</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#94a3b8] dark:text-[#94a3b8] font-['RedHat']">
              <span className="text-[#3ecf8e]">✓</span>
              <span>Random file upload lol</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#94a3b8] dark:text-[#94a3b8] font-['RedHat']">
              <span className="text-[#3ecf8e]">✓</span>
              <span>Himesh Reshammiya Music CD</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#94a3b8] dark:text-[#94a3b8] font-['RedHat']">
              <span className="text-[#3ecf8e]">✓</span>
              <span>Salman Bhai Fan Club registrations open</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
export default TimelineDemo;
