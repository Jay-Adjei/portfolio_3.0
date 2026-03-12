'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const PreLoader = ({ onFinish }) => {
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prevOverflow = document.body.style.overflowY;
    document.body.style.overflowY = 'hidden';
    // Mark preloading state to coordinate global UI (e.g., footer visibility)
    document.body.classList.add('preloading');

    const pre = rootRef.current;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // compute durations for the staggered spans so the box can move for the same total time
      const spanDuration = 1.5;
      const spanStagger = 0.25;
      const textSpansCount =
        pre && pre.querySelectorAll
          ? pre.querySelectorAll('.texts-container span:not(.box)').length
          : document.querySelectorAll('.texts-container span:not(.box)').length;
      const boxDuration =
        spanDuration + Math.max(0, (textSpansCount - 1) * spanStagger);

      const mobileLanding = () => {
        if (window.innerWidth < 763) {
          const target = document.querySelector('.landing__main2');
          if (target) {
            gsap.from(target, {
              duration: 1,
              delay: 0,
              opacity: 0,
              y: 80,
              ease: 'expo.out',
            });
          }
        }
      };

      tl.to('.texts-container', {
        duration: 0,
        display: 'flex',
        opacity: 1,
        ease: 'power3.out',
      })
        .from('.texts-container span', {
          duration: spanDuration,
          delay: 0.4,
          y: 70,
          skewY: 20,
          stagger: spanStagger,
          ease: 'power3.out',
        })
        // move the .box horizontally while the texts stagger in — keep it visible
        .to(
          '.box',
          {
            duration: boxDuration,
            x: 300,
            ease: 'power3.out',
          },
          '<'
        )
        // small follow-up horizontal nudge for the name spans (exclude the box)
        .to('.texts-container span:not(.box)', {
          duration: 1,
          x: 400,
        })
        // collapse the full name spans into a single initials element (JAA)
        .to(
          '.texts-container .name',
          {
            duration: 0.5,
            opacity: 0,
            y: -10,
            stagger: 0.05,
            ease: 'power1.inOut',
          },
          '+=0.2'
        )
        // reveal initials in the same spot
        .to(
          '.initials',
          {
            duration: 0.6,
            opacity: 1,
            scale: 1,
            ease: 'back.out(1.2)',
          },
          '<'
        )
        // hold initials briefly then crossfade to logo
        .to({}, { duration: 0.6 })
        .to(
          '.initials',
          {
            duration: 0.2,
            opacity: 1,
            rotateX: 180,
            ease: 'back.out(1.2)',
          },
          '<'
        )
        .to(
          '.loader-logo',
          {
            duration: 0.6,
            opacity: 1,
            scale: 1,
            ease: 'power3.out',
          },
          '<<'
        )
        .to(
          '.initials',
          { duration: 0.4, opacity: 0, ease: 'power1.inOut' },
          '<'
        )
        // .to(".texts-container span", {
        //     duration: 1,
        //     y: 70,
        //     skewY: -20,
        //     stagger: 0.2,
        //     ease: "power3.out",
        // })
        .from('.sub', {
          duration: 1,
          opacity: 0,
          y: 80,
          ease: 'expo.out',
        })
        // Determine target element for exit animation (prefer ref, fallback to selector)
        .call(() => {
          // no-op placeholder so we can decide target below
        })
        .add(() => {
          const target = pre || document.querySelector('.gsap-preloader');
          if (target) {
            gsap.to(target, {
              duration: 0.9,
              yPercent: -100,
              ease: 'power3.inOut',
            });
          }
        }, '-=1.0')
        // After the timeline finishes, restore scroll, mark app loaded and unmount via React state
        .call(() => {
          document.body.style.overflowY = prevOverflow || '';
          document.body.classList.add('app-loaded');
          document.body.classList.remove('preloading');
          mobileLanding();
          if (typeof onFinish === 'function') onFinish();
        })
        .call(() => setVisible(false));
    }, rootRef);

    return () => {
      document.body.style.overflowY = prevOverflow || '';
      document.body.classList.remove('preloading');
      ctx.revert();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="gsap-preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
      style={{
        height: '100vh',
        width: '100%',
        // match WaterTraceBackground base gradient
        background: 'linear-gradient(180deg, #0b0018 0%, #150032 100%)',
        color: '#e5ebf2',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden !important',
      }}
    >
      <div
        className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-bold text-[#e4ded7] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
        style={{
          height: '60px',
          opacity: 0, // start hidden to avoid flash before GSAP runs
        }}
      >
        <span className="name name-1">Japhet</span>
        <span className="name name-2">Adofo</span>
        <span className="name name-sep"> - </span>
        <span className="name name-3">Adjei</span>
        <span
          className="box"
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#000000',
            opacity: 1,
          }}
        ></span>
        <div className="sub hidden"></div>

        {/* initials that will replace the full name texts */}
        <div
          className="initials absolute opacity-0 flex items-center justify-center text-[28px] font-bold"
          style={{ pointerEvents: 'none' }}
        >
          JAA
        </div>

        {/* logo image, hidden initially; path: public/images/logo_transparent.webp */}
        <img
          src="/assets/images/logo_transparent.webp"
          alt="Japhet Adofo-Adjei portfolio logo"
          className="loader-logo absolute opacity-0"
          style={{
            width: 80,
            height: 80,
            objectFit: 'contain',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
};

export default PreLoader;
