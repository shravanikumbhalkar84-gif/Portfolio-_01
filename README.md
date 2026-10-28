# Shravani Kumbhalkar — Portfolio

Next.js 16 + GSAP + Three.js portfolio. All text lives in two files, so you rarely touch components:

- `data/profile.json` — name, bio, skills, stats, experience, projects, achievements, social links
- `data/content.json` — hero pills, footer call-to-action, section labels
- `public/assets/` — `hero-portrait.png` (hero photo), `about.webp` (about / share-card photo), `intro.jpg` (landing background), `project-*.png` (project slides)

## Run locally
Easiest: double-click `run.bat` (Windows) or run `./run.sh` (Mac/Linux). It installs packages the first time and starts the site.

Or manually:
```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy for free with GitHub Pages

This project is exported as a static site and deployed by GitHub Actions. The portfolio URL is:

**https://shravanikumbhalkar84-gif.github.io/Portfolio-_01/**

To enable deployment:

1. In the GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Push changes to the `main` branch, or manually run the **Deploy to GitHub Pages** workflow from the **Actions** tab.
3. After the workflow succeeds, the site is available at the URL above. GitHub Pages hosting is free for this public repository.

The workflow builds the static export in `out/` with the correct project-site base path. For a local production export, set `NEXT_PUBLIC_SITE_URL=https://shravanikumbhalkar84-gif.github.io/Portfolio-_01` and `NEXT_PUBLIC_BASE_PATH=/Portfolio-_01` before running `npm run build`.

## To personalise further
- Add real project / GitHub links: fill `link` (and optional `linkLabel`) in `data/profile.json` -> `projects`. Slides with an empty `link` simply hide the button.
- Add GitHub / Instagram: append `{ "label": "GitHub", "href": "..." }` to `socials`.
- Footer video: the footer expects `public/assets/footer-video.mp4` (optional, same as the original design).
