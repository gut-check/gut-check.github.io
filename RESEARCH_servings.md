# Serving Size Standardization

Goal: Make all serving sizes intuitive by combining grams with visual references, piece counts, and household measures.

---

## Format Guidelines

**Primary format:** `"Xg (visual/count/measure)"`

Use the most intuitive description for each food type:

| Food Type | Best Description | Example |
|-----------|------------------|---------|
| Countable items | Piece count | `"20g (3 cherries)"` |
| Leafy/loose | Handful/cup visual | `"75g (1 cup, loose)"` |
| Dense/chopped | Household measure | `"60g (¼ cup)"` |
| Spreads/liquids | Tablespoons | `"30g (2 tbsp)"` |
| Whole items | Fraction of item | `"40g (⅛ mango)"` |

---

## Foods to Update

### Vegetables (cup-only → grams + visual)

| Current | Updated |
|---------|---------|
| `"¾ cup heads"` (Broccoli) | `"75g (1 cup florets)"` |
| `"½ cup (2 sprouts)"` (Brussels) | `"40g (2 sprouts)"` |
| `"1 cup"` (Mushrooms Oyster) | `"75g (1 cup)"` |
| `"¼ cup"` (Peas Green) | `"45g (¼ cup, small handful)"` |
| `"¼ cup"` (Squash Butternut) | `"45g (¼ cup diced)"` |

### Fruits (cup-only → grams + visual)

| Current | Updated |
|---------|---------|
| `"1 cup"` (Blueberries) | `"150g (1 cup, large handful)"` |
| `"¾ cup"` (Cantaloupe) | `"120g (¾ cup cubed)"` |
| `"1 cup"` (Cranberries) | `"100g (1 cup)"` |
| `"½ cup"` (Honeydew) | `"90g (½ cup cubed)"` |
| `"1 cup"` (Pineapple) | `"140g (1 cup chunks)"` |
| `"⅓ cup max"` (Raspberry) | `"60g (⅓ cup, small handful)"` |

### Grains

| Current | Updated |
|---------|---------|
| `"½ cup"` (Oats) | `"45g dry (½ cup)"` |
| `"½ cup"` (Wheat Pasta) | `"75g cooked (½ cup)"` |

### Legumes

| Current | Updated |
|---------|---------|
| `"¼ cup"` (Black Beans) | `"45g (¼ cup)"` |
| `"¼ cup max"` (Chickpeas) | `"42g (¼ cup)"` |

### Beverages

| Current | Updated |
|---------|---------|
| `"¾ cup"` (Cranberry Juice) | `"180ml (¾ cup)"` |

---

## Visual Reference Guide

For user understanding:

| Grams | Visual Equivalent |
|-------|-------------------|
| 15g | 1 tablespoon |
| 30g | 2 tablespoons / golf ball |
| 45g | ¼ cup / small handful |
| 75g | ⅓ cup / tennis ball |
| 90g | ½ cup / half fist |
| 150g | 1 cup / full fist |

---

## Implementation Checklist

- [x] Broccoli: `"75g (1 cup florets)"`
- [x] Brussels Sprouts: `"40g (2 sprouts)"`
- [x] Mushrooms (Oyster): `"75g (1 cup)"`
- [x] Peas (Green): `"45g (small handful)"`
- [x] Squash (Butternut): `"45g (¼ cup diced)"`
- [x] Blueberries: `"150g (1 cup)"`
- [x] Cantaloupe: `"120g (¾ cup cubed)"`
- [x] Cranberries (Fresh): `"100g (1 cup)"`
- [x] Honeydew: `"90g (½ cup cubed)"`
- [x] Pineapple: `"140g (1 cup chunks)"`
- [x] Raspberry: `"60g (small handful)"`
- [x] Oats: `"45g dry (½ cup)"`
- [x] Wheat Pasta: `"75g cooked (½ cup)"`
- [x] Black Beans: `"45g (¼ cup)"`
- [x] Chickpeas (Canned): `"42g (¼ cup)"`
- [x] Cranberry Juice: `"180ml (¾ cup)"`
