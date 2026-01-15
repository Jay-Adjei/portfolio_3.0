import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import '../../app/styles/globals.css';

export function TimelineDemo() {
  const data = [
    {
      title: 'Late 2025',
      content: (
        <div>
          <p className="mb-6 text-sm md:text-base text-[#64748b] dark:text-[#94a3b8] font-['RedHat'] leading-relaxed">
            Built and deployed an offline tool to download folders from aws s3
            bucket and automatically populate an LMS database.
          </p>
          {/* <div className="mb-8 space-y-3">
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
          </div> */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/images/projects/cdn-modufetch-1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="/assets/images/projects/cdn-modufetch-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2025',
      content: (
        <div>
          <p className="mb-6 text-sm md:text-base text-[#64748b] dark:text-[#94a3b8] font-['RedHat'] leading-relaxed">
            Built and deployed a website and a mobile app to track and take
            attendance for my school.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/images/projects/classclock-1.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="/assets/images/projects/classclock-2.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="/assets/images/projects/classclock-3.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
            <img
              src="/assets/images/projects/classclock-4.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2024',
      content: (
        <div>
          <p className="mb-4 text-sm md:text-base text-[#94a3b8] dark:text-[#94a3b8] font-['RedHat'] leading-relaxed">
            Built and deployed a website to share AI prompts for developers and
            creatives.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/images/projects/promptopia.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-[rgba(67,62,207,0.3)] hover:shadow-[#433ecf]/20 md:h-44 lg:h-60"
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
