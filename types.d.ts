export type Pricing = "free" | "freemium" | "paid" | "enterprise" | "unknown";
export type Platform = "web" | "api" | "desktop" | "mobile" | "local";
export type Modality =
  | "text-to-audio"
  | "text-to-video"
  | "text-to-3d"
  | "image-to-video"
  | "image-to-image"
  | "image-to-3d"
  | "llm";

export type ToolLink = { label: string; url: string; type?: "primary" | "docs" | "api" | "github" | "community" | "blog" | "pricing" | "support" };

export type Tutorial = {
  title: string;
  url: string;
  type?: "official" | "community";
  duration?: string;
  description?: string;
  score?: number; // 1-10 rating
  views?: number; // view count
  likes?: number; // like count
  rating?: number; // 1-5 star rating
};

export type Ratings = {
  quality?: number;      // 1-5
  easeOfUse?: number;    // 1-5
  speed?: number;        // 1-5
  value?: number;        // 1-5
  overall?: number;      // Calculated average
};

export type Tool = {
  id: string;
  name: string;
  tagline?: string;
  modalities: Modality[];
  pricing: Pricing;
  platform: Platform[];
  hasApi: boolean | "unknown";
  openSource: boolean | "unknown";
  links: ToolLink[];
  tags?: string[];
  bestFor?: string[];
  strengths?: string[];
  limitations?: string[];
  notes?: string;
  addedAt?: string; // YYYY-MM-DD
  curatedRank?: number; // lower = higher in curated sort
  // New enhancement fields
  ratings?: Ratings;
  tutorials?: Tutorial[];
  gettingStarted?: string;
  tips?: string[];
  useCaseExamples?: Array<{
    title: string;
    description: string;
    steps?: string[];
  }>;
};


