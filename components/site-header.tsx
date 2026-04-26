import Link from "next/link";

import { navItems } from "@/data/site-content";

type SiteHeaderProps = {
  currentPath: string;
  reserveMode?: "button" | "inline";
};

export function SiteHeader({ currentPath, reserveMode = "button" }: SiteHeaderProps) {
  const isActive = (href: string, match?: string) => {
    if (!match) {
      return false;
    }

    return currentPath === match;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#C58E4E]/10 bg-[#121212]/90 shadow-[0_10px_30px_-10px_rgba(197,142,78,0.08)] backdrop-blur-md" data-glass="nav">
      <nav className="mx-auto flex h-24 w-full max-w-360 items-center justify-between px-6 md:px-12">
        <Link className="font-serif text-2xl uppercase tracking-[0.2em] text-[#C58E4E]" href="/">
          Botanica Garden
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href, item.match);

            return (
              <Link
                key={item.label}
                className={active
                  ? "border-b border-[#C58E4E] pb-1 font-medium uppercase text-xs tracking-widest text-[#C58E4E]"
                  : "font-medium uppercase text-xs tracking-widest text-stone-400 transition-all duration-300 ease-in-out hover:text-[#C58E4E] glow-hover"}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}

          {reserveMode === "inline" && (
            <Link
              className={currentPath === "/reservations"
                ? "border-b border-[#C58E4E] pb-1 font-medium uppercase text-xs tracking-widest text-[#C58E4E]"
                : "font-medium uppercase text-xs tracking-widest text-stone-400 transition-all duration-300 ease-in-out hover:text-[#C58E4E] glow-hover"}
              href="/reservations"
            >
              Rezervasyon
            </Link>
          )}
        </div>

        {reserveMode === "button" && (
          <Link className="bg-primary-container px-8 py-3 font-label-md uppercase tracking-widest text-on-primary-container copper-gradient glow-button transition-all duration-300 hover:bg-opacity-90 copper-glow" href="/reservations">
            Rezervasyon
          </Link>
        )}
      </nav>
    </header>
  );
}