"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface RegisterButtonProps {
  deadline: string;
  registrationUrl: string;
  className?: string;
  variant?: "dark" | "primary";
}

export function RegisterButton({
  deadline,
  registrationUrl,
  className = "",
  variant = "dark",
}: RegisterButtonProps) {
  const [expired, setExpired] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => {
      setExpired(new Date(deadline).getTime() <= Date.now());
    };
    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  if (!mounted) {
    return null;
  }

  const base =
    variant === "dark"
      ? "bg-foreground text-background"
      : "bg-primary text-primary-foreground";

  if (expired) {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setShowMessage(true)}
          className={`inline-flex items-center gap-2 px-10 py-4 rounded-full ${base} text-lg font-medium opacity-70 cursor-not-allowed`}
          aria-disabled="true"
        >
          Registration Closed
        </button>
        {showMessage && (
          <div className="mt-4 p-4 rounded-xl bg-card border border-border text-sm text-muted-foreground max-w-md absolute top-full left-0 z-50">
            {
              "We're sorry, but the registration deadline for the programming contest has passed. Registration is no longer available."
            }
            <button
              onClick={() => setShowMessage(false)}
              className="ml-2 text-primary hover:underline text-xs"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      // The wrapper handles the outer pill shape, the 2px border thickness (p-[2px]), and the ambient pink shadow glow
      className={`group relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden hover:scale-[1.02] transition-transform duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(236,72,153,0.25)] hover:shadow-[0_0_30px_rgba(236,72,153,0.45)] ${className}`}
    >
      {/* The Spinning Gradient Background */}
      {/* We make it massive (inset-[-1000%]) so the corners never show as it rotates inside the pill shape */}
      <span
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec4899_0%,#d946ef_33%,#a855f7_66%,#ec4899_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Inner Solid Button */}
      {/* This sits on top of the spinner, leaving exactly 2px of the spinning gradient visible at the edges */}
      <span
        className={`relative flex items-center justify-center gap-2 px-10 py-4 rounded-full w-full h-full text-lg font-semibold ${base}`}
      >
        Register Closed
        {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
      </span>
    </a>
  );
}
