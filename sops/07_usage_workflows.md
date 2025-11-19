# 7. Standard Usage Workflows

### 7.1 Viewer Workflow (Clinicians, Students)

Most clinicians and some students will use GitHub as **read-only viewers**.

Typical tasks:

1. Open a repository.  
2. Read the `README.md` and relevant documentation.  
3. Browse notebooks or examples.  
4. Optionally, open **Issues** to request features or report problems (if permitted).  

No Git knowledge is required to **view** content. Everything can be done through the web UI.

### 7.2 Contributor Workflow (Analysts, Researchers)

```mermaid
flowchart TD
    A[Identify Task or Issue] --> B[Create Branch<br/>feature/task-name]
    B --> C[Make Changes Locally<br/>or via Web Editor]
    C --> D[Commit Changes with Clear Message]
    D --> E[Push Branch to GitHub]
    E --> F[Create Pull Request<br/>(PR) to main/dev]
    F --> G[Automatic Robots Run<br/>(PHI, Security, Structure)]
    G --> H{All Checks Passed?}
    H -->|No| I[Fix Issues and Update PR]
    H -->|Yes| J[Reviewer Approves PR]
    J --> K[Maintainer Merges PR]
```

Key rules for contributors:

- Work in **branches**, not directly on `main`.  
- Use **meaningful commit messages**.  
- Fill in the **PR template** (see Section 16).  
- Respond constructively to **review comments**.  

### 7.3 Maintainer Workflow (Engineers, Leads)

Maintainers are responsible for:

- Triage of issues and pull requests.  
- Ensuring robots are enabled and enforced.  
- Reviewing PRs for code quality and policy compliance.  
- Coordinating releases and tags (especially for publications).  

Typical PR review steps:

1. Confirm scope matches the linked issue.  
2. Check code style and clarity.  
3. Confirm **no data files** or large binaries are introduced.  
4. Check that **robots passed** (PHI, security, structure).  
5. Approve or request changes.  

---
