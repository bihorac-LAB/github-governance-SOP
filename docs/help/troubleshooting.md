# Troubleshooting Common Issues

Having problems with GitHub or our workflow? This guide covers the most common issues and their solutions.

## 🔐 Access and Permissions Issues

### "I can't access a repository"
**Possible causes:**
- You haven't been granted access yet
- Your access request hasn't been processed
- Repository is private and you don't have permissions

**Solutions:**
1. **Check if you submitted an access request** - look in the requests/ folder
2. **Contact the repository maintainer** - they can add you directly
3. **Verify your GitHub username** - make sure you used the correct one
4. **Check your email** - you might have missed an invitation

### "I can see the repo but can't make changes"
**Possible causes:**
- You have Viewer role instead of Contributor
- Repository has branch protection enabled
- You're trying to push directly to main branch

**Solutions:**
1. **Check your role** - ask a maintainer about your permissions
2. **Create a branch** - don't work directly on main
3. **Submit a pull request** - even with write access, use PRs for changes

### "Two-factor authentication problems"
**Common issues:**
- Lost access to authenticator app
- Backup codes not working
- Can't receive SMS codes

**Solutions:**
1. **Use backup codes** - you saved these when setting up 2FA
2. **Contact IT support** - they can help reset 2FA if needed
3. **Recovery through GitHub** - use GitHub's account recovery process
4. **Prevention** - save backup codes in password manager

## 💻 Git and GitHub Issues

### "Git is asking for username/password repeatedly"
**Cause:** Authentication not set up properly

**Solutions:**
```bash
# Set up credential storage
git config --global credential.helper store

# Or use SSH keys (recommended)
ssh-keygen -t ed25519 -C "[your.email@ufl.edu]"
# Add the public key to your GitHub account
```

### "Permission denied (publickey)"
**Cause:** SSH key not set up or added to GitHub

**Solutions:**
1. **Generate SSH key** if you don't have one:
   ```bash
   ssh-keygen -t ed25519 -C "[your.email@ufl.edu]"
   ```
2. **Add key to GitHub:**
   - Copy public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub Settings → SSH and GPG keys
   - Add new SSH key
3. **Test connection:**
   ```bash
   ssh -T git@github.com
   ```

### "fatal: not a git repository"
**Cause:** You're not in a Git repository folder

**Solutions:**
```bash
# Check if you're in the right directory
pwd
ls -la

# Navigate to your repository
cd path/to/your/repository

# Or clone the repository first
git clone https://github.com/organization/repository-name.git
```

### "Your branch is behind 'origin/main'"
**Cause:** Remote repository has newer changes

**Solutions:**
```bash
# Update your local main branch
git checkout main
git pull origin main

# If you have local changes, merge or rebase
git checkout your-branch
git merge main
# OR
git rebase main
```

## 🔀 Pull Request Problems

### "Merge conflicts in pull request"
**Cause:** Your changes conflict with changes someone else made

**Solutions:**
1. **Update your branch:**
   ```bash
   git checkout main
   git pull origin main
   git checkout your-feature-branch
   git merge main
   ```

2. **Resolve conflicts:**
   - Open files with conflicts
   - Look for `<<<<<<<`, `=======`, `>>>>>>>` markers
   - Edit to keep the correct content
   - Remove conflict markers

3. **Complete the merge:**
   ```bash
   git add .
   git commit -m "Resolve merge conflicts"
   git push origin your-feature-branch
   ```

### "Pull request checks are failing"
**Common causes:**
- Code doesn't pass automated tests
- Security scan found issues
- Code style violations

**Solutions:**
1. **Read the check details** - click on the failed check
2. **Fix issues locally** - make changes to address problems
3. **Test locally first** - run tests before pushing
4. **Ask for help** - if you can't understand the errors

### "No one is reviewing my pull request"
**Possible causes:**
- Reviewers are busy
- PR is too large or complex
- Missing context or documentation

**Solutions:**
1. **Be patient** - wait 2-3 business days before following up
2. **Add more context** - improve PR description
3. **Break up large PRs** - smaller changes are easier to review
4. **Politely remind reviewers** - @mention them in a comment

## 📁 File and Data Issues

### "I accidentally committed a secret/password"
**URGENT:** This is a security issue

**Immediate steps:**
1. **Don't just delete the file** - Git history preserves everything
2. **Contact [GitHub Tech Managers](contact.md) immediately**
3. **Change the secret/password** - assume it's been exposed
4. **Follow incident procedures** - let Tech Managers handle cleanup

### "I uploaded the wrong file"
**Solutions depend on when you notice:**

**Before pushing:**
```bash
git reset HEAD~1    # Undo last commit
git rm wrong-file   # Remove the wrong file
git add correct-file # Add correct file
git commit -m "Add correct file"
```

**After pushing:**
```bash
git rm wrong-file
git add correct-file
git commit -m "Replace with correct file"
git push origin your-branch
```

**If it contains sensitive data:** Contact GitHub Tech Managers immediately

### "File is too large for GitHub"
**Cause:** GitHub has file size limits (100MB per file)

**Solutions:**
1. **Use Git LFS** for large files:
   ```bash
   git lfs track "*.large-file-extension"
   git add .gitattributes
   git add large-file
   git commit -m "Add large file with LFS"
   ```

2. **Store elsewhere** - use appropriate data storage for large datasets
3. **Compress files** - if possible, reduce file size
4. **Split large files** - break into smaller pieces

## 🖥️ Website and Documentation Issues

### "Documentation site isn't building"
**Common causes:**
- Markdown syntax errors
- Missing files referenced in navigation
- Configuration problems

**Solutions:**
1. **Check build logs** - look at GitHub Actions details
2. **Test locally** - run `mkdocs serve` to see errors
3. **Validate Markdown** - check for syntax errors
4. **Check file paths** - ensure all referenced files exist

### "Changes aren't showing on the website"
**Possible causes:**
- GitHub Pages deployment delay
- Caching issues
- Build failed

**Solutions:**
1. **Wait 5-10 minutes** - GitHub Pages can be slow to update
2. **Clear browser cache** - force refresh with Ctrl+F5
3. **Check Actions tab** - see if deployment succeeded
4. **Verify changes were merged** - make sure your PR was accepted

### "Links are broken"
**Common causes:**
- File moved or renamed
- Incorrect relative paths
- Case sensitivity issues

**Solutions:**
1. **Check file exists** - verify the target file is present
2. **Fix paths** - use correct relative paths
3. **Match case exactly** - filenames are case-sensitive
4. **Test locally** - verify links work in local build

## 🔧 Development Environment Issues

### "MkDocs won't install"
**Common causes:**
- Python version incompatibility
- Permission issues
- Missing dependencies

**Solutions:**
```bash
# Check Python version (need 3.7+)
python --version

# Use virtual environment
python -m venv mkdocs-env
source mkdocs-env/bin/activate  # Linux/Mac
# OR
mkdocs-env\Scripts\activate     # Windows

# Install MkDocs
pip install mkdocs mkdocs-material
```

### "Local site looks different from GitHub Pages"
**Causes:**
- Different MkDocs versions
- Missing plugins or themes
- Configuration differences

**Solutions:**
1. **Use same configuration** - copy mkdocs.yml exactly
2. **Install same plugins** - check requirements.txt
3. **Update MkDocs** - ensure versions match
4. **Test with clean environment** - use fresh virtual environment

## ❓ Getting Additional Help

### When to Ask for Help
- **Security issues** - always ask immediately
- **Stuck for more than 30 minutes** - don't struggle alone
- **Unsure about data safety** - better safe than sorry
- **Policy questions** - when requirements are unclear

### Who to Contact

**Technical Issues:**

- **Repository problems**  
  Contact repository maintainers
- **Git/GitHub issues**  
  Contact [GitHub Tech Managers](contact.md)
- **Build/deployment**  
  Contact [GitHub Tech Managers](contact.md)

**Policy and Access:**

- **Access requests**  
  Follow the PR process in requests/ folder
- **Data classification**  
  Contact [GitHub Tech Managers](contact.md)
- **Security concerns**  
  Contact [GitHub Tech Managers](contact.md)
- **General policy questions**  
  Contact [GitHub Tech Managers](contact.md)

**Emergency Issues:**

- **Security incidents**  
  Contact [GitHub Tech Managers](contact.md) immediately
- **Data breaches**  
  Contact [GitHub Tech Managers](contact.md) and your supervisor
- **Billing/Admin issues**  
  Contact [Administration team](contact.md)

### How to Ask Good Questions

**Include this information:**
1. **What you were trying to do**
2. **What you expected to happen**
3. **What actually happened**
4. **Error messages** (exact text or screenshots)
5. **Steps to reproduce** the problem
6. **Your environment** (operating system, browser, etc.)

**Good example:**
> I was trying to push my changes to GitHub using `git push origin feature/add-analysis`, but I got this error: "Permission denied (publickey)". I'm on Windows 10 using Git Bash. I haven't set up SSH keys yet. How should I authenticate with GitHub?

**Poor example:**
> Git isn't working. Help!

---

**Still stuck?** Don't hesitate to ask for help. We're here to support your success!