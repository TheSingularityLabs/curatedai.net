# Platform/Aggregator Category Proposal

## Current Situation

**Tools like fal.ai, Replicate, Higgsfield, Freepik are fundamentally different:**
- They're **platforms/aggregators** that provide access to multiple AI models/services
- They're **multi-modal** (offer text-to-image, text-to-video, image-to-image, etc. all in one)
- They use an **API-first** or **marketplace model**
- They're not single-purpose tools like Midjourney or Runway

## Current Categories (10)
1. Text-to-Video
2. Text-to-Image
3. Image-to-Image
4. Image-to-Video
5. Text-to-Audio
6. Text-to-3D
7. Image-to-3D
8. Video-to-Video
9. IDEs & Coding
10. LLMs

## Proposed: Add Category #11

### Option 1: "GenAI Platforms" (Recommended)
**Display Name:** "GenAI Platforms"  
**Slug:** `genai-platforms`  
**Description:** "Platforms and aggregators offering multiple generative AI models and services via API"

**Examples:**
- **fal.ai** - API platform for accessing 100+ AI models
- **Replicate** - Run AI models via API
- **Higgsfield** - AI model marketplace
- **Freepik AI** - Platform with multiple AI tools (image gen, editing, etc.)
- **Together AI** - Inference platform for multiple models
- **Hugging Face Inference API** - Access to models on Hugging Face

### Option 2: "GenAI APIs"
**Display Name:** "GenAI APIs"  
**Slug:** `genai-apis`  
**Description:** "API platforms for accessing multiple generative AI models"

### Option 3: "Multi-Model Platforms"
**Display Name:** "Multi-Model Platforms"  
**Slug:** `multi-model-platforms`  
**Description:** "Platforms offering access to multiple AI models"

## Why This Makes Sense

### 1. **Different Use Case**
- **Single tools:** "I want to generate images" → Use Midjourney
- **Platforms:** "I want access to multiple models via API" → Use fal.ai/Replicate

### 2. **Different Value Proposition**
- **Single tools:** Best-in-class for one specific task
- **Platforms:** Convenience, API access, multiple models in one place

### 3. **Different User Profiles**
- **Single tools:** End users, creators
- **Platforms:** Developers, businesses needing API access

### 4. **SEO Benefits**
- New category page: "Best AI Platforms 2026"
- Comparison pages: "fal.ai vs Replicate"
- Guide pages: "How to Choose an AI Platform"

## Implementation Plan

### 1. Add to MODALITIES
```javascript
export const MODALITIES = [
  "text-to-video",
  "image-to-video",
  "text-to-image",
  "image-to-image",
  "text-to-audio",
  "text-to-3d",
  "image-to-3d",
  "video-to-video",
  "ide-coding",
  "llm",
  "genai-platforms", // NEW - More specific than "ai-platforms"
];
```

### 2. Add to Category Chips (app.js)
```javascript
const MODALITY_CHIPS = [
  // ... existing
  { id: "genai-platforms", label: "GenAI Platforms" },
];
```

### 3. Add Category Card to directory.html
```html
<a href="./dist/pages/category/genai-platforms.html" class="category-card">
  <div>GenAI Platforms</div>
  <div>X tools</div>
  <div>Platforms offering multiple generative AI models via API</div>
  <div>fal.ai, Replicate, Together AI, Hugging Face</div>
</a>
```

### 4. Create Category Page
- Generate via `build-seo.js`
- Include tools like fal.ai, Replicate, Higgsfield, Freepik, Together AI

### 5. Tool Entry Example
```javascript
{
  id: "fal-ai",
  name: "fal.ai",
  tagline: "API platform for 100+ AI models",
  whatItDoes: "Platform providing API access to 100+ AI models including image generation, video generation, audio, and more. Unified API interface for accessing multiple models from different providers. Pay-per-use pricing with fast inference.",
  modalities: ["genai-platforms"],
  outcomes: ["images", "video", "audio", "3d"], // Multi-outcome
  // ... rest of fields
}
```

## Tools That Would Fit This Category

### Confirmed Platforms:
1. **fal.ai** - API platform, 100+ models
2. **Replicate** - Run AI models via API
3. **Together AI** - Inference platform
4. **Hugging Face Inference API** - Access to HF models

### Potential Platforms:
5. **Higgsfield** - AI model marketplace (needs verification)
6. **Freepik AI** - Multiple AI tools platform (needs verification)
7. **RunPod** - GPU cloud for AI models
8. **Vast.ai** - GPU marketplace
9. **Banana.dev** - Serverless GPU for AI

## Considerations

### Pros:
✅ Clear distinction from single-purpose tools  
✅ Better organization for developers/API users  
✅ New SEO opportunities (category page, comparisons)  
✅ Matches user intent ("I need an API platform")  
✅ Scalable (many new platforms emerging)

### Cons:
⚠️ Some tools might fit multiple categories (e.g., Freepik could be image-to-image)  
⚠️ Need to decide: Is it a platform OR a tool?  
⚠️ Might need to exclude some tools that are primarily single-purpose

## Recommendation

**YES, add "GenAI Platforms" category** because:
1. Clear user need (developers want API platforms)
2. Distinct from single-purpose tools
3. Growing category (many new platforms)
4. Better SEO coverage
5. Makes directory more comprehensive

**Criteria for inclusion:**
- Provides access to **multiple** AI models/services
- API-first or marketplace model
- Not primarily a single-purpose tool
- Used by developers/businesses for integration

## Next Steps

1. ✅ Get approval for category
2. ✅ Define inclusion criteria
3. ✅ Identify all platform tools to add
4. ✅ Add modality to MODALITIES array
5. ✅ Update app.js chips
6. ✅ Update directory.html
7. ✅ Add tool entries
8. ✅ Generate category page via build-seo.js
9. ✅ Test and verify

---

**Status:** Awaiting approval  
**Proposed Category:** "GenAI Platforms" (`genai-platforms`)  
**Estimated Tools:** 5-10 platform tools

---

## Why "GenAI Platforms" is Better

✅ **More Specific:** Clearly indicates generative AI (not general AI)  
✅ **Industry Standard:** "GenAI" is the common term (matches your site branding)  
✅ **SEO Friendly:** "GenAI Platforms" is a more targeted search term  
✅ **Clearer Intent:** Users searching for "GenAI API" or "GenAI platform" will find it  
✅ **Distinct:** Differentiates from general AI platforms (MLOps, etc.)

