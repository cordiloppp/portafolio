import { Reveal } from "@/components/motion/reveal";

interface SectionHeadingProps {
  title: string;
  description?: React.ReactNode;
}

/** Shared title + intro block used by every section. */
export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-[640px]">
      <h2 className="font-display text-[36px] leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[17px] leading-[28px] text-muted">{description}</p>
      ) : null}
    </Reveal>
  );
}
