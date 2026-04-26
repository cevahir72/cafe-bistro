import { SiteImage } from "@/components/site-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { galleryItems } from "@/data/site-content";

export default function GalleryPage() {
  return (
    <>
      <div className="fixed inset-0 z-[9999] grain-overlay" />
      <SiteHeader currentPath="/gallery" />

      <main className="bg-surface pb-24 pt-32 font-body-md text-on-surface selection:bg-primary-container/30">
        <header className="mx-auto mb-20 max-w-360 px-6 text-center md:px-12">
          <span className="mb-4 block font-label-md uppercase tracking-[0.3em] text-primary reveal-up">Görsel Deneyim</span>
          <h1 className="mb-6 font-headline-xl text-on-surface reveal-up reveal-stagger-1">Atmosferin Zarafeti</h1>
          <p className="mx-auto max-w-2xl font-body-lg text-on-surface-variant reveal-up reveal-stagger-2">Ay ışığı, yeşillik ve mutfak sanatı arasındaki uyumu keşfedin. Her kare, Botanica Garden'in sakin ve özenli ruhunu yansıtır.</p>
        </header>

        <section className="mx-auto max-w-360 px-6 md:px-12">
          <div className="masonry-grid">
            {galleryItems.map((item) => {
              const gridClasses = [item.spanH === 2 ? "span-h-2" : "", item.spanV === 2 ? "span-v-2" : "", item.spanV === 3 ? "span-v-3" : ""].filter(Boolean).join(" ");
              const overlayClass = item.overlay === "feature" ? "bg-linear-to-t from-surface via-transparent to-transparent opacity-60" : item.overlay === "strong" ? "bg-linear-to-t from-surface to-transparent opacity-60" : "bg-linear-to-t from-surface to-transparent opacity-40";

              return (
                <div className={`group relative cursor-pointer overflow-hidden rounded-lg border border-primary/10 bg-surface-container-high glass-panel ${gridClasses}`} data-gallery-item data-reveal data-reveal-delay={item.delay} key={item.id}>
                  <SiteImage alt={item.alt} className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" src={item.image} />
                  <div className={`absolute inset-0 ${overlayClass}`} />
                  {item.icon && <div className="absolute bottom-4 left-4"><span className="material-symbols-outlined text-2xl text-primary">{item.icon}</span></div>}
                  {(item.title || item.eyebrow) && <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">{item.eyebrow && <p className="mb-1 font-label-md uppercase tracking-widest text-primary">{item.eyebrow}</p>}{item.title && <h3 className="font-headline-md text-white">{item.title}</h3>}</div>}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-32 max-w-360 px-6 md:px-12">
          <div className="flex flex-col items-center justify-between gap-12 rounded-xl border border-primary/10 bg-surface-container-low p-10 copper-glow glass-panel md:flex-row md:p-16" data-reveal>
            <div className="max-w-xl">
              <h2 className="mb-6 font-headline-lg text-white reveal-up">Detaylara Yakından Bakın</h2>
              <p className="mb-8 font-body-lg text-on-surface-variant reveal-up reveal-stagger-1">Her karede mekan dokusunu, ışık atmosferini ve imza tabaklarımızın incelikli sunumunu daha yakından hissedin.</p>
              <div className="flex flex-wrap gap-6 reveal-up reveal-stagger-2"><div className="flex items-center gap-2 font-label-md uppercase tracking-wider text-primary"><span className="material-symbols-outlined">zoom_in</span>Etkileşimli İnceleme</div><div className="flex items-center gap-2 font-label-md uppercase tracking-wider text-primary md:ml-6"><span className="material-symbols-outlined">auto_awesome</span>Yüksek Görsel Kalite</div></div>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-primary/20 bg-surface-container md:w-1/3 reveal-up reveal-stagger-3"><div className="absolute inset-0 flex items-center justify-center"><span className="material-symbols-outlined text-6xl text-primary/30">play_circle</span></div><SiteImage alt="Sanal tur önizlemesi" className="h-full w-full object-cover opacity-30 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI478TurovUix4cQ7-Ka_r0mxn7XWN04wlQZKrLZhY0CT2o1O16KW49OZWwPinYYsXGfHp35X72NeaFWmwqf57hBmbzSMzzK0a9CeB0v0gdqmknN40X2CD6tOZXbxZckzSZ5AC7wLhq9MGtaBhcuBuH2co78V-zygsADaf4sdYHcOdleHP9eJ5KjO1UU2qTXxnSrmp1sHPS6KEvRSYtV00-k8wR9RmD7nFJuUf5Y6ltWVxgrblKsSYr8laGlAbSWeDRXfQCZGkOug" /></div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}