# Pull Request Template

Copy this template to `.github/pull_request_template.md` in your repository to standardize all pull request descriptions.

## Template Content

```markdown
## Summary
<!-- Briefly describe what this PR accomplishes -->

## Type of Change
<!-- Mark the relevant option with an x -->
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Code refactoring (no functional changes)
- [ ] Performance improvement
- [ ] Security fix
- [ ] Other (please describe):

## Changes Made
<!-- Provide a detailed list of changes -->
- 
- 
- 

## Testing
<!-- Describe how you tested these changes -->
- [ ] All existing tests pass
- [ ] Added new tests for new functionality
- [ ] Tested manually with the following scenarios:
  - 
  - 

## Data Safety Review
<!-- Required for all PRs - mark applicable items -->
- [ ] This PR does not introduce or modify any data handling
- [ ] This PR only handles de-identified/public data
- [ ] This PR has been reviewed for PHI/PII exposure risk
- [ ] Data classification has been verified (see repository README)

## Security Checklist
<!-- Mark all applicable items -->
- [ ] No hardcoded secrets or credentials
- [ ] No sensitive information in commit messages
- [ ] Dependencies updated to latest secure versions
- [ ] Input validation added where appropriate

## Documentation
<!-- Update as needed -->
- [ ] README updated (if applicable)
- [ ] Code comments added for complex logic
- [ ] API documentation updated (if applicable)
- [ ] User-facing documentation updated

## Reviewer Instructions
<!-- Special instructions for reviewers -->
- Focus areas for review:
- Known limitations:
- Questions for reviewers:

## Related Issues
<!-- Link related issues -->
Fixes #(issue_number)
Relates to #(issue_number)

---

**For Reviewers**: Please verify all checklist items before approving. If any data safety or security items are unclear, escalate to the governance team.
```

## Usage Instructions

1. **Save this template** as `.github/pull_request_template.md` in your repository root
2. **Customize sections** as needed for your specific repository
3. **Train contributors** to fill out all sections completely
4. **Reviewers should verify** all checklist items before approving

## Required vs Optional Sections

### Always Required
- Summary
- Type of Change
- Data Safety Review
- Security Checklist

### Conditionally Required
- Testing (required for code changes)
- Documentation (required if user-facing changes)

### Optional but Recommended
- Changes Made (detailed list)
- Reviewer Instructions
- Related Issues

## Integration with Governance

This template enforces several governance requirements:

- **Data Safety**: Mandatory review prevents accidental PHI/PII exposure
- **Security**: Checklist catches common security vulnerabilities  
- **Documentation**: Ensures changes are properly documented
- **Traceability**: Links to related issues and provides clear change history

## Troubleshooting

**Template not appearing?** 
- Ensure file is saved as `.github/pull_request_template.md`
- Check that you have write access to the repository
- Template applies to new PRs only, not existing ones

**Too many required fields?**
- Customize the template for your repository's needs
- Mark truly optional items clearly
- Provide examples for complex sections