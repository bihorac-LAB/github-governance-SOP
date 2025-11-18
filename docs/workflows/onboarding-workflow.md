# Complete Onboarding Workflow

This workflow takes you from initial interest in GitHub access through your first successful repository interaction.

## Prerequisites

- [ ] Institutional email address
- [ ] Basic computer literacy
- [ ] Manager/supervisor approval for GitHub access

## Phase 1: Pre-Access Learning (Self-Paced)

### Step 1.1: Read Essential Documentation
**Time Required**: 45-60 minutes

1. **Start here**: [How to Use This Documentation](../sop/00_how_to_use.md)
2. **Learn the basics**: [GitHub Fundamentals](../sop/02_fundamentals.md)
3. **Understand data safety**: [Data Classification & Policy](../sop/05_data_policy.md)
4. **Know the rules**: [Repository Governance](../sop/06_repo_governance.md)

!!! tip "Reading Tip"
    Take notes on terms you don't understand. The [FAQ](../faq/index.md) has definitions for common concepts.

### Step 1.2: Complete the Onboarding Quiz
**Time Required**: 15-20 minutes

1. Go to [Onboarding Quiz](../onboarding/quiz.md)
2. Complete all sections with 80% or higher score
3. Save your completion certificate/score

!!! warning "Required Score"
    You must achieve at least 80% on the quiz before requesting access. You can retake it if needed.

### Step 1.3: Prepare Access Request Information
**Time Required**: 10-15 minutes

Gather the following information:
- [ ] Your full legal name
- [ ] Institutional email address
- [ ] Desired GitHub username (create account if needed)
- [ ] Your role/department
- [ ] Manager/supervisor contact information
- [ ] Specific projects or repositories you need access to

## Phase 2: Request Access (1-3 Business Days)

### Step 2.1: Submit Access Request

Choose **one** method:

=== "GitHub Issue (Recommended)"
    1. Go to the governance repository
    2. Click "Issues" → "New Issue"
    3. Select "Access Request" template
    4. Fill out all required fields
    5. Submit the issue

=== "Internal Form"
    1. Use the link provided by your administrator
    2. Complete the online form
    3. Submit for review

### Step 2.2: Wait for Review
**Processing Time**: 1-3 business days

During review, administrators will:
- ✅ Verify your institutional email
- ✅ Confirm quiz completion
- ✅ Contact your manager/supervisor for approval
- ✅ Validate your intended use case

You may receive follow-up questions if clarification is needed.

### Step 2.3: Receive Access Confirmation

You'll receive an email with:
- GitHub organization invitation link
- Your assigned role and permissions
- Next steps for account setup
- Contact information for support

## Phase 3: Initial Setup (30-45 minutes)

### Step 3.1: Accept GitHub Invitation
1. Click the invitation link in your email
2. Accept the organization invitation
3. Verify you can see organization repositories

### Step 3.2: Configure Your GitHub Profile
1. **Profile Picture**: Upload a professional photo
2. **Bio**: Add your role and department
3. **Email Settings**: Ensure institutional email is verified
4. **Notification Settings**: Configure as desired

### Step 3.3: Set Up Security Features

!!! important "Security Requirements"
    Two-factor authentication (2FA) is required for all organization members.

1. **Enable 2FA**:
   - Go to GitHub Settings → Security
   - Set up two-factor authentication
   - Save backup codes in a secure location

2. **SSH Keys** (if using command line):
   - Generate SSH key pair
   - Add public key to GitHub account
   - Test connection

### Step 3.4: Join Relevant Teams
1. Check your team assignments in the organization
2. Join any additional teams based on your role
3. Verify you have appropriate repository access

## Phase 4: First Repository Interaction (15-30 minutes)

### Step 4.1: Explore Your First Repository
1. Navigate to a repository you have access to
2. Review the README.md file
3. Check the repository's data classification
4. Look at recent issues and pull requests

### Step 4.2: Clone Repository (if applicable)
For contributors who will work with code:

```bash
# Using HTTPS
git clone https://github.com/your-org/repository-name.git

# Using SSH (if configured)
git clone git@github.com:your-org/repository-name.git
```

### Step 4.3: Make a Test Contribution
1. **Find the "Good First Issue"** label in repository issues
2. **Comment on the issue** to express interest
3. **Follow the contribution workflow** (see [First Contribution Workflow](first-contribution-workflow.md))

## Phase 5: Complete Onboarding (Optional but Recommended)

### Step 5.1: Schedule Orientation Session
Many organizations offer:
- [ ] Group orientation sessions
- [ ] One-on-one setup assistance  
- [ ] Role-specific training sessions

### Step 5.2: Connect with Your Team
- [ ] Introduce yourself in relevant team channels
- [ ] Set up regular check-ins with your supervisor
- [ ] Identify your go-to person for GitHub questions

### Step 5.3: Set Up Development Environment
If you'll be contributing code:
- [ ] Install required development tools
- [ ] Configure code editor/IDE
- [ ] Set up local testing environment
- [ ] Review team coding standards

## Success Criteria ✅

You've successfully completed onboarding when:

- [ ] You can log into GitHub and see the organization
- [ ] Your 2FA is enabled and working
- [ ] You can access your assigned repositories
- [ ] You understand your role and permissions
- [ ] You know where to get help when needed
- [ ] You've made at least one successful interaction (issue comment, PR, etc.)

## Troubleshooting Common Issues

### Can't See Organization After Accepting Invite
- **Check email**: Look for additional confirmation emails
- **Refresh browser**: Try logging out and back in
- **Contact admin**: If still not working after 1 hour

### 2FA Setup Problems
- **Use authenticator app**: Google Authenticator, Authy, or similar
- **Save backup codes**: Store them securely offline
- **Contact IT**: For institutional 2FA conflicts

### Repository Access Issues
- **Check team membership**: You may need to be added to specific teams
- **Verify permissions**: Some repositories require explicit access
- **Ask supervisor**: They may need to request access for you

### SSH Key Problems
- **Check key format**: Ensure you uploaded the public key (.pub file)
- **Test connection**: `ssh -T git@github.com`
- **Use HTTPS instead**: If SSH continues to fail

## Next Steps

After completing onboarding:

1. **Regular Usage**: Follow established workflows for daily tasks
2. **Stay Updated**: Watch for governance policy updates
3. **Contribute Feedback**: Help improve the onboarding process
4. **Help Others**: Assist future new users with their onboarding

## Emergency Contacts

- **Technical Issues**: [GitHub Tech Managers](../help/contact.md)
- **Access Problems**: [GitHub Tech Managers](../help/contact.md)
- **Policy Questions**: [GitHub Tech Managers](../help/contact.md)
- **General IT Help**: `[Administration team](../help/contact.md)`

---

🎉 **Congratulations!** You're now ready to use GitHub safely and effectively within our organization.