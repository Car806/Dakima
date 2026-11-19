import React, { useEffect, useState } from 'react';
import {
  ChevronUp,
  MessageCircle,
  Minus,
  Plus,
  Trash2,
  X,
} from 'lucide-react';
import { SelectionItem } from '../types/menu';
import {
  buildWhatsAppComandaUrl,
  formatCurrency,
  getSelectionSummary,
} from '../utils/menuLogic';
import { CrimsonDots } from './JapaneseOrnaments';

interface SelectionBarProps {
  selection: SelectionItem[];
  onAdd: (payload: {
    dishId: string;
    categoryTitle: string;
    name: string;
    variantLabel?: string;
    unitPrice: number;
  }) => void;
  onDecrement: (key: string) => void;
  onRemove: (key: string) => void;
  onClear: () => void;
}

export const SelectionBar: React.FC<SelectionBarProps> = ({
  selection,
  onAdd,
  onDecrement,
  onRemove,
  onClear,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const summary = getSelectionSummary(selection);

  useEffect(() => {
    if (summary.totalPieces === 0 && isOpen) {
      setIsOpen(false);
    }
  }, [summary.totalPieces, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  if (summary.totalPieces === 0) {
    return null;
  }

  return (
    <>
      {/* Compact Floating Bottom Bar (<= 56px height so total sticky remains < 15% mobile) */}
      <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-[#B59150]/60 bg-[#141413]/95 text-[#F6F3EC] backdrop-blur-md shadow-[0_-8px_30px_rgba(20,20,19,0.35)]">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 px-3 sm:px-8">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            className="flex min-h-[44px] w-full items-center justify-between gap-2.5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B59150]"
          >
            <div className="flex min-w-0 items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#9E2A2B]" aria-hidden="true" />
              <span className="sm:hidden font-marcellus text-xs tracking-[0.1em] uppercase text-[#F6F3EC] whitespace-nowrap">
                Tu selección ·{' '}
                <span className="tabular-nums">{summary.totalPieces}</span>{' '}
                {summary.totalPieces === 1 ? 'pza' : 'pzas'} ·{' '}
                <span className="text-[#B59150] tabular-nums">
                  {formatCurrency(summary.totalAmount)}
                </span>
              </span>
              <span className="hidden sm:inline truncate font-marcellus text-sm tracking-[0.12em] uppercase text-[#F6F3EC]">
                Tu selección ·{' '}
                <span className="tabular-nums">{summary.totalPieces}</span>{' '}
                {summary.totalPieces === 1 ? 'pieza' : 'piezas'} · Total estimado{' '}
                <span className="text-[#B59150] tabular-nums">
                  {formatCurrency(summary.totalAmount)}
                </span>
              </span>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-[#B59150]/60 px-2.5 py-1.5 font-marcellus text-[11px] tracking-[0.12em] uppercase text-[#B59150] whitespace-nowrap">
              <span>Comanda</span>
              <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>

      {/* Comanda Drawer Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="comanda-title"
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#141413]/75 backdrop-blur-xs sm:items-center sm:p-4"
        >
          <div
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-10 flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-t-2xl sm:rounded-xl border border-[#B59150]/55 bg-[#F6F3EC] text-[#1C1B19] shadow-2xl">
            {/* Top Crimson & Gold Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-[#9E2A2B] via-[#B59150] to-[#9E2A2B]" />

            {/* Drawer Header */}
            <div className="flex items-start justify-between border-b border-[#B59150]/35 px-6 py-5">
              <div>
                <p className="font-mincho text-[11px] tracking-[0.22em] uppercase text-[#57534E]">
                  Comanda de Barra · DAKIMA
                </p>
                <h2
                  id="comanda-title"
                  className="font-marcellus mt-1 text-2xl tracking-[0.18em] text-[#1C1B19]"
                >
                  MI SELECCIÓN
                </h2>
                <CrimsonDots className="mt-2" />
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar comanda"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#B59150]/40 text-[#1C1B19] hover:border-[#9E2A2B] hover:text-[#9E2A2B]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Comanda Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <p className="font-mincho mb-4 text-xs leading-relaxed text-[#57534E]">
                Muestra esta comanda a tu mesero o itamae en barra para ordenar, o envíala por
                WhatsApp junto con tu reservación.
              </p>

              <ul className="divide-y divide-[#B59150]/25">
                {selection.map((item) => (
                  <li
                    key={item.key}
                    className="flex items-center justify-between gap-3 py-3.5"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="block font-mincho text-[11px] tracking-[0.16em] uppercase text-[#57534E]">
                        {item.categoryTitle}
                      </span>
                      <p className="font-marcellus text-sm sm:text-base tracking-[0.1em] text-[#1C1B19]">
                        {item.name}
                        {item.variantLabel ? (
                          <span className="font-mincho text-xs text-[#57534E] ml-2">
                            ({item.variantLabel})
                          </span>
                        ) : null}
                      </p>
                      <span className="font-mincho text-xs text-[#57534E] tabular-nums">
                        {formatCurrency(item.unitPrice)} c/u
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="inline-flex items-center overflow-hidden rounded-lg border border-[#B59150]/45 bg-[#EFECE4]">
                        <button
                          type="button"
                          onClick={() => onDecrement(item.key)}
                          aria-label={`Disminuir ${item.name}`}
                          className="flex h-10 w-9 items-center justify-center text-[#1C1B19] hover:bg-[#9E2A2B] hover:text-[#F6F3EC]"
                        >
                          <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <span className="px-2.5 font-marcellus text-xs tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            onAdd({
                              dishId: item.dishId,
                              categoryTitle: item.categoryTitle,
                              name: item.name,
                              variantLabel: item.variantLabel,
                              unitPrice: item.unitPrice,
                            })
                          }
                          aria-label={`Aumentar ${item.name}`}
                          className="flex h-10 w-9 items-center justify-center text-[#1C1B19] hover:bg-[#9E2A2B] hover:text-[#F6F3EC]"
                        >
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>

                      <span className="font-dorsa w-16 text-right text-3xl tracking-[0.06em] text-[#9E2A2B] leading-none tabular-nums">
                        {formatCurrency(item.unitPrice * item.quantity)}
                      </span>

                      <button
                        type="button"
                        onClick={() => onRemove(item.key)}
                        aria-label={`Eliminar ${item.name}`}
                        className="flex h-10 w-9 items-center justify-center text-[#57534E] hover:text-[#9E2A2B]"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comanda Summary Footer */}
            <div className="border-t border-[#B59150]/45 bg-[#EFECE4] px-6 py-5">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="font-marcellus text-xs tracking-[0.16em] uppercase text-[#57534E]">
                    Total Estimado ({summary.totalPieces}{' '}
                    {summary.totalPieces === 1 ? 'pieza' : 'piezas'})
                  </span>
                </div>
                <span className="font-dorsa text-4xl tracking-[0.06em] text-[#9E2A2B] leading-none tabular-nums">
                  {formatCurrency(summary.totalAmount)}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClear}
                  className="min-h-[44px] rounded-lg border border-[#B59150]/50 px-4 py-2 font-marcellus text-xs tracking-[0.14em] uppercase text-[#57534E] hover:border-[#9E2A2B] hover:text-[#9E2A2B]"
                >
                  Limpiar Selección
                </button>

                <a
                  href={buildWhatsAppComandaUrl(selection)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#9E2A2B] px-5 py-2.5 font-marcellus text-xs tracking-[0.15em] uppercase text-[#F6F3EC] transition-colors hover:bg-[#822021]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Enviar al Reservar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
