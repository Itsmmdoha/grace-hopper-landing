interface FooterProps {
  credit: string;
  year: number;
  website: string;
}

export function SiteFooter({ credit, year, website }: FooterProps) {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-xs">
              GH
            </span>
          </div>
          <span className="font-serif text-sm sm:text-base font-bold text-foreground">
            Grace Hopper Mindstorm
          </span>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground text-center">
          {"Crafted with care by "}
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            {credit}
          </a>
        </p>

        <p className="text-[10px] sm:text-xs text-muted-foreground">
          {"\u00A9"} {year} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
