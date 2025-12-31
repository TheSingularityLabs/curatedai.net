# Google Search Console Setup Guide

## Overview
Google Search Console is essential for monitoring your site's search performance, indexing status, and SEO health. This guide walks you through complete setup and optimization.

## Prerequisites
✅ Site is live at `https://curatedai.net`  
✅ Sitemap is accessible at `https://curatedai.net/sitemap.xml`  
✅ Robots.txt is accessible at `https://curatedai.net/robots.txt`  
✅ All pages are loading correctly  

## Step 1: Create Google Search Console Account

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Add Property"**

## Step 2: Add Property (Domain vs URL Prefix)

### Option A: Domain Property (Recommended)
- **Enter**: `curatedai.net` (without https://)
- **Benefits**: Covers all subdomains (www, non-www) automatically
- **Best for**: Future-proofing if you add subdomains

### Option B: URL Prefix Property
- **Enter**: `https://curatedai.net`
- **Benefits**: Simpler verification, more specific
- **Best for**: Single domain setup

**Recommendation**: Use **Domain Property** (`curatedai.net`)

## Step 3: Verify Ownership

### Method 1: DNS Verification (Recommended for Domain Property)
1. Google provides a TXT record to add
2. Go to Namecheap → Domain List → `curatedai.net` → Advanced DNS
3. Add new TXT record:
   - **Host**: `@` (or leave blank)
   - **Value**: Copy from Google Search Console
   - **TTL**: Automatic (or 3600)
4. Click **"Verify"** in Google Search Console
5. **Note**: DNS propagation can take 5-60 minutes

### Method 2: HTML File Upload (For URL Prefix)
1. Download verification HTML file from Google
2. Upload to Vercel:
   - Add file to repository root
   - Commit and push
   - File should be accessible at `https://curatedai.net/google[random].html`
3. Click **"Verify"** in Google Search Console

### Method 3: HTML Tag (Alternative)
1. Copy meta tag from Google
2. Add to `<head>` of `index.html`:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
3. Commit, push, deploy
4. Click **"Verify"** in Google Search Console

**Recommendation**: Use **DNS Verification** (most reliable)

## Step 4: Submit Sitemap

1. In Google Search Console, go to **Sitemaps** (left sidebar)
2. Enter sitemap URL: `https://curatedai.net/sitemap.xml`
3. Click **"Submit"**
4. **Status**: Should show "Success" within a few hours

### Expected Results
- **Submitted**: 1 sitemap
- **Discovered URLs**: ~415 URLs (matches your sitemap)
- **Indexed**: Will start at 0, grow over days/weeks

## Step 5: Request Initial Indexing

### Priority Pages to Request Indexing
1. **Homepage**: `https://curatedai.net/`
2. **Main Tools Page**: `https://curatedai.net/index.html`
3. **Directory**: `https://curatedai.net/directory.html`
4. **Guides Index**: `https://curatedai.net/guides.html`
5. **News**: `https://curatedai.net/news.html`
6. **Newsletter**: `https://curatedai.net/newsletter.html`

### How to Request Indexing
1. Use **URL Inspection** tool (top search bar)
2. Enter URL
3. Click **"Request Indexing"**
4. **Note**: Google limits requests (don't spam - request key pages only)

## Step 6: Configure Settings

### Site Settings
1. Go to **Settings** → **Users and permissions**
2. Add team members if needed
3. Set up email notifications

### International Targeting
- **Default**: No hreflang needed (single language: English)
- **Location**: Not applicable (global audience)

### Crawl Rate
- **Default**: Let Google decide
- **Only change if**: You have crawl budget issues (unlikely with 415 URLs)

## Step 7: Monitor Initial Status

### Check After 24-48 Hours

1. **Coverage Report** (Index → Coverage)
   - **Valid**: Should show pages being indexed
   - **Errors**: Check for 404s, redirects, blocked pages
   - **Warnings**: Review excluded pages

2. **Sitemaps Report** (Sitemaps)
   - **Status**: Should show "Success"
   - **Discovered URLs**: Should match your sitemap count (~415)

3. **Performance Report** (Performance)
   - **Initial**: Will be empty (no search data yet)
   - **After indexing**: Will show impressions, clicks, CTR

4. **URL Inspection** (Individual URLs)
   - Test key pages: `https://curatedai.net/`
   - Check: "URL is on Google" status

## Step 8: Fix Common Issues

### Issue: Sitemap Shows Errors
**Solution**: 
- Verify sitemap is accessible: `https://curatedai.net/sitemap.xml`
- Check for XML syntax errors
- Ensure all URLs use `https://curatedai.net`

### Issue: Pages Not Indexing
**Possible Causes**:
- **Robots.txt blocking**: Check `https://curatedai.net/robots.txt`
- **Noindex tags**: Verify pages don't have `<meta name="robots" content="noindex">`
- **Duplicate content**: Check canonical URLs
- **Low quality**: Ensure pages have sufficient content

**Solutions**:
- Remove any `Disallow` rules blocking pages
- Ensure canonical URLs are correct
- Add more unique content if pages are thin

### Issue: Coverage Errors
**Common Errors**:
- **404 Not Found**: Fix broken internal links
- **Redirect**: Update links to final destination
- **Blocked by robots.txt**: Remove blocking rules
- **Soft 404**: Improve page content quality

## Step 9: Ongoing Monitoring

### Weekly Checks
- [ ] Review Coverage report for new errors
- [ ] Check Performance for new keywords
- [ ] Monitor indexing status of new pages

### Monthly Reviews
- [ ] Analyze top-performing pages
- [ ] Identify indexing issues
- [ ] Review search queries and CTR
- [ ] Check Core Web Vitals

### Key Metrics to Track
1. **Total Indexed Pages**: Should grow from 0 → 200+ over weeks
2. **Impressions**: Search visibility
3. **Clicks**: Traffic from Google
4. **CTR**: Click-through rate (aim for 2-5%)
5. **Average Position**: Ranking for keywords
6. **Coverage Errors**: Should stay minimal

## Step 10: Optimize for Search Console

### Enhancements to Add

1. **Structured Data** (Already implemented)
   - ✅ WebSite schema
   - ✅ ItemList schema
   - ✅ Article schema
   - ✅ HowTo schema
   - ✅ FAQPage schema
   - ✅ BreadcrumbList schema

2. **Core Web Vitals** (Monitor in Search Console)
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

3. **Mobile Usability**
   - Check Mobile Usability report
   - Fix any mobile issues
   - Ensure responsive design works

4. **Security Issues**
   - Monitor for malware warnings
   - Check HTTPS coverage (should be 100%)

## Step 11: Submit Key Pages for Indexing

### Initial Batch (Request Indexing)
```
https://curatedai.net/
https://curatedai.net/index.html
https://curatedai.net/directory.html
https://curatedai.net/guides.html
https://curatedai.net/news.html
https://curatedai.net/prompts.html
https://curatedai.net/newsletter.html
```

### Category Pages (High Priority)
- Top 10 category pages (text-to-video, image-generation, etc.)
- Request indexing after main pages are indexed

### Tool Pages (Let Google Discover)
- Don't manually request all 117+ tool pages
- Let Google crawl via sitemap and internal links
- Only request if specific tool page isn't indexing after 2+ weeks

## Step 12: Set Up Email Notifications

1. Go to **Settings** → **Users and permissions**
2. Click your email → **Settings**
3. Enable notifications for:
   - ✅ Critical issues
   - ✅ New security issues
   - ✅ Manual actions
   - ✅ Sitemap issues

## Troubleshooting

### Verification Fails
- **DNS**: Wait 1 hour, check TXT record is correct
- **HTML File**: Ensure file is in root, accessible via HTTPS
- **Meta Tag**: Check tag is in `<head>`, not `<body>`

### Sitemap Not Processing
- Verify sitemap URL is correct
- Check sitemap is valid XML
- Ensure sitemap is accessible (not blocked by robots.txt)
- Wait 24-48 hours for processing

### Pages Not Indexing
- Check robots.txt doesn't block pages
- Verify no `noindex` meta tags
- Ensure pages have unique, quality content
- Check canonical URLs point to correct pages
- Wait 1-2 weeks for initial indexing

### Low Indexing Rate
- **Normal**: Google indexes gradually (not all at once)
- **Expected**: 50-100 pages in first week, 200+ in first month
- **Action**: Only worry if < 10 pages indexed after 2 weeks

## Best Practices

1. **Don't Over-Request Indexing**
   - Only request key pages manually
   - Let sitemap handle bulk discovery

2. **Monitor Regularly**
   - Check weekly for errors
   - Fix issues promptly

3. **Use Data to Improve**
   - Review search queries
   - Optimize pages with low CTR
   - Improve content for high-impression, low-click keywords

4. **Keep Sitemap Updated**
   - Regenerate after adding new pages
   - Resubmit if you add 50+ new URLs

5. **Fix Errors Quickly**
   - 404 errors hurt SEO
   - Redirect broken links
   - Fix mobile usability issues

## Expected Timeline

### Week 1
- ✅ Property verified
- ✅ Sitemap submitted
- ✅ 10-50 pages indexed
- ✅ Key pages requested

### Week 2-4
- ✅ 50-150 pages indexed
- ✅ First impressions in Performance
- ✅ Coverage report shows patterns

### Month 2-3
- ✅ 200+ pages indexed
- ✅ Search traffic starts
- ✅ Performance data meaningful

### Month 4+
- ✅ Full indexing (300+ pages)
- ✅ Regular search traffic
- ✅ Ranking improvements visible

## Next Steps After Setup

1. **Monitor Coverage** daily for first week
2. **Fix any errors** immediately
3. **Request indexing** for key pages
4. **Track Performance** after 2-3 weeks
5. **Optimize based on data** after 1 month

## Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Sitemap Guidelines](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Indexing Best Practices](https://developers.google.com/search/docs/crawling-indexing)

---

**Status**: Ready for Google Search Console submission  
**Sitemap**: `https://curatedai.net/sitemap.xml`  
**Robots**: `https://curatedai.net/robots.txt`  
**Total URLs**: ~415

