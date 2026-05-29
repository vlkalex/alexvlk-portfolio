import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export function SectionHeading({ children }: Readonly<SectionHeadingProps>) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
      {children}
    </h2>
  );
}
