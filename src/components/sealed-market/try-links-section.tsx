import { ExternalLink } from "@/components/ui/external-link";
import { SectionHeading } from "@/components/ui/section-heading";

interface TryLinksSectionProps {
  appStoreUrl: string;
  playStoreUrl: string;
  websiteUrl: string;
}

export function TryLinksSection({
  appStoreUrl,
  playStoreUrl,
  websiteUrl,
}: Readonly<TryLinksSectionProps>) {
  return (
    <section className="pb-16">
      <div className="space-y-3">
        <SectionHeading>Try it</SectionHeading>
        <div className="flex flex-wrap gap-4">
          <ExternalLink href={appStoreUrl}>App Store</ExternalLink>
          <ExternalLink href={playStoreUrl}>Play Store</ExternalLink>
          <ExternalLink href={websiteUrl}>Website</ExternalLink>
        </div>
      </div>
    </section>
  );
}
