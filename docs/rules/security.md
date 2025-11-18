# Security Requirements

All users must follow these security rules to protect our organization and data.

## 🔒 Required Security Measures

### Two-Factor Authentication (2FA)
**MANDATORY for all organization members**

- **Must enable 2FA** on your GitHub account before getting access
- **Use authenticator app** (Google Authenticator, Authy, Microsoft Authenticator)
- **Save backup codes** in a secure location (password manager recommended)
- **Never share** your 2FA codes or backup codes

**How to enable:**
1. Go to GitHub Settings → Security
2. Click "Enable two-factor authentication"
3. Choose "Authenticator app" method
4. Scan QR code with your authenticator app
5. Save the backup recovery codes securely

### Account Security
- **Use institutional email** for your GitHub account (not personal email)
- **Strong password** - unique, complex, not used elsewhere
- **Keep account updated** - real name, current contact information
- **Monitor activity** - review security log regularly for suspicious activity

### Repository Protection
- **Never commit secrets** - passwords, API keys, tokens, credentials
- **Use branch protection rules** on main branches (`main`, `master`)
- **Review before committing** - double-check what you're uploading
- **Private by default** - make repositories private unless specifically meant to be public

## 🚨 Forbidden Actions

### Never Store In GitHub
- ❌ **Passwords** or passphrases
- ❌ **API keys** and authentication tokens  
- ❌ **SSH private keys**
- ❌ **Database connection strings**
- ❌ **VPN configurations**
- ❌ **Any secrets or credentials**

### Never Upload Data
- ❌ **Patient data (PHI)** - any health information
- ❌ **Personal information (PII)** - SSNs, addresses, phone numbers
- ❌ **Clinical data** - even if "de-identified"
- ❌ **Confidential business data** - financial, proprietary information

## 🛡️ Best Practices

### Code Security
- **Review dependencies** - check for known vulnerabilities
- **Update regularly** - keep libraries and frameworks current
- **Scan for secrets** - use automated tools to detect accidentally committed secrets
- **Code reviews** - all changes should be reviewed before merging

### Access Management
- **Least privilege principle** - only request access you actually need
- **Regular reviews** - access will be reviewed quarterly
- **Prompt reporting** - notify immediately if account compromised
- **Clean departures** - access removed when leaving projects/organization

### Communication Security  
- **Use official channels** - don't share sensitive info through GitHub comments
- **Professional communication** - maintain appropriate tone and content
- **Public vs private** - be aware of repository visibility when commenting

## 🔍 Monitoring and Compliance

### What We Monitor
- **Login activity** - unusual login patterns or locations
- **Repository changes** - all commits, pushes, and access changes
- **Secret scanning** - automated detection of accidentally committed secrets
- **Vulnerability alerts** - security issues in dependencies

### Regular Security Checks
- **Quarterly access reviews** - verify all users still need their access
- **Annual security training** - required for all users
- **Incident response drills** - practice procedures for security breaches
- **Policy updates** - security requirements may change over time

## 🚨 Incident Response

### If You Suspect a Security Issue
1. **Don't panic** - but act quickly
2. **Change passwords immediately** - especially if account may be compromised
3. **Contact GitHub Tech Managers** - [GitHub Tech Managers](../help/contact.md)
4. **Document what happened** - timeline, what you observed, actions taken
5. **Preserve evidence** - don't delete logs or try to "fix" things yourself

### If You Accidentally Commit Secrets
1. **Contact GitHub Tech Managers immediately** - don't wait
2. **Change the secret** - assume it's been exposed
3. **Don't just delete the file** - Git history preserves everything
4. **Follow incident procedures** - let Tech Managers handle proper cleanup

### Emergency Contacts
- **GitHub Tech Managers**: [GitHub Tech Managers](../help/contact.md)
- **Administration/Billing**: [Administration team](../help/contact.md)
- **Response time**: 1-2 business days for technical/policy issues
- **Business hours**: Monday-Friday, 8am-5pm for admin issues

## 🔄 Policy Compliance

### Exceptions and Waivers
- **No exceptions** to 2FA requirement
- **Limited exceptions** for other security measures with approval
- **All exceptions must be documented** and reviewed regularly
- **Temporary exceptions** only - must have expiration dates

### Consequences of Violations
**Minor violations** (first offense, no damage):
- Additional security training
- Temporary restrictions
- Manager notification

**Major violations** (repeated, or caused damage):
- Immediate access suspension
- Formal investigation
- Potential disciplinary action
- Legal/compliance review if needed

### Staying Compliant
- **Read updates** - security policies may change
- **Ask questions** - better to ask than assume
- **Report concerns** - help us maintain security for everyone
- **Lead by example** - help others follow security practices

## 📚 Additional Resources

- **GitHub Security Guide**: https://docs.github.com/en/security
- **Two-Factor Auth Setup**: https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa
- **Git Security Best Practices**: [Internal link to be added]
- **Incident Response Procedures**: [Internal link to be added]

---

**Remember**: Security is everyone's responsibility. When in doubt, err on the side of caution and ask for guidance.