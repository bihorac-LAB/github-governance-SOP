# GitHub Actions & Workflows

Deploy these to your repositories for automated governance and compliance.

## Quick Deploy

```bash
# Copy to your repo
cp governance-scanner.yml .github/workflows/
cp repository-compliance.yml .github/workflows/
```

## Available Actions

**governance-scanner.yml** - Scans for secrets, PHI/PII, vulnerabilities  
**repository-compliance.yml** - Daily compliance monitoring  
**organization-deployment.yml** - Bulk deploy across organization

## Setup

1. Copy `.yml` files to `.github/workflows/` in target repositories
2. Add `DATA_CLASSIFICATION.md` to repository root
3. Optional: Add `SNYK_TOKEN` secret for enhanced scanning

Done.