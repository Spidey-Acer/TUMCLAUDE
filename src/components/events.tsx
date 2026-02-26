"use client";

import { events } from "@/data/site";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Events() {
  return (
    <section id="events" className="bg-light px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          title="Upcoming Events"
          subtitle="Stay updated with our latest meetups, workshops, and hackathons"
        />

        <div className="flex flex-col gap-6">
          {events.map((event, index) => (
            <ScrollReveal key={event.title} delay={index * 0.1}>
              <div className="cursor-pointer rounded-lg border-l-4 border-accent bg-white p-8 transition-all duration-300 hover:translate-x-2 hover:shadow-[0_8px_24px_rgba(9,123,62,0.1)]">
                <span className="mb-4 inline-block rounded-md bg-accent px-4 py-2 font-mono text-[0.85rem] font-semibold text-primary">
                  {event.date}
                </span>
                <h3 className="mb-2 text-2xl text-text-dark">{event.title}</h3>
                <p className="font-light text-text-light">
                  {event.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
