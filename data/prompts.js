// Curated AI prompts for different tools and use cases
// High-quality, tested prompts organized by category

// Use-case based categories - more insightful than modality-based
export const PROMPT_CATEGORIES = [
  "photography",
  "design-branding",
  "video-production",
  "audio-production",
  "image-editing",
  "3d-visualization",
  "llm-workflows",
  "development-ai",
  "templates",
  "studio-setup",
];

export const PROMPTS = [
  // Text-to-Image Prompts
  {
    id: "cinematic-portrait",
    title: "Cinematic Portrait",
    category: "photography",
    tool: "midjourney",
    description: "Create professional cinematic portraits with dramatic lighting and depth",
    prompt: "cinematic portrait of a [subject], dramatic lighting, shallow depth of field, cinematic lighting, 8k, highly detailed, professional photography",
    tags: ["portrait", "cinematic", "photography", "professional"],
    useCase: "Professional headshots, portfolio images, character design",
    tips: [
      "Replace [subject] with your specific subject (person, character, etc.)",
      "Adjust lighting terms: 'soft lighting' for gentle, 'harsh lighting' for dramatic",
      "Add style modifiers: 'film noir', 'golden hour', 'studio lighting'"
    ],
    example: "cinematic portrait of a tech entrepreneur, dramatic lighting, shallow depth of field, cinematic lighting, 8k, highly detailed, professional photography"
  },
  {
    id: "product-photography",
    title: "Product Photography",
    category: "photography",
    tool: "midjourney",
    description: "Studio-quality product shots with clean backgrounds",
    prompt: "professional product photography of [product], white background, studio lighting, clean composition, sharp focus, commercial photography, 8k",
    tags: ["product", "commercial", "studio", "ecommerce"],
    useCase: "E-commerce product images, catalog photography, marketing materials",
    tips: [
      "Specify product type and color",
      "Add 'lifestyle' for contextual shots or 'isolated' for pure product",
      "Include material details: 'matte finish', 'glossy', 'textured'"
    ],
    example: "professional product photography of a minimalist watch, white background, studio lighting, clean composition, sharp focus, commercial photography, 8k"
  },
  {
    id: "architectural-visualization",
    title: "Architectural Visualization",
    category: "photography",
    tool: "midjourney",
    description: "Realistic architectural renders and building visualizations",
    prompt: "architectural visualization of [building type], modern design, natural lighting, realistic materials, professional render, 8k, highly detailed",
    tags: ["architecture", "3d", "render", "design"],
    useCase: "Architectural presentations, real estate marketing, design concepts",
    tips: [
      "Specify architectural style: 'modern', 'brutalist', 'minimalist'",
      "Add time of day: 'golden hour', 'blue hour', 'midday sun'",
      "Include environment: 'urban', 'suburban', 'coastal'"
    ],
    example: "architectural visualization of a modern glass office building, natural lighting, realistic materials, professional render, 8k, highly detailed"
  },
  
  // Text-to-Video Prompts
  {
    id: "smooth-pan",
    title: "Smooth Camera Pan",
    category: "video-production",
    tool: "runway",
    description: "Create smooth, cinematic camera movements",
    prompt: "[scene description], smooth camera pan, cinematic movement, professional cinematography, 4k, 24fps",
    tags: ["camera", "cinematic", "movement", "professional"],
    useCase: "Film intros, establishing shots, documentary footage",
    tips: [
      "Specify direction: 'pan left', 'pan right', 'slow zoom in'",
      "Add duration: '5 second shot', '10 second sequence'",
      "Include camera type: 'handheld', 'steady cam', 'dolly shot'"
    ],
    example: "urban cityscape at sunset, smooth camera pan right, cinematic movement, professional cinematography, 4k, 24fps"
  },
  {
    id: "product-demo",
    title: "Product Demo Video",
    category: "video-production",
    tool: "runway",
    description: "Showcase products with dynamic camera angles",
    prompt: "product demonstration of [product], rotating view, dynamic angles, professional lighting, clean background, 4k",
    tags: ["product", "commercial", "marketing", "demo"],
    useCase: "Product launches, marketing videos, social media content",
    tips: [
      "Specify rotation: '360 rotation', 'slow spin', 'tilt reveal'",
      "Add interaction: 'hands holding', 'in use', 'lifestyle context'",
      "Include mood: 'energetic', 'sophisticated', 'minimalist'"
    ],
    example: "product demonstration of a smartwatch, rotating view, dynamic angles, professional lighting, clean background, 4k"
  },
  
  // Text-to-Audio Prompts
  {
    id: "podcast-intro",
    title: "Podcast Intro Music",
    category: "audio-production",
    tool: "suno",
    description: "Create engaging podcast intro music",
    prompt: "upbeat instrumental, electronic beats, modern podcast intro, energetic, 30 seconds, no vocals",
    tags: ["podcast", "intro", "instrumental", "electronic"],
    useCase: "Podcast branding, show intros, episode transitions",
    tips: [
      "Specify genre: 'electronic', 'acoustic', 'jazz', 'ambient'",
      "Adjust energy: 'energetic', 'calm', 'dramatic'",
      "Set duration: '15 seconds', '30 seconds', '60 seconds'"
    ],
    example: "upbeat instrumental, electronic beats, modern podcast intro, energetic, 30 seconds, no vocals"
  },
  {
    id: "ambient-background",
    title: "Ambient Background Music",
    category: "audio-production",
    tool: "suno",
    description: "Calm, atmospheric music for background use",
    prompt: "ambient background music, calm atmosphere, soft pads, minimal percussion, relaxing, 2 minutes, instrumental",
    tags: ["ambient", "background", "calm", "atmospheric"],
    useCase: "Video backgrounds, meditation, focus music, relaxation",
    tips: [
      "Adjust intensity: 'very subtle', 'moderate', 'prominent'",
      "Add elements: 'nature sounds', 'rain', 'ocean waves'",
      "Specify mood: 'peaceful', 'energizing', 'melancholic'"
    ],
    example: "ambient background music, calm atmosphere, soft pads, minimal percussion, relaxing, 2 minutes, instrumental"
  },
  
  // Image-to-Image Prompts
  {
    id: "style-transfer",
    title: "Style Transfer",
    category: "image-editing",
    tool: "midjourney",
    description: "Transform images with artistic styles",
    prompt: "transform image in the style of [artist/style], maintain composition, apply artistic filter, high quality",
    tags: ["style", "artistic", "transformation", "filter"],
    useCase: "Artistic effects, brand consistency, creative transformations",
    tips: [
      "Specify style: 'Van Gogh', 'Picasso', 'anime', 'watercolor'",
      "Control strength: 'subtle', 'moderate', 'strong'",
      "Preserve elements: 'keep faces', 'maintain colors', 'preserve structure'"
    ],
    example: "transform image in the style of Van Gogh, maintain composition, apply artistic filter, high quality"
  },
  {
    id: "background-replacement",
    title: "Background Replacement",
    category: "image-editing",
    tool: "midjourney",
    description: "Replace backgrounds while preserving subject",
    prompt: "replace background with [new background], keep subject unchanged, seamless blend, natural lighting match",
    tags: ["background", "editing", "composite", "professional"],
    useCase: "Product photography, portrait editing, marketing materials",
    tips: [
      "Describe new background: 'beach', 'cityscape', 'studio white'",
      "Match lighting: 'warm lighting', 'cool tones', 'natural daylight'",
      "Specify blend: 'seamless', 'soft edge', 'hard cut'"
    ],
    example: "replace background with modern office, keep subject unchanged, seamless blend, natural lighting match"
  },
  
  // Text-to-3D Prompts
  {
    id: "character-model",
    title: "3D Character Model",
    category: "3d-visualization",
    tool: "luma",
    description: "Generate 3D character models for games and animation",
    prompt: "3D character model, [description], low poly, game-ready, clean topology, UV mapped, PBR materials",
    tags: ["3d", "character", "game", "model"],
    useCase: "Game development, animation, VR/AR, 3D printing",
    tips: [
      "Specify style: 'realistic', 'stylized', 'cartoon', 'low poly'",
      "Add details: 'detailed face', 'clothing', 'accessories'",
      "Set complexity: 'low poly', 'high poly', 'optimized'"
    ],
    example: "3D character model, futuristic warrior, low poly, game-ready, clean topology, UV mapped, PBR materials"
  },
  {
    id: "product-3d",
    title: "3D Product Model",
    category: "3d-visualization",
    tool: "luma",
    description: "Create 3D product models for visualization",
    prompt: "3D model of [product], realistic materials, clean geometry, optimized for rendering, high quality",
    tags: ["3d", "product", "visualization", "commercial"],
    useCase: "Product visualization, AR previews, marketing renders",
    tips: [
      "Specify materials: 'metal', 'glass', 'fabric', 'plastic'",
      "Add details: 'textures', 'branding', 'labels'",
      "Set quality: 'high detail', 'optimized', 'low poly'"
    ],
    example: "3D model of a smartphone, realistic materials, clean geometry, optimized for rendering, high quality"
  },
  
  // General Prompts
  {
    id: "brand-consistency",
    title: "Brand Consistency",
    category: "design-branding",
    tool: "midjourney",
    description: "Maintain consistent brand style across generations",
    prompt: "[content description], consistent brand style, [color palette], [typography style], professional, on-brand",
    tags: ["brand", "consistency", "marketing", "professional"],
    useCase: "Brand assets, marketing materials, social media content",
    tips: [
      "Define brand colors: 'blue and white', 'minimalist palette'",
      "Specify style: 'modern', 'vintage', 'corporate', 'playful'",
      "Include brand elements: 'logo placement', 'tagline', 'signature style'"
    ],
    example: "social media post, consistent brand style, blue and white palette, modern typography, professional, on-brand"
  },
  {
    id: "accessibility",
    title: "Accessible Design",
    category: "design-branding",
    tool: "midjourney",
    description: "Create accessible, inclusive visual content",
    prompt: "[content description], accessible design, high contrast, clear typography, inclusive representation, WCAG compliant",
    tags: ["accessibility", "inclusive", "design", "professional"],
    useCase: "Public-facing content, educational materials, corporate communications",
    tips: [
      "Ensure contrast: 'high contrast', 'readable text'",
      "Include diversity: 'diverse representation', 'inclusive imagery'",
      "Add alt text considerations: 'clear subject', 'descriptive elements'"
    ],
    example: "infographic, accessible design, high contrast, clear typography, inclusive representation, WCAG compliant"
  },
  
  // Additional Text-to-Image Prompts
  {
    id: "logo-design",
    title: "Logo Design",
    category: "design-branding",
    tool: "midjourney",
    description: "Create minimalist logo designs with clean typography",
    prompt: "minimalist logo design, [company name], [style], clean typography, vector style, professional branding, simple, iconic",
    tags: ["logo", "branding", "design", "minimalist"],
    useCase: "Brand identity, startup logos, rebranding projects",
    tips: [
      "Specify style: 'modern', 'vintage', 'tech', 'luxury'",
      "Add color scheme: 'monochrome', 'two-tone', 'gradient'",
      "Include icon type: 'geometric', 'abstract', 'letterform'"
    ],
    example: "minimalist logo design, tech startup, modern, clean typography, vector style, professional branding, simple, iconic"
  },
  {
    id: "social-media-post",
    title: "Social Media Post",
    category: "design-branding",
    tool: "midjourney",
    description: "Create engaging social media graphics with proper dimensions",
    prompt: "social media post design, [content type], [platform dimensions], modern layout, engaging visuals, brand colors, readable text overlay",
    tags: ["social", "marketing", "graphics", "content"],
    useCase: "Social media marketing, content creation, brand promotion",
    tips: [
      "Specify platform: 'Instagram post', 'Twitter header', 'LinkedIn graphic'",
      "Add content type: 'quote', 'announcement', 'promotion'",
      "Include brand elements: 'logo placement', 'color scheme', 'typography style'"
    ],
    example: "social media post design, product launch announcement, Instagram post, modern layout, engaging visuals, brand colors, readable text overlay"
  },
  
  // Additional Text-to-Video Prompts
  {
    id: "time-lapse",
    title: "Time-Lapse Effect",
    category: "video-production",
    tool: "runway",
    description: "Create smooth time-lapse sequences",
    prompt: "[scene description], time-lapse effect, smooth motion, accelerated time, cinematic, 4k, professional",
    tags: ["timelapse", "cinematic", "motion", "effect"],
    useCase: "Documentary footage, nature videos, urban scenes",
    tips: [
      "Specify subject: 'city traffic', 'sunset', 'clouds', 'construction'",
      "Add speed: 'fast motion', 'slow motion', 'normal speed'",
      "Include duration: '10 seconds', '30 seconds', '1 minute'"
    ],
    example: "urban cityscape at night, time-lapse effect, smooth motion, accelerated time, cinematic, 4k, professional"
  },
  {
    id: "explainer-video",
    title: "Explainer Video",
    category: "video-production",
    tool: "runway",
    description: "Create animated explainer videos with clear visuals",
    prompt: "explainer video, [topic], animated graphics, clear visuals, professional narration style, engaging, 4k",
    tags: ["explainer", "animation", "education", "marketing"],
    useCase: "Product demos, educational content, marketing videos",
    tips: [
      "Specify topic: 'product features', 'how it works', 'tutorial'",
      "Add style: 'animated', 'live action', 'mixed media'",
      "Include tone: 'professional', 'friendly', 'energetic'"
    ],
    example: "explainer video, cloud computing basics, animated graphics, clear visuals, professional narration style, engaging, 4k"
  },
  
  // Additional Text-to-Audio Prompts
  {
    id: "sound-effect",
    title: "Sound Effect",
    category: "audio-production",
    tool: "suno",
    description: "Generate realistic sound effects for media production",
    prompt: "[sound type], realistic sound effect, [duration], high quality, clean audio, no music",
    tags: ["sound", "effects", "audio", "production"],
    useCase: "Video production, game development, podcast intros",
    tips: [
      "Specify sound: 'door closing', 'footsteps', 'rain', 'car engine'",
      "Add environment: 'indoor', 'outdoor', 'echo', 'reverb'",
      "Set duration: '1 second', '3 seconds', '5 seconds'"
    ],
    example: "door closing, realistic sound effect, 2 seconds, high quality, clean audio, no music"
  },
  {
    id: "voiceover",
    title: "AI Voiceover",
    category: "audio-production",
    tool: "elevenlabs",
    description: "Generate natural-sounding voiceovers",
    prompt: "[text content], natural voice, [voice style], clear pronunciation, professional narration, [language]",
    tags: ["voice", "narration", "audio", "professional"],
    useCase: "Video narration, audiobooks, podcast intros, presentations",
    tips: [
      "Specify voice: 'male', 'female', 'neutral', 'character voice'",
      "Add style: 'conversational', 'formal', 'energetic', 'calm'",
      "Include language: 'English', 'Spanish', 'French', 'multilingual'"
    ],
    example: "Welcome to our product demo, natural voice, professional male, clear pronunciation, professional narration, English"
  },
  
  // More Text-to-Image Prompts
  {
    id: "ui-mockup",
    title: "UI Mockup",
    category: "design-branding",
    tool: "midjourney",
    description: "Create realistic UI/UX mockups for web and mobile apps",
    prompt: "UI mockup, [app type], modern design, clean interface, professional layout, high fidelity, 4k, detailed",
    tags: ["ui", "ux", "design", "mockup"],
    useCase: "Design presentations, client proposals, portfolio work",
    tips: [
      "Specify device: 'mobile app', 'web dashboard', 'tablet interface'",
      "Add style: 'minimalist', 'material design', 'iOS style', 'dark mode'",
      "Include elements: 'navigation bar', 'sidebar', 'cards', 'buttons'"
    ],
    example: "UI mockup, e-commerce mobile app, modern design, clean interface, professional layout, high fidelity, 4k, detailed"
  },
  {
    id: "icon-set",
    title: "Icon Set",
    category: "design-branding",
    tool: "midjourney",
    description: "Generate consistent icon designs for applications",
    prompt: "icon design, [icon type], minimalist style, consistent design language, vector style, clean lines, professional",
    tags: ["icon", "design", "minimalist", "vector"],
    useCase: "App development, design systems, branding",
    tips: [
      "Specify icon: 'home', 'settings', 'user', 'search', 'menu'",
      "Add style: 'outline', 'filled', 'rounded', 'sharp'",
      "Maintain consistency: 'same stroke width', 'same corner radius'"
    ],
    example: "icon design, navigation menu icon, minimalist style, consistent design language, vector style, clean lines, professional"
  },
  {
    id: "illustration",
    title: "Custom Illustration",
    category: "design-branding",
    tool: "midjourney",
    description: "Create custom illustrations for articles, books, or marketing",
    prompt: "custom illustration, [subject], [art style], vibrant colors, detailed, professional artwork, high quality",
    tags: ["illustration", "art", "custom", "creative"],
    useCase: "Blog posts, book covers, marketing materials, presentations",
    tips: [
      "Specify style: 'watercolor', 'digital art', 'sketch', 'flat design'",
      "Add mood: 'playful', 'serious', 'whimsical', 'professional'",
      "Include color scheme: 'warm tones', 'cool palette', 'monochrome'"
    ],
    example: "custom illustration, tech startup team, modern digital art style, vibrant colors, detailed, professional artwork, high quality"
  },
  
  // More Text-to-Video Prompts
  {
    id: "b-roll",
    title: "B-Roll Footage",
    category: "video-production",
    tool: "runway",
    description: "Generate professional B-roll for video editing",
    prompt: "B-roll footage, [subject], smooth camera movement, cinematic quality, 4k, professional videography",
    tags: ["b-roll", "cinematic", "footage", "professional"],
    useCase: "Video editing, documentaries, corporate videos, YouTube content",
    tips: [
      "Specify subject: 'cityscape', 'nature', 'people working', 'products'",
      "Add movement: 'slow pan', 'dolly shot', 'static shot', 'handheld'",
      "Include mood: 'energetic', 'calm', 'dramatic', 'peaceful'"
    ],
    example: "B-roll footage, busy coffee shop, smooth camera movement, cinematic quality, 4k, professional videography"
  },
  {
    id: "transition",
    title: "Video Transition",
    category: "video-production",
    tool: "runway",
    description: "Create smooth transitions between scenes",
    prompt: "video transition, [transition type], smooth motion, professional editing, seamless, 4k",
    tags: ["transition", "editing", "motion", "professional"],
    useCase: "Video editing, montages, commercial videos",
    tips: [
      "Specify type: 'fade', 'wipe', 'zoom', 'slide', 'morph'",
      "Add duration: 'quick transition', 'slow fade', 'instant cut'",
      "Include style: 'smooth', 'dramatic', 'subtle', 'energetic'"
    ],
    example: "video transition, smooth fade between scenes, smooth motion, professional editing, seamless, 4k"
  },
  
  // More Text-to-Audio Prompts
  {
    id: "jingle",
    title: "Brand Jingle",
    category: "audio-production",
    tool: "suno",
    description: "Create catchy brand jingles for advertising",
    prompt: "brand jingle, [brand name], catchy melody, upbeat, memorable, 15 seconds, instrumental with optional vocals",
    tags: ["jingle", "branding", "advertising", "music"],
    useCase: "Radio ads, TV commercials, brand identity, marketing",
    tips: [
      "Specify mood: 'energetic', 'sophisticated', 'playful', 'professional'",
      "Add instruments: 'piano', 'guitar', 'synthesizer', 'brass'",
      "Include vocals: 'with vocals', 'instrumental only', 'humming'"
    ],
    example: "brand jingle, tech startup, catchy melody, upbeat, memorable, 15 seconds, instrumental with optional vocals"
  },
  {
    id: "ambient-soundscape",
    title: "Ambient Soundscape",
    category: "audio-production",
    tool: "suno",
    description: "Generate atmospheric ambient soundscapes",
    prompt: "ambient soundscape, [environment], atmospheric, immersive, 3 minutes, no beats, pure atmosphere",
    tags: ["ambient", "soundscape", "atmospheric", "immersive"],
    useCase: "Meditation apps, focus music, background audio, relaxation",
    tips: [
      "Specify environment: 'forest', 'ocean', 'city', 'space', 'rain'",
      "Add elements: 'wind', 'water', 'birds', 'traffic', 'rain'",
      "Set intensity: 'subtle', 'moderate', 'rich', 'sparse'"
    ],
    example: "ambient soundscape, rainy forest, atmospheric, immersive, 3 minutes, no beats, pure atmosphere"
  },
  
  // More Image-to-Image Prompts
  {
    id: "color-grading",
    title: "Color Grading",
    category: "image-editing",
    tool: "midjourney",
    description: "Apply professional color grading to images",
    prompt: "apply color grading, [color style], professional look, cinematic tones, consistent palette, high quality",
    tags: ["color", "grading", "cinematic", "professional"],
    useCase: "Photo editing, social media, brand consistency, film look",
    tips: [
      "Specify style: 'warm', 'cool', 'vintage', 'cinematic', 'desaturated'",
      "Add mood: 'dramatic', 'soft', 'vibrant', 'muted'",
      "Include reference: 'film look', 'Instagram style', 'magazine quality'"
    ],
    example: "apply color grading, warm cinematic tones, professional look, cinematic tones, consistent palette, high quality"
  },
  {
    id: "object-removal",
    title: "Object Removal",
    category: "image-editing",
    tool: "midjourney",
    description: "Remove unwanted objects while maintaining natural look",
    prompt: "remove [object], seamless background fill, natural lighting match, no artifacts, professional editing",
    tags: ["editing", "removal", "cleanup", "professional"],
    useCase: "Photo cleanup, product photography, real estate, portraits",
    tips: [
      "Specify object: 'person', 'text', 'logo', 'power lines', 'background clutter'",
      "Maintain quality: 'preserve details', 'natural look', 'no blur'",
      "Match environment: 'same lighting', 'consistent texture', 'seamless blend'"
    ],
    example: "remove background person, seamless background fill, natural lighting match, no artifacts, professional editing"
  },
  
  // More Text-to-3D Prompts
  {
    id: "environment-3d",
    title: "3D Environment",
    category: "3d-visualization",
    tool: "luma",
    description: "Generate complete 3D environments for games or VR",
    prompt: "3D environment, [scene type], detailed geometry, optimized for real-time, PBR materials, game-ready",
    tags: ["3d", "environment", "game", "vr"],
    useCase: "Game development, VR experiences, architectural visualization",
    tips: [
      "Specify scene: 'forest', 'city', 'interior', 'fantasy world'",
      "Add details: 'trees', 'buildings', 'furniture', 'props'",
      "Set optimization: 'low poly', 'high detail', 'LOD ready'"
    ],
    example: "3D environment, cyberpunk city street, detailed geometry, optimized for real-time, PBR materials, game-ready"
  },
  {
    id: "prop-3d",
    title: "3D Prop Model",
    category: "3d-visualization",
    tool: "luma",
    description: "Create 3D props for scenes and games",
    prompt: "3D prop model, [object], low poly, game asset, clean topology, UV mapped, ready for texturing",
    tags: ["3d", "prop", "asset", "game"],
    useCase: "Game assets, scene building, 3D printing, visualization",
    tips: [
      "Specify object: 'weapon', 'furniture', 'vehicle', 'decoration'",
      "Add style: 'realistic', 'stylized', 'low poly', 'high detail'",
      "Include materials: 'metal', 'wood', 'fabric', 'plastic'"
    ],
    example: "3D prop model, sci-fi weapon, low poly, game asset, clean topology, UV mapped, ready for texturing"
  },
  
  // Additional Text-to-Image Prompts
  {
    id: "book-cover",
    title: "Book Cover Design",
    category: "design-branding",
    tool: "midjourney",
    description: "Create compelling book cover designs",
    prompt: "book cover design, [genre], [mood], typography integration, professional layout, eye-catching composition, high quality",
    tags: ["book", "cover", "design", "publishing"],
    useCase: "Self-publishing, book marketing, cover concepts",
    tips: [
      "Specify genre: 'sci-fi', 'romance', 'thriller', 'fantasy'",
      "Add mood: 'mysterious', 'romantic', 'dramatic', 'peaceful'",
      "Include typography: 'title placement', 'author name', 'clean text area'"
    ],
    example: "book cover design, cyberpunk thriller, mysterious mood, typography integration, professional layout, eye-catching composition, high quality"
  },
  {
    id: "packaging-design",
    title: "Product Packaging",
    category: "design-branding",
    tool: "midjourney",
    description: "Design product packaging mockups",
    prompt: "product packaging design, [product type], modern design, clean layout, professional branding, 3D mockup, commercial quality",
    tags: ["packaging", "design", "product", "commercial"],
    useCase: "Product launches, rebranding, marketing materials",
    tips: [
      "Specify product: 'cosmetics', 'food', 'electronics', 'beverages'",
      "Add style: 'minimalist', 'luxury', 'eco-friendly', 'vibrant'",
      "Include elements: 'logo placement', 'product info', 'barcode area'"
    ],
    example: "product packaging design, premium skincare, modern design, clean layout, professional branding, 3D mockup, commercial quality"
  },
  {
    id: "character-sheet",
    title: "Character Design Sheet",
    category: "design-branding",
    tool: "midjourney",
    description: "Create character design reference sheets",
    prompt: "character design sheet, [character description], front view, side view, color palette, detailed reference, professional art",
    tags: ["character", "design", "reference", "art"],
    useCase: "Game development, animation, comics, concept art",
    tips: [
      "Specify character: 'hero', 'villain', 'creature', 'robot'",
      "Add views: 'front', 'side', 'back', '3/4 angle'",
      "Include details: 'expressions', 'outfits', 'accessories', 'color scheme'"
    ],
    example: "character design sheet, cyberpunk hacker, front view, side view, neon color palette, detailed reference, professional art"
  },
  
  // More Text-to-Video Prompts
  {
    id: "slow-motion",
    title: "Slow Motion Effect",
    category: "video-production",
    tool: "runway",
    description: "Create dramatic slow-motion sequences",
    prompt: "slow motion, [action], cinematic quality, smooth movement, dramatic effect, 4k, professional videography",
    tags: ["slow-motion", "cinematic", "dramatic", "video"],
    useCase: "Action sequences, product reveals, artistic videos",
    tips: [
      "Specify action: 'water splash', 'fabric movement', 'particle effects'",
      "Add speed: 'ultra slow', 'smooth slow', 'variable speed'",
      "Include mood: 'dramatic', 'elegant', 'powerful', 'graceful'"
    ],
    example: "slow motion, water droplets hitting surface, cinematic quality, smooth movement, dramatic effect, 4k, professional videography"
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    category: "video-production",
    tool: "runway",
    description: "Generate animated motion graphics",
    prompt: "motion graphics, [subject], animated elements, smooth transitions, modern design, professional animation, 4k",
    tags: ["motion", "graphics", "animation", "modern"],
    useCase: "Title sequences, social media content, presentations",
    tips: [
      "Specify subject: 'logo animation', 'text reveal', 'icon animation'",
      "Add style: 'minimalist', 'bold', 'elegant', 'energetic'",
      "Include effects: 'particles', 'gradients', 'shapes', 'typography'"
    ],
    example: "motion graphics, tech startup logo reveal, animated elements, smooth transitions, modern design, professional animation, 4k"
  },
  
  // More Text-to-Audio Prompts
  {
    id: "meditation-music",
    title: "Meditation Music",
    category: "audio-production",
    tool: "suno",
    description: "Create calming meditation and relaxation music",
    prompt: "meditation music, peaceful atmosphere, ambient pads, gentle sounds, no beats, relaxing, 5 minutes, instrumental",
    tags: ["meditation", "relaxation", "ambient", "calm"],
    useCase: "Meditation apps, wellness content, sleep aids, therapy",
    tips: [
      "Specify mood: 'peaceful', 'energizing', 'grounding', 'uplifting'",
      "Add elements: 'nature sounds', 'singing bowls', 'soft pads', 'breath sounds'",
      "Set duration: '5 minutes', '10 minutes', '30 minutes'"
    ],
    example: "meditation music, peaceful atmosphere, ambient pads, gentle sounds, no beats, relaxing, 5 minutes, instrumental"
  },
  {
    id: "corporate-music",
    title: "Corporate Background Music",
    category: "audio-production",
    tool: "suno",
    description: "Generate professional corporate background music",
    prompt: "corporate background music, professional, upbeat, modern, instrumental, no vocals, suitable for presentations, 2 minutes",
    tags: ["corporate", "background", "professional", "business"],
    useCase: "Corporate videos, presentations, training materials, waiting rooms",
    tips: [
      "Specify tone: 'upbeat', 'neutral', 'sophisticated', 'energetic'",
      "Add style: 'modern', 'classical', 'electronic', 'acoustic'",
      "Include mood: 'professional', 'friendly', 'confident', 'innovative'"
    ],
    example: "corporate background music, professional, upbeat, modern, instrumental, no vocals, suitable for presentations, 2 minutes"
  },
  
  // More Image-to-Image Prompts
  {
    id: "upscale-enhance",
    title: "Upscale & Enhance",
    category: "image-editing",
    tool: "midjourney",
    description: "Upscale and enhance image quality",
    prompt: "upscale image, enhance details, improve quality, sharpen, reduce noise, professional enhancement, 4k output",
    tags: ["upscale", "enhance", "quality", "professional"],
    useCase: "Photo restoration, archival work, print preparation",
    tips: [
      "Specify enhancement: 'details', 'colors', 'sharpness', 'contrast'",
      "Add preservation: 'maintain original style', 'natural look', 'no artifacts'",
      "Include output: '2x upscale', '4k', '8k', 'print quality'"
    ],
    example: "upscale image, enhance details, improve quality, sharpen, reduce noise, professional enhancement, 4k output"
  },
  {
    id: "artistic-filter",
    title: "Artistic Filter",
    category: "image-editing",
    tool: "midjourney",
    description: "Apply artistic filters and effects",
    prompt: "apply artistic filter, [style], maintain composition, enhance artistic quality, professional filter, high quality",
    tags: ["artistic", "filter", "style", "creative"],
    useCase: "Art projects, social media, creative portfolios",
    tips: [
      "Specify style: 'oil painting', 'watercolor', 'sketch', 'pop art'",
      "Add intensity: 'subtle', 'moderate', 'strong', 'dramatic'",
      "Include preservation: 'keep original colors', 'maintain details', 'natural look'"
    ],
    example: "apply artistic filter, watercolor style, maintain composition, enhance artistic quality, professional filter, high quality"
  },
  
  // More Text-to-3D Prompts
  {
    id: "vehicle-3d",
    title: "3D Vehicle Model",
    category: "3d-visualization",
    tool: "luma",
    description: "Create 3D vehicle models",
    prompt: "3D vehicle model, [vehicle type], realistic materials, detailed interior, optimized geometry, game-ready, PBR materials",
    tags: ["3d", "vehicle", "automotive", "model"],
    useCase: "Game development, automotive visualization, VR experiences",
    tips: [
      "Specify vehicle: 'car', 'motorcycle', 'truck', 'aircraft'",
      "Add details: 'interior', 'exterior', 'wheels', 'lights'",
      "Set quality: 'high detail', 'optimized', 'low poly', 'production ready'"
    ],
    example: "3D vehicle model, futuristic sports car, realistic materials, detailed interior, optimized geometry, game-ready, PBR materials"
  },
  {
    id: "architecture-3d",
    title: "3D Architecture Model",
    category: "3d-visualization",
    tool: "luma",
    description: "Generate 3D architectural models",
    prompt: "3D architectural model, [building type], detailed structure, realistic materials, optimized for rendering, professional quality",
    tags: ["3d", "architecture", "building", "visualization"],
    useCase: "Architectural visualization, real estate, urban planning",
    tips: [
      "Specify building: 'house', 'skyscraper', 'bridge', 'interior'",
      "Add details: 'windows', 'doors', 'materials', 'landscaping'",
      "Set style: 'modern', 'classical', 'futuristic', 'traditional'"
    ],
    example: "3D architectural model, modern minimalist house, detailed structure, realistic materials, optimized for rendering, professional quality"
  },
  
  // More General Prompts
  {
    id: "mood-board",
    title: "Mood Board Creation",
    category: "design-branding",
    tool: "midjourney",
    description: "Create visual mood boards for projects",
    prompt: "mood board, [theme], [style], cohesive color palette, visual references, professional layout, high quality",
    tags: ["mood", "board", "reference", "design"],
    useCase: "Project planning, client presentations, creative direction",
    tips: [
      "Specify theme: 'luxury', 'minimalist', 'vintage', 'futuristic'",
      "Add elements: 'textures', 'colors', 'materials', 'styles'",
      "Include mood: 'serene', 'energetic', 'sophisticated', 'playful'"
    ],
    example: "mood board, luxury hotel interior, cohesive color palette, visual references, professional layout, high quality"
  },
  {
    id: "pattern-design",
    title: "Pattern Design",
    category: "design-branding",
    tool: "midjourney",
    description: "Generate repeating patterns and textures",
    prompt: "seamless pattern, [pattern type], repeating design, tileable, professional quality, high resolution",
    tags: ["pattern", "texture", "seamless", "design"],
    useCase: "Textile design, wallpaper, digital backgrounds, packaging",
    tips: [
      "Specify type: 'geometric', 'floral', 'abstract', 'organic'",
      "Add style: 'minimalist', 'ornate', 'modern', 'traditional'",
      "Include colors: 'monochrome', 'vibrant', 'pastel', 'earth tones'"
    ],
    example: "seamless pattern, geometric abstract, repeating design, tileable, professional quality, high resolution"
  },
  
  // Nano Banana Pro Prompts - Text-to-Image
  {
    id: "nano-4k-photorealistic",
    title: "4K Photorealistic Image",
    category: "photography",
    tool: "nano-banana",
    description: "Generate ultra-high-resolution 4K photorealistic images with native quality",
    prompt: "[subject description], photorealistic, 4K resolution, ultra-high detail, natural lighting, professional photography quality, sharp focus, realistic textures",
    tags: ["4k", "photorealistic", "high-resolution", "professional"],
    useCase: "Professional photography, product visualization, marketing materials, print media",
    tips: [
      "Specify subject in detail: 'portrait of a person', 'product on white background', 'landscape scene'",
      "Add lighting: 'natural daylight', 'studio lighting', 'golden hour', 'soft shadows'",
      "Include quality terms: '4K', 'ultra-high detail', 'sharp focus', 'realistic textures'",
      "Use for production-ready assets requiring maximum quality"
    ],
    example: "portrait of a professional woman in business attire, photorealistic, 4K resolution, ultra-high detail, natural lighting, professional photography quality, sharp focus, realistic textures"
  },
  {
    id: "nano-character-consistency",
    title: "Character Consistency",
    category: "photography",
    tool: "nano-banana",
    description: "Maintain character consistency across multiple generations using reference images",
    prompt: "[character description], consistent character appearance, maintain facial features, same style, photorealistic, 4K quality, use reference images",
    tags: ["character", "consistency", "reference", "photorealistic"],
    useCase: "Character design, storyboarding, brand mascots, consistent visual identity",
    tips: [
      "Provide multiple reference images of the character",
      "Specify consistent elements: 'same facial features', 'same clothing style', 'same color palette'",
      "Use for maintaining character across different poses and scenes",
      "Leverage multi-reference support for best results"
    ],
    example: "cyberpunk hacker character, consistent character appearance, maintain facial features, same style, photorealistic, 4K quality, use reference images"
  },
  {
    id: "nano-product-visualization",
    title: "Product Visualization",
    category: "photography",
    tool: "nano-banana",
    description: "Create high-quality product visualizations for e-commerce and marketing",
    prompt: "product visualization, [product description], professional photography, clean background, studio lighting, 4K quality, commercial photography, sharp details",
    tags: ["product", "ecommerce", "commercial", "4k"],
    useCase: "E-commerce product images, catalog photography, marketing campaigns",
    tips: [
      "Specify product details: 'smartphone', 'watch', 'cosmetics', 'furniture'",
      "Add context: 'on white background', 'lifestyle setting', 'isolated product'",
      "Include quality: '4K', 'sharp details', 'professional photography'",
      "Use for production-ready product images"
    ],
    example: "luxury watch product visualization, professional photography, clean background, studio lighting, 4K quality, commercial photography, sharp details"
  },
  
  // Nano Banana Pro Prompts - Image-to-Image
  {
    id: "nano-semantic-editing",
    title: "Semantic Editing",
    category: "image-editing",
    tool: "nano-banana",
    description: "Edit images using natural language instructions for semantic modifications",
    prompt: "edit image: [natural language instruction], maintain original composition, preserve details, semantic modification, 4K quality, photorealistic",
    tags: ["editing", "semantic", "natural-language", "photorealistic"],
    useCase: "Photo editing, content modification, style changes, object replacement",
    tips: [
      "Use natural language: 'change the background to a beach', 'make the person smile', 'replace the car with a bicycle'",
      "Be specific about what to preserve: 'keep the person unchanged', 'maintain lighting'",
      "Specify quality: '4K', 'photorealistic', 'preserve details'",
      "Use for precise semantic modifications without manual editing"
    ],
    example: "edit image: change the background to a modern office setting, maintain original composition, preserve details, semantic modification, 4K quality, photorealistic"
  },
  {
    id: "nano-style-transfer",
    title: "Style Transfer with Reference",
    category: "image-editing",
    tool: "nano-banana",
    description: "Transfer artistic style from reference images while maintaining subject",
    prompt: "apply style from reference image, maintain subject composition, transfer artistic style, photorealistic quality, 4K resolution, preserve details",
    tags: ["style", "transfer", "reference", "artistic"],
    useCase: "Artistic transformations, brand consistency, visual identity, creative projects",
    tips: [
      "Provide reference image with desired style",
      "Specify what to maintain: 'keep subject unchanged', 'preserve composition'",
      "Add quality terms: '4K', 'photorealistic', 'preserve details'",
      "Use multi-reference for complex style combinations"
    ],
    example: "apply style from reference image, maintain subject composition, transfer artistic style, photorealistic quality, 4K resolution, preserve details"
  },
  {
    id: "nano-quality-enhancement",
    title: "Quality Enhancement",
    category: "image-editing",
    tool: "nano-banana",
    description: "Enhance image quality while preserving original content and style",
    prompt: "enhance image quality, improve resolution to 4K, sharpen details, reduce noise, maintain original style, photorealistic enhancement, preserve composition",
    tags: ["enhancement", "quality", "upscale", "4k"],
    useCase: "Photo restoration, quality improvement, resolution enhancement, archival work",
    tips: [
      "Specify enhancement type: 'improve resolution', 'sharpen details', 'reduce noise'",
      "Maintain original: 'keep original style', 'preserve composition', 'maintain colors'",
      "Add quality: '4K', 'photorealistic', 'professional enhancement'",
      "Use for upgrading lower-resolution images to production quality"
    ],
    example: "enhance image quality, improve resolution to 4K, sharpen details, reduce noise, maintain original style, photorealistic enhancement, preserve composition"
  },
  
  // Image-to-Video Prompts (missing category)
  {
    id: "image-to-video-animation",
    title: "Image Animation",
    category: "video-production",
    tool: "runway",
    description: "Animate static images into dynamic video sequences",
    prompt: "animate image, [motion description], smooth movement, cinematic quality, natural motion, 4k, professional animation",
    tags: ["animation", "motion", "cinematic", "video"],
    useCase: "Social media content, presentations, marketing videos, creative projects",
    tips: [
      "Specify motion: 'slow pan', 'zoom in', 'particle effects', 'camera movement'",
      "Add style: 'smooth', 'dramatic', 'subtle', 'energetic'",
      "Include quality: '4k', 'cinematic', 'professional'",
      "Describe desired motion direction and speed"
    ],
    example: "animate image, slow zoom in with subtle camera movement, smooth movement, cinematic quality, natural motion, 4k, professional animation"
  },
  {
    id: "image-to-video-transformation",
    title: "Image to Video Transformation",
    category: "video-production",
    tool: "runway",
    description: "Transform static images into video with dynamic elements",
    prompt: "transform image to video, [transformation type], dynamic elements, smooth transitions, cinematic quality, 4k, professional videography",
    tags: ["transformation", "dynamic", "video", "cinematic"],
    useCase: "Video intros, transitions, dynamic presentations, social media",
    tips: [
      "Specify transformation: 'add motion', 'create transition', 'animate elements'",
      "Add elements: 'particles', 'light effects', 'movement', 'transitions'",
      "Include quality: '4k', 'cinematic', 'smooth'",
      "Describe desired video effect and duration"
    ],
    example: "transform image to video, add subtle motion and light effects, dynamic elements, smooth transitions, cinematic quality, 4k, professional videography"
  },
  
  // Unique Problem-Solving Prompts - Text-to-Image
  {
    id: "batch-consistency",
    title: "Batch Generation Consistency",
    category: "photography",
    tool: "nano-banana",
    description: "Generate multiple variations with consistent style and quality for batch production",
    prompt: "[base description], consistent style across all variations, maintain color palette, uniform lighting, batch production quality, [variation parameter], 4K resolution",
    tags: ["batch", "consistency", "production", "workflow"],
    useCase: "E-commerce catalogs, marketing campaigns, product line visualization, brand asset generation",
    tips: [
      "Define base style parameters first: 'color palette', 'lighting style', 'composition rules'",
      "Use reference images for style consistency",
      "Specify variation parameters: 'different products', 'various poses', 'multiple angles'",
      "Maintain quality standards across entire batch"
    ],
    example: "product photography series, consistent style across all variations, maintain white background, uniform studio lighting, batch production quality, different product colors, 4K resolution"
  },
  {
    id: "accessibility-mockups",
    title: "Accessibility-First Design Mockups",
    category: "photography",
    tool: "midjourney",
    description: "Create design mockups prioritizing accessibility standards and inclusive user experience",
    prompt: "accessible design mockup, [interface type], WCAG AA compliant, high contrast ratios, clear typography, inclusive representation, colorblind-friendly palette, readable text sizes",
    tags: ["accessibility", "inclusive", "design", "ux"],
    useCase: "Accessible web design, inclusive product interfaces, compliance documentation, user testing materials",
    tips: [
      "Specify contrast: '4.5:1 minimum', 'high contrast mode', 'sufficient color contrast'",
      "Include accessibility features: 'screen reader friendly', 'keyboard navigation', 'focus indicators'",
      "Add inclusive elements: 'diverse users', 'various abilities', 'multiple languages'",
      "Test color combinations for colorblind accessibility"
    ],
    example: "accessible mobile app mockup, WCAG AA compliant, high contrast ratios, clear typography, inclusive representation, colorblind-friendly palette, readable text sizes"
  },
  {
    id: "localization-visuals",
    title: "Localization-Ready Visuals",
    category: "photography",
    tool: "midjourney",
    description: "Generate visuals designed for easy localization across different markets and cultures",
    prompt: "localization-ready design, [content type], neutral cultural elements, text-free areas, adaptable color scheme, universal symbols, easy translation overlay",
    tags: ["localization", "international", "design", "multicultural"],
    useCase: "Global marketing campaigns, international product launches, multi-language interfaces, cross-cultural content",
    tips: [
      "Avoid culture-specific symbols or references",
      "Leave space for text overlays in different languages",
      "Use universal color meanings and symbols",
      "Design for right-to-left language support"
    ],
    example: "localization-ready social media graphic, neutral cultural elements, text-free areas, adaptable color scheme, universal symbols, easy translation overlay"
  },
  {
    id: "a-b-testing-variants",
    title: "A/B Testing Visual Variants",
    category: "photography",
    tool: "midjourney",
    description: "Create controlled visual variants for A/B testing campaigns",
    prompt: "A/B test variant, [base design], [variant parameter], maintain core elements, controlled variable, professional quality, testing-ready",
    tags: ["testing", "optimization", "marketing", "analytics"],
    useCase: "Marketing campaign optimization, conversion rate testing, user experience research, performance analysis",
    tips: [
      "Identify single variable to test: 'headline style', 'color scheme', 'layout', 'imagery'",
      "Maintain all other elements constant",
      "Create multiple variants for statistical significance",
      "Ensure variants are production-ready quality"
    ],
    example: "A/B test variant, email header design, blue vs green CTA button, maintain core elements, controlled variable, professional quality, testing-ready"
  },
  
  // Unique Problem-Solving Prompts - Text-to-Video
  {
    id: "micro-interactions",
    title: "Micro-Interaction Demonstrations",
    category: "video-production",
    tool: "runway",
    description: "Create short video demonstrations of UI micro-interactions and animations",
    prompt: "micro-interaction demo, [interaction type], smooth animation, clear visual feedback, professional UI animation, 2-3 seconds, loop-ready",
    tags: ["ui", "animation", "interaction", "ux"],
    useCase: "UI/UX documentation, design system guidelines, developer handoffs, user onboarding",
    tips: [
      "Specify interaction: 'button hover', 'form validation', 'loading state', 'transition'",
      "Keep duration short: '2-3 seconds', 'loop-ready'",
      "Emphasize smoothness: 'easing', 'natural motion', 'fluid animation'",
      "Focus on visual feedback clarity"
    ],
    example: "micro-interaction demo, button click with ripple effect, smooth animation, clear visual feedback, professional UI animation, 2-3 seconds, loop-ready"
  },
  {
    id: "error-state-visualization",
    title: "Error State Visualization",
    category: "video-production",
    tool: "runway",
    description: "Visualize error states and recovery flows for user experience documentation",
    prompt: "error state visualization, [error type], user-friendly messaging, recovery path, clear visual hierarchy, helpful guidance, professional UX video",
    tags: ["error", "ux", "documentation", "user-experience"],
    useCase: "UX documentation, error handling guides, user support materials, design system documentation",
    tips: [
      "Specify error type: 'network error', 'validation error', 'permission denied', 'not found'",
      "Show recovery path: 'retry option', 'alternative action', 'help link'",
      "Maintain friendly tone: 'helpful', 'non-technical', 'actionable'",
      "Include visual hierarchy for clarity"
    ],
    example: "error state visualization, network connection error, user-friendly messaging, retry button visible, clear visual hierarchy, helpful guidance, professional UX video"
  },
  {
    id: "workflow-documentation",
    title: "Workflow Documentation Video",
    category: "video-production",
    tool: "runway",
    description: "Create visual documentation of complex workflows and processes",
    prompt: "workflow documentation, [process type], step-by-step visualization, clear progression, professional tutorial style, educational quality",
    tags: ["documentation", "workflow", "tutorial", "process"],
    useCase: "Internal training, customer onboarding, process documentation, knowledge base content",
    tips: [
      "Break down into clear steps: 'step 1', 'step 2', 'sequential flow'",
      "Use visual indicators: 'arrows', 'highlights', 'callouts'",
      "Maintain consistent style throughout",
      "Focus on clarity over complexity"
    ],
    example: "workflow documentation, customer onboarding process, step-by-step visualization, clear progression, professional tutorial style, educational quality"
  },
  
  // Unique Problem-Solving Prompts - Text-to-Audio
  {
    id: "focus-soundscapes",
    title: "Cognitive Load Reduction Soundscapes",
    category: "audio-production",
    tool: "suno",
    description: "Generate audio environments designed to reduce cognitive load and improve focus",
    prompt: "focus enhancement soundscape, [environment type], binaural frequencies, minimal distraction, cognitive load reduction, 30 minutes, productivity optimized",
    tags: ["focus", "productivity", "cognitive", "wellness"],
    useCase: "Deep work sessions, study environments, concentration aids, productivity tools",
    tips: [
      "Specify environment: 'coffee shop ambience', 'rain sounds', 'white noise', 'nature sounds'",
      "Include binaural beats for focus: 'alpha waves', 'beta waves', 'theta waves'",
      "Minimize distracting elements: 'no sudden changes', 'consistent volume', 'smooth transitions'",
      "Optimize duration for work sessions"
    ],
    example: "focus enhancement soundscape, library ambience with distant page turns, binaural frequencies, minimal distraction, cognitive load reduction, 30 minutes, productivity optimized"
  },
  {
    id: "accessibility-audio",
    title: "Accessibility Audio Descriptions",
    category: "audio-production",
    tool: "elevenlabs",
    description: "Generate audio descriptions for visual content to improve accessibility",
    prompt: "audio description, [visual content], clear narration, descriptive language, accessibility-focused, natural pacing, inclusive content",
    tags: ["accessibility", "audio-description", "inclusive", "narration"],
    useCase: "Video accessibility, screen reader content, inclusive media, compliance requirements",
    tips: [
      "Describe visual elements: 'colors', 'composition', 'actions', 'expressions'",
      "Use clear, descriptive language",
      "Maintain natural pacing: 'not rushed', 'clear enunciation'",
      "Include context and spatial information"
    ],
    example: "audio description, product demonstration video, clear narration, descriptive language, accessibility-focused, natural pacing, inclusive content"
  },
  {
    id: "brand-sonic-identity",
    title: "Brand Sonic Identity",
    category: "audio-production",
    tool: "suno",
    description: "Create consistent sonic branding elements for brand recognition",
    prompt: "brand sonic identity, [brand personality], consistent audio signature, memorable sound design, brand recognition, professional audio branding",
    tags: ["branding", "sonic", "identity", "marketing"],
    useCase: "Brand identity systems, marketing campaigns, audio logos, brand recognition",
    tips: [
      "Define brand personality: 'sophisticated', 'energetic', 'trustworthy', 'innovative'",
      "Create signature elements: 'distinctive melody', 'unique sound', 'recognizable pattern'",
      "Maintain consistency across variations",
      "Design for multiple use cases: 'short form', 'long form', 'background'"
    ],
    example: "brand sonic identity, tech startup with innovative personality, consistent audio signature, memorable sound design, brand recognition, professional audio branding"
  },
  
  // Unique Problem-Solving Prompts - Image-to-Image
  {
    id: "privacy-protection",
    title: "Privacy-Preserving Image Transformation",
    category: "image-editing",
    tool: "nano-banana",
    description: "Transform images to protect privacy while maintaining visual context",
    prompt: "privacy-preserving transformation, anonymize faces, maintain scene context, preserve composition, natural appearance, privacy-compliant",
    tags: ["privacy", "anonymization", "compliance", "security"],
    useCase: "Public documentation, case studies, testimonials, compliance requirements",
    tips: [
      "Specify privacy needs: 'blur faces', 'remove identifiers', 'anonymize subjects'",
      "Maintain visual context: 'keep scene intact', 'preserve composition'",
      "Ensure natural appearance: 'no artifacts', 'seamless transformation'",
      "Comply with privacy regulations"
    ],
    example: "privacy-preserving transformation, anonymize faces in office photo, maintain scene context, preserve composition, natural appearance, privacy-compliant"
  },
  {
    id: "style-guide-enforcement",
    title: "Style Guide Enforcement",
    category: "image-editing",
    tool: "nano-banana",
    description: "Transform images to match strict brand style guidelines automatically",
    prompt: "enforce style guide, [brand guidelines], consistent color palette, typography rules, composition standards, brand-compliant transformation",
    tags: ["brand", "style-guide", "consistency", "compliance"],
    useCase: "Brand asset management, marketing material standardization, style guide compliance, brand consistency",
    tips: [
      "Define brand guidelines: 'color palette', 'typography', 'composition rules'",
      "Specify transformation scope: 'colors only', 'full style', 'selective elements'",
      "Maintain image quality during transformation",
      "Ensure all outputs meet brand standards"
    ],
    example: "enforce style guide, corporate brand guidelines, consistent blue and white palette, typography rules, composition standards, brand-compliant transformation"
  },
  {
    id: "format-optimization",
    title: "Multi-Format Optimization",
    category: "image-editing",
    tool: "midjourney",
    description: "Optimize images for multiple formats and platforms simultaneously",
    prompt: "multi-format optimization, [source image], adapt for [formats], maintain quality, platform-specific optimization, responsive design ready",
    tags: ["optimization", "multi-format", "responsive", "platform"],
    useCase: "Cross-platform marketing, responsive web design, social media campaigns, multi-channel distribution",
    tips: [
      "Specify target formats: 'social media', 'web', 'print', 'mobile'",
      "Maintain quality across formats: 'high resolution', 'appropriate compression'",
      "Adapt aspect ratios: 'square', 'landscape', 'portrait', 'story format'",
      "Optimize for each platform's requirements"
    ],
    example: "multi-format optimization, product photo, adapt for Instagram, Twitter, and website, maintain quality, platform-specific optimization, responsive design ready"
  },
  
  // Unique Problem-Solving Prompts - Text-to-3D
  {
    id: "ar-ready-models",
    title: "AR-Ready 3D Models",
    category: "3d-visualization",
    tool: "luma",
    description: "Generate 3D models optimized for augmented reality applications",
    prompt: "AR-ready 3D model, [object description], low polygon count, optimized textures, real-world scale, mobile performance, AR-compatible format",
    tags: ["ar", "augmented-reality", "mobile", "optimization"],
    useCase: "AR applications, mobile AR experiences, product visualization, interactive marketing",
    tips: [
      "Optimize for mobile: 'low poly', 'compressed textures', 'efficient geometry'",
      "Set real-world scale: 'accurate dimensions', 'proper proportions'",
      "Ensure AR compatibility: 'GLB format', 'PBR materials', 'lighting ready'",
      "Test performance on target devices"
    ],
    example: "AR-ready 3D model, furniture piece, low polygon count, optimized textures, real-world scale, mobile performance, AR-compatible format"
  },
  {
    id: "prototype-iteration",
    title: "Rapid Prototype Iteration",
    category: "3d-visualization",
    tool: "luma",
    description: "Quickly generate 3D prototypes for design iteration and testing",
    prompt: "rapid prototype, [product concept], simplified geometry, iteration-ready, fast generation, design testing, prototype quality",
    tags: ["prototype", "iteration", "design", "testing"],
    useCase: "Product design iteration, concept validation, rapid prototyping, design testing",
    tips: [
      "Focus on form over detail: 'simplified geometry', 'basic shapes', 'concept visualization'",
      "Prioritize speed: 'fast generation', 'quick iteration'",
      "Enable easy modifications: 'parametric design', 'modular elements'",
      "Use for early-stage design exploration"
    ],
    example: "rapid prototype, ergonomic chair concept, simplified geometry, iteration-ready, fast generation, design testing, prototype quality"
  },
  
  // Unique Problem-Solving Prompts - General
  {
    id: "cross-modal-consistency",
    title: "Cross-Modal Brand Consistency",
    category: "design-branding",
    tool: "midjourney",
    description: "Maintain visual consistency across different content types and formats",
    prompt: "cross-modal consistency, [content types], unified visual language, consistent brand elements, multi-format coherence, brand identity",
    tags: ["consistency", "brand", "cross-modal", "identity"],
    useCase: "Omnichannel marketing, brand identity management, multi-platform campaigns, unified brand experience",
    tips: [
      "Define core brand elements: 'colors', 'typography', 'imagery style', 'composition'",
      "Apply across formats: 'images', 'videos', 'graphics', 'animations'",
      "Maintain recognition: 'consistent visual language', 'unified aesthetic'",
      "Test across all touchpoints"
    ],
    example: "cross-modal consistency, social media posts and video thumbnails, unified visual language, consistent brand colors and typography, multi-format coherence, brand identity"
  },
  {
    id: "data-visualization-design",
    title: "Data Visualization Design",
    category: "photography",
    tool: "midjourney",
    description: "Create compelling visual designs for data presentation and infographics",
    prompt: "data visualization design, [data type], clear hierarchy, readable charts, professional infographic style, information design, accessible visualization",
    tags: ["data", "visualization", "infographic", "analytics"],
    useCase: "Reports, presentations, dashboards, educational content, analytics communication",
    tips: [
      "Specify data type: 'financial', 'scientific', 'marketing', 'demographic'",
      "Emphasize clarity: 'clear hierarchy', 'readable', 'accessible'",
      "Include design elements: 'charts', 'graphs', 'icons', 'typography'",
      "Ensure information accuracy and readability"
    ],
    example: "data visualization design, quarterly sales performance, clear hierarchy, readable charts, professional infographic style, information design, accessible visualization"
  },
  {
    id: "emotional-design-mapping",
    title: "Emotional Design Mapping",
    category: "photography",
    tool: "midjourney",
    description: "Create visual designs that map to specific emotional responses and user feelings",
    prompt: "emotional design, [target emotion], [user context], visual psychology, emotional resonance, user experience design, feeling-driven aesthetics",
    tags: ["emotion", "psychology", "ux", "design"],
    useCase: "User experience design, emotional branding, therapeutic applications, mood-based interfaces",
    tips: [
      "Define target emotion: 'calm', 'energetic', 'trustworthy', 'inspiring'",
      "Consider user context: 'stressful situation', 'celebration', 'learning', 'relaxation'",
      "Apply color psychology: 'warm colors for energy', 'cool colors for calm'",
      "Test emotional response with target users"
    ],
    example: "emotional design, calming interface for stress management app, user in high-stress context, visual psychology, emotional resonance, user experience design, feeling-driven aesthetics"
  },
  
  // Advanced Image Editing Prompts - Nano Banana (Quality-Focused)
  {
    id: "nano-detail-preservation",
    title: "Detail Preservation Editing",
    category: "image-editing",
    tool: "nano-banana",
    description: "Edit images while preserving fine details and textures at 4K resolution",
    prompt: "edit image: [editing instruction], preserve all fine details, maintain texture quality, 4K native resolution, zero detail loss, professional quality preservation",
    tags: ["detail", "preservation", "quality", "4k"],
    useCase: "Professional photo editing, product photography refinement, high-resolution asset modification",
    tips: [
      "Specify detail preservation: 'maintain texture', 'preserve fine details', 'keep sharpness'",
      "Use 4K native resolution for maximum quality",
      "Be specific about what to preserve: 'skin texture', 'fabric details', 'product features'",
      "Avoid over-processing that degrades quality"
    ],
    example: "edit image: adjust lighting to golden hour, preserve all fine details, maintain texture quality, 4K native resolution, zero detail loss, professional quality preservation"
  },
  {
    id: "nano-multi-reference-consistency",
    title: "Multi-Reference Character Consistency",
    category: "image-editing",
    tool: "nano-banana",
    description: "Maintain character consistency across multiple images using multiple reference images",
    prompt: "maintain character consistency, use multiple reference images, preserve facial features, consistent style, uniform quality, 4K resolution, character continuity",
    tags: ["consistency", "multi-reference", "character", "quality"],
    useCase: "Character design series, storyboarding, brand mascot consistency, visual storytelling",
    tips: [
      "Provide 3-5 reference images of the character",
      "Specify consistency elements: 'facial features', 'clothing style', 'color palette'",
      "Maintain uniform quality across all outputs",
      "Use for series or sequences requiring character continuity"
    ],
    example: "maintain character consistency, use multiple reference images, preserve facial features, consistent cyberpunk style, uniform quality, 4K resolution, character continuity"
  },
  {
    id: "nano-semantic-object-replacement",
    title: "Semantic Object Replacement",
    category: "image-editing",
    tool: "nano-banana",
    description: "Replace objects in images using natural language while maintaining scene coherence",
    prompt: "replace [object] with [new object], maintain scene coherence, preserve lighting, natural integration, seamless replacement, 4K quality, photorealistic",
    tags: ["replacement", "semantic", "editing", "photorealistic"],
    useCase: "Product photography variations, scene modifications, content updates, visual corrections",
    tips: [
      "Be specific about objects: 'red car' → 'blue bicycle', 'wooden table' → 'glass desk'",
      "Maintain scene coherence: 'same lighting', 'consistent shadows', 'natural perspective'",
      "Ensure seamless integration: 'no artifacts', 'natural appearance', 'realistic placement'",
      "Use for professional product photography variations"
    ],
    example: "replace wooden dining chair with modern leather chair, maintain scene coherence, preserve natural lighting, natural integration, seamless replacement, 4K quality, photorealistic"
  },
  {
    id: "nano-background-reconstruction",
    title: "Intelligent Background Reconstruction",
    category: "image-editing",
    tool: "nano-banana",
    description: "Reconstruct or modify backgrounds while intelligently preserving foreground elements",
    prompt: "reconstruct background: [background description], preserve foreground perfectly, intelligent edge detection, natural blending, depth-aware processing, 4K quality",
    tags: ["background", "reconstruction", "intelligent", "quality"],
    useCase: "Product photography, portrait editing, scene enhancement, background replacement",
    tips: [
      "Describe desired background: 'modern office', 'outdoor garden', 'studio white'",
      "Emphasize foreground preservation: 'perfect edges', 'no artifacts', 'natural separation'",
      "Use depth-aware processing for realistic results",
      "Maintain lighting consistency between foreground and background"
    ],
    example: "reconstruct background: modern minimalist office space, preserve subject perfectly, intelligent edge detection, natural blending, depth-aware processing, 4K quality"
  },
  {
    id: "nano-color-grading-pro",
    title: "Professional Color Grading",
    category: "image-editing",
    tool: "nano-banana",
    description: "Apply professional cinematic color grading while preserving image quality",
    prompt: "apply professional color grading: [color style], maintain image quality, preserve details, cinematic look, color science accuracy, 4K native, professional grade",
    tags: ["color-grading", "cinematic", "professional", "quality"],
    useCase: "Film look, brand consistency, editorial photography, cinematic aesthetics",
    tips: [
      "Specify color style: 'warm cinematic', 'cool teal and orange', 'vintage film', 'modern desaturated'",
      "Maintain quality: 'preserve details', 'no banding', 'smooth gradients'",
      "Use color science accuracy for professional results",
      "Test on different skin tones and materials"
    ],
    example: "apply professional color grading: warm cinematic teal and orange, maintain image quality, preserve details, cinematic look, color science accuracy, 4K native, professional grade"
  },
  {
    id: "nano-texture-enhancement",
    title: "Texture Enhancement",
    category: "image-editing",
    tool: "nano-banana",
    description: "Enhance and refine textures while maintaining natural appearance",
    prompt: "enhance textures: [texture type], natural appearance, realistic detail, no over-processing, professional texture quality, 4K resolution, photorealistic",
    tags: ["texture", "enhancement", "quality", "photorealistic"],
    useCase: "Product photography, material visualization, detail enhancement, quality improvement",
    tips: [
      "Specify texture type: 'fabric', 'metal', 'wood grain', 'skin', 'leather'",
      "Maintain natural appearance: 'realistic', 'not artificial', 'authentic look'",
      "Avoid over-processing: 'subtle enhancement', 'natural detail'",
      "Preserve material characteristics"
    ],
    example: "enhance textures: luxury leather handbag, natural appearance, realistic detail, no over-processing, professional texture quality, 4K resolution, photorealistic"
  },
  {
    id: "nano-composition-refinement",
    title: "Composition Refinement",
    category: "image-editing",
    tool: "nano-banana",
    description: "Refine image composition using natural language instructions",
    prompt: "refine composition: [composition change], maintain quality, preserve details, professional framing, rule of thirds, balanced composition, 4K quality",
    tags: ["composition", "refinement", "framing", "quality"],
    useCase: "Photo refinement, composition improvement, professional photography, editorial work",
    tips: [
      "Specify composition changes: 'crop to rule of thirds', 'adjust framing', 'rebalance elements'",
      "Maintain quality during transformation",
      "Preserve important details",
      "Apply professional composition principles"
    ],
    example: "refine composition: crop to rule of thirds with subject on intersection, maintain quality, preserve details, professional framing, rule of thirds, balanced composition, 4K quality"
  },
  {
    id: "nano-lighting-correction",
    title: "Professional Lighting Correction",
    category: "image-editing",
    tool: "nano-banana",
    description: "Correct and enhance lighting while maintaining natural appearance",
    prompt: "correct lighting: [lighting adjustment], natural appearance, preserve shadows, realistic lighting, professional quality, 4K resolution, photorealistic",
    tags: ["lighting", "correction", "professional", "quality"],
    useCase: "Photo correction, lighting enhancement, professional photography, post-production",
    tips: [
      "Specify lighting adjustment: 'soften harsh shadows', 'add fill light', 'warm up tones', 'even out exposure'",
      "Maintain natural appearance: 'realistic', 'not artificial', 'natural shadows'",
      "Preserve shadow detail and highlight information",
      "Use for professional photo correction"
    ],
    example: "correct lighting: soften harsh shadows and add subtle fill light, natural appearance, preserve shadow detail, realistic lighting, professional quality, 4K resolution, photorealistic"
  },
  {
    id: "nano-style-unification",
    title: "Style Unification Across Series",
    category: "image-editing",
    tool: "nano-banana",
    description: "Unify visual style across multiple images in a series using reference",
    prompt: "unify style across series: use reference style, consistent color palette, uniform lighting, cohesive aesthetic, series continuity, 4K quality, professional consistency",
    tags: ["style", "unification", "series", "consistency"],
    useCase: "Photo series, campaign consistency, brand asset creation, visual storytelling",
    tips: [
      "Provide reference image with desired style",
      "Specify consistency elements: 'color palette', 'lighting style', 'mood'",
      "Maintain uniform quality across all images",
      "Ensure cohesive aesthetic throughout series"
    ],
    example: "unify style across series: use reference minimalist style, consistent cool color palette, uniform soft lighting, cohesive aesthetic, series continuity, 4K quality, professional consistency"
  },
  {
    id: "nano-artifact-removal",
    title: "Advanced Artifact Removal",
    category: "image-editing",
    tool: "nano-banana",
    description: "Remove compression artifacts and quality issues while enhancing image",
    prompt: "remove artifacts: compression artifacts, noise reduction, quality enhancement, preserve details, clean image, professional restoration, 4K upscale",
    tags: ["artifacts", "restoration", "quality", "enhancement"],
    useCase: "Image restoration, quality improvement, archival work, professional enhancement",
    tips: [
      "Specify artifact types: 'compression artifacts', 'noise', 'banding', 'blocking'",
      "Preserve important details during removal",
      "Enhance overall quality",
      "Use for professional image restoration"
    ],
    example: "remove artifacts: JPEG compression artifacts and digital noise, noise reduction, quality enhancement, preserve fine details, clean image, professional restoration, 4K upscale"
  },
  {
    id: "nano-perspective-correction",
    title: "Perspective Correction",
    category: "image-editing",
    tool: "nano-banana",
    description: "Correct perspective distortion while maintaining image quality",
    prompt: "correct perspective: [correction type], maintain quality, preserve details, natural appearance, professional correction, 4K resolution, architectural accuracy",
    tags: ["perspective", "correction", "architectural", "quality"],
    useCase: "Architectural photography, product photography, real estate, technical documentation",
    tips: [
      "Specify correction: 'vertical lines', 'horizontal alignment', 'distortion correction'",
      "Maintain quality during transformation",
      "Preserve architectural accuracy",
      "Use for professional architectural photography"
    ],
    example: "correct perspective: straighten vertical lines and correct barrel distortion, maintain quality, preserve details, natural appearance, professional correction, 4K resolution, architectural accuracy"
  },
  {
    id: "nano-selective-enhancement",
    title: "Selective Area Enhancement",
    category: "image-editing",
    tool: "nano-banana",
    description: "Enhance specific areas of an image while preserving the rest",
    prompt: "selective enhancement: enhance [area], preserve rest of image, natural blending, seamless integration, targeted improvement, 4K quality, professional editing",
    tags: ["selective", "enhancement", "targeted", "quality"],
    useCase: "Portrait enhancement, product focus, selective sharpening, professional editing",
    tips: [
      "Specify target area: 'subject face', 'product details', 'foreground elements'",
      "Preserve rest of image: 'maintain background', 'keep other areas unchanged'",
      "Ensure natural blending at boundaries",
      "Use for professional selective editing"
    ],
    example: "selective enhancement: enhance subject's eyes and skin texture, preserve rest of portrait, natural blending, seamless integration, targeted improvement, 4K quality, professional editing"
  },
  {
    id: "nano-temporal-consistency",
    title: "Temporal Consistency in Sequences",
    category: "image-editing",
    tool: "nano-banana",
    description: "Maintain consistency across image sequences for video or animation",
    prompt: "temporal consistency: maintain across sequence, consistent lighting, uniform style, smooth transitions, sequence continuity, 4K quality, frame coherence",
    tags: ["temporal", "consistency", "sequence", "video"],
    useCase: "Video frame enhancement, animation sequences, time-lapse consistency, motion graphics",
    tips: [
      "Specify consistency requirements: 'lighting', 'color', 'style', 'details'",
      "Maintain smooth transitions between frames",
      "Ensure frame-to-frame coherence",
      "Use for video production workflows"
    ],
    example: "temporal consistency: maintain lighting and color across video sequence, consistent lighting, uniform cinematic style, smooth transitions, sequence continuity, 4K quality, frame coherence"
  },
  {
    id: "nano-material-accurate",
    title: "Material-Accurate Rendering",
    category: "image-editing",
    tool: "nano-banana",
    description: "Modify materials while maintaining accurate physical properties",
    prompt: "modify material: [material change], maintain physical accuracy, realistic properties, material authenticity, professional rendering, 4K quality, photorealistic",
    tags: ["material", "rendering", "accuracy", "photorealistic"],
    useCase: "Product visualization, material studies, architectural rendering, design iteration",
    tips: [
      "Specify material change: 'wood to metal', 'matte to glossy', 'fabric to leather'",
      "Maintain physical accuracy: 'realistic reflections', 'proper shadows', 'material properties'",
      "Ensure material authenticity",
      "Use for professional product visualization"
    ],
    example: "modify material: change wood texture to brushed aluminum, maintain physical accuracy, realistic metal reflections, material authenticity, professional rendering, 4K quality, photorealistic"
  },
  {
    id: "nano-batch-quality-control",
    title: "Batch Quality Control",
    category: "image-editing",
    tool: "nano-banana",
    description: "Apply consistent quality standards across batch of images",
    prompt: "batch quality control: uniform quality standards, consistent color grading, standardized lighting, quality assurance, professional batch processing, 4K resolution",
    tags: ["batch", "quality-control", "consistency", "professional"],
    useCase: "E-commerce catalogs, product photography batches, campaign assets, quality standardization",
    tips: [
      "Define quality standards: 'color accuracy', 'exposure', 'sharpness', 'noise levels'",
      "Apply consistently across all images",
      "Maintain uniform quality",
      "Use for professional batch processing"
    ],
    example: "batch quality control: uniform professional quality standards, consistent warm color grading, standardized studio lighting, quality assurance, professional batch processing, 4K resolution"
  },
  {
    id: "nano-print-optimization",
    title: "Print-Ready Optimization",
    category: "image-editing",
    tool: "nano-banana",
    description: "Optimize images for high-quality print production",
    prompt: "print optimization: CMYK color space, high resolution, sharp details, print-ready quality, color accuracy, professional printing standards, 4K source",
    tags: ["print", "optimization", "CMYK", "professional"],
    useCase: "Print production, magazine quality, large format printing, professional printing",
    tips: [
      "Specify print requirements: 'CMYK color space', 'resolution', 'color profile'",
      "Maintain sharp details for print",
      "Ensure color accuracy",
      "Use for professional print production"
    ],
    example: "print optimization: convert to CMYK color space, high resolution for large format, sharp details, print-ready quality, color accuracy, professional printing standards, 4K source"
  },
  {
    id: "nano-hdr-processing",
    title: "HDR Processing",
    category: "image-editing",
    tool: "nano-banana",
    description: "Process images for HDR display while maintaining natural appearance",
    prompt: "HDR processing: extended dynamic range, natural appearance, preserve highlights and shadows, HDR-optimized, professional HDR quality, 4K resolution",
    tags: ["hdr", "dynamic-range", "quality", "professional"],
    useCase: "HDR displays, high-end monitors, professional photography, digital signage",
    tips: [
      "Extend dynamic range: 'preserve highlights', 'maintain shadow detail'",
      "Maintain natural appearance: 'not over-processed', 'realistic'",
      "Optimize for HDR displays",
      "Use for professional HDR content"
    ],
    example: "HDR processing: extend dynamic range while preserving natural appearance, preserve highlights and shadows, HDR-optimized, professional HDR quality, 4K resolution"
  },
  
  // Advanced Image Editing Prompts - Nano Banana (User Requested)
  {
    id: "clothing-extraction",
    title: "Clothing Extraction",
    category: "image-editing",
    tool: "nano-banana",
    description: "Extract clothing items from photos with clean edges and preserved details",
    prompt: "extract clothing: [clothing item], clean edges, preserve fabric texture, remove background, isolated product, 4K quality, professional extraction",
    tags: ["extraction", "clothing", "product", "4k"],
    useCase: "Fashion e-commerce, product catalogs, clothing visualization, style guides",
    tips: [
      "Specify clothing item: 'dress', 'jacket', 'shoes', 'accessories'",
      "Emphasize clean edges: 'precise masking', 'no artifacts', 'smooth edges'",
      "Preserve details: 'fabric texture', 'patterns', 'material properties'",
      "Use for e-commerce product isolation"
    ],
    example: "extract clothing: designer jacket, clean edges, preserve fabric texture, remove background, isolated product, 4K quality, professional extraction"
  },
  {
    id: "studio-quality-photoshoot",
    title: "Studio Quality Photoshoot",
    category: "image-editing",
    tool: "nano-banana",
    description: "Transform casual photos into professional studio-quality images",
    prompt: "studio quality transformation, professional photography, studio lighting, clean background, commercial quality, 4K resolution, photorealistic",
    tags: ["studio", "photoshoot", "photography", "professional"],
    useCase: "Professional headshots, product photography, portfolio images, commercial photography",
    tips: [
      "Specify lighting: 'soft studio lighting', 'dramatic lighting', 'even illumination'",
      "Add background: 'white background', 'colored backdrop', 'gradient background'",
      "Maintain subject quality: 'preserve details', 'natural appearance'",
      "Use for professional photography transformation"
    ],
    example: "studio quality transformation, professional photography, soft studio lighting, white background, commercial quality, 4K resolution, photorealistic"
  },
  {
    id: "extract-elements",
    title: "Element Extraction",
    category: "image-editing",
    tool: "nano-banana",
    description: "Extract specific elements from images while maintaining quality",
    prompt: "extract element: [element description], clean extraction, preserve details, isolated element, professional quality, 4K resolution",
    tags: ["extraction", "elements", "isolation", "quality"],
    useCase: "Graphic design, asset creation, element isolation, design systems",
    tips: [
      "Specify element: 'logo', 'icon', 'object', 'text', 'pattern'",
      "Ensure clean extraction: 'precise edges', 'no background', 'isolated'",
      "Preserve quality: 'maintain resolution', 'sharp details', 'no artifacts'",
      "Use for design asset creation"
    ],
    example: "extract element: company logo from background, clean extraction, preserve details, isolated element, professional quality, 4K resolution"
  },
  {
    id: "outfit-angle-change",
    title: "Outfit Angle Change",
    category: "image-editing",
    tool: "nano-banana",
    description: "Change viewing angle of outfits while maintaining clothing details",
    prompt: "change outfit angle: [new angle], maintain clothing details, preserve fabric texture, natural perspective, 4K quality, photorealistic",
    tags: ["outfit", "angle", "clothing", "perspective"],
    useCase: "Fashion photography, e-commerce product views, style visualization, catalog photography",
    tips: [
      "Specify angle: 'front view', 'side view', 'back view', '3/4 angle'",
      "Maintain clothing details: 'preserve patterns', 'fabric texture', 'fit'",
      "Ensure natural perspective: 'realistic proportions', 'natural appearance'",
      "Use for multi-angle product photography"
    ],
    example: "change outfit angle: side view of full outfit, maintain clothing details, preserve fabric texture, natural perspective, 4K quality, photorealistic"
  },
  {
    id: "camera-angle-change",
    title: "Camera Angle Change",
    category: "image-editing",
    tool: "nano-banana",
    description: "Transform images by changing camera perspective and angle",
    prompt: "change camera angle: [new angle], maintain subject, natural perspective, professional cinematography, 4K quality, photorealistic",
    tags: ["camera", "angle", "perspective", "cinematic"],
    useCase: "Photography enhancement, cinematic transformations, perspective correction, creative photography",
    tips: [
      "Specify angle: 'low angle', 'high angle', 'bird's eye', 'worm's eye', 'dutch angle'",
      "Maintain subject: 'preserve details', 'natural proportions', 'realistic perspective'",
      "Add cinematic quality: 'dramatic composition', 'professional framing'",
      "Use for creative photography transformations"
    ],
    example: "change camera angle: low angle dramatic perspective, maintain subject, natural perspective, professional cinematography, 4K quality, photorealistic"
  },
  {
    id: "restore-bw-photo",
    title: "Restore Old BW Photo",
    category: "image-editing",
    tool: "nano-banana",
    description: "Restore and enhance old black and white photographs",
    prompt: "restore old black and white photo, enhance quality, reduce damage, improve clarity, preserve historical character, professional restoration, 4K upscale",
    tags: ["restoration", "old-photo", "bw", "black-white"],
    useCase: "Photo restoration, archival work, family history, historical preservation",
    tips: [
      "Specify damage types: 'scratches', 'fading', 'tears', 'stains', 'noise'",
      "Preserve character: 'maintain original style', 'historical authenticity'",
      "Enhance quality: 'improve clarity', 'reduce noise', 'sharpen details'",
      "Use for professional photo restoration"
    ],
    example: "restore old black and white photo, remove scratches and reduce fading, enhance quality, improve clarity, preserve historical character, professional restoration, 4K upscale"
  },
  {
    id: "colorize-photo",
    title: "Colorize Black & White Photo",
    category: "image-editing",
    tool: "nano-banana",
    description: "Add realistic color to black and white photographs",
    prompt: "colorize black and white photo, realistic colors, natural skin tones, accurate colorization, historical accuracy, professional colorization, 4K quality",
    tags: ["colorize", "restoration", "bw", "color"],
    useCase: "Photo restoration, historical colorization, family photos, archival enhancement",
    tips: [
      "Specify color accuracy: 'realistic colors', 'natural skin tones', 'accurate materials'",
      "Maintain historical accuracy: 'period-appropriate colors', 'authentic appearance'",
      "Preserve photo quality: 'maintain details', 'no artifacts'",
      "Use for professional photo colorization"
    ],
    example: "colorize black and white photo, realistic colors, natural skin tones, accurate colorization, historical accuracy, professional colorization, 4K quality"
  },
  {
    id: "color-grade-image",
    title: "Color Grade Image",
    category: "image-editing",
    tool: "nano-banana",
    description: "Apply professional color grading to enhance image mood and style",
    prompt: "color grade image: [color style], professional color grading, maintain image quality, cinematic look, color science accuracy, 4K native, professional grade",
    tags: ["color-grading", "colourgrade", "cinematic", "professional"],
    useCase: "Film look, brand consistency, editorial photography, cinematic aesthetics",
    tips: [
      "Specify color style: 'warm cinematic', 'cool teal and orange', 'vintage film', 'modern desaturated', 'high contrast'",
      "Maintain quality: 'preserve details', 'no banding', 'smooth gradients'",
      "Use color science accuracy for professional results",
      "Test on different image types"
    ],
    example: "color grade image: warm cinematic teal and orange, professional color grading, maintain image quality, cinematic look, color science accuracy, 4K native, professional grade"
  },
  {
    id: "pov-conversion",
    title: "POV Conversion",
    category: "image-editing",
    tool: "nano-banana",
    description: "Convert images to first-person point of view perspective",
    prompt: "convert to POV: first-person perspective, immersive view, natural eye level, realistic perspective, 4K quality, photorealistic",
    tags: ["pov", "conversion", "perspective", "immersive"],
    useCase: "VR content, immersive experiences, first-person visualization, perspective transformation",
    tips: [
      "Specify POV type: 'first-person', 'immersive view', 'eye-level perspective'",
      "Maintain natural perspective: 'realistic proportions', 'natural field of view'",
      "Ensure immersive quality: 'realistic depth', 'natural appearance'",
      "Use for VR and immersive content creation"
    ],
    example: "convert to POV: first-person perspective, immersive view, natural eye level, realistic perspective, 4K quality, photorealistic"
  },
  {
    id: "blueprint-extraction",
    title: "Blueprint Extraction",
    category: "image-editing",
    tool: "nano-banana",
    description: "Extract and enhance blueprint elements from technical drawings",
    prompt: "extract blueprint: technical drawing, clean lines, enhance contrast, remove background, isolated blueprint, professional quality, 4K resolution",
    tags: ["blueprint", "extraction", "technical", "design"],
    useCase: "Architectural documentation, technical drawings, engineering visualization, design extraction",
    tips: [
      "Specify blueprint type: 'architectural', 'engineering', 'technical drawing'",
      "Enhance clarity: 'clean lines', 'high contrast', 'sharp details'",
      "Remove background: 'isolated blueprint', 'white background'",
      "Use for technical documentation"
    ],
    example: "extract blueprint: architectural floor plan, clean lines, enhance contrast, remove background, isolated blueprint, professional quality, 4K resolution"
  },
  {
    id: "subject-swap",
    title: "Subject Swap",
    category: "image-editing",
    tool: "nano-banana",
    description: "Swap subjects between images while maintaining scene coherence",
    prompt: "swap subject: replace [old subject] with [new subject], maintain scene coherence, preserve lighting, natural integration, seamless swap, 4K quality, photorealistic",
    tags: ["swap", "subject", "replacement", "photorealistic"],
    useCase: "Product photography, scene modifications, content updates, visual corrections",
    tips: [
      "Specify subjects clearly: 'person A' → 'person B', 'product A' → 'product B'",
      "Maintain scene coherence: 'same lighting', 'consistent shadows', 'natural perspective'",
      "Ensure seamless integration: 'no artifacts', 'natural appearance', 'realistic placement'",
      "Use for professional product photography"
    ],
    example: "swap subject: replace person in photo with different person, maintain scene coherence, preserve lighting, natural integration, seamless swap, 4K quality, photorealistic"
  },
  
  // Studio Setup Prompts - Professional Configurations
  {
    id: "high-key-studio",
    title: "High-Key Studio Setup",
    category: "studio-setup",
    tool: "nano-banana",
    description: "Transform images to high-key studio photography with bright, even lighting",
    prompt: "high-key studio setup, bright even lighting, white background, minimal shadows, clean professional look, commercial photography quality, 4K resolution, photorealistic",
    tags: ["studio", "high-key", "photography", "professional"],
    useCase: "Product photography, portrait photography, commercial photography, catalog images",
    tips: [
      "High-key means bright, even lighting with minimal shadows",
      "Perfect for product photography and clean commercial looks",
      "Maintains subject detail while creating bright, airy aesthetic",
      "Use for professional catalog and e-commerce photography"
    ],
    example: "high-key studio setup, bright even lighting, white background, minimal shadows, clean professional look, commercial photography quality, 4K resolution, photorealistic"
  },
  {
    id: "low-key-dramatic",
    title: "Low-Key Dramatic Studio",
    category: "studio-setup",
    tool: "nano-banana",
    description: "Create dramatic low-key studio photography with strong contrast and shadows",
    prompt: "low-key dramatic studio, strong directional lighting, deep shadows, high contrast, dramatic mood, professional portrait lighting, 4K quality, photorealistic",
    tags: ["studio", "low-key", "dramatic", "photography"],
    useCase: "Artistic portraits, dramatic product photography, editorial photography, moody visuals",
    tips: [
      "Low-key means dark background with strong directional lighting",
      "Creates dramatic contrast and mood",
      "Perfect for artistic and editorial photography",
      "Maintains detail in highlights while preserving shadow depth"
    ],
    example: "low-key dramatic studio, strong directional lighting, deep shadows, high contrast, dramatic mood, professional portrait lighting, 4K quality, photorealistic"
  },
  {
    id: "product-studio-setup",
    title: "Product Photography Studio",
    category: "studio-setup",
    tool: "nano-banana",
    description: "Professional product photography studio configuration",
    prompt: "product photography studio setup, professional lighting, clean background, even illumination, commercial quality, sharp focus, 4K resolution, photorealistic",
    tags: ["studio", "product", "photography", "commercial"],
    useCase: "E-commerce product images, catalog photography, commercial product shots, marketing materials",
    tips: [
      "Optimized for product photography with even lighting",
      "Clean backgrounds emphasize product details",
      "Maintains product color accuracy and texture",
      "Use for professional e-commerce and catalog work"
    ],
    example: "product photography studio setup, professional lighting, clean white background, even illumination, commercial quality, sharp focus, 4K resolution, photorealistic"
  },
  {
    id: "portrait-studio-setup",
    title: "Portrait Studio Configuration",
    category: "studio-setup",
    tool: "nano-banana",
    description: "Professional portrait studio lighting and setup",
    prompt: "portrait studio setup, professional portrait lighting, flattering illumination, natural skin tones, professional headshot quality, 4K resolution, photorealistic",
    tags: ["studio", "portrait", "photography", "professional"],
    useCase: "Professional headshots, corporate portraits, portfolio images, business photography",
    tips: [
      "Optimized for flattering portrait lighting",
      "Maintains natural skin tones and texture",
      "Professional headshot quality",
      "Use for corporate and professional portraits"
    ],
    example: "portrait studio setup, professional portrait lighting with soft key light, flattering illumination, natural skin tones, professional headshot quality, 4K resolution, photorealistic"
  },
  {
    id: "fashion-studio-setup",
    title: "Fashion Photography Studio",
    category: "studio-setup",
    tool: "nano-banana",
    description: "Fashion photography studio configuration with editorial quality",
    prompt: "fashion photography studio setup, editorial lighting, professional fashion photography, high-end quality, magazine-ready, 4K resolution, photorealistic",
    tags: ["studio", "fashion", "photography", "editorial"],
    useCase: "Fashion photography, editorial shoots, magazine quality, high-end fashion",
    tips: [
      "Editorial-quality lighting for fashion",
      "Magazine-ready professional quality",
      "Maintains fabric texture and color accuracy",
      "Use for high-end fashion and editorial work"
    ],
    example: "fashion photography studio setup, editorial lighting with multiple light sources, professional fashion photography, high-end quality, magazine-ready, 4K resolution, photorealistic"
  },
  {
    id: "beauty-studio-setup",
    title: "Beauty Photography Studio",
    category: "studio-setup",
    tool: "nano-banana",
    description: "Beauty photography studio with soft, flattering lighting",
    prompt: "beauty photography studio setup, soft diffused lighting, flattering beauty lighting, natural skin texture, professional beauty photography, 4K resolution, photorealistic",
    tags: ["studio", "beauty", "photography", "professional"],
    useCase: "Beauty photography, cosmetics photography, skincare product shots, beauty editorial",
    tips: [
      "Soft, diffused lighting for beauty work",
      "Maintains natural skin texture and detail",
      "Flattering illumination for beauty subjects",
      "Use for cosmetics and beauty product photography"
    ],
    example: "beauty photography studio setup, soft diffused lighting, flattering beauty lighting, natural skin texture, professional beauty photography, 4K resolution, photorealistic"
  },
  {
    id: "lifestyle-studio-setup",
    title: "Lifestyle Studio Setup",
    category: "studio-setup",
    tool: "nano-banana",
    description: "Natural lifestyle photography studio configuration",
    prompt: "lifestyle studio setup, natural lighting simulation, warm ambient light, lifestyle photography, authentic feel, professional quality, 4K resolution, photorealistic",
    tags: ["studio", "lifestyle", "photography", "natural"],
    useCase: "Lifestyle photography, natural product shots, authentic brand imagery, lifestyle editorial",
    tips: [
      "Simulates natural lighting in studio",
      "Warm, authentic feel for lifestyle work",
      "Maintains natural appearance",
      "Use for lifestyle and authentic brand photography"
    ],
    example: "lifestyle studio setup, natural lighting simulation with warm ambient light, lifestyle photography, authentic feel, professional quality, 4K resolution, photorealistic"
  },
  {
    id: "architectural-studio-setup",
    title: "Architectural Photography Studio",
    category: "studio-setup",
    tool: "nano-banana",
    description: "Professional architectural photography studio configuration",
    prompt: "architectural photography studio setup, even architectural lighting, professional architectural photography, accurate color representation, technical quality, 4K resolution, photorealistic",
    tags: ["studio", "architectural", "photography", "technical"],
    useCase: "Architectural photography, real estate photography, building documentation, technical photography",
    tips: [
      "Even lighting for architectural accuracy",
      "Accurate color representation for materials",
      "Technical quality for documentation",
      "Use for architectural and real estate photography"
    ],
    example: "architectural photography studio setup, even architectural lighting, professional architectural photography, accurate color representation, technical quality, 4K resolution, photorealistic"
  },
  
  // Template-Based Prompts - Reusable Templates with Variables
  {
    id: "template-product-variations",
    title: "Product Variation Template",
    category: "templates",
    tool: "nano-banana",
    description: "Template for generating product variations with customizable parameters",
    prompt: "product: [PRODUCT_NAME], color: [COLOR], background: [BACKGROUND_TYPE], lighting: [LIGHTING_STYLE], angle: [VIEW_ANGLE], quality: 4K, photorealistic, commercial photography",
    tags: ["template", "product", "variations", "commercial"],
    useCase: "E-commerce product catalogs, product line visualization, marketing campaigns, catalog photography",
    tips: [
      "Replace [PRODUCT_NAME] with specific product",
      "Replace [COLOR] with product color variant",
      "Replace [BACKGROUND_TYPE] with 'white', 'colored', 'lifestyle', 'textured'",
      "Replace [LIGHTING_STYLE] with 'studio', 'natural', 'dramatic', 'soft'",
      "Replace [VIEW_ANGLE] with 'front', 'side', '45-degree', 'top-down'",
      "Use for batch product photography generation"
    ],
    example: "product: luxury watch, color: silver, background: white, lighting: studio, angle: 45-degree, quality: 4K, photorealistic, commercial photography"
  },
  {
    id: "template-portrait-style",
    title: "Portrait Style Template",
    category: "templates",
    tool: "nano-banana",
    description: "Template for portrait photography with style variables",
    prompt: "portrait of [SUBJECT], style: [STYLE], lighting: [LIGHTING], background: [BACKGROUND], mood: [MOOD], quality: 4K, photorealistic, professional portrait",
    tags: ["template", "portrait", "style", "photography"],
    useCase: "Portrait photography, headshots, professional photos, portfolio images",
    tips: [
      "Replace [SUBJECT] with person description",
      "Replace [STYLE] with 'professional', 'artistic', 'editorial', 'casual'",
      "Replace [LIGHTING] with 'soft', 'dramatic', 'natural', 'studio'",
      "Replace [BACKGROUND] with 'solid', 'gradient', 'textured', 'blurred'",
      "Replace [MOOD] with 'confident', 'friendly', 'serious', 'energetic'",
      "Use for consistent portrait generation"
    ],
    example: "portrait of business professional, style: professional, lighting: soft studio, background: solid grey, mood: confident, quality: 4K, photorealistic, professional portrait"
  },
  {
    id: "template-brand-asset",
    title: "Brand Asset Template",
    category: "templates",
    tool: "nano-banana",
    description: "Template for creating brand-consistent assets",
    prompt: "brand asset: [ASSET_TYPE], brand colors: [COLOR_PALETTE], style: [BRAND_STYLE], format: [FORMAT], quality: 4K, brand-consistent, professional quality",
    tags: ["template", "brand", "asset", "consistency"],
    useCase: "Brand asset creation, marketing materials, brand consistency, campaign assets",
    tips: [
      "Replace [ASSET_TYPE] with 'social media post', 'banner', 'advertisement', 'product image'",
      "Replace [COLOR_PALETTE] with brand colors (e.g., 'blue and white', 'minimalist palette')",
      "Replace [BRAND_STYLE] with 'modern', 'vintage', 'minimalist', 'bold'",
      "Replace [FORMAT] with 'square', 'landscape', 'portrait', 'story'",
      "Use for maintaining brand consistency across assets"
    ],
    example: "brand asset: social media post, brand colors: blue and white, style: modern minimalist, format: square, quality: 4K, brand-consistent, professional quality"
  },
  {
    id: "template-editorial-layout",
    title: "Editorial Layout Template",
    category: "templates",
    tool: "nano-banana",
    description: "Template for editorial and magazine-style layouts",
    prompt: "editorial layout: [LAYOUT_TYPE], content: [CONTENT], style: [EDITORIAL_STYLE], typography area: [TEXT_AREA], quality: 4K, magazine-ready, professional editorial",
    tags: ["template", "editorial", "layout", "magazine"],
    useCase: "Magazine layouts, editorial design, publication graphics, editorial photography",
    tips: [
      "Replace [LAYOUT_TYPE] with 'full-bleed', 'grid', 'feature', 'spread'",
      "Replace [CONTENT] with main visual content description",
      "Replace [EDITORIAL_STYLE] with 'minimalist', 'bold', 'classic', 'modern'",
      "Replace [TEXT_AREA] with 'left side', 'top', 'bottom', 'overlay'",
      "Use for editorial and magazine design work"
    ],
    example: "editorial layout: full-bleed feature, content: fashion portrait, style: modern minimalist, typography area: bottom, quality: 4K, magazine-ready, professional editorial"
  },
  {
    id: "template-social-media",
    title: "Social Media Content Template",
    category: "templates",
    tool: "nano-banana",
    description: "Template for social media content creation",
    prompt: "social media content: [PLATFORM], content type: [CONTENT_TYPE], dimensions: [DIMENSIONS], style: [STYLE], quality: 4K, platform-optimized, professional social media",
    tags: ["template", "social-media", "content", "marketing"],
    useCase: "Social media marketing, content creation, social campaigns, platform-specific content",
    tips: [
      "Replace [PLATFORM] with 'Instagram', 'Twitter', 'Facebook', 'LinkedIn'",
      "Replace [CONTENT_TYPE] with 'post', 'story', 'cover', 'ad'",
      "Replace [DIMENSIONS] with platform-specific (e.g., '1080x1080', '1080x1920')",
      "Replace [STYLE] with 'minimalist', 'bold', 'elegant', 'vibrant'",
      "Use for consistent social media content generation"
    ],
    example: "social media content: Instagram, content type: post, dimensions: 1080x1080, style: modern minimalist, quality: 4K, platform-optimized, professional social media"
  },
  {
    id: "template-ecommerce-product",
    title: "E-commerce Product Template",
    category: "templates",
    tool: "nano-banana",
    description: "Template for e-commerce product photography",
    prompt: "e-commerce product: [PRODUCT], view: [VIEW], background: [BACKGROUND], lighting: [LIGHTING], quality: 4K, e-commerce optimized, professional product photography",
    tags: ["template", "ecommerce", "product", "commercial"],
    useCase: "E-commerce product images, online store catalogs, product listings, marketplace images",
    tips: [
      "Replace [PRODUCT] with product name and description",
      "Replace [VIEW] with 'front', 'side', 'detail', 'lifestyle', 'packaging'",
      "Replace [BACKGROUND] with 'white', 'transparent', 'lifestyle', 'textured'",
      "Replace [LIGHTING] with 'studio', 'natural', 'commercial'",
      "Use for consistent e-commerce product photography"
    ],
    example: "e-commerce product: wireless headphones, view: front, background: white, lighting: studio, quality: 4K, e-commerce optimized, professional product photography"
  },
  {
    id: "template-photo-restoration",
    title: "Photo Restoration Template",
    category: "templates",
    tool: "nano-banana",
    description: "Template for photo restoration with customizable restoration parameters",
    prompt: "restore photo: [DAMAGE_TYPE], enhance: [ENHANCEMENT], colorize: [COLORIZE], quality: 4K, professional restoration, preserve historical character",
    tags: ["template", "restoration", "photo", "quality"],
    useCase: "Photo restoration, archival work, family history, historical preservation",
    tips: [
      "Replace [DAMAGE_TYPE] with 'scratches', 'fading', 'tears', 'stains', 'noise'",
      "Replace [ENHANCEMENT] with 'clarity', 'sharpness', 'contrast', 'exposure'",
      "Replace [COLORIZE] with 'yes', 'no', 'selective'",
      "Use for professional photo restoration workflows"
    ],
    example: "restore photo: scratches and fading, enhance: clarity and contrast, colorize: yes, quality: 4K, professional restoration, preserve historical character"
  },
  {
    id: "template-color-grading",
    title: "Color Grading Template",
    category: "templates",
    tool: "nano-banana",
    description: "Template for professional color grading with style variables",
    prompt: "color grade: [GRADE_STYLE], intensity: [INTENSITY], preserve: [PRESERVE], quality: 4K, professional color grading, cinematic quality",
    tags: ["template", "color-grading", "cinematic", "professional"],
    useCase: "Film look, brand consistency, editorial photography, cinematic aesthetics",
    tips: [
      "Replace [GRADE_STYLE] with 'warm cinematic', 'cool teal', 'vintage film', 'modern desaturated', 'high contrast'",
      "Replace [INTENSITY] with 'subtle', 'moderate', 'strong', 'dramatic'",
      "Replace [PRESERVE] with 'skin tones', 'details', 'highlights', 'shadows'",
      "Use for consistent color grading across image sets"
    ],
    example: "color grade: warm cinematic teal and orange, intensity: moderate, preserve: skin tones and details, quality: 4K, professional color grading, cinematic quality"
  },
  {
    id: "template-background-replacement",
    title: "Background Replacement Template",
    category: "templates",
    tool: "nano-banana",
    description: "Template for background replacement with customizable options",
    prompt: "replace background: [NEW_BACKGROUND], preserve: [PRESERVE_ELEMENTS], lighting match: [LIGHTING], quality: 4K, seamless integration, photorealistic",
    tags: ["template", "background", "replacement", "photorealistic"],
    useCase: "Product photography, portrait editing, scene enhancement, background modification",
    tips: [
      "Replace [NEW_BACKGROUND] with 'studio white', 'outdoor scene', 'office', 'gradient', 'textured'",
      "Replace [PRESERVE_ELEMENTS] with 'subject', 'foreground', 'shadows', 'reflections'",
      "Replace [LIGHTING] with 'match original', 'studio lighting', 'natural lighting', 'dramatic'",
      "Use for professional background replacement workflows"
    ],
    example: "replace background: modern office space, preserve: subject and shadows, lighting match: natural lighting, quality: 4K, seamless integration, photorealistic"
  },
  {
    id: "template-style-application",
    title: "Style Application Template",
    category: "templates",
    tool: "nano-banana",
    description: "Template for applying artistic styles with customizable parameters",
    prompt: "apply style: [STYLE_TYPE], intensity: [INTENSITY], preserve: [PRESERVE], quality: 4K, professional style application, artistic quality",
    tags: ["template", "style", "artistic", "creative"],
    useCase: "Artistic transformations, brand consistency, creative projects, style exploration",
    tips: [
      "Replace [STYLE_TYPE] with 'watercolor', 'oil painting', 'sketch', 'pop art', 'vintage', 'modern'",
      "Replace [INTENSITY] with 'subtle', 'moderate', 'strong', 'dramatic'",
      "Replace [PRESERVE] with 'composition', 'subject', 'colors', 'details'",
      "Use for consistent style application across image sets"
    ],
    example: "apply style: watercolor painting, intensity: moderate, preserve: composition and subject, quality: 4K, professional style application, artistic quality"
  },
  
  // Text-to-Audio Prompts - High Quality Production
  {
    id: "voiceover-narration",
    title: "Professional Voiceover Narration",
    category: "audio-production",
    tool: "elevenlabs",
    description: "Natural-sounding voiceover for videos, presentations, and content",
    prompt: "professional voiceover, [voice_style], clear articulation, natural pacing, [tone], [duration], high-quality audio, studio quality",
    tags: ["voiceover", "narration", "professional", "audio"],
    useCase: "Video narration, explainer videos, presentations, e-learning content, documentaries",
    tips: [
      "Replace [voice_style] with 'male', 'female', 'neutral', 'warm', 'authoritative'",
      "Replace [tone] with 'friendly', 'professional', 'conversational', 'formal'",
      "Replace [duration] with specific length or 'natural pacing'",
      "Use for professional content requiring clear narration"
    ],
    example: "professional voiceover, warm female voice, clear articulation, natural pacing, friendly tone, 2 minutes, high-quality audio, studio quality"
  },
  {
    id: "character-voice",
    title: "Character Voice Generation",
    category: "audio-production",
    tool: "elevenlabs",
    description: "Distinct character voices for animations, games, and storytelling",
    prompt: "character voice, [character_type], [voice_characteristics], expressive delivery, [emotion], high-quality character audio, unique voice",
    tags: ["character", "voice", "animation", "storytelling"],
    useCase: "Animation voice acting, game characters, audiobooks, interactive content, character-based content",
    tips: [
      "Replace [character_type] with 'hero', 'villain', 'narrator', 'child', 'elderly'",
      "Replace [voice_characteristics] with 'deep', 'high-pitched', 'raspy', 'smooth', 'accented'",
      "Replace [emotion] with 'excited', 'serious', 'playful', 'mysterious'",
      "Use for character-driven content requiring distinct voices"
    ],
    example: "character voice, heroic protagonist, deep authoritative voice, expressive delivery, determined emotion, high-quality character audio, unique voice"
  },
  {
    id: "podcast-voice",
    title: "Podcast Voice Style",
    category: "audio-production",
    tool: "elevenlabs",
    description: "Conversational podcast-style voice for audio content",
    prompt: "podcast voice, conversational tone, natural delivery, engaging, [host_style], [energy_level], professional podcast quality",
    tags: ["podcast", "conversational", "audio", "content"],
    useCase: "Podcast intros, episode narration, audio content, conversational media",
    tips: [
      "Replace [host_style] with 'warm', 'energetic', 'calm', 'informative'",
      "Replace [energy_level] with 'high', 'moderate', 'relaxed'",
      "Use for podcast and conversational audio content"
    ],
    example: "podcast voice, conversational tone, natural delivery, engaging, warm host style, moderate energy, professional podcast quality"
  },
  {
    id: "commercial-voiceover",
    title: "Commercial Voiceover",
    category: "audio-production",
    tool: "elevenlabs",
    description: "Professional commercial voiceover for advertisements",
    prompt: "commercial voiceover, [commercial_style], persuasive delivery, clear pronunciation, [target_audience], professional ad quality, engaging",
    tags: ["commercial", "advertising", "voiceover", "marketing"],
    useCase: "TV commercials, radio ads, online advertisements, promotional content",
    tips: [
      "Replace [commercial_style] with 'energetic', 'trustworthy', 'luxury', 'friendly'",
      "Replace [target_audience] with 'general', 'youth', 'professional', 'family'",
      "Use for professional advertising and marketing content"
    ],
    example: "commercial voiceover, energetic style, persuasive delivery, clear pronunciation, general audience, professional ad quality, engaging"
  },
  {
    id: "audiobook-narration",
    title: "Audiobook Narration",
    category: "audio-production",
    tool: "elevenlabs",
    description: "Natural audiobook narration with character distinction",
    prompt: "audiobook narration, [narrator_style], clear reading, character distinction, [book_genre], natural pacing, professional audiobook quality",
    tags: ["audiobook", "narration", "literature", "storytelling"],
    useCase: "Audiobook production, literary content, long-form narration, book narration",
    tips: [
      "Replace [narrator_style] with 'warm', 'dramatic', 'neutral', 'expressive'",
      "Replace [book_genre] with 'fiction', 'non-fiction', 'mystery', 'fantasy'",
      "Use for professional audiobook and long-form narration"
    ],
    example: "audiobook narration, warm narrator style, clear reading, character distinction, fiction genre, natural pacing, professional audiobook quality"
  },
  {
    id: "music-production",
    title: "Music Production Template",
    category: "templates",
    tool: "suno",
    description: "Template for generating music with customizable parameters",
    prompt: "music: [genre], mood: [mood], tempo: [tempo], instruments: [instruments], [vocal_style], [duration], professional production quality",
    tags: ["template", "music", "production", "audio"],
    useCase: "Music creation, background tracks, original compositions, content music",
    tips: [
      "Replace [genre] with 'electronic', 'acoustic', 'rock', 'jazz', 'ambient', 'pop'",
      "Replace [mood] with 'upbeat', 'melancholic', 'energetic', 'calm', 'dramatic'",
      "Replace [tempo] with 'slow', 'moderate', 'fast', 'variable'",
      "Replace [instruments] with 'piano', 'guitar', 'drums', 'synth', 'orchestral'",
      "Replace [vocal_style] with 'instrumental', 'vocals', 'backing vocals', 'choir'",
      "Replace [duration] with specific length (e.g., '2 minutes', '30 seconds')",
      "Use for consistent music generation across projects"
    ],
    example: "music: electronic, mood: upbeat, tempo: fast, instruments: synth and drums, instrumental, 2 minutes, professional production quality"
  },
  {
    id: "sound-design",
    title: "Sound Design Template",
    category: "templates",
    tool: "suno",
    description: "Template for creating sound effects and audio design",
    prompt: "sound effect: [sound_type], [characteristics], [environment], [quality], [duration], professional sound design, high-quality audio",
    tags: ["template", "sound-design", "effects", "audio"],
    useCase: "Game audio, film sound effects, UI sounds, environmental audio, production sound",
    tips: [
      "Replace [sound_type] with 'impact', 'ambient', 'mechanical', 'natural', 'synthetic'",
      "Replace [characteristics] with 'sharp', 'smooth', 'textured', 'clean', 'distorted'",
      "Replace [environment] with 'indoor', 'outdoor', 'studio', 'natural', 'urban'",
      "Replace [quality] with 'crisp', 'warm', 'bright', 'muffled', 'clear'",
      "Replace [duration] with specific length or 'natural decay'",
      "Use for professional sound design workflows"
    ],
    example: "sound effect: impact, sharp characteristics, indoor environment, crisp quality, 1 second, professional sound design, high-quality audio"
  },
  {
    id: "background-music",
    title: "Background Music Template",
    category: "templates",
    tool: "suno",
    description: "Template for background music with customizable style",
    prompt: "background music, [style], [intensity], [mood], [loop], [duration], non-intrusive, professional background audio",
    tags: ["template", "background", "music", "ambient"],
    useCase: "Video backgrounds, presentations, waiting music, ambient content, background audio",
    tips: [
      "Replace [style] with 'ambient', 'acoustic', 'electronic', 'classical', 'modern'",
      "Replace [intensity] with 'subtle', 'moderate', 'prominent'",
      "Replace [mood] with 'calm', 'energizing', 'focused', 'relaxing', 'uplifting'",
      "Replace [loop] with 'seamless loop', 'fade in/out', 'natural ending'",
      "Replace [duration] with specific length or 'extended'",
      "Use for consistent background music generation"
    ],
    example: "background music, ambient style, subtle intensity, calm mood, seamless loop, 3 minutes, non-intrusive, professional background audio"
  },
  {
    id: "jingle-creation",
    title: "Jingle Creation Template",
    category: "templates",
    tool: "suno",
    description: "Template for creating brand jingles and short musical identifiers",
    prompt: "jingle, [brand_style], [catchiness], [instruments], [length], memorable, professional jingle quality, brand-appropriate",
    tags: ["template", "jingle", "brand", "audio"],
    useCase: "Brand jingles, radio identifiers, podcast intros, brand audio, short musical IDs",
    tips: [
      "Replace [brand_style] with 'modern', 'classic', 'playful', 'sophisticated', 'energetic'",
      "Replace [catchiness] with 'catchy melody', 'simple hook', 'memorable phrase'",
      "Replace [instruments] with 'piano', 'guitar', 'brass', 'synth', 'full band'",
      "Replace [length] with '5 seconds', '10 seconds', '15 seconds', '30 seconds'",
      "Use for brand audio identity and memorable musical identifiers"
    ],
    example: "jingle, modern brand style, catchy melody, synth and drums, 10 seconds, memorable, professional jingle quality, brand-appropriate"
  },
  {
    id: "ambient-soundscape-template",
    title: "Ambient Soundscape Template",
    category: "templates",
    tool: "suno",
    description: "Template for creating immersive ambient soundscapes",
    prompt: "ambient soundscape, [environment], [elements], [mood], [duration], immersive, high-quality ambient audio, spatial sound",
    tags: ["template", "ambient", "soundscape", "immersive"],
    useCase: "Meditation apps, focus music, relaxation content, environmental audio, immersive experiences",
    tips: [
      "Replace [environment] with 'forest', 'ocean', 'rain', 'city', 'space', 'underwater'",
      "Replace [elements] with 'nature sounds', 'water', 'wind', 'birds', 'traffic', 'synthetic'",
      "Replace [mood] with 'peaceful', 'energizing', 'mysterious', 'calming', 'dramatic'",
      "Replace [duration] with specific length or 'extended loop'",
      "Use for immersive ambient audio experiences"
    ],
    example: "ambient soundscape, forest environment, nature sounds and birds, peaceful mood, 5 minutes, immersive, high-quality ambient audio, spatial sound"
  },
  
  // Filmmaking Direction Prompts - Converting Ideas into Professional Scenes
  {
    id: "establishing-shot",
    title: "Establishing Shot - Location Introduction",
    category: "video-production",
    tool: "runway",
    description: "Professional establishing shot to introduce location and set the scene",
    prompt: "[location description], wide establishing shot, [time_of_day] lighting, [camera_movement], [atmosphere], cinematic composition, 4K, 24fps, professional cinematography",
    tags: ["establishing", "cinematic", "location", "professional"],
    useCase: "Film openings, scene transitions, location introductions, documentary establishing shots",
    tips: [
      "Replace [location_description] with specific place: 'urban cityscape', 'rural countryside', 'modern office building'",
      "Replace [time_of_day] with 'golden hour', 'blue hour', 'midday', 'night', 'dawn'",
      "Replace [camera_movement] with 'slow push in', 'gentle pan', 'static wide', 'aerial reveal'",
      "Replace [atmosphere] with 'mysterious', 'energetic', 'peaceful', 'dramatic', 'nostalgic'",
      "Use for professional scene setting and location context"
    ],
    example: "urban cityscape at sunset, wide establishing shot, golden hour lighting, slow push in, energetic atmosphere, cinematic composition, 4K, 24fps, professional cinematography"
  },
  {
    id: "character-entrance",
    title: "Character Entrance - Reveal Shot",
    category: "video-production",
    tool: "runway",
    description: "Dramatic character entrance with cinematic reveal",
    prompt: "[character_description] enters [location], [shot_type] reveal, [lighting_style], [camera_angle], [movement], dramatic timing, cinematic reveal, 4K, 24fps",
    tags: ["character", "reveal", "dramatic", "cinematic"],
    useCase: "Character introductions, dramatic entrances, scene reveals, narrative moments",
    tips: [
      "Replace [character_description] with character details: 'mysterious figure', 'protagonist', 'antagonist'",
      "Replace [shot_type] with 'medium shot', 'close-up', 'wide shot', 'over-the-shoulder'",
      "Replace [lighting_style] with 'backlit silhouette', 'dramatic side lighting', 'soft key light'",
      "Replace [camera_angle] with 'eye level', 'low angle', 'high angle', 'dutch angle'",
      "Replace [movement] with 'slow push in', 'tracking shot', 'static reveal', 'dolly in'",
      "Use for impactful character moments"
    ],
    example: "mysterious figure enters dimly lit warehouse, medium shot reveal, backlit silhouette, low angle, slow push in, dramatic timing, cinematic reveal, 4K, 24fps"
  },
  {
    id: "dialogue-scene",
    title: "Dialogue Scene - Two-Shot Composition",
    category: "video-production",
    tool: "runway",
    description: "Professional two-shot dialogue scene with proper framing",
    prompt: "[scene_context], two-shot dialogue scene, [shot_composition], [lighting_setup], [camera_position], natural conversation flow, [mood], 4K, 24fps, professional dialogue cinematography",
    tags: ["dialogue", "two-shot", "conversation", "professional"],
    useCase: "Dialogue scenes, conversations, interviews, narrative moments",
    tips: [
      "Replace [scene_context] with setting: 'coffee shop conversation', 'office meeting', 'intimate dinner'",
      "Replace [shot_composition] with 'over-the-shoulder', 'profile two-shot', 'facing each other', 'side-by-side'",
      "Replace [lighting_setup] with 'soft natural light', 'warm interior lighting', 'dramatic contrast', 'even illumination'",
      "Replace [camera_position] with 'eye level', 'slight high angle', 'medium distance', 'close proximity'",
      "Replace [mood] with 'tension', 'warmth', 'conflict', 'intimacy', 'professional'",
      "Use for natural, professional dialogue scenes"
    ],
    example: "coffee shop conversation, two-shot dialogue scene, over-the-shoulder composition, soft natural light, eye level, natural conversation flow, warmth mood, 4K, 24fps, professional dialogue cinematography"
  },
  {
    id: "action-sequence",
    title: "Action Sequence - Dynamic Movement",
    category: "video-production",
    tool: "runway",
    description: "High-energy action sequence with dynamic camera work",
    prompt: "[action_description], [camera_technique], [shot_type], [movement_speed], [framing], dynamic action cinematography, [intensity], 4K, 24fps, professional action scene",
    tags: ["action", "dynamic", "movement", "intense"],
    useCase: "Action sequences, chase scenes, fight scenes, high-energy moments",
    tips: [
      "Replace [action_description] with specific action: 'car chase', 'fight scene', 'running sequence', 'escape scene'",
      "Replace [camera_technique] with 'handheld', 'steady cam', 'tracking shot', 'dolly movement', 'crane shot'",
      "Replace [shot_type] with 'wide action', 'medium tracking', 'close-up detail', 'POV shot'",
      "Replace [movement_speed] with 'fast-paced', 'slow motion', 'variable speed', 'real-time'",
      "Replace [framing] with 'tight framing', 'wide framing', 'following action', 'anticipating movement'",
      "Replace [intensity] with 'high energy', 'dramatic', 'intense', 'thrilling'",
      "Use for professional action cinematography"
    ],
    example: "car chase through city streets, handheld camera technique, medium tracking shot, fast-paced movement, following action framing, dynamic action cinematography, high energy intensity, 4K, 24fps, professional action scene"
  },
  {
    id: "emotional-closeup",
    title: "Emotional Close-Up - Character Moment",
    category: "video-production",
    tool: "runway",
    description: "Intimate close-up for emotional character moments",
    prompt: "[character_emotion] close-up, [shot_size], [lighting_mood], [focus_technique], [camera_movement], emotional depth, [atmosphere], 4K, 24fps, cinematic emotion",
    tags: ["close-up", "emotion", "intimate", "character"],
    useCase: "Emotional moments, character development, intimate scenes, dramatic reveals",
    tips: [
      "Replace [character_emotion] with 'sadness', 'joy', 'determination', 'fear', 'contemplation'",
      "Replace [shot_size] with 'extreme close-up', 'close-up', 'medium close-up', 'tight frame'",
      "Replace [lighting_mood] with 'soft key light', 'dramatic shadows', 'warm glow', 'cool tones', 'natural window light'",
      "Replace [focus_technique] with 'shallow depth of field', 'rack focus', 'sharp focus', 'soft focus'",
      "Replace [camera_movement] with 'subtle push in', 'static', 'slight movement', 'gentle drift'",
      "Replace [atmosphere] with 'intimate', 'dramatic', 'melancholic', 'hopeful', 'tense'",
      "Use for powerful emotional storytelling"
    ],
    example: "contemplation close-up, extreme close-up, soft key light, shallow depth of field, subtle push in, emotional depth, intimate atmosphere, 4K, 24fps, cinematic emotion"
  },
  {
    id: "montage-sequence",
    title: "Montage Sequence - Time Passage",
    category: "video-production",
    tool: "runway",
    description: "Montage to show passage of time or process",
    prompt: "[montage_theme], montage sequence, [shot_variety], [transition_style], [pace], [visual_style], time passage, [mood], 4K, 24fps, professional montage",
    tags: ["montage", "sequence", "time", "process"],
    useCase: "Training montages, time passage, process documentation, narrative progression",
    tips: [
      "Replace [montage_theme] with 'training sequence', 'city life', 'relationship development', 'project completion'",
      "Replace [shot_variety] with 'varied angles', 'different locations', 'multiple perspectives', 'detail shots'",
      "Replace [transition_style] with 'smooth cuts', 'match cuts', 'fade transitions', 'quick cuts'",
      "Replace [pace] with 'fast-paced', 'rhythmic', 'gradual', 'energetic'",
      "Replace [visual_style] with 'consistent color grade', 'varying compositions', 'dynamic framing', 'unified aesthetic'",
      "Replace [mood] with 'motivational', 'nostalgic', 'energetic', 'reflective'",
      "Use for efficient storytelling and time compression"
    ],
    example: "training sequence montage, varied angles and locations, smooth cuts transition, fast-paced rhythm, consistent color grade, time passage, motivational mood, 4K, 24fps, professional montage"
  },
  {
    id: "reveal-shot",
    title: "Reveal Shot - Dramatic Disclosure",
    category: "video-production",
    tool: "runway",
    description: "Dramatic reveal shot for plot points or visual surprises",
    prompt: "[reveal_subject], [reveal_type], [camera_technique], [timing], [lighting_reveal], dramatic reveal, [impact], 4K, 24fps, cinematic reveal",
    tags: ["reveal", "dramatic", "plot", "surprise"],
    useCase: "Plot reveals, visual surprises, dramatic moments, narrative twists",
    tips: [
      "Replace [reveal_subject] with 'hidden location', 'character identity', 'plot twist', 'object discovery'",
      "Replace [reveal_type] with 'slow reveal', 'sudden reveal', 'gradual disclosure', 'dramatic unveiling'",
      "Replace [camera_technique] with 'slow push in', 'rack focus', 'crane reveal', 'dolly reveal', 'zoom out'",
      "Replace [timing] with 'delayed reveal', 'immediate', 'gradual build', 'sudden impact'",
      "Replace [lighting_reveal] with 'lighting change', 'shadow to light', 'backlit reveal', 'dramatic contrast'",
      "Replace [impact] with 'shocking', 'emotional', 'dramatic', 'surprising', 'powerful'",
      "Use for impactful narrative moments"
    ],
    example: "hidden location reveal, slow reveal type, slow push in camera technique, gradual build timing, shadow to light reveal, dramatic reveal, powerful impact, 4K, 24fps, cinematic reveal"
  },
  {
    id: "walk-and-talk",
    title: "Walk and Talk - Moving Dialogue",
    category: "video-production",
    tool: "runway",
    description: "Professional walk-and-talk scene with tracking movement",
    prompt: "[characters] walking through [location], walk-and-talk scene, [tracking_style], [shot_composition], [camera_position], natural dialogue, [pace], 4K, 24fps, professional walk-and-talk",
    tags: ["walk-and-talk", "tracking", "dialogue", "movement"],
    useCase: "Moving conversations, dynamic dialogue, scene transitions, narrative flow",
    tips: [
      "Replace [characters] with 'two characters', 'group', 'protagonist and companion'",
      "Replace [location] with 'city street', 'office hallway', 'park path', 'indoor corridor'",
      "Replace [tracking_style] with 'side tracking', 'following behind', 'leading ahead', 'circular movement'",
      "Replace [shot_composition] with 'two-shot', 'over-the-shoulder', 'wide following', 'medium tracking'",
      "Replace [camera_position] with 'shoulder height', 'eye level', 'slight low angle', 'handheld'",
      "Replace [pace] with 'brisk walk', 'slow stroll', 'energetic', 'contemplative'",
      "Use for dynamic, engaging dialogue scenes"
    ],
    example: "two characters walking through city street, walk-and-talk scene, side tracking style, two-shot composition, eye level camera position, natural dialogue, brisk walk pace, 4K, 24fps, professional walk-and-talk"
  },
  {
    id: "transition-shot",
    title: "Transition Shot - Scene Bridge",
    category: "video-production",
    tool: "runway",
    description: "Creative transition shot to bridge scenes",
    prompt: "[transition_type], [visual_element], [movement], [transition_style], [connection], seamless transition, [mood_shift], 4K, 24fps, professional transition",
    tags: ["transition", "bridge", "scene", "creative"],
    useCase: "Scene transitions, time passage, location changes, mood shifts",
    tips: [
      "Replace [transition_type] with 'match cut', 'whip pan', 'fade through', 'object transition'",
      "Replace [visual_element] with 'doorway', 'window', 'object', 'movement', 'light change'",
      "Replace [movement] with 'camera movement', 'subject movement', 'object movement', 'static'",
      "Replace [transition_style] with 'smooth', 'dramatic', 'subtle', 'energetic'",
      "Replace [connection] with 'visual match', 'thematic link', 'spatial connection', 'temporal bridge'",
      "Replace [mood_shift] with 'tone change', 'energy shift', 'atmosphere transition', 'mood bridge'",
      "Use for smooth, creative scene transitions"
    ],
    example: "match cut transition, doorway visual element, camera movement, smooth transition style, spatial connection, seamless transition, atmosphere transition mood shift, 4K, 24fps, professional transition"
  },
  {
    id: "atmospheric-b-roll",
    title: "Atmospheric B-Roll - Environmental Context",
    category: "video-production",
    tool: "runway",
    description: "Atmospheric B-roll to establish environment and mood",
    prompt: "[environment_description], atmospheric B-roll, [shot_variety], [movement_style], [lighting_atmosphere], [detail_focus], environmental context, [mood], 4K, 24fps, cinematic B-roll",
    tags: ["b-roll", "atmospheric", "environment", "context"],
    useCase: "Environmental context, mood establishment, scene setting, documentary footage",
    tips: [
      "Replace [environment_description] with 'urban environment', 'natural landscape', 'interior space', 'industrial setting'",
      "Replace [shot_variety] with 'detail shots', 'wide establishing', 'medium coverage', 'close-up textures'",
      "Replace [movement_style] with 'slow movement', 'static shots', 'gentle pans', 'subtle push ins'",
      "Replace [lighting_atmosphere] with 'natural lighting', 'dramatic shadows', 'warm tones', 'cool ambiance'",
      "Replace [detail_focus] with 'textures', 'architectural details', 'natural elements', 'human elements'",
      "Replace [mood] with 'peaceful', 'energetic', 'mysterious', 'nostalgic', 'dramatic'",
      "Use for rich environmental storytelling"
    ],
    example: "urban environment, atmospheric B-roll, detail shots and wide establishing, slow movement style, natural lighting atmosphere, architectural details focus, environmental context, energetic mood, 4K, 24fps, cinematic B-roll"
  },
  
  // Advanced Cinematography Prompts - Expensive Techniques Now Accessible
  {
    id: "dolly-zoom-vertigo",
    title: "Dolly Zoom (Vertigo Effect)",
    category: "video-production",
    tool: "runway",
    description: "Iconic dolly zoom effect - previously required expensive camera rigs and precise coordination",
    prompt: "[subject] in [location], dolly zoom vertigo effect, camera moves forward while zooming out (or vice versa), [background_compression], [foreground_stability], disorienting perspective, [intensity], cinematic vertigo effect, 4K, 24fps, professional dolly zoom",
    tags: ["dolly-zoom", "vertigo", "advanced", "cinematic"],
    useCase: "Dramatic reveals, emotional moments, disorientation effects, Hitchcock-style cinematography",
    tips: [
      "Replace [subject] with character or object: 'protagonist', 'character face', 'key object'",
      "Replace [location] with setting: 'staircase', 'hallway', 'outdoor scene', 'interior space'",
      "Replace [background_compression] with 'background expands', 'background compresses', 'perspective distortion'",
      "Replace [foreground_stability] with 'subject remains stable', 'subject stays in focus', 'foreground unchanged'",
      "Replace [intensity] with 'subtle effect', 'dramatic effect', 'extreme vertigo', 'moderate compression'",
      "Previously required: Dolly track ($5,000+), zoom lens ($10,000+), camera operator + focus puller team",
      "Now accessible via AI - professional results without expensive gear"
    ],
    example: "protagonist in staircase, dolly zoom vertigo effect, camera moves forward while zooming out, background expands, subject remains stable, disorienting perspective, dramatic effect intensity, cinematic vertigo effect, 4K, 24fps, professional dolly zoom"
  },
  {
    id: "crane-shot-reveal",
    title: "Crane Shot - Aerial Reveal",
    category: "video-production",
    tool: "runway",
    description: "Expensive crane shot - previously required $50,000+ equipment and crew",
    prompt: "[scene_description], crane shot reveal, camera starts [starting_position] and moves to [ending_position], [movement_pattern], [reveal_subject], [height_range], smooth crane movement, [atmosphere], 4K, 24fps, professional crane cinematography",
    tags: ["crane", "aerial", "reveal", "expensive"],
    useCase: "Epic reveals, location introductions, dramatic scene openings, production value enhancement",
    tips: [
      "Replace [scene_description] with scene context: 'cityscape', 'crowd scene', 'landscape', 'event'",
      "Replace [starting_position] with 'low angle', 'ground level', 'medium height', 'eye level'",
      "Replace [ending_position] with 'high angle', 'aerial view', 'bird's eye', 'overhead'",
      "Replace [movement_pattern] with 'rising crane', 'descending crane', 'arc movement', 'lateral movement'",
      "Replace [reveal_subject] with 'full location', 'crowd scale', 'landscape expanse', 'architectural detail'",
      "Replace [height_range] with 'ground to 20 feet', 'low to high', 'dramatic height change'",
      "Replace [atmosphere] with 'epic', 'dramatic', 'revealing', 'grandiose'",
      "Previously required: Camera crane ($50,000+), operator, safety crew, permits",
      "Now accessible via AI - cinematic crane shots without equipment costs"
    ],
    example: "cityscape at sunset, crane shot reveal, camera starts ground level and moves to high angle, rising crane movement, full location reveal, ground to 20 feet height range, smooth crane movement, epic atmosphere, 4K, 24fps, professional crane cinematography"
  },
  {
    id: "steadicam-sequence",
    title: "Steadicam Sequence - Floating Movement",
    category: "video-production",
    tool: "runway",
    description: "Smooth Steadicam movement - previously required $20,000+ rig and skilled operator",
    prompt: "[scene_action], steadicam sequence, [movement_type], [path_description], [smoothness], floating camera movement, [stability], [following_action], [duration], 4K, 24fps, professional steadicam cinematography",
    tags: ["steadicam", "smooth", "floating", "professional"],
    useCase: "Following characters, complex movements, smooth tracking, professional production value",
    tips: [
      "Replace [scene_action] with 'character walking', 'conversation', 'action sequence', 'exploration'",
      "Replace [movement_type] with 'following', 'orbiting', 'leading', 'side tracking', 'backward tracking'",
      "Replace [path_description] with 'through doorway', 'around corner', 'up stairs', 'through crowd'",
      "Replace [smoothness] with 'buttery smooth', 'gliding', 'seamless', 'fluid movement'",
      "Replace [stability] with 'rock steady', 'perfectly stable', 'no shake', 'professional stability'",
      "Replace [following_action] with 'subject in frame', 'maintains composition', 'dynamic framing'",
      "Replace [duration] with 'long take', 'extended sequence', 'continuous shot'",
      "Previously required: Steadicam rig ($20,000+), trained operator ($500-1000/day), practice time",
      "Now accessible via AI - professional Steadicam results instantly"
    ],
    example: "character walking through crowded market, steadicam sequence, following movement type, through crowd path, buttery smooth movement, floating camera movement, rock steady stability, subject in frame, long take duration, 4K, 24fps, professional steadicam cinematography"
  },
  {
    id: "rack-focus-dramatic",
    title: "Rack Focus - Dramatic Shift",
    category: "video-production",
    tool: "runway",
    description: "Professional rack focus - previously required cinema lens and focus puller",
    prompt: "[scene_setup], rack focus shot, focus shifts from [start_focus] to [end_focus], [focus_speed], [depth_of_field], [subject_reveal], [dramatic_timing], cinematic focus pull, [impact], 4K, 24fps, professional rack focus",
    tags: ["rack-focus", "focus-pull", "dramatic", "cinematic"],
    useCase: "Attention shifts, dramatic reveals, emotional emphasis, narrative focus changes",
    tips: [
      "Replace [scene_setup] with 'two subjects', 'foreground to background', 'object to character'",
      "Replace [start_focus] with 'foreground sharp', 'background sharp', 'first subject', 'object in focus'",
      "Replace [end_focus] with 'background sharp', 'foreground sharp', 'second subject', 'character in focus'",
      "Replace [focus_speed] with 'slow pull', 'quick shift', 'gradual transition', 'dramatic snap'",
      "Replace [depth_of_field] with 'shallow DOF', 'deep focus', 'selective focus', 'bokeh background'",
      "Replace [subject_reveal] with 'character reveal', 'plot element', 'emotional moment', 'surprise'",
      "Replace [dramatic_timing] with 'timed to dialogue', 'emotional beat', 'narrative moment'",
      "Replace [impact] with 'dramatic', 'subtle', 'powerful', 'revealing'",
      "Previously required: Cinema lens ($5,000+), focus puller ($300-500/day), precise timing",
      "Now accessible via AI - perfect rack focus without equipment or crew"
    ],
    example: "two subjects in conversation, rack focus shot, focus shifts from foreground sharp to background sharp, slow pull focus speed, shallow DOF depth of field, character reveal subject, timed to dialogue dramatic timing, cinematic focus pull, powerful impact, 4K, 24fps, professional rack focus"
  },
  {
    id: "time-lapse-cinematic",
    title: "Time-Lapse - Cinematic Compression",
    category: "video-production",
    tool: "runway",
    description: "Professional time-lapse - previously required intervalometer and hours of shooting",
    prompt: "[subject_matter], cinematic time-lapse, [time_compression], [movement_type], [lighting_changes], [speed_variation], [composition], [duration], [atmosphere], 4K, 24fps, professional time-lapse cinematography",
    tags: ["time-lapse", "compression", "cinematic", "time"],
    useCase: "Time passage, city life, natural phenomena, construction, weather changes",
    tips: [
      "Replace [subject_matter] with 'city traffic', 'clouds', 'sunset', 'construction site', 'crowd movement'",
      "Replace [time_compression] with 'hours to minutes', 'days to seconds', 'extreme compression'",
      "Replace [movement_type] with 'static camera', 'slow pan', 'dolly movement', 'orbiting'",
      "Replace [lighting_changes] with 'day to night', 'sunrise transition', 'lighting evolution'",
      "Replace [speed_variation] with 'smooth acceleration', 'variable speed', 'consistent pace'",
      "Replace [composition] with 'rule of thirds', 'symmetrical', 'leading lines', 'dynamic framing'",
      "Replace [duration] with '30 seconds', '1 minute', 'extended sequence'",
      "Replace [atmosphere] with 'dramatic', 'peaceful', 'energetic', 'contemplative'",
      "Previously required: Intervalometer, hours/days of shooting, storage, post-processing",
      "Now accessible via AI - instant cinematic time-lapse"
    ],
    example: "city traffic at sunset, cinematic time-lapse, hours to minutes compression, slow pan movement, day to night lighting changes, smooth acceleration speed, rule of thirds composition, 1 minute duration, dramatic atmosphere, 4K, 24fps, professional time-lapse cinematography"
  },
  {
    id: "slow-motion-cinematic",
    title: "Slow Motion - High-Speed Cinematography",
    category: "video-production",
    tool: "runway",
    description: "Professional slow motion - previously required high-speed cameras ($50,000+)",
    prompt: "[action_subject], cinematic slow motion, [speed_factor], [frame_rate_equivalent], [detail_capture], [movement_grace], [focus_technique], [lighting_quality], [dramatic_impact], 4K, professional slow motion cinematography",
    tags: ["slow-motion", "high-speed", "cinematic", "dramatic"],
    useCase: "Action sequences, emotional moments, detail emphasis, dramatic impact, sports cinematography",
    tips: [
      "Replace [action_subject] with 'water splash', 'character movement', 'object impact', 'nature element'",
      "Replace [speed_factor] with '2x slow', '4x slow', '8x slow', 'extreme slow motion'",
      "Replace [frame_rate_equivalent] with '120fps', '240fps', '480fps', '1000fps'",
      "Replace [detail_capture] with 'micro details', 'texture visible', 'particle effects', 'fluid dynamics'",
      "Replace [movement_grace] with 'fluid motion', 'graceful movement', 'elegant flow'",
      "Replace [focus_technique] with 'rack focus', 'shallow DOF', 'deep focus', 'selective focus'",
      "Replace [lighting_quality] with 'high key', 'dramatic lighting', 'natural light', 'studio quality'",
      "Replace [dramatic_impact] with 'powerful', 'emotional', 'visually stunning', 'impactful'",
      "Previously required: High-speed camera ($50,000+), specialized lighting, post-processing",
      "Now accessible via AI - cinematic slow motion without expensive equipment"
    ],
    example: "water splash impact, cinematic slow motion, 4x slow speed factor, 240fps equivalent, micro details capture, fluid motion grace, shallow DOF focus, dramatic lighting quality, powerful dramatic impact, 4K, professional slow motion cinematography"
  },
  {
    id: "drone-aerial-cinematic",
    title: "Drone Aerial - Cinematic Overhead",
    category: "video-production",
    tool: "runway",
    description: "Professional drone cinematography - previously required $15,000+ drone and licensed pilot",
    prompt: "[location_subject], drone aerial cinematography, [flight_pattern], [altitude_range], [camera_angle], [movement_style], [reveal_type], [stability], [cinematic_quality], 4K, 24fps, professional aerial cinematography",
    tags: ["drone", "aerial", "overhead", "cinematic"],
    useCase: "Location reveals, epic landscapes, architectural showcases, event coverage, nature cinematography",
    tips: [
      "Replace [location_subject] with 'mountain range', 'cityscape', 'coastline', 'forest', 'urban area'",
      "Replace [flight_pattern] with 'orbiting', 'ascending', 'descending', 'forward tracking', 'lateral movement'",
      "Replace [altitude_range] with 'low altitude', 'medium height', 'high altitude', 'extreme height'",
      "Replace [camera_angle] with 'straight down', '45-degree angle', 'horizontal', 'tilting reveal'",
      "Replace [movement_style] with 'smooth', 'dynamic', 'gradual', 'dramatic'",
      "Replace [reveal_type] with 'location reveal', 'scale reveal', 'topographic reveal'",
      "Replace [stability] with 'rock steady', 'gimbal smooth', 'professional stability'",
      "Replace [cinematic_quality] with 'epic', 'dramatic', 'breathtaking', 'professional'",
      "Previously required: Professional drone ($15,000+), licensed pilot, insurance, permits",
      "Now accessible via AI - cinematic aerial shots without regulations or costs"
    ],
    example: "mountain range at golden hour, drone aerial cinematography, orbiting flight pattern, medium height altitude, 45-degree angle camera, smooth movement style, location reveal type, rock steady stability, epic cinematic quality, 4K, 24fps, professional aerial cinematography"
  },
  {
    id: "gimbal-orbital",
    title: "Gimbal Orbital - 360 Movement",
    category: "video-production",
    tool: "runway",
    description: "Smooth gimbal orbital - previously required $5,000+ gimbal and skilled operator",
    prompt: "[subject_center], gimbal orbital shot, [orbit_radius], [movement_speed], [camera_angle], [focus_technique], [smoothness], [duration], [cinematic_effect], 4K, 24fps, professional gimbal cinematography",
    tags: ["gimbal", "orbital", "360", "smooth"],
    useCase: "Product showcases, character reveals, object focus, dynamic introductions, commercial cinematography",
    tips: [
      "Replace [subject_center] with 'product', 'character', 'object', 'vehicle', 'architecture'",
      "Replace [orbit_radius] with 'tight orbit', 'medium radius', 'wide orbit', 'full 360'",
      "Replace [movement_speed] with 'slow orbit', 'moderate speed', 'dynamic movement'",
      "Replace [camera_angle] with 'eye level', 'slight high angle', 'low angle', 'variable angle'",
      "Replace [focus_technique] with 'subject stays sharp', 'rack focus', 'shallow DOF', 'deep focus'",
      "Replace [smoothness] with 'buttery smooth', 'seamless', 'professional gimbal smooth'",
      "Replace [duration] with 'full rotation', 'partial orbit', 'extended sequence'",
      "Replace [cinematic_effect] with 'dramatic', 'elegant', 'professional', 'dynamic'",
      "Previously required: 3-axis gimbal ($5,000+), skilled operator, practice time",
      "Now accessible via AI - perfect orbital shots instantly"
    ],
    example: "luxury product on pedestal, gimbal orbital shot, medium radius orbit, slow orbit speed, eye level camera angle, subject stays sharp focus, buttery smooth movement, full rotation duration, elegant cinematic effect, 4K, 24fps, professional gimbal cinematography"
  },
  {
    id: "bullet-time-effect",
    title: "Bullet Time - Matrix Effect",
    category: "video-production",
    tool: "runway",
    description: "Iconic bullet time effect - previously required 100+ cameras and complex rigging",
    prompt: "[action_moment], bullet time effect, [camera_array_simulation], [time_freeze], [perspective_rotation], [subject_movement], [background_blur], [dramatic_impact], [technical_precision], 4K, professional bullet time cinematography",
    tags: ["bullet-time", "matrix", "freeze", "advanced"],
    useCase: "Action sequences, dramatic moments, visual effects, high-impact scenes",
    tips: [
      "Replace [action_moment] with 'jump', 'dodge', 'impact', 'movement', 'action sequence'",
      "Replace [camera_array_simulation] with '360 camera array', 'arc movement', 'orbital perspective'",
      "Replace [time_freeze] with 'frozen moment', 'slow motion freeze', 'time suspension'",
      "Replace [perspective_rotation] with 'camera rotates', 'perspective shift', 'viewing angle change'",
      "Replace [subject_movement] with 'subject frozen', 'minimal movement', 'slow motion'",
      "Replace [background_blur] with 'motion blur', 'radial blur', 'dramatic blur'",
      "Replace [dramatic_impact] with 'powerful', 'visually stunning', 'dramatic', 'impactful'",
      "Replace [technical_precision] with 'perfect timing', 'seamless', 'professional execution'",
      "Previously required: 100+ cameras, complex rigging, post-processing, $100,000+ budget",
      "Now accessible via AI - iconic bullet time without massive production"
    ],
    example: "character mid-jump, bullet time effect, 360 camera array simulation, frozen moment time freeze, camera rotates perspective, subject frozen movement, motion blur background, powerful dramatic impact, perfect timing technical precision, 4K, professional bullet time cinematography"
  },
  {
    id: "anamorphic-cinematic",
    title: "Anamorphic Lens - Cinematic Widescreen",
    category: "video-production",
    tool: "runway",
    description: "Anamorphic cinematography - previously required $20,000+ anamorphic lenses",
    prompt: "[scene_description], anamorphic cinematography, [aspect_ratio], [lens_flare], [bokeh_characteristics], [distortion_style], [cinematic_look], [color_rendering], [professional_quality], 4K, 24fps, anamorphic lens cinematography",
    tags: ["anamorphic", "widescreen", "cinematic", "lens"],
    useCase: "Epic landscapes, cinematic storytelling, commercial work, high-end production value",
    tips: [
      "Replace [scene_description] with scene context: 'landscape', 'portrait', 'action', 'dialogue'",
      "Replace [aspect_ratio] with '2.39:1', '2.35:1', 'cinematic widescreen', 'ultra-wide'",
      "Replace [lens_flare] with 'horizontal flares', 'anamorphic flares', 'subtle flares', 'dramatic flares'",
      "Replace [bokeh_characteristics] with 'oval bokeh', 'anamorphic bokeh', 'unique bokeh shape'",
      "Replace [distortion_style] with 'subtle distortion', 'characteristic anamorphic look', 'minimal distortion'",
      "Replace [cinematic_look] with 'epic', 'cinematic', 'film-like', 'professional'",
      "Replace [color_rendering] with 'warm tones', 'cinematic color', 'film stock look'",
      "Replace [professional_quality] with 'high-end', 'premium', 'cinema quality'",
      "Previously required: Anamorphic lens ($20,000+), compatible camera, specialized knowledge",
      "Now accessible via AI - anamorphic look without expensive lenses"
    ],
    example: "epic landscape at golden hour, anamorphic cinematography, 2.39:1 aspect ratio, horizontal flares lens flare, oval bokeh characteristics, characteristic anamorphic look distortion, epic cinematic look, warm tones color rendering, high-end professional quality, 4K, 24fps, anamorphic lens cinematography"
  },
  {
    id: "macro-cinematic",
    title: "Macro Cinematography - Extreme Close-Up",
    category: "video-production",
    tool: "runway",
    description: "Professional macro cinematography - previously required $10,000+ macro lenses and specialized rigs",
    prompt: "[micro_subject], macro cinematography, [magnification_level], [detail_revelation], [focus_technique], [lighting_macro], [depth_control], [texture_capture], [cinematic_quality], 4K, professional macro cinematography",
    tags: ["macro", "close-up", "detail", "micro"],
    useCase: "Product details, nature close-ups, texture reveals, scientific documentation, artistic cinematography",
    tips: [
      "Replace [micro_subject] with 'water droplet', 'texture', 'small object', 'insect', 'product detail'",
      "Replace [magnification_level] with 'extreme close-up', '1:1 macro', 'super macro', 'microscopic view'",
      "Replace [detail_revelation] with 'unseen details', 'texture visible', 'microscopic features'",
      "Replace [focus_technique] with 'focus stacking', 'shallow DOF', 'selective focus', 'rack focus'",
      "Replace [lighting_macro] with 'ring light', 'soft macro lighting', 'dramatic macro light'",
      "Replace [depth_control] with 'ultra-shallow DOF', 'selective focus', 'bokeh background'",
      "Replace [texture_capture] with 'texture detail', 'surface quality', 'material characteristics'",
      "Replace [cinematic_quality] with 'stunning', 'detailed', 'professional', 'artistic'",
      "Previously required: Macro lens ($10,000+), focus rail, specialized lighting, patience",
      "Now accessible via AI - perfect macro shots instantly"
    ],
    example: "water droplet on leaf, macro cinematography, 1:1 macro magnification, unseen details revelation, focus stacking technique, soft macro lighting, ultra-shallow DOF depth, texture detail capture, stunning cinematic quality, 4K, professional macro cinematography"
  },
  {
    id: "underwater-cinematic",
    title: "Underwater Cinematography - Aquatic Scene",
    category: "video-production",
    tool: "runway",
    description: "Professional underwater cinematography - previously required waterproof housing ($15,000+) and diving equipment",
    prompt: "[underwater_scene], underwater cinematography, [water_clarity], [lighting_underwater], [camera_movement], [buoyancy_simulation], [color_correction], [atmosphere], [professional_quality], 4K, 24fps, professional underwater cinematography",
    tags: ["underwater", "aquatic", "diving", "cinematic"],
    useCase: "Swimming scenes, aquatic life, underwater exploration, commercial work, documentary cinematography",
    tips: [
      "Replace [underwater_scene] with 'swimmer', 'coral reef', 'underwater landscape', 'aquatic life'",
      "Replace [water_clarity] with 'crystal clear', 'natural clarity', 'ocean water', 'pool clarity'",
      "Replace [lighting_underwater] with 'natural light', 'underwater lighting', 'caustic patterns', 'sunlight rays'",
      "Replace [camera_movement] with 'floating movement', 'swimming camera', 'smooth underwater', 'diving camera'",
      "Replace [buoyancy_simulation] with 'natural buoyancy', 'weightless feel', 'underwater physics'",
      "Replace [color_correction] with 'blue tones', 'natural colors', 'underwater color grade'",
      "Replace [atmosphere] with 'peaceful', 'dramatic', 'mysterious', 'serene'",
      "Replace [professional_quality] with 'high-end', 'cinematic', 'documentary quality'",
      "Previously required: Underwater housing ($15,000+), diving certification, safety equipment",
      "Now accessible via AI - underwater cinematography without equipment or risks"
    ],
    example: "swimmer in ocean, underwater cinematography, crystal clear water clarity, natural light underwater, floating movement camera, natural buoyancy simulation, blue tones color correction, peaceful atmosphere, high-end professional quality, 4K, 24fps, professional underwater cinematography"
  },
  {
    id: "night-cinematography",
    title: "Night Cinematography - Low Light Mastery",
    category: "video-production",
    tool: "runway",
    description: "Professional night cinematography - previously required high-end low-light cameras and specialized lighting",
    prompt: "[night_scene], night cinematography, [lighting_setup], [exposure_technique], [color_temperature], [atmosphere_night], [detail_preservation], [noise_control], [cinematic_quality], 4K, 24fps, professional night cinematography",
    tags: ["night", "low-light", "cinematic", "atmospheric"],
    useCase: "Night scenes, urban nightlife, dramatic lighting, moody atmospheres, film noir style",
    tips: [
      "Replace [night_scene] with 'city at night', 'interior night', 'outdoor night', 'nighttime event'",
      "Replace [lighting_setup] with 'practical lights', 'neon lighting', 'moonlight', 'street lighting'",
      "Replace [exposure_technique] with 'proper exposure', 'low light mastery', 'shadow detail'",
      "Replace [color_temperature] with 'warm tones', 'cool tones', 'mixed lighting', 'cinematic color'",
      "Replace [atmosphere_night] with 'moody', 'dramatic', 'mysterious', 'energetic', 'romantic'",
      "Replace [detail_preservation] with 'shadow detail', 'highlight preservation', 'full dynamic range'",
      "Replace [noise_control] with 'clean image', 'minimal noise', 'professional quality'",
      "Replace [cinematic_quality] with 'film-like', 'cinematic', 'professional', 'high-end'",
      "Previously required: High-end low-light camera ($30,000+), specialized lighting, color grading",
      "Now accessible via AI - perfect night cinematography without expensive gear"
    ],
    example: "city at night with neon signs, night cinematography, practical lights and neon setup, proper exposure technique, mixed lighting color temperature, moody atmosphere, shadow detail preservation, clean image noise control, film-like cinematic quality, 4K, 24fps, professional night cinematography"
  },
  {
    id: "split-screen-narrative",
    title: "Split Screen - Parallel Narrative",
    category: "video-production",
    tool: "runway",
    description: "Professional split screen - previously required complex editing and precise timing",
    prompt: "[narrative_context], split screen composition, [split_type], [synchronization], [visual_connection], [narrative_parallel], [timing_precision], [cinematic_effect], [professional_execution], 4K, 24fps, professional split screen",
    tags: ["split-screen", "parallel", "narrative", "editing"],
    useCase: "Parallel stories, simultaneous actions, comparison sequences, narrative complexity",
    tips: [
      "Replace [narrative_context] with 'two characters', 'parallel events', 'simultaneous actions'",
      "Replace [split_type] with 'vertical split', 'horizontal split', 'diagonal split', 'multiple panels'",
      "Replace [synchronization] with 'synchronized action', 'parallel timing', 'coordinated movement'",
      "Replace [visual_connection] with 'visual match', 'thematic link', 'compositional harmony'",
      "Replace [narrative_parallel] with 'parallel stories', 'simultaneous events', 'contrasting actions'",
      "Replace [timing_precision] with 'perfect timing', 'synchronized', 'coordinated'",
      "Replace [cinematic_effect] with 'dramatic', 'engaging', 'narrative complexity'",
      "Replace [professional_execution] with 'seamless', 'polished', 'professional'",
      "Previously required: Complex editing, precise timing, multiple camera setups",
      "Now accessible via AI - perfect split screen compositions"
    ],
    example: "two characters in different locations, split screen composition, vertical split type, synchronized action synchronization, visual match connection, parallel stories narrative, perfect timing precision, dramatic cinematic effect, seamless professional execution, 4K, 24fps, professional split screen"
  },
  {
    id: "tilt-shift-miniature",
    title: "Tilt-Shift - Miniature Effect",
    category: "video-production",
    tool: "runway",
    description: "Tilt-shift miniature effect - previously required $3,000+ tilt-shift lens",
    prompt: "[scene_subject], tilt-shift miniature effect, [focus_band], [perspective_control], [miniature_illusion], [selective_focus], [scale_perception], [cinematic_style], [artistic_effect], 4K, 24fps, professional tilt-shift cinematography",
    tags: ["tilt-shift", "miniature", "selective", "artistic"],
    useCase: "Miniature effects, creative perspectives, artistic cinematography, unique visual style",
    tips: [
      "Replace [scene_subject] with 'cityscape', 'crowd scene', 'landscape', 'urban area'",
      "Replace [focus_band] with 'narrow focus band', 'selective focus area', 'sharp focus zone'",
      "Replace [perspective_control] with 'perspective correction', 'tilt effect', 'shift control'",
      "Replace [miniature_illusion] with 'miniature look', 'toy-like appearance', 'scale illusion'",
      "Replace [selective_focus] with 'selective sharpness', 'band of focus', 'blurred edges'",
      "Replace [scale_perception] with 'miniature scale', 'toy-like', 'reduced scale feel'",
      "Replace [cinematic_style] with 'artistic', 'creative', 'unique', 'stylized'",
      "Replace [artistic_effect] with 'dreamlike', 'whimsical', 'creative', 'artistic'",
      "Previously required: Tilt-shift lens ($3,000+), specialized knowledge, precise technique",
      "Now accessible via AI - tilt-shift effects without expensive lenses"
    ],
    example: "cityscape from above, tilt-shift miniature effect, narrow focus band, perspective correction control, miniature look illusion, selective sharpness focus, toy-like scale perception, artistic cinematic style, dreamlike artistic effect, 4K, 24fps, professional tilt-shift cinematography"
  },
  {
    id: "hyperlapse-urban",
    title: "Hyperlapse - Urban Movement",
    category: "video-production",
    tool: "runway",
    description: "Professional hyperlapse - previously required precise frame alignment and hours of shooting",
    prompt: "[urban_location], hyperlapse sequence, [movement_path], [time_compression], [stabilization], [frame_alignment], [speed_variation], [cinematic_flow], [professional_quality], 4K, 24fps, professional hyperlapse cinematography",
    tags: ["hyperlapse", "urban", "movement", "time"],
    useCase: "Urban exploration, location showcases, dynamic movement, time compression, commercial work",
    tips: [
      "Replace [urban_location] with 'city street', 'urban area', 'downtown', 'cityscape'",
      "Replace [movement_path] with 'forward movement', 'lateral movement', 'orbital path', 'complex route'",
      "Replace [time_compression] with 'extreme compression', 'hours to seconds', 'rapid time passage'",
      "Replace [stabilization] with 'rock steady', 'perfectly stable', 'smooth stabilization'",
      "Replace [frame_alignment] with 'precise alignment', 'seamless frames', 'perfect registration'",
      "Replace [speed_variation] with 'consistent speed', 'variable pace', 'smooth acceleration'",
      "Replace [cinematic_flow] with 'smooth flow', 'dynamic movement', 'cinematic motion'",
      "Replace [professional_quality] with 'high-end', 'polished', 'professional'",
      "Previously required: Precise frame alignment, hours of shooting, stabilization software, patience",
      "Now accessible via AI - perfect hyperlapse instantly"
    ],
    example: "city street during day, hyperlapse sequence, forward movement path, hours to seconds compression, rock steady stabilization, precise frame alignment, consistent speed variation, smooth flow cinematic, high-end professional quality, 4K, 24fps, professional hyperlapse cinematography"
  },
  {
    id: "motion-control-precision",
    title: "Motion Control - Precise Repetition",
    category: "video-production",
    tool: "runway",
    description: "Motion control cinematography - previously required $100,000+ motion control rigs",
    prompt: "[subject_action], motion control cinematography, [precise_repetition], [camera_movement], [timing_accuracy], [composition_consistency], [technical_precision], [cinematic_effect], [professional_execution], 4K, 24fps, professional motion control",
    tags: ["motion-control", "precision", "repetition", "technical"],
    useCase: "Product showcases, VFX work, time-lapse effects, precise camera movements, commercial cinematography",
    tips: [
      "Replace [subject_action] with 'product rotation', 'character movement', 'object transformation'",
      "Replace [precise_repetition] with 'exact repetition', 'perfect loop', 'identical movements'",
      "Replace [camera_movement] with 'programmed movement', 'precise path', 'repeatable motion'",
      "Replace [timing_accuracy] with 'frame-perfect', 'precise timing', 'synchronized'",
      "Replace [composition_consistency] with 'identical framing', 'consistent composition', 'perfect match'",
      "Replace [technical_precision] with 'technical perfection', 'flawless execution', 'precise control'",
      "Replace [cinematic_effect] with 'dramatic', 'professional', 'polished'",
      "Replace [professional_execution] with 'high-end', 'premium', 'cinema quality'",
      "Previously required: Motion control rig ($100,000+), programming, technical expertise",
      "Now accessible via AI - motion control precision without expensive equipment"
    ],
    example: "luxury product rotation, motion control cinematography, exact repetition precise, programmed movement camera, frame-perfect timing, identical framing composition, technical perfection precision, dramatic cinematic effect, high-end professional execution, 4K, 24fps, professional motion control"
  },
  {
    id: "360-vr-cinematic",
    title: "360 VR - Immersive Cinematography",
    category: "video-production",
    tool: "runway",
    description: "Professional 360 VR - previously required specialized 360 cameras and VR expertise",
    prompt: "[vr_scene], 360 VR cinematography, [immersive_environment], [viewer_perspective], [spatial_audio_simulation], [interaction_potential], [vr_quality], [immersion_level], [professional_execution], 4K, professional 360 VR cinematography",
    tags: ["360", "vr", "immersive", "spatial"],
    useCase: "VR experiences, immersive storytelling, virtual tours, interactive content, spatial cinematography",
    tips: [
      "Replace [vr_scene] with 'virtual environment', 'immersive space', 'VR location', 'spatial scene'",
      "Replace [immersive_environment] with 'fully immersive', 'spatial depth', '3D environment'",
      "Replace [viewer_perspective] with 'first-person', 'immersive POV', 'spatial presence'",
      "Replace [spatial_audio_simulation] with 'spatial audio', '3D sound', 'immersive audio'",
      "Replace [interaction_potential] with 'interactive elements', 'explorable space', 'engagement'",
      "Replace [vr_quality] with 'high-resolution', 'seamless', 'professional VR'",
      "Replace [immersion_level] with 'fully immersive', 'presence', 'realistic'",
      "Replace [professional_execution] with 'premium', 'high-end', 'professional'",
      "Previously required: 360 camera ($10,000+), VR expertise, specialized software, post-processing",
      "Now accessible via AI - 360 VR cinematography without specialized equipment"
    ],
    example: "virtual mountain landscape, 360 VR cinematography, fully immersive environment, first-person viewer perspective, spatial audio simulation, explorable space interaction, high-resolution VR quality, fully immersive level, premium professional execution, 4K, professional 360 VR cinematography"
  },
  {
    id: "light-painting-cinematic",
    title: "Light Painting - Long Exposure Art",
    category: "video-production",
    tool: "runway",
    description: "Light painting cinematography - previously required long exposures and precise timing",
    prompt: "[light_painting_scene], light painting cinematography, [exposure_technique], [light_movement], [pattern_creation], [color_combination], [artistic_effect], [cinematic_quality], [professional_execution], 4K, professional light painting",
    tags: ["light-painting", "long-exposure", "artistic", "creative"],
    useCase: "Artistic sequences, creative visuals, commercial work, experimental cinematography, visual effects",
    tips: [
      "Replace [light_painting_scene] with 'dark environment', 'night scene', 'studio setup', 'outdoor night'",
      "Replace [exposure_technique] with 'long exposure', 'extended exposure', 'time exposure'",
      "Replace [light_movement] with 'light trails', 'orbital light', 'drawing patterns', 'light choreography'",
      "Replace [pattern_creation] with 'geometric patterns', 'organic shapes', 'abstract designs', 'precise patterns'",
      "Replace [color_combination] with 'multicolor', 'single color', 'gradient colors', 'color mixing'",
      "Replace [artistic_effect] with 'artistic', 'creative', 'stunning', 'visually striking'",
      "Replace [cinematic_quality] with 'cinematic', 'professional', 'high-end'",
      "Replace [professional_execution] with 'polished', 'premium', 'professional'",
      "Previously required: Long exposure setup, precise timing, light sources, patience",
      "Now accessible via AI - light painting effects instantly"
    ],
    example: "dark studio environment, light painting cinematography, long exposure technique, light trails movement, geometric patterns creation, multicolor combination, stunning artistic effect, cinematic quality, polished professional execution, 4K, professional light painting"
  },
  {
    id: "camera-rig-complex",
    title: "Complex Camera Rig - Multi-Axis Movement",
    category: "video-production",
    tool: "runway",
    description: "Complex multi-axis camera movement - previously required expensive rigs and multiple operators",
    prompt: "[scene_context], complex camera rig movement, [axis_combination], [movement_coordination], [precision_timing], [smooth_execution], [technical_complexity], [cinematic_effect], [professional_quality], 4K, 24fps, professional complex rig cinematography",
    tags: ["camera-rig", "multi-axis", "complex", "technical"],
    useCase: "Complex movements, product showcases, architectural cinematography, high-end commercial work",
    tips: [
      "Replace [scene_context] with scene description: 'product reveal', 'architectural showcase', 'action sequence'",
      "Replace [axis_combination] with 'pan + tilt + dolly', 'multi-axis movement', 'complex coordination'",
      "Replace [movement_coordination] with 'synchronized movement', 'coordinated axes', 'precise timing'",
      "Replace [precision_timing] with 'frame-perfect', 'precise', 'synchronized'",
      "Replace [smooth_execution] with 'seamless', 'buttery smooth', 'professional smoothness'",
      "Replace [technical_complexity] with 'high complexity', 'advanced technique', 'technical mastery'",
      "Replace [cinematic_effect] with 'dramatic', 'impressive', 'professional'",
      "Replace [professional_quality] with 'high-end', 'premium', 'cinema quality'",
      "Previously required: Complex rig ($50,000+), multiple operators, precise coordination",
      "Now accessible via AI - complex movements without expensive rigs or crew"
    ],
    example: "luxury product reveal, complex camera rig movement, pan + tilt + dolly axis combination, synchronized movement coordination, frame-perfect precision timing, seamless smooth execution, high complexity technical, dramatic cinematic effect, high-end professional quality, 4K, 24fps, professional complex rig cinematography"
  },
  
  // High-Quality 3D Visualization Prompts - Professional Grade
  {
    id: "architectural-walkthrough",
    title: "Architectural Walkthrough - Interior Visualization",
    category: "3d-visualization",
    tool: "luma",
    description: "Professional architectural interior walkthrough with realistic materials and lighting",
    prompt: "architectural interior walkthrough, [space_type], [lighting_setup], [material_quality], [camera_path], [detail_level], [atmosphere], photorealistic rendering, professional architectural visualization, 4K quality",
    tags: ["architectural", "interior", "walkthrough", "professional"],
    useCase: "Real estate visualization, architectural presentations, interior design, property marketing",
    tips: [
      "Replace [space_type] with 'modern living room', 'luxury kitchen', 'office space', 'retail store'",
      "Replace [lighting_setup] with 'natural daylight', 'warm interior lighting', 'dramatic shadows', 'even illumination'",
      "Replace [material_quality] with 'realistic materials', 'PBR materials', 'high-quality textures', 'material accuracy'",
      "Replace [camera_path] with 'smooth walkthrough', 'guided tour', 'exploration path', 'cinematic movement'",
      "Replace [detail_level] with 'high detail', 'photorealistic', 'architectural accuracy', 'professional quality'",
      "Replace [atmosphere] with 'welcoming', 'sophisticated', 'modern', 'luxurious'",
      "Use for professional architectural visualization and real estate marketing"
    ],
    example: "architectural interior walkthrough, modern living room space, natural daylight lighting, realistic PBR materials, smooth walkthrough camera path, photorealistic detail level, sophisticated atmosphere, photorealistic rendering, professional architectural visualization, 4K quality"
  },
  {
    id: "product-visualization-3d",
    title: "Product Visualization - 3D Render",
    category: "3d-visualization",
    tool: "luma",
    description: "High-end product visualization with studio-quality lighting and materials",
    prompt: "3D product visualization, [product_type], [material_specification], [lighting_studio], [background_style], [camera_angle], [render_quality], [commercial_grade], professional product rendering, 4K quality",
    tags: ["product", "visualization", "commercial", "3d"],
    useCase: "Product marketing, e-commerce, catalog photography, commercial visualization",
    tips: [
      "Replace [product_type] with 'electronics', 'furniture', 'automotive', 'fashion accessory'",
      "Replace [material_specification] with 'metal finish', 'glass material', 'fabric texture', 'wood grain'",
      "Replace [lighting_studio] with 'studio lighting', 'three-point lighting', 'dramatic lighting', 'soft key light'",
      "Replace [background_style] with 'white background', 'lifestyle setting', 'minimalist', 'gradient'",
      "Replace [camera_angle] with 'hero angle', '360 view', 'detail shot', 'lifestyle angle'",
      "Replace [render_quality] with 'photorealistic', 'commercial quality', 'high-end rendering', 'studio quality'",
      "Replace [commercial_grade] with 'catalog ready', 'marketing quality', 'e-commerce optimized'",
      "Use for professional product visualization and commercial applications"
    ],
    example: "3D product visualization, luxury watch product, metal and glass materials, three-point studio lighting, white background style, hero angle camera, photorealistic render quality, catalog ready commercial grade, professional product rendering, 4K quality"
  },
  {
    id: "character-rigging-ready",
    title: "Character Model - Animation Ready",
    category: "3d-visualization",
    tool: "luma",
    description: "Production-ready character model optimized for animation and rigging",
    prompt: "3D character model, [character_type], [style_specification], [topology_quality], [rigging_ready], [texture_resolution], [animation_optimized], [production_ready], professional character modeling, game/animation ready",
    tags: ["character", "animation", "rigging", "professional"],
    useCase: "Game development, animation production, character design, VFX work",
    tips: [
      "Replace [character_type] with 'humanoid', 'creature', 'stylized character', 'realistic character'",
      "Replace [style_specification] with 'realistic', 'stylized', 'low poly', 'high poly'",
      "Replace [topology_quality] with 'clean topology', 'edge flow optimized', 'animation-friendly', 'subdivision ready'",
      "Replace [rigging_ready] with 'rigging-friendly', 'deformation ready', 'joint placement', 'weight painting ready'",
      "Replace [texture_resolution] with '4K textures', 'PBR materials', 'normal maps', 'texture atlas'",
      "Replace [animation_optimized] with 'animation-ready', 'blend shapes', 'facial rig ready', 'motion capture compatible'",
      "Replace [production_ready] with 'production quality', 'studio ready', 'pipeline compatible'",
      "Use for professional animation and game development pipelines"
    ],
    example: "3D character model, humanoid character type, stylized style, clean topology quality, rigging-friendly ready, 4K PBR textures, animation-ready optimized, production quality ready, professional character modeling, game/animation ready"
  },
  {
    id: "environment-3d-game",
    title: "Game Environment - Modular Assets",
    category: "3d-visualization",
    tool: "luma",
    description: "Modular game environment with optimized assets for real-time rendering",
    prompt: "3D game environment, [environment_type], [modular_design], [optimization_level], [texture_style], [lighting_setup], [performance_optimized], [game_engine_ready], professional game asset creation",
    tags: ["game", "environment", "modular", "optimized"],
    useCase: "Game development, level design, real-time rendering, game asset creation",
    tips: [
      "Replace [environment_type] with 'urban city', 'natural landscape', 'interior space', 'fantasy world'",
      "Replace [modular_design] with 'modular pieces', 'tileable assets', 'reusable components', 'snap-together system'",
      "Replace [optimization_level] with 'LOD ready', 'optimized geometry', 'efficient polygons', 'performance optimized'",
      "Replace [texture_style] with 'stylized textures', 'realistic PBR', 'hand-painted', 'procedural materials'",
      "Replace [lighting_setup] with 'baked lighting', 'real-time lighting', 'lightmap ready', 'dynamic lighting compatible'",
      "Replace [performance_optimized] with '60fps target', 'mobile optimized', 'console ready', 'PC optimized'",
      "Replace [game_engine_ready] with 'Unity ready', 'Unreal ready', 'export optimized', 'engine compatible'",
      "Use for professional game development and real-time rendering"
    ],
    example: "3D game environment, urban city environment, modular tileable assets design, LOD ready optimization, realistic PBR textures, baked lighting setup, 60fps performance optimized, Unity ready game engine, professional game asset creation"
  },
  {
    id: "vehicle-3d-detailed",
    title: "Vehicle Model - Automotive Grade",
    category: "3d-visualization",
    tool: "luma",
    description: "High-detail vehicle model with realistic materials and accurate proportions",
    prompt: "3D vehicle model, [vehicle_type], [detail_level], [material_accuracy], [proportion_precision], [interior_detail], [exterior_quality], [automotive_grade], professional automotive visualization, 4K quality",
    tags: ["vehicle", "automotive", "detailed", "professional"],
    useCase: "Automotive marketing, car configurators, advertising, product visualization",
    tips: [
      "Replace [vehicle_type] with 'luxury sedan', 'sports car', 'SUV', 'electric vehicle'",
      "Replace [detail_level] with 'high detail', 'production quality', 'photorealistic', 'commercial grade'",
      "Replace [material_accuracy] with 'realistic paint', 'chrome materials', 'glass quality', 'interior materials'",
      "Replace [proportion_precision] with 'accurate proportions', 'manufacturer specs', 'scale accurate', 'dimensionally correct'",
      "Replace [interior_detail] with 'detailed interior', 'dashboard accuracy', 'seat materials', 'interior lighting'",
      "Replace [exterior_quality] with 'body panel accuracy', 'wheel detail', 'lighting accuracy', 'aerodynamic details'",
      "Replace [automotive_grade] with 'marketing ready', 'configurator quality', 'advertising grade'",
      "Use for professional automotive visualization and marketing"
    ],
    example: "3D vehicle model, luxury sports car type, production quality detail, realistic paint and chrome materials, manufacturer spec proportions, detailed interior with dashboard, body panel accuracy exterior, marketing ready automotive grade, professional automotive visualization, 4K quality"
  },
  
  // Workflow Prompts - Multi-Step Processes
  {
    id: "brand-identity-workflow",
    title: "Brand Identity Workflow - Complete System",
    category: "design-branding",
    tool: "midjourney",
    description: "Complete brand identity workflow from logo to full visual system",
    prompt: "STEP 1: [logo_design] | STEP 2: [color_palette] | STEP 3: [typography_system] | STEP 4: [application_examples] | STEP 5: [brand_guidelines], consistent brand identity, professional workflow, cohesive visual system",
    tags: ["workflow", "brand", "identity", "system"],
    useCase: "Brand development, rebranding projects, startup identity, complete brand systems",
    tips: [
      "STEP 1: Replace [logo_design] with 'create primary logo', 'design mark', 'wordmark development'",
      "STEP 2: Replace [color_palette] with 'define brand colors', 'primary and secondary palette', 'color combinations'",
      "STEP 3: Replace [typography_system] with 'select brand fonts', 'heading and body styles', 'typography hierarchy'",
      "STEP 4: Replace [application_examples] with 'business card design', 'letterhead', 'social media templates'",
      "STEP 5: Replace [brand_guidelines] with 'usage guidelines', 'do's and don'ts', 'brand standards'",
      "Use as a complete workflow for brand identity development",
      "Each step builds on the previous for cohesive brand system"
    ],
    example: "STEP 1: create minimalist logo mark | STEP 2: define blue and white brand colors | STEP 3: select modern sans-serif typography | STEP 4: design business card and letterhead applications | STEP 5: establish usage guidelines and brand standards, consistent brand identity, professional workflow, cohesive visual system"
  },
  {
    id: "product-launch-workflow",
    title: "Product Launch Workflow - Marketing Assets",
    category: "design-branding",
    tool: "midjourney",
    description: "Complete product launch workflow from concept to marketing materials",
    prompt: "STEP 1: [product_visualization] | STEP 2: [packaging_design] | STEP 3: [marketing_graphics] | STEP 4: [social_media_assets] | STEP 5: [advertising_materials], product launch workflow, consistent branding, professional marketing system",
    tags: ["workflow", "product", "launch", "marketing"],
    useCase: "Product launches, marketing campaigns, brand consistency, multi-channel marketing",
    tips: [
      "STEP 1: Replace [product_visualization] with 'product photography', '3D renders', 'lifestyle shots'",
      "STEP 2: Replace [packaging_design] with 'box design', 'label design', 'unboxing experience'",
      "STEP 3: Replace [marketing_graphics] with 'banner ads', 'print materials', 'web graphics'",
      "STEP 4: Replace [social_media_assets] with 'Instagram posts', 'Facebook covers', 'story templates'",
      "STEP 5: Replace [advertising_materials] with 'billboard designs', 'magazine ads', 'digital campaigns'",
      "Use for complete product launch marketing workflow",
      "Ensures brand consistency across all touchpoints"
    ],
    example: "STEP 1: professional product photography with lifestyle context | STEP 2: minimalist box design with premium feel | STEP 3: banner ads and web graphics | STEP 4: Instagram post templates and story designs | STEP 5: magazine ad layouts and digital campaign assets, product launch workflow, consistent branding, professional marketing system"
  },
  {
    id: "video-production-workflow",
    title: "Video Production Workflow - Pre to Post",
    category: "video-production",
    tool: "runway",
    description: "Complete video production workflow from pre-production to final delivery",
    prompt: "STEP 1: [pre_production] | STEP 2: [production_shooting] | STEP 3: [post_production] | STEP 4: [color_grading] | STEP 5: [final_delivery], professional video workflow, cinematic quality, production pipeline",
    tags: ["workflow", "video", "production", "pipeline"],
    useCase: "Video production, content creation, commercial work, film production",
    tips: [
      "STEP 1: Replace [pre_production] with 'storyboard creation', 'shot list', 'location scouting', 'talent casting'",
      "STEP 2: Replace [production_shooting] with 'principal photography', 'B-roll capture', 'audio recording', 'coverage shots'",
      "STEP 3: Replace [post_production] with 'editing', 'sound design', 'visual effects', 'motion graphics'",
      "STEP 4: Replace [color_grading] with 'color correction', 'look development', 'final grade', 'cinematic color'",
      "STEP 5: Replace [final_delivery] with 'export formats', 'compression', 'delivery specs', 'quality control'",
      "Use for professional video production pipeline",
      "Ensures quality and consistency throughout production"
    ],
    example: "STEP 1: create detailed storyboard and shot list | STEP 2: capture principal photography with B-roll | STEP 3: edit with sound design and motion graphics | STEP 4: apply cinematic color grade | STEP 5: export in multiple formats for delivery, professional video workflow, cinematic quality, production pipeline"
  },
  
  // Industry-Specific Prompts - High Quality
  {
    id: "fashion-photography-studio",
    title: "Fashion Photography - Editorial Style",
    category: "photography",
    tool: "midjourney",
    description: "Professional fashion photography with editorial quality and high-end aesthetic",
    prompt: "fashion photography, [garment_type], [model_styling], [editorial_style], [lighting_fashion], [composition_editorial], [mood_fashion], [magazine_quality], professional fashion photography, 8K, editorial grade",
    tags: ["fashion", "editorial", "photography", "professional"],
    useCase: "Fashion editorials, lookbook photography, brand campaigns, magazine spreads",
    tips: [
      "Replace [garment_type] with 'couture dress', 'streetwear', 'luxury accessories', 'seasonal collection'",
      "Replace [model_styling] with 'editorial styling', 'high fashion', 'runway look', 'editorial makeup'",
      "Replace [editorial_style] with 'high fashion', 'editorial', 'avant-garde', 'minimalist fashion'",
      "Replace [lighting_fashion] with 'dramatic fashion lighting', 'soft editorial light', 'studio fashion lighting', 'natural fashion light'",
      "Replace [composition_editorial] with 'editorial framing', 'fashion composition', 'magazine layout', 'editorial crop'",
      "Replace [mood_fashion] with 'sophisticated', 'edgy', 'elegant', 'bold', 'minimalist'",
      "Replace [magazine_quality] with 'Vogue quality', 'editorial grade', 'magazine ready', 'high-end fashion'",
      "Use for professional fashion photography and editorial work"
    ],
    example: "fashion photography, couture evening dress garment, high fashion editorial styling, avant-garde editorial style, dramatic studio fashion lighting, editorial framing composition, sophisticated mood, Vogue quality magazine grade, professional fashion photography, 8K, editorial grade"
  },
  {
    id: "automotive-showcase",
    title: "Automotive Showcase - Car Photography",
    category: "photography",
    tool: "midjourney",
    description: "Professional automotive photography with dynamic angles and premium presentation",
    prompt: "automotive photography, [vehicle_model], [shooting_location], [camera_angles], [lighting_automotive], [background_style], [mood_automotive], [commercial_grade], professional automotive photography, 8K, commercial quality",
    tags: ["automotive", "car", "commercial", "professional"],
    useCase: "Car marketing, dealership photography, automotive advertising, luxury vehicle showcases",
    tips: [
      "Replace [vehicle_model] with 'luxury sedan', 'sports car', 'SUV', 'electric vehicle', 'classic car'",
      "Replace [shooting_location] with 'studio white', 'urban setting', 'scenic backdrop', 'showroom', 'outdoor location'",
      "Replace [camera_angles] with 'hero angle', 'three-quarter view', 'low angle dramatic', 'detail shots', 'interior shots'",
      "Replace [lighting_automotive] with 'studio car lighting', 'natural light', 'dramatic lighting', 'even illumination'",
      "Replace [background_style] with 'clean background', 'lifestyle setting', 'minimalist', 'dramatic backdrop'",
      "Replace [mood_automotive] with 'luxury', 'sporty', 'sophisticated', 'powerful', 'premium'",
      "Replace [commercial_grade] with 'advertising quality', 'catalog ready', 'marketing grade', 'commercial standard'",
      "Use for professional automotive marketing and commercial photography"
    ],
    example: "automotive photography, luxury sports car model, urban setting location, low angle dramatic camera angles, studio car lighting setup, clean minimalist background, sophisticated luxury mood, advertising quality commercial grade, professional automotive photography, 8K, commercial quality"
  },
  {
    id: "real-estate-interior",
    title: "Real Estate Interior - Property Showcase",
    category: "photography",
    tool: "midjourney",
    description: "Professional real estate photography optimized for property listings and marketing",
    prompt: "real estate photography, [property_type], [room_type], [lighting_real_estate], [composition_property], [styling_level], [market_ready], [professional_grade], real estate photography, 8K, listing quality",
    tags: ["real-estate", "property", "interior", "commercial"],
    useCase: "Property listings, real estate marketing, virtual tours, property showcases",
    tips: [
      "Replace [property_type] with 'luxury home', 'apartment', 'commercial space', 'vacation rental'",
      "Replace [room_type] with 'living room', 'kitchen', 'bedroom', 'bathroom', 'exterior'",
      "Replace [lighting_real_estate] with 'natural window light', 'even interior lighting', 'HDR technique', 'professional real estate lighting'",
      "Replace [composition_property] with 'wide angle', 'corner shot', 'symmetrical', 'leading lines', 'room overview'",
      "Replace [styling_level] with 'staged', 'minimal staging', 'lifestyle styling', 'neutral staging'",
      "Replace [market_ready] with 'listing ready', 'MLS quality', 'marketing grade', 'professional listing'",
      "Replace [professional_grade] with 'real estate professional', 'commercial quality', 'high-end listing'",
      "Use for professional real estate marketing and property listings"
    ],
    example: "real estate photography, luxury modern home property, open concept living room, natural window light with even interior lighting, wide angle corner shot composition, minimal staging styling, listing ready market quality, real estate professional grade, real estate photography, 8K, listing quality"
  },
  {
    id: "fashion-runway-video",
    title: "Fashion Runway - Show Production",
    category: "video-production",
    tool: "runway",
    description: "Professional fashion runway video with editorial cinematography",
    prompt: "fashion runway video, [show_type], [camera_coverage], [lighting_runway], [editing_style], [mood_fashion_video], [production_value], [editorial_quality], professional fashion video, 4K, 24fps, runway cinematography",
    tags: ["fashion", "runway", "editorial", "professional"],
    useCase: "Fashion shows, runway presentations, brand videos, fashion week coverage",
    tips: [
      "Replace [show_type] with 'couture show', 'ready-to-wear', 'menswear', 'accessories show'",
      "Replace [camera_coverage] with 'multiple angles', 'runway tracking', 'detail shots', 'wide establishing'",
      "Replace [lighting_runway] with 'runway lighting', 'dramatic fashion light', 'editorial lighting', 'show lighting'",
      "Replace [editing_style] with 'fast-paced cuts', 'editorial pacing', 'smooth transitions', 'fashion editing'",
      "Replace [mood_fashion_video] with 'sophisticated', 'energetic', 'elegant', 'avant-garde'",
      "Replace [production_value] with 'high production', 'editorial grade', 'fashion week quality'",
      "Replace [editorial_quality] with 'Vogue quality', 'magazine video', 'editorial standard'",
      "Use for professional fashion show production and editorial video"
    ],
    example: "fashion runway video, couture show type, multiple angles with runway tracking coverage, dramatic runway lighting, fast-paced editorial cuts editing, sophisticated mood, high production value, Vogue quality editorial, professional fashion video, 4K, 24fps, runway cinematography"
  },
  {
    id: "automotive-commercial-video",
    title: "Automotive Commercial - Car Marketing Video",
    category: "video-production",
    tool: "runway",
    description: "Professional automotive commercial video with dynamic cinematography",
    prompt: "automotive commercial video, [vehicle_focus], [driving_scenes], [camera_techniques], [location_variety], [editing_pace], [commercial_style], [advertising_grade], professional automotive video, 4K, 24fps, commercial cinematography",
    tags: ["automotive", "commercial", "advertising", "professional"],
    useCase: "Car commercials, automotive advertising, brand videos, dealership marketing",
    tips: [
      "Replace [vehicle_focus] with 'luxury sedan', 'sports car', 'SUV', 'electric vehicle'",
      "Replace [driving_scenes] with 'scenic drives', 'urban driving', 'highway sequences', 'off-road'",
      "Replace [camera_techniques] with 'tracking shots', 'drone footage', 'low angle', 'hero shots'",
      "Replace [location_variety] with 'mountain roads', 'city streets', 'coastal drives', 'desert landscapes'",
      "Replace [editing_pace] with 'dynamic editing', 'smooth transitions', 'fast-paced', 'cinematic pacing'",
      "Replace [commercial_style] with 'luxury', 'sporty', 'adventure', 'sophisticated'",
      "Replace [advertising_grade] with 'TV commercial quality', 'advertising standard', 'commercial grade'",
      "Use for professional automotive advertising and commercial production"
    ],
    example: "automotive commercial video, luxury sports car focus, scenic mountain drives and urban sequences, tracking shots with drone footage techniques, mountain roads and city streets locations, dynamic fast-paced editing, sophisticated luxury style, TV commercial quality advertising grade, professional automotive video, 4K, 24fps, commercial cinematography"
  },
  {
    id: "real-estate-virtual-tour",
    title: "Real Estate Virtual Tour - Property Walkthrough",
    category: "video-production",
    tool: "runway",
    description: "Professional real estate virtual tour video for property marketing",
    prompt: "real estate virtual tour, [property_type], [tour_path], [camera_movement], [lighting_property], [styling_level], [professional_quality], [marketing_ready], real estate video tour, 4K, 24fps, property cinematography",
    tags: ["real-estate", "virtual-tour", "property", "marketing"],
    useCase: "Property marketing, virtual tours, real estate listings, property showcases",
    tips: [
      "Replace [property_type] with 'luxury home', 'apartment', 'commercial property', 'vacation rental'",
      "Replace [tour_path] with 'logical flow', 'room to room', 'exterior to interior', 'guided tour'",
      "Replace [camera_movement] with 'smooth walkthrough', 'steady movement', 'gentle pans', 'professional tracking'",
      "Replace [lighting_property] with 'natural light', 'even illumination', 'professional lighting', 'HDR quality'",
      "Replace [styling_level] with 'staged property', 'minimal staging', 'lifestyle styling', 'neutral presentation'",
      "Replace [professional_quality] with 'real estate professional', 'listing quality', 'marketing grade'",
      "Replace [marketing_ready] with 'listing ready', 'MLS quality', 'virtual tour standard'",
      "Use for professional real estate marketing and virtual property tours"
    ],
    example: "real estate virtual tour, luxury modern home property, logical room-to-room tour path, smooth walkthrough camera movement, natural light with even illumination, staged property styling, real estate professional quality, listing ready marketing, real estate video tour, 4K, 24fps, property cinematography"
  },
  
  // LLM Workflow Prompts - High-Quality Professional Prompts
  {
    id: "llm-content-strategy",
    title: "Content Strategy Development",
    category: "llm-workflows",
    tool: "chatgpt",
    description: "Develop comprehensive content strategy with audience analysis, content pillars, and distribution plan",
    prompt: "Develop a comprehensive content strategy for [brand/industry]. Include: 1) Target audience analysis with demographics, psychographics, and pain points, 2) Content pillars (3-5 main themes), 3) Content formats and channels, 4) Content calendar framework (weekly/monthly), 5) KPIs and success metrics, 6) Competitive analysis insights. Provide actionable recommendations with specific examples.",
    tags: ["llm", "strategy", "content", "marketing", "professional"],
    useCase: "Content planning, marketing strategy, brand development, social media planning",
    tips: [
      "Replace [brand/industry] with specific brand name or industry",
      "Specify content goals: 'brand awareness', 'lead generation', 'engagement', 'sales'",
      "Add industry context: 'B2B tech', 'consumer goods', 'services', 'e-commerce'",
      "Request specific formats: 'blog posts', 'social media', 'video scripts', 'email campaigns'",
      "Include timeline: 'Q1 strategy', 'annual plan', 'campaign-specific'"
    ],
    example: "Develop a comprehensive content strategy for a B2B SaaS company. Include: 1) Target audience analysis with demographics, psychographics, and pain points, 2) Content pillars (3-5 main themes), 3) Content formats and channels, 4) Content calendar framework (weekly/monthly), 5) KPIs and success metrics, 6) Competitive analysis insights. Provide actionable recommendations with specific examples."
  },
  {
    id: "llm-code-review",
    title: "Comprehensive Code Review",
    category: "llm-workflows",
    tool: "claude",
    description: "Professional code review with security, performance, and best practices analysis",
    prompt: "Review this code for: 1) Security vulnerabilities and potential exploits, 2) Performance bottlenecks and optimization opportunities, 3) Code quality and maintainability (SOLID principles, DRY, readability), 4) Error handling and edge cases, 5) Testing coverage recommendations, 6) Documentation needs. Provide specific, actionable feedback with code examples for improvements.\n\n[Code here]",
    tags: ["llm", "coding", "review", "security", "professional"],
    useCase: "Code quality assurance, security audits, performance optimization, team code reviews",
    tips: [
      "Paste complete code or function for best results",
      "Specify language and framework: 'Python', 'JavaScript/React', 'TypeScript', 'Go'",
      "Add context: 'production code', 'prototype', 'legacy system'",
      "Request focus areas: 'security only', 'performance focus', 'comprehensive review'",
      "Include requirements: 'must be production-ready', 'needs to scale', 'security-critical'"
    ],
    example: "Review this Python API endpoint code for: 1) Security vulnerabilities and potential exploits, 2) Performance bottlenecks and optimization opportunities, 3) Code quality and maintainability (SOLID principles, DRY, readability), 4) Error handling and edge cases, 5) Testing coverage recommendations, 6) Documentation needs. Provide specific, actionable feedback with code examples for improvements."
  },
  {
    id: "llm-research-synthesis",
    title: "Research Paper Synthesis",
    category: "llm-workflows",
    tool: "gemini",
    description: "Synthesize multiple research sources into comprehensive analysis with citations",
    prompt: "Synthesize the following research sources on [topic]: [Sources/URLs]. Provide: 1) Key findings and consensus points, 2) Conflicting viewpoints and debates, 3) Methodological approaches used, 4) Gaps in current research, 5) Practical implications and applications, 6) Future research directions. Include proper citations and maintain academic rigor.",
    tags: ["llm", "research", "academic", "analysis", "professional"],
    useCase: "Literature reviews, research papers, competitive analysis, market research, academic writing",
    tips: [
      "Replace [topic] with specific research topic",
      "Provide multiple sources: research papers, articles, reports",
      "Specify output format: 'academic paper', 'executive summary', 'detailed analysis'",
      "Add requirements: 'include statistics', 'focus on recent studies', 'compare methodologies'",
      "Request citation style: 'APA', 'MLA', 'Chicago', 'IEEE'"
    ],
    example: "Synthesize the following research sources on AI in healthcare: [5 research papers]. Provide: 1) Key findings and consensus points, 2) Conflicting viewpoints and debates, 3) Methodological approaches used, 4) Gaps in current research, 5) Practical implications and applications, 6) Future research directions. Include proper citations and maintain academic rigor."
  },
  {
    id: "llm-business-plan",
    title: "Business Plan Development",
    category: "llm-workflows",
    tool: "claude",
    description: "Create comprehensive business plan with market analysis, financial projections, and strategy",
    prompt: "Develop a comprehensive business plan for [business idea/product]. Include: 1) Executive summary, 2) Market analysis (target market, competition, market size), 3) Product/service description and value proposition, 4) Marketing and sales strategy, 5) Operations plan, 6) Management team and organizational structure, 7) Financial projections (3-year), 8) Funding requirements and use of funds, 9) Risk analysis and mitigation strategies. Make it investor-ready and professional.",
    tags: ["llm", "business", "strategy", "planning", "professional"],
    useCase: "Startup planning, investor pitches, business development, strategic planning",
    tips: [
      "Replace [business idea/product] with specific business concept",
      "Specify industry: 'SaaS', 'e-commerce', 'services', 'manufacturing'",
      "Add target audience: 'B2B', 'B2C', 'enterprise', 'SMB'",
      "Include funding stage: 'seed', 'Series A', 'bootstrapped'",
      "Request specific sections: 'focus on financials', 'detailed market analysis', 'competitive positioning'"
    ],
    example: "Develop a comprehensive business plan for a B2B SaaS productivity tool. Include: 1) Executive summary, 2) Market analysis (target market, competition, market size), 3) Product/service description and value proposition, 4) Marketing and sales strategy, 5) Operations plan, 6) Management team and organizational structure, 7) Financial projections (3-year), 8) Funding requirements and use of funds, 9) Risk analysis and mitigation strategies. Make it investor-ready and professional."
  },
  {
    id: "llm-technical-documentation",
    title: "Technical Documentation Writer",
    category: "llm-workflows",
    tool: "claude",
    description: "Create comprehensive technical documentation with code examples, API references, and tutorials",
    prompt: "Write comprehensive technical documentation for [product/API/feature]. Include: 1) Overview and architecture, 2) Getting started guide with prerequisites, 3) Installation and setup instructions, 4) API reference with endpoints, parameters, and examples, 5) Code examples in [languages], 6) Common use cases and workflows, 7) Troubleshooting guide, 8) Best practices and patterns. Make it clear, accurate, and developer-friendly.",
    tags: ["llm", "documentation", "technical", "developer", "professional"],
    useCase: "API documentation, developer guides, technical writing, product documentation, onboarding",
    tips: [
      "Replace [product/API/feature] with specific technology",
      "Specify languages: 'Python, JavaScript, Go', 'REST API', 'GraphQL'",
      "Add audience level: 'beginner-friendly', 'intermediate', 'advanced developers'",
      "Include format requirements: 'Markdown', 'HTML', 'PDF-ready'",
      "Request specific sections: 'focus on API', 'include diagrams', 'add code samples'"
    ],
    example: "Write comprehensive technical documentation for a REST API. Include: 1) Overview and architecture, 2) Getting started guide with prerequisites, 3) Installation and setup instructions, 4) API reference with endpoints, parameters, and examples, 5) Code examples in Python, JavaScript, and cURL, 6) Common use cases and workflows, 7) Troubleshooting guide, 8) Best practices and patterns. Make it clear, accurate, and developer-friendly."
  },
  {
    id: "llm-email-campaign",
    title: "Email Marketing Campaign",
    category: "llm-workflows",
    tool: "chatgpt",
    description: "Create complete email marketing campaign with sequences, subject lines, and A/B test variants",
    prompt: "Create a complete email marketing campaign for [product/service/promotion]. Include: 1) Campaign objective and target audience, 2) Email sequence (welcome, nurture, conversion) with 5-7 emails, 3) Subject lines for each email with A/B test variants, 4) Email body copy for each stage, 5) Call-to-action (CTA) strategies, 6) Personalization opportunities, 7) Timing and send schedule recommendations. Make it conversion-focused and engaging.",
    tags: ["llm", "marketing", "email", "campaign", "professional"],
    useCase: "Email marketing, lead nurturing, customer onboarding, promotional campaigns, sales sequences",
    tips: [
      "Replace [product/service/promotion] with specific offering",
      "Specify campaign type: 'welcome series', 'product launch', 're-engagement', 'educational'",
      "Add audience: 'new subscribers', 'existing customers', 'leads', 'trial users'",
      "Include goals: 'conversion', 'engagement', 'education', 'retention'",
      "Request tone: 'professional', 'casual', 'conversational', 'sales-focused'"
    ],
    example: "Create a complete email marketing campaign for a SaaS product launch. Include: 1) Campaign objective and target audience, 2) Email sequence (welcome, nurture, conversion) with 5-7 emails, 3) Subject lines for each email with A/B test variants, 4) Email body copy for each stage, 5) Call-to-action (CTA) strategies, 6) Personalization opportunities, 7) Timing and send schedule recommendations. Make it conversion-focused and engaging."
  },
  {
    id: "llm-data-analysis",
    title: "Data Analysis & Insights",
    category: "llm-workflows",
    tool: "gemini",
    description: "Analyze datasets and extract actionable insights with visualizations and recommendations",
    prompt: "Analyze this dataset: [data/description]. Provide: 1) Data quality assessment and cleaning recommendations, 2) Key statistics and summary metrics, 3) Trend analysis and patterns identified, 4) Correlation analysis between variables, 5) Outliers and anomalies detected, 6) Visualizations recommended (chart types), 7) Actionable insights and business recommendations, 8) Questions to explore further. Make it data-driven and actionable.",
    tags: ["llm", "data", "analysis", "insights", "professional"],
    useCase: "Business intelligence, data analysis, reporting, research, decision-making",
    tips: [
      "Provide data or describe dataset structure",
      "Specify data type: 'sales data', 'user behavior', 'survey results', 'time series'",
      "Add analysis goals: 'identify trends', 'find correlations', 'predict outcomes', 'segment users'",
      "Include context: 'Q4 sales', 'user retention', 'product performance'",
      "Request specific outputs: 'executive summary', 'detailed analysis', 'visualization suggestions'"
    ],
    example: "Analyze this customer behavior dataset: [CSV data]. Provide: 1) Data quality assessment and cleaning recommendations, 2) Key statistics and summary metrics, 3) Trend analysis and patterns identified, 4) Correlation analysis between variables, 5) Outliers and anomalies detected, 6) Visualizations recommended (chart types), 7) Actionable insights and business recommendations, 8) Questions to explore further. Make it data-driven and actionable."
  },
  {
    id: "llm-legal-review",
    title: "Legal Document Review",
    category: "llm-workflows",
    tool: "claude",
    description: "Review legal documents for key terms, risks, and compliance requirements",
    prompt: "Review this [legal document type]: [document]. Identify: 1) Key terms and obligations for each party, 2) Potential risks and red flags, 3) Compliance requirements and regulatory considerations, 4) Termination and breach conditions, 5) Intellectual property and confidentiality provisions, 6) Dispute resolution mechanisms, 7) Recommended modifications or clarifications, 8) Questions to discuss with legal counsel. Provide clear, structured analysis.",
    tags: ["llm", "legal", "review", "compliance", "professional"],
    useCase: "Contract review, legal analysis, compliance checking, risk assessment, due diligence",
    tips: [
      "Replace [legal document type] with 'contract', 'agreement', 'terms of service', 'NDA'",
      "Specify document context: 'vendor agreement', 'employment contract', 'partnership agreement'",
      "Add focus areas: 'IP rights', 'liability', 'payment terms', 'termination clauses'",
      "Include jurisdiction: 'US law', 'EU GDPR', 'state-specific'",
      "Request format: 'executive summary', 'detailed analysis', 'risk matrix'"
    ],
    example: "Review this vendor service agreement: [contract text]. Identify: 1) Key terms and obligations for each party, 2) Potential risks and red flags, 3) Compliance requirements and regulatory considerations, 4) Termination and breach conditions, 5) Intellectual property and confidentiality provisions, 6) Dispute resolution mechanisms, 7) Recommended modifications or clarifications, 8) Questions to discuss with legal counsel. Provide clear, structured analysis."
  },
  {
    id: "llm-product-strategy",
    title: "Product Strategy & Roadmap",
    category: "llm-workflows",
    tool: "claude",
    description: "Develop product strategy with feature prioritization, user research, and roadmap planning",
    prompt: "Develop a comprehensive product strategy for [product/feature]. Include: 1) User research synthesis and persona development, 2) Competitive analysis and market positioning, 3) Feature prioritization framework (RICE, value vs effort), 4) Product roadmap (3-6-12 months), 5) Success metrics and KPIs, 6) Go-to-market strategy, 7) Risk assessment and mitigation, 8) Resource requirements. Make it actionable and data-driven.",
    tags: ["llm", "product", "strategy", "roadmap", "professional"],
    useCase: "Product planning, feature development, roadmap creation, strategic planning, product management",
    tips: [
      "Replace [product/feature] with specific product or feature area",
      "Specify product stage: 'MVP', 'growth', 'mature', 'pivot'",
      "Add user research data: 'survey results', 'user interviews', 'analytics data'",
      "Include constraints: 'budget', 'timeline', 'team size', 'technical limitations'",
      "Request focus: 'feature prioritization', 'user experience', 'technical architecture', 'market strategy'"
    ],
    example: "Develop a comprehensive product strategy for a mobile app feature. Include: 1) User research synthesis and persona development, 2) Competitive analysis and market positioning, 3) Feature prioritization framework (RICE, value vs effort), 4) Product roadmap (3-6-12 months), 5) Success metrics and KPIs, 6) Go-to-market strategy, 7) Risk assessment and mitigation, 8) Resource requirements. Make it actionable and data-driven."
  },
  {
    id: "llm-meeting-notes",
    title: "Meeting Notes & Action Items",
    category: "llm-workflows",
    tool: "claude",
    description: "Transform meeting transcripts into structured notes with action items and decisions",
    prompt: "Convert this meeting transcript into structured notes: [transcript]. Include: 1) Meeting summary and key topics discussed, 2) Decisions made and rationale, 3) Action items with owners and deadlines, 4) Open questions and follow-ups needed, 5) Key insights and takeaways, 6) Next steps and timeline. Format clearly with sections and bullet points.",
    tags: ["llm", "productivity", "meetings", "notes", "professional"],
    useCase: "Meeting documentation, team communication, project management, decision tracking",
    tips: [
      "Paste meeting transcript or notes",
      "Specify meeting type: 'standup', 'planning', 'retrospective', 'client meeting'",
      "Add participants: 'team members', 'stakeholders', 'external parties'",
      "Include context: 'sprint planning', 'project kickoff', 'status update'",
      "Request format: 'executive summary', 'detailed notes', 'action items only'"
    ],
    example: "Convert this team standup meeting transcript into structured notes: [transcript]. Include: 1) Meeting summary and key topics discussed, 2) Decisions made and rationale, 3) Action items with owners and deadlines, 4) Open questions and follow-ups needed, 5) Key insights and takeaways, 6) Next steps and timeline. Format clearly with sections and bullet points."
  },
  
  // Advanced Image Generation Prompts - Richer, More Detailed
  {
    id: "hyperrealistic-portrait",
    title: "Hyperrealistic Portrait - Studio Quality",
    category: "photography",
    tool: "nano-banana",
    description: "Create hyperrealistic portraits with professional studio lighting and detail",
    prompt: "hyperrealistic portrait of [subject], professional studio photography, [lighting_setup], [camera_settings], [facial_features], [expression], [styling], [background], [color_grading], [technical_specs], 8K resolution, ultra-detailed, photorealistic, professional photography",
    tags: ["portrait", "hyperrealistic", "studio", "professional", "detailed"],
    useCase: "Professional headshots, portfolio work, character design, high-end photography",
    tips: [
      "Replace [subject] with specific person or character description",
      "Replace [lighting_setup] with 'Rembrandt lighting', 'butterfly lighting', 'split lighting', 'loop lighting'",
      "Replace [camera_settings] with '85mm lens', 'f/2.8 aperture', 'shallow depth of field', 'ISO 100'",
      "Replace [facial_features] with 'sharp focus on eyes', 'natural skin texture', 'detailed hair', 'expressive features'",
      "Replace [expression] with 'confident smile', 'serious gaze', 'warm expression', 'professional demeanor'",
      "Replace [styling] with 'business professional', 'casual elegant', 'editorial fashion', 'minimalist'",
      "Replace [background] with 'solid color', 'gradient', 'studio backdrop', 'bokeh effect'",
      "Replace [color_grading] with 'warm tones', 'cool tones', 'neutral', 'cinematic color'",
      "Replace [technical_specs] with 'high resolution', 'sharp focus', 'professional quality', 'commercial ready'"
    ],
    example: "hyperrealistic portrait of a professional business executive, professional studio photography, Rembrandt lighting setup, 85mm lens f/2.8 aperture shallow depth of field, sharp focus on eyes with natural skin texture, confident professional expression, business professional styling, solid dark gray background, warm professional color grading, 8K resolution ultra-detailed, photorealistic, professional photography"
  },
  {
    id: "cinematic-landscape",
    title: "Cinematic Landscape - Ansel Adams Style",
    category: "photography",
    tool: "midjourney",
    description: "Create dramatic cinematic landscapes with Ansel Adams-inspired composition and lighting",
    prompt: "cinematic landscape photography, [location], [time_of_day], [weather_conditions], [composition_style], [lighting_dramatic], [color_palette], [foreground_midground_background], [atmospheric_elements], [camera_technique], [mood], Ansel Adams inspired, zone system, dramatic contrast, 8K, professional landscape photography",
    tags: ["landscape", "cinematic", "dramatic", "professional", "artistic"],
    useCase: "Fine art photography, nature photography, travel content, wall art, portfolio work",
    tips: [
      "Replace [location] with 'mountain range', 'coastal scene', 'desert', 'forest', 'valley'",
      "Replace [time_of_day] with 'golden hour', 'blue hour', 'sunrise', 'sunset', 'dramatic clouds'",
      "Replace [weather_conditions] with 'clear skies', 'stormy', 'misty', 'dramatic clouds', 'fog'",
      "Replace [composition_style] with 'rule of thirds', 'leading lines', 'symmetrical', 'foreground interest'",
      "Replace [lighting_dramatic] with 'dramatic side lighting', 'backlighting', 'rim lighting', 'god rays'",
      "Replace [color_palette] with 'warm earth tones', 'cool blues', 'monochrome', 'vibrant colors'",
      "Replace [foreground_midground_background] with specific elements for depth",
      "Replace [atmospheric_elements] with 'fog', 'mist', 'dust particles', 'rain', 'snow'",
      "Replace [camera_technique] with 'long exposure', 'HDR', 'focus stacking', 'wide angle'",
      "Replace [mood] with 'epic', 'serene', 'dramatic', 'mysterious', 'inspiring'"
    ],
    example: "cinematic landscape photography, mountain range at sunrise location, golden hour time, dramatic clouds weather, rule of thirds composition, dramatic side lighting with god rays, warm earth tones palette, rocky foreground with valley midground and peaks background, atmospheric mist elements, wide angle long exposure technique, epic inspiring mood, Ansel Adams inspired zone system, dramatic contrast, 8K, professional landscape photography"
  },
  {
    id: "product-lifestyle",
    title: "Product Lifestyle Photography - Editorial",
    category: "photography",
    tool: "seedream",
    description: "Create editorial-quality product lifestyle shots with authentic context and styling",
    prompt: "editorial product lifestyle photography, [product], [lifestyle_context], [setting], [styling], [composition], [lighting_natural], [color_scheme], [mood], [props_styling], [camera_angle], [depth_of_field], [post_processing], commercial photography, 8K, professional lifestyle photography",
    tags: ["product", "lifestyle", "editorial", "commercial", "professional"],
    useCase: "E-commerce product pages, marketing campaigns, brand storytelling, social media content",
    tips: [
      "Replace [product] with specific product description",
      "Replace [lifestyle_context] with 'morning routine', 'outdoor adventure', 'home office', 'cozy living'",
      "Replace [setting] with 'modern apartment', 'outdoor setting', 'workspace', 'natural environment'",
      "Replace [styling] with 'minimalist', 'cozy', 'modern', 'rustic', 'luxury'",
      "Replace [composition] with 'centered', 'rule of thirds', 'diagonal', 'layered'",
      "Replace [lighting_natural] with 'window light', 'outdoor natural', 'soft diffused', 'warm ambient'",
      "Replace [color_scheme] with 'warm neutrals', 'cool tones', 'vibrant', 'monochrome'",
      "Replace [mood] with 'relaxed', 'energetic', 'sophisticated', 'inviting'",
      "Replace [props_styling] with relevant lifestyle props",
      "Replace [camera_angle] with 'eye level', 'overhead', 'low angle', 'dramatic angle'",
      "Replace [depth_of_field] with 'shallow focus', 'deep focus', 'selective focus'",
      "Replace [post_processing] with 'natural', 'warm tones', 'high contrast', 'soft'"
    ],
    example: "editorial product lifestyle photography, premium coffee maker product, morning routine lifestyle context, modern kitchen setting, minimalist styling, rule of thirds composition, window light natural lighting, warm neutrals color scheme, relaxed inviting mood, coffee beans and plants props, eye level camera angle, shallow focus depth, natural warm post-processing, commercial photography, 8K, professional lifestyle photography"
  },
  
  // Advanced Video Production Prompts
  {
    id: "cinematic-short-film",
    title: "Cinematic Short Film Sequence",
    category: "video-production",
    tool: "kling",
    description: "Create cinematic short film sequences with narrative structure and visual storytelling",
    prompt: "cinematic short film sequence, [scene_description], [narrative_moment], [visual_style], [camera_movement], [lighting_cinematic], [color_grading], [mood_atmosphere], [pacing], [sound_design], [composition], [transitions], [storytelling_elements], professional cinematography, 4K, 24fps, cinematic quality",
    tags: ["cinematic", "film", "narrative", "storytelling", "professional"],
    useCase: "Short films, narrative content, brand storytelling, artistic projects, portfolio work",
    tips: [
      "Replace [scene_description] with specific scene: 'opening sequence', 'climax', 'resolution'",
      "Replace [narrative_moment] with 'character introduction', 'conflict', 'revelation', 'emotional moment'",
      "Replace [visual_style] with 'film noir', 'documentary', 'fantasy', 'realistic', 'stylized'",
      "Replace [camera_movement] with 'slow dolly', 'handheld', 'static', 'crane shot', 'tracking'",
      "Replace [lighting_cinematic] with 'dramatic shadows', 'soft natural', 'high contrast', 'moody'",
      "Replace [color_grading] with 'warm', 'cool', 'desaturated', 'vibrant', 'monochrome'",
      "Replace [mood_atmosphere] with 'tension', 'melancholy', 'hopeful', 'mysterious', 'intense'",
      "Replace [pacing] with 'slow contemplative', 'fast-paced', 'building tension', 'calm'",
      "Replace [sound_design] with 'ambient', 'dramatic', 'minimal', 'layered'",
      "Replace [composition] with 'symmetrical', 'rule of thirds', 'leading lines', 'framing'",
      "Replace [transitions] with 'smooth', 'cut', 'fade', 'match cut'",
      "Replace [storytelling_elements] with 'visual metaphor', 'symbolism', 'character arc', 'theme'"
    ],
    example: "cinematic short film sequence, opening character introduction scene, mysterious revelation narrative moment, film noir visual style, slow dolly camera movement, dramatic shadows lighting, cool desaturated color grading, mysterious tension mood, slow contemplative pacing, ambient layered sound design, rule of thirds composition, smooth transitions, visual metaphor storytelling, professional cinematography, 4K, 24fps, cinematic quality"
  },
  {
    id: "llm-user-research",
    title: "User Research Synthesis",
    category: "llm-workflows",
    tool: "claude",
    description: "Synthesize user interviews and research into actionable insights and personas",
    prompt: "Synthesize the following user research data: [interviews/surveys/observations]. Create: 1) User personas (3-5) with demographics, goals, pain points, and behaviors, 2) Common themes and patterns across all research, 3) Pain points prioritized by frequency and severity, 4) User journey maps for key personas, 5) Opportunities and recommendations, 6) Quotes and evidence supporting insights, 7) Research gaps and questions for further study. Make it actionable for product and design teams.",
    tags: ["llm", "research", "user", "personas", "professional"],
    useCase: "User research, product design, UX research, customer insights, persona development",
    tips: [
      "Provide interview transcripts, survey results, or observation notes",
      "Specify research goals: 'product discovery', 'feature validation', 'usability testing'",
      "Add context: 'B2B SaaS', 'mobile app', 'e-commerce', 'enterprise software'",
      "Request format: 'detailed personas', 'executive summary', 'design recommendations'",
      "Include user segments: 'new users', 'power users', 'churned users'"
    ],
    example: "Synthesize 15 user interview transcripts about a productivity app. Create: 1) User personas (3-5) with demographics, goals, pain points, and behaviors, 2) Common themes and patterns across all research, 3) Pain points prioritized by frequency and severity, 4) User journey maps for key personas, 5) Opportunities and recommendations, 6) Quotes and evidence supporting insights, 7) Research gaps and questions for further study. Make it actionable for product and design teams."
  },
  {
    id: "llm-api-design",
    title: "API Design & Documentation",
    category: "llm-workflows",
    tool: "chatgpt",
    description: "Design RESTful API with endpoints, schemas, authentication, and comprehensive documentation",
    prompt: "Design a RESTful API for [product/service]. Include: 1) API architecture and design principles (RESTful conventions), 2) Endpoint specifications (GET, POST, PUT, DELETE) with URLs, 3) Request/response schemas (JSON) with field descriptions, 4) Authentication and authorization strategy, 5) Error handling and status codes, 6) Rate limiting and versioning approach, 7) Example requests and responses for each endpoint, 8) Security considerations. Make it production-ready and developer-friendly.",
    tags: ["llm", "api", "development", "technical", "professional"],
    useCase: "API development, system design, technical documentation, backend architecture",
    tips: [
      "Replace [product/service] with specific application or service",
      "Specify API scope: 'user management', 'payment processing', 'data analytics', 'full platform'",
      "Add requirements: 'OAuth 2.0', 'JWT tokens', 'webhook support', 'real-time updates'",
      "Include constraints: 'REST only', 'GraphQL option', 'microservices', 'monolith'",
      "Request format: 'OpenAPI spec', 'Markdown docs', 'code examples'"
    ],
    example: "Design a RESTful API for a task management application. Include: 1) API architecture and design principles (RESTful conventions), 2) Endpoint specifications (GET, POST, PUT, DELETE) with URLs, 3) Request/response schemas (JSON) with field descriptions, 4) Authentication and authorization strategy, 5) Error handling and status codes, 6) Rate limiting and versioning approach, 7) Example requests and responses for each endpoint, 8) Security considerations. Make it production-ready and developer-friendly."
  },
  {
    id: "llm-marketing-copy",
    title: "Marketing Copy - Multi-Channel Campaign",
    category: "llm-workflows",
    tool: "chatgpt",
    description: "Create cohesive marketing copy across multiple channels with brand voice consistency",
    prompt: "Create marketing copy for [campaign/product] across multiple channels. Include: 1) Brand voice guidelines and tone, 2) Social media posts (Instagram, Twitter, LinkedIn) with platform-specific optimization, 3) Email subject lines and body copy, 4) Website landing page copy (headline, subheadline, CTA), 5) Ad copy variations (Google Ads, Facebook Ads), 6) Blog post titles and meta descriptions, 7) Press release or announcement copy. Maintain consistent messaging and brand voice across all channels.",
    tags: ["llm", "marketing", "copywriting", "content", "professional"],
    useCase: "Marketing campaigns, product launches, brand messaging, content creation, advertising",
    tips: [
      "Replace [campaign/product] with specific campaign or product",
      "Specify brand voice: 'professional', 'casual', 'technical', 'friendly', 'luxury'",
      "Add campaign goals: 'awareness', 'conversion', 'engagement', 'education'",
      "Include target audience: 'B2B executives', 'millennials', 'tech enthusiasts', 'general consumers'",
      "Request specific channels: 'focus on social', 'email-heavy', 'full campaign', 'landing page only'"
    ],
    example: "Create marketing copy for a SaaS product launch across multiple channels. Include: 1) Brand voice guidelines and tone, 2) Social media posts (Instagram, Twitter, LinkedIn) with platform-specific optimization, 3) Email subject lines and body copy, 4) Website landing page copy (headline, subheadline, CTA), 5) Ad copy variations (Google Ads, Facebook Ads), 6) Blog post titles and meta descriptions, 7) Press release or announcement copy. Maintain consistent messaging and brand voice across all channels."
  },
  {
    id: "llm-training-material",
    title: "Training Material Development",
    category: "llm-workflows",
    tool: "claude",
    description: "Create comprehensive training materials with learning objectives, content, and assessments",
    prompt: "Develop training materials for [topic/role]. Include: 1) Learning objectives and outcomes, 2) Course outline with modules and lessons, 3) Content for each module (explanations, examples, case studies), 4) Interactive exercises and activities, 5) Assessment questions (knowledge checks, quizzes), 6) Resources and further reading, 7) Implementation guide for trainers. Make it engaging, practical, and effective for adult learners.",
    tags: ["llm", "training", "education", "learning", "professional"],
    useCase: "Employee training, onboarding programs, educational content, skill development, certification prep",
    tips: [
      "Replace [topic/role] with specific training topic or role",
      "Specify audience: 'new employees', 'managers', 'technical team', 'sales team'",
      "Add duration: '1-hour session', 'full day', 'multi-week course', 'self-paced'",
      "Include format: 'in-person', 'online', 'hybrid', 'self-study'",
      "Request focus: 'practical skills', 'theory', 'hands-on', 'certification prep'"
    ],
    example: "Develop training materials for new employee onboarding. Include: 1) Learning objectives and outcomes, 2) Course outline with modules and lessons, 3) Content for each module (explanations, examples, case studies), 4) Interactive exercises and activities, 5) Assessment questions (knowledge checks, quizzes), 6) Resources and further reading, 7) Implementation guide for trainers. Make it engaging, practical, and effective for adult learners."
  },
  {
    id: "advanced-3d-product",
    title: "Advanced 3D Product Visualization",
    category: "3d-visualization",
    tool: "luma",
    description: "Create photorealistic 3D product models with materials, lighting, and environment",
    prompt: "photorealistic 3D product model, [product_description], [material_properties], [texture_details], [lighting_setup], [environment_context], [camera_angle], [rendering_style], [quality_specs], [export_format], professional 3D visualization, high-quality render",
    tags: ["3d", "product", "photorealistic", "visualization", "advanced"],
    useCase: "Product visualization, AR/VR applications, marketing renders, e-commerce, architectural visualization",
    tips: [
      "Replace [product_description] with detailed product specs",
      "Replace [material_properties] with 'metal', 'glass', 'fabric', 'plastic', 'wood', 'ceramic'",
      "Replace [texture_details] with 'rough', 'smooth', 'glossy', 'matte', 'textured', 'weathered'",
      "Replace [lighting_setup] with 'studio lighting', 'natural light', 'three-point lighting', 'HDRI environment'",
      "Replace [environment_context] with 'studio white', 'lifestyle setting', 'minimalist', 'showroom'",
      "Replace [camera_angle] with 'hero angle', 'three-quarter', 'detail shot', '360 view'",
      "Replace [rendering_style] with 'photorealistic', 'stylized', 'technical', 'artistic'",
      "Replace [quality_specs] with '4K', '8K', 'high poly', 'optimized', 'game-ready'",
      "Replace [export_format] with 'OBJ', 'FBX', 'GLTF', 'USDZ', 'STL'"
    ],
    example: "photorealistic 3D product model, premium smartwatch with detailed bezel and strap, brushed titanium metal and leather material properties, smooth polished texture with subtle grain details, studio three-point lighting setup, minimalist white studio environment, hero three-quarter camera angle, photorealistic rendering style, 8K high poly quality specs, GLTF export format, professional 3D visualization, high-quality render"
  },
  {
    id: "music-production-workflow",
    title: "Music Production - Full Track Workflow",
    category: "audio-production",
    tool: "suno",
    description: "Create complete music production workflow from concept to final mix",
    prompt: "Create a complete music track: [genre] style, [tempo] BPM, [key_signature], [mood], [instruments], [structure], [vocal_style], [production_style], [mix_characteristics], [reference_tracks], professional music production, commercial quality",
    tags: ["music", "production", "workflow", "professional", "detailed"],
    useCase: "Music production, song creation, background music, commercial music, creative projects",
    tips: [
      "Replace [genre] with 'pop', 'rock', 'electronic', 'jazz', 'hip-hop', 'ambient'",
      "Replace [tempo] with specific BPM: '120 BPM', '140 BPM', 'slow 80 BPM'",
      "Replace [key_signature] with 'C major', 'A minor', 'E major', or omit for flexibility",
      "Replace [mood] with 'energetic', 'melancholic', 'uplifting', 'dark', 'peaceful', 'intense'",
      "Replace [instruments] with 'guitar, drums, bass, synth', 'piano, strings', 'electronic elements'",
      "Replace [structure] with 'verse-chorus-verse', 'intro-verse-chorus-bridge', 'progressive build'",
      "Replace [vocal_style] with 'male vocals', 'female vocals', 'instrumental', 'harmonies'",
      "Replace [production_style] with 'polished', 'raw', 'layered', 'minimal', 'orchestral'",
      "Replace [mix_characteristics] with 'wide stereo', 'warm', 'bright', 'punchy', 'atmospheric'",
      "Replace [reference_tracks] with similar songs for style reference"
    ],
    example: "Create a complete music track: indie pop style, 128 BPM tempo, C major key, uplifting energetic mood, acoustic guitar drums bass synth instruments, verse-chorus-verse-bridge structure, male vocals with harmonies, polished layered production style, wide stereo warm mix, reference: The 1975 style, professional music production, commercial quality"
  },
  {
    id: "brand-identity-system",
    title: "Complete Brand Identity System",
    category: "design-branding",
    tool: "midjourney",
    description: "Create comprehensive brand identity with logo, color palette, typography, and applications",
    prompt: "brand identity system, [company_name], [industry], [brand_personality], [color_palette], [typography_style], [logo_concept], [visual_style], [application_examples], [brand_guidelines], professional branding, comprehensive identity, 8K, vector style",
    tags: ["branding", "identity", "logo", "design-system", "professional"],
    useCase: "Brand development, rebranding, startup identity, corporate design, visual identity",
    tips: [
      "Replace [company_name] with brand name",
      "Replace [industry] with 'tech', 'fashion', 'food', 'finance', 'healthcare'",
      "Replace [brand_personality] with 'modern', 'luxury', 'playful', 'professional', 'innovative', 'trustworthy'",
      "Replace [color_palette] with specific colors: 'blue and white', 'warm earth tones', 'bold primary colors'",
      "Replace [typography_style] with 'sans-serif modern', 'serif elegant', 'geometric', 'handwritten'",
      "Replace [logo_concept] with 'wordmark', 'symbol', 'combination', 'emblem', 'monogram'",
      "Replace [visual_style] with 'minimalist', 'bold', 'elegant', 'tech-forward', 'organic'",
      "Replace [application_examples] with 'business cards', 'website', 'packaging', 'social media'",
      "Replace [brand_guidelines] with 'usage rules', 'spacing', 'variations', 'don'ts'"
    ],
    example: "brand identity system, TechFlow company, SaaS tech industry, innovative modern brand personality, blue and white with accent orange color palette, sans-serif modern typography, combination wordmark and symbol logo, minimalist tech-forward visual style, business cards website social media applications, clear usage rules and spacing guidelines, professional branding, comprehensive identity, 8K, vector style"
  },
  
  // Development & AI Integration Prompts - Complement Cursor Rules
  {
    id: "ai-assets-for-app",
    title: "Generate App Assets with AI",
    category: "development-ai",
    tool: "midjourney",
    description: "Create complete app asset sets including icons, splash screens, and marketing images",
    prompt: "mobile app asset, [asset_type], [app_theme], [style], [platform], [dimensions], [color_scheme], [brand_elements], [technical_specs], professional app design, export ready",
    tags: ["development", "app", "assets", "mobile", "design"],
    useCase: "App development, mobile design, asset generation, icon creation, marketing materials",
    tips: [
      "Replace [asset_type] with 'app icon', 'splash screen', 'feature graphic', 'screenshot mockup', 'marketing banner'",
      "Replace [app_theme] with 'productivity', 'social', 'gaming', 'finance', 'health', 'education'",
      "Replace [style] with 'minimalist', 'modern', 'playful', 'professional', 'bold', 'elegant'",
      "Replace [platform] with 'iOS', 'Android', 'web app', 'cross-platform'",
      "Replace [dimensions] with '1024x1024', '2048x2732', '1920x1080', 'square', 'portrait'",
      "Replace [color_scheme] with brand colors or 'vibrant', 'monochrome', 'pastel'",
      "Replace [brand_elements] with 'logo integration', 'brand colors', 'typography', 'icon style'",
      "Replace [technical_specs] with 'vector format', 'PNG transparent', 'SVG', 'high resolution'"
    ],
    example: "mobile app asset, app icon asset type, productivity app theme, minimalist modern style, iOS platform, 1024x1024 dimensions, blue and white color scheme, logo integration brand elements, vector format PNG transparent technical specs, professional app design, export ready"
  },
  {
    id: "website-hero-visual",
    title: "Website Hero Section Visual",
    category: "development-ai",
    tool: "nano-banana",
    description: "Create stunning hero section visuals for landing pages and websites",
    prompt: "website hero section visual, [product_concept], [visual_style], [composition], [color_palette], [typography_space], [mood], [call_to_action_area], [responsive_considerations], [brand_alignment], professional web design, 4K, web optimized",
    tags: ["development", "web", "hero", "landing-page", "design"],
    useCase: "Landing pages, website design, hero sections, marketing websites, product pages",
    tips: [
      "Replace [product_concept] with product or service description",
      "Replace [visual_style] with 'illustration', 'photography', '3D render', 'abstract', 'minimalist'",
      "Replace [composition] with 'centered', 'split screen', 'full bleed', 'grid layout'",
      "Replace [color_palette] with brand colors or 'warm', 'cool', 'vibrant', 'neutral'",
      "Replace [typography_space] with 'text overlay area', 'left side', 'centered text', 'minimal text'",
      "Replace [mood] with 'energetic', 'professional', 'trustworthy', 'innovative', 'calm'",
      "Replace [call_to_action_area] with 'button space', 'CTA placement', 'action zone'",
      "Replace [responsive_considerations] with 'mobile-first', 'desktop optimized', 'tablet friendly'",
      "Replace [brand_alignment] with brand guidelines or 'on-brand', 'consistent'"
    ],
    example: "website hero section visual, SaaS productivity tool product concept, modern illustration visual style, centered composition, blue and white color palette, left side typography space, professional innovative mood, button space CTA placement, mobile-first responsive, on-brand alignment, professional web design, 4K, web optimized"
  },
  {
    id: "ui-component-visual",
    title: "UI Component Mockups",
    category: "development-ai",
    tool: "seedream",
    description: "Generate UI component visuals and interface mockups for design systems",
    prompt: "UI component mockup, [component_type], [design_system], [style], [state], [interaction], [platform], [accessibility], [responsive], [brand_guidelines], professional UI design, design system ready",
    tags: ["development", "ui", "design-system", "components", "interface"],
    useCase: "Design systems, UI components, interface design, prototyping, design documentation",
    tips: [
      "Replace [component_type] with 'button', 'card', 'form', 'navigation', 'modal', 'dashboard'",
      "Replace [design_system] with 'Material Design', 'iOS Human Interface', 'custom', 'Tailwind UI'",
      "Replace [style] with 'modern', 'minimalist', 'skeuomorphic', 'flat', 'neumorphic'",
      "Replace [state] with 'default', 'hover', 'active', 'disabled', 'error', 'success'",
      "Replace [interaction] with 'clickable', 'expandable', 'draggable', 'static'",
      "Replace [platform] with 'web', 'mobile', 'desktop', 'tablet'",
      "Replace [accessibility] with 'WCAG compliant', 'high contrast', 'keyboard accessible'",
      "Replace [responsive] with 'mobile-first', 'breakpoints', 'fluid', 'adaptive'",
      "Replace [brand_guidelines] with brand colors, typography, spacing"
    ],
    example: "UI component mockup, dashboard card component, Material Design system, modern minimalist style, default state, clickable interaction, web platform, WCAG compliant accessibility, mobile-first responsive, brand color palette guidelines, professional UI design, design system ready"
  },
  {
    id: "app-screenshot-mockup",
    title: "App Screenshot Mockups",
    category: "development-ai",
    tool: "midjourney",
    description: "Create realistic app screenshot mockups for App Store, marketing, and presentations",
    prompt: "app screenshot mockup, [app_type], [screen_type], [device_frame], [content_display], [style], [branding], [realistic_details], [marketing_ready], professional app mockup, high quality",
    tags: ["development", "app", "mockup", "screenshot", "marketing"],
    useCase: "App Store listings, marketing materials, presentations, portfolio, design reviews",
    tips: [
      "Replace [app_type] with 'mobile app', 'tablet app', 'desktop app', 'web app'",
      "Replace [screen_type] with 'home screen', 'profile', 'settings', 'feature screen', 'onboarding'",
      "Replace [device_frame] with 'iPhone 15', 'iPad', 'MacBook', 'Android', 'no frame'",
      "Replace [content_display] with 'realistic content', 'placeholder', 'lorem ipsum', 'actual UI'",
      "Replace [style] with 'iOS style', 'Material Design', 'custom', 'modern'",
      "Replace [branding] with 'app icon visible', 'brand colors', 'logo placement'",
      "Replace [realistic_details] with 'realistic shadows', 'reflections', 'device details', 'authentic'",
      "Replace [marketing_ready] with 'App Store ready', 'marketing quality', 'presentation ready'"
    ],
    example: "app screenshot mockup, mobile productivity app type, home screen dashboard, iPhone 15 device frame, realistic content display, iOS modern style, app icon visible branding, realistic shadows reflections details, App Store ready marketing, professional app mockup, high quality"
  },
  {
    id: "llm-code-generation",
    title: "Code Generation with Context",
    category: "llm-workflows",
    tool: "chatgpt",
    description: "Generate production-ready code with full context, error handling, and best practices",
    prompt: "Generate [code_type] for [purpose] using [framework/library]. Requirements: 1) [specific_requirements], 2) Follow [coding_standards], 3) Include error handling and edge cases, 4) Add comments for complex logic, 5) Follow [architecture_pattern], 6) Include type definitions if TypeScript, 7) Add input validation, 8) Make it production-ready. Provide complete, runnable code with examples.",
    tags: ["llm", "coding", "development", "code-generation", "professional"],
    useCase: "Code generation, feature development, prototyping, learning, code examples",
    tips: [
      "Replace [code_type] with 'function', 'component', 'API endpoint', 'class', 'hook', 'utility'",
      "Replace [purpose] with specific functionality: 'user authentication', 'data fetching', 'form validation'",
      "Replace [framework/library] with 'React', 'Next.js', 'Express', 'FastAPI', 'Vue'",
      "Replace [specific_requirements] with detailed requirements",
      "Replace [coding_standards] with 'ESLint', 'PEP 8', 'Airbnb style', 'custom standards'",
      "Replace [architecture_pattern] with 'MVC', 'component-based', 'functional', 'OOP'",
      "Add context: 'existing codebase', 'new project', 'integration with X'",
      "Specify language: 'TypeScript', 'Python', 'JavaScript', 'Go'"
    ],
    example: "Generate React component for user profile display using TypeScript and Tailwind CSS. Requirements: 1) Display user avatar, name, email, and bio, 2) Follow Airbnb TypeScript style guide, 3) Include error handling and loading states, 4) Add comments for complex logic, 5) Follow component-based architecture, 6) Include TypeScript interfaces, 7) Add input validation for props, 8) Make it production-ready. Provide complete, runnable code with examples."
  },
  {
    id: "llm-api-integration",
    title: "API Integration Guide",
    category: "llm-workflows",
    tool: "claude",
    description: "Create complete API integration with authentication, error handling, and documentation",
    prompt: "Create a complete API integration for [service_name] API in [language/framework]. Include: 1) Authentication setup ([auth_method]), 2) API client class/function with all endpoints, 3) Request/response types/interfaces, 4) Error handling and retry logic, 5) Rate limiting considerations, 6) Usage examples for each endpoint, 7) Testing approach, 8) Documentation. Make it production-ready with best practices.",
    tags: ["llm", "api", "integration", "development", "professional"],
    useCase: "API integrations, third-party services, backend development, SDK creation",
    tips: [
      "Replace [service_name] with 'Stripe', 'SendGrid', 'OpenAI', 'custom API'",
      "Replace [language/framework] with 'Python', 'Node.js', 'TypeScript', 'Go'",
      "Replace [auth_method] with 'API key', 'OAuth 2.0', 'JWT', 'Bearer token'",
      "Specify API type: 'REST', 'GraphQL', 'gRPC'",
      "Add requirements: 'async/await', 'TypeScript', 'error handling', 'logging'",
      "Include environment: 'Node.js', 'browser', 'serverless', 'microservice'"
    ],
    example: "Create a complete API integration for OpenAI API in TypeScript/Node.js. Include: 1) Authentication setup (API key), 2) API client class with all endpoints, 3) Request/response TypeScript interfaces, 4) Error handling and retry logic, 5) Rate limiting considerations, 6) Usage examples for each endpoint, 7) Testing approach, 8) Documentation. Make it production-ready with best practices."
  },
  {
    id: "llm-database-design",
    title: "Database Schema Design",
    category: "llm-workflows",
    tool: "claude",
    description: "Design complete database schema with relationships, indexes, and optimization",
    prompt: "Design a database schema for [application_type] using [database_type]. Include: 1) Entity-relationship diagram (text description), 2) All tables with columns, data types, and constraints, 3) Primary keys, foreign keys, and relationships, 4) Indexes for performance optimization, 5) Normalization approach (1NF, 2NF, 3NF), 6) Migration strategy, 7) Sample queries for common operations, 8) Performance considerations. Make it scalable and production-ready.",
    tags: ["llm", "database", "schema", "development", "professional"],
    useCase: "Database design, system architecture, data modeling, application development",
    tips: [
      "Replace [application_type] with 'e-commerce', 'SaaS', 'social media', 'blog', 'analytics'",
      "Replace [database_type] with 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'",
      "Specify requirements: 'user management', 'payment processing', 'content management'",
      "Add constraints: 'ACID compliance', 'scalability', 'real-time', 'analytics'",
      "Include considerations: 'data volume', 'query patterns', 'concurrent users'"
    ],
    example: "Design a database schema for an e-commerce platform using PostgreSQL. Include: 1) Entity-relationship diagram (text description), 2) All tables with columns, data types, and constraints, 3) Primary keys, foreign keys, and relationships, 4) Indexes for performance optimization, 5) Normalization approach (1NF, 2NF, 3NF), 6) Migration strategy, 7) Sample queries for common operations, 8) Performance considerations. Make it scalable and production-ready."
  },
  {
    id: "llm-testing-strategy",
    title: "Testing Strategy & Implementation",
    category: "llm-workflows",
    tool: "chatgpt",
    description: "Create comprehensive testing strategy with unit, integration, and E2E tests",
    prompt: "Create a testing strategy for [project_type] using [testing_framework]. Include: 1) Testing pyramid (unit, integration, E2E), 2) Test coverage goals and metrics, 3) Unit test examples for [key_functions], 4) Integration test scenarios, 5) E2E test cases for critical paths, 6) Mocking and test data strategies, 7) CI/CD integration approach, 8) Test maintenance best practices. Provide code examples and implementation guide.",
    tags: ["llm", "testing", "qa", "development", "professional"],
    useCase: "Test planning, QA strategy, test implementation, CI/CD, quality assurance",
    tips: [
      "Replace [project_type] with 'React app', 'API', 'mobile app', 'full-stack'",
      "Replace [testing_framework] with 'Jest', 'Vitest', 'PyTest', 'Playwright', 'Cypress'",
      "Replace [key_functions] with specific functions/components to test",
      "Specify test types: 'unit only', 'full coverage', 'critical paths', 'smoke tests'",
      "Add requirements: 'TypeScript', 'coverage reports', 'snapshot testing', 'visual regression'",
      "Include environment: 'Node.js', 'browser', 'mobile', 'serverless'"
    ],
    example: "Create a testing strategy for a React Next.js application using Jest and Playwright. Include: 1) Testing pyramid (unit, integration, E2E), 2) Test coverage goals and metrics, 3) Unit test examples for components and utilities, 4) Integration test scenarios, 5) E2E test cases for critical paths, 6) Mocking and test data strategies, 7) CI/CD integration approach, 8) Test maintenance best practices. Provide code examples and implementation guide."
  },
  {
    id: "llm-deployment-guide",
    title: "Deployment & DevOps Guide",
    category: "llm-workflows",
    tool: "claude",
    description: "Create complete deployment guide with CI/CD, infrastructure, and monitoring",
    prompt: "Create a deployment guide for [application_type] to [platform]. Include: 1) Infrastructure requirements and setup, 2) Environment configuration (dev, staging, prod), 3) CI/CD pipeline configuration ([ci_tool]), 4) Build and deployment steps, 5) Database migration strategy, 6) Environment variables and secrets management, 7) Monitoring and logging setup, 8) Rollback procedures, 9) Security considerations, 10) Cost optimization. Make it production-ready with best practices.",
    tags: ["llm", "deployment", "devops", "infrastructure", "professional"],
    useCase: "Deployment planning, DevOps setup, infrastructure configuration, CI/CD implementation",
    tips: [
      "Replace [application_type] with 'web app', 'API', 'mobile backend', 'microservices'",
      "Replace [platform] with 'AWS', 'Vercel', 'Heroku', 'Docker', 'Kubernetes', 'Azure'",
      "Replace [ci_tool] with 'GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI'",
      "Specify stack: 'Node.js', 'Python', 'containerized', 'serverless'",
      "Add requirements: 'auto-scaling', 'CDN', 'database', 'caching', 'monitoring'",
      "Include considerations: 'high availability', 'disaster recovery', 'compliance'"
    ],
    example: "Create a deployment guide for a Next.js web application to Vercel. Include: 1) Infrastructure requirements and setup, 2) Environment configuration (dev, staging, prod), 3) CI/CD pipeline configuration (GitHub Actions), 4) Build and deployment steps, 5) Database migration strategy, 6) Environment variables and secrets management, 7) Monitoring and logging setup, 8) Rollback procedures, 9) Security considerations, 10) Cost optimization. Make it production-ready with best practices."
  },
  {
    id: "video-app-demo",
    title: "App Demo Video",
    category: "video-production",
    tool: "runway",
    description: "Create app demo videos for marketing, onboarding, and tutorials",
    prompt: "app demo video, [app_type], [demo_type], [screen_flow], [narration_style], [visual_style], [pacing], [call_to_action], [branding], [duration], professional app demo, 4K, marketing ready",
    tags: ["development", "app", "demo", "video", "marketing"],
    useCase: "App Store videos, marketing demos, onboarding tutorials, feature showcases, presentations",
    tips: [
      "Replace [app_type] with 'mobile app', 'web app', 'SaaS', 'game'",
      "Replace [demo_type] with 'feature showcase', 'tutorial', 'walkthrough', 'teaser'",
      "Replace [screen_flow] with 'onboarding flow', 'main features', 'use case', 'complete workflow'",
      "Replace [narration_style] with 'voiceover', 'text overlay', 'subtitles', 'silent'",
      "Replace [visual_style] with 'screen recording', 'animated', 'mixed media', 'cinematic'",
      "Replace [pacing] with 'fast-paced', 'slow detailed', 'energetic', 'calm'",
      "Replace [call_to_action] with 'download now', 'try free', 'learn more', 'sign up'",
      "Replace [branding] with 'app logo', 'brand colors', 'consistent style'",
      "Replace [duration] with '15 seconds', '30 seconds', '60 seconds', '2 minutes'"
    ],
    example: "app demo video, mobile productivity app type, feature showcase demo, main features screen flow, voiceover narration, animated screen recording visual, fast-paced energetic pacing, try free CTA, app logo branding, 30 seconds duration, professional app demo, 4K, marketing ready"
  },
  {
    id: "llm-refactoring-guide",
    title: "Code Refactoring Strategy",
    category: "llm-workflows",
    tool: "claude",
    description: "Create comprehensive refactoring plan with step-by-step approach and risk assessment",
    prompt: "Create a refactoring strategy for [codebase/component]. Analyze: 1) Current code structure and issues, 2) Technical debt identification, 3) Refactoring priorities (high/medium/low), 4) Step-by-step refactoring plan, 5) Risk assessment and mitigation, 6) Testing strategy during refactoring, 7) Code review checklist, 8) Success metrics. Provide actionable plan with code examples.",
    tags: ["llm", "refactoring", "code-quality", "development", "professional"],
    useCase: "Code improvement, technical debt reduction, legacy code modernization, code quality",
    tips: [
      "Replace [codebase/component] with specific code to refactor",
      "Provide context: 'legacy code', 'monolith', 'microservices', 'component'",
      "Specify goals: 'improve performance', 'reduce complexity', 'modernize', 'maintainability'",
      "Add constraints: 'no breaking changes', 'incremental', 'time-limited', 'budget'",
      "Include requirements: 'backward compatible', 'zero downtime', 'test coverage'"
    ],
    example: "Create a refactoring strategy for a legacy React component. Analyze: 1) Current code structure and issues, 2) Technical debt identification, 3) Refactoring priorities (high/medium/low), 4) Step-by-step refactoring plan, 5) Risk assessment and mitigation, 6) Testing strategy during refactoring, 7) Code review checklist, 8) Success metrics. Provide actionable plan with code examples."
  },
  
  // Advanced LLM Quality & Reliability Prompts - Solving Real Problems
  {
    id: "llm-hallucination-prevention",
    title: "Hallucination Prevention & Fact Verification",
    category: "llm-workflows",
    tool: "claude",
    description: "Prevent hallucinations and verify facts with structured verification workflow",
    prompt: "When responding to [topic/question], follow this verification protocol: 1) Clearly state what you know with certainty vs. what requires verification, 2) Cite specific sources for factual claims (provide URLs, dates, or references when possible), 3) Use qualifiers for uncertain information ('may', 'likely', 'according to', 'some sources suggest'), 4) Flag potential hallucinations by explicitly noting when information cannot be verified, 5) Provide confidence levels for each claim (high/medium/low), 6) Suggest verification steps the user can take, 7) Distinguish between facts, inferences, and opinions. If you cannot verify a claim, state 'I cannot verify this claim' rather than presenting it as fact.",
    tags: ["llm", "hallucination", "verification", "quality", "reliability", "professional"],
    useCase: "Research, fact-checking, content creation, technical documentation, legal/compliance content, medical information",
    tips: [
      "Replace [topic/question] with specific subject matter",
      "Specify domain: 'medical', 'legal', 'financial', 'technical', 'historical'",
      "Add requirements: 'peer-reviewed sources only', 'recent data', 'official documentation'",
      "Include verification level: 'strict verification', 'standard verification', 'quick check'",
      "Request format: 'with citations', 'confidence scores', 'source links'"
    ],
    example: "When responding to medical treatment questions, follow this verification protocol: 1) Clearly state what you know with certainty vs. what requires verification, 2) Cite specific sources for factual claims (provide URLs, dates, or references when possible), 3) Use qualifiers for uncertain information ('may', 'likely', 'according to', 'some sources suggest'), 4) Flag potential hallucinations by explicitly noting when information cannot be verified, 5) Provide confidence levels for each claim (high/medium/low), 6) Suggest verification steps the user can take, 7) Distinguish between facts, inferences, and opinions. If you cannot verify a claim, state 'I cannot verify this claim' rather than presenting it as fact."
  },
  {
    id: "llm-structured-output",
    title: "Structured Output Generation (JSON/XML)",
    category: "llm-workflows",
    tool: "claude",
    description: "Generate consistent, parseable structured outputs with validation",
    prompt: "Generate [output_type] in [format] format. Requirements: 1) Strictly follow the schema: [schema_definition], 2) All required fields must be present, 3) Data types must match exactly (strings, numbers, booleans, arrays, objects), 4) No additional fields beyond schema, 5) Validate all values meet constraints (ranges, formats, enums), 6) Handle null/empty values according to schema, 7) Ensure JSON/XML is well-formed and parseable, 8) Include error handling for invalid inputs. Output ONLY valid [format] with no additional text or explanation unless requested.",
    tags: ["llm", "structured", "json", "xml", "api", "professional"],
    useCase: "API responses, data extraction, configuration files, structured data generation, system integration",
    tips: [
      "Replace [output_type] with 'user data', 'product catalog', 'configuration', 'report'",
      "Replace [format] with 'JSON', 'XML', 'YAML', 'CSV'",
      "Replace [schema_definition] with actual schema or structure requirements",
      "Specify validation: 'strict', 'lenient', 'with defaults', 'error on missing'",
      "Add constraints: 'max length', 'date format', 'enum values', 'required fields'"
    ],
    example: "Generate product catalog in JSON format. Requirements: 1) Strictly follow the schema: {id: string, name: string, price: number, category: string, inStock: boolean}, 2) All required fields must be present, 3) Data types must match exactly (strings, numbers, booleans, arrays, objects), 4) No additional fields beyond schema, 5) Validate all values meet constraints (ranges, formats, enums), 6) Handle null/empty values according to schema, 7) Ensure JSON is well-formed and parseable, 8) Include error handling for invalid inputs. Output ONLY valid JSON with no additional text or explanation unless requested."
  },
  {
    id: "llm-context-management",
    title: "Long Context Management & Summarization",
    category: "llm-workflows",
    tool: "claude",
    description: "Manage long conversations and documents with intelligent context compression",
    prompt: "You are managing a long conversation/document with [context_length] tokens. Strategy: 1) Maintain a running summary of key points, decisions, and facts, 2) Archive older messages while preserving essential information, 3) Use hierarchical summarization (detailed → summary → key points), 4) Keep recent context (last [N] messages) in full detail, 5) Preserve critical information (names, dates, numbers, decisions) even when summarizing, 6) Create checkpoints at major topic shifts, 7) Reference archived context when needed ('As discussed earlier...'), 8) Update the running summary after each significant exchange. Current summary: [current_summary]. New content: [new_content]. Update summary and provide response.",
    tags: ["llm", "context", "memory", "summarization", "efficiency", "professional"],
    useCase: "Long conversations, document analysis, multi-session workflows, context window optimization, memory management",
    tips: [
      "Replace [context_length] with actual token count or 'very long', 'long', 'medium'",
      "Replace [N] with number of recent messages to keep (e.g., '10', '20')",
      "Specify summary style: 'executive summary', 'detailed notes', 'bullet points'",
      "Add requirements: 'preserve all numbers', 'keep all names', 'maintain chronology'",
      "Include checkpoint frequency: 'every 10 messages', 'at topic changes', 'every 5 minutes'"
    ],
    example: "You are managing a long conversation with 50,000 tokens. Strategy: 1) Maintain a running summary of key points, decisions, and facts, 2) Archive older messages while preserving essential information, 3) Use hierarchical summarization (detailed → summary → key points), 4) Keep recent context (last 20 messages) in full detail, 5) Preserve critical information (names, dates, numbers, decisions) even when summarizing, 6) Create checkpoints at major topic shifts, 7) Reference archived context when needed ('As discussed earlier...'), 8) Update the running summary after each significant exchange."
  },
  {
    id: "llm-iterative-refinement",
    title: "Iterative Output Refinement",
    category: "llm-workflows",
    tool: "chatgpt",
    description: "Systematically improve outputs through structured iteration cycles",
    prompt: "Generate [output_type] using iterative refinement. Process: 1) Initial draft focusing on [primary_goal], 2) First revision addressing [revision_criteria_1], 3) Second revision addressing [revision_criteria_2], 4) Final polish for [polish_aspects]. For each iteration: a) Identify specific improvements needed, b) Make targeted changes, c) Explain what changed and why, d) Check against original requirements. After final version, provide: improvement summary, remaining limitations, and suggestions for further refinement if needed.",
    tags: ["llm", "iteration", "refinement", "quality", "workflow", "professional"],
    useCase: "Content creation, code generation, document writing, design iterations, quality improvement",
    tips: [
      "Replace [output_type] with 'article', 'code', 'design', 'strategy', 'document'",
      "Replace [primary_goal] with main objective: 'clarity', 'completeness', 'accuracy', 'creativity'",
      "Replace [revision_criteria_1] with 'structure and organization', 'technical accuracy', 'tone and style'",
      "Replace [revision_criteria_2] with 'detail and depth', 'examples and evidence', 'readability'",
      "Replace [polish_aspects] with 'grammar', 'formatting', 'consistency', 'final touches'"
    ],
    example: "Generate a technical article using iterative refinement. Process: 1) Initial draft focusing on comprehensive coverage, 2) First revision addressing structure and technical accuracy, 3) Second revision addressing examples and clarity, 4) Final polish for grammar and formatting. For each iteration: a) Identify specific improvements needed, b) Make targeted changes, c) Explain what changed and why, d) Check against original requirements. After final version, provide: improvement summary, remaining limitations, and suggestions for further refinement if needed."
  },
  {
    id: "llm-error-recovery",
    title: "Error Detection & Recovery",
    category: "llm-workflows",
    tool: "claude",
    description: "Detect and recover from errors in AI-generated content systematically",
    prompt: "Analyze this [content_type] for errors: [content]. Check for: 1) Factual inaccuracies (verify against [sources/knowledge_base]), 2) Logical inconsistencies (contradictions, circular reasoning), 3) Technical errors (code syntax, API usage, calculations), 4) Formatting/structure issues (JSON validity, XML well-formedness, markdown), 5) Completeness (missing required elements, incomplete thoughts), 6) Consistency (terminology, style, format). For each error found: a) Identify type and severity, b) Explain why it's an error, c) Provide corrected version, d) Suggest prevention strategies. If no errors found, confirm with confidence level.",
    tags: ["llm", "error-handling", "quality-assurance", "validation", "professional"],
    useCase: "Code review, content verification, data validation, quality assurance, error prevention",
    tips: [
      "Replace [content_type] with 'code', 'article', 'data', 'configuration', 'documentation'",
      "Replace [content] with actual content to check",
      "Replace [sources/knowledge_base] with verification sources or 'standard practices'",
      "Specify error types: 'all errors', 'critical only', 'formatting only', 'logic only'",
      "Add requirements: 'provide fixes', 'explain errors', 'suggest improvements'"
    ],
    example: "Analyze this Python code for errors: [code snippet]. Check for: 1) Factual inaccuracies (verify against Python best practices), 2) Logical inconsistencies (contradictions, circular reasoning), 3) Technical errors (syntax, API usage, calculations), 4) Formatting/structure issues (PEP 8 compliance, indentation), 5) Completeness (missing error handling, incomplete functions), 6) Consistency (naming conventions, style). For each error found: a) Identify type and severity, b) Explain why it's an error, c) Provide corrected version, d) Suggest prevention strategies."
  },
  {
    id: "llm-multi-model-workflow",
    title: "Multi-Model Workflow Orchestration",
    category: "llm-workflows",
    tool: "chatgpt",
    description: "Coordinate multiple AI models for complex tasks requiring different strengths",
    prompt: "Orchestrate a multi-model workflow for [task]. Strategy: 1) Break task into [N] stages, 2) Assign each stage to optimal model: [model_assignments], 3) Define handoff points and data format between stages, 4) Specify quality checks at each stage, 5) Handle errors and fallbacks, 6) Aggregate final outputs. Model roles: [model_1] for [strength_1], [model_2] for [strength_2], [model_3] for [strength_3]. Provide: workflow diagram (text), stage-by-stage execution plan, handoff protocols, and expected outputs.",
    tags: ["llm", "workflow", "multi-model", "orchestration", "advanced", "professional"],
    useCase: "Complex research, content creation pipelines, data processing, multi-step analysis, production workflows",
    tips: [
      "Replace [task] with specific complex task",
      "Replace [N] with number of stages (e.g., '3', '5')",
      "Replace [model_assignments] with 'Claude for analysis, GPT-4 for generation, Gemini for verification'",
      "Replace [model_X] and [strength_X] with specific models and their strengths",
      "Specify handoff format: 'JSON', 'structured text', 'markdown', 'API calls'"
    ],
    example: "Orchestrate a multi-model workflow for comprehensive market research. Strategy: 1) Break task into 4 stages, 2) Assign each stage to optimal model: Claude for deep analysis, GPT-4 for content generation, Gemini for fact-checking, 3) Define handoff points and JSON format between stages, 4) Specify quality checks at each stage, 5) Handle errors and fallbacks, 6) Aggregate final outputs. Model roles: Claude for reasoning and analysis, GPT-4 for creative writing and summaries, Gemini for verification and data accuracy. Provide: workflow diagram (text), stage-by-stage execution plan, handoff protocols, and expected outputs."
  },
  {
    id: "llm-domain-expert",
    title: "Domain Expert Persona (Medical/Legal/Financial)",
    category: "llm-workflows",
    tool: "claude",
    description: "Act as domain expert with appropriate disclaimers and verification protocols",
    prompt: "You are a [domain] expert assistant. Guidelines: 1) Provide information based on [domain] best practices and current standards, 2) Clearly state your limitations ('I am an AI assistant, not a licensed [professional]'), 3) Include appropriate disclaimers for [domain] advice, 4) Recommend consulting licensed professionals for [critical_decisions], 5) Cite authoritative sources ([authoritative_sources]), 6) Distinguish between general information and personalized advice, 7) Flag when information may be outdated or region-specific, 8) Suggest verification steps with qualified professionals. For [topic], provide: expert-level information, appropriate disclaimers, source citations, and professional consultation recommendations.",
    tags: ["llm", "domain-expert", "compliance", "professional", "safety", "reliability"],
    useCase: "Medical information, legal guidance, financial advice, technical consulting, professional domains",
    tips: [
      "Replace [domain] with 'medical', 'legal', 'financial', 'engineering', 'scientific'",
      "Replace [professional] with 'physician', 'attorney', 'financial advisor', 'engineer'",
      "Replace [critical_decisions] with 'diagnosis', 'legal actions', 'investments', 'safety-critical'",
      "Replace [authoritative_sources] with 'peer-reviewed journals', 'legal precedents', 'regulatory guidelines'",
      "Replace [topic] with specific subject matter"
    ],
    example: "You are a medical expert assistant. Guidelines: 1) Provide information based on medical best practices and current standards, 2) Clearly state your limitations ('I am an AI assistant, not a licensed physician'), 3) Include appropriate disclaimers for medical advice, 4) Recommend consulting licensed physicians for diagnosis and treatment decisions, 5) Cite authoritative sources (peer-reviewed medical journals, medical guidelines), 6) Distinguish between general information and personalized medical advice, 7) Flag when information may be outdated or region-specific, 8) Suggest verification steps with qualified healthcare professionals. For treatment options, provide: expert-level information, appropriate disclaimers, source citations, and professional consultation recommendations."
  },
  {
    id: "llm-output-formatting",
    title: "Consistent Output Formatting & Style",
    category: "llm-workflows",
    tool: "chatgpt",
    description: "Generate consistently formatted outputs matching specific style guides",
    prompt: "Generate [content_type] following [style_guide] formatting rules. Requirements: 1) Adhere to [style_guide] for [formatting_aspects], 2) Maintain consistency in [consistency_elements], 3) Use [tone] tone throughout, 4) Follow [structure] structure, 5) Apply [formatting_rules] for technical elements, 6) Ensure [quality_standards] are met, 7) Include [required_elements], 8) Exclude [prohibited_elements]. Format: [output_format]. Provide a style compliance checklist with your output.",
    tags: ["llm", "formatting", "style-guide", "consistency", "professional"],
    useCase: "Brand content, technical documentation, academic writing, corporate communications, style compliance",
    tips: [
      "Replace [content_type] with 'article', 'documentation', 'report', 'email', 'presentation'",
      "Replace [style_guide] with 'AP Style', 'Chicago Manual', 'company style guide', 'academic format'",
      "Replace [formatting_aspects] with 'headings', 'citations', 'numbers', 'dates', 'terminology'",
      "Replace [consistency_elements] with 'terminology', 'capitalization', 'punctuation', 'voice'",
      "Replace [tone] with 'professional', 'academic', 'conversational', 'technical'",
      "Replace [structure] with 'hierarchical', 'chronological', 'by topic', 'executive summary first'",
      "Replace [output_format] with 'Markdown', 'HTML', 'PDF-ready', 'plain text'"
    ],
    example: "Generate technical documentation following company style guide formatting rules. Requirements: 1) Adhere to company style guide for headings, code blocks, and terminology, 2) Maintain consistency in technical terms and capitalization, 3) Use professional technical tone throughout, 4) Follow hierarchical structure with clear sections, 5) Apply Markdown formatting rules for code and links, 6) Ensure accuracy and completeness standards are met, 7) Include code examples and diagrams, 8) Exclude marketing language. Format: Markdown. Provide a style compliance checklist with your output."
  },
  {
    id: "llm-bias-detection",
    title: "Bias Detection & Mitigation",
    category: "llm-workflows",
    tool: "claude",
    description: "Identify and mitigate biases in AI-generated content",
    prompt: "Analyze this [content_type] for potential biases: [content]. Check for: 1) Cultural biases (assumptions, stereotypes, cultural insensitivity), 2) Gender biases (gendered language, assumptions, representation), 3) Socioeconomic biases (class assumptions, accessibility barriers), 4) Geographic biases (regional assumptions, localization issues), 5) Temporal biases (outdated perspectives, anachronisms), 6) Confirmation biases (selective evidence, one-sided arguments), 7) Language biases (exclusionary terminology, jargon). For each bias found: a) Identify type and examples, b) Explain impact, c) Provide neutral alternatives, d) Suggest inclusive language. Provide: bias analysis report, revised content with mitigations, and inclusive language recommendations.",
    tags: ["llm", "bias", "inclusivity", "ethics", "quality", "professional"],
    useCase: "Content review, diversity and inclusion, ethical AI, public-facing content, educational materials",
    tips: [
      "Replace [content_type] with 'article', 'job description', 'marketing copy', 'documentation'",
      "Replace [content] with actual content to analyze",
      "Specify focus areas: 'all biases', 'gender only', 'cultural only', 'accessibility'",
      "Add requirements: 'provide alternatives', 'explain impact', 'suggest improvements'",
      "Include context: 'target audience', 'geographic region', 'cultural context'"
    ],
    example: "Analyze this job description for potential biases: [job posting]. Check for: 1) Cultural biases (assumptions, stereotypes, cultural insensitivity), 2) Gender biases (gendered language, assumptions, representation), 3) Socioeconomic biases (class assumptions, accessibility barriers), 4) Geographic biases (regional assumptions, localization issues), 5) Temporal biases (outdated perspectives, anachronisms), 6) Confirmation biases (selective evidence, one-sided arguments), 7) Language biases (exclusionary terminology, jargon). For each bias found: a) Identify type and examples, b) Explain impact, c) Provide neutral alternatives, d) Suggest inclusive language. Provide: bias analysis report, revised content with mitigations, and inclusive language recommendations."
  },
  {
    id: "llm-prompt-optimization",
    title: "Prompt Engineering & Optimization",
    category: "llm-workflows",
    tool: "claude",
    description: "Optimize prompts for better results through systematic testing and refinement",
    prompt: "Optimize this prompt for [model]: [original_prompt]. Analysis: 1) Identify unclear or ambiguous instructions, 2) Check for missing context or constraints, 3) Evaluate prompt structure (clarity, specificity, completeness), 4) Assess token efficiency (remove redundancy, optimize length), 5) Test prompt variations: [variation_1], [variation_2], [variation_3], 6) Compare outputs for: [quality_metrics], 7) Identify best-performing version, 8) Document optimization rationale. Provide: original analysis, optimized prompt, alternative variations, performance comparison, and optimization recommendations.",
    tags: ["llm", "prompt-engineering", "optimization", "efficiency", "professional"],
    useCase: "Prompt development, AI workflow optimization, cost reduction, quality improvement, efficiency gains",
    tips: [
      "Replace [model] with 'GPT-4', 'Claude', 'Gemini', 'specific model version'",
      "Replace [original_prompt] with prompt to optimize",
      "Replace [variation_X] with specific variations to test",
      "Replace [quality_metrics] with 'accuracy', 'completeness', 'relevance', 'creativity', 'efficiency'",
      "Specify goals: 'reduce tokens', 'improve accuracy', 'increase consistency', 'enhance creativity'"
    ],
    example: "Optimize this prompt for Claude: 'Write a blog post about AI'. Analysis: 1) Identify unclear or ambiguous instructions, 2) Check for missing context or constraints, 3) Evaluate prompt structure (clarity, specificity, completeness), 4) Assess token efficiency (remove redundancy, optimize length), 5) Test prompt variations: detailed version, concise version, structured version, 6) Compare outputs for: completeness, relevance, engagement, 7) Identify best-performing version, 8) Document optimization rationale. Provide: original analysis, optimized prompt, alternative variations, performance comparison, and optimization recommendations."
  },
  {
    id: "llm-cost-optimization",
    title: "Cost Optimization & Token Management",
    category: "llm-workflows",
    tool: "chatgpt",
    description: "Optimize AI usage costs through intelligent token management and prompt efficiency",
    prompt: "Analyze this prompt/workflow for cost optimization: [prompt]. Calculate: 1) Estimated token usage (input + output), 2) Cost per request at current pricing, 3) Token efficiency opportunities (redundancy, verbosity, unnecessary context), 4) Alternative approaches that reduce tokens, 5) Caching opportunities for repeated queries, 6) Batch processing possibilities, 7) Model selection trade-offs (cost vs quality), 8) Monthly cost projections at [usage_volume]. Provide: token breakdown, cost analysis, optimization recommendations, and estimated savings.",
    tags: ["llm", "cost", "optimization", "tokens", "efficiency", "professional"],
    useCase: "Budget planning, cost reduction, token optimization, workflow efficiency, production scaling",
    tips: [
      "Replace [prompt] with actual prompt or workflow",
      "Replace [usage_volume] with '100 requests/day', '1000 requests/month', 'high volume'",
      "Specify model: 'GPT-4', 'Claude Opus', 'Gemini Pro', 'cost-optimized model'",
      "Add requirements: 'maintain quality', 'acceptable latency', 'budget constraints'",
      "Include context: 'production use', 'development', 'experimental'"
    ],
    example: "Analyze this customer support workflow for cost optimization: [workflow]. Calculate: 1) Estimated token usage (input + output), 2) Cost per request at current pricing, 3) Token efficiency opportunities (redundancy, verbosity, unnecessary context), 4) Alternative approaches that reduce tokens, 5) Caching opportunities for repeated queries, 6) Batch processing possibilities, 7) Model selection trade-offs (cost vs quality), 8) Monthly cost projections at 1000 requests/day. Provide: token breakdown, cost analysis, optimization recommendations, and estimated savings."
  },
  {
    id: "llm-conversation-memory",
    title: "Conversation Memory & Context Preservation",
    category: "llm-workflows",
    tool: "claude",
    description: "Maintain conversation context and memory across sessions intelligently",
    prompt: "You are maintaining conversation memory for [use_case]. Strategy: 1) Store key facts, decisions, and preferences from this conversation, 2) Create a memory summary: [current_summary], 3) Update memory with new information: [new_info], 4) Preserve important context: [important_context], 5) Archive less relevant details while keeping access, 6) Create memory tags for quick retrieval: [tags], 7) Maintain conversation flow and continuity, 8) Reference past conversations when relevant. Provide: updated memory summary, conversation continuity notes, and context for next session.",
    tags: ["llm", "memory", "context", "conversation", "continuity", "professional"],
    useCase: "Long conversations, multi-session workflows, customer support, personal assistants, project continuity",
    tips: [
      "Replace [use_case] with 'customer support', 'project management', 'personal assistant', 'research'",
      "Replace [current_summary] with existing memory or 'none'",
      "Replace [new_info] with new conversation content",
      "Replace [important_context] with 'user preferences', 'project goals', 'constraints'",
      "Replace [tags] with relevant tags: 'project-alpha', 'user-preferences', 'decisions'"
    ],
    example: "You are maintaining conversation memory for a project management assistant. Strategy: 1) Store key facts, decisions, and preferences from this conversation, 2) Create a memory summary: project goals and timeline, 3) Update memory with new information: completed tasks and blockers, 4) Preserve important context: team preferences and constraints, 5) Archive less relevant details while keeping access, 6) Create memory tags for quick retrieval: project-alpha, sprint-3, blockers, 7) Maintain conversation flow and continuity, 8) Reference past conversations when relevant. Provide: updated memory summary, conversation continuity notes, and context for next session."
  },
  {
    id: "llm-quality-gate",
    title: "Quality Gate & Output Validation",
    category: "llm-workflows",
    tool: "claude",
    description: "Implement quality gates to ensure outputs meet standards before delivery",
    prompt: "Act as a quality gate for [output_type]. Validate this output: [output]. Check against criteria: 1) Accuracy (factual correctness, no hallucinations), 2) Completeness ([required_elements] present), 3) Format compliance ([format_requirements]), 4) Style consistency ([style_guide]), 5) Technical correctness ([technical_standards]), 6) Readability and clarity, 7) Security and compliance ([security_requirements]), 8) Performance considerations. For each criterion: a) Pass/Fail status, b) Issues found, c) Severity (critical/major/minor), d) Recommendations. Provide: quality report, pass/fail decision, and improvement suggestions.",
    tags: ["llm", "quality", "validation", "gate", "standards", "professional"],
    useCase: "Production workflows, content publishing, code generation, documentation, quality assurance",
    tips: [
      "Replace [output_type] with 'code', 'documentation', 'content', 'data', 'report'",
      "Replace [output] with actual output to validate",
      "Replace [required_elements] with 'all sections', 'citations', 'examples', 'tests'",
      "Replace [format_requirements] with 'JSON schema', 'Markdown', 'HTML', 'API format'",
      "Replace [style_guide] with 'company style', 'AP Style', 'technical writing'",
      "Replace [technical_standards] with 'coding standards', 'best practices', 'security guidelines'",
      "Replace [security_requirements] with 'no secrets', 'sanitized inputs', 'compliance'"
    ],
    example: "Act as a quality gate for API documentation. Validate this output: [documentation]. Check against criteria: 1) Accuracy (factual correctness, no hallucinations), 2) Completeness (all endpoints, parameters, examples present), 3) Format compliance (Markdown, consistent structure), 4) Style consistency (technical writing guide), 5) Technical correctness (accurate API usage, correct examples), 6) Readability and clarity, 7) Security and compliance (no API keys, sanitized examples), 8) Performance considerations. For each criterion: a) Pass/Fail status, b) Issues found, c) Severity (critical/major/minor), d) Recommendations. Provide: quality report, pass/fail decision, and improvement suggestions."
  },
  {
    id: "llm-multi-language",
    title: "Multi-Language Content Generation",
    category: "llm-workflows",
    tool: "chatgpt",
    description: "Generate and localize content across multiple languages with cultural adaptation",
    prompt: "Create [content_type] in [target_languages]. Requirements: 1) Maintain core message and intent across all languages, 2) Adapt culturally (idioms, references, examples), 3) Follow [target_language] writing conventions and style, 4) Ensure technical accuracy in all languages, 5) Localize dates, numbers, and formats, 6) Consider cultural sensitivities and preferences, 7) Maintain brand voice consistency, 8) Provide translation notes for context. For each language: a) Native-quality translation, b) Cultural adaptations made, c) Regional variations if applicable, d) Quality checklist. Original: [source_content]",
    tags: ["llm", "localization", "translation", "multi-language", "cultural", "professional"],
    useCase: "Global content, international marketing, product localization, documentation translation, customer support",
    tips: [
      "Replace [content_type] with 'marketing copy', 'product description', 'documentation', 'email'",
      "Replace [target_languages] with 'Spanish, French, German', 'all major languages', 'APAC languages'",
      "Replace [target_language] with specific language or 'each target language'",
      "Replace [source_content] with original content to translate",
      "Specify requirements: 'formal tone', 'technical accuracy', 'marketing style', 'legal compliance'"
    ],
    example: "Create product marketing copy in Spanish, French, and German. Requirements: 1) Maintain core message and intent across all languages, 2) Adapt culturally (idioms, references, examples), 3) Follow each target language writing conventions and style, 4) Ensure technical accuracy in all languages, 5) Localize dates, numbers, and formats, 6) Consider cultural sensitivities and preferences, 7) Maintain brand voice consistency, 8) Provide translation notes for context. For each language: a) Native-quality translation, b) Cultural adaptations made, c) Regional variations if applicable, d) Quality checklist. Original: [product description]"
  },
  {
    id: "llm-audit-trail",
    title: "Audit Trail & Change Tracking",
    category: "llm-workflows",
    tool: "claude",
    description: "Track changes, decisions, and reasoning in AI-generated content for compliance",
    prompt: "Generate [content_type] with full audit trail. Include: 1) Version history (all iterations with timestamps), 2) Decision log (why each choice was made), 3) Source attribution (where information came from), 4) Change rationale (reasoning for modifications), 5) Approval workflow (who reviewed/approved), 6) Compliance checklist ([compliance_requirements]), 7) Risk assessment (potential issues identified), 8) Revision notes (what changed and why). Format: Main content + separate audit trail section. Maintain traceability for [retention_period].",
    tags: ["llm", "audit", "compliance", "tracking", "governance", "professional"],
    useCase: "Regulated industries, legal content, financial documentation, compliance requirements, change management",
    tips: [
      "Replace [content_type] with 'legal document', 'financial report', 'policy', 'procedure'",
      "Replace [compliance_requirements] with 'GDPR', 'HIPAA', 'SOX', 'industry standards'",
      "Replace [retention_period] with '7 years', 'indefinite', 'project duration'",
      "Specify requirements: 'full traceability', 'decision documentation', 'approval chain'",
      "Add context: 'regulated industry', 'legal requirement', 'internal policy'"
    ],
    example: "Generate financial report with full audit trail. Include: 1) Version history (all iterations with timestamps), 2) Decision log (why each choice was made), 3) Source attribution (where information came from), 4) Change rationale (reasoning for modifications), 5) Approval workflow (who reviewed/approved), 6) Compliance checklist (SOX compliance), 7) Risk assessment (potential issues identified), 8) Revision notes (what changed and why). Format: Main content + separate audit trail section. Maintain traceability for 7 years."
  },
  {
    id: "llm-chain-of-thought",
    title: "Chain of Thought Reasoning",
    category: "llm-workflows",
    tool: "claude",
    description: "Break down complex problems with step-by-step reasoning and verification",
    prompt: "Solve [problem] using chain of thought reasoning. Process: 1) Understand the problem (restate in your own words), 2) Identify key components and constraints, 3) Break into sub-problems, 4) Solve each sub-problem step-by-step, 5) Show your reasoning at each step, 6) Verify intermediate results, 7) Combine solutions, 8) Validate final answer, 9) Check for edge cases, 10) Provide confidence level. Format: Show all steps, reasoning, and verification. Problem: [problem_description]",
    tags: ["llm", "reasoning", "problem-solving", "logic", "analysis", "professional"],
    useCase: "Complex problem solving, mathematical reasoning, logical analysis, decision making, troubleshooting",
    tips: [
      "Replace [problem] with specific problem type: 'mathematical', 'logical', 'business', 'technical'",
      "Replace [problem_description] with actual problem to solve",
      "Specify depth: 'detailed reasoning', 'step-by-step', 'with verification'",
      "Add requirements: 'show all steps', 'explain reasoning', 'verify answer', 'check edge cases'"
    ],
    example: "Solve this business optimization problem using chain of thought reasoning. Process: 1) Understand the problem (restate in your own words), 2) Identify key components and constraints, 3) Break into sub-problems, 4) Solve each sub-problem step-by-step, 5) Show your reasoning at each step, 6) Verify intermediate results, 7) Combine solutions, 8) Validate final answer, 9) Check for edge cases, 10) Provide confidence level. Format: Show all steps, reasoning, and verification. Problem: Optimize resource allocation across 5 projects with budget constraints."
  },
  {
    id: "llm-security-review",
    title: "Security & Vulnerability Assessment",
    category: "llm-workflows",
    tool: "claude",
    description: "Review code and content for security vulnerabilities and best practices",
    prompt: "Perform security review of [code/content]. Check for: 1) Injection vulnerabilities (SQL, XSS, command), 2) Authentication and authorization flaws, 3) Sensitive data exposure (secrets, PII, credentials), 4) Insecure dependencies and outdated libraries, 5) Security misconfigurations, 6) Cryptographic weaknesses, 7) Input validation issues, 8) Error handling that leaks information, 9) Insecure communication (HTTP, weak TLS), 10) Access control problems. For each finding: a) Vulnerability type and severity, b) Location and code reference, c) Exploit scenario, d) Remediation steps, e) OWASP category. Provide: security report, risk assessment, and prioritized remediation plan.",
    tags: ["llm", "security", "vulnerability", "review", "compliance", "professional"],
    useCase: "Code security audits, penetration testing prep, compliance reviews, security best practices, vulnerability assessment",
    tips: [
      "Replace [code/content] with actual code or content to review",
      "Specify scope: 'full application', 'API endpoints', 'authentication flow', 'data handling'",
      "Add standards: 'OWASP Top 10', 'CWE', 'industry best practices', 'company security policy'",
      "Include context: 'production code', 'new feature', 'legacy system', 'third-party integration'"
    ],
    example: "Perform security review of this authentication API. Check for: 1) Injection vulnerabilities (SQL, XSS, command), 2) Authentication and authorization flaws, 3) Sensitive data exposure (secrets, PII, credentials), 4) Insecure dependencies and outdated libraries, 5) Security misconfigurations, 6) Cryptographic weaknesses, 7) Input validation issues, 8) Error handling that leaks information, 9) Insecure communication (HTTP, weak TLS), 10) Access control problems. For each finding: a) Vulnerability type and severity, b) Location and code reference, c) Exploit scenario, d) Remediation steps, e) OWASP category. Provide: security report, risk assessment, and prioritized remediation plan."
  },
  
  // Development-AI Prompts - Coding & Workflow Automation
  {
    id: "git-workflow-automation",
    title: "Git Workflow & Commit Message Automation",
    category: "development-ai",
    tool: "cursor",
    description: "Generate semantic commit messages and automate Git workflows with best practices",
    prompt: "Analyze these code changes: [changes]. Generate: 1) Semantic commit message following Conventional Commits (type(scope): subject), 2) Branch naming suggestion, 3) PR title and description, 4) Changelog entry, 5) Related files that might need updates, 6) Breaking changes if any. Use types: feat, fix, docs, style, refactor, test, chore. Make messages clear, concise, and actionable.",
    tags: ["git", "workflow", "automation", "version-control", "professional"],
    useCase: "Git workflows, commit standardization, PR automation, changelog generation, team collaboration",
    tips: [
      "Paste git diff or describe changes made",
      "Specify project type: 'web app', 'API', 'library', 'mobile app'",
      "Include context: 'new feature', 'bug fix', 'refactor', 'documentation'",
      "Use for maintaining consistent commit history across teams"
    ],
    example: "Analyze these code changes: Added user authentication with JWT tokens, implemented login/logout endpoints, added password hashing with bcrypt, created user model with validation. Generate: 1) Semantic commit message following Conventional Commits, 2) Branch naming suggestion, 3) PR title and description, 4) Changelog entry, 5) Related files that might need updates, 6) Breaking changes if any."
  },
  {
    id: "ci-cd-pipeline-setup",
    title: "CI/CD Pipeline Configuration",
    category: "development-ai",
    tool: "cursor",
    description: "Create complete CI/CD pipeline configurations for automated testing and deployment",
    prompt: "Create a CI/CD pipeline configuration for [project_type] using [platform]. Include: 1) Build steps with dependency installation, 2) Test stages (unit, integration, e2e), 3) Code quality checks (linting, formatting, security scanning), 4) Build and artifact generation, 5) Deployment stages (staging, production), 6) Environment variables and secrets management, 7) Notification setup (Slack, email), 8) Rollback procedures. Make it production-ready and secure.",
    tags: ["ci-cd", "automation", "devops", "deployment", "professional"],
    useCase: "CI/CD setup, automated testing, deployment automation, DevOps workflows, team productivity",
    tips: [
      "Replace [project_type] with 'Node.js app', 'Python API', 'React frontend', 'Docker container'",
      "Replace [platform] with 'GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI', 'Azure DevOps'",
      "Specify deployment targets: 'AWS', 'Heroku', 'Vercel', 'Docker registry'",
      "Include testing frameworks: 'Jest', 'pytest', 'Cypress', 'Playwright'"
    ],
    example: "Create a CI/CD pipeline configuration for Node.js API using GitHub Actions. Include: 1) Build steps with dependency installation, 2) Test stages (unit, integration, e2e), 3) Code quality checks (linting, formatting, security scanning), 4) Build and artifact generation, 5) Deployment stages (staging, production), 6) Environment variables and secrets management, 7) Notification setup (Slack, email), 8) Rollback procedures."
  },
  {
    id: "testing-strategy-comprehensive",
    title: "Comprehensive Testing Strategy",
    category: "development-ai",
    tool: "cursor",
    description: "Design complete testing strategy with unit, integration, and e2e test plans",
    prompt: "Design a comprehensive testing strategy for [project]. Include: 1) Test pyramid structure (unit, integration, e2e ratios), 2) Unit test plan with coverage goals, 3) Integration test scenarios, 4) E2E test flows for critical paths, 5) Test data management strategy, 6) Mocking and stubbing approach, 7) Performance testing plan, 8) Security testing checklist, 9) Test automation framework recommendations, 10) CI/CD integration. Provide specific examples and test cases.",
    tags: ["testing", "qa", "automation", "quality-assurance", "professional"],
    useCase: "Test planning, quality assurance, test automation, coverage goals, team testing standards",
    tips: [
      "Replace [project] with specific application or feature",
      "Specify tech stack: 'React + Node.js', 'Python Django', 'Go microservices'",
      "Include testing frameworks: 'Jest', 'Cypress', 'pytest', 'Playwright'",
      "Define coverage targets: '80% unit', '60% integration', 'critical paths e2e'"
    ],
    example: "Design a comprehensive testing strategy for e-commerce API. Include: 1) Test pyramid structure, 2) Unit test plan with 80% coverage goal, 3) Integration test scenarios for payment and inventory, 4) E2E test flows for checkout process, 5) Test data management strategy, 6) Mocking approach for external services, 7) Performance testing plan, 8) Security testing checklist, 9) Test automation framework recommendations, 10) CI/CD integration."
  },
  {
    id: "debugging-workflow",
    title: "Systematic Debugging Workflow",
    category: "development-ai",
    tool: "cursor",
    description: "Structured approach to debugging with step-by-step investigation and resolution",
    prompt: "Debug this issue: [problem_description]. Follow systematic approach: 1) Reproduce the issue with steps, 2) Identify symptoms and error messages, 3) Check logs and stack traces, 4) Isolate the problem area (code, data, environment), 5) Form hypotheses about root cause, 6) Test hypotheses with targeted debugging, 7) Identify root cause, 8) Propose fix with explanation, 9) Test fix thoroughly, 10) Document solution and prevention. Provide code examples and debugging commands.",
    tags: ["debugging", "troubleshooting", "problem-solving", "development", "professional"],
    useCase: "Bug fixing, issue resolution, troubleshooting, production debugging, team debugging standards",
    tips: [
      "Describe the issue: error messages, unexpected behavior, when it occurs",
      "Include context: 'production', 'development', 'specific user action', 'environment'",
      "Provide relevant code snippets, logs, or error traces",
      "Specify tech stack and tools available for debugging"
    ],
    example: "Debug this issue: Users are getting 500 errors when submitting forms. Error occurs intermittently in production. Follow systematic approach: 1) Reproduce the issue, 2) Identify symptoms, 3) Check logs, 4) Isolate problem area, 5) Form hypotheses, 6) Test hypotheses, 7) Identify root cause, 8) Propose fix, 9) Test fix, 10) Document solution."
  },
  {
    id: "code-refactoring-strategy",
    title: "Code Refactoring Strategy",
    category: "development-ai",
    tool: "cursor",
    description: "Plan and execute safe code refactoring with testing and risk mitigation",
    prompt: "Create a refactoring strategy for [code/module]. Include: 1) Current code analysis (complexity, dependencies, technical debt), 2) Refactoring goals and benefits, 3) Step-by-step refactoring plan (small, incremental changes), 4) Test coverage requirements before refactoring, 5) Risk assessment and mitigation, 6) Code review checklist, 7) Rollback plan, 8) Performance impact analysis, 9) Documentation updates needed, 10) Success metrics. Make it safe and incremental.",
    tags: ["refactoring", "code-quality", "maintainability", "technical-debt", "professional"],
    useCase: "Code improvement, technical debt reduction, maintainability, legacy code modernization, team standards",
    tips: [
      "Provide code or describe module/function to refactor",
      "Specify goals: 'improve readability', 'reduce complexity', 'modernize', 'optimize performance'",
      "Include current issues: 'duplicated code', 'tight coupling', 'poor naming', 'missing tests'",
      "Define success criteria: 'reduced complexity', 'better test coverage', 'improved performance'"
    ],
    example: "Create a refactoring strategy for legacy authentication module. Include: 1) Current code analysis, 2) Refactoring goals, 3) Step-by-step plan, 4) Test coverage requirements, 5) Risk assessment, 6) Code review checklist, 7) Rollback plan, 8) Performance impact, 9) Documentation updates, 10) Success metrics."
  },
  {
    id: "api-development-guide",
    title: "REST API Development Guide",
    category: "development-ai",
    tool: "cursor",
    description: "Design and implement RESTful APIs with best practices, documentation, and testing",
    prompt: "Design a REST API for [resource/feature]. Include: 1) API endpoints with HTTP methods (GET, POST, PUT, DELETE, PATCH), 2) Request/response schemas with validation rules, 3) Authentication and authorization strategy, 4) Error handling and status codes, 5) Pagination and filtering, 6) Rate limiting approach, 7) API versioning strategy, 8) OpenAPI/Swagger documentation, 9) Testing strategy (unit, integration, contract tests), 10) Security best practices. Provide complete implementation guide.",
    tags: ["api", "rest", "backend", "documentation", "professional"],
    useCase: "API development, backend design, microservices, integration, API documentation",
    tips: [
      "Replace [resource/feature] with 'user management', 'product catalog', 'payment processing'",
      "Specify framework: 'Express.js', 'FastAPI', 'Django REST', 'Spring Boot'",
      "Include requirements: 'authentication', 'real-time', 'file upload', 'webhooks'",
      "Define data format: 'JSON', 'GraphQL', 'REST'"
    ],
    example: "Design a REST API for user management system. Include: 1) API endpoints, 2) Request/response schemas, 3) Authentication strategy, 4) Error handling, 5) Pagination, 6) Rate limiting, 7) API versioning, 8) OpenAPI documentation, 9) Testing strategy, 10) Security best practices."
  },
  {
    id: "database-design-migration",
    title: "Database Design & Migration Strategy",
    category: "development-ai",
    tool: "cursor",
    description: "Design database schema and create safe migration plans with rollback strategies",
    prompt: "Design database schema for [application/feature] and create migration strategy. Include: 1) Entity-relationship diagram (tables, relationships, constraints), 2) Indexing strategy for performance, 3) Data types and constraints, 4) Migration plan (versioning, rollback procedures), 5) Seed data strategy, 6) Backup and recovery plan, 7) Performance optimization (query optimization, connection pooling), 8) Security considerations (encryption, access control), 9) Monitoring and maintenance, 10) Documentation. Make it production-ready.",
    tags: ["database", "sql", "migration", "schema-design", "professional"],
    useCase: "Database design, schema migration, data modeling, performance optimization, team standards",
    tips: [
      "Replace [application/feature] with 'e-commerce', 'user management', 'analytics platform'",
      "Specify database: 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'",
      "Include requirements: 'scalability', 'ACID compliance', 'real-time', 'analytics'",
      "Define migration tool: 'Alembic', 'Laravel migrations', 'Flyway', 'Knex.js'"
    ],
    example: "Design database schema for e-commerce platform and create migration strategy. Include: 1) ER diagram, 2) Indexing strategy, 3) Data types, 4) Migration plan, 5) Seed data, 6) Backup plan, 7) Performance optimization, 8) Security, 9) Monitoring, 10) Documentation."
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization Guide",
    category: "development-ai",
    tool: "cursor",
    description: "Identify and fix performance bottlenecks with profiling and optimization strategies",
    prompt: "Analyze and optimize performance for [application/component]. Include: 1) Performance profiling (identify bottlenecks), 2) Frontend optimization (bundle size, lazy loading, caching), 3) Backend optimization (database queries, API response times, caching), 4) Database optimization (indexes, query optimization, connection pooling), 5) Asset optimization (images, fonts, static files), 6) CDN and caching strategy, 7) Code-level optimizations (algorithms, data structures), 8) Monitoring and metrics, 9) Load testing plan, 10) Performance budget and goals. Provide specific recommendations.",
    tags: ["performance", "optimization", "profiling", "speed", "professional"],
    useCase: "Performance improvement, speed optimization, scalability, user experience, production optimization",
    tips: [
      "Replace [application/component] with specific area: 'API endpoints', 'React app', 'database queries'",
      "Include current issues: 'slow page loads', 'high API latency', 'database bottlenecks'",
      "Specify tools: 'Chrome DevTools', 'New Relic', 'Datadog', 'Lighthouse'",
      "Define targets: 'page load < 2s', 'API response < 200ms', 'database query < 50ms'"
    ],
    example: "Analyze and optimize performance for React e-commerce app. Include: 1) Performance profiling, 2) Frontend optimization, 3) Backend optimization, 4) Database optimization, 5) Asset optimization, 6) CDN strategy, 7) Code optimizations, 8) Monitoring, 9) Load testing, 10) Performance budget."
  },
  {
    id: "deployment-strategy",
    title: "Production Deployment Strategy",
    category: "development-ai",
    tool: "cursor",
    description: "Plan safe production deployments with rollback, monitoring, and zero-downtime strategies",
    prompt: "Create deployment strategy for [application] to [platform]. Include: 1) Deployment approach (blue-green, canary, rolling), 2) Pre-deployment checklist (tests, backups, rollback plan), 3) Environment configuration (staging, production), 4) Database migration strategy, 5) Zero-downtime deployment plan, 6) Health checks and monitoring, 7) Rollback procedures, 8) Post-deployment verification, 9) Communication plan (team notifications), 10) Incident response. Make it production-safe.",
    tags: ["deployment", "devops", "production", "strategy", "professional"],
    useCase: "Production deployments, release management, zero-downtime updates, team coordination",
    tips: [
      "Replace [application] with 'web app', 'API', 'microservice', 'mobile backend'",
      "Replace [platform] with 'AWS', 'Heroku', 'Vercel', 'Docker', 'Kubernetes'",
      "Specify requirements: 'zero-downtime', 'database migrations', 'CDN updates'",
      "Include deployment frequency: 'daily', 'weekly', 'on-demand'"
    ],
    example: "Create deployment strategy for Node.js API to AWS. Include: 1) Deployment approach, 2) Pre-deployment checklist, 3) Environment configuration, 4) Database migration strategy, 5) Zero-downtime plan, 6) Health checks, 7) Rollback procedures, 8) Post-deployment verification, 9) Communication plan, 10) Incident response."
  },
  {
    id: "architecture-decision-records",
    title: "Architecture Decision Records (ADR)",
    category: "development-ai",
    tool: "cursor",
    description: "Document architecture decisions with context, alternatives, and consequences",
    prompt: "Create Architecture Decision Record for [decision]. Include: 1) Title and status (proposed, accepted, deprecated), 2) Context (problem, constraints, requirements), 3) Decision (chosen solution), 4) Alternatives considered (with pros/cons), 5) Consequences (positive, negative, risks), 6) Implementation notes, 7) References and resources, 8) Review date. Follow ADR format and make it comprehensive.",
    tags: ["architecture", "documentation", "decision-making", "technical-leadership", "professional"],
    useCase: "Architecture decisions, technical documentation, team alignment, knowledge sharing",
    tips: [
      "Replace [decision] with 'database choice', 'API design', 'authentication method', 'deployment strategy'",
      "Include context: 'team size', 'scalability needs', 'budget constraints', 'timeline'",
      "List alternatives: 'PostgreSQL vs MongoDB', 'REST vs GraphQL', 'JWT vs OAuth'",
      "Specify consequences: 'performance impact', 'maintenance cost', 'team learning curve'"
    ],
    example: "Create Architecture Decision Record for choosing GraphQL over REST API. Include: 1) Title and status, 2) Context, 3) Decision, 4) Alternatives considered, 5) Consequences, 6) Implementation notes, 7) References, 8) Review date."
  },
  
  // Advanced LLM Workflow Prompts
  {
    id: "prompt-engineering-best-practices",
    title: "Prompt Engineering Best Practices",
    category: "llm-workflows",
    tool: "claude",
    description: "Master prompt engineering with structured techniques for better AI responses",
    prompt: "Teach me prompt engineering best practices for [use_case]. Include: 1) Prompt structure (role, context, task, format), 2) Few-shot learning examples, 3) Chain-of-thought prompting, 4) Output formatting techniques, 5) Constraint and guardrail setting, 6) Iterative refinement strategies, 7) Token optimization, 8) Error handling and validation, 9) Prompt versioning and testing, 10) Common pitfalls to avoid. Provide practical examples and templates.",
    tags: ["llm", "prompt-engineering", "best-practices", "optimization", "professional"],
    useCase: "Prompt optimization, AI interaction improvement, cost reduction, better outputs",
    tips: [
      "Replace [use_case] with 'code generation', 'content creation', 'data analysis', 'customer support'",
      "Specify model: 'GPT-4', 'Claude', 'Gemini', 'Llama'",
      "Include goals: 'accuracy', 'creativity', 'consistency', 'cost-efficiency'",
      "Define output format: 'JSON', 'markdown', 'structured text', 'code'"
    ],
    example: "Teach me prompt engineering best practices for code generation. Include: 1) Prompt structure, 2) Few-shot examples, 3) Chain-of-thought, 4) Output formatting, 5) Constraints, 6) Iterative refinement, 7) Token optimization, 8) Error handling, 9) Versioning, 10) Common pitfalls."
  },
  {
    id: "chain-of-thought-reasoning",
    title: "Chain-of-Thought Reasoning",
    category: "llm-workflows",
    tool: "claude",
    description: "Use step-by-step reasoning to solve complex problems with logical chains",
    prompt: "Solve this problem using chain-of-thought reasoning: [problem]. Break down into: 1) Problem understanding and key information, 2) Step-by-step reasoning process, 3) Intermediate conclusions, 4) Final answer with justification, 5) Verification steps, 6) Alternative approaches considered. Show your thinking at each step clearly.",
    tags: ["llm", "reasoning", "problem-solving", "logic", "professional"],
    useCase: "Complex problem solving, logical reasoning, mathematical problems, strategic planning",
    tips: [
      "Replace [problem] with specific problem: 'business decision', 'technical challenge', 'mathematical problem'",
      "Specify complexity: 'multi-step', 'requires analysis', 'has constraints'",
      "Include context: 'business goals', 'technical constraints', 'available resources'",
      "Define output: 'decision', 'solution', 'recommendation', 'analysis'"
    ],
    example: "Solve this problem using chain-of-thought reasoning: Should we build a mobile app or web app for our SaaS product? Break down into: 1) Problem understanding, 2) Step-by-step reasoning, 3) Intermediate conclusions, 4) Final answer, 5) Verification, 6) Alternatives."
  },
  {
    id: "rag-implementation",
    title: "RAG (Retrieval Augmented Generation) Implementation",
    category: "llm-workflows",
    tool: "claude",
    description: "Implement RAG system for context-aware AI responses using external knowledge",
    prompt: "Design a RAG system for [domain/use_case]. Include: 1) Knowledge base structure and data sources, 2) Embedding model selection and vector database choice, 3) Retrieval strategy (semantic search, hybrid search), 4) Context window management, 5) Prompt engineering for RAG (context injection, citation), 6) Evaluation metrics (relevance, accuracy, hallucination), 7) Implementation architecture, 8) Optimization strategies, 9) Error handling and fallbacks, 10) Monitoring and improvement. Provide implementation guide.",
    tags: ["llm", "rag", "vector-database", "knowledge-base", "professional"],
    useCase: "Knowledge bases, document Q&A, customer support, research assistants, domain-specific AI",
    tips: [
      "Replace [domain/use_case] with 'legal documents', 'product documentation', 'research papers', 'customer support'",
      "Specify data sources: 'PDFs', 'web pages', 'databases', 'APIs'",
      "Include requirements: 'real-time', 'accuracy', 'citation', 'multi-language'",
      "Define tools: 'Pinecone', 'Weaviate', 'Chroma', 'FAISS', 'OpenAI embeddings'"
    ],
    example: "Design a RAG system for customer support. Include: 1) Knowledge base structure, 2) Embedding model, 3) Retrieval strategy, 4) Context management, 5) Prompt engineering, 6) Evaluation metrics, 7) Architecture, 8) Optimization, 9) Error handling, 10) Monitoring."
  },
  
  // Original Creative Multi-Modal Prompts
  {
    id: "multi-modal-brand-campaign",
    title: "Multi-Modal Brand Campaign Workflow",
    category: "design-branding",
    tool: "midjourney",
    description: "Create cohesive brand campaign across image, video, and audio with consistent style",
    prompt: "Create multi-modal brand campaign for [brand/product]. Workflow: 1) Brand identity foundation (colors, style, mood), 2) Image assets (social posts, banners, product shots), 3) Video content (ads, social videos, explainers), 4) Audio elements (voiceover, music, sound effects), 5) Style consistency across all media, 6) Platform-specific adaptations, 7) A/B testing variants, 8) Production timeline. Ensure visual and audio harmony across all assets.",
    tags: ["multi-modal", "branding", "campaign", "workflow", "creative"],
    useCase: "Brand campaigns, product launches, marketing campaigns, social media content, integrated media",
    tips: [
      "Replace [brand/product] with specific brand or product name",
      "Specify campaign goals: 'awareness', 'conversion', 'engagement', 'launch'",
      "Include platforms: 'Instagram', 'YouTube', 'TikTok', 'website', 'email'",
      "Define style: 'minimalist', 'bold', 'elegant', 'playful', 'professional'"
    ],
    example: "Create multi-modal brand campaign for tech startup launch. Workflow: 1) Brand identity, 2) Image assets, 3) Video content, 4) Audio elements, 5) Style consistency, 6) Platform adaptations, 7) A/B variants, 8) Timeline."
  },
  {
    id: "prompt-chaining-strategy",
    title: "Prompt Chaining for Complex Workflows",
    category: "llm-workflows",
    tool: "claude",
    description: "Chain multiple prompts together for complex multi-step creative or analytical workflows",
    prompt: "Design a prompt chain for [workflow]. Include: 1) Workflow breakdown into sequential steps, 2) Prompt for each step with input/output specifications, 3) Data passing between prompts, 4) Error handling and validation at each step, 5) Conditional branching logic, 6) Final output assembly, 7) Testing strategy for each link, 8) Optimization opportunities. Make it modular and maintainable.",
    tags: ["llm", "workflow", "automation", "chaining", "professional"],
    useCase: "Complex workflows, multi-step processes, content pipelines, data processing, automation",
    tips: [
      "Replace [workflow] with 'content creation pipeline', 'data analysis workflow', 'creative project'",
      "Specify steps: 'research → outline → draft → edit → publish'",
      "Include validation: 'quality checks', 'format validation', 'content review'",
      "Define tools: 'Claude', 'GPT-4', 'image generators', 'video tools'"
    ],
    example: "Design a prompt chain for blog post creation. Include: 1) Workflow breakdown, 2) Prompts for each step, 3) Data passing, 4) Error handling, 5) Branching logic, 6) Output assembly, 7) Testing, 8) Optimization."
  },
  {
    id: "iterative-refinement-workflow",
    title: "Iterative Refinement Workflow",
    category: "templates",
    tool: "midjourney",
    description: "Systematic approach to refining creative outputs through multiple iterations",
    prompt: "Create iterative refinement workflow for [creative_project]. Process: 1) Initial generation with base prompt, 2) First iteration feedback (what works, what needs improvement), 3) Refined prompt with specific adjustments, 4) Second iteration with targeted changes, 5) Fine-tuning for final details, 6) Quality checklist, 7) Version comparison, 8) Final selection criteria. Document each iteration's changes and results.",
    tags: ["workflow", "refinement", "iteration", "quality", "creative"],
    useCase: "Creative projects, design iterations, prompt optimization, quality improvement, client revisions",
    tips: [
      "Replace [creative_project] with 'logo design', 'video production', 'image generation', 'brand identity'",
      "Specify refinement goals: 'better composition', 'improved colors', 'more detail', 'style consistency'",
      "Include feedback sources: 'client feedback', 'team review', 'user testing', 'quality metrics'",
      "Define success criteria: 'client approval', 'quality score', 'brand alignment'"
    ],
    example: "Create iterative refinement workflow for logo design. Process: 1) Initial generation, 2) First iteration feedback, 3) Refined prompt, 4) Second iteration, 5) Fine-tuning, 6) Quality checklist, 7) Version comparison, 8) Final selection."
  },
  {
    id: "style-transfer-multi-modal",
    title: "Style Transfer Across Modalities",
    category: "design-branding",
    tool: "midjourney",
    description: "Apply consistent artistic style across images, videos, and audio for unified brand experience",
    prompt: "Apply [style] consistently across: 1) Image assets (photos, illustrations, graphics), 2) Video content (motion graphics, transitions, color grading), 3) Audio elements (music style, voice tone, sound design), 4) Style guide documentation, 5) Platform-specific adaptations, 6) Quality consistency checks. Ensure style harmony across all media types.",
    tags: ["style", "multi-modal", "branding", "consistency", "creative"],
    useCase: "Brand consistency, artistic projects, campaign creation, multi-platform content, style guides",
    tips: [
      "Replace [style] with 'minimalist', 'vintage', 'futuristic', 'organic', 'geometric', 'artistic movement'",
      "Specify media: 'social media', 'website', 'video ads', 'podcast', 'presentations'",
      "Include style elements: 'color palette', 'typography', 'composition', 'mood', 'texture'",
      "Define consistency level: 'strict', 'flexible', 'platform-adapted'"
    ],
    example: "Apply minimalist style consistently across: 1) Image assets, 2) Video content, 3) Audio elements, 4) Style guide, 5) Platform adaptations, 6) Quality checks."
  },
  {
    id: "ab-testing-creative",
    title: "A/B Testing for Creative Content",
    category: "templates",
    tool: "midjourney",
    description: "Generate and test creative variants to optimize performance and engagement",
    prompt: "Create A/B test variants for [creative_asset]. Include: 1) Hypothesis (what to test), 2) Variant A (control) with specific characteristics, 3) Variant B (test) with changed elements, 4) Additional variants if needed (C, D), 5) Testing methodology (audience, duration, metrics), 6) Success criteria and KPIs, 7) Analysis framework, 8) Implementation plan. Make variants clearly differentiated but comparable.",
    tags: ["ab-testing", "optimization", "marketing", "analytics", "professional"],
    useCase: "Marketing optimization, conversion testing, engagement improvement, creative optimization",
    tips: [
      "Replace [creative_asset] with 'ad creative', 'social post', 'email design', 'landing page'",
      "Specify test elements: 'headline', 'image', 'color', 'layout', 'CTA', 'style'",
      "Include metrics: 'click-through rate', 'conversion rate', 'engagement', 'time on page'",
      "Define audience: 'demographic', 'behavioral', 'geographic', 'random split'"
    ],
    example: "Create A/B test variants for social media ad. Include: 1) Hypothesis, 2) Variant A, 3) Variant B, 4) Additional variants, 5) Testing methodology, 6) Success criteria, 7) Analysis framework, 8) Implementation plan."
  },

  // More Nano Banana Prompts - Image Generation
  {
    id: "nano-architectural-interiors",
    title: "Architectural Interiors",
    category: "photography",
    tool: "nano-banana",
    description: "Generate photorealistic architectural interior shots with professional lighting",
    prompt: "architectural interior, [room type], modern design, natural lighting, wide angle view, photorealistic, 4K quality, professional architecture photography, sharp details, realistic materials",
    tags: ["architecture", "interior", "photorealistic", "4k"],
    useCase: "Architecture visualization, real estate marketing, interior design, portfolio work",
    tips: [
      "Specify room: 'living room', 'kitchen', 'bedroom', 'office', 'restaurant'",
      "Add style: 'modern', 'minimalist', 'industrial', 'luxury', 'scandinavian'",
      "Include lighting: 'natural daylight', 'golden hour', 'evening ambiance', 'studio lighting'",
      "Specify camera: 'wide angle', 'fisheye', 'standard view'"
    ],
    example: "architectural interior, modern living room, minimalist design, natural lighting, wide angle view, photorealistic, 4K quality, professional architecture photography, sharp details, realistic materials"
  },
  {
    id: "nano-fashion-photography",
    title: "Fashion Photography",
    category: "photography",
    tool: "nano-banana",
    description: "Create high-end fashion photography with studio-quality lighting",
    prompt: "fashion photography, [subject description], professional studio lighting, high fashion, editorial style, 4K quality, sharp focus, photorealistic, commercial photography",
    tags: ["fashion", "portrait", "commercial", "4k"],
    useCase: "Fashion campaigns, lookbooks, editorial shoots, brand marketing",
    tips: [
      "Specify subject: 'model in designer dress', 'streetwear outfit', 'accessories'",
      "Add style: 'editorial', 'runway', 'street style', 'high fashion', 'commercial'",
      "Include lighting: 'dramatic studio', 'soft natural', 'high contrast', 'rim lighting'",
      "Add mood: 'elegant', 'edgy', 'minimalist', 'luxury'"
    ],
    example: "fashion photography, model in designer evening gown, professional studio lighting, high fashion, editorial style, 4K quality, sharp focus, photorealistic, commercial photography"
  },
  {
    id: "nano-food-photography",
    title: "Food Photography",
    category: "photography",
    tool: "nano-banana",
    description: "Generate appetizing food photography for menus and marketing",
    prompt: "food photography, [dish description], appetizing, professional food styling, natural lighting, shallow depth of field, 4K quality, sharp details, photorealistic, commercial photography",
    tags: ["food", "commercial", "photorealistic", "4k"],
    useCase: "Restaurant menus, food blogs, cookbooks, marketing materials",
    tips: [
      "Specify dish: 'pasta', 'dessert', 'breakfast', 'gourmet meal', 'beverage'",
      "Add styling: 'rustic', 'minimalist', 'luxury', 'casual', 'fine dining'",
      "Include lighting: 'natural window light', 'soft studio', 'warm ambient'",
      "Specify focus: 'shallow depth of field', 'everything in focus', 'selective focus'"
    ],
    example: "food photography, gourmet pasta dish, appetizing, professional food styling, natural lighting, shallow depth of field, 4K quality, sharp details, photorealistic, commercial photography"
  },
  {
    id: "nano-landscape-photography",
    title: "Landscape Photography",
    category: "photography",
    tool: "nano-banana",
    description: "Create stunning landscape photography with natural lighting",
    prompt: "landscape photography, [location/scene], natural lighting, golden hour, wide angle, photorealistic, 4K quality, dramatic sky, sharp details, professional photography",
    tags: ["landscape", "nature", "photorealistic", "4k"],
    useCase: "Travel photography, nature photography, stock images, wall art",
    tips: [
      "Specify location: 'mountain range', 'beach sunset', 'forest', 'desert', 'cityscape'",
      "Add time: 'golden hour', 'blue hour', 'midday', 'sunset', 'sunrise'",
      "Include weather: 'clear sky', 'dramatic clouds', 'misty', 'stormy'",
      "Specify composition: 'wide angle', 'panoramic', 'vertical', 'rule of thirds'"
    ],
    example: "landscape photography, mountain range at sunset, natural lighting, golden hour, wide angle, photorealistic, 4K quality, dramatic sky, sharp details, professional photography"
  },
  {
    id: "nano-abstract-art",
    title: "Abstract Art Generation",
    category: "design-branding",
    tool: "nano-banana",
    description: "Generate abstract artistic images with creative compositions",
    prompt: "abstract art, [style description], vibrant colors, creative composition, artistic, 4K quality, high detail, photorealistic textures, modern art",
    tags: ["abstract", "art", "creative", "4k"],
    useCase: "Art prints, digital art, creative projects, backgrounds, branding",
    tips: [
      "Specify style: 'geometric', 'fluid', 'minimalist', 'colorful', 'monochrome'",
      "Add colors: 'vibrant', 'pastel', 'bold', 'muted', 'neon'",
      "Include texture: 'smooth', 'textured', 'layered', 'gradient'",
      "Specify mood: 'energetic', 'calm', 'dramatic', 'playful'"
    ],
    example: "abstract art, geometric patterns with vibrant colors, creative composition, artistic, 4K quality, high detail, photorealistic textures, modern art"
  },

  // Role-Based LLM Agent Prompts (Tool-Agnostic)
  {
    id: "writer-agent-creative-fiction",
    title: "Writer Agent: Creative Fiction",
    category: "llm-workflows",
    tool: "llm",
    description: "Act as a creative fiction writer to craft engaging stories, narratives, and character development",
    prompt: "You are a creative fiction writer. Write [story type] about [topic/theme]. Requirements: 1) Develop compelling characters with depth and motivation, 2) Create vivid settings with sensory details, 3) Build narrative tension and pacing, 4) Use dialogue that reveals character and advances plot, 5) Show rather than tell through actions and descriptions, 6) Include plot twists or unexpected developments, 7) End with satisfying resolution or cliffhanger. Write in [style/tone].",
    tags: ["llm", "writer", "creative", "fiction", "storytelling"],
    useCase: "Short stories, novels, screenplays, creative writing, character development",
    tips: [
      "Specify story type: 'short story', 'novel chapter', 'flash fiction', 'screenplay'",
      "Define genre: 'sci-fi', 'fantasy', 'mystery', 'romance', 'literary fiction'",
      "Set tone: 'dark', 'humorous', 'dramatic', 'lighthearted', 'suspenseful'",
      "Include length: '500 words', '2000 words', 'full chapter'",
      "Add requirements: 'first person', 'third person', 'multiple POVs'"
    ],
    example: "You are a creative fiction writer. Write a short story about a time traveler who discovers they're their own ancestor. Requirements: 1) Develop compelling characters with depth and motivation, 2) Create vivid settings with sensory details, 3) Build narrative tension and pacing, 4) Use dialogue that reveals character and advances plot, 5) Show rather than tell through actions and descriptions, 6) Include plot twists or unexpected developments, 7) End with satisfying resolution or cliffhanger. Write in a suspenseful, thought-provoking tone."
  },
  {
    id: "writer-agent-content-creation",
    title: "Writer Agent: Content Creation",
    category: "llm-workflows",
    tool: "llm",
    description: "Act as a content writer to create engaging blog posts, articles, and marketing copy",
    prompt: "You are a professional content writer. Create [content type] about [topic]. Requirements: 1) Hook readers with compelling headline and introduction, 2) Structure content with clear sections and subheadings, 3) Use engaging, conversational tone while maintaining authority, 4) Include specific examples, data, or case studies, 5) Add actionable takeaways or practical tips, 6) Optimize for [target audience], 7) Include call-to-action. Write [word count] words in [tone/style].",
    tags: ["llm", "writer", "content", "marketing", "blogging"],
    useCase: "Blog posts, articles, marketing copy, social media content, newsletters",
    tips: [
      "Specify content type: 'blog post', 'article', 'email newsletter', 'social media post'",
      "Define target audience: 'beginners', 'professionals', 'business owners', 'consumers'",
      "Set tone: 'professional', 'casual', 'friendly', 'authoritative', 'conversational'",
      "Include SEO: 'include keywords', 'optimize for search', 'include meta description'",
      "Add format: 'listicle', 'how-to', 'opinion piece', 'case study'"
    ],
    example: "You are a professional content writer. Create a blog post about AI tools for small businesses. Requirements: 1) Hook readers with compelling headline and introduction, 2) Structure content with clear sections and subheadings, 3) Use engaging, conversational tone while maintaining authority, 4) Include specific examples, data, or case studies, 5) Add actionable takeaways or practical tips, 6) Optimize for small business owners, 7) Include call-to-action. Write 1500 words in a friendly, professional tone."
  },
  {
    id: "research-agent-multi-source-synthesis",
    title: "Research Agent: Multi-Source Synthesis",
    category: "llm-workflows",
    tool: "llm",
    description: "Act as a research agent to synthesize information from multiple sources with citations",
    prompt: "You are a research agent. Synthesize information from the following sources about [topic]: [Sources/URLs]. Requirements: 1) Extract key findings from each source, 2) Identify common themes and consensus points, 3) Note conflicting viewpoints and debates, 4) Highlight gaps or contradictions in the research, 5) Provide comprehensive analysis with proper citations, 6) Include methodology notes where relevant, 7) Suggest areas for further research. Format: [academic paper/executive summary/detailed report]. Citation style: [APA/MLA/Chicago].",
    tags: ["llm", "research", "synthesis", "citations", "academic"],
    useCase: "Literature reviews, research papers, competitive analysis, market research, fact-checking",
    tips: [
      "Provide multiple sources: research papers, articles, reports, websites",
      "Specify output format: 'academic paper', 'executive summary', 'detailed analysis', 'brief report'",
      "Request citation style: 'APA', 'MLA', 'Chicago', 'IEEE', 'Harvard'",
      "Add focus: 'recent studies only', 'peer-reviewed sources', 'include statistics'",
      "Specify depth: 'comprehensive', 'summary', 'detailed analysis'"
    ],
    example: "You are a research agent. Synthesize information from the following sources about AI in healthcare: [5 research papers, 3 industry reports]. Requirements: 1) Extract key findings from each source, 2) Identify common themes and consensus points, 3) Note conflicting viewpoints and debates, 4) Highlight gaps or contradictions in the research, 5) Provide comprehensive analysis with proper citations, 6) Include methodology notes where relevant, 7) Suggest areas for further research. Format: academic paper. Citation style: APA."
  },
  {
    id: "research-agent-citation-requests",
    title: "Research Agent: Citation Requests",
    category: "llm-workflows",
    tool: "llm",
    description: "Act as a research agent to find and cite credible sources for claims and statements",
    prompt: "You are a research agent. For the following claim/statement: '[claim]', provide: 1) Verification of accuracy, 2) Credible sources that support or refute this claim (with URLs, dates, authors), 3) Context and nuance around the claim, 4) Confidence level (high/medium/low) for each source, 5) Any conflicting evidence or counterarguments, 6) Recommended sources for further reading. Format citations in [APA/MLA/Chicago] style. Prioritize: [peer-reviewed/academic/industry reports/recent sources].",
    tags: ["llm", "research", "citations", "fact-checking", "verification"],
    useCase: "Fact-checking, academic writing, journalism, research verification, citation building",
    tips: [
      "Specify claim clearly with context",
      "Request source types: 'peer-reviewed', 'academic', 'industry reports', 'news articles'",
      "Set recency: 'recent sources only', 'within last 5 years', 'historical sources'",
      "Add verification level: 'high confidence only', 'include all evidence'",
      "Specify citation format: 'APA', 'MLA', 'Chicago', 'IEEE'"
    ],
    example: "You are a research agent. For the following claim/statement: 'AI can improve diagnostic accuracy in medical imaging by 20-30%', provide: 1) Verification of accuracy, 2) Credible sources that support or refute this claim (with URLs, dates, authors), 3) Context and nuance around the claim, 4) Confidence level (high/medium/low) for each source, 5) Any conflicting evidence or counterarguments, 6) Recommended sources for further reading. Format citations in APA style. Prioritize: peer-reviewed academic sources from the last 3 years."
  },
  {
    id: "analysis-agent-data-analysis",
    title: "Analysis Agent: Data Analysis",
    category: "llm-workflows",
    tool: "llm",
    description: "Act as a data analyst to interpret data, identify patterns, and provide insights",
    prompt: "You are a data analyst. Analyze the following data: [data/context]. Provide: 1) Key metrics and statistics summary, 2) Trends and patterns identified, 3) Outliers or anomalies detected, 4) Comparative analysis (if applicable), 5) Actionable insights and recommendations, 6) Potential limitations or caveats, 7) Visualizations or charts that would help (describe them). Focus on: [business impact/user behavior/performance metrics/etc.].",
    tags: ["llm", "analysis", "data", "insights", "business"],
    useCase: "Business intelligence, performance analysis, user behavior analysis, market research, reporting",
    tips: [
      "Provide data clearly: 'sales data', 'user metrics', 'survey results', 'performance data'",
      "Specify focus: 'revenue trends', 'user engagement', 'conversion rates', 'operational efficiency'",
      "Request format: 'executive summary', 'detailed report', 'dashboard insights', 'presentation'",
      "Add timeframe: 'Q1 2024', 'last 6 months', 'year-over-year', 'monthly trends'",
      "Include comparisons: 'vs previous period', 'vs competitors', 'vs industry benchmarks'"
    ],
    example: "You are a data analyst. Analyze the following e-commerce sales data: [monthly sales, conversion rates, traffic sources for last 12 months]. Provide: 1) Key metrics and statistics summary, 2) Trends and patterns identified, 3) Outliers or anomalies detected, 4) Comparative analysis (if applicable), 5) Actionable insights and recommendations, 6) Potential limitations or caveats, 7) Visualizations or charts that would help (describe them). Focus on: revenue growth and conversion optimization opportunities."
  },
  {
    id: "analysis-agent-business-analysis",
    title: "Analysis Agent: Business Analysis",
    category: "llm-workflows",
    tool: "llm",
    description: "Act as a business analyst to evaluate strategies, market opportunities, and competitive positioning",
    prompt: "You are a business analyst. Analyze [business situation/strategy/market opportunity]. Provide: 1) SWOT analysis (Strengths, Weaknesses, Opportunities, Threats), 2) Market opportunity assessment, 3) Competitive landscape analysis, 4) Risk assessment and mitigation strategies, 5) Financial implications and projections, 6) Strategic recommendations with priorities, 7) Implementation roadmap. Context: [industry/company size/market]. Focus on: [growth/revenue/competitive advantage/etc.].",
    tags: ["llm", "analysis", "business", "strategy", "consulting"],
    useCase: "Strategic planning, market analysis, competitive research, business planning, investment analysis",
    tips: [
      "Specify business context: 'startup', 'SMB', 'enterprise', 'specific industry'",
      "Define focus: 'market entry', 'product launch', 'expansion', 'optimization', 'pivot'",
      "Add timeframe: 'short-term (3-6 months)', 'medium-term (1-2 years)', 'long-term (3-5 years)'",
      "Include constraints: 'budget limitations', 'resource constraints', 'market conditions'",
      "Request format: 'executive summary', 'detailed analysis', 'presentation', 'action plan'"
    ],
    example: "You are a business analyst. Analyze entering the AI tools market with a new SaaS product. Provide: 1) SWOT analysis (Strengths, Weaknesses, Opportunities, Threats), 2) Market opportunity assessment, 3) Competitive landscape analysis, 4) Risk assessment and mitigation strategies, 5) Financial implications and projections, 6) Strategic recommendations with priorities, 7) Implementation roadmap. Context: B2B SaaS startup targeting small businesses. Focus on: market entry strategy and competitive positioning."
  },
  
  // GTA Style Image Conversion Prompts
  {
    id: "gta-1-style",
    title: "GTA 1 Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA 1 (1997) top-down 2D pixelated graphics style",
    prompt: "Convert this image into Grand Theft Auto 1 (1997) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. Top-down 2D pixelated graphics: Classic DOS/Windows 95 era, top-down isometric view, pixelated sprites, retro 90s computer game aesthetic, low resolution, 2D graphics, classic arcade-style, primitive video game rendering, pixel art style. Apply the exact visual style, graphics quality, and aesthetic of GTA 1. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA 1.",
    tags: ["gta", "video-game", "pixel-art", "retro", "style-transfer"],
    useCase: "Retro game aesthetics, nostalgic content, pixel art transformations",
    tips: [
      "Best for portraits and character images",
      "Preserves facial features while applying pixelated game filter",
      "Works well with urban/crime-themed images"
    ],
    example: "Convert this image into Grand Theft Auto 1 (1997) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-london-style",
    title: "GTA London 1969 Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA London 1969 (1999) top-down 2D pixelated graphics style",
    prompt: "Convert this image into Grand Theft Auto London 1969 (1999) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. Top-down 2D pixelated graphics: British setting expansion, top-down isometric view, pixelated sprites, 1960s London aesthetic, retro computer game graphics, 2D pixel art, classic DOS game style. Apply the exact visual style, graphics quality, and aesthetic of GTA London 1969. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA London 1969.",
    tags: ["gta", "video-game", "pixel-art", "retro", "1960s", "style-transfer"],
    useCase: "Retro game aesthetics, 1960s themed content, British aesthetic",
    tips: [
      "Perfect for 1960s-themed transformations",
      "Maintains subject identity with retro game filter",
      "Great for period-specific content"
    ],
    example: "Convert this image into Grand Theft Auto London 1969 (1999) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-2-style",
    title: "GTA 2 Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA 2 (1999) top-down 2D cyberpunk graphics style",
    prompt: "Convert this image into Grand Theft Auto 2 (1999) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. Top-down 2D cyberpunk graphics: Isometric top-down view, pixelated sprites, cyberpunk/futuristic aesthetic, neon colors, retro computer game graphics, 2D pixel art, dark cyberpunk atmosphere, classic video game style. Apply the exact visual style, graphics quality, and aesthetic of GTA 2. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA 2.",
    tags: ["gta", "video-game", "cyberpunk", "pixel-art", "retro", "style-transfer"],
    useCase: "Cyberpunk aesthetics, futuristic content, neon-themed transformations",
    tips: [
      "Ideal for cyberpunk and futuristic themes",
      "Enhances with neon color grading",
      "Maintains subject while applying cyberpunk game filter"
    ],
    example: "Convert this image into Grand Theft Auto 2 (1999) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-3-style",
    title: "GTA 3 Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA 3 (2001) classic PS2 era 3D graphics style",
    prompt: "Convert this image into Grand Theft Auto 3 (2001) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. Classic PS2 era 3D graphics: Low-poly 3D models, gritty textures, early 2000s PS2 aesthetic, blocky character models, limited color palette, PS2-era 3D rendering, urban crime atmosphere, classic Rockstar 3D game style, clearly video game graphics. Apply the exact visual style, graphics quality, and aesthetic of GTA 3. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA 3.",
    tags: ["gta", "video-game", "ps2", "3d-graphics", "retro", "style-transfer"],
    useCase: "Early 2000s game aesthetics, gritty urban transformations, PS2-era nostalgia",
    tips: [
      "Perfect for gritty urban/crime themes",
      "Applies low-poly 3D game filter",
      "Maintains subject identity with PS2-era graphics"
    ],
    example: "Convert this image into Grand Theft Auto 3 (2001) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-vice-city-style",
    title: "GTA Vice City Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA Vice City (2002) vibrant 80s Miami PS2 graphics style",
    prompt: "Convert this image into Grand Theft Auto Vice City (2002) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. Vibrant 80s Miami PS2 graphics: Neon colors, retro 1980s aesthetic, pastel buildings, palm trees, Miami Vice style, vibrant color grading, 80s fashion and cars, tropical atmosphere, bright and colorful, PS2 3D rendering, video game graphics. Apply the exact visual style, graphics quality, and aesthetic of GTA Vice City. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA Vice City.",
    tags: ["gta", "video-game", "80s", "miami", "neon", "vice-city", "style-transfer"],
    useCase: "1980s aesthetic, Miami Vice style, vibrant colorful transformations",
    tips: [
      "Perfect for 80s-themed content",
      "Enhances with neon and pastel colors",
      "Great for tropical/vacation vibes"
    ],
    example: "Convert this image into Grand Theft Auto Vice City (2002) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-san-andreas-style",
    title: "GTA San Andreas Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA San Andreas (2004) 90s California PS2 graphics style",
    prompt: "Convert this image into Grand Theft Auto San Andreas (2004) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. 90s California PS2 graphics: Improved PS2 3D graphics, diverse environments (urban, desert, countryside), 90s hip-hop culture, gangster aesthetic, more detailed than GTA3, California setting, improved character models, PS2-era video game rendering. Apply the exact visual style, graphics quality, and aesthetic of GTA San Andreas. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA San Andreas.",
    tags: ["gta", "video-game", "90s", "california", "hip-hop", "san-andreas", "style-transfer"],
    useCase: "1990s aesthetic, California vibes, hip-hop culture transformations",
    tips: [
      "Ideal for 90s-themed content",
      "Works well with urban/street culture images",
      "Enhanced PS2 graphics with better detail"
    ],
    example: "Convert this image into Grand Theft Auto San Andreas (2004) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-4-style",
    title: "GTA 4 Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA 4 (2008) stylized HD video game graphics style",
    prompt: "Convert this image into Grand Theft Auto 4 (2008) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. Stylized HD video game graphics: Dark atmosphere with stylized rendering, HD game graphics (NOT photorealistic), video game aesthetic, stylized character models, game-like lighting and shadows, stylized textures, video game rendering engine, gritty urban game environment, Liberty City setting, clearly looks like a video game, stylized 3D graphics. Apply the exact visual style, graphics quality, and aesthetic of GTA 4. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA 4.",
    tags: ["gta", "video-game", "hd", "stylized", "gritty", "style-transfer"],
    useCase: "HD game aesthetics, dark urban transformations, stylized graphics",
    tips: [
      "Perfect for dark, gritty urban themes",
      "HD but clearly video game graphics",
      "Maintains stylized game look"
    ],
    example: "Convert this image into Grand Theft Auto 4 (2008) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-5-style",
    title: "GTA 5 Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA 5 (2013) stylized modern video game graphics style",
    prompt: "Convert this image into Grand Theft Auto 5 (2013) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. Stylized modern video game graphics: Highly detailed but stylized game graphics (NOT photorealistic), Los Santos setting, video game rendering style, stylized lighting and shadows, game-like textures, diverse environments (city, desert, mountains), polished video game visuals, clearly looks like a video game, stylized character models, modern 3D game graphics. Apply the exact visual style, graphics quality, and aesthetic of GTA 5. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA 5.",
    tags: ["gta", "video-game", "modern", "stylized", "los-santos", "style-transfer"],
    useCase: "Modern game aesthetics, diverse environment transformations, polished graphics",
    tips: [
      "Most popular GTA style conversion",
      "Works with diverse settings (urban, desert, mountains)",
      "Polished but clearly video game graphics"
    ],
    example: "Convert this image into Grand Theft Auto 5 (2013) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-online-style",
    title: "GTA Online Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA Online (2013-2024) enhanced GTA5 video game graphics style",
    prompt: "Convert this image into Grand Theft Auto Online (2013-2024) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. Enhanced GTA5 video game graphics: Updated and enhanced GTA5 graphics, multiplayer game aesthetic, polished video game visuals, stylized modern game graphics, Los Santos setting, clearly video game graphics, enhanced textures and lighting, stylized 3D rendering. Apply the exact visual style, graphics quality, and aesthetic of GTA Online. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA Online.",
    tags: ["gta", "video-game", "online", "enhanced", "multiplayer", "style-transfer"],
    useCase: "Enhanced modern game aesthetics, multiplayer-themed transformations",
    tips: [
      "Enhanced version of GTA 5 style",
      "Polished multiplayer game graphics",
      "Best for modern game aesthetic"
    ],
    example: "Convert this image into Grand Theft Auto Online (2013-2024) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-6-style",
    title: "GTA 6 Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA 6 (2025) next-gen stylized video game graphics style",
    prompt: "Convert this image into Grand Theft Auto 6 (2025) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. Next-gen stylized video game graphics: Advanced next-generation game graphics, Vice City setting, cutting-edge video game rendering, stylized high-quality game visuals, modern game engine aesthetic, clearly video game graphics, stylized character models, next-gen game graphics (NOT photorealistic). Apply the exact visual style, graphics quality, and aesthetic of GTA 6. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA 6.",
    tags: ["gta", "video-game", "next-gen", "2025", "vice-city", "cutting-edge", "style-transfer"],
    useCase: "Next-generation game aesthetics, cutting-edge graphics transformations",
    tips: [
      "Latest GTA style with next-gen graphics",
      "Advanced rendering but still clearly video game",
      "Perfect for modern, high-quality game aesthetic"
    ],
    example: "Convert this image into Grand Theft Auto 6 (2025) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-chinatown-wars-style",
    title: "GTA Chinatown Wars Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA Chinatown Wars (2009) cel-shaded comic book graphics style",
    prompt: "Convert this image into Grand Theft Auto Chinatown Wars (2009) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. Cel-shaded comic book graphics: DS/PSP handheld graphics, cel-shaded rendering style, comic book aesthetic, stylized visuals, handheld console graphics, unique art style, video game graphics, cel-shaded 3D models. Apply the exact visual style, graphics quality, and aesthetic of GTA Chinatown Wars. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA Chinatown Wars.",
    tags: ["gta", "video-game", "cel-shaded", "comic-book", "handheld", "style-transfer"],
    useCase: "Comic book aesthetics, cel-shaded transformations, unique art style",
    tips: [
      "Unique cel-shaded comic book look",
      "Perfect for stylized, artistic transformations",
      "Distinctive handheld game graphics"
    ],
    example: "Convert this image into Grand Theft Auto Chinatown Wars (2009) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-liberty-city-stories-style",
    title: "GTA Liberty City Stories Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA Liberty City Stories (2005) PSP/PS2 prequel graphics style",
    prompt: "Convert this image into Grand Theft Auto Liberty City Stories (2005) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. PSP/PS2 prequel graphics: Similar to GTA3 PS2 style, portable console graphics, prequel to GTA3, Liberty City setting, PS2/PSP 3D rendering, video game graphics, handheld console aesthetic. Apply the exact visual style, graphics quality, and aesthetic of GTA Liberty City Stories. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA Liberty City Stories.",
    tags: ["gta", "video-game", "psp", "ps2", "liberty-city", "prequel", "style-transfer"],
    useCase: "PSP/PS2 game aesthetics, portable console graphics transformations",
    tips: [
      "Similar to GTA 3 but portable console optimized",
      "Handheld game graphics aesthetic",
      "Great for retro portable gaming look"
    ],
    example: "Convert this image into Grand Theft Auto Liberty City Stories (2005) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-vice-city-stories-style",
    title: "GTA Vice City Stories Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA Vice City Stories (2006) PSP/PS2 prequel graphics style",
    prompt: "Convert this image into Grand Theft Auto Vice City Stories (2006) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. PSP/PS2 prequel graphics: Similar to Vice City PS2 style, portable console graphics, prequel to Vice City, 80s Miami setting, PS2/PSP 3D rendering, video game graphics, handheld console aesthetic. Apply the exact visual style, graphics quality, and aesthetic of GTA Vice City Stories. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA Vice City Stories.",
    tags: ["gta", "video-game", "psp", "ps2", "vice-city", "80s", "miami", "style-transfer"],
    useCase: "PSP/PS2 game aesthetics, 80s Miami portable console graphics",
    tips: [
      "Vice City style optimized for portable console",
      "80s Miami aesthetic with handheld graphics",
      "Perfect for portable gaming nostalgia"
    ],
    example: "Convert this image into Grand Theft Auto Vice City Stories (2006) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  },
  {
    id: "gta-advance-style",
    title: "GTA Advance Style Conversion",
    category: "image-editing",
    tool: "seedream, chatgpt, nano-banana, flux",
    description: "Convert images to GTA Advance (2004) Game Boy Advance 2D graphics style",
    prompt: "Convert this image into Grand Theft Auto Advance (2004) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT. Game Boy Advance 2D graphics: Handheld console graphics, top-down 2D view, pixelated sprites, Game Boy Advance resolution, portable game aesthetic, 2D pixel art, retro handheld game style. Apply the exact visual style, graphics quality, and aesthetic of GTA Advance. Match the color grading, lighting, and rendering style of the game EXACTLY. The result must be INDISTINGUISHABLE from an actual screenshot from GTA Advance.",
    tags: ["gta", "video-game", "gba", "handheld", "pixel-art", "2d", "style-transfer"],
    useCase: "Game Boy Advance aesthetics, retro handheld graphics transformations",
    tips: [
      "Classic Game Boy Advance pixel art style",
      "Perfect for retro handheld gaming look",
      "2D top-down pixelated aesthetic"
    ],
    example: "Convert this image into Grand Theft Auto Advance (2004) style graphics with ACCURATE VIDEO GAME FILTER while PRESERVING THE EXACT FACIAL FEATURES AND IDENTITY OF THE SUBJECT."
  }
  
];

