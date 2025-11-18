# Templates & Downloads

Ready-to-use templates to help you follow best practices. Copy these templates and customize them for your projects.

## 📄 README Templates

### [Basic Project README](readme-basic.md)
For simple code projects and tools
- Project description and purpose
- Installation and usage instructions  
- Contact information and data classification

### [Research Project README](readme-research.md) 
For academic and research repositories
- Research objectives and methodology
- Data sources and limitations
- Citation requirements and collaboration guidelines

### [Publication Repository README](readme-publication.md)
For published research with code/data
- Paper reference and DOI links
- Code and data availability statements
- Reproduction instructions and licensing

## 🔄 Pull Request Templates

### [Standard PR Template](pull-requests/standard-pr.md)
For most code and documentation changes
- Change summary and testing checklist
- Data safety verification and review requests

### [Data Addition Template](pull-requests/data-addition-pr.md)
When adding datasets or data processing code
- Data classification verification and source documentation
- Processing steps and safety checklist

### [Publication Template](pull-requests/publication-pr.md)
For adding published research materials
- Paper information and reproducibility verification
- License compliance and citation requirements

## 📋 Issue Templates

### [Bug Report](issues/bug-report.md)
Report problems and errors
- Steps to reproduce and environment details
- Expected vs actual behavior with screenshots

### [Feature Request](issues/feature-request.md)
Suggest improvements and new features
- Problem description and proposed solutions
- Alternative approaches and additional context

### [Data Access Request](issues/data-request.md)
Request access to restricted datasets
- Research purpose and data requirements
- Security clearance and timeline needs

## 🗂️ Repository Files

### [Contributing Guidelines](repository-files/contributing.md)
Help others contribute to your project
- Development workflow and code standards
- Review process and communication guidelines

## 🚀 GitHub Actions Templates

### [Governance Scanner](workflows/governance-scanner.yml)
Automated compliance monitoring and security scanning
- PHI/PII detection, secrets scanning, dependency checks
- Daily access rights reviews and reporting

### [Organization Deployment](workflows/organization-deployment.yml)
Enterprise-grade organization-wide governance deployment
- Matrix strategy for parallel deployment to all repos
- Automated compliance collection and executive dashboards

### [Repository Compliance Monitor](workflows/repository-compliance.yml)
Individual repository compliance monitoring
- Access review, data classification monitoring
- Customizable compliance thresholds

## 🎯 How to Use These Templates

### Step 1: Choose Your Template
Browse the categories above and click on templates that fit your needs.

### Step 2: Copy and Customize
1. **Copy the template content** from the linked page
2. **Replace placeholder text** in [square brackets] with your information
3. **Remove sections** that don't apply to your project
4. **Add project-specific** requirements or details

### Step 3: Add to Your Repository
- **README.md** → Repository root directory
- **CONTRIBUTING.md** → Repository root directory  
- **Pull request templates** → `.github/pull_request_template.md`
- **Issue templates** → `.github/ISSUE_TEMPLATE/` folder
- **Workflows** → `.github/workflows/` folder

### Template Placeholders
Common placeholders you'll need to replace:
- `[Project Name]` - Your project's name
- `[Your Name]` - Project maintainer name
- `[Your Email]` - Contact email address
- `[Organization]` - Your organization name
- `[Repository URL]` - GitHub repository URL
- `[License Type]` - Choose appropriate license

## ⚙️ GitHub Actions Workflows

### Governance Automation
**Purpose**: Automated compliance monitoring and security scanning for your repositories

**Available Workflows**:
- **[Governance Scanner](workflows/governance-scanner.yml)** - PHI/PII detection, secrets scanning, dependency checks
- **[Repository Compliance Monitor](workflows/repository-compliance.yml)** - Access review, data classification monitoring
- **[Setup Guide](workflows/README.md)** - Complete deployment instructions and customization options

**Quick Start**:
1. Copy workflow files to `.github/workflows/` in your repository
2. Create `DATA_CLASSIFICATION.md` using our [template](data-classification-template.md)
3. Push changes to activate governance scanning

**Features**:
- Automated security and compliance monitoring
- Daily access rights reviews
- PHI/PII detection and alerts
- Customizable compliance thresholds
- Integration with organizational policies

## 💡 Template Tips

### Keep Templates Updated
- Review templates quarterly for policy changes
- Update contact information when team members change
- Add new sections as your project evolves

### Customize for Your Audience  
- **Public repositories** → Include more detailed installation and contribution guidelines
- **Internal projects** → Focus on organizational policies and contacts
- **Research repositories** → Emphasize data sources, methodology, and citation

### Test Your Templates
- Create a test repository with your customized templates
- Ask colleagues to review for clarity and completeness
- Update based on feedback and actual usage

---

**Questions about templates?** Check our [FAQ](../help/faq.md) or contact [GitHub Tech Managers](../help/contact.md)