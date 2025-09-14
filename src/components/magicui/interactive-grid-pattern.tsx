"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { animations, zIndex } from "@/lib/design-system";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number; // width of each square
  height?: number; // height of each square
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      setViewport({
        w: window.innerWidth,
        h: window.innerHeight,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!viewport.w || !viewport.h) return null;

  const cols = Math.ceil(viewport.w / width);
  const rows = Math.ceil(viewport.h / height);
  const totalSquares = cols * rows;

  return (
    <svg
      width={viewport.w}
      height={viewport.h}

      className={cn(
        "fixed top-0 left-0 w-screen h-screen pointer-events-auto",
        className
      )}
      style={{
        zIndex: zIndex.base,
      }}
      {...props}
    >
      {Array.from({ length: totalSquares }).map((_, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);

        const x = col * width;
        const y = row * height;

        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-gray-400/30",
              hoveredSquare === index ? "fill-gray-300/30" : "fill-transparent",
              squaresClassName
            )}
            style={{
              transition: `all ${animations.duration[100]} ${animations.easing['in-out']}`,
            }}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
}
