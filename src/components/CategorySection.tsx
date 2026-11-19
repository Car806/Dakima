import React, { useEffect, useRef, useState } from 'react';
import { MenuCategory, MenuDish, SelectionItem } from '../types/menu';
import { CategoryBanner } from './CategoryBanner';
import { DishRow } from './DishRow';

interface CategorySectionProps {
  category: MenuCategory;
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

function groupBySubGroup(items: MenuDish[]): { groupName: string; items: MenuDish[] }[] {
  const map = new Map<string, MenuDish[]>();
  for (const item of items) {
    const key = item.subGroup ?? 'General';
    const existing = map.get(key);
    if (existing) {
      existing.push(item);
    } else {
      map.set(key, [item]);
    }
  }
  return Array.from(map.entries()).map(([groupName, groupItems]) => ({
    groupName,
    items: groupItems,
  }));
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  selection,
  onAdd,
  onDecrement,
}) => {
  const headingId = `heading-${category.id}`;
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.02 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={category.id}
      aria-labelledby={headingId}
      className={`pb-12 sm:pb-16 transition-[opacity,transform] duration-500 ease-out ${
        revealed ? 'opacity-100 translate-y-0' : 'opacity-95 translate-y-2'
      }`}
    >
      <CategoryBanner
        number={category.number}
        title={category.title}
        japaneseLabel={category.japaneseLabel}
        bannerImage={category.bannerImage}
        bannerAlt={category.bannerAlt}
        headingId={headingId}
      />

      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-8 sm:pt-10">
        {category.chefNote && (
          <div className="mb-8 border-y border-[#9E2A2B]/35 bg-[#EFECE4]/80 px-5 py-4 text-center">
            <p className="font-mincho text-xs sm:text-sm tracking-[0.14em] uppercase text-[#1C1B19]">
              {category.chefNote}
            </p>
          </div>
        )}

        {category.layout === 'nigiri-grid' && (
          <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
            {category.items.map((dish) => (
              <DishRow
                key={dish.id}
                dish={dish}
                categoryTitle={category.title}
                compact
                selection={selection}
                onAdd={onAdd}
                onDecrement={onDecrement}
              />
            ))}
          </div>
        )}

        {category.layout === 'beverages' && (
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {groupBySubGroup(category.items).map(({ groupName, items }) => (
              <div
                key={groupName}
                className="rounded-xl border border-[#B59150]/35 bg-[#EFECE4]/45 p-5 sm:p-6"
              >
                <div className="mb-3 flex items-center justify-between border-b border-[#9E2A2B]/35 pb-2.5">
                  <h3 className="font-marcellus text-base sm:text-lg tracking-[0.16em] uppercase text-[#1C1B19]">
                    {groupName}
                  </h3>
                  <span className="font-mincho text-xs text-[#57534E] tabular-nums">
                    {items.length} opciones
                  </span>
                </div>
                <div>
                  {items.map((dish) => (
                    <DishRow
                      key={dish.id}
                      dish={dish}
                      categoryTitle={category.title}
                      compact
                      selection={selection}
                      onAdd={onAdd}
                      onDecrement={onDecrement}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {category.layout === 'list' && (
          <div className="divide-y-0">
            {category.items.map((dish) => (
              <DishRow
                key={dish.id}
                dish={dish}
                categoryTitle={category.title}
                selection={selection}
                onAdd={onAdd}
                onDecrement={onDecrement}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
