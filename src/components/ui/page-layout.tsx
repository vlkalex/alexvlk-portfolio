import type { ReactNode } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "./logo";

interface PageLayoutProps {
  children: ReactNode;
  footer: ReactNode;
}

export function PageLayout({ children, footer }: Readonly<PageLayoutProps>) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-170 flex-col px-6 sm:px-8">
      <header className="flex flex-row flex-1 items-center justify-between py-10">
        <Logo />
        <ThemeToggle />
      </header>

      {children}

      <footer className="py-10 text-center text-sm text-muted">{footer}</footer>
    </main>
  );
}
