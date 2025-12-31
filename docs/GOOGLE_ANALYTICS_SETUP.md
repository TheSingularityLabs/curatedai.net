# Google Analytics 4 Setup

## 1. Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Admin" (gear icon)
3. Click "Create Property"
4. Enter property name: `curatedai.net`
5. Select timezone and currency
6. Click "Next" → "Create"

## 2. Get Measurement ID

1. In your new property, go to "Admin" → "Data Streams"
2. Click "Add stream" → "Web"
3. Enter:
   - Website URL: `https://curatedai.net`
   - Stream name: `curatedai.net`
4. Click "Create stream"
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

## 3. Add Tracking Code

The tracking code will be added to all pages via `build-seo.js`. 

**To add manually to root pages:**
- Add the GA4 script in the `<head>` section of:
  - `index.html`
  - `directory.html`
  - `guides.html`
  - `prompts.html`
  - `news.html`
  - `newsletter.html`

**Template:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 4. Verify Installation

1. Visit your site: `https://curatedai.net`
2. In GA4, go to "Reports" → "Realtime"
3. You should see your visit within 30 seconds

## 5. Key Metrics to Monitor

- **Users** - Total visitors
- **Sessions** - Individual visits
- **Page views** - Which pages are popular
- **Traffic sources** - Where visitors come from
- **Top pages** - Most viewed content
- **Search queries** - What people search for (if using site search)

---

**Note:** GA4 respects user privacy and doesn't require cookie consent banners for basic tracking (GDPR compliant for most use cases).

