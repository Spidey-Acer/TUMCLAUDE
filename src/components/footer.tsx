import {
  footerSections,
  footerContact,
  footerSocials,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-dark px-8 pb-8 pt-16 text-white">
      <div className="mx-auto mb-12 grid max-w-[1200px] grid-cols-1 gap-12 border-b border-[rgba(217,152,55,0.1)] pb-12 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {/* Brand */}
        <div>
          <h3 className="mb-6 font-heading text-2xl font-bold text-accent">
            CLAUDE&apos;S CLUB
          </h3>
          <p className="text-white/70">Innovating. Collaborating. Creating.</p>
          <p className="mt-4 text-[0.9rem] text-white/50">
            Technical University of Mombasa
          </p>
        </div>

        {/* Link sections */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-6 font-heading text-2xl font-bold text-accent">
              {section.title}
            </h3>
            <ul className="list-none">
              {section.links.map((link) => (
                <li key={link.label} className="mb-3">
                  <a
                    href={link.href}
                    className="text-white/70 transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h3 className="mb-6 font-heading text-2xl font-bold text-accent">
            Contact
          </h3>
          <ul className="list-none">
            <li className="mb-3">
              Email:{" "}
              <a
                href={`mailto:${footerContact.email}`}
                className="text-white/70 transition-colors duration-300 hover:text-accent"
              >
                {footerContact.email}
              </a>
            </li>
            <li className="mb-3 text-white/70">
              Phone: {footerContact.phone}
            </li>
            <li className="mb-3 text-white/70">
              Location: {footerContact.location}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 text-center md:flex-row">
        <p className="text-[0.9rem] text-white/60">
          &copy; 2024 CLAUDE&apos;S CLUB. All rights reserved. | TUM Official
          Club
        </p>
        <div className="flex gap-4">
          {footerSocials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              title={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-accent"
            >
              {social.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
