import {
  Calendar,
  MapPin,
  Users,
  Award,
  Sparkles,
  Clock, // Keep the Clock icon
} from "lucide-react";
import { RegisterButton } from "./register-button";

interface EventInfoProps {
  name: string;
  date: string;
  // Removed time from props since it's hardcoded now
  deadline: string;
  venue: string;
  eligibility: string;
  certification_text: string;
  highlights: string[];
  registration_url: string;
}

export function EventInfo({
  name,
  date,
  deadline,
  venue,
  eligibility,
  certification_text,
  highlights,
  registration_url,
}: EventInfoProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
            Event Details
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-balance">
            About the{" "}
            <span className="font-serif italic text-primary">Event</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Left: Details */}
          <div className="flex flex-col gap-3 sm:gap-5">
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Date & Time</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                  <p className="text-muted-foreground text-sm">{formattedDate}</p>
                  <span className="hidden sm:inline text-border">•</span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="w-3.5 h-3.5" />
                    <span>3:30 p.m.</span> {/* Hardcoded time here */}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Venue</h3>
                <p className="text-muted-foreground text-sm">{venue}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Eligibility</h3>
                <p className="text-muted-foreground text-sm">{eligibility}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Certification</h3>
                <p className="text-muted-foreground text-sm">
                  {certification_text}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Highlights + CTA */}
          <div className="flex flex-col gap-6">
            <div className="p-8 rounded-2xl bg-card border border-border h-full flex flex-col">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Event Highlights
              </h3>
              <ul className="flex flex-col gap-4 flex-1">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div id="register" className="mt-8 pt-6 border-t border-border flex justify-center">
                <RegisterButton
                  deadline={deadline}
                  registrationUrl={registration_url}
                  variant="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}