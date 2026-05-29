import type { ReactNode } from "react";

import { ExternalLink } from "./external-link";

interface TextLinkProps {
  children: ReactNode;
  href: string;
}

export function TextLink({ children, href }: Readonly<TextLinkProps>) {
  return <ExternalLink href={href}>{children}</ExternalLink>;
}
