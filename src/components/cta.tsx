"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section
      id="join"
      className="deco-cta bg-gradient-to-br from-primary to-primary-dark px-6 py-16 text-center text-white md:px-8 md:py-24"
    >
      <ScrollReveal className="relative z-[2] mx-auto max-w-[800px]">
        <h2 className="mb-4 text-[1.8rem] leading-[1.2] text-white md:text-[2.5rem]">
          Ready to Join CLAUDE&apos;S CLUB?
        </h2>
        <p className="mb-8 text-[1.1rem] font-light text-white/90">
          Be part of a community that&apos;s shaping the future of technology at
          TUM. Let&apos;s build something amazing together.
        </p>
        <Button href="mailto:info@claudesclub.tum.ac.ke" variant="primary">
          Get In Touch
        </Button>
      </ScrollReveal>
    </section>
  );
}
