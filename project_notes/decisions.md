# Decisions

## Migrated to @inquirer/prompts — 2026-03-31
**What:** Replaced legacy `inquirer.prompt()` with `select`, `confirm` from `@inquirer/prompts`.
**Why:** Legacy API silently breaks in some terminals — renders menu but doesn't capture keyboard input. Discovered during first live test.
**Alternatives considered:** Downgrading inquirer (would miss security patches)

## Mission 5 auto-passes — 2026-03-31
**What:** The compression mission's check() always returns true.
**Why:** Can't programmatically verify if a user ran /compact in a different Claude session. Trust the user.
**Alternatives considered:** Checking Claude session files (too fragile, private internals)

## Progress stored in ~/.pm-to-claude/ — 2026-03-31
**What:** Mission completion tracked in a JSON file in the home directory.
**Why:** Persists across directories. User can run pm-to-claude from any project and keep their progress.
**Alternatives considered:** Current directory (would reset when cd-ing to a different project)
