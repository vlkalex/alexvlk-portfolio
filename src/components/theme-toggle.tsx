"use client";

import { useTheme } from "next-themes";

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M20.54 15.4A8.5 8.5 0 0 1 8.6 3.46 8.5 8.5 0 1 0 20.54 15.4Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted hover:border-foreground hover:text-foreground"
      onClick={() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "light" : "dark");
      }}
      type="button"
    >
      <span className="hidden dark:block">
        <SunIcon />
      </span>
      <span className="dark:hidden">
        <MoonIcon />
      </span>
    </button>
  );
}
