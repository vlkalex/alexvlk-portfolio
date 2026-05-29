import Image from "next/image";

export function CaseStudyHeader() {
  return (
    <section className="pb-16 pt-8">
      <div className="space-y-4">
        <div className="flex items-center gap-5">
          <Image
            src="/logos/sealed-market.png"
            alt="Sealed Market icon"
            width={80}
            height={80}
            priority
            className="h-auto w-auto rounded-[30px]"
          />
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Sealed Market
            </h1>
            <p className="text-base text-muted">
              TCG Portfolio & Price Tracker
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
