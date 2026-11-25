"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: theme is only known on the client.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex size-9 items-center justify-center rounded-[10px] text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-[18px]" strokeWidth={1.5} aria-hidden />
        ) : (
          <Moon className="size-[18px]" strokeWidth={1.5} aria-hidden />
        )
      ) : (
        <span className="size-4" />
      )}
    </button>
  );
}
