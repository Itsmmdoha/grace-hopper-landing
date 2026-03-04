import { DecorativeStar } from "./decorative-star";

interface PastEventProps {
  name: string;
  participants: string;
  description: string;
  stats: { label: string; value: string }[];
}

export function PastEvent({
  name,
  participants,
  description,
  stats,
}: PastEventProps) {
  return (
    <section id="past-event" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, oklch(0.95 0.015 350 / 0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <DecorativeStar
        className="absolute top-20 right-[12%] text-foreground opacity-40"
        size={14}
      />
      <DecorativeStar
        className="absolute bottom-24 left-[10%] text-foreground opacity-30"
        size={18}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
            Our Legacy
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-balance">
            {"The Success of "}
            <span className="font-serif italic text-primary">{name}</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.75rem)] md:w-auto md:flex-1 max-w-[260px] p-4 sm:p-6 md:p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured callout */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-8 md:p-12 rounded-2xl bg-card border border-border text-center">
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground">
            {"Around "}
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              {participants}
            </span>
            {" students participated in our previous edition, making it one of the largest analytical events at BRAC University."}
          </p>
        </div>
      </div>
    </section>
  );
}
