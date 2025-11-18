# Working Together on Projects

GitHub is designed for collaboration. This guide shows you how to work effectively with others on shared projects.

## 🤝 Basic Collaboration Workflow

### The Standard Process
1. **Get assigned to a repository** - through the access request process
2. **Clone or fork** the repository to your account
3. **Create a branch** for your specific work
4. **Make changes** following project guidelines
5. **Submit a pull request** for review
6. **Respond to feedback** and make revisions
7. **Your changes get merged** into the main project

### Types of Collaboration

**Internal Team Projects:**
- Direct repository access as contributor or maintainer
- Work on assigned features or bug fixes
- Regular team coordination through issues and project boards

**External Collaborations:**
- Fork the repository to your personal account
- Submit pull requests from your fork
- Less direct access, more formal review process

## 📋 Project Coordination

### Using Issues Effectively

**Create good issues:**
- Clear, descriptive titles
- Detailed problem description or feature request
- Steps to reproduce (for bugs)
- Acceptance criteria (for features)
- Relevant labels and assignments

**Issue templates help:**
```markdown
**Bug Report**
- What happened?
- What should have happened?
- Steps to reproduce
- Environment details

**Feature Request**
- What problem does this solve?
- Proposed solution
- Alternative approaches considered
- Additional context
```

### Project Boards
- **Kanban-style organization** - To Do, In Progress, Done
- **Track work progress** - see what everyone is working on
- **Identify blockers** - items stuck in review or waiting
- **Plan sprints** - organize work into time-boxed periods

### Communication Best Practices
- **Use @mentions** to notify specific people
- **Reference issues** with #issue-number in commits and PRs
- **Keep discussions in relevant places** - don't scatter conversations
- **Be clear and professional** in all communications

## 🔀 Branching Strategies

### Feature Branches
**Best for most work:**
```bash
git checkout main
git pull origin main
git checkout -b feature/user-authentication
# Work on your feature
git push origin feature/user-authentication
# Create PR when ready
```

### Bug Fix Branches
**For fixing specific issues:**
```bash
git checkout -b fix/login-button-bug
# Fix the bug
# Reference the issue number in commit
git commit -m "Fix login button alignment (fixes #123)"
```

### Branch Naming Conventions
- `feature/description` - New functionality
- `fix/description` - Bug fixes  
- `docs/description` - Documentation updates
- `refactor/description` - Code improvements
- `test/description` - Adding or improving tests

## 👥 Code Review Culture

### Giving Good Reviews
**Focus on:**
- Code correctness and safety
- Following project standards
- Clear and maintainable code
- Data safety compliance
- Performance considerations

**Avoid:**
- Personal attacks or harsh criticism
- Nitpicking style issues (if not in standards)
- Blocking PRs for subjective preferences
- Demanding changes without explanation

**Review checklist:**
- [ ] Does the code do what it claims?
- [ ] Are there any security issues?
- [ ] Is it following our data safety rules?
- [ ] Is it well-documented?
- [ ] Are tests included (if applicable)?

### Receiving Reviews Gracefully
- **Don't take feedback personally** - it's about the code, not you
- **Ask questions** if you don't understand feedback
- **Thank reviewers** for their time and effort
- **Address feedback promptly** - don't let PRs go stale
- **Learn from suggestions** - reviewers often have good insights

## 🔄 Handling Merge Conflicts

### What Are Conflicts?
Conflicts happen when:
- Two people edit the same lines in a file
- Someone deletes a file that another person modified
- Git can't automatically merge changes

### Resolving Conflicts
```bash
# Update your branch with latest main
git checkout main
git pull origin main
git checkout your-feature-branch
git merge main

# If conflicts occur, Git will mark them in files:
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> main

# Edit the files to resolve conflicts
# Remove conflict markers and choose correct content
# Then commit the resolution:
git add .
git commit -m "Resolve merge conflicts"
```

### Preventing Conflicts
- **Keep branches small and focused**
- **Merge/rebase regularly** with main branch
- **Communicate with team** about overlapping work
- **Don't let branches get stale** - submit PRs promptly

## 📁 File Organization

### Consistent Structure
```
repository/
├── docs/              # Documentation
├── src/               # Source code
├── tests/             # Test files  
├── data/              # Data files (if appropriate)
├── scripts/           # Utility scripts
├── .github/           # GitHub workflows and templates
├── README.md          # Project overview
├── CONTRIBUTING.md    # How to contribute
└── LICENSE           # Project license
```

### Documentation Standards
- **README.md** - Project overview, setup, basic usage
- **CONTRIBUTING.md** - Detailed contribution guidelines  
- **docs/ folder** - Comprehensive documentation
- **Inline comments** - Explain complex logic
- **API documentation** - If building interfaces

## 🎯 Best Practices Summary

### For Contributors
- **Follow the project's coding standards**
- **Write clear commit messages**
- **Keep pull requests focused and small**
- **Test your changes thoroughly**
- **Update documentation when needed**
- **Respond to review feedback promptly**

### For Maintainers  
- **Review PRs in a timely manner**
- **Provide constructive, helpful feedback**
- **Maintain consistent project standards**
- **Keep project documentation up-to-date**
- **Foster an inclusive, welcoming environment**
- **Recognize and thank contributors**

### For Everyone
- **Be patient with new contributors**
- **Ask questions when unsure**
- **Share knowledge and help others learn**
- **Follow data safety and security rules**
- **Keep discussions professional and respectful**

## 🚨 Common Collaboration Issues

### "My branch is behind main"
**Solution:** Regularly sync with main branch
```bash
git checkout main
git pull origin main
git checkout your-branch
git rebase main  # or git merge main
```

### "Someone already fixed what I'm working on"
**Solution:** Coordinate through issues and communication
- Check existing issues before starting work
- Comment on issues to indicate you're working on them
- Use draft PRs to show work in progress

### "The build is failing on my PR"
**Solution:** Fix the issues locally first
- Run tests locally before pushing
- Check build logs to understand failures
- Ask for help if you can't resolve issues

### "I accidentally committed to main"
**Solution:** Create a new branch and reset main
```bash
# Create branch with your changes
git checkout -b fix/accidental-commit

# Reset main to match origin
git checkout main
git reset --hard origin/main
```

---

**Questions about collaboration?** Ask in project discussions or contact your team lead.