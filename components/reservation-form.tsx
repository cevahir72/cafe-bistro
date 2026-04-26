"use client";

import { useState, useTransition } from "react";

type ReservationFormProps = {
  slots: string[];
};

type ReservationConfirmation = {
  date: string;
  time: string;
  guests: string;
  fullName: string;
  notes: string;
};

export function ReservationForm({ slots }: ReservationFormProps) {
  const [confirmation, setConfirmation] = useState<ReservationConfirmation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    const date = String(formData.get("date") ?? "").trim();
    const time = String(formData.get("time") ?? "").trim();
    const guests = String(formData.get("guests") ?? "").trim();
    const fullName = String(formData.get("fullName") ?? "").trim();
    const notes = String(formData.get("notes") ?? "").trim();

    if (!date || !time || !guests || !fullName) {
      setError("Lütfen zorunlu rezervasyon alanlarını doldurun.");
      return;
    }

    setError(null);

    startTransition(() => {
      setConfirmation({ date, time, guests, fullName, notes });
    });
  };

  return (
    <div className="space-y-6">
      <form action={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="font-label-md uppercase tracking-widest text-on-surface-variant" htmlFor="reservation-date">
              Tarih Seçin
            </label>
            <div className="relative">
              <input className="w-full border-b border-outline-variant bg-surface-container-high px-4 py-4 font-body-md text-on-surface transition-all" id="reservation-date" name="date" required type="date" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-md uppercase tracking-widest text-on-surface-variant" htmlFor="reservation-time">
              Tercih Edilen Saat
            </label>
            <select className="w-full appearance-none border-b border-outline-variant bg-surface-container-high px-4 py-4 font-body-md text-on-surface transition-all" defaultValue="" id="reservation-time" name="time" required>
              <option disabled value="">
                Saat seçin
              </option>
              {slots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="font-label-md uppercase tracking-widest text-on-surface-variant" htmlFor="reservation-guests">
              Kişi Sayısı
            </label>
            <input className="w-full border-b border-outline-variant bg-surface-container-high px-4 py-4 font-body-md text-on-surface transition-all" id="reservation-guests" max="12" min="1" name="guests" placeholder="2 Kişi" required type="number" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-md uppercase tracking-widest text-on-surface-variant" htmlFor="reservation-name">
              Ad Soyad
            </label>
            <input className="w-full border-b border-outline-variant bg-surface-container-high px-4 py-4 font-body-md text-on-surface transition-all" id="reservation-name" name="fullName" placeholder="Adınız Soyadınız" required type="text" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-label-md uppercase tracking-widest text-on-surface-variant" htmlFor="reservation-notes">
            Özel Talepler
          </label>
          <textarea className="w-full resize-none border-b border-outline-variant bg-surface-container-high px-4 py-4 font-body-md text-on-surface transition-all" id="reservation-notes" name="notes" placeholder="Beslenme tercihleri veya kutlama notları..." rows={3} />
        </div>

        {error && <p className="font-body-md text-sm text-red-300">{error}</p>}

        <div className="pt-4">
          <button className="matte-to-sheen flex w-full items-center justify-center gap-3 rounded-sm py-6 font-label-md uppercase tracking-[0.2em] text-on-primary" disabled={isPending} type="submit">
            {isPending ? "Onaylanıyor..." : "Rezervasyonu Onayla"}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </form>

      {confirmation && (
        <div className="rounded-lg border border-primary/20 bg-surface-container-high p-6">
          <p className="mb-3 font-label-md uppercase tracking-[0.2em] text-primary">Rezervasyonunuz Alındı</p>
          <p className="font-body-lg text-on-surface">{confirmation.fullName}, {confirmation.guests} kişilik masa talebiniz kayda alındı.</p>
          <p className="mt-3 font-body-md text-on-surface-variant">{confirmation.date} tarihinde {confirmation.time} için talep oluşturuldu.</p>
          {confirmation.notes && <p className="mt-2 font-body-md text-on-surface-variant">Not: {confirmation.notes}</p>}
        </div>
      )}
    </div>
  );
}