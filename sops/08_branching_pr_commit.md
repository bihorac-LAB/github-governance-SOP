# 8. Branching, Pull Requests, and Commit Standards

### 8.1 Branch Naming

- `feature/<short-description>` (e.g., `feature/add-calc-features`)  
- `fix/<bug-or-issue-id>` (e.g., `fix/issue-42-hidden-bug`)  
- `docs/<topic>` (e.g., `docs/update-readme`)  

### 8.2 Commit Messages

Recommended style:

- `feat: add new ICU risk score computation`  
- `fix: correct indexing error in lab table`  
- `docs: expand explanation of model inputs`  
- `refactor: simplify ETL pipeline structure`  

### 8.3 Pull Request Requirements

Every PR should:

- Have a **descriptive title**.  
- Reference related issue(s): e.g., `Closes #42`.  
- Include a summary of changes and testing performed.  
- Pass all GitHub Actions (robots) before merge.  
- Be reviewed by at least **one maintainer** (more for sensitive repos).  

Self-merge is generally **not allowed**, except for specific maintainers on low-risk repos.

---
