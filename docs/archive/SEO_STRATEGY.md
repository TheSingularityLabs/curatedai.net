# Programmatic SEO (AEO) Strategy

## Overview
Generate 200+ SEO-optimized pages automatically from tool data to capture long-tail traffic.

## Page Types to Generate

### 1. Individual Tool Pages (71 pages)
**URL Pattern**: `/tools/{tool-slug}/`
**Example**: `/tools/suno/`, `/tools/veo-3-1/`

**Content Structure**:
- H1: "{Tool Name} - {Modality} AI Tool"
- Meta description: "{whatItDoes} - {whyPicked}. Best for {bestFor[0]}, {bestFor[1]}, {bestFor[2]}."
- Full tool details
- Related tools (same modality)
- Comparison table with similar tools
- FAQ section (auto-generated)

**Target Keywords**:
- "{tool name} review"
- "{tool name} pricing"
- "best {modality} tool"
- "{tool name} vs {competitor}"

---

### 2. Modality Category Pages (8 pages)
**URL Pattern**: `/category/{modality-slug}/`
**Example**: `/category/text-to-video/`, `/category/image-to-image/`

**Content Structure**:
- H1: "Best {Modality} AI Tools (2025)"
- List of all tools in category
- Comparison table
- "How to choose" guide
- Top 5 picks

**Target Keywords**:
- "best text to video ai"
- "text to video tools"
- "image to video generator"
- "{modality} ai tools comparison"

---

### 3. "Best For" Pages (25+ pages)
**URL Pattern**: `/best-for/{use-case-slug}/`
**Example**: `/best-for/music-generation/`, `/best-for/3d-assets/`

**Content Structure**:
- H1: "Best AI Tools for {Use Case}"
- Tools tagged with this use case
- Comparison matrix
- Use case guide

**Target Keywords**:
- "best ai tools for music"
- "ai tools for 3d modeling"
- "best tools for video editing"

---

### 4. Pricing Pages (4 pages)
**URL Pattern**: `/pricing/{tier}/`
**Example**: `/pricing/free/`, `/pricing/freemium/`, `/pricing/paid/`

**Content Structure**:
- List of tools by pricing tier
- Comparison table
- Value analysis

**Target Keywords**:
- "free text to video ai"
- "freemium ai tools"
- "paid ai video generators"

---

### 5. Comparison Pages (50+ pages)
**URL Pattern**: `/compare/{tool1}-vs-{tool2}/`
**Example**: `/compare/suno-vs-stable-audio/`, `/compare/flux-vs-imagen/`

**Content Structure**:
- Side-by-side comparison
- Feature matrix
- Use case recommendations
- Winner declaration

**Target Keywords**:
- "{tool1} vs {tool2}"
- "compare {tool1} and {tool2}"
- "{tool1} alternative"

---

### 6. Use Case Pages (20+ pages)
**URL Pattern**: `/use-cases/{use-case}/`
**Example**: `/use-cases/music-production/`, `/use-cases/video-editing/`

**Content Structure**:
- Problem statement
- Tool recommendations
- Step-by-step guide
- Examples

**Target Keywords**:
- "ai tools for music production"
- "best ai for video editing"
- "ai tools for content creators"

---

### 7. Tag/Feature Pages (30+ pages)
**URL Pattern**: `/tags/{tag}/`
**Example**: `/tags/open-source/`, `/tags/api/`, `/tags/fast/`

**Content Structure**:
- Tools with this tag/feature
- Why it matters
- Comparison

**Target Keywords**:
- "open source ai tools"
- "ai tools with api"
- "fast ai video generators"

---

## Technical Implementation

### Static Site Generation
- Build script generates all pages at build time
- Each page is a standalone HTML file
- Pre-rendered for instant SEO

### Meta Tags (per page)
```html
<title>{Tool Name} - {Modality} AI Tool | AI Tool Directory</title>
<meta name="description" content="{whatItDoes} - {whyPicked}...">
<meta name="keywords" content="{tool name}, {modality}, ai tools">
<link rel="canonical" href="https://aitools.thesingularitylabs.xyz/tools/{slug}/">
```

### Structured Data (JSON-LD)
- Tool schema
- FAQ schema
- Comparison schema
- Breadcrumb schema

### Sitemap
- Auto-generate `sitemap.xml` with all pages
- Update on each build

### Internal Linking
- Tool pages link to category pages
- Category pages link to tool pages
- Related tools section on each page
- Breadcrumbs on all pages

---

## Content Generation Strategy

### Auto-Generated Content
1. **Tool descriptions**: Use `whatItDoes` + `whyPicked`
2. **FAQs**: Generate from tool data
   - "Is {tool} free?"
   - "What can I do with {tool}?"
   - "How does {tool} compare to alternatives?"
3. **Comparison tables**: Auto-generate from tool data
4. **Related tools**: Same modality, similar pricing, same tags

### Human-Curated Content
1. **Use case guides**: Write 1-2 paragraphs per use case
2. **Category introductions**: 200-300 words per category
3. **Comparison conclusions**: "Winner" sections

---

## SEO Optimization

### On-Page SEO
- ✅ Unique titles (70 chars max)
- ✅ Meta descriptions (155 chars)
- ✅ H1, H2, H3 hierarchy
- ✅ Internal linking (3-5 links per page)
- ✅ Image alt text
- ✅ Fast load times
- ✅ Mobile responsive

### Technical SEO
- ✅ XML sitemap
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Structured data
- ✅ Open Graph tags
- ✅ Twitter cards

### Content SEO
- ✅ Long-tail keywords
- ✅ Natural language
- ✅ User intent matching
- ✅ E-E-A-T signals (curation = expertise)

---

## Traffic Projections

### Page Count
- Tool pages: 71
- Category pages: 8
- Best for pages: 25
- Pricing pages: 4
- Comparison pages: 50+
- Use case pages: 20+
- Tag pages: 30+

**Total: 200+ pages**

### Keyword Targets
- High volume: "best ai tools", "text to video ai" (10K+ monthly)
- Medium volume: "{tool name} review" (1K-10K monthly)
- Long-tail: "best free text to video ai for beginners" (100-1K monthly)

### Expected Results (6-12 months)
- 10K-50K monthly organic visitors
- 500-2K keywords ranking
- Top 3 rankings for long-tail queries

---

## Implementation Priority

### Phase 1 (Week 1-2)
1. Individual tool pages (71 pages)
2. Category pages (8 pages)
3. Basic sitemap

### Phase 2 (Week 3-4)
4. Best for pages (25 pages)
5. Pricing pages (4 pages)
6. Structured data

### Phase 3 (Month 2)
7. Comparison pages (50+ pages)
8. Use case pages (20+ pages)
9. Tag pages (30+ pages)

### Phase 4 (Month 3+)
10. Content optimization
11. Link building
12. Performance monitoring

---

## Tools Needed

1. **Static Site Generator**: 
   - Option A: Keep current setup, add build script
   - Option B: Migrate to 11ty/Eleventy (recommended for programmatic SEO)

2. **Content Generation**:
   - Template system for page generation
   - Data processing scripts

3. **SEO Tools**:
   - Google Search Console
   - Ahrefs/SEMrush (tracking)
   - Screaming Frog (audits)

---

## Next Steps

1. ✅ Create build script for page generation
2. ✅ Set up template system
3. ✅ Generate first 10 tool pages (test)
4. ✅ Deploy and test
5. ✅ Generate remaining pages
6. ✅ Submit sitemap to Google
7. ✅ Monitor and optimize

