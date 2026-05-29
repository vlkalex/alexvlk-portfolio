import Image from "next/image";

import type { Screenshot } from "@/types";

interface ScreenshotGridProps {
  screenshots: Screenshot[];
}

export function ScreenshotGrid({
  screenshots,
}: Readonly<ScreenshotGridProps>) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {screenshots.map((shot) => (
        <div
          key={shot.src}
          className="overflow-hidden rounded-lg border border-border bg-foreground/5"
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={320}
            height={693}
            className="h-auto w-full"
            priority
          />
        </div>
      ))}
    </div>
  );
}
