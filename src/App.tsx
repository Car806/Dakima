import { useEffect, useMemo, useState } from 'react';
import { MENU_CATEGORIES } from './data/menuData';
import { CategoryId, QuickFilterId, SelectionItem } from './types/menu';
import {
  addSelectionItem,
  decrementSelectionItem,
  filterMenuCategories,
  normalizeText,
  removeSelectionItem,
} from './utils/menuLogic';
import { HeroSection } from './components/HeroSection';
import { StickyCategoryNav } from './components/StickyCategoryNav';
import { OmakaseSection } from './components/OmakaseSection';
import { SearchFilterBar } from './components/SearchFilterBar';
import { CategorySection } from './components/CategorySection';
import { LocationFooter } from './components/LocationFooter';
import { SelectionBar } from './components/SelectionBar';
import { CrimsonDots, SakuraBlossomOrnament } from './components/JapaneseOrnaments';

const STORAGE_KEY = 'dakima_selection_v1';

const ALL_SECTION_IDS: CategoryId[] = [
  'omakase',
  'entradas',
  'nigiris',
  'makis',
  'temakis',
  'sashimis',
  'donburi',
  'bebidas',
  'postres',
];

function loadInitialSelection(): SelectionItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('omakase');
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<QuickFilterId>('all');
  const [selection, setSelection] = useState<SelectionItem[]>(loadInitialSelection);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
    } catch {
      // Ignore storage quota errors
    }
  }, [selection]);

  const isFiltered = normalizeText(query).length > 0 || activeFilter !== 'all';

  const visibleCategories = useMemo(
    () => filterMenuCategories(MENU_CATEGORIES, query, activeFilter),
    [query, activeFilter]
  );

  const totalMatchingDishes = useMemo(
    () => visibleCategories.reduce((sum, cat) => sum + cat.items.length, 0),
    [visibleCategories]
  );

  useEffect(() => {
    const elements = ALL_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveCategory(visible[0].target.id as CategoryId);
        }
      },
      {
        rootMargin: '-96px 0px -65% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [visibleCategories]);

  const handleAddItem = (payload: {
    dishId: string;
    categoryTitle: string;
    name: string;
    variantLabel?: string;
    unitPrice: number;
  }) => {
    setSelection((prev) => addSelectionItem(prev, payload));
  };

  const handleDecrementItem = (key: string) => {
    setSelection((prev) => decrementSelectionItem(prev, key));
  };

  const handleRemoveItem = (key: string) => {
    setSelection((prev) => removeSelectionItem(prev, key));
  };

  const handleClearSelection = () => {
    setSelection([]);
  };

  return (
    <div className="min-h-screen bg-washi-pattern text-[#1C1B19]">
      <HeroSection />

      <StickyCategoryNav
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <main>
        {/* Omakase Highlight Section (always visible unless user actively searches non-omakase terms) */}
        {!isFiltered && (
          <OmakaseSection
            selection={selection}
            onAdd={handleAddItem}
            onDecrement={handleDecrementItem}
          />
        )}

        {/* Search & Quick Filter Bar */}
        <SearchFilterBar
          query={query}
          onQueryChange={setQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          totalMatchingDishes={totalMatchingDishes}
          isFiltered={isFiltered}
        />

        {/* Editorial Menu Categories */}
        {visibleCategories.length > 0 ? (
          <div className="pt-4">
            {visibleCategories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                selection={selection}
                onAdd={handleAddItem}
                onDecrement={handleDecrementItem}
              />
            ))}
          </div>
        ) : (
          <section
            aria-label="Sin resultados"
            className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-8"
          >
            <div className="rounded-xl border border-[#B59150]/45 bg-[#EFECE4]/70 px-6 py-12">
              <SakuraBlossomOrnament className="mx-auto mb-4 h-12 w-12 opacity-70" />
              <h2 className="font-marcellus text-xl tracking-[0.18em] uppercase text-[#1C1B19]">
                Sin coincidencias en la carta
              </h2>
              <CrimsonDots className="mt-3" />
              <p className="font-mincho mt-4 text-sm text-[#57534E]">
                No encontramos platillos que coincidan con tu búsqueda actual. Prueba con otro
                corte o restablece los filtros para explorar toda la carta de DAKIMA.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setActiveFilter('all');
                }}
                className="mt-6 min-h-[44px] rounded-lg border border-[#9E2A2B] bg-[#9E2A2B] px-6 py-2.5 font-marcellus text-xs tracking-[0.16em] uppercase text-[#F6F3EC] transition-colors hover:bg-[#822021]"
              >
                Mostrar Toda la Carta
              </button>
            </div>
          </section>
        )}

        <LocationFooter />
      </main>

      <SelectionBar
        selection={selection}
        onAdd={handleAddItem}
        onDecrement={handleDecrementItem}
        onRemove={handleRemoveItem}
        onClear={handleClearSelection}
      />
    </div>
  );
}
