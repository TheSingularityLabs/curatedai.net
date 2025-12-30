# Home Page Strategy

## Current State

**`index.html`** = Tools Directory (Search & Filter Interface)
- Search-first interface
- Shows all 109 tools
- Filter by category chips
- This is the MAIN tools discovery page

**`directory.html`** = Category-Based Directory
- Category grid layout
- Links to category pages
- Alternative navigation method

## Question

**Should `index.html` be:**
1. **General landing page** → Links to Directory, Guides, Prompts
2. **Tools directory only** → Current state (search & filter tools)

## Recommendation: **Keep Tools Directory as Home**

### Why Keep Current Structure:

✅ **Better SEO**: Tools are the primary content - having them on homepage is better for rankings

✅ **User Intent**: Most visitors come to find tools, not browse a landing page

✅ **Direct Access**: Users can immediately search/filter tools without extra clicks

✅ **Consistent with Cursor Directory**: Their homepage IS the directory, not a landing page

### Alternative Structure (If You Want Landing Page):

If you want a general landing page, structure would be:

```
index.html → General landing page
  ├── Hero: "Curated AI Tools, Guides & Prompts"
  ├── Quick links to:
  │   ├── Tools Directory (search interface)
  │   ├── Guides
  │   └── Prompts
  └── Stats/Overview

tools.html → Tools directory (move current index.html here)
directory.html → Category view (keep as is)
guides.html → Guides
prompts.html → Prompts
```

### My Recommendation:

**Keep `index.html` as the tools directory** because:
1. Tools are your primary content
2. Better for SEO (main content on homepage)
3. Better UX (users find tools immediately)
4. Matches Cursor's approach

**Use `directory.html`** as an alternative category-based view for users who prefer browsing by category instead of searching.

---

## Decision Needed

Please confirm:
- [ ] Keep `index.html` as tools directory (recommended)
- [ ] Convert `index.html` to general landing page

