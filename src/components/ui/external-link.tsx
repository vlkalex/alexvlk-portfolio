import type { ReactNode } from "react";

interface ExternalLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export function ExternalLink({
  children,
  href,
  className = "text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline",
}: Readonly<ExternalLinkProps>) {
  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
