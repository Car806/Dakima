import {
  MenuCategory,
  MenuDish,
  QuickFilterId,
  SelectionItem,
  SelectionSummary,
} from '../types/menu';

export function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString('es-MX')}`;
}

export function matchesDishFilter(
  dish: MenuDish,
  query: string,
  filterId: QuickFilterId
): boolean {
  if (filterId !== 'all' && !dish.tags.includes(filterId)) {
    return false;
  }

  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) {
    return true;
  }

  const haystack = [
    dish.name,
    dish.description ?? '',
    dish.subGroup ?? '',
    ...(dish.choices ?? []),
    ...(dish.variants?.map((v) => v.label) ?? []),
  ]
    .map(normalizeText)
    .join(' ');

  return haystack.includes(normalizedQuery);
}

export function filterMenuCategories(
  categories: MenuCategory[],
  query: string,
  filterId: QuickFilterId
): MenuCategory[] {
  const hasQuery = normalizeText(query).length > 0;
  if (!hasQuery && filterId === 'all') {
    return categories;
  }

  return categories
    .map((category) => ({
      ...category,
      items: category.items.filter((dish) => matchesDishFilter(dish, query, filterId)),
    }))
    .filter((category) => category.items.length > 0);
}

export function buildSelectionKey(dishId: string, variantLabel?: string): string {
  return variantLabel ? `${dishId}::${variantLabel}` : dishId;
}

export function addSelectionItem(
  items: SelectionItem[],
  payload: {
    dishId: string;
    categoryTitle: string;
    name: string;
    variantLabel?: string;
    unitPrice: number;
  }
): SelectionItem[] {
  const key = buildSelectionKey(payload.dishId, payload.variantLabel);
  const existingIndex = items.findIndex((item) => item.key === key);

  if (existingIndex === -1) {
    return [
      ...items,
      {
        key,
        dishId: payload.dishId,
        categoryTitle: payload.categoryTitle,
        name: payload.name,
        variantLabel: payload.variantLabel,
        unitPrice: payload.unitPrice,
        quantity: 1,
      },
    ];
  }

  return items.map((item, idx) =>
    idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
  );
}

export function decrementSelectionItem(items: SelectionItem[], key: string): SelectionItem[] {
  return items
    .map((item) => (item.key === key ? { ...item, quantity: item.quantity - 1 } : item))
    .filter((item) => item.quantity > 0);
}

export function removeSelectionItem(items: SelectionItem[], key: string): SelectionItem[] {
  return items.filter((item) => item.key !== key);
}

export function getSelectionSummary(items: SelectionItem[]): SelectionSummary {
  return items.reduce<SelectionSummary>(
    (acc, item) => ({
      totalPieces: acc.totalPieces + item.quantity,
      totalAmount: acc.totalAmount + item.unitPrice * item.quantity,
    }),
    { totalPieces: 0, totalAmount: 0 }
  );
}

export function buildWhatsAppComandaUrl(items: SelectionItem[]): string {
  const summary = getSelectionSummary(items);
  const lines = items.map((item) => {
    const label = item.variantLabel ? `${item.name} (${item.variantLabel})` : item.name;
    return `• ${item.quantity}x ${label} — ${formatCurrency(item.unitPrice * item.quantity)}`;
  });

  const message = [
    'Hola DAKIMA, me gustaría reservar una mesa con esta selección sugerida:',
    ...lines,
    `Total estimado: ${formatCurrency(summary.totalAmount)}`,
  ].join('\n');

  return `https://wa.me/523331132123?text=${encodeURIComponent(message)}`;
}
