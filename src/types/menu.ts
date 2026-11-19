export type QuickFilterId = 'all' | 'bluefin' | 'salmon' | 'hamachi' | 'tempura';

export type CategoryId =
  | 'omakase'
  | 'entradas'
  | 'nigiris'
  | 'makis'
  | 'temakis'
  | 'sashimis'
  | 'donburi'
  | 'bebidas'
  | 'postres';

export interface DishVariant {
  id: string;
  label: string;
  price: number;
}

export interface MenuDish {
  id: string;
  name: string;
  price?: number;
  description?: string;
  variants?: DishVariant[];
  choices?: string[];
  subGroup?: string;
  tags: Exclude<QuickFilterId, 'all'>[];
}

export interface MenuCategory {
  id: CategoryId;
  number: string;
  title: string;
  japaneseLabel: string;
  bannerImage: string;
  bannerAlt: string;
  chefNote?: string;
  layout: 'list' | 'nigiri-grid' | 'beverages';
  items: MenuDish[];
}

export interface OmakaseOption {
  id: string;
  name: string;
  price: number;
  timesLabel: string;
  subtitle: string;
}

export interface SelectionItem {
  key: string;
  dishId: string;
  categoryTitle: string;
  name: string;
  variantLabel?: string;
  unitPrice: number;
  quantity: number;
}

export interface SelectionSummary {
  totalPieces: number;
  totalAmount: number;
}
