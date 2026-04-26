import Link from "next/link";

import { SiteImage } from "@/components/site-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  menuSectionGroups,
  menuSections,
  type MenuItem,
  type MenuSection,
  type MenuSectionGroup,
} from "@/data/site-content";

const menuSectionMap = new Map(menuSections.map((section) => [section.id, section]));

function getSection(sectionId: string): MenuSection {
  const section = menuSectionMap.get(sectionId);

  if (!section) {
    throw new Error(`Bilinmeyen menü bölümü: ${sectionId}`);
  }

  return section;
}

function MenuItems({
  items,
  divider = false,
  italic = false,
  bodyClassName = "text-stone-500",
}: {
  items: MenuItem[];
  divider?: boolean;
  italic?: boolean;
  bodyClassName?: string;
}) {
  return (
    <div className="space-y-10">
      {items.map((item) => (
        <div className="group menu-item" key={item.name}>
          <div className="mb-2 flex justify-between items-baseline gap-6"><h3 className="font-headline-md text-on-surface transition-colors duration-500 group-hover:text-primary">{item.name}</h3><span className="font-body-md text-primary">{item.price}</span></div>
          <p className={`font-body-md ${bodyClassName} ${italic ? "italic" : ""}`}>{item.description}</p>
          {divider && <div className="menu-divider mt-4" />}
        </div>
      ))}
    </div>
  );
}

function CompactMenuItems({ items }: { items: MenuItem[] }) {
  return (
    <div className="space-y-12">
      {items.map((item) => (
        <div className="group" key={item.name}>
          <div className="mb-2 flex justify-between items-baseline gap-6">
            <h4 className="font-headline-md text-on-surface">{item.name}</h4>
            <span className="font-body-md text-primary">{item.price}</span>
          </div>
          <p className="font-body-md text-stone-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function MeatMenuItems({ items }: { items: MenuItem[] }) {
  return (
    <div className="space-y-12">
      {items.map((item) => (
        <div className="group" key={item.name}>
          <div className="mb-3 flex items-center justify-between gap-6">
            <h4 className="font-headline-md text-on-surface">{item.name}</h4>
            <span className="font-body-md text-primary">{item.price}</span>
          </div>
          <p className="font-body-md text-stone-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function renderMenuGroup(group: MenuSectionGroup) {
  if (group.layout === "showcase") {
    const section = getSection(group.sectionIds[0]);

    if (!section.image) {
      throw new Error(`Görseli olmayan menü bölümü: ${section.id}`);
    }

    return (
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-16 px-6 py-24 lg:grid-cols-12 md:px-margin-page" id={section.id} key={group.id}>
        <div className="lg:col-span-4 lg:sticky lg:top-48">
          <h2 className="mb-4 font-headline-lg uppercase tracking-wider text-primary">{section.title}</h2>
          <p className="mb-8 max-w-sm font-body-lg text-stone-400">{section.description}</p>
          <div className="h-[400px] w-full overflow-hidden rounded-xl shadow-2xl copper-glow">
            <SiteImage alt={section.title} className="h-full w-full object-cover" src={section.image} />
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <MenuItems bodyClassName="text-stone-500" divider italic items={section.items} />
        </div>
      </section>
    );
  }

  if (group.layout === "paired") {
    const [leftSection, rightSection] = group.sectionIds.map(getSection);

    return (
      <section className="bg-surface-container-low px-6 py-32 md:px-margin-page" id={leftSection.id} key={group.id}>
        <div className="mx-auto max-w-[1440px]">
          {(group.title || group.description) && (
            <div className="mb-18 text-center">
              {group.title && <h2 className="font-headline-lg uppercase tracking-[0.24em] text-on-surface">{group.title}</h2>}
              {group.description && <p className="mx-auto mt-5 max-w-2xl font-body-md text-stone-400">{group.description}</p>}
            </div>
          )}

          <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
            <div>
              <div className="mb-16 flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-primary">{leftSection.icon}</span>
                <h3 className="font-headline-lg uppercase tracking-wider text-on-surface">{leftSection.title}</h3>
              </div>
              <CompactMenuItems items={leftSection.items} />
            </div>

            <div id={rightSection.id}>
              <div className="mb-16 flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-primary">{rightSection.icon}</span>
                <h3 className="font-headline-lg uppercase tracking-wider text-on-surface">{rightSection.title}</h3>
              </div>
              <CompactMenuItems items={rightSection.items} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (group.layout === "protein-pair") {
    const [leftSection, rightSection] = group.sectionIds.map(getSection);

    return (
      <section className="mx-auto max-w-[1440px] px-6 py-32 md:px-margin-page" id={leftSection.id} key={group.id}>
        <div className="mb-24 text-center">
          {group.eyebrow && <span className="mb-4 block font-label-md uppercase tracking-[0.4em] text-primary">{group.eyebrow}</span>}
          {group.title && <h2 className="font-headline-xl text-on-surface">{group.title}</h2>}
          {group.description && <p className="mx-auto mt-5 max-w-2xl font-body-md text-stone-400">{group.description}</p>}
        </div>

        <div className="grid grid-cols-1 gap-x-20 gap-y-24 md:grid-cols-2">
          <div className="space-y-12">
            <h3 className="mb-8 border-b border-primary/20 pb-4 font-headline-lg text-lg uppercase tracking-widest text-primary">{leftSection.title}</h3>
            <MeatMenuItems items={leftSection.items} />
          </div>

          <div className="space-y-12" id={rightSection.id}>
            <h3 className="mb-8 border-b border-primary/20 pb-4 font-headline-lg text-lg uppercase tracking-widest text-primary">{rightSection.title}</h3>
            <MeatMenuItems items={rightSection.items} />
          </div>
        </div>
      </section>
    );
  }

  const section = getSection(group.sectionIds[0]);

  return (
    <section className="relative bg-surface-container-low px-6 py-32 md:px-margin-page" id={section.id} key={group.id}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="material-symbols-outlined text-3xl text-primary">{section.icon}</span>
            <h2 className="font-headline-lg uppercase tracking-wider text-on-surface">{section.title}</h2>
          </div>
          {group.description && <p className="mx-auto max-w-2xl font-body-md text-stone-400">{group.description}</p>}
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {section.items.map((item) => (
            <div className="group menu-item" key={item.name}>
              <div className="mb-2 flex justify-between items-baseline gap-6">
                <h4 className="font-headline-md text-on-surface">{item.name}</h4>
                <span className="font-body-md text-primary">{item.price}</span>
              </div>
              <p className="font-body-md text-stone-500">{item.description}</p>
              <div className="menu-divider mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <>
      <div className="fixed inset-0 z-99 grain-overlay" />
      <SiteHeader currentPath="/menu" />

      <main className="menu-backdrop relative overflow-x-hidden font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        <section className="relative flex h-[450px] items-center justify-center overflow-hidden" data-reveal>
          <div className="absolute inset-0 z-0">
            <SiteImage
              alt="Atmosferik yemek salonu"
              className="h-full w-full object-cover opacity-30 grayscale-[20%]"
              priority
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPToMGLOMHNgwTy7-S-N5rXKdSXEiP3TMEXCeH1rYy6wRLSwFmau0p62sfEI3XfV-v67HwL9byJVWHj4wLmE7qdxfQr_n6wai15z67tt1vz8KRSeuZvqc7i0g7yhNpG12RaOzKS282yQOPjBoen5hE6RiPelEGyh-D51vKhKssHzfs0uE1W25Ej5F-pDf3Qh9lt80zLo-2pES1huv2Dkh1zMHHLIRY56AulO76Uk6pDJJhtAES_N_XRpgiA5-TAbE1KJ6Yqdpx0qs"
            />
            <div className="absolute inset-0 bg-linear-to-b from-surface/80 via-surface/40 to-surface" />
          </div>

          <div className="relative z-10 px-6 text-center">
            <span className="mb-4 block font-label-md uppercase tracking-[0.4em] text-primary">Mutfak Seçkisi</span>
            <h1 className="mb-6 font-headline-xl text-on-surface">Lezzet Yolculuğu</h1>
            <div className="mx-auto h-px w-24 bg-primary/40" />
          </div>
        </section>

        <div className="sticky top-24 z-40 border-b border-primary/10 bg-surface/95 py-6 backdrop-blur-md">
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6 px-4 md:gap-12">
            {menuSections.map((section) => (
              <a className="rounded-full border border-primary/10 px-4 py-2 font-label-md text-[10px] uppercase tracking-widest text-stone-400 transition-colors hover:border-primary/40 hover:text-primary glow-hover" href={`#${section.id}`} key={section.id}>
                {section.navLabel ?? section.title}
              </a>
            ))}
          </div>
        </div>

        {menuSectionGroups.map(renderMenuGroup)}

        <section className="mx-auto max-w-4xl border-t border-primary/10 px-6 py-24 text-center">
          <h2 className="mb-8 font-headline-md italic text-on-surface">&quot;Bahçe büyük bir öğretmendir; sabrı, dikkati, emeği ve hepsinden öte güvenmeyi öğretir.&quot;</h2>
          <Link className="border border-primary px-12 py-4 font-label-md uppercase tracking-[0.2em] text-primary transition-all duration-500 glow-button copper-glow hover:bg-primary hover:text-on-primary-fixed" href="/reservations">
            Deneyiminizi Rezerve Edin
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}