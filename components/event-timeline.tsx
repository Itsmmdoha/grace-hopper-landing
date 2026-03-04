import type { TimelineRound } from "@/lib/config";
import { DecorativeStar } from "./decorative-star";

interface TimelineProps {
  rounds: TimelineRound[];
}

export function EventTimeline({ rounds }: TimelineProps) {
  return (
    <section id="timeline" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      <DecorativeStar
        className="absolute top-16 right-[10%] text-foreground opacity-30 hidden sm:block"
        size={14}
      />
      <DecorativeStar
        className="absolute bottom-20 left-[8%] text-foreground opacity-25 hidden sm:block"
        size={18}
      />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
            Event Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Competition{" "}
            <span className="font-serif italic text-primary">Timeline</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6 sm:gap-8">
            {rounds.map((round, i) => (
              <div key={i} className="relative flex gap-4 sm:gap-6">
                {/* Dot on the line */}
                <div className="relative z-10 flex-shrink-0 flex items-start">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-sm">
                    <span className="text-sm sm:text-xl font-bold text-primary">
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <div className="p-5 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3">
                      <h3 className="text-base sm:text-lg font-bold text-foreground">
                        {round.round}
                      </h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                          {round.date}, 3:30 p.m.
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                          {round.mode}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {round.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
