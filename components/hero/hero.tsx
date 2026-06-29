"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";
import TextType from "@/components/ui/TextType";

const ASCIIText = dynamic(
  () => import("@/components/ui/ASCIIText"),
  { ssr: false, loading: () => null }
) as React.ComponentType<{
  text: string;
  asciiFontSize: number;
  textFontSize: number;
  planeBaseHeight: number;
  textColor: string;
  enableWaves: boolean;
  positionY?: string;
}>;

const PORTRAIT_SRC = "/josh.webp";
const PORTRAIT_HOVER_SRC = "/josh_wave.webp";

export function Hero(): ReactNode {
  return (
    <>
      {/* 第一屏 - ASCIIText */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <ASCIIText
          text="Hey!"
          asciiFontSize={12}
          textFontSize={200}
          planeBaseHeight={8}
          textColor="#fdf9f3"
          enableWaves={true}
        />
      </section>

      {/* 第二屏 - 介绍区块 */}
      <section className="relative w-full min-h-screen flex items-center justify-center py-20 sm:py-32">
        <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
              <FadeIn className="flex flex-col gap-4">
                <TextType
                  text="Hey"
                  typingSpeed={75}
                  initialDelay={500}
                  pauseDuration={1500}
                  deletingSpeed={50}
                  showCursor={false}
                  loop={false}
                  className="text-[20px] leading-tight tracking-tight font-medium text-foreground"
                />

                <TextType
                  text="欢迎探索"
                  typingSpeed={75}
                  initialDelay={1500}
                  pauseDuration={1500}
                  deletingSpeed={50}
                  showCursor={false}
                  loop={false}
                  className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3.65rem]"
                />

                <TextType
                  text="创造数字体验，探索技术边界"
                  typingSpeed={75}
                  initialDelay={3000}
                  pauseDuration={1500}
                  deletingSpeed={50}
                  showCursor={true}
                  cursorCharacter="_"
                  cursorBlinkDuration={0.5}
                  loop={false}
                  className="max-w-[34ch] text-[22px] leading-[1.4] tracking-tight text-muted-foreground"
                />

                <HeroCtas />
              </FadeIn>

              <ScaleUnblur className="flex justify-stretch md:justify-end">
                <div className="relative aspect-square w-full md:max-w-105 overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                    <PortraitMorph
                      srcA={PORTRAIT_SRC}
                      srcB={PORTRAIT_HOVER_SRC}
                      alt="张文帅"
                    />
                  </div>
                </div>
              </ScaleUnblur>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}