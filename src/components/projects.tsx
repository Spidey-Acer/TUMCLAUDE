"use client";

import { projects } from "@/data/site";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Projects() {
  return (
    <section id="projects" className="bg-light px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          title="Featured Projects"
          subtitle="Innovative solutions created by our talented members"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <div className="overflow-hidden rounded-xl border border-border bg-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(9,123,62,0.1)]">
                <div className="deco-project-image flex h-[200px] items-center justify-center bg-gradient-to-br from-primary to-primary-dark text-[3rem] text-white/30">
                  {project.icon}
                </div>
                <div className="p-8">
                  <span className="mb-3 inline-block rounded bg-[rgba(216,152,55,0.1)] px-3 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.5px] text-accent">
                    {project.tag}
                  </span>
                  <h3 className="mb-3 text-2xl text-text-dark">
                    {project.title}
                  </h3>
                  <p className="mb-6 font-light text-text-light">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    className="inline-flex items-center gap-2 font-semibold text-accent transition-all duration-300 hover:gap-3"
                  >
                    Learn more &rarr;
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
