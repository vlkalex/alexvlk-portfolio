import type { ReactNode } from "react";

import { ThemeToggle } from "@/components/theme-toggle";

interface PageLayoutProps {
  children: ReactNode;
  footer: ReactNode;
}

export function PageLayout({ children, footer }: Readonly<PageLayoutProps>) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-170 flex-col px-6 sm:px-8">
      <header className="fixed right-6 top-6 z-10 sm:right-8">
        <ThemeToggle />
      </header>

      {children}

      <footer className="py-10 text-center text-sm text-muted">{footer}</footer>
    </main>
  );
}
