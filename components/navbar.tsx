import Link from "next/link";
import Image from "next/image";

export function Navbar({ host, registrationUrl }: { host: string; registrationUrl: string }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="flex items-center gap-2">
        <Image
          src="/web-logo.png"
          alt="Grace Hopper Logo"
          width={56}
          height={56}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex-shrink-0 object-cover"
        />
        <span className="font-serif text-sm sm:text-lg font-bold text-foreground truncate">
          Grace Hopper Mindstorm 2.0
        </span>
      </div>

      <div className="hidden md:flex items-center gap-1">
        <Link
          href="#about"
          className="px-4 py-1.5 text-sm rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
        >
          About
        </Link>
        <Link
          href="#timeline"
          className="px-4 py-1.5 text-sm rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
        >
          Timeline
        </Link>
        <Link
          href="#past-event"
          className="px-4 py-1.5 text-sm rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
        >
          Past Events
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <span className="hidden lg:inline text-xs text-muted-foreground">
          {host}
        </span>
        <Link
          href={registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
