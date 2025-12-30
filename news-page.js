const els = {
  themeToggle: document.getElementById("themeToggle"),
  newsGrid: document.getElementById("newsGrid"),
  newsMeta: document.getElementById("newsMeta"),
  newsFooterStats: document.getElementById("newsFooterStats"),
};

/** @type {Array<any>} */
const NEWS = (window.__AI_NEWS__?.NEWS ?? []).slice();

const state = {
  theme: "light",
  speakingId: null,
  activeEmbedId: null,
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

function isWithinDays(item, n = 7) {
  const s = item.date || "";
  if (!s) return false;
  const dt = new Date(`${s}T00:00:00`);
  if (Number.isNaN(dt.getTime())) return false;
  return dt >= daysAgo(n);
}

function applyTheme(theme) {
  state.theme = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = state.theme;
  const isDark = state.theme === "dark";
  els.themeToggle?.setAttribute("aria-checked", isDark ? "true" : "false");
  localStorage.setItem("theme", state.theme);
}

function canSpeak() {
  return typeof window !== "undefined" && "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined";
}

function stopSpeaking() {
  try {
    window.speechSynthesis?.cancel();
  } catch {
    // ignore
  }
  state.speakingId = null;
  syncSpeakButtons();
}

function speak(item) {
  if (!canSpeak()) return;
  stopSpeaking();
  const text = (item.summary || "").trim();
  if (!text) return;
  state.speakingId = item.id;
  syncSpeakButtons();

  const u = new SpeechSynthesisUtterance(text);
  u.rate = 1.02;
  u.pitch = 1.0;
  u.onend = () => {
    state.speakingId = null;
    syncSpeakButtons();
  };
  u.onerror = () => {
    state.speakingId = null;
    syncSpeakButtons();
  };
  window.speechSynthesis.speak(u);
}

function syncSpeakButtons() {
  const btns = Array.from(document.querySelectorAll("[data-speak-id]"));
  for (const b of btns) {
    const id = b.getAttribute("data-speak-id");
    const active = id && id === state.speakingId;
    b.textContent = active ? "Stop" : "Listen";
    b.setAttribute("aria-pressed", active ? "true" : "false");
  }
}

// Kept for future if you want a compact badge again.
function badgeLabel(source) {
  if (source === "youtube") return "Update";
  if (source === "x") return "Thread";
  if (source === "tiktok") return "Update";
  return "Link";
}

function extractYouTubeId(url) {
  try {
    const u = new URL(url);
    // shorts
    const m1 = u.pathname.match(/\/shorts\/([a-zA-Z0-9_-]{6,})/);
    if (m1?.[1]) return m1[1];
    // watch?v=
    const v = u.searchParams.get("v");
    if (v) return v;
    // youtu.be/<id>
    const m2 = u.hostname.includes("youtu.be") ? u.pathname.replace("/", "") : "";
    if (m2) return m2;
  } catch {
    // ignore
  }
  return null;
}

function youtubeThumbUrls(videoId) {
  // maxres isn't always available; we fall back automatically on error.
  return {
    max: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
    hq: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  };
}

function youtubeEmbedUrl(videoId) {
  const u = new URL(`https://www.youtube.com/embed/${videoId}`);
  u.searchParams.set("autoplay", "1");
  u.searchParams.set("playsinline", "1");
  u.searchParams.set("rel", "0");
  u.searchParams.set("modestbranding", "1");
  return u.toString();
}

function stopAllEmbeds() {
  const frames = Array.from(document.querySelectorAll("[data-yt-frame]"));
  for (const f of frames) f.remove();
  state.activeEmbedId = null;
  syncPlayButtons();
}

function syncPlayButtons() {
  const btns = Array.from(document.querySelectorAll("[data-play-id]"));
  for (const b of btns) {
    const id = b.getAttribute("data-play-id");
    const active = id && id === state.activeEmbedId;
    b.textContent = active ? "Close" : "Play";
    b.setAttribute("aria-pressed", active ? "true" : "false");
  }
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    const date = new Date(`${dateStr}T00:00:00`);
    if (Number.isNaN(date.getTime())) return dateStr;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  } catch {
    return dateStr;
  }
}

function renderCard(item) {
  const website = item.url;
  const date = item.date || "";
  const formattedDate = formatDate(date);
  const title = item.title || "Untitled";
  const summary = (item.summary || "").trim();
  const showListen = canSpeak() && !!summary;

  const ytId = item.source === "youtube" ? extractYouTubeId(item.url) : null;
  const thumbs = ytId ? youtubeThumbUrls(ytId) : null;
  const showPlay = !!ytId;
  const hasPlaceholder = item.url && item.url.includes("PLACEHOLDER");

  const card = document.createElement("article");
  card.className = "card news-card";
  card.setAttribute("role", "listitem");
  card.innerHTML = `
    <div class="news-row">
      ${
        thumbs
          ? `<a class="news-thumb" href="${website}" target="_blank" rel="noreferrer noopener" aria-label="Open">
               <div class="news-media" data-media-for="${escapeHtml(item.id)}">
                 <img data-thumb="1" alt="" loading="lazy" src="${thumbs.max}" />
               </div>
             </a>`
          : hasPlaceholder
          ? `<div class="news-thumb news-thumb-fallback" aria-hidden="true" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center;">
               <span style="color: white; font-size: 24px; opacity: 0.7;">📹</span>
             </div>`
          : `<div class="news-thumb news-thumb-fallback" aria-hidden="true"></div>`
      }
      <div class="news-body">
        <div class="card-name">${escapeHtml(title)}</div>
        ${formattedDate ? `<div class="card-line news-date"><span class="muted mono">${escapeHtml(formattedDate)}</span></div>` : ""}
        ${summary ? `<div class="card-line news-summary">${escapeHtml(summary)}</div>` : ""}
        <div class="card-foot">
          <span class="card-actions">
            ${
              showPlay
                ? `<button class="open-btn" type="button" data-play-id="${escapeHtml(item.id)}" aria-pressed="false">Play</button>`
                : ""
            }
            ${
              showListen
                ? `<button class="open-btn" type="button" data-speak-id="${escapeHtml(item.id)}" aria-pressed="false">Listen</button>`
                : ""
            }
            <a class="visit-btn" href="${website}" target="_blank" rel="noreferrer noopener">Open</a>
          </span>
        </div>
      </div>
    </div>
  `;

  // thumbnail fallback (maxres -> hq)
  const img = card.querySelector('img[data-thumb="1"]');
  if (img && thumbs) {
    // set blurred background fill to the same thumbnail
    const media = img.closest(".news-media");
    if (media) media.style.setProperty("--thumb", `url("${thumbs.hq}")`);

    img.addEventListener("error", () => {
      if (img.getAttribute("src") !== thumbs.hq) img.setAttribute("src", thumbs.hq);
      const media2 = img.closest(".news-media");
      if (media2) media2.style.setProperty("--thumb", `url("${thumbs.hq}")`);
    });
  }

  const playBtn = card.querySelector("[data-play-id]");
  if (playBtn && ytId) {
    // prevent card click (card isn't a button, but keep this safe)
    playBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const active = state.activeEmbedId === item.id;
      if (active) return stopAllEmbeds();

      stopAllEmbeds();
      state.activeEmbedId = item.id;
      const media = card.querySelector(`[data-media-for="${CSS.escape(item.id)}"]`);
      if (!media) return syncPlayButtons();

      const iframe = document.createElement("iframe");
      iframe.setAttribute("data-yt-frame", "1");
      iframe.className = "news-embed";
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.src = youtubeEmbedUrl(ytId);
      iframe.title = "YouTube Short";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      media.innerHTML = "";
      media.appendChild(iframe);
      syncPlayButtons();
    });
  }

  const speakBtn = card.querySelector("[data-speak-id]");
  if (speakBtn) {
    speakBtn.addEventListener("click", () => {
      const active = state.speakingId === item.id;
      if (active) return stopSpeaking();
      speak(item);
    });
  }
  return card;
}

function render() {
  // Show all news items (currently 45 total from @thesingularitylabs).
  // If items have dates, prefer sorting newest-first; otherwise preserve file order.
  const hasDates = NEWS.some((n) => (n.date || "").trim());
  const items = hasDates ? NEWS.slice().sort((a, b) => norm(b.date).localeCompare(norm(a.date))) : NEWS.slice();
  els.newsGrid.innerHTML = "";

  // Update footer stats
  if (els.newsFooterStats) {
    const count = items.length;
    els.newsFooterStats.textContent = `${count} updates • curated`;
  }

  if (!items.length) {
    els.newsMeta.textContent = "No items yet — add this week's links in data/news.js";
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `
      <div class="card-name">No news posted yet</div>
      <div class="card-line"><span class="muted">Add items:</span> edit <span class="mono">data/news.js</span> (Mon–Fri)</div>
    `;
    els.newsGrid.appendChild(empty);
    return;
  }

  els.newsMeta.textContent = `${items.length} items • latest`;
  for (const it of items) els.newsGrid.appendChild(renderCard(it));
  syncSpeakButtons();
  syncPlayButtons();
}

function boot() {
  const stored = localStorage.getItem("theme");
  applyTheme(stored === "dark" ? "dark" : "light");
  els.themeToggle?.addEventListener("click", () => applyTheme(state.theme === "dark" ? "light" : "dark"));
  window.addEventListener("beforeunload", () => {
    stopSpeaking();
    stopAllEmbeds();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      stopSpeaking();
      stopAllEmbeds();
    }
  });
  render();
}

boot();

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
      const dotDx = (mouseX - dotX) * 0.2;
      const dotDy = (mouseY - dotY) * 0.2;
      const outlineDx = (mouseX - outlineX) * 0.12;
      const outlineDy = (mouseY - outlineY) * 0.12;
      
      if (Math.abs(dotDx) > 0.1 || Math.abs(dotDy) > 0.1 || 
          Math.abs(outlineDx) > 0.1 || Math.abs(outlineDy) > 0.1) {
        dotX += dotDx;
        dotY += dotDy;
        outlineX += outlineDx;
        outlineY += outlineDy;
        
        cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
        cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
        
        rafId = requestAnimationFrame(animateCursor);
      } else {
        rafId = null;
      }
    }
    
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
  }
}


