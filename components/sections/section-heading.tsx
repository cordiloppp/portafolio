import { Reveal } from "@/components/motion/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
}

/** Shared eyebrow + title + intro block used by every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <>
      <Reveal className="mb-3.5 font-mono text-[13px] uppercase tracking-wider text-accent">
        {eyebrow}
      </Reveal>
      <Reveal className="mb-4 font-display text-[clamp(1.875rem,4vw,2.75rem)] font-semibold tracking-[-0.02em]">
        <h2>{title}</h2>
      </Reveal>
      {description ? (
        <Reveal className="mb-12 max-w-[600px] text-[17px] text-muted">
          {description}
        </Reveal>
      ) : null}
    </>
  );
}
