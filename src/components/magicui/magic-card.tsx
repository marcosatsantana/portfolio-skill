"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface MagicCardProps {
  /**
   * @default <div />
   * @type ReactNode
   * @description
   * The content to be rendered inside the card.
   * */
  children?: ReactNode;

  /**
   * @default ""
   * @type string
   * @description
   * The className to be applied to the card.
   */
  className?: string;

  /**
   * @default 600
   * @type number
   * @description
   * The width of the gradient hover effect.
   * */
  gradientSize?: number;

  /**
   * @default "rgba(255,255,255,0.2)"
   * @type string
   * @description
   * The color of the gradient hover effect.
   * */
  gradientColor?: string;

  /**
   * @default "rgba(255,255,255,0.02)"
   * @type string
   * @description
   * The background color of the card.
   * */
  gradientOpacity?: number;
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        setMouseX(e.clientX - left);
        setMouseY(e.clientY - top);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative flex size-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow",
        className,
      )}
    >
      <div className="relative z-10 size-full">{children}</div>
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)`,
          opacity: gradientOpacity,
        }}
      />
    </div>
  );
}
