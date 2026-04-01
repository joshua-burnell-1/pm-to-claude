// ABOUTME: Mission select screen showing all missions with completion status.
// ABOUTME: Lets the user pick a mission to run or go back to the main menu.

import inquirer from 'inquirer';
import chalk from 'chalk';
import { isMissionComplete, renderProgressBar } from '../progress.js';
import { getMissions } from './mission-data.js';
import { runMission } from './runner.js';

export async function showMissionSelect() {
  const missions = getMissions();

  console.log('');
  console.log(renderProgressBar());
  console.log('');

  const choices = missions.map((m) => {
    const status = isMissionComplete(m.id)
      ? chalk.green('✓')
      : chalk.dim('○');
    const titleColor = isMissionComplete(m.id) ? chalk.dim : chalk.white;

    return {
      name: `${status} ${titleColor(`Mission ${m.id}: ${m.title}`)}`,
      value: m.id,
    };
  });

  choices.push({ name: chalk.dim('← Back to main menu'), value: 'back' });

  const { missionId } = await inquirer.prompt([
    {
      type: 'list',
      name: 'missionId',
      message: chalk.green('Select a mission:'),
      choices,
    },
  ]);

  if (missionId === 'back') return;

  const mission = missions.find((m) => m.id === missionId);
  await runMission(mission);

  // Return to mission select after completing
  await showMissionSelect();
}
