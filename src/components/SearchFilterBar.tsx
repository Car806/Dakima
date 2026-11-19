import React from 'react';
import { Search, X } from 'lucide-react';
import { QUICK_FILTERS } from '../data/menuData';
import { QuickFilterId } from '../types/menu';

interface SearchFilterBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  activeFilter: QuickFilterId;
  onFilterChange: (filterId: QuickFilterId) => void;
  totalMatchingDishes: number;
  isFiltered: boolean;
}

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  query,
  onQueryChange,
  activeFilter,
  onFilterChange,
  totalMatchingDishes,
  isFiltered,
}) => {
  return (
    <section
      aria-label="Buscador y filtros de carta"
      className="mx-auto max-w-5xl px-4 pt-10 pb-4 sm:px-8"
    >
      <div className="border-y border-[#B59150]/35 py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Minimalist Search Input */}
          <div className="relative w-full lg:max-w-sm">
            <label htmlFor="menu-search" className="sr-only">
              Buscar platillo o ingrediente
            </label>
            <Search
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#57534E]"
              aria-hidden="true"
            />
            <input
              id="menu-search"
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Buscar platillo, corte o ingrediente..."
              className="h-11 w-full rounded-lg border border-[#B59150]/45 bg-[#EFECE4]/70 pr-10 pl-10 font-mincho text-sm text-[#1C1B19] placeholder:text-[#57534E] transition-colors focus:border-[#9E2A2B] focus:bg-[#F6F3EC] focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                aria-label="Limpiar búsqueda"
                className="absolute top-1/2 right-1 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-[#57534E] hover:text-[#9E2A2B]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Interactive Filter Buttons */}
          <div
            role="group"
            aria-label="Filtros rápidos de ingredientes"
            className="flex flex-wrap items-center gap-2"
          >
            {QUICK_FILTERS.map((filter) => {
              const selected = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => onFilterChange(filter.id)}
                  className={`min-h-[40px] rounded-lg border px-3.5 py-2 font-marcellus text-xs tracking-[0.12em] uppercase whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B] ${
                    selected
                      ? 'border-[#9E2A2B] bg-[#9E2A2B] text-[#F6F3EC]'
                      : 'border-[#B59150]/45 bg-transparent text-[#1C1B19] hover:border-[#9E2A2B]/60 hover:bg-[#EFECE4]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {isFiltered && (
          <div className="mt-3 flex items-center justify-between text-xs font-mincho text-[#57534E]">
            <span>
              Mostrando <strong className="text-[#1C1B19] tabular-nums">{totalMatchingDishes}</strong>{' '}
              {totalMatchingDishes === 1 ? 'opción' : 'opciones'} en la carta
            </span>
            <button
              type="button"
              onClick={() => {
                onQueryChange('');
                onFilterChange('all');
              }}
              className="font-marcellus tracking-[0.1em] uppercase text-[#9E2A2B] underline underline-offset-4 hover:text-[#1C1B19]"
            >
              Ver toda la carta
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
