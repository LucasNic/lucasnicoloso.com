# lucasnicoloso.com – Personal Portfolio

Senior DevOps Engineer portfolio website built with React, TypeScript, and Vite.

[![Live Demo](https://img.shields.io/badge/demo-lucasnicoloso.com-blue?style=for-the-badge)](https://lucasnicoloso.com)
[![Build Status](https://github.com/LucasNic/lucasnicoloso.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/LucasNic/lucasnicoloso.com/actions/workflows/deploy.yml)
[![License](https://img.shields.io/github/license/LucasNic/lucasnicoloso.com)](LICENSE)

## Overview

This site showcases Lucas Nicoloso's professional experience, skills, and projects as a Senior DevOps Engineer with 10+ years of multi‑cloud expertise.

**Sections:**
- Hero: Introduction with title "Senior DevOps Engineer 10+ Years"
- About: Background, experience, and core principles (Least Privilege, Security First, Automate Everything, FinOps Driven)
- Skills: Technical skills across AWS, GCP, Azure, Kubernetes, Terraform, CI/CD, Observability
- Projects: Interactive simulations and infrastructure code including Multi‑Cloud Simulation, Deployment Simulation, this site, Multi‑Cloud IaC, CI/CD Azure Microservices
- Contact: Form and links for professional inquiries
- Footer: Social links (GitHub, LinkedIn, Instagram)

## Tech Stack

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite
- **Styling:** CSS traditional (style.css)
- **Linting:** ESLint with TypeScript (type‑aware rules)
- **Deployment:** Cloudflare Pages (automated via GitHub Actions)

## Development

```bash
npm install
npm run dev          # start dev server on http://localhost:5173
npm run build        # production build
npm run lint         # run ESLint
npm run preview      # preview production build locally
```

## Linting

ESLint is configured with type‑aware rules for TypeScript and React‑specific linting via `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`. The configuration file is `eslint.config.js`. For production applications, you can extend the configuration with stricter rules as described in the [official ESLint documentation](https://eslint.org/docs/latest/use/configure/).

## Deployment

The site is automatically deployed to Cloudflare Pages on every push to the `main` branch. The workflow is defined in `.github/workflows/deploy.yml`.

To deploy manually:

1. Ensure you have the Cloudflare Wrangler CLI installed and authenticated.
2. Run `npm run build` to produce the `dist` folder.
3. Deploy with `wrangler pages deploy dist --project-name=lucasnicoloso-com --branch=main`.

## License

MIT © Lucas Nicoloso. See [LICENSE](LICENSE) for details.
