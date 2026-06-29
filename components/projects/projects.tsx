"use client";

import {
  ArrowRight,
  Bot,
  Compass,
  Layers,
  LineChart,
  Sparkles,
  Wand2,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { ClientIcon } from "@/components/ui/ClientIcon";
import { FadeIn } from "@/components/ui/motion-primitives";

/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    id: "loom",
    icon: Sparkles,
    iconLabel: "LOOM",
    title:
      "聚合 187 个国家、8 种装备类型的结构化数据，提供从宏观概览到微观装备参数的完整分析链路。",
    description:
      "从类型分布到各国排名，从年代趋势到综合能力雷达图，每一件装备都有完整参数档案。",
    meta: "数据工程师, 2026",
    imageRatio: 1920 / 1080,
    image: "/loom-project.png",
    imageAlt: "全球装备数据分析平台",
    href: "https://1-0-3qmyveqi1-limings-projects-8812baaa.vercel.app",
  },
  {
    id: "atlas",
    icon: Compass,
    iconLabel: "Atlas Studio",
    title: "为创意工作室打造的两周品牌与产品冲刺项目。",
    description:
      "端到端的品牌标识、营销网站和小型产品界面，在每个触点都传达出低调的自信。",
    meta: "产品与品牌设计师, 2025",
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/24599416/file/original-1ae5075dcd129aebb16bdbca24b41ac7.png?resize=1024x768&vertical=center",
    imageAlt: "Atlas Studio 品牌与产品冲刺设计图",
  },
  {
    id: "rhythm",
    icon: LineChart,
    iconLabel: "Rhythm",
    title: "为独立创始人打造的平静分析工具。",
    description:
      "每周摘要将原始产品数据转化为简单的叙事。专为你周日边喝咖啡边阅读而设计。",
    meta: "创始人 & 设计师, 2024",
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/47357856/file/75841fa59f32f05ca6c5ddf02d08dfe6.png?resize=1024x768&vertical=center",
    imageAlt: "Rhythm 平静分析工具设计图",
  },
  {
    id: "groove",
    icon: Wand2,
    iconLabel: "Groove",
    title:
      "重新设计音乐学校的预约流程，帮助数千名学生找到合适的课程。",
    description:
      "我主导了课程预约体验的重新设计，将流失率降低了一半，并让日程表变成人们真正想打开的日历。",
    meta: "首席设计师, 2023",
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/43955214/file/original-d4cde1de803e84b97d8892e3444c04b0.png?resize=1024x768&vertical=center",
    imageAlt: "Groove 音乐学校预约流程设计图",
  },
  {
    id: "fieldnote",
    icon: Layers,
    iconLabel: "Fieldnote",
    title:
      "一款适合设计团队的袖珍研究工具，让你走出文档，走进真实世界。",
    description:
      "在一个地方捕捉引用、标记模式并综合主题。界面让开道路，让思考自然发生。",
    meta: "设计工程师, 2024",
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/30310902/file/original-621e7fe47be9d11ee14544456c693bec.png?resize=1024x768&vertical=center",
    imageAlt: "Fieldnote 袖珍研究工具设计图",
  },
  {
    id: "talkback",
    icon: Bot,
    iconLabel: "Talkback",
    title: "与语言模型对话的更友好界面。",
    description:
      "探索如何让 AI 聊天感觉更不像终端，而更像与一位好奇朋友的对话。",
    meta: "独立项目, 2025",
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/16560717/file/original-c6f745d50302d66609bfe080f99f5396.png?resize=1024x768&vertical=center",
    imageAlt: "Talkback 友好 AI 聊天界面设计图",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              我的项目
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-muted-foreground sm:text-[20px]">
              从有趣的实验到深思熟虑的系统，看看我引以为傲的作品。
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              查看全部项目
              <ClientIcon as={ArrowRight} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  const content = (
    <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
      <header className="flex items-center gap-2.5 px-1 pt-2">
        <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
          <ClientIcon as={Icon} className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
        </span>
        <span className="text-sm font-medium tracking-tight text-foreground">
          {project.iconLabel}
        </span>
      </header>

      <div
        className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
        style={{ aspectRatio: project.imageRatio }}
      >
        <div className="project-card__image-inner">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
            className="object-cover"
            priority={index < 2}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2.5 px-1 pb-1">
        <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
          {project.title}
        </h3>
        <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
          {project.description}
        </p>
      </div>

      <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
        {project.meta}
      </p>
    </article>
  );

  if (project.href) {
    return (
      <FadeIn
        delay={Math.min(index * 0.06, 0.3)}
        className="mb-6 break-inside-avoid md:mb-7"
      >
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </FadeIn>
    );
  }

  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      {content}
    </FadeIn>
  );
}
