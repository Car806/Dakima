import React from 'react';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';
import {
  ADDRESS_TEXT,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_RESERVE_URL,
} from '../data/menuData';
import {
  DakimaFishCrest,
  KumoCloudOrnament,
  SakuraBlossomOrnament,
} from './JapaneseOrnaments';

export const HeroSection: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-[#141413] text-[#F6F3EC] border-b border-[#9E2A2B]/60">
      {/* Top thin crimson & gold editorial rules */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#9E2A2B] via-[#B59150] to-[#9E2A2B]" />

      {/* 3-Zone Top Bar */}
      <div className="relative z-20 mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-4 sm:px-8">
        <a
          href="#top"
          className="inline-flex items-center gap-2.5 font-marcellus text-lg tracking-[0.22em] text-[#F6F3EC] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B59150]"
        >
          <DakimaFishCrest size={28} />
          <span>DAKIMA</span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 font-marcellus text-xs tracking-[0.2em] uppercase text-[#D6D0C4]"
        >
          <a
            href="#omakase"
            className="hover:text-[#B59150] transition-colors whitespace-nowrap shrink-0"
          >
            Omakase
          </a>
          <a
            href="#entradas"
            className="hover:text-[#B59150] transition-colors whitespace-nowrap shrink-0"
          >
            Carta
          </a>
          <a
            href="#bebidas"
            className="hover:text-[#B59150] transition-colors whitespace-nowrap shrink-0"
          >
            Bebidas
          </a>
          <a
            href="#ubicacion"
            className="hover:text-[#B59150] transition-colors whitespace-nowrap shrink-0"
          >
            Ubicación
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <a
            href={WHATSAPP_RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#B59150]/70 bg-[#1C1B19] px-4 py-2 font-marcellus text-xs tracking-[0.16em] uppercase text-[#F6F3EC] transition-colors hover:border-[#B59150] hover:bg-[#9E2A2B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B59150]"
          >
            <MessageCircle className="h-3.5 w-3.5 text-[#B59150]" aria-hidden="true" />
            <span>Reservar</span>
          </a>
        </div>
      </div>

      {/* Hero Backdrop with Real DAKIMA Sushi Bar Photo + Chiaroscuro Scrim */}
      <div className="relative mx-auto max-w-6xl px-4 pt-6 pb-14 sm:px-8 sm:pt-10 sm:pb-20">
        <div
          className="relative overflow-hidden rounded-xl border border-[#B59150]/35 bg-[#141413]"
          id="top"
        >
          <img
            src="/assets/aistudio/image_daacf6a5.png"
            alt="Barra de madera hinoki e itamae en DAKIMA Nigiris, Providencia"
            className="absolute inset-0 h-full w-full object-cover object-[center_35%] opacity-40"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#141413]/85 via-[#141413]/72 to-[#141413]/92"
            aria-hidden="true"
          />

          {/* Subtle Japanese Kumo & Sakura Ornaments */}
          <KumoCloudOrnament className="pointer-events-none absolute top-4 left-4 w-36 opacity-50 sm:w-52" />
          <KumoCloudOrnament
            flip
            className="pointer-events-none absolute bottom-4 right-4 w-36 opacity-45 sm:w-52"
          />
          <SakuraBlossomOrnament className="pointer-events-none absolute top-6 right-6 h-12 w-12 opacity-40 sm:h-16 sm:w-16" />

          {/* Vertical Dorsa / Kanji Decorative Accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:flex flex-col items-center gap-3 absolute left-8 top-1/2 -translate-y-1/2 text-[#B59150]/70"
          >
            <span className="writing-vertical-jp font-mincho text-xs tracking-[0.35em]">
              お任せ ･ 江戸前鮨
            </span>
            <span className="h-12 w-px bg-[#B59150]/40" />
            <span className="font-dorsa text-2xl tracking-[0.18em]">GUADALAJARA</span>
          </div>

          {/* Center Official Logo Plaque */}
          <div className="relative z-10 flex flex-col items-center px-6 py-10 text-center sm:px-12 sm:py-14">
            <h1 className="sr-only">DAKIMA Nigiris — Omakase &amp; Sushi Bar</h1>

            <div className="rounded-xl border border-[#B59150]/60 bg-[#F6F3EC] px-7 py-5 sm:px-10 sm:py-6 shadow-[0_14px_38px_rgba(0,0,0,0.45)]">
              <img
                src="/assets/aistudio/image_3595f932.png"
                alt="Logotipo oficial de DAKIMA Nigiris"
                className="mx-auto h-28 w-auto sm:h-36 object-contain mix-blend-multiply"
              />
            </div>

            <div className="my-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#9E2A2B]" />
              <span className="font-mincho text-xs tracking-[0.22em] uppercase text-[#D6D0C4]">
                Omakase &amp; Sushi Bar
              </span>
              <span className="h-px w-12 bg-[#9E2A2B]" />
            </div>

            <p className="font-mincho max-w-xl text-sm sm:text-base leading-relaxed text-[#D6D0C4]">
              Alta cocina japonesa en barra de madera <em>hinoki</em>. Cortes de atún Bluefin,
              técnica tradicional Edomae y menú de temporada en el corazón de Providencia.
            </p>

            {/* Primary CTAs with softened corners */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href={WHATSAPP_RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2.5 rounded-lg bg-[#9E2A2B] px-6 py-3 font-marcellus text-xs sm:text-sm tracking-[0.16em] uppercase text-[#F6F3EC] transition-colors hover:bg-[#822021] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B59150]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Reservar Mesa</span>
              </a>

              <a
                href={PHONE_HREF}
                className="inline-flex min-h-[44px] items-center gap-2.5 rounded-lg border border-[#B59150]/70 bg-[#141413]/75 px-5 py-3 font-marcellus text-xs sm:text-sm tracking-[0.14em] uppercase text-[#F6F3EC] transition-colors hover:border-[#B59150] hover:bg-[#1C1B19] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B59150]"
              >
                <Phone className="h-4 w-4 text-[#B59150]" aria-hidden="true" />
                <span>Llamar · {PHONE_DISPLAY}</span>
              </a>

              <a
                href="#omakase"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-4 py-3 font-marcellus text-xs sm:text-sm tracking-[0.16em] uppercase text-[#B59150] transition-colors hover:bg-[#1C1B19]/60 hover:text-[#F6F3EC] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B59150]"
              >
                <span>Ver Menú</span>
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <p className="font-mincho mt-7 text-xs tracking-wide text-[#B8B2A6]">
              {ADDRESS_TEXT} · Lunes a Sábado 1:30 PM – 11:00 PM · Domingo 1:30 PM – 10:00 PM
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
