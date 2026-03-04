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
      <div className="relative">
        <button
          onClick={() => setShowMessage(true)}
          className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full ${base} text-base font-medium opacity-70 cursor-not-allowed ${className}`}
          aria-disabled="true"
        >
          Registration Closed
        </button>
        {showMessage && (
          <div className="mt-4 p-4 rounded-xl bg-card border border-border text-sm text-muted-foreground max-w-md">
            {"We're sorry, but the registration deadline for the programming contest has passed. Registration is no longer available."}
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
      href={registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full ${base} text-base font-medium hover:opacity-90 transition-opacity ${className}`}
    >
      Register Now
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}
