#!/usr/bin/env node
// ABOUTME: Entry point for pm-to-claude CLI tool.
// ABOUTME: Routes to learn mode, reference mode, or reset based on flags.

import chalk from 'chalk';
import { showMainMenu } from '../lib/menu.js';
import { showReference } from '../lib/reference/index.js';
import { resetProgress } from '../lib/progress.js';

const args = process.argv.slice(2);
const flag = args[0];

if (flag === '--reset') {
  resetProgress();
  console.log(chalk.green('\n  Progress reset. Start fresh with: pm-to-claude\n'));
} else if (flag === '--ref') {
  await showReference();
} else if (flag === '--help' || flag === '-h') {
  console.log(`
pm-to-claude — Learning companion for PMs using Claude Code

Usage:
  pm-to-claude          Launch the main menu (Learn or Reference)
  pm-to-claude --ref    Jump directly to the reference section
  pm-to-claude --reset  Reset all mission progress
  pm-to-claude --help   Show this help message
`);
} else {
  await showMainMenu();
}
