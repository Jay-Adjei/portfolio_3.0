"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PreLoader = ({ onFinish }) => {
    const rootRef = useRef(null);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const prevOverflow = document.body.style.overflowY;
        document.body.style.overflowY = "hidden";

        const pre = rootRef.current;
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            const mobileLanding = () => {
                if (window.innerWidth < 763) {
                    const target = document.querySelector(".landing__main2");
                    if (target) {
                        gsap.from(target, {
                            duration: 1,
                            delay: 0,
                            opacity: 0,
                            y: 80,
                            ease: "expo.out",
                        });
                    }
                }
            };

            tl.to(".texts-container", {
                duration: 0,
                display: "flex",
                opacity: 1,
                ease: "power3.out",
            })
                .from(".texts-container span", {
                    duration: 1.5,
                    delay: 0.8,
                    y: 70,
                    skewY: 10,
                    stagger: 0.25,
                    ease: "power3.out",
                })
                .to(".texts-container span", {
                    duration: 1,
                    y: 70,
                    skewY: -20,
                    stagger: 0.2,
                    ease: "power3.out",
                })
                .from(".sub", {
                    duration: 1,
                    opacity: 0,
                    y: 80,
                    ease: "expo.out",
                })
                        // Determine target element for exit animation (prefer ref, fallback to selector)
                        .call(() => {
                            // no-op placeholder so we can decide target below
                        })
                        .add(() => {
                            const target = pre || document.querySelector('.gsap-preloader');
                            if (target) {
                                gsap.to(target, { duration: 0.9, yPercent: -100, ease: 'power3.inOut' });
                            }
                        }, "-=1.0")
                        // After the timeline finishes, restore scroll, mark app loaded and unmount via React state
                        .call(() => {
                            document.body.style.overflowY = prevOverflow || "";
                            document.body.classList.add('app-loaded');
                            mobileLanding();
                            if (typeof onFinish === 'function') onFinish();
                        })
                        .call(() => setVisible(false));
        }, rootRef);

        return () => {
            document.body.style.overflowY = prevOverflow || "";
            ctx.revert();
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            ref={rootRef}
            className="gsap-preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
            style={{
                height: "100vh",
                width: "100%",
                background: "#171a4f",
                backgroundColor: "#171a4f",
                color: "#e5ebf2",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden !important",
            }}
        >
            <div
                className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-bold text-[#e4ded7] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
                style={{
                    height: "60px",
                    opacity: 0, // start hidden to avoid flash before GSAP runs
                }}
            >
                <span>Japhet</span>
                <span>Adofo</span>
                <span> - </span>
                <span>Adjei</span>
                <div className="sub hidden"></div>
            </div>
        </div>
    );
};

export default PreLoader;