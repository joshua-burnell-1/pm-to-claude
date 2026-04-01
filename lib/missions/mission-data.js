// ABOUTME: Defines all 5 missions with goals, steps, hints, and completion checks.
// ABOUTME: Each mission teaches a real Claude Code workflow skill.

import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';

export function getMissions() {
  return [
    {
      id: 1,
      title: 'Write Your First CLAUDE.md',
      goal: 'Create a CLAUDE.md file that gives Claude persistent context about your project.',
      concept: 'CLAUDE.md is how you give Claude memory — it reads this file at the start of every session.',
      steps: [
        'Open your terminal and cd into any project directory.',
        'Create a file called CLAUDE.md in the project root.',
        'Add at least: a project overview, your role, and one instruction for Claude.',
        'Start a Claude Code session in that directory — Claude will read it automatically.',
      ],
      hint: 'Start simple: "# My Project\\n\\nThis is a [type] project built with [tech]. I am a PM. Keep responses concise and focus on product implications."',
      check: async () => {
        const candidates = [
          path.join(process.cwd(), 'CLAUDE.md'),
          path.join(os.homedir(), '.claude', 'CLAUDE.md'),
        ];
        return candidates.some((p) => fs.existsSync(p));
      },
      completionMessage: 'Claude now has persistent context about your project.',
      failMessage: 'No CLAUDE.md found in the current directory or ~/.claude/. Create one and try again.',
    },
    {
      id: 2,
      title: 'Have Claude Write a One-Pager',
      goal: 'Prompt Claude to write a product spec or one-pager instead of writing it yourself.',
      concept: 'Claude works best when you give it structure — role, context, format, and constraints.',
      steps: [
        'Start a Claude Code session.',
        'Give Claude a structured prompt: what the feature is, who it\'s for, and what format you want.',
        'Ask Claude to write it to a file (e.g., "Write this to spec.md").',
        'Review the output and ask for one revision.',
      ],
      hint: 'Try: "Write a one-pager spec for [feature]. Include: Problem, Proposed Solution, Success Metrics, Open Questions. Write it to spec.md."',
      check: async () => {
        const cwd = process.cwd();
        const specFiles = ['spec.md', 'one-pager.md', 'prd.md', 'brief.md', 'proposal.md'];
        return specFiles.some((f) => fs.existsSync(path.join(cwd, f)));
      },
      completionMessage: 'You just delegated your first writing task to Claude.',
      failMessage: 'No spec file found (spec.md, one-pager.md, prd.md, brief.md, or proposal.md). Have Claude write one.',
    },
    {
      id: 3,
      title: 'Set Up Your First MCP Tool',
      goal: 'Connect an MCP server so Claude can interact with external tools.',
      concept: 'MCP (Model Context Protocol) lets Claude talk to databases, APIs, and tools through a standard interface.',
      steps: [
        'Check what MCP servers are available: look at Claude Code docs or search npm for "mcp-server".',
        'Pick one that fits your workflow (e.g., GitHub, Notion, or filesystem).',
        'Add it to your Claude Code MCP config (claude mcp add <name> <command>).',
        'Start a session and ask Claude to use the tool.',
      ],
      hint: 'Easiest first MCP: "claude mcp add filesystem npx @anthropic-ai/mcp-filesystem" — then ask Claude to list files.',
      check: async () => {
        const mcpPaths = [
          path.join(process.cwd(), '.mcp.json'),
          path.join(os.homedir(), '.claude', 'mcp.json'),
        ];
        return mcpPaths.some((p) => {
          if (!fs.existsSync(p)) return false;
          try {
            const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
            const servers = data.mcpServers || data.servers || {};
            return Object.keys(servers).length > 0;
          } catch {
            return false;
          }
        });
      },
      completionMessage: 'Claude can now reach beyond the terminal into your tools.',
      failMessage: 'No MCP config found with servers. Set one up with "claude mcp add" and try again.',
    },
    {
      id: 4,
      title: 'Make a Claude API Call',
      goal: 'Run a Claude API call from the terminal and read the JSON response.',
      concept: 'The API is how production apps talk to Claude — understanding it helps you spec AI features.',
      steps: [
        'Make sure you have an ANTHROPIC_API_KEY environment variable set.',
        'Ask Claude Code to write a simple Node.js script that calls the Claude API.',
        'Run the script and examine the JSON response structure.',
        'Save the script as api-test.js in your current directory.',
      ],
      hint: 'Ask Claude: "Write a Node.js script that sends a simple message to the Claude API using @anthropic-ai/sdk and logs the full response. Save it as api-test.js."',
      check: async () => {
        const cwd = process.cwd();
        const apiFiles = ['api-test.js', 'api-call.js', 'claude-api.js', 'test-api.js'];
        return apiFiles.some((f) => fs.existsSync(path.join(cwd, f)));
      },
      completionMessage: 'You can now read API responses — crucial for speccing AI features.',
      failMessage: 'No API test script found (api-test.js, api-call.js, claude-api.js, or test-api.js).',
    },
    {
      id: 5,
      title: 'Compress a Long Conversation',
      goal: 'Use /compact to compress a long Claude Code conversation without losing context.',
      concept: 'Context compression lets you work in longer sessions without running out of Claude\'s memory.',
      steps: [
        'Start a Claude Code session and have a multi-turn conversation (5+ messages).',
        'Type /compact to compress the conversation.',
        'After compression, ask Claude to recall something from earlier in the conversation.',
        'Verify it retained the key context.',
      ],
      hint: 'Have a detailed conversation about a product feature, then /compact, then ask "What were the key decisions we made?" — if it remembers, you\'re good.',
      check: async () => {
        // This is hard to verify programmatically — we trust the user
        return true;
      },
      completionMessage: 'You now know how to extend your working sessions indefinitely.',
      failMessage: 'Try running /compact in a Claude Code session.',
    },
  ];
}
