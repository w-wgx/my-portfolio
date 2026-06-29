"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { hyperspeedPresets } from "@/components/HyperSpeedPresets";

const Hyperspeed = dynamic(
  () => import("@/components/Hyperspeed"),
  { ssr: false, loading: () => null }
) as React.ComponentType<{
  ref?: React.RefObject<any>;
  effectOptions?: any;
}>;

interface HeroBackgroundProps {
  className?: string;
}

export default function HeroBackground({ className }: HeroBackgroundProps) {
  const hyperspeedRef = useRef<any>(null);

  useEffect(() => {
    const handleMouseDown = () => {
      if (hyperspeedRef.current) {
        hyperspeedRef.current.speedUp();
      }
    };

    const handleMouseUp = () => {
      if (hyperspeedRef.current) {
        hyperspeedRef.current.slowDown();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-0 ${className || ""}`}>
      <Hyperspeed ref={hyperspeedRef} effectOptions={hyperspeedPresets.one} />
    </div>
  );
}