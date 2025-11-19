# 9. Automation and “Robots” (GitHub Actions)

We use GitHub Actions to automatically enforce some rules.

### 9.1 Design Goals for Robots

- Detect PHI/PII and block unsafe changes.  
- Prevent secrets from being committed.  
- Enforce basic repo structure and metadata.  
- Support publication readiness and tagging.  
- Reduce manual, repetitive checks for maintainers.

### 9.2 Types of Robots

1. **PHI/PII Scanner (`phi_scan.yml`)**  
   - Trigger: on pull request.  
   - Checks for patterns such as:  
     - Date-of-birth formats (e.g., `YYYY-MM-DD`).  
     - 8–10 digit numeric IDs that look like MRNs.  
     - ICD-10 patterns like `A00`, `E11.9`, etc.  
     - Email, phone, and address formats.  
     - FHIR “Patient” resources in JSON/YAML.  
   - If any suspicious pattern is found, the PR is marked **failed**.

2. **Secrets Scanner (`secrets_scan.yml`)**  
   - Trigger: on pull request and on push to default branch.  
   - Uses pattern-based and entropy-based detection to find:  
     - API keys, passwords, tokens, SSH keys.  
   - If secrets are found:  
     - PR is blocked.  
     - Maintainers are notified to rotate keys and scrub history.

3. **Repo Structure Checker (`repo_structure.yml`)**  
   - Trigger: on pull request and nightly.  
   - Ensures that required files exist:  
     - `README.md`  
     - `LICENSE` (for public repos)  
     - `CODEOWNERS`  
     - `.gitignore`  
   - Fails the check if any are missing (for relevant repos).

4. **Publication Readiness Check (`publication_ready.yml`)**  
   - Trigger: on tag creation (e.g., `v*.*.*`) or manual dispatch.  
   - Checks that:  
     - A `CITATION.cff` file exists.  
     - `LICENSE` is present and valid.  
     - No data folders are present beyond allowed examples.  
     - The repo passes a PHI scan.  
   - If all pass, the tag is considered “ready for journal”.

5. **Labeler / Classifier (`labeler.yml`)**  
   - Trigger: on pull request and on new repository creation (via API or scripts).  
   - Automatically applies labels such as:  
     - `education`  
     - `pipeline`  
     - `publication`  
     - `machine-learning`  
   - Helps search and governance dashboards.

> In the future, we can add more robots (e.g., linting, testing, documentation coverage) as our projects mature.

---
