// Prompts page logic
import { PROMPTS } from './data/prompts.js';

// Map prompt categories to tool directory modalities
const CATEGORY_TO_MODALITY = {
  "photography": "text-to-image",
  "design-branding": "text-to-image",
  "video-production": "text-to-video",
  "audio-production": "text-to-audio",
  "image-editing": "image-to-image",
  "video-game-style": "image-to-image",
  "3d-visualization": "text-to-3d",
  "llm-workflows": "llm",
  "development-ai": null, // Cross-modal category
  "templates": null, // Templates work across modalities
  "studio-setup": "image-to-image",
};

// Unique color mapping for tags
const TAG_COLORS = {
  // Image editing
  'editing': { light: { border: 'rgba(59, 130, 246, 0.5)', color: '#1e40af', bg: 'rgba(59, 130, 246, 0.12)' }, dark: { border: 'rgba(59, 130, 246, 0.4)', color: '#93c5fd', bg: 'rgba(59, 130, 246, 0.15)' } },
  'photorealistic': { light: { border: 'rgba(236, 72, 153, 0.5)', color: '#9f1239', bg: 'rgba(236, 72, 153, 0.12)' }, dark: { border: 'rgba(236, 72, 153, 0.4)', color: '#f9a8d4', bg: 'rgba(236, 72, 153, 0.15)' } },
  'quality': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  '4k': { light: { border: 'rgba(168, 85, 247, 0.5)', color: '#6b21a8', bg: 'rgba(168, 85, 247, 0.12)' }, dark: { border: 'rgba(168, 85, 247, 0.4)', color: '#c084fc', bg: 'rgba(168, 85, 247, 0.15)' } },
  'professional': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'cinematic': { light: { border: 'rgba(251, 146, 60, 0.5)', color: '#9a3412', bg: 'rgba(251, 146, 60, 0.12)' }, dark: { border: 'rgba(251, 146, 60, 0.4)', color: '#fdba74', bg: 'rgba(251, 146, 60, 0.15)' } },
  'portrait': { light: { border: 'rgba(239, 68, 68, 0.5)', color: '#991b1b', bg: 'rgba(239, 68, 68, 0.12)' }, dark: { border: 'rgba(239, 68, 68, 0.4)', color: '#fca5a5', bg: 'rgba(239, 68, 68, 0.15)' } },
  'product': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'studio': { light: { border: 'rgba(20, 184, 166, 0.5)', color: '#134e4a', bg: 'rgba(20, 184, 166, 0.12)' }, dark: { border: 'rgba(20, 184, 166, 0.4)', color: '#5eead4', bg: 'rgba(20, 184, 166, 0.15)' } },
  'restoration': { light: { border: 'rgba(245, 158, 11, 0.5)', color: '#78350f', bg: 'rgba(245, 158, 11, 0.12)' }, dark: { border: 'rgba(245, 158, 11, 0.4)', color: '#fcd34d', bg: 'rgba(245, 158, 11, 0.15)' } },
  'colorize': { light: { border: 'rgba(219, 39, 119, 0.5)', color: '#831843', bg: 'rgba(219, 39, 119, 0.12)' }, dark: { border: 'rgba(219, 39, 119, 0.4)', color: '#f472b6', bg: 'rgba(219, 39, 119, 0.15)' } },
  'extraction': { light: { border: 'rgba(6, 182, 212, 0.5)', color: '#164e63', bg: 'rgba(6, 182, 212, 0.12)' }, dark: { border: 'rgba(6, 182, 212, 0.4)', color: '#67e8f9', bg: 'rgba(6, 182, 212, 0.15)' } },
  'swap': { light: { border: 'rgba(139, 92, 246, 0.5)', color: '#6d28d9', bg: 'rgba(139, 92, 246, 0.12)' }, dark: { border: 'rgba(139, 92, 246, 0.4)', color: '#c4b5fd', bg: 'rgba(139, 92, 246, 0.15)' } },
  'color-grading': { light: { border: 'rgba(249, 115, 22, 0.5)', color: '#9a3412', bg: 'rgba(249, 115, 22, 0.12)' }, dark: { border: 'rgba(249, 115, 22, 0.4)', color: '#fdba74', bg: 'rgba(249, 115, 22, 0.15)' } },
  'consistency': { light: { border: 'rgba(16, 185, 129, 0.5)', color: '#065f46', bg: 'rgba(16, 185, 129, 0.12)' }, dark: { border: 'rgba(16, 185, 129, 0.4)', color: '#6ee7b7', bg: 'rgba(16, 185, 129, 0.15)' } },
  'reference': { light: { border: 'rgba(147, 51, 234, 0.5)', color: '#581c87', bg: 'rgba(147, 51, 234, 0.12)' }, dark: { border: 'rgba(147, 51, 234, 0.4)', color: '#c084fc', bg: 'rgba(147, 51, 234, 0.15)' } },
  'semantic': { light: { border: 'rgba(59, 130, 246, 0.5)', color: '#1e40af', bg: 'rgba(59, 130, 246, 0.12)' }, dark: { border: 'rgba(59, 130, 246, 0.4)', color: '#93c5fd', bg: 'rgba(59, 130, 246, 0.15)' } },
  'enhancement': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'texture': { light: { border: 'rgba(234, 179, 8, 0.5)', color: '#713f12', bg: 'rgba(234, 179, 8, 0.12)' }, dark: { border: 'rgba(234, 179, 8, 0.4)', color: '#fde047', bg: 'rgba(234, 179, 8, 0.15)' } },
  'lighting': { light: { border: 'rgba(251, 191, 36, 0.5)', color: '#854d0e', bg: 'rgba(251, 191, 36, 0.12)' }, dark: { border: 'rgba(251, 191, 36, 0.4)', color: '#fde68a', bg: 'rgba(251, 191, 36, 0.15)' } },
  'composition': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'background': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'material': { light: { border: 'rgba(168, 85, 247, 0.5)', color: '#6b21a8', bg: 'rgba(168, 85, 247, 0.12)' }, dark: { border: 'rgba(168, 85, 247, 0.4)', color: '#c084fc', bg: 'rgba(168, 85, 247, 0.15)' } },
  'batch': { light: { border: 'rgba(236, 72, 153, 0.5)', color: '#9f1239', bg: 'rgba(236, 72, 153, 0.12)' }, dark: { border: 'rgba(236, 72, 153, 0.4)', color: '#f9a8d4', bg: 'rgba(236, 72, 153, 0.15)' } },
  'print': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'hdr': { light: { border: 'rgba(251, 146, 60, 0.5)', color: '#9a3412', bg: 'rgba(251, 146, 60, 0.12)' }, dark: { border: 'rgba(251, 146, 60, 0.4)', color: '#fdba74', bg: 'rgba(251, 146, 60, 0.15)' } },
  'photography': { light: { border: 'rgba(59, 130, 246, 0.5)', color: '#1e40af', bg: 'rgba(59, 130, 246, 0.12)' }, dark: { border: 'rgba(59, 130, 246, 0.4)', color: '#93c5fd', bg: 'rgba(59, 130, 246, 0.15)' } },
  'commercial': { light: { border: 'rgba(20, 184, 166, 0.5)', color: '#134e4a', bg: 'rgba(20, 184, 166, 0.12)' }, dark: { border: 'rgba(20, 184, 166, 0.4)', color: '#5eead4', bg: 'rgba(20, 184, 166, 0.15)' } },
  'ecommerce': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'design': { light: { border: 'rgba(59, 130, 246, 0.5)', color: '#1e40af', bg: 'rgba(59, 130, 246, 0.12)' }, dark: { border: 'rgba(59, 130, 246, 0.4)', color: '#93c5fd', bg: 'rgba(59, 130, 246, 0.15)' } },
  'artistic': { light: { border: 'rgba(219, 39, 119, 0.5)', color: '#831843', bg: 'rgba(219, 39, 119, 0.12)' }, dark: { border: 'rgba(219, 39, 119, 0.4)', color: '#f472b6', bg: 'rgba(219, 39, 119, 0.15)' } },
  'creative': { light: { border: 'rgba(168, 85, 247, 0.5)', color: '#6b21a8', bg: 'rgba(168, 85, 247, 0.12)' }, dark: { border: 'rgba(168, 85, 247, 0.4)', color: '#c084fc', bg: 'rgba(168, 85, 247, 0.15)' } },
  'video': { light: { border: 'rgba(239, 68, 68, 0.5)', color: '#991b1b', bg: 'rgba(239, 68, 68, 0.12)' }, dark: { border: 'rgba(239, 68, 68, 0.4)', color: '#fca5a5', bg: 'rgba(239, 68, 68, 0.15)' } },
  'audio': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  '3d': { light: { border: 'rgba(139, 92, 246, 0.5)', color: '#6d28d9', bg: 'rgba(139, 92, 246, 0.12)' }, dark: { border: 'rgba(139, 92, 246, 0.4)', color: '#c4b5fd', bg: 'rgba(139, 92, 246, 0.15)' } },
  'brand': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'accessibility': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'privacy': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'workflow': { light: { border: 'rgba(251, 146, 60, 0.5)', color: '#9a3412', bg: 'rgba(251, 146, 60, 0.12)' }, dark: { border: 'rgba(251, 146, 60, 0.4)', color: '#fdba74', bg: 'rgba(251, 146, 60, 0.15)' } },
  'production': { light: { border: 'rgba(16, 185, 129, 0.5)', color: '#065f46', bg: 'rgba(16, 185, 129, 0.12)' }, dark: { border: 'rgba(16, 185, 129, 0.4)', color: '#6ee7b7', bg: 'rgba(16, 185, 129, 0.15)' } },
  'optimization': { light: { border: 'rgba(6, 182, 212, 0.5)', color: '#164e63', bg: 'rgba(6, 182, 212, 0.12)' }, dark: { border: 'rgba(6, 182, 212, 0.4)', color: '#67e8f9', bg: 'rgba(6, 182, 212, 0.15)' } },
  'ux': { light: { border: 'rgba(147, 51, 234, 0.5)', color: '#581c87', bg: 'rgba(147, 51, 234, 0.12)' }, dark: { border: 'rgba(147, 51, 234, 0.4)', color: '#c084fc', bg: 'rgba(147, 51, 234, 0.15)' } },
  'documentation': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'focus': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'productivity': { light: { border: 'rgba(16, 185, 129, 0.5)', color: '#065f46', bg: 'rgba(16, 185, 129, 0.12)' }, dark: { border: 'rgba(16, 185, 129, 0.4)', color: '#6ee7b7', bg: 'rgba(16, 185, 129, 0.15)' } },
  'branding': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'marketing': { light: { border: 'rgba(236, 72, 153, 0.5)', color: '#9f1239', bg: 'rgba(236, 72, 153, 0.12)' }, dark: { border: 'rgba(236, 72, 153, 0.4)', color: '#f9a8d4', bg: 'rgba(236, 72, 153, 0.15)' } },
  'localization': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'testing': { light: { border: 'rgba(245, 158, 11, 0.5)', color: '#78350f', bg: 'rgba(245, 158, 11, 0.12)' }, dark: { border: 'rgba(245, 158, 11, 0.4)', color: '#fcd34d', bg: 'rgba(245, 158, 11, 0.15)' } },
  'animation': { light: { border: 'rgba(219, 39, 119, 0.5)', color: '#831843', bg: 'rgba(219, 39, 119, 0.12)' }, dark: { border: 'rgba(219, 39, 119, 0.4)', color: '#f472b6', bg: 'rgba(219, 39, 119, 0.15)' } },
  'interaction': { light: { border: 'rgba(147, 51, 234, 0.5)', color: '#581c87', bg: 'rgba(147, 51, 234, 0.12)' }, dark: { border: 'rgba(147, 51, 234, 0.4)', color: '#c084fc', bg: 'rgba(147, 51, 234, 0.15)' } },
  'error': { light: { border: 'rgba(239, 68, 68, 0.5)', color: '#991b1b', bg: 'rgba(239, 68, 68, 0.12)' }, dark: { border: 'rgba(239, 68, 68, 0.4)', color: '#fca5a5', bg: 'rgba(239, 68, 68, 0.15)' } },
  'process': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'tutorial': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'cognitive': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'wellness': { light: { border: 'rgba(20, 184, 166, 0.5)', color: '#134e4a', bg: 'rgba(20, 184, 166, 0.12)' }, dark: { border: 'rgba(20, 184, 166, 0.4)', color: '#5eead4', bg: 'rgba(20, 184, 166, 0.15)' } },
  'inclusive': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'narration': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'sonic': { light: { border: 'rgba(168, 85, 247, 0.5)', color: '#6b21a8', bg: 'rgba(168, 85, 247, 0.12)' }, dark: { border: 'rgba(168, 85, 247, 0.4)', color: '#c084fc', bg: 'rgba(168, 85, 247, 0.15)' } },
  'identity': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'anonymization': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'compliance': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'security': { light: { border: 'rgba(239, 68, 68, 0.5)', color: '#991b1b', bg: 'rgba(239, 68, 68, 0.12)' }, dark: { border: 'rgba(239, 68, 68, 0.4)', color: '#fca5a5', bg: 'rgba(239, 68, 68, 0.15)' } },
  'style-guide': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'multi-format': { light: { border: 'rgba(6, 182, 212, 0.5)', color: '#164e63', bg: 'rgba(6, 182, 212, 0.12)' }, dark: { border: 'rgba(6, 182, 212, 0.4)', color: '#67e8f9', bg: 'rgba(6, 182, 212, 0.15)' } },
  'responsive': { light: { border: 'rgba(6, 182, 212, 0.5)', color: '#164e63', bg: 'rgba(6, 182, 212, 0.12)' }, dark: { border: 'rgba(6, 182, 212, 0.4)', color: '#67e8f9', bg: 'rgba(6, 182, 212, 0.15)' } },
  'platform': { light: { border: 'rgba(6, 182, 212, 0.5)', color: '#164e63', bg: 'rgba(6, 182, 212, 0.12)' }, dark: { border: 'rgba(6, 182, 212, 0.4)', color: '#67e8f9', bg: 'rgba(6, 182, 212, 0.15)' } },
  'ar': { light: { border: 'rgba(139, 92, 246, 0.5)', color: '#6d28d9', bg: 'rgba(139, 92, 246, 0.12)' }, dark: { border: 'rgba(139, 92, 246, 0.4)', color: '#c4b5fd', bg: 'rgba(139, 92, 246, 0.15)' } },
  'augmented-reality': { light: { border: 'rgba(139, 92, 246, 0.5)', color: '#6d28d9', bg: 'rgba(139, 92, 246, 0.12)' }, dark: { border: 'rgba(139, 92, 246, 0.4)', color: '#c4b5fd', bg: 'rgba(139, 92, 246, 0.15)' } },
  'mobile': { light: { border: 'rgba(6, 182, 212, 0.5)', color: '#164e63', bg: 'rgba(6, 182, 212, 0.12)' }, dark: { border: 'rgba(6, 182, 212, 0.4)', color: '#67e8f9', bg: 'rgba(6, 182, 212, 0.15)' } },
  'prototype': { light: { border: 'rgba(251, 146, 60, 0.5)', color: '#9a3412', bg: 'rgba(251, 146, 60, 0.12)' }, dark: { border: 'rgba(251, 146, 60, 0.4)', color: '#fdba74', bg: 'rgba(251, 146, 60, 0.15)' } },
  'iteration': { light: { border: 'rgba(251, 146, 60, 0.5)', color: '#9a3412', bg: 'rgba(251, 146, 60, 0.12)' }, dark: { border: 'rgba(251, 146, 60, 0.4)', color: '#fdba74', bg: 'rgba(251, 146, 60, 0.15)' } },
  'testing': { light: { border: 'rgba(245, 158, 11, 0.5)', color: '#78350f', bg: 'rgba(245, 158, 11, 0.12)' }, dark: { border: 'rgba(245, 158, 11, 0.4)', color: '#fcd34d', bg: 'rgba(245, 158, 11, 0.15)' } },
  'cross-modal': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'data': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'visualization': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'infographic': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'analytics': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'emotion': { light: { border: 'rgba(219, 39, 119, 0.5)', color: '#831843', bg: 'rgba(219, 39, 119, 0.12)' }, dark: { border: 'rgba(219, 39, 119, 0.4)', color: '#f472b6', bg: 'rgba(219, 39, 119, 0.15)' } },
  'psychology': { light: { border: 'rgba(219, 39, 119, 0.5)', color: '#831843', bg: 'rgba(219, 39, 119, 0.12)' }, dark: { border: 'rgba(219, 39, 119, 0.4)', color: '#f472b6', bg: 'rgba(219, 39, 119, 0.15)' } },
  'detail': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'preservation': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'character': { light: { border: 'rgba(236, 72, 153, 0.5)', color: '#9f1239', bg: 'rgba(236, 72, 153, 0.12)' }, dark: { border: 'rgba(236, 72, 153, 0.4)', color: '#f9a8d4', bg: 'rgba(236, 72, 153, 0.15)' } },
  'multi-reference': { light: { border: 'rgba(147, 51, 234, 0.5)', color: '#581c87', bg: 'rgba(147, 51, 234, 0.12)' }, dark: { border: 'rgba(147, 51, 234, 0.4)', color: '#c084fc', bg: 'rgba(147, 51, 234, 0.15)' } },
  'replacement': { light: { border: 'rgba(139, 92, 246, 0.5)', color: '#6d28d9', bg: 'rgba(139, 92, 246, 0.12)' }, dark: { border: 'rgba(139, 92, 246, 0.4)', color: '#c4b5fd', bg: 'rgba(139, 92, 246, 0.15)' } },
  'reconstruction': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'intelligent': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'refinement': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'framing': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'correction': { light: { border: 'rgba(245, 158, 11, 0.5)', color: '#78350f', bg: 'rgba(245, 158, 11, 0.12)' }, dark: { border: 'rgba(245, 158, 11, 0.4)', color: '#fcd34d', bg: 'rgba(245, 158, 11, 0.15)' } },
  'architectural': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'targeted': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'selective': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'temporal': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'sequence': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'video': { light: { border: 'rgba(239, 68, 68, 0.5)', color: '#991b1b', bg: 'rgba(239, 68, 68, 0.12)' }, dark: { border: 'rgba(239, 68, 68, 0.4)', color: '#fca5a5', bg: 'rgba(239, 68, 68, 0.15)' } },
  'rendering': { light: { border: 'rgba(168, 85, 247, 0.5)', color: '#6b21a8', bg: 'rgba(168, 85, 247, 0.12)' }, dark: { border: 'rgba(168, 85, 247, 0.4)', color: '#c084fc', bg: 'rgba(168, 85, 247, 0.15)' } },
  'accuracy': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'quality-control': { light: { border: 'rgba(236, 72, 153, 0.5)', color: '#9f1239', bg: 'rgba(236, 72, 153, 0.12)' }, dark: { border: 'rgba(236, 72, 153, 0.4)', color: '#f9a8d4', bg: 'rgba(236, 72, 153, 0.15)' } },
  'cmyk': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'dynamic-range': { light: { border: 'rgba(251, 146, 60, 0.5)', color: '#9a3412', bg: 'rgba(251, 146, 60, 0.12)' }, dark: { border: 'rgba(251, 146, 60, 0.4)', color: '#fdba74', bg: 'rgba(251, 146, 60, 0.15)' } },
  'artifacts': { light: { border: 'rgba(245, 158, 11, 0.5)', color: '#78350f', bg: 'rgba(245, 158, 11, 0.12)' }, dark: { border: 'rgba(245, 158, 11, 0.4)', color: '#fcd34d', bg: 'rgba(245, 158, 11, 0.15)' } },
  'restoration': { light: { border: 'rgba(245, 158, 11, 0.5)', color: '#78350f', bg: 'rgba(245, 158, 11, 0.12)' }, dark: { border: 'rgba(245, 158, 11, 0.4)', color: '#fcd34d', bg: 'rgba(245, 158, 11, 0.15)' } },
  'series': { light: { border: 'rgba(236, 72, 153, 0.5)', color: '#9f1239', bg: 'rgba(236, 72, 153, 0.12)' }, dark: { border: 'rgba(236, 72, 153, 0.4)', color: '#f9a8d4', bg: 'rgba(236, 72, 153, 0.15)' } },
  'unification': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'upscale': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'minimalist': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'vector': { light: { border: 'rgba(59, 130, 246, 0.5)', color: '#1e40af', bg: 'rgba(59, 130, 246, 0.12)' }, dark: { border: 'rgba(59, 130, 246, 0.4)', color: '#93c5fd', bg: 'rgba(59, 130, 246, 0.15)' } },
  'illustration': { light: { border: 'rgba(219, 39, 119, 0.5)', color: '#831843', bg: 'rgba(219, 39, 119, 0.12)' }, dark: { border: 'rgba(219, 39, 119, 0.4)', color: '#f472b6', bg: 'rgba(219, 39, 119, 0.15)' } },
  'art': { light: { border: 'rgba(219, 39, 119, 0.5)', color: '#831843', bg: 'rgba(219, 39, 119, 0.12)' }, dark: { border: 'rgba(219, 39, 119, 0.4)', color: '#f472b6', bg: 'rgba(219, 39, 119, 0.15)' } },
  'custom': { light: { border: 'rgba(168, 85, 247, 0.5)', color: '#6b21a8', bg: 'rgba(168, 85, 247, 0.12)' }, dark: { border: 'rgba(168, 85, 247, 0.4)', color: '#c084fc', bg: 'rgba(168, 85, 247, 0.15)' } },
  'b-roll': { light: { border: 'rgba(239, 68, 68, 0.5)', color: '#991b1b', bg: 'rgba(239, 68, 68, 0.12)' }, dark: { border: 'rgba(239, 68, 68, 0.4)', color: '#fca5a5', bg: 'rgba(239, 68, 68, 0.15)' } },
  'footage': { light: { border: 'rgba(239, 68, 68, 0.5)', color: '#991b1b', bg: 'rgba(239, 68, 68, 0.12)' }, dark: { border: 'rgba(239, 68, 68, 0.4)', color: '#fca5a5', bg: 'rgba(239, 68, 68, 0.15)' } },
  'transition': { light: { border: 'rgba(251, 146, 60, 0.5)', color: '#9a3412', bg: 'rgba(251, 146, 60, 0.12)' }, dark: { border: 'rgba(251, 146, 60, 0.4)', color: '#fdba74', bg: 'rgba(251, 146, 60, 0.15)' } },
  'motion': { light: { border: 'rgba(251, 146, 60, 0.5)', color: '#9a3412', bg: 'rgba(251, 146, 60, 0.12)' }, dark: { border: 'rgba(251, 146, 60, 0.4)', color: '#fdba74', bg: 'rgba(251, 146, 60, 0.15)' } },
  'jingle': { light: { border: 'rgba(168, 85, 247, 0.5)', color: '#6b21a8', bg: 'rgba(168, 85, 247, 0.12)' }, dark: { border: 'rgba(168, 85, 247, 0.4)', color: '#c084fc', bg: 'rgba(168, 85, 247, 0.15)' } },
  'ambient': { light: { border: 'rgba(20, 184, 166, 0.5)', color: '#134e4a', bg: 'rgba(20, 184, 166, 0.12)' }, dark: { border: 'rgba(20, 184, 166, 0.4)', color: '#5eead4', bg: 'rgba(20, 184, 166, 0.15)' } },
  'soundscape': { light: { border: 'rgba(20, 184, 166, 0.5)', color: '#134e4a', bg: 'rgba(20, 184, 166, 0.12)' }, dark: { border: 'rgba(20, 184, 166, 0.4)', color: '#5eead4', bg: 'rgba(20, 184, 166, 0.15)' } },
  'atmospheric': { light: { border: 'rgba(20, 184, 166, 0.5)', color: '#134e4a', bg: 'rgba(20, 184, 166, 0.12)' }, dark: { border: 'rgba(20, 184, 166, 0.4)', color: '#5eead4', bg: 'rgba(20, 184, 166, 0.15)' } },
  'immersive': { light: { border: 'rgba(20, 184, 166, 0.5)', color: '#134e4a', bg: 'rgba(20, 184, 166, 0.12)' }, dark: { border: 'rgba(20, 184, 166, 0.4)', color: '#5eead4', bg: 'rgba(20, 184, 166, 0.15)' } },
  'filter': { light: { border: 'rgba(219, 39, 119, 0.5)', color: '#831843', bg: 'rgba(219, 39, 119, 0.12)' }, dark: { border: 'rgba(219, 39, 119, 0.4)', color: '#f472b6', bg: 'rgba(219, 39, 119, 0.15)' } },
  'style': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'cleanup': { light: { border: 'rgba(245, 158, 11, 0.5)', color: '#78350f', bg: 'rgba(245, 158, 11, 0.12)' }, dark: { border: 'rgba(245, 158, 11, 0.4)', color: '#fcd34d', bg: 'rgba(245, 158, 11, 0.15)' } },
  'removal': { light: { border: 'rgba(245, 158, 11, 0.5)', color: '#78350f', bg: 'rgba(245, 158, 11, 0.12)' }, dark: { border: 'rgba(245, 158, 11, 0.4)', color: '#fcd34d', bg: 'rgba(245, 158, 11, 0.15)' } },
  'environment': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'game': { light: { border: 'rgba(139, 92, 246, 0.5)', color: '#6d28d9', bg: 'rgba(139, 92, 246, 0.12)' }, dark: { border: 'rgba(139, 92, 246, 0.4)', color: '#c4b5fd', bg: 'rgba(139, 92, 246, 0.15)' } },
  'vr': { light: { border: 'rgba(139, 92, 246, 0.5)', color: '#6d28d9', bg: 'rgba(139, 92, 246, 0.12)' }, dark: { border: 'rgba(139, 92, 246, 0.4)', color: '#c4b5fd', bg: 'rgba(139, 92, 246, 0.15)' } },
  'prop': { light: { border: 'rgba(139, 92, 246, 0.5)', color: '#6d28d9', bg: 'rgba(139, 92, 246, 0.12)' }, dark: { border: 'rgba(139, 92, 246, 0.4)', color: '#c4b5fd', bg: 'rgba(139, 92, 246, 0.15)' } },
  'asset': { light: { border: 'rgba(139, 92, 246, 0.5)', color: '#6d28d9', bg: 'rgba(139, 92, 246, 0.12)' }, dark: { border: 'rgba(139, 92, 246, 0.4)', color: '#c4b5fd', bg: 'rgba(139, 92, 246, 0.15)' } },
  'visualization': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'mood': { light: { border: 'rgba(219, 39, 119, 0.5)', color: '#831843', bg: 'rgba(219, 39, 119, 0.12)' }, dark: { border: 'rgba(219, 39, 119, 0.4)', color: '#f472b6', bg: 'rgba(219, 39, 119, 0.15)' } },
  'board': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'reference': { light: { border: 'rgba(147, 51, 234, 0.5)', color: '#581c87', bg: 'rgba(147, 51, 234, 0.12)' }, dark: { border: 'rgba(147, 51, 234, 0.4)', color: '#c084fc', bg: 'rgba(147, 51, 234, 0.15)' } },
  'pattern': { light: { border: 'rgba(168, 85, 247, 0.5)', color: '#6b21a8', bg: 'rgba(168, 85, 247, 0.12)' }, dark: { border: 'rgba(168, 85, 247, 0.4)', color: '#c084fc', bg: 'rgba(168, 85, 247, 0.15)' } },
  'texture': { light: { border: 'rgba(234, 179, 8, 0.5)', color: '#713f12', bg: 'rgba(234, 179, 8, 0.12)' }, dark: { border: 'rgba(234, 179, 8, 0.4)', color: '#fde047', bg: 'rgba(234, 179, 8, 0.15)' } },
  'seamless': { light: { border: 'rgba(168, 85, 247, 0.5)', color: '#6b21a8', bg: 'rgba(168, 85, 247, 0.12)' }, dark: { border: 'rgba(168, 85, 247, 0.4)', color: '#c084fc', bg: 'rgba(168, 85, 247, 0.15)' } },
  'sound': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'effects': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'voice': { light: { border: 'rgba(236, 72, 153, 0.5)', color: '#9f1239', bg: 'rgba(236, 72, 153, 0.12)' }, dark: { border: 'rgba(236, 72, 153, 0.4)', color: '#f9a8d4', bg: 'rgba(236, 72, 153, 0.15)' } },
  'narration': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'music': { light: { border: 'rgba(168, 85, 247, 0.5)', color: '#6b21a8', bg: 'rgba(168, 85, 247, 0.12)' }, dark: { border: 'rgba(168, 85, 247, 0.4)', color: '#c084fc', bg: 'rgba(168, 85, 247, 0.15)' } },
  'relaxation': { light: { border: 'rgba(20, 184, 166, 0.5)', color: '#134e4a', bg: 'rgba(20, 184, 166, 0.12)' }, dark: { border: 'rgba(20, 184, 166, 0.4)', color: '#5eead4', bg: 'rgba(20, 184, 166, 0.15)' } },
  'corporate': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'background': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'business': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'publishing': { light: { border: 'rgba(219, 39, 119, 0.5)', color: '#831843', bg: 'rgba(219, 39, 119, 0.12)' }, dark: { border: 'rgba(219, 39, 119, 0.4)', color: '#f472b6', bg: 'rgba(219, 39, 119, 0.15)' } },
  'packaging': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'mockup': { light: { border: 'rgba(59, 130, 246, 0.5)', color: '#1e40af', bg: 'rgba(59, 130, 246, 0.12)' }, dark: { border: 'rgba(59, 130, 246, 0.4)', color: '#93c5fd', bg: 'rgba(59, 130, 246, 0.15)' } },
  'ui': { light: { border: 'rgba(59, 130, 246, 0.5)', color: '#1e40af', bg: 'rgba(59, 130, 246, 0.12)' }, dark: { border: 'rgba(59, 130, 246, 0.4)', color: '#93c5fd', bg: 'rgba(59, 130, 246, 0.15)' } },
  'ux': { light: { border: 'rgba(147, 51, 234, 0.5)', color: '#581c87', bg: 'rgba(147, 51, 234, 0.12)' }, dark: { border: 'rgba(147, 51, 234, 0.4)', color: '#c084fc', bg: 'rgba(147, 51, 234, 0.15)' } },
  'icon': { light: { border: 'rgba(59, 130, 246, 0.5)', color: '#1e40af', bg: 'rgba(59, 130, 246, 0.12)' }, dark: { border: 'rgba(59, 130, 246, 0.4)', color: '#93c5fd', bg: 'rgba(59, 130, 246, 0.15)' } },
  'book': { light: { border: 'rgba(219, 39, 119, 0.5)', color: '#831843', bg: 'rgba(219, 39, 119, 0.12)' }, dark: { border: 'rgba(219, 39, 119, 0.4)', color: '#f472b6', bg: 'rgba(219, 39, 119, 0.15)' } },
  'cover': { light: { border: 'rgba(219, 39, 119, 0.5)', color: '#831843', bg: 'rgba(219, 39, 119, 0.12)' }, dark: { border: 'rgba(219, 39, 119, 0.4)', color: '#f472b6', bg: 'rgba(219, 39, 119, 0.15)' } },
  'slow-motion': { light: { border: 'rgba(251, 146, 60, 0.5)', color: '#9a3412', bg: 'rgba(251, 146, 60, 0.12)' }, dark: { border: 'rgba(251, 146, 60, 0.4)', color: '#fdba74', bg: 'rgba(251, 146, 60, 0.15)' } },
  'dramatic': { light: { border: 'rgba(251, 146, 60, 0.5)', color: '#9a3412', bg: 'rgba(251, 146, 60, 0.12)' }, dark: { border: 'rgba(251, 146, 60, 0.4)', color: '#fdba74', bg: 'rgba(251, 146, 60, 0.15)' } },
  'meditation': { light: { border: 'rgba(20, 184, 166, 0.5)', color: '#134e4a', bg: 'rgba(20, 184, 166, 0.12)' }, dark: { border: 'rgba(20, 184, 166, 0.4)', color: '#5eead4', bg: 'rgba(20, 184, 166, 0.15)' } },
  'calm': { light: { border: 'rgba(20, 184, 166, 0.5)', color: '#134e4a', bg: 'rgba(20, 184, 166, 0.12)' }, dark: { border: 'rgba(20, 184, 166, 0.4)', color: '#5eead4', bg: 'rgba(20, 184, 166, 0.15)' } },
  'architectural': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'building': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'vehicle': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'automotive': { light: { border: 'rgba(99, 102, 241, 0.5)', color: '#3730a3', bg: 'rgba(99, 102, 241, 0.12)' }, dark: { border: 'rgba(99, 102, 241, 0.4)', color: '#a5b4fc', bg: 'rgba(99, 102, 241, 0.15)' } },
  'international': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'multicultural': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'optimization': { light: { border: 'rgba(6, 182, 212, 0.5)', color: '#164e63', bg: 'rgba(6, 182, 212, 0.12)' }, dark: { border: 'rgba(6, 182, 212, 0.4)', color: '#67e8f9', bg: 'rgba(6, 182, 212, 0.15)' } },
  'analytics': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'inclusive': { light: { border: 'rgba(34, 197, 94, 0.5)', color: '#166534', bg: 'rgba(34, 197, 94, 0.12)' }, dark: { border: 'rgba(34, 197, 94, 0.4)', color: '#86efac', bg: 'rgba(34, 197, 94, 0.15)' } },
  'design': { light: { border: 'rgba(59, 130, 246, 0.5)', color: '#1e40af', bg: 'rgba(59, 130, 246, 0.12)' }, dark: { border: 'rgba(59, 130, 246, 0.4)', color: '#93c5fd', bg: 'rgba(59, 130, 246, 0.15)' } },
  'camera': { light: { border: 'rgba(59, 130, 246, 0.5)', color: '#1e40af', bg: 'rgba(59, 130, 246, 0.12)' }, dark: { border: 'rgba(59, 130, 246, 0.4)', color: '#93c5fd', bg: 'rgba(59, 130, 246, 0.15)' } },
  'movement': { light: { border: 'rgba(251, 146, 60, 0.5)', color: '#9a3412', bg: 'rgba(251, 146, 60, 0.12)' }, dark: { border: 'rgba(251, 146, 60, 0.4)', color: '#fdba74', bg: 'rgba(251, 146, 60, 0.15)' } },
  'angle': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'clothing': { light: { border: 'rgba(236, 72, 153, 0.5)', color: '#9f1239', bg: 'rgba(236, 72, 153, 0.12)' }, dark: { border: 'rgba(236, 72, 153, 0.4)', color: '#f9a8d4', bg: 'rgba(236, 72, 153, 0.15)' } },
  'outfit': { light: { border: 'rgba(236, 72, 153, 0.5)', color: '#9f1239', bg: 'rgba(236, 72, 153, 0.12)' }, dark: { border: 'rgba(236, 72, 153, 0.4)', color: '#f9a8d4', bg: 'rgba(236, 72, 153, 0.15)' } },
  'elements': { light: { border: 'rgba(6, 182, 212, 0.5)', color: '#164e63', bg: 'rgba(6, 182, 212, 0.12)' }, dark: { border: 'rgba(6, 182, 212, 0.4)', color: '#67e8f9', bg: 'rgba(6, 182, 212, 0.15)' } },
  'blueprint': { light: { border: 'rgba(59, 130, 246, 0.5)', color: '#1e40af', bg: 'rgba(59, 130, 246, 0.12)' }, dark: { border: 'rgba(59, 130, 246, 0.4)', color: '#93c5fd', bg: 'rgba(59, 130, 246, 0.15)' } },
  'pov': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'conversion': { light: { border: 'rgba(14, 165, 233, 0.5)', color: '#0c4a6e', bg: 'rgba(14, 165, 233, 0.12)' }, dark: { border: 'rgba(14, 165, 233, 0.4)', color: '#7dd3fc', bg: 'rgba(14, 165, 233, 0.15)' } },
  'photoshoot': { light: { border: 'rgba(236, 72, 153, 0.5)', color: '#9f1239', bg: 'rgba(236, 72, 153, 0.12)' }, dark: { border: 'rgba(236, 72, 153, 0.4)', color: '#f9a8d4', bg: 'rgba(236, 72, 153, 0.15)' } },
  'old-photo': { light: { border: 'rgba(245, 158, 11, 0.5)', color: '#78350f', bg: 'rgba(245, 158, 11, 0.12)' }, dark: { border: 'rgba(245, 158, 11, 0.4)', color: '#fcd34d', bg: 'rgba(245, 158, 11, 0.15)' } },
  'bw': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'black-white': { light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' }, dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' } },
  'subject': { light: { border: 'rgba(139, 92, 246, 0.5)', color: '#6d28d9', bg: 'rgba(139, 92, 246, 0.12)' }, dark: { border: 'rgba(139, 92, 246, 0.4)', color: '#c4b5fd', bg: 'rgba(139, 92, 246, 0.15)' } },
  'change': { light: { border: 'rgba(251, 146, 60, 0.5)', color: '#9a3412', bg: 'rgba(251, 146, 60, 0.12)' }, dark: { border: 'rgba(251, 146, 60, 0.4)', color: '#fdba74', bg: 'rgba(251, 146, 60, 0.15)' } },
};

function getTagColor(tag) {
  const normalized = tag.toLowerCase().replace(/\s+/g, '-');
  const color = TAG_COLORS[normalized] || TAG_COLORS[tag.toLowerCase()] || {
    light: { border: 'rgba(107, 114, 128, 0.5)', color: '#374151', bg: 'rgba(107, 114, 128, 0.12)' },
    dark: { border: 'rgba(107, 114, 128, 0.4)', color: '#d1d5db', bg: 'rgba(107, 114, 128, 0.15)' }
  };
  const theme = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  return color[theme];
}

const els = {
  q: document.getElementById("q"),
  categoryChips: document.getElementById("categoryChips"),
  grid: document.getElementById("grid"),
  resultMeta: document.getElementById("resultMeta"),
  footerStats: document.getElementById("footerStats"),
  themeToggle: document.getElementById("themeToggle"),
};

const state = {
  category: "all",
  search: "",
};

// Use-case category labels with counts
const CATEGORY_LABELS = {
  "all": "All",
  "photography": "Photography",
  "design-branding": "Design & Branding",
  "video-production": "Video Production",
  "audio-production": "Audio Production",
  "image-editing": "Image Editing",
  "video-game-style": "Video Game Style",
  "3d-visualization": "3D & Visualization",
  "llm-workflows": "LLM Workflows",
  "development-ai": "Development & AI",
  "templates": "Templates",
  "studio-setup": "Studio Setup",
};

function norm(s) {
  return (s ?? "").toString().toLowerCase().trim();
}

function escapeHtml(s) {
  return (s ?? "").toString().replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function promptHaystack(p) {
  const parts = [
    p.title,
    p.description,
    p.tool,
    p.category,
    ...(p.tags ?? []),
    p.useCase,
    p.prompt,
  ];
  return norm(parts.filter(Boolean).join(" | "));
}

function matchesFilters(p) {
  const q = norm(els.q.value);
  if (q) {
    const haystack = promptHaystack(p);
    if (!haystack.includes(q)) return false;
  }

  if (state.category !== "all" && p.category !== state.category) return false;

  return true;
}

function renderChips() {
  // Category chips with counts (always shown)
  els.categoryChips.innerHTML = "";
  
  // Calculate counts for each category
  const categoryCounts = {};
  PROMPTS.forEach(p => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });
  
  Object.entries(CATEGORY_LABELS).forEach(([id, label]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip-btn mono";
    
    if (id === "all") {
      btn.textContent = `${label} (${PROMPTS.length})`;
    } else {
      const count = categoryCounts[id] || 0;
      btn.textContent = `${label} (${count})`;
    }
    
    btn.setAttribute("data-category", id);
    btn.setAttribute("aria-pressed", state.category === id ? "true" : "false");
    btn.addEventListener("click", () => {
      state.category = id;
      renderChips();
      render();
      // Update URL hash
      if (id !== "all") {
        window.history.pushState(null, "", `#${id}`);
      } else {
        window.history.pushState(null, "", window.location.pathname);
      }
      // Scroll to results
      document.getElementById("grid").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    els.categoryChips.appendChild(btn);
  });
}


function renderCard(p) {
  const card = document.createElement("div");
  card.className = "card prompt-card";
  card.setAttribute("role", "listitem");
  card.setAttribute("data-prompt-id", p.id);
  
  // Track expanded state
  let isExpanded = false;

  const tags = (p.tags || []).slice(0, 3);
  // Truncate prompt for preview (show first 150 chars)
  const promptPreview = p.prompt.length > 150 ? p.prompt.substring(0, 150) + "..." : p.prompt;
  const fullPrompt = p.prompt;

  // Get category link
  const modality = CATEGORY_TO_MODALITY[p.category];
  const categoryLink = modality ? `/dist/pages/category/${modality}.html` : null;

  // Category badge color
  const categoryColors = {
    "llm-workflows": { bg: "rgba(59, 130, 246, 0.1)", border: "rgba(59, 130, 246, 0.3)", text: "#3b82f6" },
    "development-ai": { bg: "rgba(139, 92, 246, 0.1)", border: "rgba(139, 92, 246, 0.3)", text: "#8b5cf6" },
    "video-production": { bg: "rgba(239, 68, 68, 0.1)", border: "rgba(239, 68, 68, 0.3)", text: "#ef4444" },
    "photography": { bg: "rgba(236, 72, 153, 0.1)", border: "rgba(236, 72, 153, 0.3)", text: "#ec4899" },
    "audio-production": { bg: "rgba(14, 165, 233, 0.1)", border: "rgba(14, 165, 233, 0.3)", text: "#0ea5e9" },
    "image-editing": { bg: "rgba(34, 197, 94, 0.1)", border: "rgba(34, 197, 94, 0.3)", text: "#22c55e" },
    "video-game-style": { bg: "rgba(245, 158, 11, 0.1)", border: "rgba(245, 158, 11, 0.3)", text: "#f59e0b" },
    "3d-visualization": { bg: "rgba(168, 85, 247, 0.1)", border: "rgba(168, 85, 247, 0.3)", text: "#a855f7" },
    "design-branding": { bg: "rgba(251, 146, 60, 0.1)", border: "rgba(251, 146, 60, 0.3)", text: "#fb923c" },
    "templates": { bg: "rgba(107, 114, 128, 0.1)", border: "rgba(107, 114, 128, 0.3)", text: "#6b7280" },
    "studio-setup": { bg: "rgba(20, 184, 166, 0.1)", border: "rgba(20, 184, 166, 0.3)", text: "#14b8a6" }
  };
  const catColor = categoryColors[p.category] || { bg: "rgba(107, 114, 128, 0.1)", border: "rgba(107, 114, 128, 0.3)", text: "#6b7280" };

  card.innerHTML = `
    <div class="prompt-card-header">
      <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 12px;">
        <div style="flex: 1;">
          <div class="card-name terminal-title" style="margin-bottom: 6px; font-size: 15px; font-weight: 700; line-height: 1.3; font-family: var(--mono);">${escapeHtml(p.title)}</div>
          <div class="card-preview terminal-text" style="font-size: 12px; line-height: 1.5; opacity: 0.8; color: var(--page-text); font-family: var(--mono);">${escapeHtml(p.description)}</div>
        </div>
        <span class="category-badge terminal-badge" style="font-size: 9px; padding: 5px 9px; border-radius: 4px; font-family: var(--mono); background: ${catColor.bg}; border: 1px solid ${catColor.border}; color: ${catColor.text}; white-space: nowrap; flex-shrink: 0; font-weight: 600; letter-spacing: 0.5px;">${CATEGORY_LABELS[p.category] || p.category}</span>
      </div>
    </div>
    <div class="prompt-container terminal-code-block" style="margin: 14px 0;">
      <div class="prompt-preview-section" style="padding: 14px; background: var(--card-bg); border: 1px solid var(--line); border-radius: 6px; font-family: var(--mono);">
        <div class="prompt-preview-text" style="font-family: var(--mono); font-size: 11px; color: var(--page-text); opacity: 0.9; white-space: pre-wrap; word-break: break-word; display: block; line-height: 1.6; font-weight: 400;">${escapeHtml(promptPreview)}</div>
        ${p.prompt.length > 150 ? `<button class="expand-toggle terminal-btn" style="margin-top: 10px; font-size: 10px; color: var(--accent); opacity: 0.9; font-weight: 500; font-family: var(--mono); background: none; border: none; cursor: pointer; padding: 4px 0; text-decoration: underline; text-underline-offset: 2px;">Read full prompt (${p.prompt.length} chars) →</button>` : ''}
      </div>
      <!-- Full prompt in DOM for SEO/AEO (visually hidden but accessible to crawlers) -->
      <div class="prompt-full-section" style="max-height: 0; overflow: hidden; margin-top: 0; padding: 0; opacity: 0; transition: all 0.3s ease;">
        <div class="prompt-full-text" style="font-family: var(--mono); font-size: 12px; color: var(--page-text); opacity: 0.95; white-space: pre-wrap; word-break: break-word; line-height: 1.7; font-weight: 400; padding: 16px; background: var(--card-bg); border: 1px solid var(--line); border-radius: 6px;">${escapeHtml(fullPrompt)}</div>
        ${p.tips && p.tips.length > 0 ? `
        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--line);">
          <div style="font-family: var(--mono); font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.7; margin-bottom: 8px;">TIPS</div>
          <ul style="font-family: var(--mono); font-size: 11px; line-height: 1.6; color: var(--page-text); margin: 0; padding-left: 18px; opacity: 0.9;">
            ${p.tips.slice(0, 3).map(tip => `<li style="margin-bottom: 4px;">${escapeHtml(tip)}</li>`).join('')}
          </ul>
        </div>
        ` : ''}
        <button class="collapse-toggle terminal-btn" style="margin-top: 12px; font-size: 10px; color: var(--accent); opacity: 0.9; font-weight: 500; font-family: var(--mono); background: none; border: none; cursor: pointer; padding: 4px 0; text-decoration: underline; text-underline-offset: 2px;">← Collapse</button>
      </div>
    </div>
    ${tags.length > 0 ? `<div style="margin-top: 10px; display: flex; gap: 6px; flex-wrap: wrap;">
      ${tags.map(t => {
        const colors = getTagColor(t);
        return `<span class="bestfor-tag terminal-tag" style="font-size: 9px; padding: 4px 8px; border-radius: 4px; border: 1px solid ${colors.border}; color: ${colors.color}; background: ${colors.bg}; font-family: var(--mono); font-weight: 500; letter-spacing: 0.3px;">${escapeHtml(t)}</span>`;
      }).join('')}
    </div>` : ''}
    <div class="card-foot terminal-footer" style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 10px;">
      <span class="terminal-meta" style="font-size: 10px; opacity: 0.7; font-family: var(--mono); flex: 1; line-height: 1.4; letter-spacing: 0.2px;">${escapeHtml(p.useCase)}</span>
      <div style="display: flex; gap: 6px;">
        <button class="view-btn terminal-btn-small" style="font-size: 10px; padding: 6px 12px; border-radius: 4px; background: transparent; border: 1px solid var(--line); color: var(--page-text); font-family: var(--mono); font-weight: 500; cursor: pointer; transition: all 0.2s; opacity: 0.8;">View</button>
        <button class="copy-btn terminal-btn-small" style="font-size: 10px; padding: 6px 12px; border-radius: 4px; background: var(--accent); color: white; font-family: var(--mono); font-weight: 600; cursor: pointer; transition: all 0.2s; border: none;">Copy</button>
      </div>
    </div>
  `;

  // Add event listeners
  const viewBtn = card.querySelector('.view-btn');
  const copyBtn = card.querySelector('.copy-btn');
  const expandBtn = card.querySelector('.expand-toggle');
  const collapseBtn = card.querySelector('.collapse-toggle');
  const previewSection = card.querySelector('.prompt-preview-section');
  const fullSection = card.querySelector('.prompt-full-section');

  function toggleExpand() {
    const isExpanded = fullSection.style.maxHeight !== '0px' && fullSection.style.maxHeight !== '';
    if (isExpanded) {
      // Collapse
      fullSection.style.maxHeight = '0';
      fullSection.style.opacity = '0';
      fullSection.style.marginTop = '0';
      fullSection.style.padding = '0';
      previewSection.style.display = 'block';
      // Smooth scroll to card
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      // Expand
      previewSection.style.display = 'none';
      fullSection.style.maxHeight = '5000px';
      fullSection.style.opacity = '1';
      fullSection.style.marginTop = '12px';
      fullSection.style.padding = '16px';
      // Smooth scroll to expanded content
      setTimeout(() => {
        fullSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  }

  if (expandBtn) {
    expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleExpand();
    });
  }

  if (collapseBtn) {
    collapseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleExpand();
    });
  }

  if (viewBtn) {
    viewBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleExpand();
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      copyPrompt(p.prompt);
    });
  }

  return card;
}

function render() {
  const filtered = PROMPTS.filter(matchesFilters);
  els.grid.innerHTML = "";
  filtered.forEach(p => {
    const card = renderCard(p);
    els.grid.appendChild(card);
  });
  els.resultMeta.textContent = `${filtered.length} prompts • curated`;
  els.footerStats.textContent = `${filtered.length} prompts • curated`;
}

// Copy prompt to clipboard
window.copyPrompt = function(prompt) {
  navigator.clipboard.writeText(prompt).then(() => {
    // Visual feedback - show toast notification
    const toast = document.createElement('div');
    toast.textContent = '✓ Prompt copied to clipboard';
    toast.style.cssText = 'position: fixed; bottom: 24px; right: 24px; background: var(--accent); color: white; padding: 12px 20px; border-radius: 8px; font-family: var(--mono); font-size: 12px; z-index: 10000; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
};

// Show prompt in modal (better UX for reading long prompts)
function showPromptModal(p) {
  // Create modal overlay
  const modal = document.createElement('div');
  modal.className = 'prompt-modal';
  modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.7); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(4px);';
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'prompt-modal-content';
  modalContent.style.cssText = 'background: var(--card-bg); border: 1px solid var(--line); border-radius: 12px; max-width: 800px; max-height: 90vh; width: 100%; display: flex; flex-direction: column; box-shadow: 0 20px 60px rgba(0,0,0,0.3);';
  
  // Modal header
  const header = document.createElement('div');
  header.style.cssText = 'padding: 20px 24px; border-bottom: 1px solid var(--line); display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;';
  header.innerHTML = `
    <div style="flex: 1;">
      <h2 style="font-family: var(--mono); font-size: 18px; font-weight: 700; margin: 0 0 8px 0; color: var(--page-text);">${escapeHtml(p.title)}</h2>
      <p style="font-family: var(--mono); font-size: 12px; opacity: 0.8; margin: 0; color: var(--page-text);">${escapeHtml(p.description)}</p>
    </div>
    <button class="modal-close" style="background: none; border: none; color: var(--page-text); cursor: pointer; font-size: 24px; line-height: 1; opacity: 0.6; padding: 4px; font-family: var(--mono);">×</button>
  `;
  
  // Modal body with scrollable prompt
  const body = document.createElement('div');
  body.style.cssText = 'padding: 24px; overflow-y: auto; flex: 1;';
  body.innerHTML = `
    <div style="margin-bottom: 16px;">
      <div style="font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.7; margin-bottom: 8px;">PROMPT</div>
      <pre style="font-family: var(--mono); font-size: 13px; line-height: 1.7; color: var(--page-text); white-space: pre-wrap; word-break: break-word; margin: 0; padding: 16px; background: var(--card-bg); border: 1px solid var(--line); border-radius: 6px; overflow-x: auto;">${escapeHtml(p.prompt)}</pre>
    </div>
    ${p.tips && p.tips.length > 0 ? `
    <div style="margin-bottom: 16px;">
      <div style="font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.7; margin-bottom: 8px;">TIPS</div>
      <ul style="font-family: var(--mono); font-size: 12px; line-height: 1.6; color: var(--page-text); margin: 0; padding-left: 20px;">
        ${p.tips.slice(0, 5).map(tip => `<li style="margin-bottom: 6px; opacity: 0.9;">${escapeHtml(tip)}</li>`).join('')}
      </ul>
    </div>
    ` : ''}
    ${p.example ? `
    <div>
      <div style="font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.7; margin-bottom: 8px;">EXAMPLE</div>
      <pre style="font-family: var(--mono); font-size: 12px; line-height: 1.6; color: var(--page-text); white-space: pre-wrap; word-break: break-word; margin: 0; padding: 16px; background: var(--card-bg); border: 1px solid var(--line); border-radius: 6px; opacity: 0.9; overflow-x: auto;">${escapeHtml(p.example)}</pre>
    </div>
    ` : ''}
  `;
  
  // Modal footer
  const footer = document.createElement('div');
  footer.style.cssText = 'padding: 16px 24px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 12px;';
  footer.innerHTML = `
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      ${(p.tags || []).slice(0, 5).map(t => {
        const colors = getTagColor(t);
        return `<span style="font-size: 9px; padding: 4px 8px; border-radius: 4px; border: 1px solid ${colors.border}; color: ${colors.color}; background: ${colors.bg}; font-family: var(--mono); font-weight: 500;">${escapeHtml(t)}</span>`;
      }).join('')}
    </div>
    <button class="modal-copy-btn" style="font-size: 12px; padding: 8px 16px; border-radius: 6px; background: var(--accent); color: white; font-family: var(--mono); font-weight: 600; cursor: pointer; border: none; transition: all 0.2s;">Copy Prompt</button>
  `;
  
  modalContent.appendChild(header);
  modalContent.appendChild(body);
  modalContent.appendChild(footer);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Close handlers
  const closeModal = () => {
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 0.2s ease';
    setTimeout(() => document.body.removeChild(modal), 200);
  };
  
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
  modal.querySelector('.modal-copy-btn').addEventListener('click', () => {
    copyPrompt(p.prompt);
  });
  
  // ESC key to close
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
  
  // Animate in
  setTimeout(() => {
    modal.style.opacity = '1';
    modal.style.transition = 'opacity 0.2s ease';
  }, 10);
}

// Search
els.q.addEventListener("input", () => {
  state.search = norm(els.q.value);
  render();
});

// Theme toggle
const stored = localStorage.getItem("theme");
const theme = stored === "dark" ? "dark" : "light";
document.body.setAttribute("data-theme", theme);
els.themeToggle.setAttribute("aria-checked", theme === "dark");

els.themeToggle.addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  els.themeToggle.setAttribute("aria-checked", newTheme === "dark");
  localStorage.setItem("theme", newTheme);
});

// Cursor animation
if (window.matchMedia("(pointer: fine)").matches) {
  document.body.classList.add("has-cursor");
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");
  
  if (cursorDot && cursorOutline) {
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let outlineX = 0, outlineY = 0;
    let rafId = null;
    let hasMoved = false;
    
    const handleMouseMove = (e) => {
      if (!hasMoved) {
        hasMoved = true;
        document.body.classList.add("has-cursor");
      }
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
    
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
  }
}

// Handle URL hash for direct category links
function handleHash() {
  const hash = window.location.hash.slice(1);
  if (hash && CATEGORY_LABELS[hash]) {
    state.category = hash;
    renderChips();
    render();
    // Scroll to results after a brief delay
    setTimeout(() => {
      document.getElementById("grid").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
}

// Listen for hash changes
window.addEventListener("hashchange", handleHash);

// Initialize
renderChips();
render();
handleHash(); // Check initial hash

