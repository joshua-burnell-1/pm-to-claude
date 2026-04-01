// ABOUTME: Generic mission runner that displays a mission card and handles the flow.
// ABOUTME: Shows goal, concept, steps, hint, and runs the completion check.

import inquirer from 'inquirer';
import chalk from 'chalk';
import boxen from 'boxen';
import { completeMission, isMissionComplete } from '../progress.js';

export async function runMission(mission) {
  if (isMissionComplete(mission.id)) {
    console.log(chalk.green(`\n  ✓ Mission ${mission.id} already completed!\n`));
    const { redo } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'redo',
        message: 'Run it again anyway?',
        default: false,
      },
    ]);
    if (!redo) return;
  }

  // Mission card
  const card = [
    chalk.cyan.bold(`Mission ${mission.id}: ${mission.title}`),
    '',
    chalk.bold('Goal: ') + chalk.white(mission.goal),
    chalk.bold('Concept: ') + chalk.dim(mission.concept),
    '',
    chalk.bold('Steps:'),
    ...mission.steps.map((s, i) => chalk.white(`  ${i + 1}. ${s}`)),
  ].join('\n');

  console.log('');
  console.log(boxen(card, {
    padding: 1,
    margin: { left: 2 },
    borderStyle: 'round',
    borderColor: 'cyan',
  }));

  // Hint option
  const { showHint } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'showHint',
      message: 'Need a hint?',
      default: false,
    },
  ]);

  if (showHint) {
    console.log(chalk.yellow(`\n  Hint: ${mission.hint}\n`));
  }

  // Wait for user to complete
  const { ready } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'ready',
      message: 'Ready to check if you completed the mission?',
      default: true,
    },
  ]);

  if (!ready) {
    console.log(chalk.dim('\n  No problem — come back when you\'re ready.\n'));
    return;
  }

  // Run completion check
  const passed = await mission.check();

  if (passed) {
    completeMission(mission.id);
    console.log('');
    console.log(boxen(
      chalk.green.bold('  Mission Complete!  ') + chalk.dim(mission.completionMessage),
      {
        padding: { left: 1, right: 1, top: 0, bottom: 0 },
        margin: { left: 2 },
        borderStyle: 'round',
        borderColor: 'green',
      }
    ));
    console.log('');
  } else {
    console.log(chalk.yellow(`\n  Not quite — ${mission.failMessage}\n`));
  }
}
