
import Image from "next/image";

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
          <Image
            src="/web-logo.png"
            alt="Grace Hopper Logo"
            width={56}
            height={56}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex-shrink-0 object-cover"
          />
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
