'use client';
import React from 'react';
import { motion } from 'motion/react';
import AnimatedTitle from '../components/Animations/AnimatedTitle';
import AnimatedBody from '../components/Animations/AnimatedBody';
import { RiNextjsFill } from 'react-icons/ri';
import {
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiGnubash,
  SiGit,
  SiAdobephotoshop,
  SiDavinciresolve,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import AnimatedTools from '../components/Animations/AnimatedTools';
import { IoLogoFirebase } from 'react-icons/io5';
import { TbBrandNodejs } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ToolsPage() {
  const toolInfo = [
    {
      title: 'Frontend',
      icons: [
        <SiHtml5 />,
        <SiCss3 />,
        <RiJavascriptFill />,
        <BiLogoTypescript />,
        <RiNextjsFill />,
        <TbBrandReactNative />,
      ],
    },
    {
      title: 'Backend',
      icons: [<IoLogoFirebase />, <TbBrandNodejs />, <SiMongodb />],
    },
    {
      title: 'Others',
      icons: [
        <FaGithub />,
        <VscVscode />,
        <SiAdobephotoshop />,
        <SiDavinciresolve />,
        <SiGnubash />,
        <SiGit />,
      ],
    },
  ];
  return (
    <div className="max-w-screen-lg p-2 m-auto mt-[3rem]">
      <AnimatedTitle
        text="My Tech Stack"
        wordSpace="px-1"
        delay={0.5}
        className="font-bold text-[44px] font-sans-serif"
      />
      <div className="m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {toolInfo.map((tool, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-xl w-full sm:max-w-sm mx-auto ${tool.className || ''}`}
            >
              {/* blurred background image layer */}
              <div
                className="absolute inset-0 bg-[url('/assets/images/stack.jpg')] bg-cover bg-center filter blur-sm scale-105 opacity-40 transition-transform duration-700 ease-out group-hover:scale-125"
                aria-hidden="true"
                style={{
                  WebkitMaskImage:
                    'radial-gradient(ellipse at center, black 30%, transparent 100%)',
                  maskImage:
                    'radial-gradient(ellipse at center, black 30%, transparent 100%)',
                  willChange: 'transform',
                }}
              />

              {/* content sits above the blurred bg */}
              <div className="relative z-10 grid grid-rows-2 p-4 border border-transparent">
                <AnimatedBody
                  text={tool.title}
                  className="font-semibold text-2xl"
                />
                <div className="-space-x-2 justify-center flex">
                  {tool.icons.map((icon, iconIndex) => (
                    <AnimatedTools
                      key={iconIndex}
                      className={`text-2xl inline-block`}
                    >
                      {icon}
                    </AnimatedTools>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
