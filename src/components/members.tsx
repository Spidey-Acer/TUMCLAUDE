"use client";

import { members } from "@/data/site";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Members() {
  return (
    <section id="members" className="bg-white px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          title="Leadership Team"
          subtitle="Meet the passionate team driving CLAUDE'S CLUB forward"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {members.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.1}>
              <div className="rounded-xl border border-border bg-gradient-to-br from-light to-[rgba(9,123,62,0.05)] p-8 text-center transition-all duration-400 hover:-translate-y-2 hover:border-accent hover:shadow-[0_12px_40px_rgba(216,152,55,0.12)]">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-[2rem] font-bold text-white">
                  {member.avatar}
                </div>
                <h3 className="mb-1 text-2xl text-text-dark">{member.name}</h3>
                <div className="mb-4 font-mono text-[0.85rem] font-semibold uppercase tracking-[1px] text-accent">
                  {member.role}
                </div>
                <p className="font-light text-text-light">{member.bio}</p>
                <div className="mt-4 flex justify-center gap-3">
                  {member.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      title={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-[0.9rem] text-white transition-all duration-300 hover:scale-110 hover:rotate-[5deg] hover:bg-primary"
                    >
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
