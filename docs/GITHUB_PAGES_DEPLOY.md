## GitHub Pages Deployment (Actions)

This project deploys to GitHub Pages using the **GitHub Actions** build and
deployment flow (not the "Deploy from a branch" option). The build tool is
**Vite** (see `vite.config.ts`), even if you don't use any Vite-specific
features directly.

### 1) Repository Settings

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### 2) Workflow Prerequisites

Ensure the workflow file exists at:

- `.github/workflows/deploy.yml`

It should:
- build the project (`bun run build`)
- upload the `dist/` artifact
- deploy using `actions/deploy-pages`

### 3) Required Secrets

Add these GitHub Actions secrets:

- `APP_RECAPTCHA_SITE_KEY`
- `APP_N8N_WEBHOOK_URL`

These are used at build time to generate `public/config.js`.

### 3) Base URL for GitHub Pages

Set a repo variable so Vite builds with the correct base path.

**Custom domain (apex or www):**
- `VITE_BASE_URL=/`

**GitHub Pages default URL (`https://<owner>.github.io/<repo>/`):**
- `VITE_BASE_URL=/<repo-name>/`

The workflow reads this repo variable and `vite.config.ts` uses it as `base`
so asset URLs resolve correctly.

### 4) Trigger a Deployment

Push to `main` or manually run the workflow:

- **Actions → Deploy to GitHub Pages → Run workflow**

### 5) Confirm the Deployment

After a successful run:
- The workflow output shows the deployed URL.
- The site is available at `https://<owner>.github.io/<repo>/`.

### 6) Common Issues

- **404 on assets**: ensure `VITE_BASE_URL` is set to `/${{ github.event.repository.name }}/`
  in the build step.
- **Missing config**: ensure the two secrets are set and `public/config.js`
  is created during build.
- **Still serving old content**: hard refresh or wait a minute for GitHub Pages
  cache to clear.
