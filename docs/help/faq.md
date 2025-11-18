# Frequently Asked Questions

## 🚀 Getting Started

### "I'm completely new to GitHub. Where do I start?"
1. Read the [Getting Started guide](../getting-started/index.md)
2. Take the [knowledge quiz](../getting-started/quiz.md) - you need 80% to pass
3. Submit an [access request](../getting-started/request-access.md) via pull request
4. Start with a simple repository as a Viewer or Contributor

### "Do I need to install anything to use GitHub?"
No special software required! You can do most tasks through the GitHub website. For advanced work, Git command line tools are helpful but optional.

### "How long does it take to get repository access?"
Usually 1-2 business days for standard requests. Complex requests requiring special permissions may take longer. Emergency access can be granted same-day when justified.

### "What if I don't understand the quiz questions?"
Review the [rules documentation](../rules/index.md) thoroughly. The quiz tests essential knowledge for safe GitHub usage. You can retake it as needed.

## 🔐 Access and Permissions

### "Why can't I just email someone for access?"
Our PR-based access process serves multiple purposes:
- Demonstrates you can use GitHub workflow
- Creates transparent record of access requests
- Allows proper review and documentation
- Teaches proper collaboration practices

### "I can see a repository but can't make changes. Why?"
You likely have Viewer role. Check [your permissions](../rules/roles.md) and request Contributor access if you need to make changes.

### "Can I request access to multiple repositories at once?"
Yes, submit separate access requests for each repository, but you can include multiple requests in a single PR if they're related.

### "Who decides if I get access?"
Repository administrators and maintainers review access requests. They consider your role, justification, and project needs.

## 🛡️ Data Safety and Security

### "What data can I put on GitHub?"
Only data classified as safe for GitHub. Review our [data safety rules](../rules/data-safety.md) and use the decision flowchart. When in doubt, ask the governance team.

### "Is de-identified patient data safe for GitHub?"
**No.** Even de-identified clinical data should not go on GitHub. Use approved data storage platforms for any real-world health information.

### "I accidentally uploaded sensitive data. What do I do?"
1. **Contact security team immediately** - [GitHub Tech Managers](../help/contact.md)
2. **Don't try to fix it yourself** - deletion doesn't remove Git history
3. **Change any exposed credentials** - assume they've been compromised
4. **Follow incident response procedures**

### "Can I store passwords temporarily in private repositories?"
**Absolutely not.** Never store passwords, API keys, or secrets in GitHub, even temporarily in private repos. Use password managers or secure credential storage.

### "Why do I need two-factor authentication?"
2FA is required for all organization members to protect against account compromises. It's your second line of defense if your password is stolen.

## 💻 Technical Questions

### "I'm getting 'Permission denied (publickey)' errors. Help!"
This means SSH authentication isn't set up. Either:
1. Set up SSH keys (recommended for regular users)
2. Use HTTPS authentication with username/password
3. See our [troubleshooting guide](troubleshooting.md#permission-denied-publickey)

### "Git keeps asking for my username and password. How do I fix this?"
```bash
# Set up credential storage
git config --global credential.helper store
```
Or better yet, set up SSH keys to avoid passwords entirely.

### "My pull request has merge conflicts. Now what?"
Conflicts happen when multiple people edit the same content. See our [collaboration guide](../guides/collaboration.md#handling-merge-conflicts) for step-by-step resolution.

### "The documentation website isn't showing my changes."
- **Wait 5-10 minutes** - GitHub Pages can be slow to update
- **Clear browser cache** - force refresh with Ctrl+F5  
- **Check if build succeeded** - look at Actions tab
- **Verify changes were merged** - make sure your PR was approved

## 📋 Workflow Questions

### "Should I create an issue before making changes?"
For significant changes, yes. Issues help:
- Discuss the change before implementing
- Get input from maintainers and team
- Coordinate with others who might be working on similar things
- Create a record of why changes were made

### "How big should my pull requests be?"
Small enough to review in 15-30 minutes. If larger, consider breaking into multiple PRs. Smaller PRs get reviewed faster and are easier to understand.

### "Can I continue working while my PR is under review?"
Yes, but create a new branch for new work. Don't add unrelated changes to PRs that are under review.

### "What if my pull request gets rejected?"
Learn from the feedback, address the concerns, and resubmit. Rejection is about the code/approach, not your capabilities. It's a normal part of the process.

## 🔄 Project Management

### "How do I track what everyone is working on?"
Use repository tools:
- **Issues** - for bugs and feature requests
- **Project boards** - for visual workflow tracking  
- **Pull requests** - show active work and reviews
- **Discussions** - for team coordination

### "Can I work on the same thing as someone else?"
Communicate first! Check existing issues and PRs. Comment on issues to indicate you're working on them. Use draft PRs to show work in progress.

### "How do I handle competing pull requests?"
Maintainers will coordinate. Usually:
- Earlier PR gets priority if equivalent quality
- Better implementation wins if significantly different
- Sometimes combine best aspects of both

## 📊 Repository Management

### "How do I create a new repository?"
Follow our [repository creation guide](../guides/create-repository.md). Remember to:
- Complete data classification first
- Get supervisor approval
- Set appropriate visibility (default to private)
- Include required documentation

### "Should my repository be public or private?"
**Default to private.** Only make repositories public when:
- Content is educational/open source
- You have explicit approval
- No organizational data or IP
- Appropriate for external access

### "How do I add team members to my repository?"
Repository administrators can add collaborators through Settings → Manage access. Consider who needs what level of access using the principle of least privilege.

### "When should I archive a repository?"
When the project is complete and no longer actively maintained. Archiving preserves the work while signaling it's no longer active.

## 🎓 Learning and Development

### "I want to learn more about Git. Where should I start?"
1. Master the basics through our guides
2. Explore [GitHub Skills](https://skills.github.com/) - interactive tutorials
3. Read the [Pro Git book](https://git-scm.com/book) (free)
4. Practice with personal projects

### "How do I become a better code reviewer?"
- **Start by reviewing simple changes**
- **Focus on correctness and safety first**
- **Learn the project's standards and conventions**  
- **Give constructive, helpful feedback**
- **Ask questions when you don't understand**

### "Can I use GitHub for learning/personal projects?"
Yes, but follow all security and data safety rules. Keep personal and work projects completely separate. Never mix organizational and personal content.

## 🚨 Emergency Situations

### "I think my account was compromised. What do I do?"
1. **Change your password immediately**
2. **Review recent activity** in GitHub settings
3. **Contact security team** - [GitHub Tech Managers](../help/contact.md)
4. **Enable/reset 2FA** if not already active
5. **Check for unauthorized changes** to repositories you have access to

### "Someone is requesting inappropriate access. How do I report?"
- **Deny the access request** with explanation
- **Contact governance team** - [GitHub Tech Managers](../help/contact.md)  
- **Document the request** for security review
- **Don't grant access** when in doubt

### "I found a security vulnerability in our systems. Who do I tell?"
**Contact security team immediately** - [GitHub Tech Managers](../help/contact.md). Don't post details publicly until the issue is resolved.

## 📞 Still Need Help?

### "Who should I contact for different types of issues?"

**GitHub Tech Managers (Technical, Policy, Security):**
- Contact: See [Contact Information](contact.md)
- Topics: Rules, policies, access, security, GitHub Actions
- Response time: 1-2 business days

**Administration & Billing:**  
- [Administration team](../help/contact.md)
- Topics: Account billing, organizational administration

**Technical Issues:**
- Repository maintainers (project-specific)
- GitHub Tech Managers (general GitHub support)

**Account Problems:**
- GitHub support (for GitHub platform issues)
- Administration team (for organizational account issues)

### "How do I write a good help request?"
Include:
1. **What you were trying to do**
2. **What you expected to happen**
3. **What actually happened** 
4. **Error messages** (exact text)
5. **Steps to reproduce** the issue
6. **Your environment** (OS, browser, etc.)

Poor: "Git doesn't work"
Good: "When I run `git push origin main` I get error 'Permission denied (publickey)'. I'm on Windows 10 using Git Bash and haven't set up SSH keys yet."

---

**Can't find your answer here?** Contact the [GitHub Tech Managers](../help/contact.md) with your specific question.