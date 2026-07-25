# AI Agent Instructions for My Web Development

## Project type
- Static HTML/CSS/JavaScript learning portfolio.
- No build system, package manager, or backend.
- Files are meant to run locally by opening HTML files in a browser.

## Key repository structure
- Root HTML files are standalone web projects.
- `styles/` contains CSS for root-level HTML pages.
- Subfolders like `calculator/`, `counter/`, `dice/`, `pokemon/`, `randomNumber/`, `rockPaperScissors/`, `stopwatch/`, `temperature/`, and `timeInParis/` contain small interactive JS-based apps.
- `assets/` holds media resources used by pages.

## What agents should know
- Preserve semantic HTML, accessibility markup, and responsive design.
- Keep each example self-contained unless the user asks to refactor across projects.
- Avoid introducing external dependencies, frameworks, or build tooling unless explicitly requested.
- Respect bilingual content: Arabic assets and text are part of the learning examples.
- There is no automated test suite or CI configuration in this repository.

## Helpful conventions
- Each `*.html` page is a standalone demonstration; changes should usually stay local to that page and its related CSS/JS.
- `styles/` contains reusable stylesheet files for root projects, but not a global app stylesheet.
- Interactive apps typically use one JS file per folder and a corresponding CSS file.

## Useful notes for agents
- Use the existing `README.md` as the primary documentation source.
- If asked to improve or extend a project, keep the implementation plain HTML/CSS/JS and browser-compatible.
- For accessibility improvements, prefer native HTML features and ARIA attributes over custom script-driven behavior.
