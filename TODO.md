# FODMAP App - Future Improvements

## Phase 2: Additional Common Foods (~30 items)

### Vegetables
- [x] Water chestnuts (low)
- [x] Bamboo shoots (low)
- [x] Celeriac (high - different from celery)
- [x] Rutabaga (low)
- [x] Romaine lettuce (low)
- [x] Iceberg lettuce (low)
- [x] Endive (low)
- [x] Okra (low)
- [x] Jicama (low)
- [x] Hearts of palm (low)

### Fruits
- [x] Figs fresh (moderate)
- [x] Figs dried (high)
- [x] Lychee (moderate)
- [x] Longan (moderate)
- [x] Dragon fruit (low)
- [x] Pomegranate (low, small serve)
- [x] Guava (low)
- [x] Persimmon (high)
- [x] Rhubarb (low)
- [x] Coconut fresh meat (low)

### Proteins
- [x] Lamb (low) - already existed
- [x] Duck (low)
- [x] Turkey (low) - already existed
- [x] Venison (low)
- [x] Crab (low) - already existed
- [x] Lobster (low) - already existed
- [x] Oysters (low)
- [x] Mussels (low)
- [x] Scallops (low)

### Grains
- [x] Spelt flour (moderate)
- [x] Kamut (high)
- [x] Amaranth (low)
- [x] Teff (low)

### Dairy Alternatives
- [x] Oat milk (low, small serve)
- [x] Rice milk (low)
- [x] Hemp milk (low)

### Legumes - Lentil Varieties (Priority)

Expand current "Lentils (Canned)" to show all varieties with portion-dependent ratings:

| Lentil Type          | Low FODMAP Serving | Notes                        |
| -------------------- | ------------------ | ---------------------------- |
| Canned (Brown/Green) | ¼ cup (46g)        | Safest - rinsing removes GOS |
| Red Lentils (boiled) | 23g only           | Higher GOS + fructans        |
| Green/Brown (boiled) | 29g (~¼ cup)       | Moderate GOS                 |
| Le Puy/French Green  | ¼ cup (46g)        | Similar to canned            |

**Key info for flip cards:**

- All lentils contain GOS (galacto-oligosaccharides)
- Canned & rinsed = lower FODMAPs (compounds dissolve in water)
- Boiled from dry = higher FODMAPs
- Stick to ¼ cup (45-60g) max portions
- Add portion guide visualization (🟢 🟡 🔴)

Foods to add:

- [ ] Lentils (Red, Boiled) - low at 23g, moderate at 46g, high at 75g+
- [ ] Lentils (Green/Brown, Boiled) - low at 29g, moderate at 50g
- [ ] Lentils (Le Puy/French) - low at 46g
- [ ] Update existing "Lentils (Canned)" with portions field

### Prepared Foods
- [ ] Pizza (depends on crust)
- [ ] Gyoza/dumplings (check filling)
- [ ] Spring rolls (check filling)
- [ ] Pad Thai (check sauce)

---

## Feature Ideas

### Data Improvements
- [ ] Add `portions` field to all portion-dependent foods
- [ ] Add flip card details to ALL foods (not just high FODMAP)
- [ ] Add food photos instead of emojis
- [ ] Add barcode scanning integration

### UI Improvements
- [x] Dark mode support (auto-detects system preference)
- [ ] Food comparison view
- [ ] Meal builder/tracker
- [ ] Shopping list generator
- [ ] Favorites/bookmarks

### Technical
- [ ] Extract food data to separate JSON file
- [ ] Add service worker for offline use
- [x] Add PWA manifest for installable app
- [ ] Add food search suggestions/autocomplete
