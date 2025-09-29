import React, { useEffect, useRef, useMemo } from 'react';
import type { ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'top 30%',
  wordAnimationEnd = 'top 30%'
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
  const wrapWords = (node: ReactNode): ReactNode => {
  if (typeof node === 'string') {
    return node.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) {
        return word;
      }
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => <React.Fragment key={index}>{wrapWords(child)}</React.Fragment>);
  }

  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<any>;

    // ❗️Skip wrapping words inside `.underline` or similar classes
    const className = element.props.className || '';
    const shouldSkip = className.includes('underline');

    return React.cloneElement(
      element,
      { ...element.props },
      shouldSkip
        ? element.props.children // ❗️Don't process children inside .underline
        : React.Children.map(element.props.children, wrapWords)
    );
  }

  return node;
};


  return wrapWords(children);
}, [children]);


  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
        }
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>('.word, .underline');

gsap.fromTo(
  wordElements,
  { opacity: baseOpacity, willChange: 'opacity' },
  {
    ease: 'none',
    opacity: 1,
    stagger: 0.05,
    scrollTrigger: {
      trigger: el,
      scroller,
      start: 'top bottom-=20%',
      end: wordAnimationEnd,
      scrub: true
    }
  }
);

if (enableBlur) {
  gsap.fromTo(
    wordElements,
    { filter: `blur(${blurStrength}px)` },
    {
      ease: 'none',
      filter: 'blur(0px)',
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: 'top bottom-=20%',
        end: wordAnimationEnd,
        scrub: true
      }
    }
  );
}

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={` leading-[1.5] text-center font-medium text-3xl leading-loose tracking-wider ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
