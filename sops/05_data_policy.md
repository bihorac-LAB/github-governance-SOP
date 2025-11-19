# 5. Data Classification and GitHub Policy

GitHub is **not a data warehouse**. Treat GitHub primarily as a code, documentation, and configuration repository.

### 5.1 Data Classes

We distinguish several classes of content:

1. **Class A — Public Educational Content**  
   - Slides, tutorials, toy examples, fully synthetic datasets.  
   - No reference to real patients or internal identifiers.  
   - **GitHub:** Public repo is allowed and encouraged.

2. **Class B — Internal Non-Sensitive Content**  
   - Internal tutorials, teaching scripts, generic data processing code.  
   - No PHI, no internal URLs or passwords.  
   - **GitHub:** Private repo within organization.

3. **Class C — Confidential Computational Assets (No PHI)**  
   - ETL code, data pipelines, model training scripts, configuration for internal systems.  
   - May reference internal concepts but must not expose secrets or URLs that reveal internal topology.  
   - **GitHub:** Private repos only; stronger scrutiny and robots.

4. **Class D — Regulated Data (PHI/PII, Clinical Data)**  
   - Any real patient-level data, even if “de-identified” but still potentially re-identifiable.  
   - Audit logs, clinical notes, imaging data, lab results, etc.  
   - **GitHub:** **Never allowed**. Must be stored in IRB-approved secure environments.

5. **Class E — Secrets and Credentials**  
   - API keys, passwords, SSH keys, tokens, VPN configs.  
   - **GitHub:** **Never allowed**, even in private repos.

### 5.2 Data Storage Decision Flowchart

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

If there is **any doubt**, treat the content as **Class D (Regulated)** and **do not upload** to GitHub.

---
