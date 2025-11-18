# Data Safety Rules

GitHub is **not a data warehouse**. We use GitHub for code, documentation, and collaboration - not for storing sensitive data.

## 🎯 Quick Summary

- ✅ **Safe**: Code, documentation, public datasets, educational materials
- ❌ **Unsafe**: Patient data, personal information, passwords, confidential data

## 📊 Data Classification System

We classify all content into 5 categories:

### Class A — Public Educational Content ✅
**What it is:**
- Slides, tutorials, toy examples
- Fully synthetic datasets  
- No reference to real patients or internal identifiers

**GitHub Usage:** Public repositories allowed and encouraged

**Examples:**
- Training materials and workshops
- Educational code examples
- Publicly available datasets
- Open source tools and libraries

### Class B — Internal Non-Sensitive Content ✅  
**What it is:**
- Internal tutorials and teaching scripts
- Generic data processing code
- Documentation and procedures
- No PHI, no internal URLs or passwords

**GitHub Usage:** Private repositories within organization

**Examples:**
- Internal coding guidelines
- General-purpose analysis scripts  
- Team documentation
- Process workflows

### Class C — Confidential Computational Assets (No PHI) ⚠️
**What it is:**
- ETL code, data pipelines, model training scripts
- Configuration for internal systems
- May reference internal concepts but no secrets or topology

**GitHub Usage:** Private repositories only with enhanced security

**Examples:**
- Data processing pipelines
- ML model training code
- Internal API integrations
- System configurations

### Class D — Regulated Data (PHI/PII, Clinical Data) ❌
**What it is:**
- Any real patient-level data
- Even "de-identified" data that could be re-identifiable
- Audit logs, clinical notes, imaging data, lab results

**GitHub Usage:** **NEVER ALLOWED** - Use IRB-approved secure storage

**Examples:**
- Patient records or health information
- Staff personal information
- Research participant data
- Medical images or test results

### Class E — Secrets and Credentials ❌
**What it is:**
- API keys, passwords, SSH keys, tokens
- VPN configurations and access credentials
- Database connection strings

**GitHub Usage:** **NEVER ALLOWED** even in private repositories

**Examples:**
- Database passwords
- API authentication tokens
- SSH private keys
- Service account credentials

## 🔄 Decision Flowchart

Before uploading anything to GitHub, follow this decision tree:

```mermaid
flowchart TD
    A[Do You Want to Store Something?] --> B{Is it real-world data<br/>(patients, staff, hospital)?}
    B -->|Yes| C[❌ STOP: Use Secure, IRB-Approved Storage<br/>Not GitHub]
    B -->|No| D{Is it synthetic or educational only?}
    D -->|Yes| E[✅ GitHub Allowed<br/>Public or Private]
    D -->|No| F{Does it contain secrets<br/>(keys, passwords, tokens)?}
    F -->|Yes| G[❌ STOP: Use Secret Manager<br/>Not GitHub]
    F -->|No| H[✅ Code / Docs Only<br/>GitHub Allowed<br/>Private Recommended]
```

!!! warning "When In Doubt"
    If there is **any doubt** about data classification, treat the content as **Class D (Regulated)** and **do not upload** to GitHub.

## 🛡️ Safety Checklist

Before uploading any content, verify:

- [ ] **No patient information** (names, IDs, medical records)
- [ ] **No personal information** (SSNs, addresses, phone numbers)
- [ ] **No passwords or secrets** (API keys, tokens, credentials)
- [ ] **No confidential business data** (financial, proprietary)
- [ ] **Proper classification completed** using the decision flowchart

## 📱 Common Scenarios

### ✅ Safe Examples

**Research Code:**
- Data analysis scripts that work with de-identified datasets
- Statistical analysis code for published papers
- Visualization and plotting functions

**Educational Materials:**
- Tutorial notebooks with synthetic data
- Course materials and assignments  
- Workshop slides and exercises

**Open Source Projects:**
- Tools and libraries for the research community
- Documentation and user guides
- Example applications and demos

### ❌ Unsafe Examples

**Patient Data:**
- Even "anonymized" clinical data
- Research participant information
- Medical images or test results

**Internal Systems:**
- Database schemas with real data references
- Internal network configurations
- Production system credentials

**Personal Information:**
- Employee directories with contact info
- Student records or grades
- Any identifiable individual data

## 🚨 What If You Make a Mistake?

If you accidentally upload sensitive data:

1. **Don't panic** - mistakes happen
2. **Contact GitHub Tech Managers immediately** - don't wait
3. **Don't try to fix it yourself** - deletion may not be enough
4. **Follow incident response procedures**

**Emergency contacts:**
- **GitHub Tech Managers**: [GitHub Tech Managers](../help/contact.md)
- **Administration/Billing**: [Administration team](../help/contact.md)  
- **Response time**: 1-2 business days for technical issues

## 📋 Data Review Process

### Before Creating a Repository

1. **Complete data classification** using this guide
2. **Get supervisor approval** for sensitive content
3. **Document your classification decision**
4. **Set appropriate repository visibility**

### Regular Reviews

- **Quarterly reviews** of repository contents
- **Update classification** if content changes
- **Remove outdated** or unnecessary files
- **Audit access permissions** regularly

## 🔗 Related Resources

- **[Security Requirements](security.md)** - Technical security measures
- **[Your Role & Permissions](roles.md)** - What you can do based on your access level
- **[How-To: Create Repository](../guides/create-repository.md)** - Step-by-step repository creation

---

**Remember**: When in doubt, ask! It's always better to check first than to risk a data exposure incident.