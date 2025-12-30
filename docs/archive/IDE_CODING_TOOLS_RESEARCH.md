# IDE and Coding Tools Research

## Category Overview
**Category Name:** `ide-coding` or `coding-ide`
**Display Name:** "IDEs & Coding Tools" or "AI Coding Tools"

This category encompasses AI-powered Integrated Development Environments (IDEs), code editors, and "vibe coding" platforms that enable developers (and non-developers) to build applications using natural language prompts and AI assistance.

---

## Tool Research

### 1. Google Antigravity
**Status:** Public Preview (Released November 18, 2025)  
**Type:** AI-powered IDE (fork of Visual Studio Code)  
**Platform:** Desktop (Windows, macOS, Linux)  
**Pricing:** Free during preview (generous rate limits for Gemini 3 Pro)  
**API:** Not specified (likely no public API)  
**Open Source:** No  

**Key Features:**
- **Agent-First Paradigm:** Autonomous AI agents that plan, execute, and validate code
- **Multiple AI Models:** Gemini 3 Pro, Gemini 3 Deep Think, Gemini 3 Flash, Claude Sonnet 4.5, GPT-OSS-120B
- **Two Views:**
  - Editor View: Traditional IDE with agent sidebar
  - Manager View: Control center for orchestrating multiple parallel agents
- **Artifacts System:** Agents generate verifiable deliverables (task lists, implementation plans, screenshots, browser recordings)
- **Direct System Access:** Agents can access editor, terminal, and integrated browser
- **Learning Capability:** Agents learn from previous interactions

**Best For:**
- Complex multi-file refactoring
- Autonomous code generation and testing
- Parallel task execution across workspaces
- Agent-based development workflows

**Limitations:**
- Security concerns reported (deleted developer's drive in early preview)
- Still in preview phase
- Requires understanding of agent-based workflows

**Official Links:**
- Website: https://antigravityai.org
- Documentation: (to be verified)

---

### 2. OpenAI Codex
**Status:** Active (powers GitHub Copilot)  
**Type:** AI code generation system  
**Platform:** API-based (integrated into various tools)  
**Pricing:** Via OpenAI API (usage-based)  
**API:** Yes (OpenAI API)  
**Open Source:** No  

**Key Features:**
- Natural language to code translation
- Multi-language support
- Powers GitHub Copilot
- Cloud-native development environment
- CLI interface with interactive UI
- Slash commands for repository interaction

**Best For:**
- Code completion and generation
- Natural language code translation
- Integration into existing tools

**Limitations:**
- Not a standalone IDE
- Requires API access
- Primarily powers other tools

**Official Links:**
- Documentation: https://platform.openai.com/docs/guides/code

---

### 3. Claude Code
**Status:** Active  
**Type:** Command-line AI coding assistant  
**Platform:** Terminal/CLI  
**Platform:** Terminal/CLI  
**Pricing:** Requires Claude Pro or Max subscription  
**API:** Via Anthropic API  
**Open Source:** No  

**Key Features:**
- Terminal-based agentic coding
- Direct code generation from natural language
- Integrates with existing code editors
- Architectural guidance
- Debugging assistance

**Best For:**
- Terminal-focused developers
- Quick code generation tasks
- Integration with existing workflows
- Command-line oriented workflows

**Limitations:**
- Terminal-only (no GUI)
- Requires subscription
- Less visual feedback than IDEs

**Official Links:**
- Website: https://claude.ai
- Documentation: (to be verified)

---

### 4. Cursor
**Status:** Active  
**Type:** AI-native code editor  
**Platform:** Desktop (Windows, macOS, Linux)  
**Pricing:** Freemium (free tier + paid plans)  
**API:** Not specified  
**Open Source:** No (based on VS Code)  

**Key Features:**
- Built on Visual Studio Code foundation
- Repository-wide context awareness (indexes and embeds entire codebase)
- Multiple interaction modes:
  - Inline autocomplete
  - Chat interface for code queries
  - Task modes for multi-file edits
- Multiple AI model support: Gemini 3 (via Vertex AI), OpenAI models, Anthropic models
- Configurable model usage per task
- Deep workflow integration

**Best For:**
- Full codebase understanding
- Multi-file refactoring
- Context-aware code suggestions
- VS Code users transitioning to AI-powered editing

**Limitations:**
- Based on VS Code (may have similar limitations)
- Requires indexing large codebases
- Paid plans for advanced features

**Official Links:**
- Website: https://cursor.sh
- Documentation: (to be verified)

---

### 5. Lovable.dev
**Status:** Active  
**Type:** AI-powered full-stack development platform  
**Platform:** Web-based  
**Pricing:** Freemium (free tier + paid plans)  
**API:** Not specified  
**Open Source:** No  

**Key Features:**
- Natural language to full-stack application
- Dynamic project scaffolding
- React, Tailwind CSS, Supabase integration
- Multiple AI models: GPT series, Claude, Gemini
- Real-time collaboration
- Project sharing

**Best For:**
- Rapid prototyping
- Non-technical users building apps
- Full-stack web applications
- Quick MVP development

**Limitations:**
- Web-based only
- Limited to supported frameworks
- Less control than traditional IDEs

**Official Links:**
- Website: https://lovable.dev
- Documentation: (to be verified)

---

### 6. Replit
**Status:** Active  
**Type:** Browser-native cloud IDE  
**Platform:** Web-based  
**Pricing:** Freemium (free tier + paid plans)  
**API:** Yes (Replit API)  
**Open Source:** No  

**Key Features:**
- Browser-native cloud IDE
- Multiple programming languages
- Real-time collaborative coding
- Replit Agent (AI assistant powered by Claude 3.5 Sonnet)
- Instant deployment with custom domains
- Scalable reserved virtual machines
- Pre-configured secure environment
- Version control, databases, authentication, payment integrations

**Best For:**
- Collaborative coding
- Learning and education
- Rapid prototyping
- Cloud-based development
- Instant deployment

**Limitations:**
- Web-based (requires internet)
- Resource limits on free tier
- Less control than local IDEs

**Official Links:**
- Website: https://replit.com
- API: https://docs.replit.com

---

### 7. Bolt.new
**Status:** Active  
**Type:** Full-stack web application builder (by StackBlitz)  
**Platform:** Web-based  
**Pricing:** Freemium (free tier + paid plans)  
**API:** Not specified  
**Open Source:** No  

**Key Features:**
- Full-stack web application development
- Natural language to deployable code
- JavaScript frameworks support
- Real-time collaboration
- Project sharing via URL
- Batch prompts
- AI models: Claude 3.5 Sonnet, Gemini 2.0 Flash
- StackBlitz WebContainers (full Node.js server in browser)
- Supabase and Firebase integration

**Best For:**
- Full-stack web applications
- Rapid prototyping
- JavaScript/TypeScript projects
- Real-time collaboration
- Quick deployment

**Limitations:**
- Web-based only
- JavaScript/TypeScript focused
- Limited to supported frameworks

**Official Links:**
- Website: https://bolt.new
- Documentation: (to be verified)

---

### 8. v0.dev (Vercel)
**Status:** Active  
**Type:** Frontend UI generation platform  
**Platform:** Web-based  
**Pricing:** Freemium  
**API:** Not specified  
**Open Source:** No  

**Key Features:**
- Generative chat interface for UI code
- Code generation, debugging, UI prototyping
- Architectural planning
- Multiple AI models support
- Frameworks: React, Next.js, Vue, Svelte
- Focus on frontend UI development

**Best For:**
- Frontend UI development
- React/Next.js projects
- UI prototyping
- Component generation

**Limitations:**
- Frontend only (no backend)
- Limited to supported frameworks
- Vercel ecosystem focused

**Official Links:**
- Website: https://v0.dev
- Documentation: (to be verified)

---

### 9. GitHub Copilot
**Status:** Active  
**Type:** AI code completion tool  
**Platform:** IDE extension (VS Code, JetBrains, etc.)  
**Pricing:** Paid ($10/month individual, $19/user/month business)  
**API:** Not specified  
**Open Source:** No  

**Key Features:**
- Real-time code suggestions
- Whole line and block completions
- Multi-language support
- IDE integration (VS Code, JetBrains, Neovim, etc.)
- Powered by OpenAI Codex
- Context-aware suggestions

**Best For:**
- Code completion
- IDE integration
- Multi-language development
- Existing workflow enhancement

**Limitations:**
- Extension only (not standalone IDE)
- Paid service
- Requires IDE installation

**Official Links:**
- Website: https://github.com/features/copilot
- Documentation: https://docs.github.com/en/copilot

---

### 10. Tabnine
**Status:** Active  
**Type:** AI code completion assistant  
**Platform:** IDE extension (multiple IDEs)  
**Pricing:** Freemium (free tier + paid plans)  
**API:** Not specified  
**Open Source:** No  

**Key Features:**
- AI-powered code completions
- Multi-language support
- IDE integration (VS Code, IntelliJ, PyCharm, etc.)
- Team collaboration features
- Privacy-focused (on-premise option)

**Best For:**
- Code completion
- Multi-IDE support
- Privacy-conscious teams
- Enterprise deployments

**Limitations:**
- Extension only
- Less advanced than full AI IDEs
- Paid plans for advanced features

**Official Links:**
- Website: https://www.tabnine.com
- Documentation: (to be verified)

---

### 11. Windsurf
**Status:** Active (mentioned in research)  
**Type:** AI-powered IDE  
**Platform:** Desktop  
**Pricing:** (To be researched)  
**API:** (To be researched)  
**Open Source:** No  

**Key Features:**
- AI-powered IDE
- (Additional research needed)

**Official Links:**
- Website: (To be verified)

---

### 12. CodeSandbox
**Status:** Active  
**Type:** Cloud-based online IDE  
**Platform:** Web-based  
**Pricing:** Freemium  
**API:** Yes  
**Open Source:** No  

**Key Features:**
- Web application development focus
- Popular web technologies support
- Browser-based IDE
- Project sharing
- Instant deployment

**Best For:**
- Web development
- Quick prototyping
- Project sharing
- Learning

**Limitations:**
- Web-focused
- Limited to web technologies
- Resource limits on free tier

**Official Links:**
- Website: https://codesandbox.io
- API: https://codesandbox.io/docs/api

---

### 13. Firebase Studio
**Status:** Active  
**Type:** Online IDE (by Google)  
**Platform:** Web-based (Google Cloud)  
**Pricing:** (To be researched)  
**API:** (To be researched)  
**Open Source:** No  

**Key Features:**
- Based on Visual Studio Code
- Runs on Google Cloud infrastructure
- Built-in generative AI assistant (Gemini-powered)
- Nix integrations
- Android emulators
- Templates for various languages/frameworks

**Best For:**
- Google Cloud development
- Android development
- Cloud-based development
- Rapid development with templates

**Limitations:**
- Google Cloud ecosystem
- Web-based only
- Less control than local IDEs

**Official Links:**
- Website: (To be verified)

---

### 14. Amazon Q Developer (formerly CodeWhisperer)
**Status:** Active  
**Type:** AI code generator (by AWS)  
**Platform:** IDE extension  
**Pricing:** Freemium  
**API:** (To be researched)  
**Open Source:** No  

**Key Features:**
- AI-powered code generation
- AWS service integration
- IDE extensions
- Security scanning
- Multi-language support

**Best For:**
- AWS development
- Cloud application development
- Security-focused development

**Limitations:**
- AWS-focused
- Extension only
- Less advanced than full AI IDEs

**Official Links:**
- Website: https://aws.amazon.com/q/developer/
- Documentation: (to be verified)

---

## Category Characteristics

### Common Features:
1. **Natural Language to Code:** Most tools support describing requirements in plain language
2. **AI Model Integration:** Multiple AI models (GPT, Claude, Gemini) supported
3. **Real-time Collaboration:** Many support collaborative coding
4. **Code Completion:** AI-powered autocomplete and suggestions
5. **Context Awareness:** Understanding of codebase structure and context

### Tool Types:
1. **Full IDEs:** Antigravity, Cursor, Replit, CodeSandbox
2. **Code Editors:** Cursor (VS Code-based)
3. **CLI Tools:** Claude Code
4. **Platforms:** Lovable.dev, Bolt.new, v0.dev
5. **Extensions:** GitHub Copilot, Tabnine, Amazon Q Developer
6. **API Services:** OpenAI Codex

### Pricing Models:
- **Free:** Antigravity (preview), some free tiers
- **Freemium:** Cursor, Replit, Bolt.new, Lovable.dev, Tabnine
- **Paid:** GitHub Copilot, Claude Code (requires subscription)
- **Usage-based:** OpenAI Codex (via API)

### Platform Distribution:
- **Desktop:** Antigravity, Cursor, Claude Code
- **Web-based:** Replit, Bolt.new, Lovable.dev, v0.dev, CodeSandbox, Firebase Studio
- **Extensions:** GitHub Copilot, Tabnine, Amazon Q Developer

---

## Research Gaps (Need Verification)

1. **Official Documentation URLs:** Many tools need verified documentation links
2. **Pricing Details:** Specific pricing tiers and limits
3. **API Availability:** Which tools offer public APIs
4. **Open Source Status:** Confirmation for each tool
5. **Recent Updates:** Latest features and changes
6. **Windsurf Details:** Complete information about Windsurf IDE
7. **Firebase Studio Details:** Complete information and availability

---

## Next Steps

1. Verify all official links and documentation
2. Research pricing details for each tool
3. Confirm API availability
4. Gather recent feature updates
5. Prepare tool entries for `data/tools.js`
5. Create category page for "IDEs & Coding Tools"

