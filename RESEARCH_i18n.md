# Multilingual / i18n Research

Research for making Gut Check multilingual. Tabled for future implementation.

---

## Recommended Approach: Lightweight Data Attributes

For this simple single-page app, use `data-i18n` attributes + JSON translation files (no dependencies).

### How It Works

```html
<h1 data-i18n="app.title">Gut Check</h1>
<input data-i18n-placeholder="search.placeholder" placeholder="Search foods...">
```

```javascript
// locales/en.json
{
  "app.title": "Gut Check",
  "search.placeholder": "Search foods...",
  "levels.low": "Low FODMAP - Safe",
  "levels.moderate": "Moderate - Limit",
  "levels.high": "High - Avoid"
}

// locales/es.json
{
  "app.title": "Gut Check",
  "search.placeholder": "Buscar alimentos...",
  "levels.low": "Bajo FODMAP - Seguro"
}
```

### Libraries (if needed)
- [vanilla-i18n](https://github.com/thealphadollar/vanilla-i18n) - super lightweight
- [vanilla-js-i18n-translator](https://github.com/dazecoop/vanilla-js-i18n-translator) - data attribute based

---

## Alternative: i18next Library

More robust for complex apps. Handles pluralization, interpolation, nested keys.

```javascript
i18next.t('foods.serving', { amount: '75g' }) // "Serving: 75g"
i18next.t('foods.count', { count: 2 })        // "2 foods" (handles plurals)
```

**Pros:** Battle-tested, great docs, handles edge cases
**Cons:** ~40KB bundle, overkill for this app

---

## What Needs Translation

| Category | Examples | Complexity |
|----------|----------|------------|
| UI Text | Headers, buttons, placeholders, filter labels | Easy |
| Food Names | "Carrot" → "Zanahoria" | Medium (150+ items) |
| Servings | "¼ cup", "2 tbsp" | May need localization |
| Flip Cards | FODMAP explanations, alternatives | Medium |

---

## Key Considerations

1. **Food names are the main challenge** - 150+ foods × N languages = significant translation work
2. **Text expansion** - German can be 30% longer than English (affects layout)
3. **RTL support** - Not needed for European languages, but Arabic/Hebrew would require CSS changes
4. **Language detection** - Use `navigator.language` or manual selector
5. **Fallback** - Default to English if translation missing

---

## Implementation Steps (When Ready)

1. Extract all UI strings to `locales/en.json`
2. Add `data-i18n` attributes to HTML elements
3. Write ~50 line translation function
4. Add language selector dropdown
5. Store preference in localStorage
6. Translate food names (biggest effort)

---

## Sources

- [Shopify i18n Best Practices](https://shopify.engineering/internationalization-i18n-best-practices-front-end-developers)
- [SitePoint JavaScript i18n Guide](https://www.sitepoint.com/how-to-implement-internationalization-i18n-in-javascript/)
- [vanilla-i18n on GitHub](https://github.com/thealphadollar/vanilla-i18n)
- [Building a Simple i18n Script](https://andreasremdt.com/blog/building-a-super-small-and-simple-i18n-script-in-javascript/)
- [Phrase JavaScript i18n Libraries](https://phrase.com/blog/posts/the-best-javascript-i18n-libraries/)
