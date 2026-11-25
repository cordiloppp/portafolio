import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

const facts = [
  { label: "Dónde", value: siteConfig.location },
  { label: "Estudio", value: siteConfig.studies },
  { label: "Busco", value: siteConfig.seeking },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1160px] scroll-mt-16 px-6 py-24 md:px-10">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <Reveal>
          <h2 className="mb-6 font-display text-[36px] leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
            Sobre mí
          </h2>
          <div className="flex max-w-[600px] flex-col gap-5 text-[17px] leading-[28px] text-muted">
            <p>
              Estoy por terminar Ingeniería en Software. Mientras estudio, hago
              sitios y sistemas para negocios de mi ciudad: taquerías,
              reposterías, una plomería en San Diego y familias que organizan
              bodas y XV años.
            </p>
            <p>
              Trabajar con clientes reales me enseñó a priorizar lo que de
              verdad usan, como un pedido que llega completo por WhatsApp. Me
              interesa el diseño de sistemas y escribir código que otra persona
              pueda mantener. Busco mi primer puesto en un equipo donde pueda
              aportar desde el primer día y seguir aprendiendo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="self-end">
          <dl className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 text-[15px]">
            {facts.map((fact) => (
              <div key={fact.label} className="leader">
                <dt className="text-faint">{fact.label}</dt>
                <span className="leader-fill" aria-hidden />
                <dd className="text-right">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
