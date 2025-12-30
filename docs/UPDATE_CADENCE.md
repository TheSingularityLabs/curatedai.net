# Content Update Cadence: Process Documentation

## Overview
Regular content updates signal freshness to search engines and improve rankings. This document outlines the systematic process for updating guides, tools, and pages every 30-45 days.

## Update Schedule

**Frequency:** Every 30-45 days  
**Scope:** Guides, tool pages, category pages, comparison pages

## Update Checklist

### 1. Tool Order Updates
**Action:** Review and update `curatedRank` values in `data/tools.js`

**Process:**
- Review tool performance (usage, popularity, new features)
- Adjust rankings based on:
  - New tool releases
  - Feature updates
  - User feedback
  - Market changes
- Update 5-10 tools per cycle

**Example:**
```javascript
{
  id: "runway",
  name: "Runway",
  curatedRank: 5, // Updated from 8
  // ... other fields
}
```

### 2. Tool Additions/Removals
**Action:** Add 1-2 new tools or remove outdated tools

**Process:**
- Research new tools in the market
- Evaluate against existing tools
- Add high-quality tools that fill gaps
- Remove tools that are:
  - No longer maintained
  - Superseded by better alternatives
  - No longer relevant

**Additions:**
- Add to `data/tools.js` with complete metadata
- Include: description, strengths, tips, use cases, links
- Set appropriate `curatedRank`

**Removals:**
- Remove from `data/tools.js`
- Update any guides that reference removed tools
- Update category pages if needed

### 3. Last Updated Dates
**Action:** Update `lastUpdated` field for modified content

**Process:**
- Update `lastUpdated` in guide objects (AEO_GUIDES array)
- Update `addedAt` for tools that were modified
- Use format: `YYYY-MM-DD`
- Update dates for:
  - Guides with new content
  - Tools with updated information
  - Pages with structural changes

**Example:**
```javascript
{
  slug: 'how-to-use-text-to-video-ai',
  title: 'How to Use Text-to-Video AI: Complete Guide 2026',
  lastUpdated: '2026-01-15', // Updated from previous date
  // ... other fields
}
```

### 4. Internal Linking
**Action:** Add 2-3 new internal links per updated page

**Process:**
- Review page content for linking opportunities
- Link to:
  - Related guides
  - Relevant tool pages
  - Category pages
  - Comparison pages
- Ensure links are contextually relevant
- Avoid over-linking (max 3-5 per section)

**Link Types:**
- Tool mentions → Tool pages
- Category mentions → Category pages
- Guide mentions → Guide pages
- Comparison mentions → Comparison pages

### 5. Content Refresh
**Action:** Update content for accuracy and freshness

**Process:**
- Review guide content for outdated information
- Update:
  - Tool features and capabilities
  - Pricing information
  - Use case examples
  - Best practices
  - Workflow recommendations
- Add new sections if needed
- Remove outdated information

### 6. Schema Updates
**Action:** Update structured data if content changed significantly

**Process:**
- Review schema markup for accuracy
- Update:
  - `dateModified` in Article schema
  - FAQ schema if questions/answers changed
  - ItemList schema if tool order changed
  - BreadcrumbList if page structure changed

## Monthly Update Workflow

### Week 1: Planning
1. Review analytics for underperforming pages
2. Identify tools that need updates
3. Research new tools to add
4. Plan content updates

### Week 2: Tool Updates
1. Update tool rankings
2. Add new tools (1-2)
3. Remove outdated tools (if any)
4. Update tool metadata

### Week 3: Content Updates
1. Update guide content
2. Refresh outdated information
3. Add new internal links
4. Update lastUpdated dates

### Week 4: Review & Deploy
1. Review all changes
2. Test build process
3. Verify links and schema
4. Deploy updates

## Update Tracking

### Spreadsheet/Log Format
| Date | Page Type | Page Slug | Changes Made | Tools Added/Removed | Links Added |
|------|-----------|-----------|--------------|-------------------|-------------|
| 2026-01-15 | Guide | how-to-use-text-to-video | Updated workflow section | - | 2 |
| 2026-01-15 | Tool | runway | Updated features, pricing | - | 1 |
| 2026-01-15 | Category | text-to-video | Updated tool order | - | 3 |

## Automation Opportunities

### Potential Scripts
1. **Auto-update dates:** Script to update `lastUpdated` for modified files
2. **Link checker:** Script to verify internal links are valid
3. **Content analyzer:** Script to identify pages needing updates
4. **Schema validator:** Script to validate schema markup

### Manual Review Required
- Content quality assessment
- Tool relevance evaluation
- Link context appropriateness
- User experience impact

## Quality Standards

### Minimum Update Requirements
- At least 1 tool order change
- At least 1 content update (guides or tools)
- At least 2 new internal links
- Updated `lastUpdated` dates
- Verified schema accuracy

### Content Update Guidelines
- Updates should be substantive (not just date changes)
- Maintain content quality and accuracy
- Preserve existing SEO value
- Enhance user experience

## Monitoring & Metrics

### Track These Metrics
- Pages updated per cycle
- Tools added/removed
- Internal links added
- Content freshness score
- Search ranking changes

### Success Indicators
- Consistent update cadence maintained
- Improved search rankings
- Increased organic traffic
- Better user engagement
- Higher content freshness signals

## Notes

- **Balance:** Don't update too frequently (can look spammy) or too infrequently (content becomes stale)
- **Quality over quantity:** Better to update fewer pages well than many pages poorly
- **User-first:** Updates should improve user experience, not just signal freshness
- **Documentation:** Keep detailed logs of all updates for reference

## Next Steps

1. Set up update tracking system (spreadsheet or tool)
2. Schedule first update cycle
3. Create update checklist template
4. Establish review process
5. Monitor results and adjust cadence if needed

