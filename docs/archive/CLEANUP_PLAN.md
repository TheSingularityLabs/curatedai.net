# Codebase Cleanup Plan

## Issues Identified

### 1. Duplicate Root-Level Directories ⚠️
**Location**: `best-for/`, `category/`, `news/`, `pricing/`, `tools/`
**Issue**: These exist in both root and `dist/pages/`. Build script generates to `dist/pages/`, so root-level ones are likely old duplicates.
**Action**: Verify if root-level directories are referenced anywhere, then remove if unused.

### 2. Documentation Files Organization 📁
**Location**: 34 `.md` files in root directory
**Issue**: Planning/analysis documents mixed with source code
**Action**: Move to `docs/` directory (or archive old ones)

### 3. Missing .gitignore ❌
**Issue**: No `.gitignore` file to exclude generated files
**Action**: Create `.gitignore` with:
- `dist/` (generated files)
- `node_modules/`
- `.DS_Store`
- Editor files

### 4. Console.log Statements ℹ️
**Location**: `build-seo.js` (36 instances)
**Status**: Acceptable for build scripts (provides useful output)
**Action**: Keep as-is (or optionally add log levels)

---

## Recommended Cleanup Actions

### Priority 1: Remove Duplicate Directories
```bash
# Verify these aren't referenced, then:
rm -rf best-for/ category/ news/ pricing/ tools/
```

### Priority 2: Organize Documentation
```bash
# Create docs directory
mkdir -p docs/archive

# Move planning docs to archive
mv *_STRATEGY.md docs/archive/
mv *_ANALYSIS.md docs/archive/
mv *_PLAN.md docs/archive/
mv *_VERIFICATION*.md docs/archive/
mv FAL_*.md docs/archive/
mv SITE_AUDIT*.md docs/archive/
mv IMPLEMENTATION*.md docs/archive/
mv IMPROVEMENTS*.md docs/archive/
mv QUALITY*.md docs/archive/
mv QUICK_WINS*.md docs/archive/
mv FIXES*.md docs/archive/
mv RECOMMENDED*.md docs/archive/
mv TOP_10*.md docs/archive/
mv NON_FAL*.md docs/archive/
mv OUTBOUND*.md docs/archive/
mv TOOL_PAGE*.md docs/archive/
mv DESIGN*.md docs/archive/
mv CATEGORY*.md docs/archive/
mv API_*.md docs/archive/
mv BACKLINK*.md docs/archive/
mv NAVIGATION*.md docs/archive/
mv PROGRAMMATIC*.md docs/archive/
mv SEO_*.md docs/archive/
mv AEO_*.md docs/archive/
```

### Priority 3: Add .gitignore
Create `.gitignore` with:
```
# Generated files
dist/

# Dependencies
node_modules/

# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log
npm-debug.log*
```

---

## Files to Keep in Root
- `README.md` (main documentation)
- `CLEANUP_PLAN.md` (this file, can move later)
- Source files: `index.html`, `app.js`, `build-seo.js`, `styles.css`, etc.
- `data/` directory
- `types.d.ts`

---

## After Cleanup
- Cleaner root directory
- Better organization
- Easier navigation
- Proper gitignore for version control

