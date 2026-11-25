/**
 * The hero's moment: what my software actually produces.
 * An order as Menú Digital composes it for WhatsApp (real items and prices from
 * the Tacos El Güero demo) and the RSVP count from the Convite demo.
 */

const ORDER = [
  { qty: 3, name: "Taco de adobada", total: 105 },
  { qty: 1, name: "Quesabirria", total: 55 },
  { qty: 1, name: "Agua de horchata grande", total: 50 },
];

const money = (n: number) => `$${n.toLocaleString("es-MX")}`;

function Line({ left, right, strong }: { left: string; right: string; strong?: boolean }) {
  return (
    <div className={strong ? "leader text-[#b4441c]" : "leader"}>
      <span className={strong ? "font-semibold" : undefined}>{left}</span>
      <span className="leader-fill" aria-hidden />
      <span className={strong ? "font-semibold tabular-nums" : "tabular-nums"}>{right}</span>
    </div>
  );
}

export function HeroTicket() {
  const total = ORDER.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="relative mx-auto w-full max-w-[400px] pb-24 lg:mr-0">
      {/* Order ticket */}
      <figure
        aria-label="Pedido de ejemplo enviado por WhatsApp desde Menú Digital"
        className="relative rotate-[1.5deg] drop-shadow-[0_16px_32px_rgba(31,27,22,0.14)]"
      >
        <div className="rounded-t-[4px] bg-ticket px-6 pb-5 pt-6 font-mono text-[13px] leading-6 text-[#2a241d]">
          <div className="mb-4 text-center">
            <div className="text-[15px] font-semibold">Tacos El Güero</div>
            <div className="text-[#6b6156]">Adobada al trompo desde 1998</div>
          </div>

          <div className="mb-3 flex justify-between border-y border-dashed border-[#2a241d]/25 py-2 text-[#6b6156]">
            <span>Pedido por WhatsApp</span>
            <span className="tabular-nums">#0142</span>
          </div>

          <div className="space-y-1">
            {ORDER.map((item) => (
              <Line key={item.name} left={`${item.qty}× ${item.name}`} right={money(item.total)} />
            ))}
          </div>

          <div className="mt-3 border-t border-dashed border-[#2a241d]/25 pt-3">
            <Line left="Total" right={`${money(total)} MXN`} strong />
          </div>

          <div className="mt-4 text-[#6b6156]">
            <div>Para llevar · paso a recoger</div>
            <div>Nombre: Andrea</div>
          </div>

          <a
            href="https://menu-tacos-el-guero.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-[12px] text-[#6b6156] underline decoration-dotted underline-offset-4 hover:text-[#2a241d]"
          >
            menu-tacos-el-guero.vercel.app
          </a>
        </div>
        <div className="ticket-edge" aria-hidden />
      </figure>

      {/* RSVP count from Convite */}
      <div className="absolute -left-6 bottom-0 w-[248px] -rotate-[2deg] rounded-[14px] border border-border bg-surface p-4 shadow-[0_8px_24px_rgba(31,27,22,0.10)] sm:-left-12">
        <div className="text-[13px] text-muted">Boda Valeria &amp; Eduardo</div>
        <div className="mt-1 text-[22px] font-medium tabular-nums">
          46 <span className="text-[15px] font-normal text-muted">de 91 lugares confirmados</span>
        </div>
        <div className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-surface-2">
          <div className="w-[51%] bg-foreground" />
          <div className="w-[16%] bg-faint/50" />
        </div>
        <div className="mt-2 font-mono text-[12px] text-faint">Convite · demo en vivo</div>
      </div>
    </div>
  );
}
