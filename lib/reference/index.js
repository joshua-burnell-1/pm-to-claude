// ABOUTME: Reference section browser with category selection and expandable detail views.
// ABOUTME: Lets users browse shortcuts, parallel workflows, and prompting patterns.

import inquirer from 'inquirer';
import chalk from 'chalk';
import boxen from 'boxen';
import { shortcuts, parallelWorkflows, promptingPatterns } from './data.js';

const CATEGORIES = [
  { name: chalk.cyan('Shortcuts') + chalk.dim(' — Keyboard shortcuts & slash commands'), value: 'shortcuts', data: shortcuts },
  { name: chalk.cyan('Parallel Workflows') + chalk.dim(' — Running multiple sessions & coordinating'), value: 'parallel', data: parallelWorkflows },
  { name: chalk.cyan('Prompting Patterns') + chalk.dim(' — 10 prompt structures for product work'), value: 'prompting', data: promptingPatterns },
];

export async function showReference() {
  while (true) {
    console.log('');

    const { category } = await inquirer.prompt([
      {
        type: 'list',
        name: 'category',
        message: chalk.green('Reference — pick a category:'),
        choices: [
          ...CATEGORIES.map((c) => ({ name: c.name, value: c.value })),
          { name: chalk.dim('← Back'), value: 'back' },
        ],
      },
    ]);

    if (category === 'back') return;

    const selected = CATEGORIES.find((c) => c.value === category);
    await browseCategory(selected.data);
  }
}

async function browseCategory(entries) {
  while (true) {
    const choices = entries.map((e) => ({
      name: chalk.white(e.title) + chalk.dim(` — ${e.description}`),
      value: e,
    }));

    choices.push({ name: chalk.dim('← Back to categories'), value: 'back' });

    const { entry } = await inquirer.prompt([
      {
        type: 'list',
        name: 'entry',
        message: chalk.green('Select an entry:'),
        choices,
      },
    ]);

    if (entry === 'back') return;

    // Show detail card
    const card = [
      chalk.cyan.bold(entry.title),
      '',
      chalk.white(entry.detail),
    ].join('\n');

    console.log('');
    console.log(boxen(card, {
      padding: 1,
      margin: { left: 2 },
      borderStyle: 'round',
      borderColor: 'cyan',
      width: 72,
    }));
    console.log('');
  }
}
