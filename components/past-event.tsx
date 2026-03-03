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
    <section id="past-event" className="relative py-20 md:py-32 px-6 overflow-hidden">
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
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
            Our Legacy
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            {"The Success of "}
            <span className="font-serif italic text-primary">{name}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl md:text-5xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured callout */}
        <div className="mt-12 p-8 md:p-12 rounded-2xl bg-card border border-border text-center">
          <p className="text-lg md:text-xl text-muted-foreground">
            {"Around "}
            <span className="text-2xl md:text-3xl font-bold text-foreground">
              {participants}
            </span>
            {" students participated in our previous edition, making it one of the largest analytical events at BRAC University."}
          </p>
        </div>
      </div>
    </section>
  );
}
