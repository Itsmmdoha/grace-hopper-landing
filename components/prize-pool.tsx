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
  // Split into top 3 and remaining
  const top3 = prizes.slice(0, 3);
  const remaining = prizes.slice(3);

  // Reorder top 3 for desktop podium: 2nd, 1st, 3rd
  const podiumOrder = top3.length >= 3 ? [top3[1], top3[0], top3[2]] : top3;

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

        {/* Top 3 - mobile: stacked, desktop: podium */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:hidden">
          {top3.map((prize, i) => (
            <PrizeCard key={i} prize={prize} rank={i} isCenter={i === 0} />
          ))}
        </div>

        <div className="hidden md:flex items-end justify-center gap-6">
          {podiumOrder.map((prize) => {
            const originalIndex = prizes.indexOf(prize);
            return (
              <PrizeCard
                key={originalIndex}
                prize={prize}
                rank={originalIndex}
                isCenter={originalIndex === 0}
              />
            );
          })}
        </div>

        {/* Remaining positions (4th, 5th, 6th, etc.) - centered rows of 3 */}
        {remaining.length > 0 && (
          <div className="mt-5 sm:mt-6 md:mt-8 flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
            {remaining.map((prize, i) => {
              const originalIndex = i + 3;
              return (
                <PrizeCard
                  key={originalIndex}
                  prize={prize}
                  rank={originalIndex}
                  isCenter={false}
                  isRunnerUp
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function PrizeCard({
  prize,
  rank,
  isCenter,
  isRunnerUp = false,
}: {
  prize: Prize;
  rank: number;
  isCenter: boolean;
  isRunnerUp?: boolean;
}) {
  const rankColors = [
    "from-amber-400/20 to-amber-500/5 border-amber-400/40",
    "from-slate-300/20 to-slate-400/5 border-slate-400/30",
    "from-orange-300/20 to-orange-400/5 border-orange-400/30",
  ];
  const iconColors = ["text-amber-500", "text-slate-400", "text-orange-400"];
  const runnerUpColor = "from-muted/40 to-muted/10 border-border";
  const runnerUpIconColor = "text-muted-foreground";

  const colorClass = rank < 3 ? (rankColors[rank] ?? rankColors[2]) : runnerUpColor;
  const iconColor = rank < 3 ? (iconColors[rank] ?? iconColors[2]) : runnerUpIconColor;

  return (
    <div
      className={`
        ${isRunnerUp
          ? "w-full sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-1rem)] max-w-[280px]"
          : "w-full md:w-[280px] lg:w-[300px]"
        }
        ${isCenter ? "md:scale-110 md:z-10" : "md:opacity-90"}
        rounded-2xl border bg-gradient-to-b
        ${isRunnerUp ? "p-4 sm:p-5 md:p-6" : "p-5 sm:p-6 md:p-8"}
        text-center transition-all duration-300
        hover:scale-[1.02] md:hover:scale-[1.05]
        ${colorClass}
      `}
    >
      {/* Trophy icon */}
      <div
        className={`mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-full bg-card border border-border ${iconColor} ${
          isRunnerUp ? "h-10 w-10 sm:h-11 sm:w-11" : "h-12 w-12 sm:h-14 sm:w-14"
        }`}
      >
        <Trophy className={isRunnerUp ? "h-4 w-4 sm:h-5 sm:w-5" : "h-5 w-5 sm:h-6 sm:w-6"} />
      </div>

      {/* Position */}
      <div className={`font-medium uppercase tracking-wider text-muted-foreground mb-2 ${
        isRunnerUp ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"
      }`}>
        {prize.position}
      </div>

      {/* Amount - highlighted */}
      <div className="flex items-baseline justify-center gap-1.5 mb-3 sm:mb-4">
        <span className={`font-bold text-foreground ${
          isRunnerUp ? "text-2xl sm:text-3xl md:text-3xl" : "text-3xl sm:text-4xl md:text-5xl"
        }`}>
          {prize.amount}
        </span>
        <span className={`font-medium text-muted-foreground ${
          isRunnerUp ? "text-xs sm:text-sm" : "text-sm sm:text-base"
        }`}>
          {prize.currency}
        </span>
      </div>

      {/* Divider */}
      <div className="mx-auto mb-3 sm:mb-4 h-px w-12 bg-border" />

      {/* Description */}
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty">
        {prize.description}
      </p>
    </div>
  );
}
