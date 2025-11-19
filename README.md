# GitHub Governance Guide

Professional GitHub governance and onboarding workflow for organizations. This repository contains a comprehensive MkDocs-based guide covering policies, training, templates, and automated workflows.
[![Deploy GitHub Governance Site](https://github.com/bihorac-LAB/github-governance-SOP/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/bihorac-LAB/github-governance-SOP/actions/workflows/deploy-docs.yml)

## 📚 Structure

- `mkdocs.yml` — MkDocs configuration with Material theme
- `docs/` — All documentation pages organized in 5 clear sections:
  - **Getting Started** — Onboarding workflow with interactive quiz
  - **Basic Rules** — Essential policies (data safety, security, roles)
  - **How-To Guides** — Practical tutorials for common tasks
  - **Templates & Downloads** — Ready-to-use templates and workflows
  - **Help & Support** — FAQ, troubleshooting, and contact information

## 🚀 Features

- **Interactive Onboarding** — 10-question quiz with 80% pass requirement
- **Comprehensive Policies** — Data safety, security, and access control
- **Ready-to-Use Templates** — README, PR, issue, and workflow templates
- **Automated Governance** — GitHub Actions for organization-wide compliance
- **Professional Design** — Clean Material Design theme with responsive layout

## 🛠️ Local Development

1. **Create virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install mkdocs mkdocs-material mkdocs-git-revision-date-localized-plugin
   ```

3. **Run development server:**
   ```bash
   mkdocs serve
   ```

4. **View site:** http://127.0.0.1:8000

## 📦 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when changes are pushed to `main` branch using the workflow in `.github/workflows/deploy.yml`.

### Manual Deployment

```bash
mkdocs build
# Deploy the generated site/ directory to your hosting platform
```

## 🔧 Customization

1. **Update contact information** in `docs/help/contact.md`
2. **Customize organizational details** throughout the documentation
3. **Modify branding** in `mkdocs.yml` theme settings
4. **Add your organization's workflows** to `docs/library/workflows/`
