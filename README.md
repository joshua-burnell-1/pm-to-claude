# pm-to-claude

A mission-based learning experience and quick-reference companion for product managers using Claude Code.

## Why Claude Code matters for PMs

Claude Code isn't just a developer tool. It's the fastest way for a PM to:

- **Write specs and PRDs** without starting from a blank page
- **Analyze data** by describing what you want instead of writing SQL
- **Research competitors** with structured prompts that return structured answers
- **Turn meeting notes into action items** in seconds
- **Challenge your own assumptions** before a stakeholder does

But Claude Code has a learning curve. The keyboard shortcuts, prompting patterns, context management, and permission system aren't obvious if you haven't used a terminal-based AI tool before.

This tool is what you open instead of googling "how to use Claude Code" or texting an engineer friend.

## What's inside

### LEARN — 5 missions, 5 real skills

Each mission teaches a workflow skill you'll use every week. These aren't toy tutorials — they're the actual moves that make Claude Code useful for product work.

| Mission | Skill | What you'll do |
|---------|-------|---------------|
| 1. Write Your First CLAUDE.md | Persistent context | Give Claude memory about your project so it stops asking basic questions |
| 2. Have Claude Write a One-Pager | Structured prompting | Delegate your first writing task using a prompt that actually works |
| 3. Set Up Your First MCP Tool | Tool integration | Connect Claude to external tools so it can do more than read files |
| 4. Make a Claude API Call | Understanding the API | Run an API call and read the response — crucial for speccing AI features |
| 5. Compress a Long Conversation | Context management | Keep working in long sessions without losing context |

Missions track your progress and validate completion. You can stop and resume anytime.

### REFERENCE — fast lookup for daily use

Three sections, browsable with arrow keys:

**Shortcuts** — The keyboard shortcuts and slash commands worth memorizing: permission mode cycling, context compression, model switching, session management.

**Parallel Workflows** — How to run multiple Claude sessions simultaneously, when to use subagents, how to split large tasks without losing context, and how to coordinate outputs.

**Prompting Patterns for PMs** — 10 prompt structures that get the best results for product work:

1. The Spec Writer
2. The PRD Generator
3. The Competitive Analyst
4. The Doc Summarizer
5. The Meeting Processor
6. The Assumption Challenger
7. The Data Interpreter
8. The Stakeholder Translator
9. The Edge Case Finder
10. The Retro Facilitator

Each pattern shows the structure, when to use it, and a concrete example.

## Install

```bash
npm install -g pm-to-claude
```

## Usage

```bash
# Launch the full experience (Learn + Reference)
pm-to-claude

# Jump directly to the reference section
pm-to-claude --ref

# Reset mission progress and start over
pm-to-claude --reset
```

## Progress tracking

Mission completion is stored in `~/.pm-to-claude/progress.json`. A progress bar shows your status across all 5 missions. Use `--reset` to start fresh.

## License

MIT
