# Standard Pull Request Template

Use this template for general code changes, bug fixes, and feature implementations.

---

## Pull Request Description

### Summary
[Provide a brief description of the changes made in this PR]

### Type of Change
Please select the relevant option(s):
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Performance improvement
- [ ] Code refactoring (no functional changes)
- [ ] Documentation update
- [ ] Dependencies update
- [ ] Configuration change

### Related Issues
- Fixes #[ISSUE_NUMBER]
- Relates to #[ISSUE_NUMBER]
- Closes #[ISSUE_NUMBER]

## Changes Made

### Modified Files
- `[file1.py]` - [Description of changes]
- `[file2.js]` - [Description of changes]
- `[file3.md]` - [Description of changes]

### New Files Added
- `[newfile1.py]` - [Purpose and description]
- `[newfile2.js]` - [Purpose and description]

### Files Removed
- `[oldfile1.py]` - [Reason for removal]

## Technical Details

### Implementation Approach
[Explain the technical approach taken to implement these changes]

### Dependencies
- [ ] No new dependencies added
- [ ] New dependencies added (list below):
  - [dependency1] version [VERSION] - [Reason]
  - [dependency2] version [VERSION] - [Reason]

### Breaking Changes
[If this introduces breaking changes, describe them and provide migration instructions]

### Performance Impact
- [ ] No performance impact
- [ ] Performance improvement (describe)
- [ ] Potential performance degradation (explain and justify)

## Testing

### Test Coverage
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] End-to-end tests added/updated
- [ ] Manual testing completed

### Testing Steps
1. [Step 1 to test the changes]
2. [Step 2 to test the changes]
3. [Step 3 to test the changes]

### Test Results
```
[Paste test output or describe test results]
```

### Manual Testing Checklist
- [ ] Feature works as expected
- [ ] No regression in existing functionality
- [ ] Error handling works correctly
- [ ] UI/UX changes reviewed (if applicable)
- [ ] Cross-browser testing (if applicable)
- [ ] Mobile responsiveness (if applicable)

## Code Quality

### Code Review Checklist
- [ ] Code follows project style guidelines
- [ ] Comments added for complex logic
- [ ] Functions are properly documented
- [ ] Code is DRY (Don't Repeat Yourself)
- [ ] Error handling implemented
- [ ] Input validation added where necessary
- [ ] Logging added for debugging purposes

### Static Analysis
- [ ] Linting passed
- [ ] Type checking passed (if applicable)
- [ ] Security scanning passed
- [ ] Code complexity is acceptable

## Documentation

### Documentation Updates
- [ ] README updated
- [ ] API documentation updated
- [ ] Code comments added/updated
- [ ] User guide updated
- [ ] Changelog updated

### Documentation Changes
[List any documentation that was added or modified]

## Security

### Security Checklist
- [ ] No sensitive data exposed
- [ ] Input validation implemented
- [ ] Authentication/authorization unchanged or properly implemented
- [ ] No new security vulnerabilities introduced
- [ ] Secrets properly managed

### Security Impact
[Describe any security implications of these changes]

## Data Safety

### Data Classification
- [ ] No data handling changes
- [ ] Data handling reviewed and approved
- [ ] Data classification requirements met
- [ ] Privacy requirements satisfied

### Data Changes
[Describe any changes to data handling, storage, or processing]

## Deployment

### Deployment Requirements
- [ ] No special deployment requirements
- [ ] Database migrations required (attached)
- [ ] Configuration changes required (documented below)
- [ ] Environment variables needed (listed below)

### Configuration Changes
```yaml
# Add any new configuration requirements
[CONFIG_KEY]: [CONFIG_VALUE]
```

### Rollback Plan
[Describe how to rollback these changes if issues arise]

## Screenshots/Examples

### Before
[Screenshots or examples of the current behavior]

### After
[Screenshots or examples of the new behavior]

## Reviewer Guidelines

### Focus Areas
Please pay special attention to:
- [ ] [Specific area 1]
- [ ] [Specific area 2]
- [ ] [Specific area 3]

### Testing Instructions for Reviewers
1. [Specific instruction 1]
2. [Specific instruction 2]
3. [Specific instruction 3]

## Post-Merge Actions

- [ ] Monitor error logs for 24 hours
- [ ] Update project documentation
- [ ] Notify stakeholders
- [ ] Create follow-up issues (if any)

## Additional Notes

[Any additional information that would be helpful for reviewers]

## Checklist

### Pre-Review Checklist
- [ ] All tests pass locally
- [ ] Code has been self-reviewed
- [ ] Documentation updated
- [ ] Breaking changes documented
- [ ] Security implications considered
- [ ] Data safety requirements met

### Review Requirements
- [ ] At least one code review required
- [ ] Security team review required (for security changes)
- [ ] Data team review required (for data changes)
- [ ] Architecture review required (for major changes)

---

**Author**: [YOUR_NAME]
**Reviewers**: @[reviewer1] @[reviewer2]
**Priority**: [High/Medium/Low]
**Target Release**: [VERSION/DATE]