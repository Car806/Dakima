import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { MenuDish, SelectionItem } from '../types/menu';
import { buildSelectionKey, formatCurrency } from '../utils/menuLogic';

interface DishRowProps {
  dish: MenuDish;
  categoryTitle: string;
  compact?: boolean;
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

export const DishRow: React.FC<DishRowProps> = ({
  dish,
  categoryTitle,
  compact = false,
  selection,
  onAdd,
  onDecrement,
}) => {
  const [selectedChoice, setSelectedChoice] = useState<string | undefined>(
    dish.choices?.[0]
  );

  // Multi-price variants (e.g., BAO: Cerdo $100 | Pato $110 | Jaiba $115)
  if (dish.variants && dish.variants.length > 0) {
    return (
      <article className="border-b border-[#B59150]/25 py-5 last:border-b-0">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-marcellus text-base sm:text-lg tracking-[0.14em] text-[#1C1B19]">
              {dish.name}
            </h3>
            <span className="font-mincho text-xs text-[#57534E]">
              Elige tu preparación
            </span>
          </div>

          {dish.description && (
            <p className="font-mincho text-sm leading-relaxed text-[#57534E] max-w-2xl">
              {dish.description}
            </p>
          )}

          <div className="mt-2 flex flex-wrap gap-2.5">
            {dish.variants.map((variant) => {
              const key = buildSelectionKey(dish.id, variant.label);
              const qty = selection.find((s) => s.key === key)?.quantity ?? 0;

              return (
                <div
                  key={variant.id}
                  className="inline-flex items-center overflow-hidden rounded-lg border border-[#B59150]/45 bg-[#EFECE4]/70"
                >
                  <span className="px-3 py-2 font-marcellus text-xs tracking-[0.12em] uppercase text-[#1C1B19]">
                    {variant.label}
                  </span>
                  <span className="font-dorsa pr-2.5 text-2xl tracking-[0.06em] text-[#9E2A2B] leading-none tabular-nums">
                    {formatCurrency(variant.price)}
                  </span>

                  {qty === 0 ? (
                    <button
                      type="button"
                      onClick={() =>
                        onAdd({
                          dishId: dish.id,
                          categoryTitle,
                          name: dish.name,
                          variantLabel: variant.label,
                          unitPrice: variant.price,
                        })
                      }
                      aria-label={`Agregar ${dish.name} de ${variant.label} por ${formatCurrency(
                        variant.price
                      )}`}
                      className="flex h-11 w-11 items-center justify-center border-l border-[#B59150]/40 text-[#1C1B19] transition-colors hover:bg-[#9E2A2B] hover:text-[#F6F3EC]"
                    >
                      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  ) : (
                    <div className="flex items-center border-l border-[#9E2A2B]/50 bg-[#9E2A2B] text-[#F6F3EC]">
                      <button
                        type="button"
                        onClick={() => onDecrement(key)}
                        aria-label={`Quitar ${dish.name} de ${variant.label}`}
                        className="flex h-11 w-9 items-center justify-center hover:bg-[#7F1D1E]"
                      >
                        <Minus className="h-3 w-3" aria-hidden="true" />
                      </button>
                      <span className="px-1.5 font-marcellus text-xs tabular-nums">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onAdd({
                            dishId: dish.id,
                            categoryTitle,
                            name: dish.name,
                            variantLabel: variant.label,
                            unitPrice: variant.price,
                          })
                        }
                        aria-label={`Agregar otro ${dish.name} de ${variant.label}`}
                        className="flex h-11 w-9 items-center justify-center hover:bg-[#7F1D1E]"
                      >
                        <Plus className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </article>
    );
  }

  const price = dish.price ?? 0;
  const activeKey = buildSelectionKey(dish.id, selectedChoice);
  const qty = selection.find((s) => s.key === activeKey)?.quantity ?? 0;

  return (
    <article
      className={`border-b border-[#B59150]/25 transition-colors ${
        compact ? 'py-3.5' : 'py-5'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2.5">
            <h3
              className={`font-marcellus tracking-[0.14em] text-[#1C1B19] ${
                compact ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
              }`}
            >
              {dish.name}
            </h3>
          </div>

          {dish.description && (
            <p className="font-mincho mt-1.5 text-sm leading-relaxed text-[#57534E] max-w-2xl">
              {dish.description}
            </p>
          )}

          {dish.choices && dish.choices.length > 0 && (
            <div
              role="group"
              aria-label={`Elegir proteína o estilo para ${dish.name}`}
              className="mt-2.5 flex flex-wrap items-center gap-1.5"
            >
              {dish.choices.map((choice) => {
                const isSelected = selectedChoice === choice;
                return (
                  <button
                    key={choice}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedChoice(choice)}
                    className={`min-h-[34px] rounded-md border px-2.5 py-1 font-mincho text-xs transition-colors ${
                      isSelected
                        ? 'border-[#9E2A2B] bg-[#9E2A2B]/10 text-[#9E2A2B] font-medium'
                        : 'border-[#B59150]/35 text-[#57534E] hover:border-[#B59150] hover:text-[#1C1B19]'
                    }`}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Price + Minimalist Comanda Control */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-dorsa text-3xl sm:text-[34px] tracking-[0.06em] text-[#9E2A2B] leading-none tabular-nums">
            {formatCurrency(price)}
          </span>

          {qty === 0 ? (
            <button
              type="button"
              onClick={() =>
                onAdd({
                  dishId: dish.id,
                  categoryTitle,
                  name: dish.name,
                  variantLabel: selectedChoice,
                  unitPrice: price,
                })
              }
              aria-label={`Agregar ${dish.name}${
                selectedChoice ? ` (${selectedChoice})` : ''
              } a tu selección`}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#B59150]/55 bg-[#EFECE4]/60 text-[#1C1B19] transition-colors hover:border-[#9E2A2B] hover:bg-[#9E2A2B] hover:text-[#F6F3EC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B]"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : (
            <div className="inline-flex items-center overflow-hidden rounded-lg border border-[#9E2A2B] bg-[#9E2A2B] text-[#F6F3EC]">
              <button
                type="button"
                onClick={() => onDecrement(activeKey)}
                aria-label={`Quitar ${dish.name}${
                  selectedChoice ? ` (${selectedChoice})` : ''
                }`}
                className="flex h-11 w-9 items-center justify-center hover:bg-[#7F1D1E] transition-colors"
              >
                <Minus className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <span className="px-2 font-marcellus text-xs tabular-nums">{qty}</span>
              <button
                type="button"
                onClick={() =>
                  onAdd({
                    dishId: dish.id,
                    categoryTitle,
                    name: dish.name,
                    variantLabel: selectedChoice,
                    unitPrice: price,
                  })
                }
                aria-label={`Agregar otro ${dish.name}${
                  selectedChoice ? ` (${selectedChoice})` : ''
                }`}
                className="flex h-11 w-9 items-center justify-center hover:bg-[#7F1D1E] transition-colors"
              >
                <Plus className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
