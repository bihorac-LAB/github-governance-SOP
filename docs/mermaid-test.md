# Mermaid Test Page

This page tests if Mermaid diagrams are rendering correctly.

## Simple Flowchart

```mermaid
flowchart TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Need to fix]
    C --> E[End]
    D --> E
```

## Access Flow from SOP

```mermaid
flowchart TD
    A[Staff Member Requests GitHub Access] --> B[Manager or PI Approval]
    B --> C[IT/Data Office Assigns Role]
    C --> D[GitHub Invitation Sent]
    D --> E[User Accepts Invitation]
    E --> F[User Enables 2FA]
    F --> G[User Completes Onboarding Checklist]
    G --> H[User Assigned to Teams and Repositories]
```

## Data Classification Flow

```mermaid
flowchart TD
    A[Do You Want to Store Something?] --> B{Is it real-world data<br/>(patients, staff, hospital)?}
    B -->|Yes| C[STOP: Use Secure, IRB-Approved Storage<br/>Not GitHub]
    B -->|No| D{Is it synthetic or educational only?}
    D -->|Yes| E[GitHub Allowed<br/>Public or Private]
    D -->|No| F{Does it contain secrets<br/>(keys, passwords, tokens)?}
    F -->|Yes| G[STOP: Use Secret Manager<br/>Not GitHub]
    F -->|No| H[Code / Docs Only<br/>GitHub Allowed<br/>Private Recommended]
```

If you can see the flowcharts above as visual diagrams (not just text), then Mermaid is working correctly!