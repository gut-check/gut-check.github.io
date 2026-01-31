# Gut Check

A FODMAP food guide app to help you quickly check if foods are safe to eat on a low-FODMAP diet.

## Features

- **150+ Foods** across 9 categories (vegetables, fruits, grains, dairy, proteins, nuts/seeds, legumes, condiments, beverages)
- **Traffic Light System** - Green (low/safe), Orange (moderate/limit), Red (high/avoid)
- **Four Food Types**:

  | Type | Example | Meaning |
  |------|---------|---------|
  | Always safe | Carrot, Kale | Low FODMAP at any amount |
  | Safe with limit | Blueberries (1 cup) | Low up to tested serving |
  | Portion-dependent | Cabbage, Avocado | Changes from Low → Moderate → High based on portion |
  | Always avoid | Apple, Garlic | High FODMAP at any amount |

- **Search & Filter** - Find foods quickly by name or filter by FODMAP level
- **Category & A-Z Views** - Browse by food category or alphabetically
- **Flip Cards** - Click on high FODMAP foods to see:
  - Which FODMAPs they contain (fructans, lactose, fructose, GOS, sorbitol, mannitol)
  - Why they're high FODMAP
  - Low FODMAP alternatives to try

## Data Sources

Food data is based on [Monash University FODMAP Research](https://www.monashfodmap.com), the leading authority on FODMAP testing.

## Disclaimer

This app is for informational purposes only. Always consult a registered dietitian before starting a low-FODMAP diet.

## Development

### Project Structure

This is a single-file PWA. All code lives in `index.html`:

```
index.html          # Complete app (HTML, CSS, JS, and food database)
manifest.json       # PWA manifest
TODO.md             # Future improvements
FODMAP_RESEARCH.md  # Research log with confirmed data
src/                # Unused TypeScript version (not active)
```

### Food Database Location

The food database is embedded in `index.html` as JavaScript objects:

- **`foodData`** (~line 1370) - Main food entries organized by category
- **`foodDetails`** (~line 872) - Flip card details for high-FODMAP foods

### Food Entry Schema

```javascript
{
  name: "Food Name",           // Display name
  emoji: "🥕",                 // Visual icon
  level: "low",                // "low" | "moderate" | "high"
  serving: "75g (1 cup)",      // Optional: safe serving size
  portions: {                  // Optional: portion-dependent thresholds
    low: "50g",
    moderate: "100g",
    high: "150g+"
  }
}
```

### Categories

`vegetables`, `fruits`, `grains`, `dairy`, `proteins`, `nuts_seeds`, `legumes`, `condiments`, `beverages`, `prepared`, `alcohol`

### Adding New Foods

1. Find the appropriate category in `foodData` (~line 1370)
2. Add entry following the schema above
3. For high-FODMAP foods, add flip card details to `foodDetails` (~line 872)

### Research Resources

- [FODMAP_RESEARCH.md](FODMAP_RESEARCH.md) - Research log
- [Monash University FODMAP App](https://www.monashfodmap.com) - Primary data source

## License

MIT
