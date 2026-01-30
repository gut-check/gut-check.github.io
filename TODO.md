# FODMAP App - Future Improvements

## Phase 2: Additional Common Foods (~30 items)



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

- [x] Lentils (Red, Boiled) - low at 23g, moderate at 46g, high at 75g+
- [x] Lentils (Green/Brown, Boiled) - low at 29g, moderate at 50g
- [x] Lentils (Le Puy/French) - low at 46g
- [x] Update existing "Lentils (Canned)" with portions field

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
