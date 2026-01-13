// Weekly news feed (manual + curated).
// Add 5 items/week (Mon–Fri). Keep summaries short so the "Listen" button stays under ~2 minutes.

/**
 * @typedef {"youtube" | "x"} NewsSource
 * @typedef {{
 *  id: string;
 *  date: string; // YYYY-MM-DD (optional; can be "")
 *  source: NewsSource;
 *  title: string;
 *  url: string;
 *  summary: string; // short, speakable (used for on-page summary + optional Listen)
 * }} NewsItem
 */

/** @type {NewsItem[]} */
export const NEWS = [
  // 108 total YouTube Shorts from @thesingularitylabs (all news-related)
  // Dates are optional; add YYYY-MM-DD when you post daily items.
  {
    id: "slabs-short-3xdvcpVBeYI",
    date: "2026-01-10",
    source: "youtube",
    title: "Anthropic Expands Healthcare + Walmart Teams With Gemini + Orchestral Replaces LangChains + more",
    url: "https://www.youtube.com/shorts/3xdvcpVBeYI",
    summary: "Anthropic expands healthcare initiatives. Walmart teams with Gemini for retail AI. Orchestral replaces LangChains in enterprise",
  },
  {
    id: "slabs-short-yPb8OhyPwLI",
    date: "2026-01-09",
    source: "youtube",
    title: "Elon Musk's OpenAI Lawsuit Trial + OpenAI Acquires Convogo + Snowflake Buys Observe + more",
    url: "https://www.youtube.com/shorts/yPb8OhyPwLI",
    summary: "Elon Musk's lawsuit against OpenAI will face a jury in March. OpenAI is acquiring the Convogo team. Snowflake buys Observe",
  },
  {
    id: "slabs-short-wkhE9mbpJTE",
    date: "2026-01-08",
    source: "youtube",
    title: "Anthropic Raising $10B at $350B + OpenAI ChatGPT Health + Ford AI Voice Level 3 + more",
    url: "https://www.youtube.com/shorts/wkhE9mbpJTE",
    summary: "Anthropic raising $10B at $350B valuation. OpenAI unveils ChatGPT Health. Ford plans AI voice assistant for Level 3 autonomy",
  },
  {
    id: "slabs-short-k1Awko62pJ0",
    date: "2026-01-07",
    source: "youtube",
    title: "xAI raised 20B + Government demands Musk's + California lawmaker proposes + more",
    url: "https://www.youtube.com/shorts/k1Awko62pJ0",
    summary: "xAI raised $20B Series E. Government demands Musk's X deals with Grok deepfakes. California lawmaker proposes AI regulations",
  },
  {
    id: "slabs-short-1WFn-Z6owe8",
    date: "2026-01-06",
    source: "youtube",
    title: "Nvidia Launches Rubin Chip + Amazon Alexa Web + Boston Dynamics Gemini + more",
    url: "https://www.youtube.com/shorts/1WFn-Z6owe8",
    summary: "Data centers added $6.5 billion. Nvidia launches powerful new Rubin chip. Amazon Alexa Web expands. Boston Dynamics integrates Gemini",
  },
  {
    id: "slabs-short-oc4CGYhG2wQ",
    date: "2026-01-04",
    source: "youtube",
    title: "Anthropic's 'Do More' Bet + OpenAI Audio Hardware + Mercor $10B Reshapes Work + more",
    url: "https://www.youtube.com/shorts/oc4CGYhG2wQ",
    summary: "Anthropic's 'Do More' bet announced. OpenAI audio hardware plans revealed. Mercor $10B deal reshapes work",
  },
  {
    id: "slabs-short-iOgOB6AwSzs",
    date: "2026-01-02",
    source: "youtube",
    title: "Biggest Tech IPOs Coming + Yann LeCun Leaves Meta + Tesla AI Scales 2026 + more",
    url: "https://www.youtube.com/shorts/iOgOB6AwSzs",
    summary: "Biggest tech IPOs coming. Yann LeCun leaves Meta. Tesla AI scales for 2026",
  },
  {
    id: "slabs-short-JA0ekc4FFDE",
    date: "2025-12-30",
    source: "youtube",
    title: "OpenAI Head of Preparedness + Nvidia Groq $150B Deal + VC Funding Fell 17% + more",
    url: "https://www.youtube.com/shorts/JA0ekc4FFDE",
    summary: "OpenAI Head of Preparedness appointed. Nvidia Groq $150B deal. VC funding fell 17%",
  },
  {
    id: "slabs-short-bXdEf875YyU",
    date: "2025-12-29",
    source: "youtube",
    title: "Nvidia buying chip + Waymo testing Gemini + Oracle shares pace + more",
    url: "https://www.youtube.com/shorts/bXdEf875YyU",
    summary: "Oracle shares hit worst quarter since 2001. Nvidia buys Groq for $20B. Waymo tests Gemini in robotaxis",
  },
  {
    id: "slabs-short-eMR3lpnnxdE",
    date: "2025-12-26",
    source: "youtube",
    title: "US Holds Off Chip Tariffs + NYT Reporter Lawsuit + ServiceNow $7.75B Deal + more",
    url: "https://www.youtube.com/shorts/eMR3lpnnxdE",
    summary:
      "ServiceNow $7.75B Armis acquisition. US delays Chinese chip tariffs until 2027. NYT reporter sues AI companies for copyright",
  },
  {
    id: "slabs-short-r4s95OFXLEo",
    date: "2025-12-25",
    source: "youtube",
    title: "Prompt injection + Claude Code LSP + GLM-4.7 + more",
    url: "https://www.youtube.com/shorts/r4s95OFXLEo",
    summary:
      "Z.ai releases GLM-4.7 for stronger coding. Alphabet buys Intersect Power for $4.75B. Chinese AI chipmaker Biren prepares Hong Kong IPO",
  },
  {
    id: "slabs-short-FRYgmgce2DU",
    date: "2025-12-24",
    source: "youtube",
    title: "Nemotron 3 + Mistral OCR 3 + Claude Chrome plugin + more",
    url: "https://www.youtube.com/shorts/FRYgmgce2DU",
    summary:
      "NVIDIA releases Nemotron 3 hybrid model. Claude Chrome plugin expands to all paid users. Mistral releases OCR 3 for document",
  },
  {
    id: "slabs-short-BEbceMr75rg",
    date: "2025-12-23",
    source: "youtube",
    title: "OpenAI GPT 5.2 Codex + Anthropic Agent Skills + 24 Firms Join Genesis Mission + more",
    url: "https://www.youtube.com/shorts/BEbceMr75rg",
    summary:
      "Anthropic and OpenAI seek office space in Europe",
  },
  {
    id: "slabs-short-E1PKO5vQ5F4",
    date: "2025-12-22",
    source: "youtube",
    title: "Amazon $10B OpenAI + Waymo $100B + Google Gemini 3 Flash + Meta SAM Audio + more",
    url: "https://www.youtube.com/shorts/E1PKO5vQ5F4",
    summary:
      "Google launches Gemini 3 Flash as default model",
  },
  {
    id: "slabs-short-OnI4_97TOtk",
    date: "2025-12-21",
    source: "youtube",
    title: "OpenAI Images 4x Faster + Databricks $134B + Lovable $6.6B + more",
    url: "https://www.youtube.com/shorts/OnI4_97TOtk",
    summary:
      "Databricks $134B deal. Lovable $6.6B deal",
  },
  {
    id: "slabs-short-FWyqX8mEet4",
    date: "2025-12-20",
    source: "youtube",
    title: "OpenAI Chai Discovery $130M + Nvidia Acquires SchedMD + Tesla Robotaxis + Lightspeed $9B + more",
    url: "https://www.youtube.com/shorts/FWyqX8mEet4",
    summary:
      "ServiceNow $9B Armis acquisition",
  },
  {
    id: "slabs-short-OMIELKjuILs",
    date: "2025-12-19",
    source: "youtube",
    title: "AI Bubble Fears + ServiceNow $7B Deal + OpenAI Vesting Change + AI Language Breakthrough + more",
    url: "https://www.youtube.com/shorts/OMIELKjuILs",
    summary:
      "ServiceNow $7B Armis acquisition",
  },
  {
    id: "slabs-short-Zm1Qha_X-2U",
    date: "2025-12-18",
    source: "youtube",
    title: "GPT 5.2 Launch + Disney $1B OpenAI + TIME Person of Year + Runway World Model + more",
    url: "https://www.youtube.com/shorts/Zm1Qha_X-2U",
    summary:
      "OpenAI launches GPT-5.2",
  },
  {
    id: "slabs-short-FFGW-jEHkRI",
    date: "2025-12-17",
    source: "youtube",
    title: "Amazon $35B India + Meta AI Pivot + AI Trained in Space + ElevenLabs $6.6B + more",
    url: "https://www.youtube.com/shorts/FFGW-jEHkRI",
    summary:
      "Amazon $35B deal. Elevenlabs $6.6B deal",
  },
  {
    id: "slabs-short-Pw_2MdwDUso",
    date: "2025-12-16",
    source: "youtube",
    title: "Linux AI Standards + Nvidia China Deal + OpenAI Hires Slack CEO + Fal $4.5B + more",
    url: "https://www.youtube.com/shorts/Pw_2MdwDUso",
    summary:
      "Fal $4.5B deal",
  },
  {
    id: "slabs-short-mtQDslUj64Q",
    date: "2025-12-15",
    source: "youtube",
    title: "IBM $11B Deal + Google TPU Alert + Trump AI Order + Gemini vs Copilot + more",
    url: "https://www.youtube.com/shorts/mtQDslUj64Q",
    summary:
      "Ibm $11B deal. Google launches Gemini model",
  },
  {
    id: "slabs-short-h5IwrJWgNAI",
    date: "2025-12-14",
    source: "youtube",
    title: "OpenAI Disables Ads + Grok 4.2 47% Trading + Zero Click Wiper + Aaru $1B + more",
    url: "https://www.youtube.com/shorts/h5IwrJWgNAI",
    summary:
      "Aaru $1B deal",
  },
  {
    id: "slabs-short-_D8WFE-75cs",
    date: "2025-12-13",
    source: "youtube",
    title: "Meta Slashes Metaverse 30% + Alphabet $900B Chips + AI Energy Crisis + EU Meta Probe",
    url: "https://www.youtube.com/shorts/_D8WFE-75cs",
    summary:
      "Alphabet $900B deal. AI chip developments",
  },
  {
    id: "slabs-short-bmIICUeVVhA",
    date: "2025-12-12",
    source: "youtube",
    title: "Anthropic $350B IPO + TikTok $37.7B + AI Cyberattack + Nvidia Win",
    url: "https://www.youtube.com/shorts/bmIICUeVVhA",
    summary:
      "Anthropic $350B deal. Tiktok $37.7B deal",
  },
  {
    id: "slabs-short--qpFt7xjIuI",
    date: "2025-12-11",
    source: "youtube",
    title: "OpenAI Code Red + Anthropic $1B + Amazon AI Chips War + Garlic Model",
    url: "https://www.youtube.com/shorts/-qpFt7xjIuI",
    summary:
      "Anthropic $1B deal. OpenAI declares Code Red",
  },
  {
    id: "slabs-short-97ytjamUoV0",
    date: "2025-12-10",
    source: "youtube",
    title: "$3.25B Black Forest Lab + DeepSeek Rivals OpenAI + Runway Gen 4.5 + More",
    url: "https://www.youtube.com/shorts/97ytjamUoV0",
    summary:
      "DeepSeek releases new model",
  },
  {
    id: "slabs-short-18ebUIQr1Kw",
    date: "2025-12-09",
    source: "youtube",
    title: "$100B OpenAI Debt + Alibaba Beats GPT 5 + DeepSeek Math Wins Putnam",
    url: "https://www.youtube.com/shorts/18ebUIQr1Kw",
    summary:
      "OpenAI launches GPT-5 free to all users",
  },
  {
    id: "slabs-short-18ebUIQr1Kw",
    date: "2025-12-08",
    source: "youtube",
    title: "$11B AI Data Center + OpenAI Teen Lawsuit + Google's AI Comeback",
    url: "https://www.youtube.com/shorts/18ebUIQr1Kw",
    summary:
      "OpenAI launches GPT-5 free to all users",
  },
  {
    id: "slabs-short-z5wnHPkYQHU",
    date: "2025-12-07",
    source: "youtube",
    title: "HP Announces Up to 6,000 Layoffs in Massive AI Restructuring Plan + XAI Grok Grok + more",
    url: "https://www.youtube.com/shorts/z5wnHPkYQHU",
    summary:
      "Leonardo releases AI-Driven Dome System to Defend Cities  ",
  },
  {
    id: "slabs-short-stKhNXCxh94",
    date: "2025-12-06",
    source: "youtube",
    title: "Nvidia Google AI Chips Rivalry Escalates on Report of Meta Talks + Alphabet Chips, Gemini + more",
    url: "https://www.youtube.com/shorts/stKhNXCxh94",
    summary:
      "Super Pac releases 10 million campaign pushing uniform nati",
  },
  {
    id: "slabs-short-pM9w3GrD7nk",
    date: "2025-12-05",
    source: "youtube",
    title: "Amazon Drops $50B on AI Infrastructure + Google Plans 1000x Growth + Anthropic Opus 4.5",
    url: "https://www.youtube.com/shorts/pM9w3GrD7nk",
    summary:
      "Tesla FSD 14.1 breakthrough with gamechanging parking solutions",
  },
  {
    id: "slabs-short-YlUqLU3Pzic",
    date: "2025-12-04",
    source: "youtube",
    title: "How Google is disrupting itself to beat OpenAI + ChatGPT + Nvidia + AI is too risky to insure, say",
    url: "https://www.youtube.com/shorts/YlUqLU3Pzic",
    summary:
      "Anthropic and OpenAI seek office space in Europe",
  },
  {
    id: "slabs-short-LSK8HyvIXfs",
    date: "2025-12-03",
    source: "youtube",
    title: "Microsoft, Nvidia to Invest Up to 15 Billion in Anthropic + OpenAI's Fidji Simo + more",
    url: "https://www.youtube.com/shorts/LSK8HyvIXfs",
    summary:
      "How Google is disrupting itself to beat OpenAI [Business Insider Tech] ChatGPT told them they were special their families say",
  },
  {
    id: "slabs-short-cqYoeupNZh8",
    date: "2025-12-02",
    source: "youtube",
    title: "Bone AI raises $12M to challenge Asia's defense giant with AI powered robotics + Human AI + more",
    url: "https://www.youtube.com/shorts/cqYoeupNZh8",
    summary:
      "Anthropic and OpenAI seek office space in Europe",
  },
  {
    id: "slabs-short-ZJ7xLycHEB4",
    date: "2025-12-01",
    source: "youtube",
    title: "Cursor $29.3B + xAI $15B + OpenAI Breakthrough",
    url: "https://www.youtube.com/shorts/ZJ7xLycHEB4",
    summary:
      "Bone Ai raises $12M for remote epitaxy   Sakana A",
  },
  {
    id: "slabs-short-o92MwyiyT94",
    date: "2025-11-30",
    source: "youtube",
    title: "Anthropic $50B + GPT 5.1 + Waymo Freeway!",
    url: "https://www.youtube.com/shorts/o92MwyiyT94",
    summary:
      "Anthropic $50B deal. OpenAI launches GPT-5",
  },
  {
    id: "slabs-short-jGwkx-0rfO4",
    date: "2025-11-29",
    source: "youtube",
    title: "SoftBank $5.8B Exit + LeCun Leaves Meta + $10B Portugal",
    url: "https://www.youtube.com/shorts/jGwkx-0rfO4",
    summary:
      "OpenAI launches GPT-5 free to all users",
  },
  {
    id: "slabs-short-1vVq2L5Fdl0",
    date: "2025-11-28",
    source: "youtube",
    title: "Meta $600B + $800B AI Sell Off + Privacy Leak",
    url: "https://www.youtube.com/shorts/1vVq2L5Fdl0",
    summary:
      "Meta Ai releases Omnilingual ASR for 1600+ Languages   In",
  },
  {
    id: "slabs-short-n-2OpRGxj_M",
    date: "2025-11-27",
    source: "youtube",
    title: "Perplexity $400M + OpenAI $20B + Microsoft Superintelligence",
    url: "https://www.youtube.com/shorts/n-2OpRGxj_M",
    summary:
      "Perplexity $400M deal. Openai $20B deal",
  },
  {
    id: "slabs-short-c4jvqgFtIpY",
    date: "2025-11-26",
    source: "youtube",
    title: "Apple $1B Google Deal + Meta Crash + China Chips Ban",
    url: "https://www.youtube.com/shorts/c4jvqgFtIpY",
    summary:
      "Apple $1B deal. AI chip developments",
  },
  {
    id: "slabs-short-qTfSuBJgGGs",
    date: "2025-11-25",
    source: "youtube",
    title: "Anthropic $70B by 2028 + Google AI Satellite in Space",
    url: "https://www.youtube.com/shorts/qTfSuBJgGGs",
    summary:
      "Apple Siri could be getting new AI features",
  },
  {
    id: "slabs-short-4rHbbdjv9WA",
    date: "2025-11-24",
    source: "youtube",
    title: "OpenAI $38B Amazon Deal + Microsoft $24.9B Infrastructure Spree",
    url: "https://www.youtube.com/shorts/4rHbbdjv9WA",
    summary:
      "Openai $38B deal. Microsoft $24.9B deal",
  },
  {
    id: "slabs-short-GWJ48MHEAzI",
    date: "2025-11-23",
    source: "youtube",
    title: "Google AI Defamation + Meta Problem + AI Death Threat",
    url: "https://www.youtube.com/shorts/GWJ48MHEAzI",
    summary:
      "Amazon rushes out AI chips to compete with Nvidia",
  },
  {
    id: "slabs-short-VopvGX1Qq4U",
    date: "2025-11-22",
    source: "youtube",
    title: "OpenAI GPT 5 Security Agent + Nvidia's $1B Bet + Intel SambaNova",
    url: "https://www.youtube.com/shorts/VopvGX1Qq4U",
    summary:
      "S $1B deal. OpenAI launches GPT-5",
  },
  {
    id: "slabs-short-bl9trpKkRIU",
    date: "2025-11-21",
    source: "youtube",
    title: "Nvidia $5T + DeepSeek Memory Breakthrough + Harvey $8B",
    url: "https://www.youtube.com/shorts/bl9trpKkRIU",
    summary:
      "OpenAI launches GPT-5 free to all users",
  },
  {
    id: "slabs-short-lIbcoFZCIXs",
    date: "2025-11-20",
    source: "youtube",
    title: "NVIDIA $1B Nokia Deal + OpenAI $1.4T + Sam Altman 2028 Prediction",
    url: "https://www.youtube.com/shorts/lIbcoFZCIXs",
    summary:
      "Harvey Ai raises $150M for AGI Era  📚 Google Noteboo. Synthesia raises $200M for Coding & Agents",
  },
  {
    id: "slabs-short-X-673iWkbA0",
    date: "2025-11-19",
    source: "youtube",
    title: "Qualcomm v Nvidia + 1M Talks Suicide to ChatGPT + Amazon Lay Off 30K",
    url: "https://www.youtube.com/shorts/X-673iWkbA0",
    summary:
      "Adobe releases Firefly Image 5 with Layers and AI Assis",
  },
  {
    id: "slabs-short-DFPQdXmgaA8",
    date: "2025-11-18",
    source: "youtube",
    title: "AI Fake Receipt + Sam Altman Brain Tech + Tesla 4X Safer Robotaxi",
    url: "https://www.youtube.com/shorts/DFPQdXmgaA8",
    summary:
      "Anthropic and OpenAI seek office space in Europe",
  },
  {
    id: "slabs-short-V89OhRZM2Ug",
    date: "2025-11-17",
    source: "youtube",
    title: "Google Anthropic $BILLIONS Deal + Microsoft Mico + Meta Replaces 600 Jobs with AI",
    url: "https://www.youtube.com/shorts/V89OhRZM2Ug",
    summary:
      "Sam Altman's Merge Labs Hires Neural Imaging Expert for Brain-Computer Interface Work [TechCrunch] 💳 AI Generates Surge in Expense Fraud",
  },
  {
    id: "slabs-short-w_7JtbUai0w",
    date: "2025-11-16",
    source: "youtube",
    title: "Google Quantum Chips 13,000x Faster + Reddit Sues Perplexity + Meta Cuts 600 AI Jobs",
    url: "https://www.youtube.com/shorts/w_7JtbUai0w",
    summary:
      "AI chip developments",
  },
  {
    id: "slabs-short-uNHN9etlLhM",
    date: "2025-11-15",
    source: "youtube",
    title: "OpenAI Atlas Browser v Chrome + YouTube Deepfake + $1.7B AI Deal",
    url: "https://www.youtube.com/shorts/uNHN9etlLhM",
    summary:
      "Google releases Quantum Computing Breakthrough with Will",
  },
  {
    id: "slabs-short-eo0EzPkRDlU",
    date: "2025-11-14",
    source: "youtube",
    title: "LangChain $1.25B Unicorn + OpenEvidence $6B + AWS Take Down ChatGPT",
    url: "https://www.youtube.com/shorts/eo0EzPkRDlU",
    summary:
      "Openai releases ChatGPT Atlas: AI-Powered Browser Challe",
  },
  {
    id: "slabs-short-1ADO7yIzY9o",
    date: "2025-11-13",
    source: "youtube",
    title: "OpenAI's Embarrassing Math Fail + Microsoft 10x Memory Saving + US Blackwell and more",
    url: "https://www.youtube.com/shorts/1ADO7yIzY9o",
    summary:
      "Anthropic and OpenAI seek office space in Europe",
  },
  {
    id: "slabs-short-K0Omn3Ga7C0",
    date: "2025-11-12",
    source: "youtube",
    title: "Qualifier Rogue + OpenAI $10B Chips + Apple SWE Gym",
    url: "https://www.youtube.com/shorts/K0Omn3Ga7C0",
    summary:
      "OpenAI launches GPT-5 free to all users. Counsel Health raises $25M for Medical AI Chatbot Plus H",
  },
  {
    id: "slabs-short-kdaq2a4smv8",
    date: "2025-11-11",
    source: "youtube",
    title: "Hugging Face CEO We're in an LLM Bubble + NVIDIA $300B Swing + Market Crash �",
    url: "https://www.youtube.com/shorts/kdaq2a4smv8",
    summary:
      "Nvidia $300B deal",
  },
  {
    id: "slabs-short-tzge5lkB5xE",
    date: "2025-11-10",
    source: "youtube",
    title: "$5T Data Center Boom + Clio $5B + Power Crisis!",
    url: "https://www.youtube.com/shorts/tzge5lkB5xE",
    summary:
      "Clio $5B deal",
  },
  {
    id: "slabs-short-JEvuYUscGHM",
    date: "2025-11-09",
    source: "youtube",
    title: "Qualifire Rogue + OpenAI $10B Chips + Apple SWE Gym!",
    url: "https://www.youtube.com/shorts/JEvuYUscGHM",
    summary:
      "Openai $10B deal. AI chip developments",
  },
  {
    id: "slabs-short-0BBMGKLvqxw",
    date: "2025-11-08",
    source: "youtube",
    title: "Anthropic Haiku 4 5 + OpenAI $1T Plan + F5 Catastrophic Breach!",
    url: "https://www.youtube.com/shorts/0BBMGKLvqxw",
    summary:
      "Anthropic releases Claude Haiku 4",
  },
  {
    id: "slabs-short-LFuTU2tqkw0",
    date: "2025-11-07",
    source: "youtube",
    title: "NVIDIA's $4K AI Supercomputer + Google's $15B India + Walmart ChatGPT Shopping!",
    url: "https://www.youtube.com/shorts/LFuTU2tqkw0",
    summary:
      "S $4K deal. S $15B deal",
  },
  {
    id: "slabs-short-fsCBr8AhjWQ",
    date: "2025-11-06",
    source: "youtube",
    title: "OpenAI's $Billion Chip Deal + Karpathy's nanochat + California AI Laws! �",
    url: "https://www.youtube.com/shorts/fsCBr8AhjWQ",
    summary:
      "AI chip developments",
  },
  {
    id: "slabs-short-1ODv0QhibvM",
    date: "2025-11-05",
    source: "youtube",
    title: "Stanford's Medical AI Breakthrough + 77% Share Secrets on ChatGPT + OpenAI Weapons Issue!",
    url: "https://www.youtube.com/shorts/1ODv0QhibvM",
    summary:
      "Reflection Ai raises $2B for Apple to get AI right",
  },
  {
    id: "slabs-short-BoeODFl-v-M",
    date: "2025-11-04",
    source: "youtube",
    title: "Tiny 7M Parameter Model Surpasses DeepSeek R1, Gemini 2.5 Pro & o3 mini + Google's €5B Belgium Fund",
    url: "https://www.youtube.com/shorts/BoeODFl-v-M",
    summary:
      "Platform   Google releases Gemini subscriptions to help corporate w",
  },
  {
    id: "slabs-short-PNSODcrVj_4",
    date: "2025-11-03",
    source: "youtube",
    title: "xAI Raises $20 BILLION + MIT MBZUAI AI Partnership + Google Auto Patches Code Vulnerabilities",
    url: "https://www.youtube.com/shorts/PNSODcrVj_4",
    summary:
      "xAI to Raise 20 Billion After Nvidia and Others Boost Round [Bloomberg Technology] 1Password says it can fix login security",
  },
  {
    id: "slabs-short-uoSBi0UYeWU",
    date: "2025-11-02",
    source: "youtube",
    title: "Tesla FSD 14 1 BREAKTHROUGH + 95% Robotic Factory + Dell AI BOOM! �",
    url: "https://www.youtube.com/shorts/uoSBi0UYeWU",
    summary:
      "Tesla FSD 14.1 breakthrough with gamechanging parking solutions",
  },
  {
    id: "slabs-short-VFVuWmdRXNc",
    date: "2025-11-01",
    source: "youtube",
    title: "800M ChatGPT Users + 19 Year Old Gets Google Funding + $6B AMD Deal! �",
    url: "https://www.youtube.com/shorts/VFVuWmdRXNc",
    summary:
      "AMD to supply 6GW of compute capacity to OpenAI in chip deal worth tens of billions [TechCrunch AI] 💬 Sam",
  },
  {
    id: "slabs-short-2hdn1GOIZUA",
    date: "2025-10-31",
    source: "youtube",
    title: "$300M Periodic Labs + $100M Einride + Mira Murati's Tinker!",
    url: "https://www.youtube.com/shorts/2hdn1GOIZUA",
    summary:
      "Former OpenAI and DeepMind researchers raise whopping $300M seed to automate science [TechCrunch AI] Stockholm-based driverless truck startup Einride raised",
  },
  {
    id: "slabs-short-ydGxYElvhXM",
    date: "2025-10-30",
    source: "youtube",
    title: "$14 2B AI EXPLOSION CoreWeave + Meta + Sora 2 + $9 3B Vercel + Claude 4 5!",
    url: "https://www.youtube.com/shorts/ydGxYElvhXM",
    summary:
      "Anthropic releases Claude update",
  },
  {
    id: "slabs-short-sZJq9de71mo",
    date: "2025-10-29",
    source: "youtube",
    title: "Microsoft AI Agents + OpenAI Social + $4B German AI + $17M Recruiter!",
    url: "https://www.youtube.com/shorts/sZJq9de71mo",
    summary:
      "Recruiter Alex raises $17M in funding",
  },
  {
    id: "slabs-short-oNixdsWqIGo",
    date: "2025-10-28",
    source: "youtube",
    title: "$160B AI EXPLOSION German $4B + Nvidia $100B + EA $50B + Chinese $6B! �",
    url: "https://www.youtube.com/shorts/oNixdsWqIGo",
    summary:
      "Explosion German $4B deal. Nvidia $100B deal",
  },
  {
    id: "slabs-short-NJ5emwRyAa0",
    date: "2025-10-27",
    source: "youtube",
    title: "Meta 32B + Alibaba 1T + GPT 5 vs Humans + $6.5B Deals!  #ai",
    url: "https://www.youtube.com/shorts/NJ5emwRyAa0",
    summary:
      "OpenAI launches GPT-5 free to all users",
  },
  {
    id: "slabs-short-DW4_NcNjKyw",
    date: "2025-10-26",
    source: "youtube",
    title: "Microsoft partners with Anthropic + Cohere hits $7B + Intel wants Apple investment!",
    url: "https://www.youtube.com/shorts/DW4_NcNjKyw",
    summary:
      "Cohere Hits $7B deal",
  },
  {
    id: "slabs-short-bZxeH8lztHQ",
    date: "2025-10-25",
    source: "youtube",
    title: "OpenAI's $400B Expansion + $130M Drone Startup + $610M Browser Deal! �",
    url: "https://www.youtube.com/shorts/bZxeH8lztHQ",
    summary:
      "S $400B deal",
  },
  {
    id: "slabs-short-ZIrtcIG6ldc",
    date: "2025-10-24",
    source: "youtube",
    title: "Nvidia's $100B OpenAI Deal + 10 Nuclear Reactors + Perplexity AI Email + Meta Dating!",
    url: "https://www.youtube.com/shorts/ZIrtcIG6ldc",
    summary:
      "Reactors   Perplexity releases an AI Email Assistant Agent for Gmail an",
  },
  {
    id: "slabs-short-u-L_1Fnd3vM",
    date: "2025-10-23",
    source: "youtube",
    title: "Musk's xAI Hits $200B + Nvidia $500M Deal + Google AI in Chrome!",
    url: "https://www.youtube.com/shorts/u-L_1Fnd3vM",
    summary:
      "2025   Xai releases Grok-4-Fast: Unified Reasoning and Non-R",
  },
  {
    id: "slabs-short-7CH-TsSA2Bk",
    date: "2025-10-22",
    source: "youtube",
    title: "Nvidia DROPS $5B on Intel + AI Models Are LYING + Meta Glasses Replace Phone! �",
    url: "https://www.youtube.com/shorts/7CH-TsSA2Bk",
    summary:
      "Nvidia raises $5B for 5B stake in Intel",
  },
  {
    id: "slabs-short-S9k12cnOyig",
    date: "2025-10-21",
    source: "youtube",
    title: "AI Just Beat Humans at Programming! Gemini Wins Gold + $8B IPO + Amazon AI Agents!",
    url: "https://www.youtube.com/shorts/S9k12cnOyig",
    summary:
      "Google launches Gemini model. Company prepares IPO",
  },
  {
    id: "slabs-short-sJXtNpyD1Vo",
    date: "2025-10-20",
    source: "youtube",
    title: "Microsoft trumps Google with $30 billion investment in the UK + Figure AI hits $39B + more",
    url: "https://www.youtube.com/shorts/sJXtNpyD1Vo",
    summary:
      "Ai Hits $39B deal",
  },
  {
    id: "slabs-short-LjrVUjWMGeo",
    date: "2025-10-19",
    source: "youtube",
    title: "$25B AI MONEY BOMB! Musk, Nvidia, OpenAI, Defense Tech",
    url: "https://www.youtube.com/shorts/LjrVUjWMGeo",
    summary:
      "Elon Musk Buys 1 Billion Worth of Tesla Stock [Bloomberg Technology]   CoreWeave Says Nvidia Cloud Contract Valued at 6",
  },
  {
    id: "slabs-short-7DMSMadaie0",
    date: "2025-10-18",
    source: "youtube",
    title: "$5B AI GOLDRUSH! Japan $3 63B + SK Hynix $80B + BlackRock $678M!",
    url: "https://www.youtube.com/shorts/7DMSMadaie0",
    summary:
      "Sk Hynix $80B deal. Blackrock $678M deal",
  },
  {
    id: "slabs-short-fgO9Th-5Xdo",
    date: "2025-10-17",
    source: "youtube",
    title: "$10B Cognition AI! + Apple's Siri Upgrade + $300B OpenAI Deal! and More",
    url: "https://www.youtube.com/shorts/fgO9Th-5Xdo",
    summary:
      "Cognition AI raises $10B in funding. Apple Siri could be getting new AI features",
  },
  {
    id: "slabs-short-V4lte58tkv0",
    date: "2025-10-16",
    source: "youtube",
    title: "Oracle Hits Record High, Nvidia Startups Hit $5 5B, Microsoft Drops $19 4B   AI Goes INSANE! �",
    url: "https://www.youtube.com/shorts/V4lte58tkv0",
    summary:
      "Oracle shares surge 25 to record high on jump in future AI revenue [Financial Times Tech] Nvidia-backed AI start-up Reflection",
  },
  {
    id: "slabs-short-utll3vgXJhg",
    date: "2025-10-15",
    source: "youtube",
    title: "Microsoft Drops $19 4B on AI, Databricks Hits $100B, OpenAI Building Chips and more",
    url: "https://www.youtube.com/shorts/utll3vgXJhg",
    summary:
      "Databricks Hits $100B deal. AI chip developments",
  },
  {
    id: "slabs-short-HOscWd7sQWM",
    date: "2025-10-14",
    source: "youtube",
    title: "OpenAI spending $115 BILLION + Tesla xAI vote + Anthropic $1 5B settlement �",
    url: "https://www.youtube.com/shorts/HOscWd7sQWM",
    summary:
      "Tesla shareholders to vote on investing in Musks AI startup xAI [TechCrunch AI] OpenAI Says Spending to Rise to $115B",
  },
  {
    id: "slabs-short-u0GkBs_gKMg",
    date: "2025-10-13",
    source: "youtube",
    title: "OpenAI announces AI powered hiring platform to take on LinkedIn + AI logistics startup Augment raise",
    url: "https://www.youtube.com/shorts/u0GkBs_gKMg",
    summary:
      "DuckDuckGo adds access to advanced AI models to its subscription plan [TechCrunch AI] Bret Taylors AI Startup Sierra Valued at",
  },
  {
    id: "slabs-short-ZQkfvtULPAc",
    date: "2025-10-12",
    source: "youtube",
    title: "Swiss open LLM + Mistral $14B + Apple AI search for Siri and more �",
    url: "https://www.youtube.com/shorts/ZQkfvtULPAc",
    summary:
      "Switzerland releases its own AI model trained on public data",
  },
  {
    id: "slabs-short-yfzFZqIBAPs",
    date: "2025-10-11",
    source: "youtube",
    title: "OpenAI routes sensitive chats to GPT-5 + AI agents email protocol + WordPress Telex tool 💎",
    url: "https://www.youtube.com/shorts/yfzFZqIBAPs",
    summary:
      "OpenAI launches GPT-5",
  },
  {
    id: "slabs-short-ZrO8AiqegTo",
    date: "2025-10-10",
    source: "youtube",
    title: "Nuclear fusion gets $900M funding + AI kills 13% of young jobs + LLMs train themselves 🚀",
    url: "https://www.youtube.com/shorts/ZrO8AiqegTo",
    summary:
      "Fusion Gets $900M deal. Nuclear fusion funding",
  },
  {
    id: "slabs-short-wF0l6lLUbwc",
    date: "2025-10-09",
    source: "youtube",
    title: "Europe drops $15 BILLION on AI factories + AI data startup Julius nabs $10M seed round & more",
    url: "https://www.youtube.com/shorts/wF0l6lLUbwc",
    summary:
      "Julius Nabs $10M deal",
  },
  {
    id: "slabs-short-hICSWLh87_w",
    date: "2025-10-08",
    source: "youtube",
    title: "Google Gemini's AI image model gets 'bananas' upgrade + How 1 AI startup is battling climate change",
    url: "https://www.youtube.com/shorts/hICSWLh87_w",
    summary:
      "OpenAI warns AI browsers vulnerable to prompt injection",
  },
  {
    id: "slabs-short-odAxkYiS8X0",
    date: "2025-10-07",
    source: "youtube",
    title: "Elon Musk asked Meta CEO Mark Zuckerberg to join xAI bid to buy OpenAI + Nvidia halts and more",
    url: "https://www.youtube.com/shorts/odAxkYiS8X0",
    summary:
      "Elon Musk asked Meta CEO Mark Zuckerberg to join xAI bid to buy OpenAI, filing shows [CNBC Technology] OpenAI lawyers",
  },
  {
    id: "slabs-short-ZnLyaGgKJYs",
    date: "2025-10-06",
    source: "youtube",
    title: "DeepSeek V3.1 just dropped — and it might be the most powerful open AI yet + more 🚀",
    url: "https://www.youtube.com/shorts/ZnLyaGgKJYs",
    summary:
      "DeepSeek V3.1 drops as most powerful open AI model",
  },
  {
    id: "slabs-short-ICfb9MTVI5A",
    date: "2025-10-05",
    source: "youtube",
    title: "Foxconn to Operate SoftBank’s Stargate AI Server Site in Ohio + Sam Altman's predictions",
    url: "https://www.youtube.com/shorts/ICfb9MTVI5A",
    summary:
      "Foxconn to Operate SoftBanks Stargate AI Server Site in Ohio [Bloomberg Technology] Sam Altmans predictions on how the world might",
  },
  {
    id: "slabs-short-rMEf0D6nLqc",
    date: "2025-10-04",
    source: "youtube",
    title: "Is AI hitting a wall + MCP – Email for your agents + Imagen 4 is now generally available",
    url: "https://www.youtube.com/shorts/rMEf0D6nLqc",
    summary:
      "Psychologists And Mental Health Experts Spurred To Use Custom Instructions And Make AI Into A Therapist Adjunct [Forbes Tech] Is",
  },
  {
    id: "slabs-short-U3Q1rS6jCo0",
    date: "2025-10-03",
    source: "youtube",
    title: "AI Chipmaker Iluvatar CoreX Is Said to Mull Hong Kong IPO + Build an AI Email Outreach Agent + more",
    url: "https://www.youtube.com/shorts/U3Q1rS6jCo0",
    summary:
      "Company prepares IPO. AI chip developments",
  },
  {
    id: "slabs-short-8_uqJabzDJs",
    date: "2025-10-02",
    source: "youtube",
    title: "Starlink Close to Deal With Saudi Arabia’s Flag Airline + Twitter’s Ex-CEO is Starting an AI Company",
    url: "https://www.youtube.com/shorts/8_uqJabzDJs",
    summary:
      "NeoLogic wants to build more energy-efficient CPUs for AI data centers [TechCrunch AI] Musks Starlink Close to Deal With Saudi",
  },
  {
    id: "slabs-short-v4as6Ow8egM",
    date: "2025-10-01",
    source: "youtube",
    title: "Perplexity Offers $34.5 BILLION to Buy Chrome + Dell Tackles Unstructured Data for Gen AI and more",
    url: "https://www.youtube.com/shorts/v4as6Ow8egM",
    summary:
      "Dell Tackles Unstructured Data for Generative AI Applications [AI Business] Inference whales are eating into AI coding startups business model",
  },
  {
    id: "slabs-short-vgOmIVGdO1c",
    date: "2025-09-30",
    source: "youtube",
    title: "China Just Got a Big Leg Up in the AI Race + How AI Agents Can Simulate Human-Level Scam Call + more",
    url: "https://www.youtube.com/shorts/vgOmIVGdO1c",
    summary:
      "Make Any Website AI Agent-Ready in Minutes [The Unwind AI] China Just Got a Big Leg Up in the AI",
  },
  {
    id: "slabs-short-t3B4sPjIahE",
    date: "2025-09-29",
    source: "youtube",
    title: "Wall Street and AI Startups Are Fighting Over Entry-Level Quants + Stargate AI Push and more",
    url: "https://www.youtube.com/shorts/t3B4sPjIahE",
    summary:
      "Traders Are Fleeing Stocks Feared to Be Under Threat From AI [Bloomberg Technology] Cooper: Co-Optimizing Policy and Reward Models in",
  },
  {
    id: "slabs-short-mcTSk42394U",
    date: "2025-09-28",
    source: "youtube",
    title: "OpenAI launches GPT-5 free to all users + Duolingo stock skyrockets as AI powers growth + more",
    url: "https://www.youtube.com/shorts/mcTSk42394U",
    summary:
      "OpenAI launches GPT-5 free to all users",
  },
  {
    id: "slabs-short-ZV1--ds_59g",
    date: "2025-09-27",
    source: "youtube",
    title: "AMD CEO Lisa Su on AI Chip Forecast + SoftBank Shares Depend on AI More Than Ever + more",
    url: "https://www.youtube.com/shorts/ZV1--ds_59g",
    summary:
      "Era   Tavily raises $25M for The AI Agent Era   Tavily",
  },
  {
    id: "slabs-short-Yn0qWTz_ptU",
    date: "2025-09-26",
    source: "youtube",
    title: "Sam Altman BREAKS OpenAI's 5-Year Silence! GPT-oss Open Source Models + TSMC Chip Theft + more",
    url: "https://www.youtube.com/shorts/Yn0qWTz_ptU",
    summary:
      "Fintech Alaan raises $48M for Justifiable Claim Verific",
  },
  {
    id: "slabs-short-3NGOmIsYjlg",
    date: "2025-09-25",
    source: "youtube",
    title: "Simulated Society of 10,000+ AI Agents + xAI launches 'Grok Imagine' video generator + more",
    url: "https://www.youtube.com/shorts/3NGOmIsYjlg",
    summary:
      "Xai releases Grok Imagine video generator   The Downl",
  },
  {
    id: "slabs-short-CcIxvezo6VY",
    date: "2025-09-24",
    source: "youtube",
    title: "Forcing LLMs to be evil during training can make them nicer in the long run + more 🚀",
    url: "https://www.youtube.com/shorts/CcIxvezo6VY",
    summary:
      "Forcing LLMs to be evil during training makes them nicer. Research shows counterintuitive AI training results",
  },
  {
    id: "slabs-short-WjJ6G6dtOaA",
    date: "2025-09-23",
    source: "youtube",
    title: "I Watched AI Agents Try to Hack My Vibe Coded Website  + ChatGPT for college students and more 🤯",
    url: "https://www.youtube.com/shorts/WjJ6G6dtOaA",
    summary:
      "Deep Cogito goes big, releasing 4 new open source hybrid reasoning models with self-improving intuition [VentureBeat] The two people shaping",
  },
  {
    id: "slabs-short-NF2eDJOJOdE",
    date: "2025-09-22",
    source: "youtube",
    title: "Scale Rival Surge AI in Talks for Funding at $25 Billion Value + Is AI Killing Entry-Level Jobs",
    url: "https://www.youtube.com/shorts/NF2eDJOJOdE",
    summary:
      "AI impact on employment",
  },
  {
    id: "slabs-short-TZQsFBRvoV4",
    date: "2025-09-21",
    source: "youtube",
    title: "China's cooperative AI counter-punch + Runway introduces Aleph for AI-powered video editing & more",
    url: "https://www.youtube.com/shorts/TZQsFBRvoV4",
    summary:
      "Chinas cooperative AI counter-punch [The Rundown AI] AI data analyst startup Julius nabs 10M seed round [TechCrunch AI] Peter Thiel-Backed",
  },
  {
    id: "slabs-short-A5IZZzank0k",
    date: "2025-09-20",
    source: "youtube",
    title: "Microsoft Edge is now an AI browser with Copilot + Samsung to Make Tesla AI Chips + more",
    url: "https://www.youtube.com/shorts/A5IZZzank0k",
    summary:
      "AI chip developments",
  },
  {
    id: "slabs-short-ywxhV4O1DW4",
    date: "2025-09-19",
    source: "youtube",
    title: "DOGE has built an AI tool to slash federal regulations + China Premier Warns of AI ‘Monopoly’ + more",
    url: "https://www.youtube.com/shorts/ywxhV4O1DW4",
    summary:
      "DOGE builds AI tool to slash federal regulations. China Premier warns of AI monopoly concerns",
  },
  {
    id: "slabs-short-5hf0ePZAEXw",
    date: "2025-09-18",
    source: "youtube",
    title: "Zuckerberg’s secret AGI lab + $15B AI power playEurope’s GPT moment just dropped",
    url: "https://www.youtube.com/shorts/5hf0ePZAEXw",
    summary:
      "OpenAI launches new GPT model",
  },
];

window.__AI_NEWS__ = { NEWS };
