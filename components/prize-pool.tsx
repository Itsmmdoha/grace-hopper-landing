import { DecorativeStar } from "./decorative-star";
import { Trophy } from "lucide-react";

interface Prize {
  position: string;
  amount: string;
  currency: string;
  description: string;
}

interface PrizePoolProps {
  title: string;
  description: string;
  prizes: Prize[];
}

export function PrizePool({ title, description, prizes }: PrizePoolProps) {
  return (
    <section className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.85 0.1 350 / 0.15), transparent)",
        }}
        aria-hidden="true"
      />

      <DecorativeStar
        className="absolute top-16 left-[8%] text-primary opacity-30"
        size={12}
      />
      <DecorativeStar
        className="absolute bottom-20 right-[12%] text-foreground opacity-25"
        size={16}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
            <Trophy className="w-3.5 h-3.5" />
            Rewards
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-balance">
            {title}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
            {description}
          </p>
        </div>

        {/* Prize display */}
        <div className="flex justify-center">
          {prizes.map((prize, i) => (
            <div
              key={i}
              className="w-full max-w-md rounded-2xl border bg-gradient-to-b from-amber-400/20 to-amber-500/5 border-amber-400/40 p-8 sm:p-10 md:p-12 text-center transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="mx-auto mb-4 sm:mb-5 flex items-center justify-center rounded-full bg-card border border-border text-amber-500 h-14 w-14 sm:h-16 sm:w-16">
                <Trophy className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <div className="font-medium uppercase tracking-wider text-muted-foreground mb-3 text-xs sm:text-sm">
                {prize.position}
              </div>

              <div className="flex items-baseline justify-center gap-2 mb-4 sm:mb-5">
                <span className="font-bold text-foreground text-4xl sm:text-5xl md:text-6xl">
                  {prize.amount}
                </span>
                <span className="font-medium text-muted-foreground text-sm sm:text-base">
                  {prize.currency}
                </span>
              </div>

              <div className="mx-auto mb-4 h-px w-16 bg-border" />

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                {prize.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


