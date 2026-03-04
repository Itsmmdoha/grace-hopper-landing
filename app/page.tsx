import { getEventConfig } from "@/lib/config";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { CountdownTimer } from "@/components/countdown-timer";
import { EventInfo } from "@/components/event-info";
import { EventTimeline } from "@/components/event-timeline";
import { PrizePool } from "@/components/prize-pool";
import { PastEvent } from "@/components/past-event";
import { SponsorsSection } from "@/components/sponsors-section";
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const config = getEventConfig();

  return (
    <main className="min-h-screen">
      <Navbar host={config.event.host} />

      <HeroSection
        title={config.hero.title}
        subtitle={config.hero.subtitle}
        tagline={config.hero.tagline}
        presentedBy={config.hero.presented_by}
        description={config.hero.description}
        deadline={config.event.deadline}
        registrationUrl={config.event.registration_url}
      />

      <CountdownTimer deadline={config.event.deadline} />

      <Separator className="max-w-5xl mx-auto" />

      <EventInfo
        name={config.event.name}
        date={config.event.date}
        deadline={config.event.deadline}
        venue={config.event.venue}
        eligibility={config.event.eligibility}
        certification_text={config.event.certification_text}
        highlights={config.event.highlights}
        registration_url={config.event.registration_url}
      />

      <Separator className="max-w-5xl mx-auto" />

      <EventTimeline rounds={config.timeline} />

      <Separator className="max-w-5xl mx-auto" />

      <PrizePool
        title={config.prize_pool.title}
        description={config.prize_pool.description}
        prizes={config.prize_pool.prizes}
      />

      <Separator className="max-w-5xl mx-auto" />

      <PastEvent
        name={config.past_event.name}
        participants={config.past_event.participants}
        description={config.past_event.description}
        stats={config.past_event.stats}
      />

      <Separator className="max-w-5xl mx-auto" />

      <SponsorsSection
        title={config.sponsors.title}
        contactEmail={config.sponsors.contact_email}
        list={config.sponsors.list}
      />

      <SiteFooter
        credit={config.footer.credit}
        year={config.footer.year}
        website={config.footer.website}
      />
    </main>
  );
}
