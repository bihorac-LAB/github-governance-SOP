# How to Make Changes (Pull Requests)

Pull Requests (PRs) are how you safely suggest changes to repositories. This guide shows you the complete process.

## 🎯 What Are Pull Requests?

A Pull Request is:
- **A proposal** to change something in a repository
- **A discussion space** where others can review your changes  
- **A safety mechanism** that prevents direct edits to important content
- **A learning tool** where you get feedback and improve

## 🔄 The Pull Request Workflow

### Step 1: Start With an Issue (Optional but Recommended)

1. **Check existing issues** to see if your change is already discussed
2. **Create a new issue** if none exists:
   - Describe what you want to change and why
   - Get feedback before starting work
   - Reference the issue number in your PR later

### Step 2: Create a Branch

**Why branches?**
- Keep your changes separate from the main code
- Allow you to experiment safely
- Enable multiple people to work simultaneously

**How to create a branch:**

=== "Web Interface"
    1. Go to the repository
    2. Click the branch selector (usually shows "main")
    3. Type a new branch name: `feature/your-change-description`
    4. Click "Create branch"

=== "Command Line"
    ```bash
    git checkout main
    git pull origin main
    git checkout -b feature/your-change-description
    ```

**Branch naming convention:**

- `feature/add-new-analysis` 
  For new features
- `fix/bug-in-calculation`  
  For bug fixes
- `docs/update-readme`  
  For documentation
- `data/add-sample-dataset`  
  For data additions

### Step 3: Make Your Changes

**Best practices:**

- **One logical change per PR**  
  Don't mix unrelated changes
- **Small, focused changes**  
  Easier to review and approve
- **Test your changes**  
  Make sure they work as expected
- **Follow data safety rules**  
  Double-check every file you add

**Before committing, verify:**
- [ ] No sensitive data (PHI, PII, secrets)
- [ ] Files are properly formatted
- [ ] Documentation updated if needed
- [ ] Tests pass (if applicable)

### Step 4: Commit Your Changes

**Write good commit messages:**

```bash
# Good commit messages:
git commit -m "Add data visualization for survey results"
git commit -m "Fix calculation error in statistical analysis"
git commit -m "Update README with installation instructions"

# Poor commit messages:
git commit -m "stuff"
git commit -m "fix"
git commit -m "changes"
```

**Commit message format:**
- **First line**: Brief summary (50 characters or less)
- **Blank line**: Separate summary from details
- **Details**: Explain what and why, not just what

### Step 5: Push Your Branch

=== "Web Interface"
    Changes made through GitHub web interface are automatically "pushed"

=== "Command Line"  
    ```bash
    git push origin feature/your-change-description
    ```

### Step 6: Create the Pull Request

1. **Go to the repository** on GitHub
2. **GitHub will show a banner** suggesting you create a PR
3. **Click "Compare & pull request"** or go to Pull Requests tab
4. **Fill out the PR template:**

```markdown
## Summary
Briefly describe what this PR accomplishes

## Type of Change
- [ ] Bug fix
- [ ] New feature  
- [ ] Documentation update
- [ ] Data addition
- [ ] Other: ___________

## Changes Made
- List the specific changes you made
- Be detailed but concise
- Help reviewers understand your work

## Testing
- [ ] I tested these changes
- [ ] Tests still pass
- [ ] I verified no sensitive data was added

## Data Safety Review
- [ ] This PR does not add any sensitive data
- [ ] I followed data classification guidelines
- [ ] No secrets or credentials included

## Questions for Reviewers
- Any specific areas you want reviewers to focus on?
- Any concerns or uncertainties about your approach?
```

5. **Request reviewers** - choose people familiar with the project
6. **Add labels** if your repository uses them
7. **Click "Create pull request"**

## 👥 The Review Process

### What Happens Next

1. **Automated checks run** (if configured) - security scans, tests
2. **Reviewers get notified** and begin reviewing your changes
3. **Discussion happens** in PR comments
4. **You may need to make revisions** based on feedback
5. **Once approved**, a maintainer merges your PR

### Responding to Review Feedback

**When reviewers suggest changes:**
- **Don't take it personally** - reviews improve quality
- **Ask questions** if you don't understand feedback
- **Make requested changes** in your branch (same PR)
- **Respond to comments** when you've addressed them
- **Thank reviewers** for their time and effort

**Making revisions:**
1. Make changes in your branch (same branch as original PR)
2. Commit the changes
3. Push to update the PR automatically
4. Respond to review comments explaining your changes

## ✅ PR Approval and Merging

### Approval Requirements
Most repositories require:
- [ ] **At least one approval** from a maintainer
- [ ] **All automated checks passing**
- [ ] **No unresolved comments** (or explicit approval despite them)
- [ ] **Data safety verification** completed

### What Happens When Merged
1. **Your changes become part** of the main repository
2. **Your branch can be deleted** (no longer needed)
3. **You get credit** in the repository history
4. **Issue is closed** (if referenced in PR)

## 🛠️ Troubleshooting Common Issues

### "My PR Has Conflicts"
**What it means:** Your changes conflict with changes someone else made

**How to fix:**
1. Update your branch with latest main:
   ```bash
   git checkout main
   git pull origin main
   git checkout your-feature-branch
   git merge main
   ```
2. Resolve conflicts in files
3. Commit and push the resolution

### "Checks Are Failing"
**Common causes:**
- Security scan found potential issues
- Tests are broken by your changes
- Code style doesn't match repository standards

**How to fix:**
- Read the check details to understand what failed
- Fix the identified issues
- Commit and push fixes

### "No One Is Reviewing My PR"
**Possible reasons:**
- Reviewers are busy
- PR is too large or complex
- Missing information or context

**What to do:**
- Politely remind reviewers after 2-3 business days
- Break large PRs into smaller ones
- Add more context or documentation

## 📋 PR Best Practices

### Before Creating PRs
- **Start with issues** to discuss big changes
- **Keep changes focused** - one logical change per PR
- **Update documentation** when you change functionality
- **Test thoroughly** before submitting

### Writing Good PR Descriptions
- **Explain the "why"** not just the "what"
- **Include screenshots** for UI changes
- **List breaking changes** clearly
- **Reference related issues** with #issue-number

### During Review Process
- **Be responsive** to feedback
- **Ask clarifying questions** when feedback is unclear
- **Be patient** with the review process
- **Learn from feedback** for future PRs

## 🚨 What NOT to Do

### Dangerous Practices
- ❌ **Never force push** to shared branches
- ❌ **Don't commit secrets** "temporarily"
- ❌ **Never bypass required reviews** 
- ❌ **Don't add sensitive data** without classification

### Poor Practices
- ❌ **Huge PRs** with hundreds of changes
- ❌ **Vague commit messages** like "fix stuff"
- ❌ **Unrelated changes** mixed together
- ❌ **No testing** of changes before submission

## ❓ Common Questions

### "How big should my PR be?"
Small enough to review in 15-30 minutes. If larger, consider breaking into multiple PRs.

### "Should I create a PR for small typo fixes?"
Yes! All changes should go through PR process, but simple fixes usually get approved quickly.

### "Can I continue working while my PR is under review?"
Yes, create a new branch for new work. Don't add unrelated changes to PRs under review.

### "What if my PR gets rejected?"
Learn from feedback, address concerns, and resubmit. Rejection is rare and usually about process, not personal capability.

---

**Need help with your first PR?** Ask in the comments or contact the [GitHub Tech Managers](../help/contact.md)