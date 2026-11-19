import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { OMAKASE_DATA } from '../data/menuData';
import { SelectionItem } from '../types/menu';
import { buildSelectionKey, formatCurrency } from '../utils/menuLogic';
import {
  CrimsonDots,
  KumoCloudOrnament,
  OmakaseSeal,
  SakuraBlossomOrnament,
} from './JapaneseOrnaments';

interface OmakaseSectionProps {
  selection: SelectionItem[];
  onAdd: (payload: {
    dishId: string;
    categoryTitle: string;
    name: string;
    variantLabel?: string;
    unitPrice: number;
  }) => void;
  onDecrement: (key: string) => void;
}

export const OmakaseSection: React.FC<OmakaseSectionProps> = ({
  selection,
  onAdd,
  onDecrement,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="omakase"
      aria-labelledby="omakase-heading"
      className="relative overflow-hidden bg-[#141413] text-[#F6F3EC] border-b border-[#B59150]/40"
    >
      {/* Panoramic Header Banner */}
      <div className="relative h-56 sm:h-72 w-full overflow-hidden border-b border-[#B59150]/30 bg-[#1C1B19]">
        {!imgError && (
          <img
            src={OMAKASE_DATA.bannerImage}
            alt={OMAKASE_DATA.bannerAlt}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/55 to-[#141413]/35"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-5 mx-auto flex max-w-5xl items-end justify-between px-4 sm:px-8">
          <span className="font-dorsa text-5xl sm:text-6xl tracking-[0.14em] text-[#B59150]/85 leading-none">
            00
          </span>
          <span className="font-mincho text-xs tracking-[0.28em] uppercase text-[#D6D0C4]">
            Experiencia en Barra
          </span>
        </div>
      </div>

      {/* Decorative Kumo & Sakura */}
      <KumoCloudOrnament className="pointer-events-none absolute top-64 left-0 w-44 opacity-35 sm:w-64" />
      <SakuraBlossomOrnament className="pointer-events-none absolute right-6 bottom-8 h-16 w-16 opacity-30" />

      <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-8 sm:py-16">
        {/* Seal + Philosophy Header */}
        <div className="flex flex-col items-center text-center">
          <div id="omakase-heading">
            <OmakaseSeal />
          </div>
          <CrimsonDots className="mt-5" />
          <p className="font-mincho mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[#D6D0C4]">
            {OMAKASE_DATA.concept}
          </p>
        </div>

        {/* Two Omakase Tasting Options */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {OMAKASE_DATA.options.map((option) => {
            const key = buildSelectionKey(option.id, option.subtitle);
            const selectedItem = selection.find((s) => s.key === key);
            const qty = selectedItem?.quantity ?? 0;

            return (
              <div
                key={option.id}
                className="relative flex flex-col justify-between rounded-xl border border-[#B59150]/45 bg-[#1C1B19]/90 p-6 sm:p-8 transition-colors hover:border-[#B59150]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-dorsa text-3xl sm:text-4xl tracking-[0.12em] text-[#B59150] leading-none">
                      {option.timesLabel}
                    </span>
                    <h3 className="font-marcellus mt-2 text-xl sm:text-2xl tracking-[0.16em] text-[#F6F3EC]">
                      {option.name}
                    </h3>
                    <p className="font-mincho mt-1.5 text-xs tracking-[0.18em] uppercase text-[#B8B2A6]">
                      {option.subtitle}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-dorsa text-4xl sm:text-5xl tracking-[0.06em] text-[#9E2A2B] bg-[#F6F3EC] border border-[#B59150]/65 rounded-md px-3 py-1 inline-block leading-none tabular-nums">
                      {formatCurrency(option.price)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#B59150]/25 pt-4">
                  <span className="font-mincho text-xs text-[#B8B2A6]">
                    Servicio guiado por el itamae
                  </span>

                  {qty === 0 ? (
                    <button
                      type="button"
                      onClick={() =>
                        onAdd({
                          dishId: option.id,
                          categoryTitle: 'OMAKASE',
                          name: option.name,
                          variantLabel: option.subtitle,
                          unitPrice: option.price,
                        })
                      }
                      aria-label={`Agregar ${option.name} a tu selección`}
                      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-lg border border-[#B59150]/65 px-4 py-2 font-marcellus text-xs tracking-[0.14em] uppercase text-[#F6F3EC] transition-colors hover:border-[#9E2A2B] hover:bg-[#9E2A2B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B59150]"
                    >
                      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Elegir</span>
                    </button>
                  ) : (
                    <div className="inline-flex items-center overflow-hidden rounded-lg border border-[#9E2A2B] bg-[#9E2A2B]/15">
                      <button
                        type="button"
                        onClick={() => onDecrement(key)}
                        aria-label={`Quitar uno de ${option.name}`}
                        className="flex h-11 w-11 items-center justify-center text-[#F6F3EC] hover:bg-[#9E2A2B] transition-colors"
                      >
                        <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <span className="px-3 font-marcellus text-sm tabular-nums text-[#F6F3EC]">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onAdd({
                            dishId: option.id,
                            categoryTitle: 'OMAKASE',
                            name: option.name,
                            variantLabel: option.subtitle,
                            unitPrice: option.price,
                          })
                        }
                        aria-label={`Agregar otro ${option.name}`}
                        className="flex h-11 w-11 items-center justify-center text-[#F6F3EC] hover:bg-[#9E2A2B] transition-colors"
                      >
                        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tasting Sequence */}
        <div className="mt-10 border-t border-b border-[#B59150]/30 py-5 text-center">
          <p className="font-mincho text-[11px] tracking-[0.22em] uppercase text-[#B59150] mb-2">
            Secuencia Incluida
          </p>
          <p className="font-marcellus text-xs sm:text-sm tracking-[0.18em] text-[#F6F3EC]/90 leading-relaxed">
            {OMAKASE_DATA.sequence.join(' • ')}
          </p>
        </div>
      </div>
    </section>
  );
};
