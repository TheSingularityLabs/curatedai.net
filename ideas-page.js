// Ideas page logic - renders bundles and handles clicks
import { TOOLS } from './data/tools.js';
import { PROMPTS } from './data/prompts.js';

const BUNDLE_IDEAS = {
  "🎙️ Create a Podcast": {
    description: "Voice, music, and audio tools for podcast production",
    keywords: ["voiceover", "voice", "tts", "text-to-speech", "narration", "podcast", "audio", "music", "jingle", "intro"],
    modalities: ["text-to-audio"],
    ideas: [
      "generate professional voice narration from scripts",
      "create custom podcast intro music",
      "produce background music for episodes",
      "convert written content to multilingual speech",
      "design podcast outro jingles",
      "generate sound effects for storytelling",
    ],
  },
  "📱 Build a Social Media Campaign": {
    description: "Video, image, and graphics for social content",
    keywords: ["social", "media", "short", "video", "graphic", "post", "story", "reel", "content"],
    modalities: ["text-to-video", "image-to-video", "text-to-image", "image-to-image"],
    ideas: [
      "create engaging social media video shorts",
      "design branded social media graphics",
      "animate static product photos",
      "produce promotional video content",
      "generate consistent visual branding",
      "create story highlights and reels",
    ],
  },
  "🎬 Make a Product Demo": {
    description: "Video, 3D, and visual tools for showcasing products",
    keywords: ["product", "demo", "showcase", "video", "3d", "model", "prototype", "mockup"],
    modalities: ["text-to-video", "image-to-video", "text-to-3d", "image-to-3d", "text-to-image"],
    ideas: [
      "produce professional product demo videos",
      "generate realistic product mockups",
      "create interactive 3D product models",
      "design product showcase presentations",
      "visualize products in different environments",
      "generate product photography concepts",
    ],
  },
  "🎨 Design a Brand Identity": {
    description: "Logo, graphics, and visual branding tools",
    keywords: ["logo", "brand", "identity", "graphic", "design", "concept", "visual", "style"],
    modalities: ["text-to-image", "image-to-image", "text-to-3d", "image-to-3d"],
    ideas: [
      "create multiple logo concept variations",
      "transform 2D logos into 3D models",
      "design consistent brand graphics",
      "apply brand style to existing images",
      "generate brand color palette visuals",
      "create brand guideline examples",
    ],
  },
  "📚 Create Educational Content": {
    description: "Tutorials, explainers, and learning materials",
    keywords: ["tutorial", "explainer", "educational", "learning", "guide", "instruction", "video"],
    modalities: ["text-to-video", "image-to-video", "text-to-image"],
    ideas: [
      "produce step-by-step tutorial videos",
      "create animated educational explainers",
      "design educational infographics",
      "generate course thumbnail images",
      "make interactive learning visuals",
      "create educational illustration sets",
    ],
  },
  "🎮 Build Game Assets": {
    description: "3D models, characters, and game-ready assets",
    keywords: ["game", "3d", "character", "model", "asset", "prop", "environment", "animation"],
    modalities: ["text-to-3d", "image-to-3d", "text-to-image"],
    ideas: [
      "generate game-ready 3D props and objects",
      "create detailed 3D character models",
      "design immersive 3D game environments",
      "produce animated 3D game assets",
      "create texture concepts for models",
      "generate game UI elements and icons",
    ],
  },
  "🎭 Create Cinematic Content": {
    description: "High-quality video and visual storytelling",
    keywords: ["cinematic", "video", "story", "narrative", "visual", "quality", "professional"],
    modalities: ["text-to-video", "image-to-video"],
    ideas: [
      "produce cinematic text-to-video sequences",
      "transform written stories into visual narratives",
      "animate static paintings and artwork",
      "create music video visual concepts",
      "generate dramatic scene transitions",
      "design cinematic color grading references",
    ],
  },
  "🖼️ Enhance & Edit Images": {
    description: "Photo editing, enhancement, and transformation",
    keywords: ["enhance", "edit", "photo", "image", "quality", "upscale", "remove", "background", "style"],
    modalities: ["image-to-image"],
    ideas: [
      "upscale low-resolution images to high quality",
      "remove and replace photo backgrounds",
      "enhance photo sharpness and clarity",
      "transform photos into artistic styles",
      "fix lighting and color issues",
      "remove unwanted objects from images",
    ],
  },
  "🎵 Produce Music & Audio": {
    description: "Music generation, sound effects, and audio creation",
    keywords: ["music", "audio", "song", "sound", "effects", "ambient", "background", "soundtrack"],
    modalities: ["text-to-audio"],
    ideas: [
      "compose complete songs from lyric descriptions",
      "generate custom background music tracks",
      "create realistic sound effects from text",
      "produce ambient soundscapes for focus",
      "generate theme music for projects",
      "create audio loops for video editing",
    ],
  },
  "🎬 Edit & Enhance Videos": {
    description: "Video editing, effects, and post-production",
    keywords: ["video", "edit", "enhance", "effects", "quality", "stabilize", "background", "style"],
    modalities: ["video-to-video"],
    ideas: [
      "enhance video resolution and quality",
      "remove unwanted objects from footage",
      "apply cinematic effects and filters",
      "stabilize shaky camera movements",
      "change video backgrounds",
      "adjust video color grading and style",
    ],
  },
  "💼 Build a Marketing Website": {
    description: "Complete website creation with visuals, copy, and branding",
    keywords: ["website", "marketing", "landing", "page", "web", "design", "ui", "ux", "branding"],
    modalities: ["text-to-image", "image-to-image", "text-to-video", "ide-coding"],
    ideas: [
      "generate hero section visuals",
      "create product showcase images",
      "design landing page graphics",
      "build interactive web components",
    ],
  },
  "🎨 Create Digital Art & Illustrations": {
    description: "Artistic creation, illustrations, and visual storytelling",
    keywords: ["art", "illustration", "digital", "painting", "drawing", "artistic", "creative", "visual"],
    modalities: ["text-to-image", "image-to-image"],
    ideas: [
      "generate digital paintings from descriptions",
      "create character illustrations",
      "transform photos into art styles",
      "design concept art for projects",
    ],
  },
  "📹 Produce YouTube Content": {
    description: "Video content creation for YouTube channels",
    keywords: ["youtube", "video", "content", "channel", "thumbnail", "intro", "outro", "b-roll"],
    modalities: ["text-to-video", "image-to-video", "text-to-image", "image-to-image"],
    ideas: [
      "generate video thumbnails",
      "create intro sequences",
      "produce b-roll footage",
      "design channel branding",
    ],
  },
  "🏢 Create Architecture Visualizations": {
    description: "Architectural renders, building designs, and space planning",
    keywords: ["architecture", "building", "interior", "design", "render", "visualization", "space", "planning"],
    modalities: ["text-to-image", "text-to-3d", "image-to-3d", "image-to-image"],
    ideas: [
      "visualize building exteriors",
      "design interior spaces",
      "create 3D architectural models",
      "generate realistic building renders",
    ],
  },
  "🎪 Design Event Materials": {
    description: "Event graphics, invitations, and promotional materials",
    keywords: ["event", "invitation", "poster", "flyer", "promotion", "announcement", "graphic"],
    modalities: ["text-to-image", "image-to-image"],
    ideas: [
      "design event invitations",
      "create promotional posters",
      "generate social media graphics",
      "make event flyers and banners",
    ],
  },
  "🎬 Create Short Films": {
    description: "Film production, storytelling, and cinematic content",
    keywords: ["film", "cinematic", "story", "narrative", "short", "movie", "cinema", "director"],
    modalities: ["text-to-video", "image-to-video", "text-to-image"],
    ideas: [
      "generate cinematic scenes",
      "create storyboard visuals",
      "produce short film sequences",
      "design film poster concepts",
    ],
  },
  "🎮 Develop Game Concepts": {
    description: "Game design, character creation, and world building",
    keywords: ["game", "character", "world", "environment", "asset", "concept", "design", "prototype"],
    modalities: ["text-to-3d", "image-to-3d", "text-to-image", "image-to-image"],
    ideas: [
      "design game characters",
      "create game environments",
      "generate 3D game assets",
      "visualize game concepts",
    ],
  },
  "📱 Build Mobile App UI": {
    description: "Mobile app design, interfaces, and user experience",
    keywords: ["mobile", "app", "ui", "ux", "interface", "design", "screen", "prototype"],
    modalities: ["text-to-image", "image-to-image", "ide-coding"],
    ideas: [
      "design app screens",
      "create UI mockups",
      "generate app icons",
      "prototype mobile interfaces",
    ],
  },
  "🎵 Compose Music for Projects": {
    description: "Custom music composition for videos, games, and media",
    keywords: ["music", "composition", "soundtrack", "score", "background", "audio", "sound"],
    modalities: ["text-to-audio"],
    ideas: [
      "compose background music",
      "create soundtracks for videos",
      "generate game music",
      "produce ambient soundscapes",
    ],
  },
  "🖼️ Restore & Colorize Photos": {
    description: "Photo restoration, colorization, and enhancement",
    keywords: ["restore", "colorize", "photo", "old", "vintage", "enhance", "repair", "fix"],
    modalities: ["image-to-image"],
    ideas: [
      "restore damaged photos",
      "colorize black and white images",
      "enhance old photographs",
      "repair scratched photos",
    ],
  },
  "🎨 Design Fashion & Apparel": {
    description: "Fashion design, clothing concepts, and apparel visualization",
    keywords: ["fashion", "clothing", "apparel", "design", "outfit", "style", "garment", "wear"],
    modalities: ["text-to-image", "image-to-image", "text-to-3d"],
    ideas: [
      "design clothing concepts",
      "visualize fashion collections",
      "create outfit combinations",
      "generate fashion illustrations",
    ],
  },
  "🏗️ Plan Interior Design": {
    description: "Interior design, room layouts, and space visualization",
    keywords: ["interior", "design", "room", "furniture", "layout", "decor", "space", "home"],
    modalities: ["text-to-image", "text-to-3d", "image-to-3d"],
    ideas: [
      "visualize room designs",
      "plan furniture layouts",
      "create 3D room models",
      "design interior concepts",
    ],
  },
  "📚 Create Book Covers": {
    description: "Book cover design, illustrations, and publishing visuals",
    keywords: ["book", "cover", "illustration", "publishing", "novel", "design", "artwork"],
    modalities: ["text-to-image", "image-to-image"],
    ideas: [
      "design book covers",
      "create book illustrations",
      "generate cover concepts",
      "visualize book artwork",
    ],
  },
  "🎪 Create Presentation Graphics": {
    description: "Presentation visuals, infographics, and business graphics",
    keywords: ["presentation", "infographic", "slide", "business", "graphic", "visual", "chart"],
    modalities: ["text-to-image", "image-to-image"],
    ideas: [
      "design presentation slides",
      "create infographics",
      "generate business graphics",
      "make visual charts",
    ],
  },
  "🎬 Produce Commercial Ads": {
    description: "Commercial advertising, product promotion, and marketing videos",
    keywords: ["commercial", "ad", "advertising", "promotion", "marketing", "campaign", "brand"],
    modalities: ["text-to-video", "image-to-video", "text-to-image"],
    ideas: [
      "create product commercials",
      "generate ad visuals",
      "produce promotional videos",
      "design ad graphics",
    ],
  },
  "🎮 Create VR/AR Content": {
    description: "Virtual and augmented reality content creation",
    keywords: ["vr", "ar", "virtual", "reality", "augmented", "3d", "immersive", "environment"],
    modalities: ["text-to-3d", "image-to-3d", "text-to-image"],
    ideas: [
      "design VR environments",
      "create AR objects",
      "generate 3D assets for VR",
      "visualize immersive spaces",
    ],
  },
  "🎵 Generate Voiceovers": {
    description: "Voice narration, dubbing, and audio content",
    keywords: ["voiceover", "narration", "voice", "tts", "dubbing", "audio", "speech"],
    modalities: ["text-to-audio"],
    ideas: [
      "create voice narrations",
      "generate multilingual dubs",
      "produce voiceovers for videos",
      "convert scripts to speech",
    ],
  },
  "🎨 Design Packaging": {
    description: "Product packaging design and branding",
    keywords: ["packaging", "product", "box", "label", "design", "branding", "container"],
    modalities: ["text-to-image", "image-to-image", "text-to-3d"],
    ideas: [
      "design product packaging",
      "create label concepts",
      "visualize 3D packaging",
      "generate box designs",
    ],
  },
  "📱 Create Social Media Stories": {
    description: "Social media stories, reels, and short-form content",
    keywords: ["story", "reel", "short", "social", "media", "content", "quick", "viral"],
    modalities: ["text-to-video", "image-to-video", "text-to-image"],
    ideas: [
      "create Instagram stories",
      "generate TikTok-style videos",
      "design story graphics",
      "produce quick social content",
    ],
  },
};

const els = {
  themeToggle: document.getElementById("themeToggle"),
  bundlesGrid: document.getElementById("bundlesGrid"),
  bundlesMeta: document.getElementById("bundlesMeta"),
};

const state = {
  theme: "light",
};

function norm(s) {
  return (s ?? "").toString().toLowerCase().trim();
}

function escapeHtml(s) {
  return (s ?? "").toString().replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function applyTheme(theme) {
  state.theme = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = state.theme;
  const isDark = state.theme === "dark";
  els.themeToggle?.setAttribute("aria-checked", isDark ? "true" : "false");
  localStorage.setItem("theme", state.theme);
}

function findMatchingTools(bundle) {
  if (!TOOLS) return [];
  
  // Score and rank tools by relevance - STRICT FILTERING
  const scoredTools = TOOLS.map(tool => {
    // Match by modality (REQUIRED)
    const modalityMatch = tool.modalities?.some(m => bundle.modalities.includes(m));
    if (!modalityMatch) {
      // If no modality match, tool is not relevant
      return { tool, score: 0, isRelevant: false, modalityMatch: false, keywordMatches: 0 };
    }
    
    // Match by keywords in tool data
    const toolText = [
      tool.name,
      tool.tagline,
      tool.whatItDoes,
      tool.whyPicked || '',
      ...(tool.bestFor || []),
      ...(tool.tags || []),
      ...(tool.strengths || [])
    ].join(' ').toLowerCase();
    
    // Count keyword matches (must match at least 2 keywords)
    const matchedKeywords = bundle.keywords.filter(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    
    // STRICT: Must have modality match AND at least 2 keyword matches
    const isRelevant = modalityMatch && matchedKeywords.length >= 2;
    
    if (!isRelevant) {
      return { tool, score: 0, isRelevant: false, modalityMatch: true, keywordMatches: matchedKeywords.length };
    }
    
    // Calculate relevance score only for relevant tools
    let score = 10; // Base score for modality match
    score += matchedKeywords.length * 3; // Each keyword match adds more points
    if (tool.curatedRank) score += (100 - tool.curatedRank) / 10; // Better ranked tools score higher
    
    return {
      tool,
      score,
      isRelevant: true,
      modalityMatch: true,
      keywordMatches: matchedKeywords.length
    };
  })
  .filter(item => item.isRelevant) // Only include strictly relevant tools
  .sort((a, b) => {
    // Sort by: score (keyword matches), then curatedRank
    if (b.score !== a.score) return b.score - a.score;
    return (a.tool.curatedRank || 999) - (b.tool.curatedRank || 999);
  })
  .map(item => item.tool)
  .slice(0, 6); // Top 6 most relevant tools
  
  return scoredTools;
}

function findMatchingPrompts(bundle) {
  if (!PROMPTS) return [];
  
  return PROMPTS.filter(prompt => {
    // Match by category keywords
    const promptText = [
      prompt.title,
      prompt.description,
      prompt.useCase,
      ...(prompt.tags || [])
    ].join(' ').toLowerCase();
    
    return bundle.keywords.some(keyword => 
      promptText.includes(keyword.toLowerCase())
    );
  }).slice(0, 3); // Top 3 prompts
}

function renderBundle(bundleName, bundle) {
  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("role", "listitem");
  
  const modalitiesList = bundle.modalities.map(m => {
    const labels = {
      "text-to-audio": "Text → Audio",
      "text-to-video": "Text → Video",
      "text-to-image": "Text → Image",
      "text-to-3d": "Text → 3D",
      "image-to-video": "Image → Video",
      "image-to-image": "Image → Image",
      "image-to-3d": "Image → 3D",
      "video-to-video": "Video → Video",
    };
    return labels[m] || m;
  }).join(", ");
  
  // Find matching tools and prompts
  const matchingTools = findMatchingTools(bundle);
  const matchingPrompts = findMatchingPrompts(bundle);
  const toolCount = TOOLS ? TOOLS.filter(tool => {
    // STRICT: Must have modality match AND 2+ keyword matches
    const modalityMatch = tool.modalities?.some(m => bundle.modalities.includes(m));
    if (!modalityMatch) return false;
    
    const toolText = [
      tool.name,
      tool.tagline,
      tool.whatItDoes,
      tool.whyPicked || '',
      ...(tool.bestFor || []),
      ...(tool.tags || []),
      ...(tool.strengths || [])
    ].join(' ').toLowerCase();
    const matchedKeywords = bundle.keywords.filter(keyword => 
      toolText.includes(keyword.toLowerCase())
    );
    // Must have modality match AND 2+ keyword matches
    return modalityMatch && matchedKeywords.length >= 2;
  }).length : 0;
  
  const promptCount = PROMPTS ? PROMPTS.filter(prompt => {
    const promptText = [
      prompt.title,
      prompt.description,
      prompt.useCase,
      ...(prompt.tags || [])
    ].join(' ').toLowerCase();
    return bundle.keywords.some(keyword => 
      promptText.includes(keyword.toLowerCase())
    );
  }).length : 0;
  
  card.innerHTML = `
    <div class="card-header">
      <div class="card-name">${escapeHtml(bundleName)}</div>
      <div class="card-tagline">${escapeHtml(bundle.description)}</div>
    </div>
    <div class="card-preview">${escapeHtml(modalitiesList)}</div>
    
    ${toolCount > 0 || promptCount > 0 ? `
    <div style="margin-top: 8px; padding: 6px 0; display: flex; gap: 12px; font-size: 10px; font-family: var(--mono); opacity: 0.7;">
      ${toolCount > 0 ? `<span>${toolCount} tools</span>` : ''}
      ${promptCount > 0 ? `<span>${promptCount} prompts</span>` : ''}
    </div>
    ` : ''}
    
    ${matchingTools.length > 0 ? `
    <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--line);">
      <button class="expand-btn" onclick="const content = this.nextElementSibling; content.style.display = content.style.display === 'none' ? 'flex' : 'none'; this.textContent = this.textContent === '−' ? '+' : '−';" style="background: transparent; border: none; cursor: pointer; font-size: 11px; color: var(--page-muted); font-family: var(--mono); padding: 0; margin-bottom: 6px; opacity: 0.6; transition: opacity 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.6'">+ tools & prompts</button>
      <div style="display: none; flex-wrap: wrap; gap: 4px;">
        ${matchingTools.map(tool => `
          <a href="./dist/pages/tools/${tool.id}.html" style="display: inline-block; padding: 3px 6px; text-decoration: none; font-size: 9px; font-family: var(--mono); color: var(--page-text); opacity: 0.7; border-bottom: 1px solid var(--line); transition: all 0.2s;" onmouseover="this.style.opacity='1'; this.style.borderColor='var(--page-text)'" onmouseout="this.style.opacity='0.7'; this.style.borderColor='var(--line)'" title="${escapeHtml(tool.tagline || tool.name)}">
            ${escapeHtml(tool.name)}
          </a>
        `).join('')}
        ${matchingPrompts.length > 0 ? matchingPrompts.map(prompt => `
          <a href="./prompts.html#${prompt.id}" style="display: inline-block; padding: 3px 6px; text-decoration: none; font-size: 9px; font-family: var(--mono); color: var(--page-text); opacity: 0.7; border-bottom: 1px solid var(--line); transition: all 0.2s;" onmouseover="this.style.opacity='1'; this.style.borderColor='var(--page-text)'" onmouseout="this.style.opacity='0.7'; this.style.borderColor='var(--line)'" title="${escapeHtml(prompt.description || prompt.title)}">
            ${escapeHtml(prompt.title)}
          </a>
        `).join('') : ''}
      </div>
    </div>
    ` : ''}
    
    <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--line);">
      <div style="display: flex; flex-wrap: wrap; gap: 4px;">
        ${bundle.ideas.slice(0, 4).map(idea => `
          <a href="./index.html?q=${encodeURIComponent(idea)}" style="display: inline-block; padding: 3px 6px; text-decoration: none; font-size: 9px; font-family: var(--mono); color: var(--page-text); opacity: 0.6; border-bottom: 1px solid transparent; transition: all 0.2s;" onmouseover="this.style.opacity='1'; this.style.borderColor='var(--page-text)'" onmouseout="this.style.opacity='0.6'; this.style.borderColor='transparent'">
            ${escapeHtml(idea.length > 30 ? idea.substring(0, 30) + '...' : idea)}
          </a>
        `).join('')}
      </div>
    </div>
  `;
  
  return card;
}

function render() {
  els.bundlesGrid.innerHTML = "";
  const bundles = Object.entries(BUNDLE_IDEAS);
  els.bundlesMeta.textContent = `${bundles.length} bundles • ${bundles.reduce((sum, [, b]) => sum + b.ideas.length, 0)} ideas`;
  
  for (const [bundleName, bundle] of bundles) {
    els.bundlesGrid.appendChild(renderBundle(bundleName, bundle));
  }
}

function boot() {
  const stored = localStorage.getItem("theme");
  applyTheme(stored === "dark" ? "dark" : "light");
  els.themeToggle?.addEventListener("click", () => applyTheme(state.theme === "dark" ? "light" : "dark"));
  render();

  // Custom cursor animation - optimized (Desktop only)
  if (window.matchMedia('(pointer: fine)').matches) {
    document.body.classList.add('has-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (cursorDot && cursorOutline) {
      let mouseX = 0, mouseY = 0;
      let dotX = 0, dotY = 0;
      let outlineX = 0, outlineY = 0;
      let rafId = null;
      
      const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!rafId) {
          rafId = requestAnimationFrame(animateCursor);
        }
      };
      
      function animateCursor() {
        const dotDx = (mouseX - dotX) * 0.5;
        const dotDy = (mouseY - dotY) * 0.5;
        const outlineDx = (mouseX - outlineX) * 0.35;
        const outlineDy = (mouseY - outlineY) * 0.35;
        
        if (Math.abs(dotDx) > 0.01 || Math.abs(dotDy) > 0.01 || 
            Math.abs(outlineDx) > 0.01 || Math.abs(outlineDy) > 0.01) {
          dotX += dotDx;
          dotY += dotDy;
          outlineX += outlineDx;
          outlineY += outlineDy;
          
          cursorDot.style.transform = 'translate(' + dotX + 'px, ' + dotY + 'px)';
          cursorOutline.style.transform = 'translate(' + outlineX + 'px, ' + outlineY + 'px)';
          
          rafId = requestAnimationFrame(animateCursor);
        } else {
          rafId = null;
        }
      }
      
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
  }
}

boot();

