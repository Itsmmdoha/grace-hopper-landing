import Image from "next/image";

interface Sponsor {
  name: string;
  logo_url?: string;
  url?: string;
}

interface SponsorsProps {
  title: string;
  contactEmail: string;
  list: Sponsor[];
}

export function SponsorsSection({ title, contactEmail, list }: SponsorsProps) {
  return (
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
          Partners
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12">
          {title}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {list.map((sponsor, i) => {
            const content = (
              <div
                className="px-10 py-6 rounded-2xl bg-card border border-border flex items-center justify-center min-w-[160px] hover:border-primary/30 transition-colors"
              >
                {sponsor.logo_url ? (
                  <Image
                    src={sponsor.logo_url}
                    alt={sponsor.name}
                    width={143}
                    height={50}
                    className="h-[50px] w-auto object-contain"
                    unoptimized
                  />
                ) : (
                  <span className="text-lg font-semibold text-muted-foreground">
                    {sponsor.name}
                  </span>
                )}
              </div>
            );

            if (sponsor.url) {
              return (
                <a
                  key={i}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${sponsor.name}`}
                >
                  {content}
                </a>
              );
            }

            return <div key={i}>{content}</div>;
          })}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Interested in sponsoring?{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-primary hover:underline"
          >
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
}
