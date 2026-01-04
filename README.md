# Airalogy Docs

This repository is configured to build and deploy with VitePress.

## Local development

```sh
npm install
npm run docs:dev
```

## Build and preview

```sh
npm run docs:build
npm run docs:preview
```

## GitHub Pages

- The workflow `deploy.yml` publishes on pushes to the `main` branch.
- If your default branch is not `main`, update the workflow trigger.
- The workflow sets the VitePress base path for project pages and user pages.
