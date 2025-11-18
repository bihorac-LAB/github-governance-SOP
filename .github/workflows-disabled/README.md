# Disabled Workflows

This folder contains GitHub Actions workflows that are disabled for the SOP repository but available as templates for other repositories in the organization.

## Why These Are Disabled Here

The governance SOP repository contains **governance documentation and templates**, not production code that needs compliance monitoring. Running governance scans on the governance repository itself would be redundant and potentially cause issues.

## Available as Templates

These workflows have been moved to the documentation as templates:

- **Governance Scanner** → Available at `docs/library/workflows/governance-scanner.yml`
- **Repository Compliance Monitor** → Available at `docs/library/workflows/repository-compliance.yml`

## How to Use

To deploy these workflows to other repositories:

1. **Copy the template files** from `docs/library/workflows/` to `.github/workflows/` in your target repository
2. **Follow the setup guide** at `docs/library/workflows/README.md`
3. **Create required files** like `DATA_CLASSIFICATION.md`
4. **Configure any necessary secrets** (like SNYK_TOKEN)

## Re-enabling (If Needed)

If you need to re-enable these workflows for the SOP repository:

1. Move files from `.github/workflows-disabled/` back to `.github/workflows/`
2. Ensure `DATA_CLASSIFICATION.md` exists in the root (it should already exist)
3. The workflows will automatically trigger on the next push

## Active Workflows

The SOP repository keeps only essential workflows active:

- **deploy-docs.yml** - Builds and deploys the documentation to GitHub Pages

This ensures the documentation site remains functional while avoiding unnecessary compliance scanning of the governance documentation itself.