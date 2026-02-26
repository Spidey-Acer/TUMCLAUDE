interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-[1.8rem] leading-[1.2] text-text-dark md:text-[2.5rem]">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-[600px] text-[1.1rem] text-text-light">
        {subtitle}
      </p>
    </div>
  );
}
