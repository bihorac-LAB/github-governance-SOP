# Contributing to [Project Name]

Thank you for your interest in contributing! This document explains how to contribute to this project safely and effectively.

## Getting Started

### Prerequisites
Before contributing, ensure you have:
- [ ] Read our [Code of Conduct](CODE_OF_CONDUCT.md)
- [ ] Completed required data safety training
- [ ] Access to the repository (see [access request process])
- [ ] Familiarity with Git and GitHub workflows

### First-Time Contributors
1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally
3. **Set up development environment** (see setup instructions below)
4. **Start with small changes** - fix typos, improve documentation
5. **Read existing issues** to understand project needs

## Development Workflow

### 1. Issue Assignment
- **Check existing issues** before starting work
- **Comment on issues** you'd like to work on
- **Get assignment** from maintainers before beginning
- **Create new issues** for bugs or feature requests

### 2. Branch Creation
```bash
# Always work on feature branches, never main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

**Branch naming conventions:**
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code improvements

### 3. Making Changes
- **Keep changes focused** - one logical change per PR
- **Follow coding standards** (see Style Guide below)
- **Test your changes** thoroughly
- **Document your changes** - update README, comments, docs

### 4. Committing
```bash
# Make clear, descriptive commits
git add .
git commit -m "Add feature to analyze survey responses

- Implement statistical analysis functions
- Add unit tests for new functions
- Update documentation with usage examples"
```

**Commit message format:**
- **First line:** Brief summary (50 characters or less)
- **Blank line** 
- **Details:** Explain what and why, not just what

### 5. Pull Request Submission
```bash
# Push your branch
git push origin feature/your-feature-name

# Then create PR on GitHub with our PR template
```

## Code Style Guidelines

### General Principles
- **Readability first** - code should be self-documenting
- **Consistency** - follow existing project patterns
- **Simplicity** - avoid overengineering
- **Documentation** - comment complex logic

### Language-Specific Guidelines

**Python:**
- Follow PEP 8 style guide
- Use type hints for function parameters and returns
- Maximum line length: 88 characters
- Use meaningful variable names

**R:**
- Follow tidyverse style guide
- Use `<-` for assignment, not `=`
- Use snake_case for function and variable names
- Document functions with roxygen2 comments

**JavaScript:**
- Use ES6+ features
- Use semicolons consistently
- Use camelCase for variables and functions
- Follow project's ESLint configuration

**Markdown:**
- Use ATX headers (`#` style, not `===` style)
- Maximum line length: 80 characters
- Use reference-style links for readability

## Testing Requirements

### Before Submitting
- [ ] All existing tests pass
- [ ] New code includes appropriate tests
- [ ] Manual testing completed
- [ ] No breaking changes (or properly documented)

### Running Tests
```bash
# Python
python -m pytest tests/

# R  
Rscript -e "testthat::test_dir('tests')"

# JavaScript
npm test

# Documentation
mkdocs serve  # Verify docs build correctly
```

### Test Types
- **Unit tests** - Test individual functions
- **Integration tests** - Test component interactions
- **End-to-end tests** - Test complete workflows
- **Documentation tests** - Ensure examples work

## Data Safety Requirements

### CRITICAL: Data Review Checklist
Before adding ANY file, verify:
- [ ] **No real patient data (PHI)** - health information, medical records
- [ ] **No personal data (PII)** - names, addresses, SSNs, phone numbers
- [ ] **No sensitive business data** - financial, proprietary information
- [ ] **No secrets or credentials** - passwords, API keys, tokens
- [ ] **Appropriate classification** - follows organization data guidelines

### Safe Data Types
✅ **Allowed:**
- Synthetic or simulated datasets
- Public datasets (with proper attribution)
- Code and documentation
- Educational examples
- Aggregated, anonymized statistics

❌ **Never allowed:**
- Real patient data, even "de-identified"
- Customer or personnel information
- Proprietary algorithms or trade secrets
- Any credentials or access tokens

### If Unsure
**When in doubt, don't upload.** Contact the data governance team at [GitHub Tech Managers](../help/contact.md)

## Review Process

### What Reviewers Look For
- **Code correctness** - does it work as intended?
- **Data safety compliance** - no sensitive data included?
- **Style consistency** - follows project conventions?
- **Test coverage** - adequate testing included?
- **Documentation** - clear explanations provided?

### Responding to Reviews
- **Be responsive** - reply within 2-3 business days
- **Ask questions** - if feedback is unclear
- **Make requested changes** - address all review comments
- **Be patient** - reviews take time and improve code quality
- **Thank reviewers** - appreciate their time and expertise

### Review Timeline
- **Simple changes** - 1-2 business days
- **Complex features** - 3-5 business days  
- **Large refactoring** - 1-2 weeks
- **Emergency fixes** - Same day (with justification)

## Communication

### Channels
- **GitHub Issues** - Bug reports, feature requests
- **Pull Request comments** - Code-specific discussions
- **Discussions** - General project questions
- **Email** - Sensitive or private matters

### Communication Guidelines
- **Be respectful** - professional and courteous tone
- **Be specific** - provide details and context
- **Be patient** - volunteers have other commitments
- **Search first** - check if question already answered

## Recognition

### How We Recognize Contributors
- **GitHub contributors list** - automatic credit for merged PRs
- **Release notes** - major contributors mentioned
- **Project documentation** - significant contributors listed
- **Presentations** - acknowledgment in talks and papers

### Types of Contributions Valued
- **Code contributions** - bug fixes, features, improvements
- **Documentation** - guides, examples, clarifications
- **Testing** - bug reports, test cases, QA
- **Design** - UI/UX improvements, graphics
- **Community** - helping others, mentoring new contributors

## Project Governance

### Decision Making
- **Maintainers** - make technical decisions
- **Principal Investigator** - makes policy decisions
- **Community input** - through issues and discussions
- **Consensus seeking** - prefer agreement when possible

### Conflict Resolution
1. **Direct discussion** - try to resolve disagreements directly
2. **Maintainer mediation** - escalate to project maintainers
3. **PI decision** - final authority when needed

## Getting Help

### Technical Questions
- **Documentation** - check project docs first
- **Search issues** - likely already answered
- **Ask in discussions** - for general questions
- **Open new issue** - for specific bugs or features

### Process Questions
- **Contributing guide** - this document
- **Code of conduct** - behavioral expectations
- **Governance team** - [GitHub Tech Managers](../help/contact.md)
- **Project maintainers** - see repository README

## Resources

### Learning Resources
- **Git Tutorial:** [Interactive Git tutorial]
- **GitHub Guide:** [GitHub flow documentation]
- **Code Style:** [Language-specific style guides]
- **Testing:** [Testing framework documentation]

### Project-Specific Resources
- **Setup Guide:** [Link to detailed setup instructions]
- **Architecture:** [Project architecture documentation]
- **API Documentation:** [If applicable]
- **Examples:** [Example usage and tutorials]

---

**Thank you for contributing!** Your efforts help make this project better for everyone.

**Questions?** Contact the maintainers or governance team - we're here to help!