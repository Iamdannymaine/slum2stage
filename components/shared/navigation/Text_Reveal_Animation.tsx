"use client";

import React, { useRef, ReactNode, JSX } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  duration?: number; // New prop for animation duration
}

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
  duration = 1.5 // Default duration increased to 1.5 seconds
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementRefs = useRef<Element[]>([]);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<Element[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

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
          lineThreshold: 0.1,
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

      // Set initial state
      gsap.set(lines.current, {
        y: "100%",
        opacity: 0
      });

      if (animateOnScroll) {
        // Create a master timeline for all animations
        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%", // Start animation earlier
            end: "top 15%", // End animation later
            scrub: 2, // Increased scrub value for smoother, slower animation
            markers: false,
          }
        });

        // Animate each line with stagger
        lines.current.forEach((line, i) => {
          masterTl.to(line, {
            y: "0%",
            opacity: 1,
            duration: duration,
            ease: "power3.out"
          }, i * 0.08); // Adjust stagger time as needed
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

      return () => {
        splitRefs.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay, duration] }
  );

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