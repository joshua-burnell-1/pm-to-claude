// ABOUTME: All reference data for shortcuts, parallel workflows, and prompting patterns.
// ABOUTME: Each entry has a title, description, and expandable detail with example.

export const shortcuts = [
  {
    title: 'Shift+Tab — Cycle permission modes',
    description: 'Quickly switch between default, auto-approve, and dangerous modes.',
    detail: `When Claude asks for permission, press Shift+Tab to cycle through modes:
- Default: Claude asks before every action
- Auto-approve: Claude runs without asking (use with caution)

Example: You're doing a big refactor and trust the changes — Shift+Tab to auto-approve, then Shift+Tab back when done.`,
  },
  {
    title: '/compact — Compress conversation context',
    description: 'Summarize the conversation to free up context window space.',
    detail: `When your session gets long, /compact tells Claude to summarize everything so far into a compact form. You keep the context but use fewer tokens.

Example: After 30+ messages of design discussion, type /compact. Then continue: "Based on what we decided, write the spec."`,
  },
  {
    title: '/clear — Reset the conversation',
    description: 'Start fresh with a blank conversation, keeping your CLAUDE.md context.',
    detail: `Wipes the conversation history completely. CLAUDE.md still loads, so Claude knows your project — it just forgets the current thread.

Example: You finished one task and want to start a completely different one. /clear gives you a fresh session.`,
  },
  {
    title: '/model — Switch models mid-session',
    description: 'Change which Claude model you\'re using without restarting.',
    detail: `Switch between Haiku (fast/cheap), Sonnet (balanced), and Opus (powerful) mid-conversation.

Example: Start with Opus for architecture planning, then /model to Sonnet for implementation, then Haiku for quick checks.`,
  },
  {
    title: 'Escape — Cancel current generation',
    description: 'Stop Claude mid-response if it\'s going in the wrong direction.',
    detail: `If Claude starts writing something that's clearly off-track, press Escape to stop it immediately. You can then redirect.

Example: You asked for a brief summary but Claude is writing a novel. Escape, then: "Shorter — 3 bullet points max."`,
  },
  {
    title: 'New session vs. resume',
    description: 'How to start fresh vs. continue where you left off.',
    detail: `- "claude" starts a new session (reads CLAUDE.md, blank conversation)
- "claude --continue" or "claude -c" resumes your last session with full history
- "claude --resume" lets you pick from recent sessions

Example: Left for lunch mid-task? "claude -c" picks up right where you stopped.`,
  },
];

export const parallelWorkflows = [
  {
    title: 'Running multiple sessions',
    description: 'Open several Claude Code instances working on different parts of a project.',
    detail: `Open multiple terminal tabs/windows, each running "claude" in the same project. Each session is independent but reads the same CLAUDE.md.

Example: Tab 1 writes the backend API. Tab 2 writes the frontend. Tab 3 writes tests. All three share the same project context.`,
  },
  {
    title: 'When to use subagents',
    description: 'Let Claude spawn child agents for parallel research or implementation.',
    detail: `Claude can use the Agent tool to spawn subagents that work in parallel. Best for:
- Researching multiple files/topics at once
- Running independent tasks that don't depend on each other
- Exploring a large codebase quickly

Example: "Research how auth works in this codebase and simultaneously check what tests exist for it."`,
  },
  {
    title: 'Splitting large tasks across sessions',
    description: 'Break big work into coordinated pieces without losing context.',
    detail: `For large tasks:
1. Plan in one session: break the work into independent pieces
2. Write the plan to a shared file (e.g., plan.md)
3. Open separate sessions, each reading plan.md
4. Each session works on its piece
5. Use one final session to integrate

Example: "Write a plan for this migration to plan.md. Break it into 3 independent work streams."`,
  },
  {
    title: 'Coordinating outputs',
    description: 'How to merge work from multiple sessions into a coherent result.',
    detail: `Use files as the coordination mechanism:
- Each session writes to specific files (not overlapping)
- One "coordinator" session reads all outputs and integrates
- CLAUDE.md ensures consistent style across sessions

Example: After parallel sessions write different spec sections, open a new session: "Read all .md files in /specs and combine into a single cohesive PRD."`,
  },
];

export const promptingPatterns = [
  {
    title: 'The Spec Writer',
    description: 'Generate a structured product spec from a rough idea.',
    detail: `Pattern: "Write a [spec type] for [feature]. Include: [sections]. Format as [structure]. Target audience: [who]."

Example: "Write a one-pager spec for a notification preferences page. Include: Problem Statement, User Stories, Proposed Solution, Success Metrics, Open Questions. Format as markdown with headers. Target audience: engineering team."`,
  },
  {
    title: 'The PRD Generator',
    description: 'Turn rough notes into a full product requirements document.',
    detail: `Pattern: "Here are my rough notes on [feature]: [paste notes]. Turn this into a PRD with: Overview, Goals, User Stories, Requirements (P0/P1/P2), Non-Goals, Timeline, and Risks."

Example: "Here are my notes from the planning meeting: [paste]. Turn this into a PRD. Flag anything that seems underspecified."`,
  },
  {
    title: 'The Competitive Analyst',
    description: 'Research and compare competitors on specific dimensions.',
    detail: `Pattern: "Compare [your product feature] against how [competitor 1, 2, 3] handle it. For each, note: approach, strengths, weaknesses, and what we could learn."

Example: "Compare our onboarding flow against Notion, Linear, and Figma. Focus on: time to value, number of steps, and personalization. Format as a comparison table."`,
  },
  {
    title: 'The Doc Summarizer',
    description: 'Condense long documents into actionable summaries.',
    detail: `Pattern: "Read [file/content] and summarize in [format]. Focus on: [what matters]. Skip: [what doesn't]."

Example: "Read this API documentation and summarize the 5 most important endpoints for our integration. For each: what it does, required params, and rate limits."`,
  },
  {
    title: 'The Meeting Processor',
    description: 'Turn meeting notes into structured action items.',
    detail: `Pattern: "Here are notes from [meeting type]: [paste]. Extract: decisions made, action items (with owners if mentioned), open questions, and follow-ups needed."

Example: "Here are my notes from sprint planning: [paste]. Extract action items grouped by person, decisions that affect the roadmap, and anything that needs stakeholder sign-off."`,
  },
  {
    title: 'The Assumption Challenger',
    description: 'Have Claude poke holes in your thinking before you commit.',
    detail: `Pattern: "Here's my plan for [initiative]: [describe]. Play devil's advocate. What assumptions am I making? What could go wrong? What am I not considering?"

Example: "I'm planning to migrate our auth to OAuth2 this quarter. Here's my reasoning: [describe]. Challenge every assumption and tell me what I'm missing."`,
  },
  {
    title: 'The Data Interpreter',
    description: 'Have Claude analyze data and extract product insights.',
    detail: `Pattern: "Here's [data type] data: [paste or reference file]. What patterns do you see? What would you recommend based on this? What additional data would help?"

Example: "Here's our feature usage data from last month: [paste CSV]. Which features have declining engagement? What hypotheses would you form about why?"`,
  },
  {
    title: 'The Stakeholder Translator',
    description: 'Rewrite technical content for different audiences.',
    detail: `Pattern: "Rewrite [this content] for [audience]. They care about [priorities]. Avoid [jargon/topics]. Keep it under [length]."

Example: "Rewrite this engineering post-mortem for the executive team. They care about customer impact and timeline to fix. Avoid technical jargon. Keep it under 200 words."`,
  },
  {
    title: 'The Edge Case Finder',
    description: 'Discover edge cases and gaps in your product requirements.',
    detail: `Pattern: "Here are the requirements for [feature]: [paste]. What edge cases am I missing? What happens when [boundary conditions]? List every scenario that could break this."

Example: "Here's the spec for our new pricing tiers: [paste]. What happens when a user downgrades mid-billing cycle? What about team seats? List every edge case."`,
  },
  {
    title: 'The Retro Facilitator',
    description: 'Structure retrospective insights into actionable improvements.',
    detail: `Pattern: "Here's feedback from our [retro/review]: [paste]. Group into themes. For each theme: root cause, proposed fix, and effort estimate (low/med/high)."

Example: "Here's the raw feedback from our Q1 retro: [paste]. Group by theme, rank by frequency, and propose one concrete action per theme."`,
  },
];
