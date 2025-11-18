# 4. Roles and Responsibilities

We use a **role-based model** to control permissions.

| Role        | Typical People                                | Permissions (GitHub)                     | Responsibilities |
|-------------|-----------------------------------------------|------------------------------------------|------------------|
| Org Owner   | Technical lead, compliance representative     | Full admin across organization           | Governance, org-wide settings, automation, incident response |
| Repo Admin  | PI, project lead, senior engineer             | Admin for specific repository            | Manage repo settings, enable robots, assign maintainers |
| Maintainer  | Engineer, experienced analyst                 | Write, review, merge PRs                 | Code review, enforcing standards, triage issues |
| Contributor | Analyst, student, research assistant          | Create branches & pull requests          | Implement changes, follow SOP, respond to reviews |
| Viewer      | Clinician, stakeholder, external collaborator | Read-only access                         | Read content, open issues (if allowed), give feedback |

**Principle of least privilege:** default to **Viewer** or **Contributor** unless there is a clear justification for Maintainer or Admin.

---
