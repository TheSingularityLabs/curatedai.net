# Verification Checklist - Before Adding Tools

## Summary
- **25 tools** missing official websites
- **14 entries** need fal.ai model verification
- **6 tools** may already be added (need to verify)
- **Pricing** not listed (will need research)
- **Detailed descriptions** need to be written (200+ chars each)

---

## 1. Duplicate Check - Tools That May Already Be Added

### Text → Image Category:
- ✅ **Flux 1 [schnell]** - `flux-1-schnell` - **ALREADY ADDED** (check tools.js line 1228)
- ✅ **Flux 1 [dev]** - `flux-1-dev` - **ALREADY ADDED** (check tools.js line 1304)
- ✅ **Imagen 3** - `imagen-3` - **ALREADY ADDED** (check tools.js line 1247)
- ✅ **Recraft V3** - `recraft-v3` - **ALREADY ADDED** (check tools.js line 1266)
- ✅ **Ideogram V3** - `ideogram-v3` - **ALREADY ADDED** (check tools.js line 1285)
- ✅ **Luma AI** - `luma-ai` - **ALREADY ADDED** (check tools.js line 533)

**Action**: Remove these from candidates list or verify they're different versions.

---

## 2. Missing Official Websites (25 tools)

### Video → Video (7 tools):
- All 7 candidate types need official websites
- Need to browse fal.ai to get specific model names first
- Then research official websites for each model

### Text → 3D (5 tools):
- Rodin - Need official website
- Shap-E - https://github.com/openai/shap-e (GitHub, may need official site)
- Point-E - https://github.com/openai/point-e (GitHub, may need official site)
- Get3D - Need official website
- DreamFusion - Need official website

### Image → 3D (3 tools):
- OmniPart - Need official website
- Other fal.ai models - Need to verify and find websites
- Alternative sources may already have websites listed

### Text → Audio (8 tools):
- Sonauto v2 Text-to-Music - Need official website
- Sonauto v2.2 - Need official website
- ACE-Step - Need official website
- CassetteAI Music Generator - Need official website
- MMAudio V2 - Need official website
- VibeVoice 1.5B - Need official website
- Zonos Audio Clone - Need official website
- Sonauto v2 Inpaint - Need official website

**Action**: Research official websites for each selected tool. All links must point to official sites, NOT fal.ai.

---

## 3. Fal.ai Model Verification Needed (14 entries)

### Video → Video:
- Need to browse `fal.ai/explore?categories=video-to-video` to get:
  - Specific model IDs for style transfer
  - Specific model IDs for upscaling
  - Specific model IDs for frame interpolation
  - Specific model IDs for inpainting
  - Specific model IDs for color grading
  - Specific model IDs for stabilization
  - Specific model IDs for effects

### Image → 3D:
- Verify OmniPart exists on fal.ai and get correct model ID
- Browse fal.ai for other image-to-3d models
- Get specific model IDs

### Text → 3D:
- Verify if there's a second model on fal.ai (besides Trellis 2)
- Get model ID if it exists

**Action**: Browse fal.ai categories to get exact model IDs before adding.

---

## 4. Pricing Information

**Status**: Not listed in candidates file

**Action Required**: For each selected tool, research:
- Free tier available?
- Freemium model?
- Paid only?
- Unknown (if unknown, pricing won't display)

---

## 5. Detailed Descriptions Needed

For each selected tool, need to write:

1. **whatItDoes** (200+ characters):
   - Comprehensive description
   - What the tool does
   - Key features
   - Technical details
   - Match SAM3D-level curation

2. **whyPicked** (50-100 characters):
   - Why this tool was selected
   - Unique value proposition
   - What makes it stand out

3. **bestFor** (3+ use cases):
   - Specific, actionable use cases
   - Real-world applications
   - Target users/scenarios

4. **bestForTag**:
   - Short tag like "Best for Music", "Best for Speed", etc.
   - Will show as colored pill on card

5. **tags**:
   - Relevant keywords for search
   - 3-5 tags per tool

---

## 6. Additional Verification Items

### API Status:
- ✅ All fal.ai tools have `hasApi: true`
- ⚠️ Non-fal.ai tools need verification

### Platform:
- Need to verify: web, api, desktop, mobile
- Most fal.ai tools are: ["api"]
- Some may also have web interfaces

### Open Source:
- Need to verify for each tool
- Most are `false`
- Some (like Shap-E, Point-E) may be `true`

### Modalities:
- Need to verify correct modalities
- Some tools may support multiple modalities

### Outcomes:
- Need to verify correct outcomes array
- Options: ["voice"], ["music"], ["video"], ["images"], ["3d"]

---

## Recommended Verification Process

1. **First**: Check for duplicates (Section 1)
2. **Second**: Browse fal.ai to get specific model IDs (Section 3)
3. **Third**: Research official websites (Section 2)
4. **Fourth**: Research pricing (Section 4)
5. **Fifth**: Select which tools to add from each category
6. **Finally**: I'll prepare complete entries with all details

---

## Quick Reference: What's Ready vs. What Needs Work

### ✅ Ready for Selection:
- **Text → Image**: 11 candidates (but 5 may be duplicates - need to verify)
- **Text → Audio**: 15 candidates (8 need websites)

### ⚠️ Needs More Research:
- **Video → Video**: Need specific model IDs from fal.ai
- **Text → 3D**: Need to verify fal.ai models + research alternatives
- **Image → 3D**: Need to verify fal.ai models + research alternatives

---

## Next Steps

1. **Review this checklist**
2. **Select tools from each category** (accounting for duplicates)
3. **I'll research missing information** (websites, pricing, descriptions)
4. **I'll prepare complete tool entries** ready for tools.js

The candidates file is ready for review, but we'll need to fill in the missing pieces before adding to tools.js.

