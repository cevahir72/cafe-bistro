import type { Metadata } from "next";
import Link from "next/link";

import bannerGarden from "@/assets/images/home/banner-garden.png";
import storyImage from "@/assets/images/home/story.png";
import { SiteImage } from "@/components/site-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { businessInfo, menuHighlights } from "@/data/site-content";

const highlightImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD8RwU6U4HCv26pSoAHcRo3sojANkZAw2YEUQ_hLyAWZlD7zP03kLPLsmw06JIF8VA0UR9rYQyF4juY1E2okePBp5-XiRumXerHkQIC1XxsxK8KiDZj0eC9Lu5KczrgahzLHo8ppR6nXwgFIwWKlvWa0-wWSc4sGxaarSmvsTJ4Hd_7u-VmzHpWw-IocM90jSDYQ8gbR5E2ewwVKcizsIsjq67AiVq0dyW9EtVUBbhAeVUms-dvRoF96LmQoE9g_q1w0Ppdnp09jCA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAvbHdPiRMxLQZX9m2thKM3r_wFp0uD7jSgYv6llON1p2HfDpIj6HxjF-KIa-YojCmtGDZpE6SDMlhH7jc9mvUn5rvIs88EB3ZsUsDQOR0q_iGRHyaOmRcrGYh5hBILv9MxA6blO0i-t1d4nzfGXclk8pHxzC5G2Yg-BkHYdezt5IRPfGss85yA2RH3nmdZ2pE4-72TZUdxRp8WiBt1uuG1lNPY_8ma7O0VvpsAt0Cw7SkH8U--kfHD786SsTsGqTDwJQqtwigRsgc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8Khk3QWHfFqvAHINxTioV2RtNjMcLriMAAX-bWcwBuh0y6dpIyNcbDYuJJbrecLrqjpiu-uEwQ0HedeDKiVhHXYsm_YVMaxxduf6WGrdCLksgcItMSb8WRkV7KLSA6EEboV9I1UKgeL4m_DCRuFLqJ3x307ZDA5vdOKmSz_abg7y5szNsJ1dswUqGCuD_FnrCCZRdpIaQnv9ue5qoVed1z8jB7w1waN3_4jSf7TFMVmYnZxyuvt1i1ejaU8L5JXQEpxmtZgqQCN0",
];

export const metadata: Metadata = {
  title: "Londra'da Lüks Bahçe Kafe ve Restoran",
  description:
    "Botanica Garden'da premium yemek deneyimi, taş fırın lezzetleri, botanik kokteyller ve Google Haritalar ile kolay ulaşım sunan zarif teras keyfini keşfedin.",
  keywords: [
    "Botanica Garden",
    "Londra restoran",
    "lüks kafe Londra",
    "botanik yemek deneyimi",
    "terasta premium yemek",
    "fırın restoran Londra",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Botanica Garden | Londra'da Lüks Bahçe Kafe ve Restoran",
    description:
      "Premium yemek deneyimi, botanik kokteyller, teras oturumu ve Google Haritalar'dan kolay ulaşım bir arada.",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Botanica Garden restoran önizlemesi",
      },
    ],
  },
  twitter: {
    title: "Botanica Garden | Londra'da Lüks Bahçe Kafe ve Restoran",
    description:
      "Premium yemek deneyimi, botanik kokteyller, teras oturumu ve kolay ulaşım bir arada.",
    images: ["/opengraph-image"],
  },
  other: {
    "geo.position": `${businessInfo.latitude};${businessInfo.longitude}`,
    "geo.placename": businessInfo.addressLocality,
    "geo.region": "GB-LND",
    ICBM: `${businessInfo.latitude}, ${businessInfo.longitude}`,
  },
};

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: businessInfo.name,
    description: businessInfo.tagline,
    image: "/opengraph-image",
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.streetAddress,
      addressLocality: businessInfo.addressLocality,
      postalCode: businessInfo.postalCode,
      addressCountry: businessInfo.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.latitude,
      longitude: businessInfo.longitude,
    },
    hasMap: businessInfo.mapEmbedUrl,
    url: "/",
    servesCuisine: ["Kafe", "Fırın", "Modern Avrupa"],
  };

  return (
    <>
      <div className="fixed inset-0 z-100 grainy-bg" />
      <SiteHeader currentPath="/" />
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} type="application/ld+json" />

      <main>
        <section className="relative flex h-screen items-center justify-center overflow-hidden" data-reveal>
          <div className="absolute inset-0 z-0">
            <SiteImage alt="Botanica Garden giriş görseli" className="h-full w-full object-cover" priority src={bannerGarden} />
            <div className="absolute inset-0 bg-linear-to-b from-[#121212]/80 via-transparent to-[#121212]" />
          </div>
          <div className="relative z-10 max-w-4xl px-gutter text-center">
            <span className="mb-6 block font-label-md uppercase tracking-[0.4em] text-primary reveal-up">Kafe • Restoran • Fırın</span>
            <h1 className="mb-8 font-headline-xl text-on-surface reveal-up reveal-stagger-1">Doğanın Zarafetiyle Şekillenen Lezzet Deneyimi</h1>
            <p className="mx-auto mb-12 max-w-2xl font-body-lg text-on-surface-variant reveal-up reveal-stagger-2">Doğal taş, eskitilmiş ahşap ve rafine detaylarla kurulan atmosferik mekanda şehrin içinde sakin bir kaçış yaşayın.</p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row reveal-up reveal-stagger-3">
              <Link className="bg-primary-container px-10 py-4 font-label-md uppercase tracking-widest text-on-primary-fixed copper-gradient glow-button transition-all duration-300" href="/menu">Menüyü İncele</Link>
              <a className="border border-outline px-10 py-4 font-label-md uppercase tracking-widest text-on-surface glow-hover transition-all duration-300 hover:bg-white/5" href="#story">Hikayemiz</a>
            </div>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"><span className="material-symbols-outlined text-primary">expand_more</span></div>
        </section>

        <section className="bg-surface px-6 py-32 md:px-12" id="story">
          <div className="mx-auto grid max-w-360 items-center gap-24 md:grid-cols-2">
            <div className="relative reveal-up">
              <div className="copper-border border p-4"><SiteImage alt="Mekan iç detayları" className="aspect-4/5 h-full w-full object-cover grayscale-[0.2]" src={storyImage} /></div>
              <div className="absolute -bottom-12 -right-12 hidden w-64 border border-primary/20 bg-surface-container p-6 lg:block glass-panel"><p className="mb-2 font-headline-md italic text-primary">Kuruluş 2024</p><p className="font-body-md text-sm text-on-surface-variant">Seçilmiş malzemeler, toprakla zarafeti buluşturan hikayemizi anlatır.</p></div>
            </div>
            <div className="space-y-8">
              <span className="font-label-md uppercase tracking-widest text-primary reveal-up">Özümüz</span>
              <h2 className="font-headline-xl text-on-surface reveal-up reveal-stagger-1">Doğallıktan Gelen Rafine Kimlik</h2>
              <p className="font-body-lg leading-relaxed text-on-surface-variant reveal-up reveal-stagger-2">Botanica Garden, zamanı aşan ama çağdaş kalan bir mekan hayalinden doğdu. Volkanik taşın ham dokusunu geri kazanılmış ahşabın sıcaklığı ile birleştirerek etkileyici bir atmosfer kurduk.</p>
              <p className="font-body-lg leading-relaxed text-on-surface-variant reveal-up reveal-stagger-3">Taş fırından yükselen kokular da, ay ışığı altındaki terasımızın sakin ihtişamı da aynı duyusal yolculuğun parçası olarak düşünüldü.</p>
              <div className="border-t border-outline-variant pt-8 reveal-up reveal-stagger-4"><div className="flex gap-12"><div><h4 className="font-headline-md text-primary">100+</h4><p className="text-xs uppercase tracking-widest text-stone-500">GASTRONOMİK LEZZET</p></div><div><h4 className="font-headline-md text-primary">24</h4><p className="text-xs uppercase tracking-widest text-stone-500">BOTANİK KOKTEYL</p></div><div><h4 className="font-headline-md text-primary">7</h4><p className="text-xs uppercase tracking-widest text-stone-500">İMZA FIRIN LEZZETİ</p></div></div></div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32" id="specials">
          <div className="mx-auto max-w-360 px-6 md:px-12">
            <div className="mb-16 flex items-end justify-between gap-8"><div><span className="mb-4 block font-label-md uppercase tracking-widest text-primary reveal-up">Bugünün Seçkisi</span><h2 className="font-headline-xl text-on-surface reveal-up reveal-stagger-1">Fırından Günlük Özel Lezzetler</h2></div><Link className="border-b border-primary/30 pb-1 font-label-md uppercase tracking-widest text-primary glow-hover transition-all reveal-up reveal-stagger-2" href="/menu">Tüm Menü</Link></div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {menuHighlights.map((item, index) => (
                <div className="group menu-card bg-surface p-2 copper-border border transition-all duration-500" data-menu-card data-reveal data-reveal-delay={`${index * 100}ms`} key={item.name}>
                  <div className="mb-6 aspect-square overflow-hidden"><SiteImage alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={highlightImages[index]} /></div>
                  <div className="px-6 pb-6"><div className="mb-2 flex items-center justify-between"><h3 className="font-headline-md text-on-surface">{item.name}</h3><span className="font-body-md text-primary">{item.price}</span></div><p className="font-body-md text-sm text-on-surface-variant">{item.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#0e0e0e] py-32" id="kids-world">
          <div className="mx-auto max-w-360 px-6 md:px-12">
            <div className="mb-20 text-center"><span className="mb-4 block font-label-md uppercase tracking-[0.3em] text-primary reveal-up">Aileler İçin Güvenli Bir Alan</span><h2 className="font-headline-xl text-on-surface reveal-up reveal-stagger-1">Botanica Çocuk Dünyası</h2><p className="mt-4 font-body-md italic tracking-wide text-primary reveal-up reveal-stagger-2">Siz anın tadını çıkarın, çocuklar oyun ablası eşliğinde keyifle vakit geçirsin.</p><div className="mx-auto mt-8 h-px w-24 bg-primary reveal-up reveal-stagger-3" /></div>
            <div className="grid h-auto grid-cols-1 gap-6 md:h-200 md:grid-cols-4 md:grid-rows-2">
              <div className="group relative overflow-hidden rounded-lg md:col-span-2 md:row-span-2" data-reveal><SiteImage alt="Çocuk oyun alanı" className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" src="https://lh3.googleusercontent.com/aida/ADBb0ugYhxXZinT-v1oHJ0T3yEeQeTb_84zkBOy3rzN8HD7pUYlZBsGde_4kBW1duefYdlGonA2TKpHQcf6jrD9YKliKJc_mkN2OSI7tlQKL2HSeZUSxyujmDRgUTD5GziND3mrzZ4aabVhNjZesQIoDzDshut0EiO5lc4u5qmMhE6Dm7eEd_8vKt2c5Kqq-YlQxRLabWn6cMXOUKS9YPoUDJWwX6cq2B6aM-A0b89q_FM6c-uqwfLy3c8PBSDN5-Z5EQOlo_q530MnaXA" /><div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent p-12"><h3 className="mb-2 font-headline-lg text-white">Gözetimli Oyun Alanı</h3><p className="mb-6 font-body-md text-stone-300">Oyun ekibimiz, siz yemeğinizin keyfini çıkarırken çocuklarınız için güvenli ve neşeli bir alan sağlar.</p><button className="group/btn menu-item flex w-fit items-center gap-2 font-label-md uppercase tracking-widest text-primary" type="button">Etkinlikleri Keşfet<span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-2">arrow_forward</span></button></div></div>
              <div className="group relative overflow-hidden rounded-lg border border-white/5" data-reveal data-reveal-delay="120ms"><SiteImage alt="Berry Bliss içeceği" className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4nfMzace6Oovb9Qo2f-wYMcTnLgNNKEwbfUPX0f5mjfXJnjV7yHWD0sQ3zF-E_EXPlXMcOVWKux697NJMiyTCkj7MihbK2_vW-sLFhE0NRoV3YVjvXGA8P9O0SFrCrecet9fZm_vuQ64o-lObf_uvDSdOJL8DBEOwUAyi3GGkF7F8YJSf_Ai4GGA4c4CM9_Y7zY4dtjCV-WVVXijcunJKmHGlW5HCswQ6QTY8_-jtb08qw135iwdyVw0fjBD6hX13Bd4nFdTfohI" /><div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-8 transition-colors group-hover:bg-black/20"><h3 className="font-headline-md text-white">Berry Bliss Sparkler</h3></div></div>
              <div className="group relative overflow-hidden rounded-lg border border-white/5" data-reveal data-reveal-delay="180ms"><SiteImage alt="Narenciye içeceği" className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG4io0NgANAoBibWCUBm64bi3VJELjPNysFpAwHGFlRRxyP2OhD2izmz1x05tcoPjskmZccxwrDKXHYzNkRI3rSNXOlSOtj6B4qKYVswc1kuIgM31FnYScQH94t_NorBfQVQfd2Zg5cepv4ltXz9sikYhYC0Ma7uZoOi-rAysz1WnT8fA9RO_UCmSUFQid_pPfq1oDMM1K5J22AQ7VKCRvb43xmiqgoPrkv2IDmCJMZTmxhI2iRbrZL2vwT7RCxi8shtAFq7T_RfU" /><div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-8 transition-colors group-hover:bg-black/20"><h3 className="font-headline-md text-white">Lavender Lemonade</h3></div></div>
              <div className="group relative overflow-hidden rounded-lg border border-white/5 md:col-span-2" data-reveal data-reveal-delay="240ms"><div className="pointer-events-none absolute inset-0 z-10 bg-primary-container/10" /><SiteImage alt="Aile masası" className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmGrPrYBmdSx7SMjF-YnQNzwJ6DnLZ37cN4iGfk80d9s9Ftg5JPUF9IIXeSRI1aFjUS2gaPRZNMKR9DpYGRjdaFTMJN8EBHEG8Nifoqzb4o6YLdGpFfBZcXGgh5FR3hnfNO-Gimx2rJZYpHHeFn203gXr7J08BcAWh24cDrmKm9f_XNMcIudZbIMOP7cd9YTnCjx_EeovRpan2ppx2w2KSsj7ifL3kEToPZZkqna3u9WOtz0An9wiMQdj6EuliHqeevmhRh0W8rHo" /><div className="absolute inset-0 flex flex-col justify-center bg-linear-to-r from-black/80 to-transparent p-12"><span className="mb-2 font-label-md uppercase text-primary">Aile Mixology</span><h3 className="mb-4 font-headline-lg text-white">Alkolsüz Atölye Deneyimi</h3><p className="max-w-xs font-body-md text-stone-300">Ebeveynler ve çocukların birlikte keyif alabileceği meyve infüzyon deneyimleri.</p></div></div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-32"><div className="mx-auto max-w-360 px-6 md:px-12"><div className="glass-panel copper-glow relative overflow-hidden p-10 text-center md:p-20" data-reveal><div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-transparent via-primary/50 to-transparent" /><h2 className="mb-8 font-headline-xl text-on-surface reveal-up">Bahçedeki Yerinizi Şimdiden Ayırtın</h2><p className="mx-auto mb-12 max-w-xl font-body-lg text-on-surface-variant reveal-up reveal-stagger-1">Doğa ile rafine mutfağın uyumunu deneyimleyin. Teras oturumu için en az 48 saat önce rezervasyon yapmanızı öneririz.</p><div className="flex justify-center gap-6 reveal-up reveal-stagger-2"><Link className="bg-primary-container px-12 py-5 font-label-md uppercase tracking-[0.2em] text-on-primary-fixed copper-gradient glow-button transition-all" href="/reservations">Masa Ayırt</Link></div><div className="pointer-events-none absolute bottom-4 whitespace-nowrap font-serif text-[120px] opacity-10 select-none">BOTANICA • BOTANICA • BOTANICA</div></div></div></section>
      </main>

      <SiteFooter showAddress />
    </>
  );
}
