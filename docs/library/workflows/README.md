# GitHub Actions Governance Workflows

This directory contains GitHub Actions workflows that can be deployed to other repositories in your organization to enforce governance and compliance requirements.

## Available Workflows

### 1. Governance Scanner (`governance-scanner.yml`)

**Purpose**: Comprehensive security and compliance scanning for repositories

**Features**:
- **PHI/PII Detection**: Scans for accidentally committed sensitive personal information
- **Secrets Detection**: Uses TruffleHog to detect exposed API keys, passwords, etc.
- **Dependency Security**: Checks for vulnerable dependencies (requires SNYK_TOKEN)
- **Repository Structure**: Validates required files and data classification
- **License Compliance**: Checks for license compatibility issues

**Setup**:
1. Copy `governance-scanner.yml` to `.github/workflows/` in your target repository
2. Create `DATA_CLASSIFICATION.md` file in repository root (see [template](../data-classification-template.md))
3. Optional: Add `SNYK_TOKEN` secret for enhanced dependency scanning

**Triggers**:
- Push to main/develop branches
- Pull requests to main/develop branches  
- Weekly scheduled scan (Sundays at 2 AM UTC)

### 2. Repository Compliance Monitor (`repository-compliance.yml`)

**Purpose**: Ongoing compliance monitoring and automated reporting

**Features**:
- **Access Review**: Daily monitoring of repository access and permissions
- **Data Classification Review**: Checks currency of data classification assessments
- **Security Posture**: Monitors security settings and branch protection
- **Automated Issue Creation**: Creates issues for compliance violations
- **Compliance Reports**: Generates detailed compliance summaries

**Setup**:
1. Copy `repository-compliance.yml` to `.github/workflows/` in your target repository
2. Ensure repository has proper `DATA_CLASSIFICATION.md` file
3. Configure appropriate repository permissions for the workflow

**Triggers**:
- Daily scheduled run (6 AM UTC)
- Manual trigger with scan type selection
- Available scan types: all, access-review, data-classification, security-scan

## Deployment Instructions

### Quick Setup for New Repository

1. **Copy workflow files**:
   ```bash
   # In your target repository
   mkdir -p .github/workflows
   cp governance-scanner.yml .github/workflows/
   cp repository-compliance.yml .github/workflows/
   ```

2. **Create required files**:
   - Create `DATA_CLASSIFICATION.md` using our [template](../data-classification-template.md)
   - Review and complete the data classification assessment

3. **Configure secrets** (optional):
   - Add `SNYK_TOKEN` secret for enhanced security scanning
   - Ensure workflow has appropriate repository permissions

4. **Test the setup**:
   - Push changes to trigger the governance scanner
   - Monitor the Actions tab for workflow execution
   - Review any generated reports or issues

### Bulk Deployment Across Organization

For deploying to multiple repositories:

1. **Use GitHub CLI** for automation:
   ```bash
   # Example: Deploy to all repositories with a specific topic
   gh repo list your-org --topic "needs-governance" --json name \
     --jq '.[].name' | while read repo; do
       # Clone, add workflows, commit, push
       echo "Setting up governance for $repo"
   done
   ```

2. **Use Repository Templates**:
   - Create a template repository with these workflows pre-configured
   - Use the template when creating new repositories

## Configuration Options

### Governance Scanner Customization

**Data Patterns**: Modify the PHI/PII detection patterns in the workflow:
```yaml
patterns = {
    'SSN': r'\b\d{3}-\d{2}-\d{4}\b|\b\d{9}\b',
    'Phone': r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b',
    # Add custom patterns for your organization
}
```

**Required Files**: Update the required files check:
```yaml
required_files=("README.md" "DATA_CLASSIFICATION.md" "SECURITY.md")
```

**Security Thresholds**: Adjust Presidio confidence thresholds:
```python
if result.score > 0.8:  # Increase for fewer false positives
```

### Compliance Monitor Customization

**Schedule Frequency**: Modify the cron schedule:
```yaml
schedule:
  - cron: '0 6 * * *'  # Daily at 6 AM UTC
  - cron: '0 6 * * 1'  # Weekly on Mondays
```

**Access Review Thresholds**: Adjust admin user limits:
```javascript
if (adminUsers.length > 5) {  // Increase threshold
    console.log(`High number of admin users: ${adminUsers.length}`);
}
```

**Classification Review Period**: Modify review periods:
```bash
if [[ $days_diff -gt 180 ]]; then  # 6 months instead of 1 year
    echo "Data classification may need review"
fi
```

## Monitoring and Alerts

### Workflow Status Monitoring

- **GitHub Actions Dashboard**: Monitor workflow runs across repositories
- **Workflow Status Badges**: Add status badges to repository READMEs
- **Email Notifications**: Configure workflow failure notifications

### Compliance Dashboards

The workflows generate:
- **Access Review Logs**: Stored in `.github/access-review-log.json`
- **GitHub Step Summaries**: Visible in the Actions tab
- **Automated Issues**: Created for compliance violations

### Integration with External Systems

**Webhook Integration**:
```yaml
- name: Send to External System
  run: |
    curl -X POST "https://your-compliance-system.com/webhook" \
         -H "Content-Type: application/json" \
         -d '{"repository": "${{ github.repository }}", "status": "failed"}'
```

**Slack Notifications**:
```yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: failure
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

## Troubleshooting

### Common Issues

**Permission Errors**:
- Ensure workflow has `contents: read` and `issues: write` permissions
- Check organization security settings for GitHub Actions

**False Positives in PHI/PII Detection**:
- Review and adjust regex patterns
- Modify Presidio confidence thresholds
- Add exclusion patterns for known safe content

**Compliance Check Failures**:
- Verify `DATA_CLASSIFICATION.md` file exists and is complete
- Check repository security settings match requirements
- Review access permissions and remove unnecessary users

### Debugging Workflows

**Enable Debug Logging**:
```yaml
env:
  ACTIONS_STEP_DEBUG: true
  ACTIONS_RUNNER_DEBUG: true
```

**Test Locally**:
- Use [act](https://github.com/nektos/act) to test workflows locally
- Validate regex patterns using online testers
- Review workflow logs in the Actions tab

## Security Considerations

### Workflow Security

- **Minimal Permissions**: Workflows run with minimal required permissions
- **No Secret Exposure**: Secrets are not exposed in logs or outputs
- **Input Validation**: All inputs are validated before use
- **Audit Trail**: All actions are logged and auditable

### Data Handling

- **No Data Storage**: Workflows don't store sensitive data
- **Local Processing**: All scanning happens in the workflow runner
- **Secure Communication**: All external calls use HTTPS

## Support and Maintenance

### Updating Workflows

- Monitor for GitHub Actions security updates
- Review and update dependencies regularly
- Test workflow changes in non-production repositories first

### Getting Help

- **Documentation**: Refer to this governance guide
- **Issues**: Create issues in the governance repository
- **Contact**: Reach out to [GitHub Tech Managers](../../help/contact.md)

---

**Next Steps**: 
1. Choose repositories for deployment
2. Customize workflows for your needs
3. Deploy and monitor compliance
4. Review and iterate based on results