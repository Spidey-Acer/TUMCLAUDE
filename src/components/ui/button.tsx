import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block rounded-md px-6 py-3 text-[0.95rem] font-semibold border-2 transition-all duration-300 cursor-pointer text-center";

  const variants = {
    primary:
      "bg-accent text-primary border-accent hover:bg-transparent hover:text-accent hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(216,152,55,0.2)]",
    secondary:
      "bg-transparent text-accent border-accent hover:bg-accent hover:text-primary hover:-translate-y-0.5",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
