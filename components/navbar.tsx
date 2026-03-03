import Link from "next/link";

export function Navbar({ host }: { host: string }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">GH</span>
        </div>
        <span className="font-serif text-lg font-bold text-foreground">
          Grace Hopper
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
          href="#past-event"
          className="px-4 py-1.5 text-sm rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
        >
          Past Events
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <span className="hidden sm:inline text-xs text-muted-foreground">
          {host}
        </span>
        <Link
          href="#register"
          className="px-4 py-1.5 text-sm rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
