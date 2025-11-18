# How to Create a Repository

This guide walks you through creating a new GitHub repository safely and compliantly.

## 📋 Before You Start

**Prerequisites:**
- [ ] You have GitHub organization access
- [ ] You understand [Data Safety Rules](../rules/data-safety.md)
- [ ] You have a clear purpose for the repository
- [ ] Your supervisor has approved the repository creation

## Step 1: Plan Your Repository

### Define the Purpose
Ask yourself:
- **What is this repository for?** (research project, documentation, tools)
- **Who will use it?** (team members, public, collaborators)
- **What type of content** will it contain? (code, documents, data)
- **How long** will it be actively used?

### Choose Repository Type
- **Public** - Anyone can see and use (open source, educational materials)
- **Private** - Only team members can access (internal work, preliminary research)

!!! warning "Default to Private"
    When in doubt, choose private. You can always make it public later, but you can't take back public exposure.

## Step 2: Complete Data Classification

**REQUIRED** before creating any repository:

### Use the Decision Flowchart
1. **Does it contain real-world data** about people? → ❌ Use secure storage, not GitHub
2. **Does it contain secrets** (passwords, keys)? → ❌ Use password manager, not GitHub  
3. **Is it synthetic/educational only?** → ✅ GitHub allowed
4. **Is it just code/documentation?** → ✅ GitHub allowed (probably private)

### Document Your Classification
Create a mental note (or written record) of:
- **Data classification level** (A, B, C - see [Data Safety](../rules/data-safety.md))
- **Justification** for GitHub usage
- **Intended audience** and access level

## Step 3: Create the Repository

### Using GitHub Web Interface

1. **Go to GitHub.com** and sign in
2. **Click the "+" button** in the top-right corner  
3. **Select "New repository"**
4. **Fill out the form:**
   - **Repository name**: descriptive, no spaces (use-hyphens-or_underscores)
   - **Description**: clear explanation of purpose
   - **Visibility**: Private (recommended) or Public
   - **Initialize**: ✅ Add README file
   - **Add .gitignore**: Choose template for your programming language
   - **Choose license**: Only if making public

5. **Click "Create repository"**

## Step 4: Set Up Repository Properly

### Add Required Documentation

**README.md** (edit the auto-generated one):
```markdown
# Project Title

## Description
Clear explanation of what this repository contains and its purpose.

## Data Classification
- **Classification Level**: [A/B/C - see governance docs]
- **Justification**: Why this content is appropriate for GitHub
- **Approved by**: [Supervisor name and date]

## Usage
How to use or contribute to this repository.

## Contact
- **Project Lead**: [Name and email]
- **Technical Contact**: [Name and email]
```

**Create Additional Files:**
- **CONTRIBUTING.md** - Guidelines for contributors
- **LICENSE** - If public repository
- **.gitignore** - What files to exclude from Git

### Configure Repository Settings

1. **Go to repository Settings** (tab at top)
2. **Enable features you need:**
   - Issues (for bug reports and requests)
   - Discussions (for community conversation)
   - Wiki (for documentation)
3. **Set up branch protection:**
   - Go to Branches section
   - Add rule for `main` branch
   - Enable "Require pull request reviews"
   - Enable "Require status checks"

## Step 5: Add Team Members

### Determine Who Needs Access
- **Repository Admin**: Project lead, PI
- **Maintainers**: Senior team members who will review changes
- **Contributors**: Team members who will make changes  
- **Viewers**: Stakeholders who need to see progress

### Add Collaborators
1. **Go to Settings → Manage access**
2. **Click "Invite a collaborator"**
3. **Search for GitHub username** or email
4. **Choose role** (Read, Write, Maintain, Admin)
5. **Send invitation**

## Step 6: First Content

### Add Project Structure
Create basic folder structure:
```
your-repository/
├── docs/           # Documentation
├── src/            # Source code  
├── data/           # Data files (if appropriate)
├── tests/          # Test files
├── scripts/        # Utility scripts
└── README.md       # Main documentation
```

### Upload Initial Content
- **Use web interface** for simple uploads
- **Use Git command line** for bulk uploads
- **Follow data safety rules** - double-check every file

!!! danger "Final Safety Check"
    Before uploading ANY file, verify:
    - No patient data (PHI/PII)
    - No passwords or secret keys  
    - No confidential business information
    - Appropriate for the chosen repository visibility

## Step 7: Ongoing Management

### Regular Maintenance
- **Review access quarterly** - remove people who no longer need it
- **Update documentation** as project evolves
- **Monitor security alerts** from GitHub
- **Archive when complete** - don't let old repos accumulate

### Best Practices
- **Meaningful commit messages** - explain what and why you changed
- **Regular backups** - don't rely on GitHub as only copy
- **Keep dependencies updated** - security patches and improvements
- **Document decisions** - future team members will thank you

## 🚨 Common Mistakes to Avoid

### Data Safety Violations
- ❌ Uploading files without checking content first
- ❌ Copying from other systems without data review
- ❌ Assuming "de-identified" data is safe
- ❌ Storing secrets "temporarily" in private repos

### Access Control Problems  
- ❌ Making repository public without approval
- ❌ Giving everyone admin access "to make it easier"
- ❌ Forgetting to remove access when people leave
- ❌ Not documenting who has access and why

### Technical Issues
- ❌ No .gitignore file (uploading unnecessary files)
- ❌ Poor repository organization (everything in root folder)
- ❌ No documentation (README, contributing guidelines)
- ❌ No branch protection (anyone can directly edit main)

## ✅ Success Checklist

Your repository is ready when:

- [ ] **Purpose clearly documented** in README
- [ ] **Data classification completed** and documented  
- [ ] **Appropriate visibility** setting (public/private)
- [ ] **Team members added** with correct roles
- [ ] **Branch protection enabled** on main branch
- [ ] **Required documentation** present (README, contributing)
- [ ] **Initial content follows** data safety rules
- [ ] **Repository settings** configured appropriately

## ❓ Need Help?

- **Policy questions**: [GitHub Tech Managers](../help/contact.md)
- **Technical help**: [GitHub Tech Managers](../help/contact.md)
- **Data classification**: See [Data Safety Rules](../rules/data-safety.md)
- **Access requests**: See [Request Access Guide](../getting-started/request-access.md)

---

**Remember**: It's easier to be careful during setup than to fix problems later!