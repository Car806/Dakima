import test from 'node:test';
import assert from 'node:assert/strict';
import { MENU_CATEGORIES } from '../data/menuData';
import {
  addSelectionItem,
  decrementSelectionItem,
  filterMenuCategories,
  formatCurrency,
  getSelectionSummary,
  removeSelectionItem,
} from './menuLogic';

test('formatCurrency formats Mexican pesos cleanly without decimals', () => {
  assert.equal(formatCurrency(90), '$90');
  assert.equal(formatCurrency(1200), '$1,200');
  assert.equal(formatCurrency(1600), '$1,600');
});

test('filterMenuCategories filters by Bluefin tuna tag and ignores accents in search', () => {
  const bluefinOnly = filterMenuCategories(MENU_CATEGORIES, '', 'bluefin');
  assert.ok(bluefinOnly.length > 0);
  for (const cat of bluefinOnly) {
    for (const item of cat.items) {
      assert.ok(item.tags.includes('bluefin'));
    }
  }

  const queryMatch = filterMenuCategories(MENU_CATEGORIES, 'salmon', 'all');
  const salmonNigiri = queryMatch
    .find((c) => c.id === 'nigiris')
    ?.items.find((i) => i.id === 'nigiri-salmon');
  assert.ok(salmonNigiri);
  assert.equal(salmonNigiri.price, 85);
});

test('filterMenuCategories returns empty array when no dish matches search', () => {
  const empty = filterMenuCategories(MENU_CATEGORIES, 'pizza peperoni', 'all');
  assert.equal(empty.length, 0);
});

test('selection logic adds items, differentiates variants, decrements, and computes totals', () => {
  let selection = addSelectionItem([], {
    dishId: 'bao',
    categoryTitle: 'ENTRADAS',
    name: 'BAO',
    variantLabel: 'Cerdo',
    unitPrice: 100,
  });

  selection = addSelectionItem(selection, {
    dishId: 'bao',
    categoryTitle: 'ENTRADAS',
    name: 'BAO',
    variantLabel: 'Jaiba',
    unitPrice: 115,
  });

  selection = addSelectionItem(selection, {
    dishId: 'omakase-corto',
    categoryTitle: 'OMAKASE',
    name: 'OMAKASE CORTO',
    variantLabel: '8 TIEMPOS + BEBIDA',
    unitPrice: 1200,
  });

  selection = addSelectionItem(selection, {
    dishId: 'bao',
    categoryTitle: 'ENTRADAS',
    name: 'BAO',
    variantLabel: 'Cerdo',
    unitPrice: 100,
  });

  assert.equal(selection.length, 3);
  assert.deepEqual(getSelectionSummary(selection), {
    totalPieces: 4,
    totalAmount: 1515,
  });

  selection = decrementSelectionItem(selection, 'bao::Cerdo');
  assert.deepEqual(getSelectionSummary(selection), {
    totalPieces: 3,
    totalAmount: 1415,
  });

  selection = removeSelectionItem(selection, 'omakase-corto::8 TIEMPOS + BEBIDA');
  assert.deepEqual(getSelectionSummary(selection), {
    totalPieces: 2,
    totalAmount: 215,
  });
});
