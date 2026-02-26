"use client";

import { navLinks } from "@/data/site";

export function Navbar() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[rgba(217,152,55,0.1)] bg-[rgba(10,14,39,0.95)] px-4 py-4 backdrop-blur-[10px] md:px-8">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <a
          href="#"
          className="font-heading text-2xl font-extrabold tracking-[-1px] text-accent transition-colors duration-300 hover:text-primary"
        >
          CLAUDE&apos;S CLUB
        </a>

        <ul className="flex list-none items-center gap-4 md:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="nav-link text-[0.95rem] font-medium text-white transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#join"
              onClick={(e) => handleClick(e, "#join")}
              className="inline-block rounded-md border-2 border-accent bg-accent px-6 py-3 text-[0.95rem] font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-accent hover:shadow-[0_8px_24px_rgba(216,152,55,0.2)]"
            >
              Join Club
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
