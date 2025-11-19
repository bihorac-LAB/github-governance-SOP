# 11. Routine Review and Audit Process

We maintain GitHub hygiene via **automated checks** and **manual reviews**.

```mermaid
flowchart TD
    A[Monthly Automated Scans<br/>(Robots)] --> B{Issues Found?}
    B -->|No| C[No Action Needed]
    B -->|Yes| D[Maintainers Fix and Document]

    C --> E[Quarterly Manual Review<br/>(By Maintainers + Lead)]
    D --> E

    E --> F{Repo Still Active?}
    F -->|Yes| G[Remain Active or Maintenance Mode]
    F -->|No| H[Archive Repo<br/>Mark as Read-Only]

    H --> I[Optional Deletion After Policy Retention Period]
```

### 11.1 Monthly Automated Checks

- PHI/PII scans on all branches.  
- Secrets scans.  
- Structure checks.  

### 11.2 Quarterly Manual Review

For each important repo, maintainers:

- Review open issues and PRs.  
- Confirm robots are still configured appropriately.  
- Decide whether to remain active or move to maintenance.  

### 11.3 Annual Archival / Cleanup

- Repos inactive for **>12 months** may be **archived**.  
- Repos irrelevant or duplicated can be marked for **deletion** after retention rules.

---
