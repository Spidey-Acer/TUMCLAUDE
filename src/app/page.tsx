import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Events } from "@/components/events";
import { Members } from "@/components/members";
import { Projects } from "@/components/projects";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Members />
      <Projects />
      <CTA />
      <Footer />
    </>
  );
}
