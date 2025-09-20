"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function FadeInDown({ children }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = domRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } 
        });
      },
      { threshold: 0.1 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-down ${isVisible ? "show" : ""}`}
    >
      {children}
    </div>
  );
}
