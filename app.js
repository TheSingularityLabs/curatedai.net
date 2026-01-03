import { TOOLS as TOOLS_DATA, MODALITIES } from './data/tools.js';

// Wait for DOM to be ready before accessing elements
function getEls() {
  return {
    q: document.getElementById("q"),
    chips: document.getElementById("chips"),
    grid: document.getElementById("grid"),
    resultMeta: document.getElementById("resultMeta"),
    themeToggle: document.getElementById("themeToggle"),
    emptyState: document.getElementById("emptyState"),
  };
}

let els = getEls();
let EXAMPLE_BTNS = [];

/** @type {Array<any>} */
const TOOLS = (TOOLS_DATA ?? []).slice();

const MODALITY_CHIPS = [
  { id: "all", label: "All" },
  { id: "text-to-video", label: "Text → Video" },
  { id: "image-to-video", label: "Image → Video" },
  { id: "text-to-image", label: "Text → Image" },
  { id: "image-to-image", label: "Image → Image" },
  { id: "text-to-audio", label: "Text → Audio" },
  { id: "text-to-3d", label: "Text → 3D" },
  { id: "image-to-3d", label: "Image → 3D" },
  { id: "video-to-video", label: "Video → Video" },
  { id: "ide-coding", label: "IDEs & Coding" },
  { id: "llm", label: "LLMs" },
  { id: "multi-service-ai-platforms", label: "Multi-Service Platforms" },
  { id: "agentic-browsers", label: "Agentic Browsers" },
];

const state = {
  modality: "all",
  theme: "light",
};

function norm(s) {
  return (s ?? "").toString().toLowerCase().trim();
}

function escapeHtml(s) {
  return (s ?? "").toString().replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}


function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(0, 0, 0, 0);
  return d;
}

function isNewThisWeek(tool) {
  // expects YYYY-MM-DD
  const s = tool.addedAt || tool.lastVerified || "";
  if (!s) return false;
  const dt = new Date(`${s}T00:00:00`);
  if (Number.isNaN(dt.getTime())) return false;
  return dt >= daysAgo(7);
}

function toolHaystack(t) {
  const parts = [
    t.name,
    t.whatItDoes,
    t.whyPicked,
    ...(t.bestFor ?? []),
    ...(t.watchOut ?? []),
    ...(t.tags ?? []),
    ...(t.modalities ?? []),
  ];
  return norm(parts.filter(Boolean).join(" | "));
}

function toolModalities(t) {
  const ms = (t.modalities ?? []).map(norm).filter(Boolean);
  if (ms.length) return ms;

  // fallback for older entries: infer from outcomes
  const outs = (t.outcomes ?? []).map(norm);
  const inferred = new Set();
  for (const o of outs) {
    if (o === "voice" || o === "music") inferred.add("text-to-audio");
    if (o === "video") inferred.add("text-to-video");
    if (o === "images") inferred.add("image-to-image");
    if (o === "3d") inferred.add("text-to-3d");
  }
  return Array.from(inferred);
}

// Map individual ideas to keywords and modalities (will be built from bundles after BUNDLE_IDEAS is defined)
let IDEA_KEYWORDS = {};

function matchesFilters(t) {
  const q = norm(els.q.value);
  if (q) {
    const haystack = toolHaystack(t);
    const ideaInfo = IDEA_KEYWORDS[q];
    
    if (ideaInfo) {
      // For known tool ideas, use precise matching
      // Check if tool has at least one of the required modalities
      const ms = toolModalities(t);
      const hasModality = ideaInfo.modalities.some(mod => ms.includes(mod));
      if (!hasModality) return false;
      
      // Check if at least 3 keywords match (more precise - reduces false positives)
      const matchedKeywords = ideaInfo.keywords.filter(kw => haystack.includes(kw));
      if (matchedKeywords.length < 3) return false;
    } else {
      // Check if it's a bundle name (handle emoji in bundle names)
      const bundleEntry = Object.entries(BUNDLE_IDEAS).find(([name]) => {
        const normalizedName = norm(name);
        const normalizedQ = norm(q);
        return normalizedName === normalizedQ || normalizedName.includes(normalizedQ) || normalizedQ.includes(normalizedName);
      });
      if (bundleEntry) {
        const [, bundle] = bundleEntry;
        const ms = toolModalities(t);
        const hasModality = bundle.modalities.some(mod => ms.includes(mod));
        if (!hasModality) return false;
        
        // For bundles, require at least 3 keywords to match (precise)
        const matchedKeywords = bundle.keywords.filter(kw => haystack.includes(kw));
        if (matchedKeywords.length < 3) return false;
      } else {
        // For custom queries, use flexible matching
        // First try exact phrase match
        if (haystack.includes(q)) return true;
        
        // Split query into significant words (ignore common words)
        const stopWords = ['a', 'an', 'the', 'to', 'into', 'from', 'for', 'with', 'and', 'or', 'but'];
        const queryWords = q.split(/\s+/)
          .filter(w => w.length > 2) // Ignore words shorter than 3 chars
          .filter(w => !stopWords.includes(w)); // Ignore stop words
        
        if (queryWords.length > 0) {
          // Match if at least 2 significant words appear
          const matchedWords = queryWords.filter(word => haystack.includes(word));
          if (matchedWords.length < 2 && queryWords.length > 2) return false;
          if (matchedWords.length === 0) return false;
        } else {
          // For very short queries, use exact substring match
          if (!haystack.includes(q)) return false;
        }
      }
    }
  }

  if (state.modality !== "all") {
    const ms = toolModalities(t);
    if (!ms.includes(state.modality)) return false;
  }

  // "New this week" filter removed - all tools are new since site just launched
  // Can re-enable later when only some tools are new
  return true;
}

function renderTypeChips() {
  els.chips.innerHTML = "";
  for (const m of MODALITY_CHIPS) {
    if (m.id === "all") {
      // "All" stays as a filter button
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip-btn mono";
      b.textContent = m.label;
      b.setAttribute("aria-pressed", state.modality === m.id ? "true" : "false");
      b.addEventListener("click", () => {
        state.modality = m.id;
        render();
      });
      els.chips.appendChild(b);
    } else {
      // Other categories link to dedicated category pages (better for SEO)
      const a = document.createElement("a");
      a.href = `./dist/pages/category/${m.id}.html`;
      a.className = "chip-btn mono";
      a.textContent = m.label;
      els.chips.appendChild(a);
    }
  }
}

function pricingLabel(p) {
  const v = norm(p || "unknown");
  if (!v) return "Unknown";
  if (v === "unknown") return "Unknown";
  if (v === "freemium") return "Freemium";
  if (v === "enterprise") return "Enterprise";
  if (v === "paid") return "Paid";
  if (v === "free") return "Free";
  return (p || "Unknown").toString();
}

function firstWebsiteLink(t) {
  return (t.links ?? []).find((l) => norm(l.label).includes("website")) || (t.links ?? [])[0] || null;
}

function linkByLabel(t, includes) {
  const key = norm(includes);
  return (t.links ?? []).find((l) => norm(l.label).includes(key)) || null;
}

function renderCard(t) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "card";
  card.setAttribute("role", "listitem");
  card.addEventListener("click", () => {
    window.location.href = `/dist/pages/tools/${t.id}.html`;
  });

  const website = firstWebsiteLink(t);
  const price = pricingLabel(t.pricing);
  const bestForTag = (t.bestForTag ?? "").toString().trim();

  // Get first sentence or first ~200 chars of whatItDoes for preview, allow wrapping
  const whatItDoesText = t.whatItDoes || t.tagline || "";
  const firstSentence = whatItDoesText.split(/[.!?]/)[0].trim();
  const previewText = firstSentence.length > 200 ? firstSentence.slice(0, 200) + "..." : firstSentence;

  // Get color class for bestForTag
  const bestForColorClass = bestForTag ? getBestForColorClass(bestForTag) : "";

  card.innerHTML = `
    <div class="card-header">
      <div class="card-name">${escapeHtml(t.name)}</div>
      ${t.tagline ? `<div class="card-tagline">${escapeHtml(t.tagline)}</div>` : ""}
    </div>
    <div class="card-preview">${escapeHtml(previewText)}</div>
    ${t.whyPicked ? `<div class="card-why"><span class="muted">Why:</span> ${escapeHtml(t.whyPicked)}</div>` : ""}
    <div class="card-foot">
      <span style="display:inline-flex; gap:10px; align-items:center; flex-wrap: wrap;">
        ${t.pricing && norm(t.pricing) !== "unknown" ? `<span class="price-pill">${escapeHtml(price)}</span>` : ""}
        ${bestForTag ? `<span class="bestfor-tag ${bestForColorClass}">${escapeHtml(bestForTag)}</span>` : ""}
      </span>
      <span class="card-actions">
        ${website ? `<a class="visit-btn" href="${website.url}" target="_blank" rel="noreferrer noopener">Visit</a>` : ""}
      </span>
    </div>
  `;

  // stop bubbling for inner actions
  const visit = card.querySelector(".visit-btn");
  if (visit) visit.addEventListener("click", (e) => e.stopPropagation());

  return card;
}

function getBestForColorClass(tag) {
  const colorMap = {
    "Best for 3D Assets": "bestfor-3d",
    "Best for 3D Design": "bestfor-design",
    "Best for Avatar": "bestfor-avatar",
    "Best for Avatars": "bestfor-avatar",
    "Best for Cinematic": "bestfor-cinematic",
    "Best for Control": "bestfor-control",
    "Best for Creators": "bestfor-creators",
    "Best for Design": "bestfor-design",
    "Best for Editing": "bestfor-editing",
    "Best for Effects": "bestfor-effects",
    "Best for Images": "bestfor-images",
    "Best for Motion": "bestfor-motion",
    "Best for Music": "bestfor-music",
    "Best for Narration": "bestfor-narration",
    "Best for Open Source": "bestfor-opensource",
    "Best for Quality": "bestfor-quality",
    "Best for Research": "bestfor-research",
    "Best for Speed": "bestfor-speed",
    "Best for Style": "bestfor-style",
    "Best for Stylized": "bestfor-stylized",
    "Best for Upscale": "bestfor-upscale",
    "Best for Variations": "bestfor-variations",
    "Best for Video": "bestfor-video",
    "Best for Voice": "bestfor-voice",
    "Best for Workflow": "bestfor-workflow",
  };
  return colorMap[tag] || "bestfor-default";
}

function renderGrid(tools) {
  els.grid.innerHTML = "";
  if (tools.length === 0) {
    if (els.emptyState) {
      els.emptyState.style.display = "block";
      // Update empty state based on current filters
      updateEmptyState();
    }
    return;
  }
  if (els.emptyState) els.emptyState.style.display = "none";
  
  tools.forEach((t, index) => {
    const card = renderCard(t);
    card.style.opacity = "0";
    card.style.transform = "translateY(20px) scale(0.95)";
    card.style.transition = "opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";
    els.grid.appendChild(card);
    
    // Staggered animation with bounce effect
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
    }, index * 15);
  });
}

function updateEmptyState() {
  const emptyState = els.emptyState;
  if (!emptyState) return;
  
  const hasSearch = els.q && els.q.value.trim().length > 0;
  const hasFilter = state.modality !== "all";
  
  // Update message based on what's active
  const messageEl = emptyState.querySelector('.mono');
  if (messageEl && hasSearch) {
    messageEl.textContent = `No tools match "${els.q.value}"`;
  }
}

function renderMeta(tools, total) {
  try {
    const a = tools.length;
    const b = total;
    
    // Hide loading, show results
    const loadingIndicator = document.getElementById("loadingIndicator");
    const resultText = document.getElementById("resultText");
    
    if (loadingIndicator) loadingIndicator.style.display = "none";
    if (resultText) {
      resultText.textContent = a === b ? `${a} tools` : `${a} of ${b} tools`;
      resultText.style.display = "inline";
    } else {
      // Fallback for old structure
      els.resultMeta.textContent = a === b ? `${a} tools` : `${a} of ${b} tools`;
    }
    
    // Update footer stats
    const footerStats = document.getElementById("footerStats");
    if (footerStats) {
      footerStats.textContent = `${b} tools • curated`;
    }
    
    // Update tool count in hero
    const toolCount = document.getElementById("toolCount");
    if (toolCount) {
      toolCount.textContent = `${b} tools`;
    }
  } catch (error) {
    console.error("Error rendering meta:", error);
    if (els.resultMeta) els.resultMeta.textContent = "Error";
  }
}


function render() {
  try {
    // Show loading indicator only if we have tools data
    if (TOOLS && TOOLS.length > 0) {
      const loadingIndicator = document.getElementById("loadingIndicator");
      const resultText = document.getElementById("resultText");
      if (loadingIndicator) {
        loadingIndicator.style.display = "inline";
        loadingIndicator.style.opacity = "0.6";
      }
      if (resultText) resultText.style.display = "none";
    }
    
    const filtered = TOOLS.filter(matchesFilters);
    renderGrid(filtered);
    renderMeta(filtered, TOOLS.length);

    // update chip pressed state
    Array.from(els.chips.querySelectorAll(".chip-btn")).forEach((b) => {
      const label = norm(b.textContent);
      const found = MODALITY_CHIPS.find((o) => norm(o.label) === label);
      if (!found) return;
      b.setAttribute("aria-pressed", state.modality === found.id ? "true" : "false");
    });
  } catch (error) {
    console.error("Error rendering tools:", error);
    els.grid.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--page-muted);" class="mono">
      <div style="font-size: 14px; margin-bottom: 8px;">Error loading tools</div>
      <div style="font-size: 12px; opacity: 0.7;">Please refresh the page</div>
    </div>`;
    if (els.resultMeta) els.resultMeta.textContent = "Error";
  }
}

function applyTheme(theme) {
  state.theme = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = state.theme;
  const isDark = state.theme === "dark";
  els.themeToggle.setAttribute("aria-checked", isDark ? "true" : "false");
  localStorage.setItem("theme", state.theme);
}

function slugifyId(name) {
  return norm(name)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 48) || "tool";
}


// Creative Bundle Ideas - User-focused use cases
const BUNDLE_IDEAS = {
  "🎙️ Create a Podcast": {
    description: "Voice, music, and audio tools for podcast production",
    keywords: ["voiceover", "voice", "tts", "text-to-speech", "narration", "podcast", "audio", "music", "jingle", "intro"],
    modalities: ["text-to-audio"],
    ideas: [
      "turn a script into a voiceover",
      "create a podcast intro jingle",
      "generate background music",
      "convert text to speech in multiple languages",
    ],
  },
  "📱 Build a Social Media Campaign": {
    description: "Video, image, and graphics for social content",
    keywords: ["social", "media", "short", "video", "graphic", "post", "story", "reel", "content"],
    modalities: ["text-to-video", "image-to-video", "text-to-image", "image-to-image"],
    ideas: [
      "generate a social media short",
      "create a social media graphic",
      "animate a product photo",
      "make a promotional video",
    ],
  },
  "🎬 Make a Product Demo": {
    description: "Video, 3D, and visual tools for showcasing products",
    keywords: ["product", "demo", "showcase", "video", "3d", "model", "prototype", "mockup"],
    modalities: ["text-to-video", "image-to-video", "text-to-3d", "image-to-3d", "text-to-image"],
    ideas: [
      "create a product demo video",
      "generate a product mockup",
      "create a product showcase video",
      "design a 3D product prototype",
    ],
  },
  "🎨 Design a Brand Identity": {
    description: "Logo, graphics, and visual branding tools",
    keywords: ["logo", "brand", "identity", "graphic", "design", "concept", "visual", "style"],
    modalities: ["text-to-image", "image-to-image", "text-to-3d", "image-to-3d"],
    ideas: [
      "design a logo concept",
      "turn a logo into 3D",
      "create a social media graphic",
      "change the style of an image",
    ],
  },
  "📚 Create Educational Content": {
    description: "Tutorials, explainers, and learning materials",
    keywords: ["tutorial", "explainer", "educational", "learning", "guide", "instruction", "video"],
    modalities: ["text-to-video", "image-to-video", "text-to-image"],
    ideas: [
      "generate a tutorial video preview",
      "create an animated explainer",
      "make a promotional video",
      "create an illustration",
    ],
  },
  "🎮 Build Game Assets": {
    description: "3D models, characters, and game-ready assets",
    keywords: ["game", "3d", "character", "model", "asset", "prop", "environment", "animation"],
    modalities: ["text-to-3d", "image-to-3d", "text-to-image"],
    ideas: [
      "generate a 3D game prop",
      "create a 3D character model",
      "generate a 3D environment",
      "create a 3D asset for animation",
    ],
  },
  "🎭 Create Cinematic Content": {
    description: "High-quality video and visual storytelling",
    keywords: ["cinematic", "video", "story", "narrative", "visual", "quality", "professional"],
    modalities: ["text-to-video", "image-to-video"],
    ideas: [
      "make a cinematic text-to-video",
      "animate a story from text",
      "bring a painting to life",
      "create a music video concept",
    ],
  },
  "🖼️ Enhance & Edit Images": {
    description: "Photo editing, enhancement, and transformation",
    keywords: ["enhance", "edit", "photo", "image", "quality", "upscale", "remove", "background", "style"],
    modalities: ["image-to-image"],
    ideas: [
      "upscale a low-res image",
      "remove background from a photo",
      "enhance photo quality",
      "transform a photo into art",
    ],
  },
  "🎵 Produce Music & Audio": {
    description: "Music generation, sound effects, and audio creation",
    keywords: ["music", "audio", "song", "sound", "effects", "ambient", "background", "soundtrack"],
    modalities: ["text-to-audio"],
    ideas: [
      "make a song from lyrics",
      "generate background music for a video",
      "generate sound effects from descriptions",
      "generate ambient sounds for meditation",
    ],
  },
  "🎬 Edit & Enhance Videos": {
    description: "Video editing, effects, and post-production",
    keywords: ["video", "edit", "enhance", "effects", "quality", "stabilize", "background", "style"],
    modalities: ["video-to-video"],
    ideas: [
      "enhance video quality",
      "remove objects from video",
      "add effects to video",
      "stabilize shaky footage",
    ],
  },
};

// Build IDEA_KEYWORDS from bundles
Object.values(BUNDLE_IDEAS).forEach(bundle => {
  bundle.ideas.forEach(idea => {
    IDEA_KEYWORDS[idea] = {
      keywords: bundle.keywords,
      modalities: bundle.modalities,
    };
  });
});


function wireEvents() {
  els.q.addEventListener("input", () => render());
  
  // Keyboard shortcuts (Cmd+K / Ctrl+K to focus search)
  document.addEventListener("keydown", (e) => {
    // Cmd+K (Mac) or Ctrl+K (Windows/Linux)
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      els.q.focus();
      els.q.select();
    }
    // Escape to clear search
    if (e.key === "Escape" && document.activeElement === els.q) {
      els.q.value = "";
      els.q.blur();
      render();
    }
  });
  
  // Show keyboard hint on Mac
  const searchHint = document.getElementById("searchHint");
  if (searchHint) {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    if (isMac) {
      searchHint.style.display = "block";
    }
    // Show hint when search is focused
    els.q.addEventListener("focus", () => {
      if (searchHint) searchHint.style.opacity = "0.3";
    });
    els.q.addEventListener("blur", () => {
      if (searchHint) searchHint.style.opacity = "0.6";
    });
  }
  els.q.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const first = els.grid.querySelector(".card");
      if (first) first.click();
    }
  });
  
  // Parallax effect on search bar (Antigravity-inspired)
  const searchCommand = document.getElementById("searchCommand");
  if (searchCommand) {
    document.addEventListener("mousemove", (e) => {
      const rect = searchCommand.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (y / rect.height) * 5;
      const rotateY = (x / rect.width) * -5;
      searchCommand.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    searchCommand.addEventListener("mouseleave", () => {
      searchCommand.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
  }
  
  // Animated background gradient (Antigravity-inspired)
  const animatedBg = document.getElementById("animatedBg");
  if (animatedBg) {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    document.addEventListener("mousemove", (e) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    });
    
    function animateBg() {
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      animatedBg.style.background = `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.05), transparent 70%)`;
      requestAnimationFrame(animateBg);
    }
    animateBg();
  }

  EXAMPLE_BTNS.forEach((b) => {
    b.addEventListener("click", () => {
      els.q.value = b.getAttribute("data-example") || "";
      els.q.focus();
      render();
    });
  });

  // "New this week" toggle removed - can re-enable later

  els.themeToggle.addEventListener("click", () => {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeIdeas();
    }
  });

  // Handle URL query params for ideas page links
  const urlParams = new URLSearchParams(window.location.search);
  const queryParam = urlParams.get('q');
  if (queryParam) {
    els.q.value = decodeURIComponent(queryParam);
    render();
  }

}

function boot() {
  try {
    // Re-initialize els when DOM is ready
    els = getEls();
    EXAMPLE_BTNS = Array.from(document.querySelectorAll("[data-example]"));
    
    // Validate tools data loaded
    if (!TOOLS || TOOLS.length === 0) {
      throw new Error("No tools data loaded");
    }
    
    // Validate all required elements exist
    if (!els.q || !els.chips || !els.grid || !els.resultMeta) {
      throw new Error("Required DOM elements not found");
    }
    
    renderTypeChips();
    wireEvents();

    const stored = localStorage.getItem("theme");
    applyTheme(stored === "dark" ? "dark" : "light");

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
          // Enhanced spring physics for cards - more responsive
          const isOverCard = document.elementFromPoint(mouseX, mouseY)?.closest('.card');
          const spring = isOverCard ? 0.25 : 0.15; // Faster response on cards
          const friction = 0.85;
          
          const dotDx = (mouseX - dotX) * spring;
          const dotDy = (mouseY - dotY) * spring;
          const outlineDx = (mouseX - outlineX) * (spring * 0.7);
          const outlineDy = (mouseY - outlineY) * (spring * 0.7);
          
          dotX += dotDx;
          dotY += dotDy;
          outlineX += outlineDx;
          outlineY += outlineDy;
          
          // Add scale based on hover state
          const hoverScale = isOverCard ? 1.1 : 1;
          cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) scale(${hoverScale})`;
          cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px) scale(${hoverScale})`;
          
          // Continue animation for smoother feel
          rafId = requestAnimationFrame(animateCursor);
        }
        
        // Click interactions
        let isClicking = false;
        document.addEventListener('mousedown', () => {
          isClicking = true;
          document.body.classList.add('is-clicking');
        }, { passive: true });
        
        document.addEventListener('mouseup', () => {
          isClicking = false;
          document.body.classList.remove('is-clicking');
        }, { passive: true });
        
        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        
        // Start animation immediately
        rafId = requestAnimationFrame(animateCursor);
      }
    }
  } catch (error) {
    console.error("Error initializing app:", error);
    const main = document.getElementById("main");
    if (main) {
      main.innerHTML = `<div style="text-align: center; padding: 60px 20px; color: var(--page-muted);" class="mono">
        <div style="font-size: 16px; font-weight: 600; margin-bottom: 12px; color: var(--page-text);">Failed to load tools</div>
        <div style="font-size: 13px; opacity: 0.8; margin-bottom: 24px;">Please refresh the page or check your connection</div>
        <button onclick="location.reload()" class="pill mono" style="padding: 10px 20px; font-size: 12px; cursor: pointer; border: 1px solid var(--line); background: transparent; color: var(--page-text);">
          Refresh Page
        </button>
      </div>`;
    }
  }
}


// Mobile Swipe Gestures
function initSwipeGestures() {
  if (!('ontouchstart' in window)) return; // Only on touch devices
  
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;
  const minSwipeDistance = 50; // Minimum distance for swipe
  
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });
  
  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    
    // Only trigger if horizontal swipe is dominant
    if (absDeltaX > absDeltaY && absDeltaX > minSwipeDistance) {
      // Swipe right - go back (if on a detail page)
      if (deltaX > 0 && window.history.length > 1) {
        // Only on generated pages, not homepage
        if (window.location.pathname.includes('/dist/pages/')) {
          window.history.back();
        }
      }
      // Swipe left - could be used for forward navigation
      // Currently not implemented as it requires forward history
    }
  }
}

// Mobile-specific optimizations
function initMobileOptimizations() {
  // Prevent double-tap zoom on buttons
  let lastTap = 0;
  document.addEventListener('touchend', (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 300 && tapLength > 0) {
      e.preventDefault();
      // Trigger click on double-tap
      e.target.click();
    }
    lastTap = currentTime;
  }, { passive: false });
  
  // Better viewport handling for mobile
  if (window.innerWidth <= 720) {
    // Add mobile class for additional styling hooks
    document.body.classList.add('is-mobile');
    
    // Improve scroll performance
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Prevent pull-to-refresh on iOS (can be annoying)
    document.body.style.overscrollBehaviorY = 'contain';
  }
}

// Force fixed header on mobile/tablet - AGGRESSIVE FIX
function forceFixedHeader() {
  if (window.innerWidth <= 720) {
    const header = document.querySelector('header.chrome');
    if (header) {
      // Use setProperty with !important via CSSStyleDeclaration
      header.style.setProperty('position', 'fixed', 'important');
      header.style.setProperty('top', '0', 'important');
      header.style.setProperty('left', '0', 'important');
      header.style.setProperty('right', '0', 'important');
      header.style.setProperty('z-index', '9999', 'important');
      header.style.setProperty('width', '100vw', 'important');
      header.style.setProperty('margin', '0', 'important');
      header.style.setProperty('transform', 'none', 'important');
      header.style.setProperty('will-change', 'auto', 'important');
      
      // Ensure body/html don't create containing block
      document.documentElement.style.setProperty('transform', 'none', 'important');
      document.documentElement.style.setProperty('perspective', 'none', 'important');
      document.documentElement.style.setProperty('filter', 'none', 'important');
      document.body.style.setProperty('transform', 'none', 'important');
      document.body.style.setProperty('perspective', 'none', 'important');
      document.body.style.setProperty('filter', 'none', 'important');
    }
  }
}

// Run immediately and on multiple events
requestAnimationFrame(() => {
  forceFixedHeader();
  setTimeout(forceFixedHeader, 0);
  setTimeout(forceFixedHeader, 100);
});

window.addEventListener('resize', forceFixedHeader);
window.addEventListener('orientationchange', () => {
  setTimeout(forceFixedHeader, 100);
});

// Watch for style changes and re-apply
if (window.innerWidth <= 720) {
  const header = document.querySelector('header.chrome');
  if (header) {
    const observer = new MutationObserver(() => {
      if (header.style.position !== 'fixed') {
        forceFixedHeader();
      }
    });
    observer.observe(header, { attributes: true, attributeFilter: ['style', 'class'] });
  }
}

// Initialize mobile features
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initSwipeGestures();
    initMobileOptimizations();
  });
} else {
  initSwipeGestures();
  initMobileOptimizations();
}

// Clear all filters function (called from empty state)
function clearAllFilters() {
  try {
    if (els.q) els.q.value = "";
    state.modality = "all";
    // "New this week" filter removed
    render();
    if (els.q) els.q.focus();
  } catch (error) {
    console.error("Error clearing filters:", error);
  }
}

// Make it globally available
window.clearAllFilters = clearAllFilters;

boot();


