import { DecorativeStar } from "./decorative-star";
import { RegisterButton } from "./register-button";

interface HeroProps {
  title: string;
  subtitle: string;
  tagline: string;
  presentedBy: string;
  description: string;
  deadline: string;
  registrationUrl: string;
}

export function HeroSection({
  title,
  subtitle,
  tagline,
  presentedBy,
  description,
  deadline,
  registrationUrl,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden dot-grid">
      {/* Gradient overlays */}
      <div
        className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.15 350 / 0.4), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.15 30 / 0.4), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative stars */}
      <DecorativeStar
        className="absolute top-32 left-[15%] text-foreground opacity-60 hidden sm:block"
        size={16}
      />
      <DecorativeStar
        className="absolute top-48 right-[20%] text-foreground opacity-40 hidden sm:block"
        size={12}
      />
      <DecorativeStar
        className="absolute bottom-40 left-[25%] text-foreground opacity-50"
        size={14}
      />
      <DecorativeStar
        className="absolute bottom-60 right-[15%] text-foreground opacity-30"
        size={10}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
          By BRAC University Computer Club
        </div>

        {/* Presented by */}
        <p className="text-sm sm:text-base uppercase tracking-widest text-muted-foreground mb-3">
          {presentedBy}
        </p>

        <h1>
          <img
            src="/grace-hopper-logo.png"
            alt="Grace Hopper Mindstorm 2.0"
            width="851"
            height="368"
            className="mx-auto w-full max-w-[300px] sm:max-w-[560px] lg:max-w-[800px] h-auto"
          />
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-serif italic text-muted-foreground">
          {tagline}
        </p>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
          {description}
        </p>

        <div className="mt-8 sm:mt-10">
          <RegisterButton
            deadline={deadline}
            registrationUrl={registrationUrl}
            variant="dark"
          />
        </div>
      </div>

      {/* Decorative sphere */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] translate-x-[20%] translate-y-[20%] pointer-events-none" aria-hidden="true">
        <div
          className="w-full h-full rounded-full border border-foreground/10 relative overflow-hidden"
          style={{
            background:
              "conic-gradient(from 180deg, oklch(0.88 0.12 30), oklch(0.72 0.18 350), oklch(0.55 0.2 280), oklch(0.78 0.12 30))",
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 30% 30%, oklch(1 0 0 / 0.3), transparent 60%)",
            }}
          />
        </div>
        {/* Orbit ring */}
        <div className="absolute inset-[-15%] border border-foreground/10 rounded-full -rotate-12" />
      </div>
    </section>
  );
}
