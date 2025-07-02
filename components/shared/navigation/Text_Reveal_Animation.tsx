"use client";

import React, { useRef, ReactNode, JSX, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

// Native debounce function
function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

interface CopyProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  duration?: number;
}

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
  duration = 1.5
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementRefs = useRef<Element[]>([]);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<Element[]>([]);

  const runSplitAnimation = () => {
    if (!containerRef.current) return;

    const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;

    // Reset
    splitRefs.current = [];
    lines.current = [];
    elementRefs.current = [];

    let elements: Element[] = [];
    if (containerRef.current.hasAttribute("data-copy-wrapper")) {
      elements = Array.from(containerRef.current.children);
    } else {
      elements = [containerRef.current];
    }

    elements.forEach((element) => {
      elementRefs.current.push(element);

      const split = SplitText.create(element, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
        lineThreshold: isMobile ? 0.4 : 0.1,
        reduceWhiteSpace: true
      });

      splitRefs.current.push(split);

      const computedStyle = window.getComputedStyle(element);
      const textIndent = computedStyle.textIndent;

      if (textIndent && textIndent !== "0px") {
        if (split.lines.length > 0) {
          (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
        }
        (element as HTMLElement).style.textIndent = "0";
      }

      lines.current.push(...split.lines);
    });

    gsap.set(lines.current, {
      y: isMobile ? "20px" : "40px",
      opacity: 0
    });

    if (animateOnScroll) {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 15%",
          scrub: 2,
          markers: false,
        }
      });

      lines.current.forEach((line, i) => {
        masterTl.to(line, {
          y: "0%",
          opacity: 1,
          duration: duration,
          ease: "power3.out"
        }, i * 0.08);
      });
    } else {
      gsap.to(lines.current, {
        y: "0%",
        opacity: 1,
        duration: duration,
        stagger: 0.1,
        ease: "power3.out",
        delay: delay
      });
    }
  };

  useGSAP(() => {
    runSplitAnimation();

    return () => {
      splitRefs.current.forEach((split) => split?.revert?.());
    };
  }, { scope: containerRef, dependencies: [animateOnScroll, delay, duration] });

  // Revert and re-run on resize and font load
  useEffect(() => {
    const handleResize = debounce(() => {
      splitRefs.current.forEach((split) => split?.revert?.());
      runSplitAnimation();
    }, 300);

    window.addEventListener("resize", handleResize);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        handleResize(); // Fix layout once fonts are ready
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [runSplitAnimation]);

  if (React.isValidElement(children) && typeof children.type === "string") {
    return React.cloneElement(
      children as React.ReactElement<JSX.IntrinsicElements["div"]>,
      { ref: containerRef }
    );
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
