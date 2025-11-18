# Access Request Template

Use this template to request access to the GitHub organization. This can be implemented as a GitHub issue template or integrated with your institution's request management system.

## GitHub Issue Template

Save as `.github/ISSUE_TEMPLATE/access-request.yml`:

```yaml
name: GitHub Organization Access Request
description: Request access to the GitHub organization
title: "[ACCESS REQUEST] - Your Name"
labels: ["access-request", "onboarding"]
assignees:
  - github-admin-username

body:
  - type: markdown
    attributes:
      value: |
        ## Access Request Process
        
        Before submitting this request, please ensure you have:
        1. ✅ Read all required SOP sections (see onboarding documentation)
        2. ✅ Completed the onboarding quiz
        3. ✅ Have manager/PI approval for GitHub access
        
        **Processing Time**: Access requests are typically processed within 2-3 business days.

  - type: input
    id: full-name
    attributes:
      label: Full Name
      description: Your complete legal name
      placeholder: "Jane Smith"
    validations:
      required: true

  - type: input
    id: email
    attributes:
      label: Institutional Email
      description: Your official organization email address
      placeholder: "jane.smith@ufl.edu"
    validations:
      required: true

  - type: input
    id: github-username
    attributes:
      label: GitHub Username
      description: Your existing GitHub username (create one at github.com if needed)
      placeholder: "janesmith123"
    validations:
      required: true

  - type: dropdown
    id: role
    attributes:
      label: Primary Role
      description: Select the role that best describes your intended use
      options:
        - Clinical Staff (viewing documentation, educational materials)
        - Research Staff (contributing code, data analysis, publications)
        - Technical Staff (repository administration, automation, governance)
        - External Collaborator (specific project collaboration)
        - Student/Trainee (learning, coursework, research projects)
    validations:
      required: true

  - type: input
    id: manager
    attributes:
      label: Manager/PI/Supervisor
      description: Name and email of your direct supervisor who approved this request
      placeholder: "Dr. John Doe (john.doe@ufl.edu)"
    validations:
      required: true

  - type: textarea
    id: intended-use
    attributes:
      label: Intended Use
      description: Describe what you plan to do with GitHub access (specific projects, repositories, etc.)
      placeholder: "I will be contributing to the clinical-data-analysis repository for the XYZ research project..."
    validations:
      required: true

  - type: checkboxes
    id: onboarding-completion
    attributes:
      label: Onboarding Requirements
      description: Confirm you have completed all pre-access requirements
      options:
        - label: I have read the GitHub Fundamentals section
          required: true
        - label: I have read the Data Classification & Policy section
          required: true
        - label: I have read the Repository Governance section  
          required: true
        - label: I have completed the onboarding quiz with passing score
          required: true
        - label: I understand the principle of least privilege and data safety requirements
          required: true

  - type: checkboxes
    id: agreement
    attributes:
      label: Policy Agreement
      description: Legal and policy acknowledgments
      options:
        - label: I agree to follow all GitHub governance policies and procedures
          required: true
        - label: I understand that I am responsible for protecting sensitive data and will never upload PHI/PII
          required: true
        - label: I acknowledge that my GitHub activity may be monitored for compliance purposes
          required: true
        - label: I will report any security incidents or policy violations immediately
          required: true

  - type: dropdown
    id: data-handling
    attributes:
      label: Data Handling Intent
      description: What type of data do you expect to work with?
      options:
        - Public/open data only
        - De-identified research data
        - Internal documentation/code only
        - No data handling (documentation/learning only)
    validations:
      required: true

  - type: textarea
    id: additional-info
    attributes:
      label: Additional Information
      description: Any other relevant information for your access request
      placeholder: "Special requirements, project deadlines, external collaborators..."
```

## Alternative: Form-Based Request

For organizations using internal forms, include these fields:

### Required Information
- **Personal Details**
  - Full name
  - Institutional email
  - Existing GitHub username
  - Department/division
  - Role/title

- **Authorization**
  - Manager/supervisor name and email
  - Project or research group
  - Intended use description
  - Expected duration of access

- **Compliance Verification**
  - Confirmation of onboarding completion
  - Data handling acknowledgments  
  - Policy agreement signatures
  - Security training completion

### Processing Workflow

1. **Initial Validation**
   - Verify institutional email
   - Confirm onboarding quiz completion
   - Check manager approval

2. **Access Provisioning**
   - Add to appropriate GitHub teams
   - Set up repository permissions
   - Configure SSO/SAML (if applicable)

3. **Notification**
   - Welcome email with next steps
   - Calendar invite for orientation session
   - Documentation links and contacts

## Request Review Criteria

### Automatic Approval Conditions
- ✅ All required fields completed
- ✅ Valid institutional email domain
- ✅ Manager approval verified
- ✅ Onboarding requirements confirmed
- ✅ Standard role request (no elevated privileges)

### Manual Review Required
- ⚠️ External collaborator requests
- ⚠️ Requests for administrative access
- ⚠️ Unusual or high-risk use cases
- ⚠️ Requests involving sensitive data

### Automatic Rejection Criteria
- ❌ Incomplete onboarding requirements
- ❌ Missing manager approval
- ❌ Invalid email domain
- ❌ Requests for inappropriate access levels

## Integration Notes

- **GitHub Teams**: Map roles to appropriate team membership
- **Repository Access**: Start with minimal access, expand as needed
- **SSO Integration**: Ensure compatibility with institutional identity systems
- **Audit Trail**: Maintain records of all access decisions and justifications