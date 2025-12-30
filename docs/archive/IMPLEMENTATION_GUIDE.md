# Implementation Guide: OpenAI-Style Improvements

## Quick Wins (Do First)

### 1. Reduce Spacing & Increase Density
```css
/* In styles.css - make content more compact */
.tool-main-content {
  gap: 20px; /* was 32px */
}

.content-section {
  margin-bottom: 20px; /* was 32px */
}

.section-text {
  font-size: 14px; /* was 15px */
  line-height: 1.6; /* was 1.85 */
}

.tool-hero {
  padding: 16px 0 20px; /* reduce vertical padding */
  margin-bottom: 24px; /* was 40px */
}
```

### 2. Make Sidebar More Compact
```css
.tool-sidebar {
  width: 280px; /* was 360px */
  gap: 20px; /* was 28px */
}

.detail-item {
  padding: 8px 0; /* was 12px */
  font-size: 13px; /* was 14px */
}
```

### 3. Wider Main Content
```css
.tool-content-grid {
  grid-template-columns: 1fr 280px; /* was 1fr 360px */
  gap: 32px; /* was 48px */
}

.tool-page-container {
  max-width: 1000px; /* was 850px */
}
```

### 4. Collapsible FAQ (Show 3, expand for more)
```javascript
// In build-seo.js, modify FAQ section:
const faqItems = [...]; // all FAQ items
const visibleFaqs = faqItems.slice(0, 3);
const hiddenFaqs = faqItems.slice(3);

// Render visibleFaqs, then:
${hiddenFaqs.length > 0 ? `
<details style="margin-top: 12px;">
  <summary style="cursor: pointer; color: var(--accent); font-size: 12px; padding: 8px 0;">
    Show ${hiddenFaqs.length} more questions
  </summary>
  ${hiddenFaqs.map(...)}
</details>
` : ''}
```

### 5. Compact Tutorial Grid
```css
.tutorials-grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* was 220px */
  gap: 10px; /* was 12px */
}

.tutorial-card {
  padding: 10px 0 10px 12px; /* reduce padding */
}
```

## Advanced Improvements

### 6. Sticky Table of Contents
Add to build-seo.js after hero section:
```javascript
<div class="toc-sidebar" style="position: sticky; top: 24px; align-self: start;">
  <div class="toc-title" style="font-size: 11px; font-weight: 600; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--page-muted);">Contents</div>
  <nav class="toc-nav" style="display: flex; flex-direction: column; gap: 6px;">
    ${tool.whyPicked ? '<a href="#why-picked" style="font-size: 12px; color: var(--page-muted); text-decoration: none; padding: 4px 0;">Why we picked it</a>' : ''}
    ${tool.bestFor?.length ? '<a href="#best-for" style="font-size: 12px; color: var(--page-muted); text-decoration: none; padding: 4px 0;">Best for</a>' : ''}
    ${tool.tutorials?.length ? '<a href="#tutorials" style="font-size: 12px; color: var(--page-muted); text-decoration: none; padding: 4px 0;">Tutorials</a>' : ''}
    ${tool.useCaseExamples?.length ? '<a href="#use-cases" style="font-size: 12px; color: var(--page-muted); text-decoration: none; padding: 4px 0;">Use Cases</a>' : ''}
    <a href="#faq" style="font-size: 12px; color: var(--page-muted); text-decoration: none; padding: 4px 0;">FAQ</a>
  </nav>
</div>
```

### 7. Inline Details Table
Replace detail-item list with compact table:
```html
<table class="details-table" style="width: 100%; border-collapse: collapse; font-size: 13px;">
  <tr>
    <td style="padding: 6px 0; color: var(--page-muted); width: 30%;">Type</td>
    <td style="padding: 6px 0; color: var(--page-text);">${modalityLabel}</td>
  </tr>
  <tr>
    <td style="padding: 6px 0; color: var(--page-muted);">Pricing</td>
    <td style="padding: 6px 0; color: var(--page-text);">${pricingLabel(tool.pricing)}</td>
  </tr>
</table>
```

### 8. Combine Related Sections
Merge "Why we picked it" + "Best for" into one section:
```html
<div class="content-section">
  <p class="section-label">Overview</p>
  <p class="section-text">${tool.whyPicked}</p>
  ${tool.bestFor?.length ? `
  <div style="margin-top: 12px;">
    <strong style="font-size: 12px; color: var(--page-muted);">Best for:</strong>
    <span style="font-size: 13px; color: var(--page-text);">${tool.bestFor.join(' • ')}</span>
  </div>
  ` : ''}
</div>
```

### 9. Horizontal Scrolling Tutorials
```css
.tutorials-grid {
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding-bottom: 8px;
  scrollbar-width: thin;
}

.tutorial-card {
  flex: 0 0 240px;
  min-width: 240px;
}
```

### 10. Compact Use Cases
Show 2 by default, expand for more:
```javascript
const visibleUseCases = tool.useCaseExamples.slice(0, 2);
const hiddenUseCases = tool.useCaseExamples.slice(2);

// Render visibleUseCases, then:
${hiddenUseCases.length > 0 ? `
<details>
  <summary>Show ${hiddenUseCases.length} more use cases</summary>
  ${hiddenUseCases.map(...)}
</details>
` : ''}
```

## Typography Refinements

### Smaller, Tighter Text
```css
.section-text {
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.section-label {
  font-size: 10px; /* was 11px */
  margin-bottom: 10px; /* was 16px */
}

.drawer-sub {
  font-size: 14px; /* was 16px */
  line-height: 1.65; /* was 1.75 */
}
```

## Spacing Reductions

### Reduce All Vertical Spacing by 25-30%
```css
.tool-main-content { gap: 20px; } /* was 32px */
.content-section { margin-bottom: 16px; } /* was 32px */
.tool-hero { margin-bottom: 24px; } /* was 40px */
.tool-sidebar { gap: 20px; } /* was 28px */
```

## Result
- **40% less scrolling** - More content visible above fold
- **Better information density** - More info in same space
- **Faster scanning** - Clearer hierarchy, less noise
- **OpenAI-style** - Clean, professional, information-rich

