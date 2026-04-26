import { ReservationForm } from "@/components/reservation-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteImage } from "@/components/site-image";
import { contactDetails, openingHours, reservationSlots } from "@/data/site-content";

export default function ReservationsPage() {
  return (
    <>
      <div className="fixed inset-0 z-[9999] grain-overlay" />
      <SiteHeader currentPath="/reservations" reserveMode="inline" />

      <main className="min-h-screen bg-surface px-6 pb-24 pt-12 font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container md:px-12">
        <div className="mx-auto max-w-[1280px]">
          <section className="mb-16 text-center reveal-up"><h1 className="mb-4 font-headline-xl text-on-surface">Table Reservations</h1><p className="mx-auto max-w-2xl font-body-lg text-on-surface-variant reveal-up reveal-stagger-1">Secure your evening in our moonlit botanical sanctuary. Each reservation is a curated journey through nature and gastronomy.</p></section>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 reveal-up"><div className="rounded-lg border border-outline-variant/10 bg-surface-container-low p-8 copper-glow md:p-12 glass-panel"><ReservationForm slots={reservationSlots} /></div></div>

            <div className="space-y-8 lg:col-span-5 reveal-up reveal-stagger-1">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg border border-outline-variant/20 glass-panel"><SiteImage alt="Luxury dining area" className="h-full w-full object-cover brightness-75 grayscale-[20%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCixCz1O7uOfBrh9pxtw9ETQpw06u-_s1EIKRvDBj_Tns21hJsF0-NC8KYXRnLPZxVqM9qY-3mUlACt7HxkdXaJQ_71nVT47osA5Dl2DcI_Nc_JOTo2_hurVSuXnYUn2A3I8A-WefOhgh08KwwtMbcaw7cCw0rxEEpCMAKXpHRC9gVVU66K4IrdMb_dbkmFADGE9k9uf6Xmegi0hdVBoP2WmXORGDtclcQqG5TA-4v17lXMdCDu9fMU5myTEzU1VJmJm1Fy2EyKfWM" /><div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent" /><div className="absolute bottom-6 left-6"><span className="font-headline-md text-on-surface">The Conservatory</span></div></div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-lg border border-outline-variant/10 bg-surface-container-high p-8 glass-panel"><h3 className="mb-6 flex items-center gap-3 font-headline-md text-primary"><span className="material-symbols-outlined">schedule</span>Opening Hours</h3><ul className="space-y-4 font-body-md text-on-surface-variant">{openingHours.map((item, index) => <li className={`flex justify-between ${index < openingHours.length - 1 ? "border-b border-outline-variant/10 pb-2" : ""}`} key={item.day}><span>{item.day}</span><span className="text-on-surface">{item.hours}</span></li>)}</ul></div>
                <div className="rounded-lg border border-outline-variant/10 bg-surface-container-high p-8 glass-panel"><h3 className="mb-6 flex items-center gap-3 font-headline-md text-primary"><span className="material-symbols-outlined">contact_support</span>Contact Us</h3><div className="space-y-6">{contactDetails.map((item) => <div className="flex items-start gap-4" key={item.icon + item.value}><span className="material-symbols-outlined text-primary-container">{item.icon}</span><p className="font-body-md text-on-surface-variant">{item.value}</p></div>)}</div></div>
              </div>

              <div className="border-l-2 border-primary-container bg-surface-container/50 p-6 glass-panel"><p className="mb-1 font-label-md uppercase italic tracking-tight text-stone-500">Important</p><p className="font-body-md leading-relaxed text-on-surface-variant">Please note we hold tables for 15 minutes past the reservation time. Groups of 8+ require a deposit.</p></div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}