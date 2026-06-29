"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

import { DottedPattern } from "@/components/ui/dotted-pattern";

type Polaroid = {
  id: string;
  rotate: number;
  image: string;
  alt: string;
};

const PHOTOS: Polaroid[] = [
  { id: "a", rotate: -8, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=400&fit=crop", alt: "个人生活风景 - 占位图" },
  { id: "b", rotate: 6, image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=400&fit=crop", alt: "代码编程 - 占位图" },
  { id: "c", rotate: -4, image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=400&fit=crop", alt: "工作空间桌面 - 占位图" },
  { id: "d", rotate: 7, image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=400&fit=crop", alt: "创意设计 - 占位图" },
  { id: "e", rotate: -6, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop", alt: "科技数据 - 占位图" },
  { id: "f", rotate: 5, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=400&fit=crop", alt: "抽象简约 - 占位图" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function PolaroidCard({
  photo,
  index,
}: {
  photo: Polaroid;
  index: number;
}): ReactNode {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const max = 18;
    const k = 0.25;
    mx.set(Math.max(-max, Math.min(max, dx * k)));
    my.set(Math.max(-max, Math.min(max, dy * k)));
  };

  const handleLeave = (): void => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: -120, filter: "blur(18px)", rotate: photo.rotate }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: photo.rotate }}
      transition={{
        duration: 0.9,
        delay: 0.05 + index * 0.08,
        ease: EASE,
      }}
      style={{
        x: tx,
        y: ty,
        rotate: photo.rotate,
      }}
      className="relative aspect-[3/4] w-[clamp(6rem,11vw,9rem)] shrink-0 overflow-hidden rounded-2xl border-6 border-neutral-300/40 bg-white p-1.5 dark:border-white/15 dark:bg-neutral-900"
    >
      {/* 占位图 - 可替换为个人图片 */}
      <img
        src={photo.image}
        alt={photo.alt}
        className="h-full w-full object-cover rounded-xl"
        draggable={false}
      />
      {/* 点状纹理叠加 */}
      <DottedPattern className="absolute inset-0 h-full w-full overflow-hidden rounded-xl opacity-50" />
    </motion.div>
  );
}

export function PolaroidStrip(): ReactNode {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div aria-hidden="true" className="h-[clamp(8rem,15vw,12rem)] w-full" />;
  }

  return (
    <div className="flex flex-wrap w-full items-start justify-center gap-1 px-4 sm:gap-1.5 sm:px-8">
      {PHOTOS.map((photo, i) => (
        <PolaroidCard key={photo.id} photo={photo} index={i} />
      ))}
    </div>
  );
}
