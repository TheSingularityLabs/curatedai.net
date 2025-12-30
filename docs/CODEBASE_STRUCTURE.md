# Codebase Structure

## Root Directory

```
├── index.html              # Main tools directory (search & filter)
├── directory.html          # Category directory (grid layout)
├── news.html               # AI news page
├── ideas.html              # Tool ideas page
├── prompts.html            # Prompts directory
├── guides.html             # Guides index
├── 404.html                # Custom 404 error page
├── app.js                  # Main directory logic (search, filter, navigation)
├── news-page.js            # News page logic
├── ideas-page.js           # Ideas page logic
├── prompts-page.js         # Prompts page logic
├── build-seo.js            # Programmatic SEO generator
├── styles.css              # Shared styles (terminal theme)
├── favicon.svg             # Site icon
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
├── types.d.ts              # TypeScript definitions
├── README.md               # Main documentation
├── data/                   # Data files
│   ├── tools.js            # Curated tools data
│   ├── news.js             # News data
│   └── prompts.js          # Prompts library
├── dist/                   # Generated static pages
│   ├── pages/              # Generated pages
│   │   ├── tools/          # Individual tool pages
│   │   ├── category/       # Category pages
│   │   ├── guides/         # AEO guide pages
│   │   ├── news/           # News article pages
│   │   ├── compare/        # Comparison pages
│   │   ├── best-for/       # Best-for pages
│   │   ├── tags/           # Tag pages
│   │   └── pricing/        # Pricing pages
│   ├── styles.css          # Copied CSS
│   ├── sitemap.xml         # Generated sitemap
│   └── robots.txt          # Generated robots file
└── docs/                   # Documentation
    ├── archive/            # Historical documentation
    └── planning/           # Planning and proposals
```

## Key Files

### Core Pages
- **index.html**: Main search-first directory with filtering
- **directory.html**: Category-based browsing with grid layout
- **news.html**: Weekly AI news from The Singularity Labs
- **ideas.html**: Creative use cases and tool bundles
- **prompts.html**: Curated prompts library (236+ prompts)

### JavaScript Modules
- **app.js**: Main directory functionality (ES modules)
- **news-page.js**: News page rendering and TTS
- **ideas-page.js**: Ideas page rendering
- **prompts-page.js**: Prompts filtering and search
- **build-seo.js**: Static page generator (Node.js)

### Data Files
- **data/tools.js**: Tool definitions (ES module exports)
- **data/news.js**: News items (ES module exports)
- **data/prompts.js**: Prompt library (ES module exports)

### Generated Output
- **dist/pages/**: All generated static HTML pages
- **dist/sitemap.xml**: SEO sitemap
- **dist/robots.txt**: SEO robots file

## File Organization

### Documentation
- **README.md**: Main project documentation
- **docs/archive/**: Historical documentation and audits
- **docs/planning/**: Planning documents and proposals

### Static Assets
- **styles.css**: Shared stylesheet (terminal theme)
- **favicon.svg**: Site icon

## Build Process

1. **Edit data files**: Update `data/tools.js`, `data/news.js`, or `data/prompts.js`
2. **Generate pages**: Run `node build-seo.js`
3. **Test locally**: `python3 -m http.server 8000`
4. **Deploy**: Upload `dist/` and root HTML files

## SEO Features (2025-12-29)

- **QUICK ANSWER boxes**: All 72 guide pages include prominent one-sentence answers at the top for featured snippet optimization
- **FEATURED IN GUIDES**: All tool pages link back to 3-5 relevant guides for entity reinforcement
- **Thin page audit**: Documentation in `docs/THIN_PAGE_AUDIT.md` identifies 24 guides for consolidation
- **Update cadence**: Process documented in `docs/UPDATE_CADENCE.md` for 30-45 day content refresh cycles

## Module System

- **ES Modules**: All JavaScript uses ES6 `import`/`export`
- **No bundler**: Direct browser module loading
- **TypeScript types**: `types.d.ts` for IDE support

