# GitHub Governance & Training Docs (MkDocs)

This repository contains the **MkDocs** project for the internal
*GitHub Governance & Training* portal.

## Structure

- `mkdocs.yml` — MkDocs configuration
- `docs/` — All documentation pages
  - `index.md` — Landing page
  - `sop/master_manual.md` — Full SOP & training manual
  - `training/` — Interactive session material
  - `automation/` — GitHub Actions ("robots") documentation
  - `workflows/` — Step-by-step procedures
  - `templates/` — Reusable templates
  - `faq/` — FAQ for clinicians and non-technical staff

## Local Preview

1. Install MkDocs and Material for MkDocs:

   ```bash
   pip install mkdocs mkdocs-material
   ```

2. Run the local server:

   ```bash
   mkdocs serve
   ```

3. Open the site in your browser:

   - http://127.0.0.1:8000

## Deployment (GitHub Pages)

You can deploy this site using GitHub Actions. Create a workflow like:

- `.github/workflows/deploy-docs.yml`

that runs `mkdocs build` and publishes the `site/` directory to GitHub Pages.
