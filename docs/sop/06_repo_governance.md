# 6. Repository Governance

### 6.1 When to Create a Repository

Create a new repository when:

- You start a **new project** with its own lifecycle (e.g., a research study, a teaching module, a software tool).  
- You need a dedicated location for **journal publication code release**.  
- You want to create a **reusable library** for multiple projects.  

Do **not** create a new repo for:

- Temporary scratch work.  
- One-off data exploration (use local workspace or internal notebooks).  
- Storing data dumps.  

### 6.2 Public vs Private Repositories

#### Public Repos — Allowed When

- Content is **pure code, documentation, and synthetic examples**.  
- There are no **internal system identifiers** or secrets.  
- The repo is meant for **publication** or **open education**.  
- The content has passed **robot checks** and human review.

#### Public Repos — Not Allowed For

- Anything that indirectly reveals internal hospital/system details.  
- Code tightly coupled to internal EHR or data warehouse configurations.  
- Any content that is under a commercial NDA or IP restriction.  

#### Private Repos

Use private repositories for:

- Internal tools and pipelines.  
- Work-in-progress research code.  
- Teaching materials that are not yet public.  
- Code that references internal systems (but still sanitized).  

> **Reminder:** “Private” does **not** mean it’s safe for PHI or secrets.

### 6.3 Journals, Publications, and Open Science

Many journals require code availability. Use the following pattern:

1. Develop code in an **internal (private) repo**.  
2. After acceptance or at submission time, create a **clean public repo** for the paper:  
   - Remove internal references, debugging traces, and hospital-specific details.  
   - Include **only synthetic example datasets** that demonstrate usage.  
   - Add a `LICENSE` (MIT, Apache 2.0, etc.).  
   - Add a `CITATION.cff` file describing how to cite the work.  
3. Run the **Publication Readiness** GitHub Action (see Section 9).  
4. Tag a version (e.g., `v1.0.0`) and share that with the journal.  

### 6.4 Repository Naming and Structure

#### Naming Conventions

- `proj-<shortname>-<year>` for project repos.  
- `edu-<course>-<topic>` for teaching repos.  
- `paper-<shortname>-<journal>` for publication repos.  

Examples:  

- `proj-icu-prediction-2025`  
- `edu-intro-ml-healthcare`  
- `paper-mortality-risk-bmj`  

#### Mandatory Files and Folders

Every repository must have at least:

```text
README.md
LICENSE               # Required for public repos, strongly recommended everywhere
CODEOWNERS            # Defines who reviews and owns what
.gitignore
docs/                 # Documentation, design notes, diagrams
.github/workflows/    # GitHub Actions (robots)
SECURITY.md           # How to report security issues
```

### 6.5 Repository Lifecycle

Each repo has a lifecycle: **Active → Maintenance → Archived → Deleted (if needed)**.

```mermaid
flowchart TD
    A[Repo Created] --> B[Active Development]
    B --> C[Maintenance Mode<br/>(Low Activity)]
    C --> D[Archived<br/>(Read-only)]
    D --> E[Optional Deletion<br/>(After Policy Period)]
```

- **Active**: frequent commits and ongoing development.  
- **Maintenance**: occasional updates; still supported.  
- **Archived**: read-only; preserved for reference or reproducibility.  
- **Deleted**: only after policy-defined retention and approvals.

---
