# Azure Static Hosting Guide

This project is ready to be served as a static site on Azure.

## Why it works

- The app uses `HashRouter`, so internal navigation does not depend on server-side rewrites.
- Static assets and PDFs are served from `public/`, which Vite copies to the root of `dist/`.
- The build output is the `dist/` folder.

## Build

```bash
npm install
npm run build
```

## Option 1: Azure Static Web Apps

1. Create an Azure Static Web Apps resource.
2. Connect the repository or upload the built files through your deployment process.
3. Configure the app location so the build output is served from `dist/`.
4. Use `index.html` as the entry point.
5. Because the app uses `HashRouter`, internal navigation works without extra rewrite rules.

## Option 2: Azure Storage static website

1. Create a Storage Account.
2. Enable the Static website feature.
3. Upload the contents of `dist/` to the `$web` container.
4. Set `index.html` as the index document.
5. If you place Azure Front Door or another CDN in front, keep the origin pointed at the static website endpoint.

## Deployment checks

- Home page loads at `/`.
- Internal routes work when refreshed because the hash fragment is handled client-side.
- Downloadable PDFs are reachable at `/catalogo-cursos.pdf`, `/perfil-empresa.pdf`, and `/publicidad-botiquin.pdf`.
- If the final domain changes, update canonical URLs, Open Graph tags, and the sitemap.