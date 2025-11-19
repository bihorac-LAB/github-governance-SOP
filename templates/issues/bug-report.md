# Bug Report Template

Use this template to report bugs, errors, or unexpected behavior.

---

## Bug Description

### Summary
[Provide a brief, clear description of the bug]

### Expected Behavior
[Describe what you expected to happen]

### Actual Behavior
[Describe what actually happened]

### Impact
- [ ] **Critical**: System unusable, data loss, security issue
- [ ] **High**: Major functionality broken, significant user impact
- [ ] **Medium**: Feature not working, moderate user impact
- [ ] **Low**: Minor issue, cosmetic problem, edge case

## Reproduction Steps

### Steps to Reproduce
1. [First step]
2. [Second step]
3. [Third step]
4. [Continue as needed]

### Reproducibility
- [ ] **Always**: Bug occurs every time
- [ ] **Often**: Bug occurs most of the time (>75%)
- [ ] **Sometimes**: Bug occurs occasionally (25-75%)
- [ ] **Rarely**: Bug occurs infrequently (<25%)
- [ ] **Once**: Bug occurred only once

### Minimal Reproducible Example
```python
# Provide minimal code that reproduces the issue
[code_example]
```

## Environment Information

### System Environment
- **Operating System**: [Windows 10, macOS 12.1, Ubuntu 20.04, etc.]
- **Architecture**: [x64, ARM64, etc.]
- **Browser**: [Chrome 96, Firefox 95, Safari 15, etc.] (if applicable)
- **Python Version**: [3.9.7] (if applicable)
- **Node.js Version**: [16.13.0] (if applicable)

### Software Versions
- **Application Version**: [Version number or commit hash]
- **Dependencies**: [Key dependency versions if relevant]
```
[package1]==1.2.3
[package2]==4.5.6
```

### Configuration
- **Configuration files**: [Any relevant config files or settings]
- **Environment variables**: [Relevant environment variables]
- **Command line options**: [Any specific flags or options used]

## Error Information

### Error Messages
```
[Paste the full error message/stack trace here]
```

### Log Output
```
[Include relevant log entries with timestamps]
```

### Console Output
```
[Include any console output or debug information]
```

## Additional Context

### Related Issues
- Related to #[ISSUE_NUMBER]
- Similar to #[ISSUE_NUMBER]
- Duplicate of #[ISSUE_NUMBER] (if known)

### Workarounds
[Describe any temporary workarounds you've found]

### Screenshots/Videos
[Attach or link to screenshots, videos, or other visual evidence]

### Files
[Attach any relevant files, configurations, or data that help demonstrate the issue]

## Data and Privacy

### Data Sensitivity
- [ ] No sensitive data involved
- [ ] Contains non-sensitive test data
- [ ] Contains sensitive data (provide sanitized example)
- [ ] Contains PII or confidential data (DO NOT include in issue)

### Data Classification
[If this bug involves data handling, specify data classification level]

## Impact Assessment

### Users Affected
- [ ] Only me
- [ ] Small subset of users
- [ ] Significant user base
- [ ] All users
- [ ] Unknown

### Business Impact
- [ ] No business impact
- [ ] Minor inconvenience
- [ ] Moderate productivity loss
- [ ] Significant business impact
- [ ] Critical business function affected

### Security Implications
- [ ] No security implications
- [ ] Potential security concern
- [ ] Confirmed security vulnerability
- [ ] Unsure about security impact

## Investigation

### Analysis Performed
[Describe any investigation or debugging you've already done]

### Suspected Cause
[If you have any theories about what might be causing the issue]

### Recent Changes
[Any recent changes to the system, configuration, or dependencies that might be related]

## Testing

### Test Environment
[Describe where you encountered this bug - production, staging, development, etc.]

### Test Data
[Describe the data or conditions under which the bug occurs]

### Browser/Client Testing (if applicable)
- [ ] Tested in multiple browsers
- [ ] Tested on different devices
- [ ] Tested with different user accounts
- [ ] Tested in incognito/private mode

## Attachments

### Log Files
[Attach relevant log files or provide instructions on how to access them]

### Configuration Files
[Attach sanitized configuration files if relevant]

### Sample Data
[Provide sample data that reproduces the issue, ensuring no sensitive information is included]

## Priority and Urgency

### Suggested Priority
- [ ] **P0**: Critical system failure, immediate fix needed
- [ ] **P1**: Major functionality broken, fix needed within 24 hours
- [ ] **P2**: Important feature affected, fix needed within a week
- [ ] **P3**: Minor issue, fix when convenient

### Business Justification
[Explain why this should be prioritized]

### Deadline Considerations
[Any external deadlines or commitments that make this urgent]

## Contact Information

### Reporter Information
- **Name**: [YOUR_NAME]
- **Role**: [Your role/title]
- **Team**: [Your team if applicable]
- **Contact**: [Email or other contact method]
- **Timezone**: [Your timezone for follow-up questions]

### Additional Contacts
- **Technical Contact**: [If different from reporter]
- **Business Contact**: [Business stakeholder if applicable]

## Follow-up Actions

### Immediate Needs
- [ ] Need immediate workaround
- [ ] Need timeline for fix
- [ ] Need technical consultation
- [ ] Need escalation to management

### Testing Assistance
- [ ] Available to test fixes
- [ ] Can provide additional test cases
- [ ] Can assist with debugging
- [ ] Need help with reproduction

## Labels and Assignment

### Suggested Labels
- `bug`
- `[severity-level]` (critical/high/medium/low)
- `[component]` (frontend/backend/database/etc.)
- `[platform]` (if platform-specific)

### Team Assignment
- **Suggested Team**: [Which team should handle this]
- **Suggested Assignee**: @[username] (if known)

---

**Report Date**: [DATE]
**Reporter**: [YOUR_NAME]
**Environment**: [PRODUCTION/STAGING/DEVELOPMENT]
**Urgency**: [HIGH/MEDIUM/LOW]