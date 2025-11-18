# Repository Creation Workflow

This workflow guides you through the complete process of requesting, creating, and setting up a new GitHub repository that complies with organizational governance.

## Prerequisites

- [ ] Active GitHub organization access
- [ ] Completed data classification assessment
- [ ] Clear understanding of repository purpose
- [ ] Approval from supervisor/project lead (if required)

## Phase 1: Planning & Assessment (30-45 minutes)

### Step 1.1: Define Repository Purpose
**Document the following**:

- **Project Name**: Clear, descriptive name
- **Primary Purpose**: Research, education, tools, documentation, etc.
- **Target Audience**: Internal team, organization-wide, public, etc.
- **Expected Lifespan**: Short-term, ongoing, permanent archive
- **Collaboration Needs**: Solo work, team project, external partners

### Step 1.2: Complete Data Classification Assessment
**Time Required**: 15-20 minutes

1. **Use the assessment template**: [Data Classification Checklist](../templates/data-classification-template.md)
2. **Answer all classification questions** thoroughly
3. **Identify required security controls** based on data sensitivity
4. **Determine appropriate access levels**

!!! warning "Critical Step"
    This assessment determines whether your repository can be created and what restrictions apply. Take time to be thorough and accurate.

### Step 1.3: Check Policy Compliance
Review applicable policies:

- [ ] **Institutional Data Governance**: Ensure compliance with your organization's data policies
- [ ] **Grant Requirements**: Check if funded research has specific sharing/access requirements
- [ ] **Collaboration Agreements**: Verify any external partner requirements
- [ ] **Publication Plans**: Consider future journal submission requirements

### Step 1.4: Plan Repository Structure
**Recommended structure**:

```
repository-name/
├── README.md                 # Project overview and setup
├── DATA_CLASSIFICATION.md    # Completed assessment
├── CONTRIBUTING.md           # Contributor guidelines
├── LICENSE                   # Appropriate license
├── .github/
│   ├── ISSUE_TEMPLATE/      # Issue templates
│   └── pull_request_template.md
├── docs/                    # Documentation
├── src/                     # Source code
├── tests/                   # Test files
├── data/                    # Data files (if appropriate)
└── scripts/                 # Utility scripts
```

## Phase 2: Request Creation (1-3 business days)

### Step 2.1: Determine Approval Requirements

Based on your data classification:

- **Public/Low Risk**: Self-service creation (if available)
- **Moderate Risk**: Team lead approval required
- **High Risk**: Governance team approval required
- **Prohibited Content**: Repository cannot be created

### Step 2.2: Submit Repository Request

=== "Self-Service (Low Risk Only)"
    1. Use organization's repository creation interface
    2. Fill out basic information
    3. Upload completed data classification
    4. Repository is created immediately

=== "Approval Required"
    1. Submit request via designated process:
       - GitHub issue with repository request template
       - Internal form/ticketing system
       - Email to governance team
    2. Include:
       - Completed data classification assessment
       - Repository purpose and structure plan
       - Access requirements
       - Supervisor approval (if required)

### Step 2.3: Request Review Process

**Reviewers will check**:
- ✅ Data classification accuracy
- ✅ Compliance with organizational policies
- ✅ Appropriate access controls
- ✅ Required approvals obtained

**Timeline**: 1-3 business days depending on complexity

## Phase 3: Repository Setup (45-60 minutes)

### Step 3.1: Initial Repository Configuration

Once approved and created:

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/your-org/repository-name.git
   cd repository-name
   ```

2. **Set up branch protection** (maintainers only):
   - Require pull request reviews
   - Require status checks
   - Restrict force pushes
   - Require up-to-date branches

### Step 3.2: Create Essential Documentation

#### README.md
Use the [README template](../templates/readme-template.md) and include:

- [ ] Project description and purpose
- [ ] Data classification level
- [ ] Installation/setup instructions
- [ ] Usage examples
- [ ] Contributing guidelines
- [ ] Contact information

#### DATA_CLASSIFICATION.md
- [ ] Copy your completed assessment
- [ ] Include approval signatures
- [ ] Add review schedule

#### CONTRIBUTING.md
- [ ] Code style guidelines
- [ ] Pull request process
- [ ] Testing requirements
- [ ] Contact for questions

### Step 3.3: Configure Security Settings

#### GitHub Repository Settings
- [ ] **Visibility**: Set to private/public per classification
- [ ] **Features**: Enable/disable wikis, issues, projects as needed
- [ ] **Security**: Enable vulnerability alerts and dependency scanning
- [ ] **Merge Settings**: Configure merge strategies

#### Access Controls
- [ ] **Teams**: Add appropriate teams with correct permissions
- [ ] **Collaborators**: Add external collaborators if approved
- [ ] **Permissions**: Verify read/write/admin access levels

### Step 3.4: Set Up Automation

#### Required GitHub Actions
Based on data classification, set up:

- [ ] **PHI/PII Scanner**: Automated detection of sensitive data
- [ ] **Secrets Scanner**: Check for hardcoded credentials
- [ ] **License Checker**: Verify dependency licenses
- [ ] **Vulnerability Scanner**: Security analysis

#### Optional Automation
- [ ] **Continuous Integration**: Automated testing
- [ ] **Code Quality**: Style and complexity checks
- [ ] **Documentation**: Automated doc generation

### Step 3.5: Initial Content Setup

1. **Create directory structure**:
   ```bash
   mkdir -p docs src tests scripts
   touch docs/.gitkeep src/.gitkeep tests/.gitkeep
   ```

2. **Add basic files**:
   - License file (if applicable)
   - .gitignore for your language/framework
   - Basic configuration files

3. **Commit and push initial setup**:
   ```bash
   git add .
   git commit -m "Initial repository setup with governance compliance"
   git push origin main
   ```

## Phase 4: Team Onboarding (varies)

### Step 4.1: Add Team Members
1. **Review access requirements** with team members
2. **Add collaborators** through GitHub interface
3. **Assign appropriate roles**: read, write, maintain, admin
4. **Verify access** by having team members clone and access

### Step 4.2: Team Training
Ensure team members understand:

- [ ] Repository purpose and guidelines
- [ ] Data classification requirements
- [ ] Contribution workflow
- [ ] Security and compliance requirements

### Step 4.3: Establish Workflows
Set up team processes:

- [ ] **Communication**: How team discusses issues
- [ ] **Review Process**: Who reviews pull requests
- [ ] **Release Management**: How versions are managed
- [ ] **Maintenance**: Regular update and cleanup procedures

## Success Criteria ✅

Repository is ready for use when:

- [ ] All required documentation is complete and accurate
- [ ] Security settings match data classification requirements
- [ ] Team members have appropriate access
- [ ] Governance automation is configured and working
- [ ] Initial commit includes proper structure and documentation
- [ ] Team understands workflows and requirements

## Common Decision Points

### Should this be public or private?
- **Public if**: Open source project, educational content, published research
- **Private if**: Internal tools, preliminary research, restricted data

### What license should we use?
- **MIT/Apache**: Permissive open source
- **GPL**: Copyleft open source  
- **Proprietary**: Internal/restricted use
- **No License**: Default copyright (most restrictive)

### How should we handle external collaborators?
- **Add as collaborators**: For ongoing partnerships
- **Fork workflow**: For occasional contributions
- **Issue-only access**: For feedback and bug reports

## Troubleshooting

### Repository Request Denied
- **Review data classification**: May be too high risk for GitHub
- **Modify scope**: Remove sensitive components
- **Consider alternatives**: Internal GitLab, restricted access systems

### Can't Enable Certain Features
- **Organization restrictions**: Check with admin team
- **Plan limitations**: May need GitHub Enterprise features
- **Policy constraints**: Some features may be disabled by policy

### Access Issues
- **Team membership**: Verify user is in correct teams
- **Repository permissions**: Check individual access settings
- **Organization SSO**: May need to authorize application

## Next Steps

After repository creation:

1. **Begin Development**: Follow established contribution workflows
2. **Regular Reviews**: Schedule periodic governance reviews
3. **Monitor Compliance**: Watch for automated alerts and violations
4. **Update Documentation**: Keep documentation current as project evolves

## Emergency Contacts

- **Repository Issues**: `github-admin@organization.edu`
- **Governance Questions**: `github-governance@organization.edu`
- **Security Concerns**: `security@organization.edu`
- **Technical Support**: `helpdesk@organization.edu`

---

🚀 **Your repository is now ready for productive, compliant use!**