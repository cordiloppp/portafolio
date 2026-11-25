import { Reveal } from "@/components/motion/reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1160px] px-6 py-20 md:px-10">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1fr_1.4fr]">
        <Reveal className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-2">
          <div
            aria-hidden
            className="absolute inset-0 opacity-50 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px]"
          />
          {/* Replace with <Image src="/photo.jpg" ... /> when you add a photo. */}
          <span className="relative font-display text-[clamp(4rem,12vw,7rem)] font-semibold tracking-[-0.04em] text-accent">
            JM
          </span>
        </Reveal>

        <div>
          <Reveal className="mb-3.5 font-mono text-[13px] uppercase tracking-wider text-accent">
            04 / About
          </Reveal>
          <Reveal className="mb-6 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em]">
            <h2>Mi enfoque como ingeniero</h2>
          </Reveal>
          <Reveal className="mb-5 text-[17px] leading-[1.7] text-muted">
            Próximo a graduarme en Ingeniería en Software. Me interesa el diseño
            de sistemas, las buenas prácticas y escribir código mantenible más
            que solo &ldquo;que funcione&rdquo;.
          </Reveal>
          <Reveal className="text-[17px] leading-[1.7] text-muted">
            Busco mi primera posición como Junior, Trainee o Intern donde pueda
            aportar, aprender de un equipo y crecer técnicamente.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
