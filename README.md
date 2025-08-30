
# Yatra Desert Camp & Resort — Website (Fixed for GitHub Pages)

This repo is configured for **Vite + React** and **GitHub Pages**. Images are imported through the bundler, avoiding broken `/src/assets/...` paths. Forms send via **FormSubmit** to `yatradesertcamp@gmail.com`.

## Quick Start

```bash
npm install
npm run dev
npm run build
```

Push to `main` and GitHub Actions will deploy automatically.

## Notes
- Vite `base` is set to `./` (works for Project Pages & custom domains).
- Forms post to `https://formsubmit.co/yatradesertcamp@gmail.com` with `_next` redirect to `/thank-you.html`.
- Gallery auto-imports all images under `src/assets/photos/**` via `import.meta.glob`.
