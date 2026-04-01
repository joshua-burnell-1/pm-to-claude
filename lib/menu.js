// ABOUTME: Main menu that lets users choose between Learn and Reference modes.
// ABOUTME: Shows progress bar and routes to the selected mode.

import { select } from '@inquirer/prompts';
import chalk from 'chalk';
import boxen from 'boxen';
import { renderProgressBar } from './progress.js';
import { showMissionSelect } from './missions/index.js';
import { showReference } from './reference/index.js';

export async function showMainMenu() {
  const title = chalk.blue.bold('PM to Claude') + chalk.dim(' — Your Claude Code companion');

  console.log('');
  console.log(boxen(title, {
    padding: 1,
    margin: { left: 2 },
    borderStyle: 'round',
    borderColor: 'blue',
  }));

  console.log(renderProgressBar());
  console.log('');

  const mode = await select({
    message: chalk.green('What do you want to do?'),
    choices: [
      {
        name: chalk.cyan('LEARN') + chalk.dim(' — Mission-based onboarding (5 missions)'),
        value: 'learn',
      },
      {
        name: chalk.cyan('REFERENCE') + chalk.dim(' — Quick-access guide for daily use'),
        value: 'reference',
      },
      {
        name: chalk.dim('Exit'),
        value: 'exit',
      },
    ],
  });

  if (mode === 'learn') {
    await showMissionSelect();
  } else if (mode === 'reference') {
    await showReference();
  }
}
