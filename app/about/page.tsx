import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "关于",
  description: "关于我、我的背景以及如何联系我。",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              你好！我是 <span className="border-b border-foreground/30 pb-0.5">赖星</span>。
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                一名 <strong className="font-semibold text-foreground">全栈开发工程师</strong>，前后端都能上手。从校企合作当中接手了多个数据平台项目，从需求梳理到上线都是自己跟下来的。
              </p>
              <p>
                实际踩了不少坑，比如几万条数据一次性加载直接超时，后来用分页缓存解决了；还有前端清洗规则引擎也是因为后端轮询太慢才想到挪到前端做的。日常用 <strong className="font-semibold text-foreground">Spring Boot</strong> 写后端接口，<strong className="font-semibold text-foreground">Vue 3 + TypeScript</strong> 做前端，<strong className="font-semibold text-foreground">ECharts-GL 和 Three.js</strong> 搞 3D 可视化。
              </p>
              <p>
                对 <strong className="font-semibold text-foreground">3D可视化</strong> 和数据交互领域有浓厚兴趣，持续探索前沿技术落地。善于从实际项目痛点出发驱动技术选型与优化，追求性能与用户体验的极致。
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
