# Deployment Guide

## Pre-Deployment Checklist

✅ **Domain Configuration**
- All pages use `curatedai.net` (site domain)
- Parent company links use `thesingularitylabs.xyz` (footer, news source only)
- Canonical URLs updated across all pages
- Sitemap.xml updated (415 URLs)
- Robots.txt updated

✅ **Files Ready**
- `vercel.json` configured with build command
- All 230+ pages regenerated with correct domain
- Root HTML files updated (index, directory, news, guides, prompts, newsletter, ideas, 404)
- Data files ready (tools.js, news.js, prompts.js)

✅ **Links Verified**
- Internal links: All correct (tool→tool, category→tool, guide→tool/guide)
- External links: All valid (tool websites, parent company)
- Navigation links: All working

## Vercel Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Pre-deployment: Domain fixes and link verification"
git push
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect `vercel.json` configuration

### Step 3: Verify Settings
Vercel should auto-detect:
- **Build Command**: `node build-seo.js`
- **Output Directory**: `.` (root)
- **Install Command**: (none needed - no dependencies)

### Step 4: Deploy
- Click "Deploy"
- Vercel will run `node build-seo.js` automatically
- All pages will be generated in `dist/` directory
- Site will be live at your Vercel URL

### Step 5: Connect Custom Domain
1. In Vercel project settings → Domains
2. Add `curatedai.net`
3. Follow DNS configuration instructions
4. Update DNS records at Namecheap (or your registrar)

## Google Search Console Setup

### Step 1: Add Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter: `https://curatedai.net`

### Step 2: Verify Ownership
Choose one method:
- **DNS verification** (recommended): Add TXT record at Namecheap
- **HTML file**: Upload verification file to Vercel

### Step 3: Submit Sitemap
1. Go to Sitemaps section
2. Enter: `https://curatedai.net/sitemap.xml`
3. Click "Submit"

### Step 4: Request Indexing
Request indexing for key pages:
- `https://curatedai.net/`
- `https://curatedai.net/index.html`
- `https://curatedai.net/directory.html`
- `https://curatedai.net/guides.html`

## Post-Deployment Verification

### Check These URLs:
- ✅ Homepage: `https://curatedai.net/`
- ✅ Directory: `https://curatedai.net/index.html`
- ✅ Category page: `https://curatedai.net/dist/pages/category/text-to-video.html`
- ✅ Tool page: `https://curatedai.net/dist/pages/tools/runway.html`
- ✅ Guide page: `https://curatedai.net/dist/pages/guides/how-to-use-text-to-video-ai-tools.html`
- ✅ Sitemap: `https://curatedai.net/sitemap.xml`
- ✅ Robots: `https://curatedai.net/robots.txt`

### Verify:
- All pages load correctly
- No 404 errors
- Internal links work
- External links open correctly
- CSS/styles load properly
- Theme toggle works

## Important Notes

### Build Process
- `dist/` is in `.gitignore` (correct - don't commit generated files)
- Vercel runs `node build-seo.js` on every deploy
- Generated pages are created fresh on each deployment

### Domain Separation
- **Site domain**: `curatedai.net` (all pages, sitemap, canonical URLs)
- **Parent company**: `thesingularitylabs.xyz` (footer links, news attribution only)

### File Structure
```
/
├── index.html (root pages)
├── directory.html
├── news.html
├── guides.html
├── prompts.html
├── newsletter.html
├── ideas.html
├── 404.html
├── vercel.json (deployment config)
├── build-seo.js (page generator)
├── data/ (source data)
└── dist/ (generated - not in git)
    ├── pages/ (all generated pages)
    ├── sitemap.xml
    └── robots.txt
```

## Troubleshooting

### Build Fails on Vercel
- Check Node.js version (should be 18+)
- Verify `build-seo.js` runs locally: `node build-seo.js`
- Check Vercel build logs for errors

### Pages Not Loading
- Verify `outputDirectory` is `.` (root) in vercel.json
- Check that root HTML files are in repository
- Verify `dist/` is generated during build

### Links Broken
- Internal links use relative paths (tool→tool) or absolute from root (`/dist/pages/...`)
- External links are full URLs
- Verify all paths are correct in generated pages

## Next Steps After Deployment

1. **Monitor Google Search Console** for indexing status
2. **Check Core Web Vitals** in Google Search Console
3. **Submit sitemap** and request indexing
4. **Monitor 404 errors** and fix any broken links
5. **Track rankings** for target keywords
6. **Update content** regularly (30-45 day cadence per `docs/UPDATE_CADENCE.md`)

