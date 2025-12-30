# Preview: IDE & Coding Tools Category

## Category: `ide-coding`
**Display Name:** "IDEs & Coding Tools"

---

## Sample Tool Entry: Google Antigravity

```javascript
{
  id: "google-antigravity",
  name: "Google Antigravity",
  tagline: "Agent-first IDE with autonomous AI coding agents",
  whatItDoes: "AI-powered IDE built as a fork of Visual Studio Code, designed with an 'agent-first' paradigm where autonomous AI agents plan, execute, and validate code. Features two primary views: Editor View (traditional IDE with agent sidebar) and Manager View (control center for orchestrating multiple parallel agents across workspaces). Agents generate verifiable 'Artifacts' including task lists, implementation plans, screenshots, and browser recordings. Supports multiple AI models including Gemini 3 Pro, Gemini 3 Deep Think, Gemini 3 Flash, Claude Sonnet 4.5, and open-source GPT variants. Agents have direct access to editor, terminal, and integrated browser, and learn from previous interactions.",
  whyPicked: "Revolutionary agent-first approach enabling autonomous code generation and parallel task execution.",
  bestForTag: "Best for Agent-Based Development",
  outcomes: ["code", "applications"],
  modalities: ["ide-coding"],
  pricing: "free",
  platform: ["desktop"],
  hasApi: false,
  openSource: false,
  links: [
    { label: "Website", url: "https://antigravityai.org", type: "primary" },
    { label: "Documentation", url: "https://antigravityai.org/docs", type: "docs" },
    { label: "GitHub", url: "https://github.com/google/antigravity", type: "github" }
  ],
  bestFor: [
    "Complex multi-file refactoring",
    "Autonomous code generation and testing",
    "Parallel task execution across workspaces",
    "Agent-based development workflows"
  ],
  addedAt: "2025-12-25",
  curatedRank: 1,
  tags: ["ide", "coding", "ai-agents", "vscode", "development"],
  strengths: [
    "Agent-first paradigm with autonomous AI agents",
    "Multiple AI model support (Gemini 3, Claude, GPT)",
    "Parallel agent orchestration across workspaces",
    "Verifiable Artifacts system for transparency",
    "Direct system access (editor, terminal, browser)",
    "Learning capability from previous interactions"
  ],
  gettingStarted: "Download Antigravity for Windows, macOS, or Linux from the official website. After installation, you'll see two views: Editor View (traditional IDE) and Manager View (agent control center). Start by creating a workspace and then delegate tasks to AI agents using natural language. Agents will generate Artifacts (task lists, plans, screenshots) that you can review before execution. The preview version offers generous rate limits for Gemini 3 Pro usage.",
  tips: [
    "Use Manager View to orchestrate multiple agents working on different parts of your codebase simultaneously",
    "Review Artifacts before approving agent actions to maintain control over code changes",
    "Leverage the integrated browser for testing web applications directly within the IDE",
    "Start with simple tasks to understand agent behavior before delegating complex refactoring",
    "Use the learning feature to let agents improve based on your feedback and previous interactions"
  ],
  useCaseExamples: [
    {
      title: "Multi-File Refactoring",
      description: "Delegate a large refactoring task across multiple files. The agent analyzes the codebase, creates an implementation plan (Artifact), and executes changes across all affected files while maintaining code consistency."
    },
    {
      title: "Feature Implementation",
      description: "Describe a new feature in natural language. The agent generates code, creates tests, updates documentation, and provides a summary of changes through Artifacts."
    },
    {
      title: "Parallel Development",
      description: "Use Manager View to assign different agents to work on separate features simultaneously, dramatically reducing development time for large projects."
    }
  ],
  limitations: [
    "Still in preview phase with potential security concerns (early reports of drive deletion issues)",
    "Requires understanding of agent-based workflows (learning curve)",
    "Desktop-only (no web version)",
    "No public API for integration"
  ]
}
```

---

## Sample Tool Entry: Cursor

```javascript
{
  id: "cursor",
  name: "Cursor",
  tagline: "AI-native code editor with repository-wide context",
  whatItDoes: "AI-powered code editor built on Visual Studio Code foundation, providing deep AI integration with repository-wide context awareness. Indexes and embeds entire codebase to provide relevant suggestions and refactor commands. Features multiple interaction modes: inline autocomplete, chat interface for code queries, and task modes for multi-file edits. Supports multiple AI models including Gemini 3 (via Vertex AI), OpenAI models, and Anthropic models. Allows users to configure which model is used for specific tasks. Designed to keep developers 'in the flow' with contextually aware AI assistance.",
  whyPicked: "Best AI-native editor with full codebase understanding and seamless workflow integration.",
  bestForTag: "Best for AI-Powered Editing",
  outcomes: ["code", "applications"],
  modalities: ["ide-coding"],
  pricing: "freemium",
  platform: ["desktop"],
  hasApi: false,
  openSource: false,
  links: [
    { label: "Website", url: "https://cursor.sh", type: "primary" },
    { label: "Documentation", url: "https://cursor.sh/docs", type: "docs" },
    { label: "Pricing", url: "https://cursor.sh/pricing", type: "pricing" }
  ],
  bestFor: [
    "Full codebase understanding and refactoring",
    "Multi-file edits with context awareness",
    "VS Code users transitioning to AI-powered editing",
    "Context-aware code suggestions"
  ],
  addedAt: "2025-12-25",
  curatedRank: 2,
  tags: ["ide", "code-editor", "vscode", "ai-assistant", "development"],
  strengths: [
    "Repository-wide context awareness (indexes entire codebase)",
    "Multiple AI model support (Gemini, OpenAI, Anthropic)",
    "Multiple interaction modes (inline, chat, task modes)",
    "Configurable model usage per task",
    "Seamless VS Code workflow integration",
    "Deep workflow integration keeping developers 'in the flow'"
  ],
  gettingStarted: "Download Cursor for your platform (Windows, macOS, Linux) from cursor.sh. Install and open your project. Cursor will automatically index your codebase to provide context-aware suggestions. Use Cmd/Ctrl+K for inline edits, Cmd/Ctrl+L for chat, and Cmd/Ctrl+I for composer mode. Configure your preferred AI models in settings. The free tier includes basic features, while paid plans unlock advanced AI capabilities and higher rate limits.",
  tips: [
    "Let Cursor index your entire codebase for best context-aware suggestions",
    "Use chat mode (Cmd/Ctrl+L) for code explanations and architectural questions",
    "Use composer mode (Cmd/Ctrl+I) for multi-file refactoring tasks",
    "Configure different models for different tasks (e.g., GPT-4 for complex reasoning, Claude for code generation)",
    "Take advantage of the VS Code extension ecosystem for additional functionality"
  ],
  useCaseExamples: [
    {
      title: "Codebase Refactoring",
      description: "Use composer mode to refactor a function across multiple files. Cursor understands the entire codebase context and suggests consistent changes throughout all affected files."
    },
    {
      title: "Code Explanation",
      description: "Select any code block and use chat mode to ask questions. Cursor provides explanations based on the full repository context, not just the selected code."
    },
    {
      title: "Feature Addition",
      description: "Describe a new feature in chat mode. Cursor generates code that fits your existing codebase patterns, architecture, and style conventions."
    }
  ],
  limitations: [
    "Requires indexing large codebases (initial setup time)",
    "Based on VS Code (may inherit some limitations)",
    "Paid plans required for advanced AI features",
    "Desktop-only (no web version)"
  ]
}
```

---

## Summary

**Total Tools to Add:** 14 tools
**Category:** `ide-coding`
**Modality:** New modality to be added

**Tools List:**
1. Google Antigravity ⭐ (Agent-first IDE)
2. Cursor ⭐ (AI-native editor)
3. OpenAI Codex (AI code generation system)
4. Claude Code (Terminal-based assistant)
5. Lovable.dev (Full-stack platform)
6. Replit (Cloud IDE)
7. Bolt.new (Web app builder)
8. v0.dev (Frontend UI generator)
9. GitHub Copilot (Code completion)
10. Tabnine (Code completion)
11. Windsurf (AI IDE - needs more research)
12. CodeSandbox (Cloud IDE)
13. Firebase Studio (Google Cloud IDE)
14. Amazon Q Developer (AWS code generator)

**Next Steps:**
1. Add `ide-coding` to MODALITIES array
2. Create tool entries for all 14 tools
3. Generate category page
4. Update sitemap and navigation
