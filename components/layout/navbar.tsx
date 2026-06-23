"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b px-6 py-[18px] transition-all duration-300 md:px-10",
        scrolled
          ? "border-border bg-background/75 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Link
        href="#top"
        className="font-mono text-[15px] font-semibold tracking-tight text-foreground"
      >
        {siteConfig.logo}
      </Link>

      <div className="flex items-center gap-5 md:gap-7">
        <ul className="hidden items-center gap-7 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-[13px] text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <a
          href={siteConfig.links.resume}
          className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
        >
          Resume ↗
        </a>
      </div>
    </nav>
  );
}
