import Link from "next/link";

import { businessInfo, footerAddress, footerLinks } from "@/data/site-content";

type SiteFooterProps = {
  showAddress?: boolean;
};

export function SiteFooter({ showAddress = false }: SiteFooterProps) {
  return (
    <footer className="full-width rounded-none border-t border-[#C58E4E]/10 bg-[#121212]">
      <div className="mx-auto grid w-full max-w-360 gap-10 px-6 py-16 md:px-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-2xl border border-[#C58E4E]/12 bg-surface-container-high glass-panel reveal-up">
          <div className="border-b border-[#C58E4E]/10 px-6 py-5">
            <p className="font-label-md uppercase tracking-[0.28em] text-primary">Find Us Faster</p>
            <h2 className="mt-2 font-headline-md text-white">Interactive Location Map</h2>
          </div>
          <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
            <iframe
              aria-label={`${businessInfo.name} map`}
              className="min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={businessInfo.mapEmbedUrl}
            />
            <div className="flex flex-col justify-between gap-6 px-6 py-6">
              <div className="space-y-4">
                <div>
                  <p className="font-serif text-xl uppercase tracking-widest text-[#C58E4E]">{businessInfo.name}</p>
                  <p className="mt-2 max-w-sm font-body-md text-stone-400">{businessInfo.tagline}</p>
                </div>
                <div className="space-y-3 text-sm text-stone-300">
                  <p>{footerAddress}</p>
                  <p>{businessInfo.phone}</p>
                  <p>{businessInfo.email}</p>
                </div>
              </div>
              <a className="inline-flex w-fit items-center gap-3 bg-primary-container px-6 py-3 font-label-md uppercase tracking-[0.18em] text-on-primary-fixed copper-gradient glow-button" href={businessInfo.directionsUrl} rel="noreferrer" target="_blank">
                Yol Tarifi Al
                <span className="material-symbols-outlined text-sm">north_east</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-4 text-center md:text-left reveal-up reveal-stagger-1">
            <div className="font-serif text-xl uppercase tracking-widest text-[#C58E4E]">{businessInfo.name}</div>
            {showAddress && <p className="max-w-xs font-serif text-sm text-stone-500">{footerAddress}</p>}
          </div>
          <div className="flex flex-wrap justify-center gap-8 reveal-up reveal-stagger-2 md:justify-start">
            {footerLinks.map((link) => (
              <Link key={link.label} className="font-serif text-sm tracking-normal text-stone-500 transition-colors duration-500 glow-hover hover:text-white" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="font-serif text-sm tracking-normal text-stone-400 reveal-up reveal-stagger-3">© 2026 {businessInfo.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}