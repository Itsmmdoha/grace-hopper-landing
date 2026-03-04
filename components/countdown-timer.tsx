"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(deadline: string): TimeLeft {
  const difference = new Date(deadline).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-xl sm:rounded-2xl bg-card border border-border flex items-center justify-center shadow-sm">
        <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span className="text-xl sm:text-3xl md:text-5xl font-light text-muted-foreground mt-[-1rem] sm:mt-[-1.5rem]">
      :
    </span>
  );
}

function CountdownGrid({ timeLeft }: { timeLeft: TimeLeft }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-6">
      <TimeUnit value={timeLeft.days} label="Days" />
      <Colon />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <Colon />
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <Colon />
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
}

export function CountdownTimer({ deadline }: { deadline: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(deadline)
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  const isExpired =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (!mounted) {
    return (
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground mb-6 sm:mb-8">
            Registration Closes In
          </h2>
          <CountdownGrid
            timeLeft={{ days: 0, hours: 0, minutes: 0, seconds: 0 }}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground mb-6 sm:mb-8">
          {isExpired ? "Registration Closed" : "Registration Closes In"}
        </h2>
        {isExpired ? (
          <p className="text-xl sm:text-2xl font-serif italic text-primary">
            The registration deadline has passed.
          </p>
        ) : (
          <CountdownGrid timeLeft={timeLeft} />
        )}
      </div>
    </section>
  );
}
