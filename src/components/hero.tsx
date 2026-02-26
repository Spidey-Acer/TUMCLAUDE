"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="deco-hero mt-[80px] bg-gradient-to-br from-primary to-primary-dark px-8 py-16 text-white md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-[2] mx-auto max-w-[1200px]"
      >
        <div className="max-w-[800px]">
          <p className="mb-4 font-mono text-[0.95rem] font-medium uppercase tracking-[2px] text-accent">
            {heroContent.subtitle}
          </p>
          <h1 className="mb-6 text-[2rem] leading-[1.1] text-white md:text-[3.5rem]">
            {heroContent.title}
          </h1>
          <p className="mb-8 max-w-[600px] text-[1.1rem] font-light text-white/90">
            {heroContent.description}
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <Button href={heroContent.primaryCta.href} variant="primary">
              {heroContent.primaryCta.label}
            </Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
