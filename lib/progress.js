// ABOUTME: Manages mission progress stored in ~/.pm-to-claude/progress.json.
// ABOUTME: Tracks completion state for each mission and renders a progress bar.

import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';
import chalk from 'chalk';

const PROGRESS_DIR = path.join(os.homedir(), '.pm-to-claude');
const PROGRESS_FILE = path.join(PROGRESS_DIR, 'progress.json');

const TOTAL_MISSIONS = 5;

export function loadProgress() {
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
  } catch {
    return { missions: {} };
  }
}

export function saveProgress(data) {
  if (!fs.existsSync(PROGRESS_DIR)) {
    fs.mkdirSync(PROGRESS_DIR, { recursive: true });
  }
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(data, null, 2) + '\n');
}

export function completeMission(missionId) {
  const progress = loadProgress();
  progress.missions[missionId] = {
    completed: true,
    completedAt: new Date().toISOString(),
  };
  saveProgress(progress);
}

export function isMissionComplete(missionId) {
  const progress = loadProgress();
  return progress.missions[missionId]?.completed === true;
}

export function resetProgress() {
  saveProgress({ missions: {} });
}

export function getCompletedCount() {
  const progress = loadProgress();
  return Object.values(progress.missions).filter((m) => m.completed).length;
}

export function renderProgressBar() {
  const completed = getCompletedCount();
  const barWidth = 20;
  const filled = Math.round((completed / TOTAL_MISSIONS) * barWidth);
  const empty = barWidth - filled;

  const bar = chalk.green('█'.repeat(filled)) + chalk.dim('░'.repeat(empty));
  return `  Progress: [${bar}] ${completed}/${TOTAL_MISSIONS} missions`;
}
