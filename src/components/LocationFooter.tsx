import React from 'react';
import { Clock, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
  ADDRESS_TEXT,
  HOURS_PRIMARY,
  HOURS_SUNDAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LEGAL_RAW_NOTICE,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_RESERVE_URL,
} from '../data/menuData';
import {
  CrimsonDots,
  DakimaFishCrest,
  KumoCloudOrnament,
} from './JapaneseOrnaments';

export const LocationFooter: React.FC = () => {
  return (
    <>
      {/* Location, Hours, Bar Atmosphere & Google Map Section */}
      <section
        id="ubicacion"
        aria-labelledby="ubicacion-heading"
        className="border-t border-[#B59150]/45 bg-[#EFECE4] py-14 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <div className="text-center">
            <span className="font-dorsa text-4xl sm:text-5xl tracking-[0.14em] text-[#B59150] leading-none">
              09
            </span>
            <h2
              id="ubicacion-heading"
              className="font-marcellus mt-1 text-2xl sm:text-3xl tracking-[0.22em] text-[#1C1B19]"
            >
              LA BARRA &amp; UBICACIÓN
            </h2>
            <CrimsonDots className="mt-3" />
          </div>

          {/* Authentic Restaurant Interior Diptych */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <figure className="group relative overflow-hidden rounded-xl border border-[#B59150]/50 bg-[#141413]">
              <img
                src="/assets/aistudio/image_daacf6a5.png"
                alt="Barra principal de madera hinoki e itamae en servicio en DAKIMA Nigiris"
                loading="lazy"
                className="h-64 w-full object-cover object-[center_38%] transition-transform duration-500 group-hover:scale-[1.02] sm:h-72"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#141413]/85 via-transparent to-transparent"
                aria-hidden="true"
              />
              <figcaption className="absolute right-4 bottom-3 left-4 font-mincho text-xs tracking-[0.12em] text-[#F6F3EC]">
                Barra de madera <em>hinoki</em> · Servicio de Omakase en vivo
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-xl border border-[#B59150]/50 bg-[#141413]">
              <img
                src="/assets/aistudio/image_d0cb0d08.png"
                alt="Muros negro carbón con listones verticales de madera y barriles tradicionales de sake en DAKIMA"
                loading="lazy"
                className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02] sm:h-72"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#141413]/85 via-transparent to-transparent"
                aria-hidden="true"
              />
              <figcaption className="absolute right-4 bottom-3 left-4 font-mincho text-xs tracking-[0.12em] text-[#F6F3EC]">
                Muro de listones verticales y barriles de sake · Providencia
              </figcaption>
            </figure>
          </div>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
            {/* Info Column */}
            <div className="flex flex-col justify-between rounded-xl border border-[#B59150]/45 bg-[#F6F3EC] p-6 sm:p-8 lg:col-span-5">
              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#9E2A2B]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-marcellus text-xs tracking-[0.18em] uppercase text-[#57534E]">
                      Dirección
                    </h3>
                    <p className="font-mincho mt-1 text-base text-[#1C1B19]">
                      {ADDRESS_TEXT}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#9E2A2B]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-marcellus text-xs tracking-[0.18em] uppercase text-[#57534E]">
                      Horarios
                    </h3>
                    <p className="font-mincho mt-1 text-sm text-[#1C1B19]">
                      {HOURS_PRIMARY}
                    </p>
                    <p className="font-mincho mt-0.5 text-sm text-[#1C1B19]">
                      {HOURS_SUNDAY}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Instagram
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#9E2A2B]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-marcellus text-xs tracking-[0.18em] uppercase text-[#57534E]">
                      Instagram
                    </h3>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mincho mt-1 inline-block text-base text-[#1C1B19] underline decoration-[#B59150] underline-offset-4 hover:text-[#9E2A2B]"
                    >
                      {INSTAGRAM_HANDLE}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-[#B59150]/30 pt-6">
                <a
                  href={WHATSAPP_RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-lg bg-[#9E2A2B] px-5 py-3 font-marcellus text-xs tracking-[0.16em] uppercase text-[#F6F3EC] transition-colors hover:bg-[#822021]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Reservar Mesa (WhatsApp)</span>
                </a>

                <a
                  href={PHONE_HREF}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-lg border border-[#1C1B19] bg-transparent px-5 py-3 font-marcellus text-xs tracking-[0.15em] uppercase text-[#1C1B19] transition-colors hover:bg-[#1C1B19] hover:text-[#F6F3EC]"
                >
                  <Phone className="h-4 w-4 text-[#9E2A2B]" aria-hidden="true" />
                  <span>Llamar · {PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>

            {/* Responsive Google Maps Embed inside Gold Border Container */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-xl border border-[#B59150] bg-[#141413] p-1.5 shadow-sm">
                <iframe
                  title="Mapa de ubicación de DAKIMA Nigiris en Providencia #2802, Guadalajara"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.2509441997263!2d-103.38662202065429!3d20.700032000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afee8e9f43b9%3A0xddf02065c557bff0!2sDakima!5e0!3m2!1ses!2smx!4v1795047449993!5m2!1ses!2smx"
                  width="400"
                  height="300"
                  className="h-full min-h-[310px] w-full rounded-lg border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sumi-Ink Footer */}
      <footer className="relative overflow-hidden bg-[#141413] text-[#F6F3EC] border-t border-[#9E2A2B]/65 pb-20 sm:pb-24">
        <KumoCloudOrnament className="pointer-events-none absolute top-4 left-4 w-36 opacity-30" />
        <KumoCloudOrnament
          flip
          className="pointer-events-none absolute top-4 right-4 w-36 opacity-30"
        />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-12 text-center sm:px-8">
          <DakimaFishCrest size={52} className="mb-4" />
          <p className="font-marcellus text-xl tracking-[0.28em] text-[#F6F3EC] pl-[0.28em]">
            DAKIMA
          </p>
          <p className="font-marcellus mt-1 text-xs tracking-[0.34em] text-[#B59150] pl-[0.34em]">
            NIGIRIS
          </p>

          <p className="font-mincho mt-5 text-xs text-[#D6D0C4]">
            {ADDRESS_TEXT} · {INSTAGRAM_HANDLE} · {PHONE_DISPLAY}
          </p>

          <div className="my-6 h-px w-48 bg-[#B59150]/35" />

          <p className="font-mincho max-w-xl text-[11px] tracking-[0.14em] text-[#B8B2A6]">
            {LEGAL_RAW_NOTICE}
          </p>
        </div>

        <div className="h-[2px] w-full bg-gradient-to-r from-[#9E2A2B] via-[#B59150] to-[#9E2A2B]" />
      </footer>
    </>
  );
};
