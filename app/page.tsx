import { ContactCard } from "@/components/contact/contact-card";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nav } from "@/components/layout/nav";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = createMetadata({
  title: "首页",
  description: `欢迎来到 ${siteConfig.name}。${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <div className="relative min-h-screen">
      {/* 固定背景层 - 铺满整个视口，只包含霓虹背景 */}
      <HeroBackground />

      {/* 导航栏 */}
      <div className="relative z-50">
        <Nav />
      </div>

      {/* 内容层 */}
      <main id="main-content" className="relative z-10 flex flex-1 flex-col gap-20 sm:gap-28">
        <Hero />
        <Projects withHeadline viewMoreVisible />
        <ContactCard />
        <div className="h-12 sm:h-16" />
      </main>
    </div>
  );
}
