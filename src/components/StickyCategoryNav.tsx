import React, { useRef } from 'react';
import { CategoryId } from '../types/menu';

interface CategoryTab {
  id: CategoryId;
  label: string;
}

const CATEGORY_TABS: CategoryTab[] = [
  { id: 'omakase', label: 'Omakase' },
  { id: 'entradas', label: 'Entradas' },
  { id: 'nigiris', label: 'Nigiris' },
  { id: 'makis', label: 'Makis' },
  { id: 'temakis', label: 'Temakis' },
  { id: 'sashimis', label: 'Sashimis' },
  { id: 'donburi', label: 'Donburi' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'postres', label: 'Postres' },
];

interface StickyCategoryNavProps {
  activeCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
}

export const StickyCategoryNav: React.FC<StickyCategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleClick = (id: CategoryId) => {
    onSelectCategory(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      aria-label="Categorías del menú"
      className="sticky top-0 z-30 border-b border-[#B59150]/35 bg-[#F6F3EC]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(20,20,19,0.05)]"
    >
      <div
        ref={scrollContainerRef}
        className="no-scrollbar mx-auto flex h-12 max-w-6xl items-center gap-1 overflow-x-auto px-3 sm:px-8 md:justify-center md:gap-2"
      >
        {CATEGORY_TABS.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleClick(tab.id)}
              aria-current={isActive ? 'true' : undefined}
              className={`relative flex h-11 shrink-0 items-center px-3 font-marcellus text-xs sm:text-[13px] tracking-[0.14em] uppercase whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E2A2B] ${
                isActive
                  ? 'text-[#9E2A2B]'
                  : 'text-[#57534E] hover:text-[#1C1B19]'
              }`}
            >
              <span>{tab.label}</span>
              <span
                aria-hidden="true"
                className={`absolute right-2 bottom-0 left-2 h-[2px] bg-[#9E2A2B] transition-transform duration-200 ${
                  isActive ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
};
