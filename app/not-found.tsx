import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1160px] flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-[13px] uppercase tracking-wider text-accent">
        404
      </span>
      <h1 className="mb-4 mt-3 font-display text-[clamp(2rem,5vw,3rem)] font-semibold tracking-[-0.02em]">
        Página no encontrada
      </h1>
      <p className="mb-8 max-w-[420px] text-[17px] text-muted">
        La ruta que buscas no existe o fue movida.
      </p>
      <Link href="/" className={cn(buttonVariants({ variant: "primary" }))}>
        Volver al inicio
      </Link>
    </main>
  );
}
