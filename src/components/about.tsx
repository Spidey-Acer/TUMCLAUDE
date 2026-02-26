"use client";

import { aboutContent, aboutFeatures } from "@/data/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function About() {
  return (
    <section id="about" className="bg-white px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <div>
              <h2 className="mb-6 text-[1.8rem] leading-[1.2] text-primary md:text-[2.5rem]">
                {aboutContent.title}
              </h2>
              {aboutContent.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mb-6 font-light leading-[1.8] text-text-light"
                >
                  {p}
                </p>
              ))}

              <div className="mt-8 flex flex-col gap-6">
                {aboutFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent font-bold text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="mb-1 text-[1.125rem] font-bold text-text-dark">
                        {feature.title}
                      </h4>
                      <p className="text-[0.9rem] font-light text-text-light">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="deco-about-image flex h-[300px] items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-[4rem] text-white md:h-[400px]">
              👨‍💻
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
