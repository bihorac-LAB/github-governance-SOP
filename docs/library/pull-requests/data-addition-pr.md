# Data Addition Pull Request Template

Use this template when adding datasets, data files, or making data-related changes.

---

## Data Addition Summary

### Data Description
[Brief description of the data being added]

### Data Source
- **Original Source**: [Where the data came from]
- **Data Provider**: [Organization or person providing the data]
- **Collection Date**: [When the data was collected]
- **Acquisition Date**: [When we received/downloaded the data]

### Purpose
[Explain why this data is being added and how it will be used]

## Data Classification and Compliance

### Data Sensitivity Assessment
- [ ] **Public**: Data can be freely shared and published
- [ ] **Internal**: Data for internal use within organization
- [ ] **Restricted**: Data with access limitations or privacy concerns

### Data Content Review
- [ ] Contains no Personally Identifiable Information (PII)
- [ ] Contains de-identified PII (explain below)
- [ ] Contains PII with proper consent and approvals
- [ ] Contains sensitive business information
- [ ] Contains proprietary or confidential information

### Compliance Requirements
- [ ] No special compliance requirements
- [ ] GDPR compliance verified
- [ ] HIPAA compliance verified
- [ ] Export control regulations reviewed
- [ ] Institutional IRB approval obtained
- [ ] Data use agreement in place

**Compliance Documentation**: [Link to or description of compliance documentation]

## Data Details

### Dataset Information
- **Dataset Name**: [Official name of the dataset]
- **Version**: [Version number if applicable]
- **Size**: [File size and number of records]
- **Format**: [CSV, JSON, Parquet, etc.]
- **Encoding**: [UTF-8, etc.]
- **Compression**: [None, gzip, etc.]

### File Details
| File Name | Size | Records | Description |
|-----------|------|---------|-------------|
| [filename1.csv] | [size] | [count] | [description] |
| [filename2.json] | [size] | [count] | [description] |

### Data Schema
```yaml
# Describe the data structure
columns:
  - name: [column1]
    type: [string/integer/float/datetime]
    description: [what this column contains]
    nullable: [true/false]
  - name: [column2]
    type: [string/integer/float/datetime]
    description: [what this column contains]
    nullable: [true/false]
```

### Data Quality
- **Completeness**: [percentage of non-null values]
- **Accuracy**: [description of data accuracy assessment]
- **Consistency**: [description of consistency checks]
- **Timeliness**: [how recent/current the data is]

### Known Data Issues
- [Issue 1]: [Description and impact]
- [Issue 2]: [Description and impact]

## Processing and Validation

### Data Processing Steps
1. [Step 1]: [Description of processing]
2. [Step 2]: [Description of processing]
3. [Step 3]: [Description of processing]

### Validation Performed
- [ ] File integrity check (checksums)
- [ ] Schema validation
- [ ] Data type validation
- [ ] Range and constraint validation
- [ ] Duplicate record check
- [ ] Missing value analysis

### Processing Code
```python
# Include key processing scripts or commands
[processing_code_snippet]
```

## Security and Privacy

### Privacy Protection Measures
- [ ] No personal information present
- [ ] Data anonymized/de-identified
- [ ] Direct identifiers removed
- [ ] Quasi-identifiers evaluated for re-identification risk
- [ ] k-anonymity achieved (k=[value])

### Access Controls
- [ ] Public repository (no access restrictions)
- [ ] Organization-only access
- [ ] Team-specific access restrictions
- [ ] Individual approval required

### Retention and Deletion
- **Retention Period**: [How long data will be kept]
- **Deletion Schedule**: [When and how data will be deleted]
- **Backup Retention**: [Backup retention policy]

## Technical Implementation

### Storage Location
```
data/
├── raw/[category]/[filename]     # Original data files
├── processed/[category]/[filename] # Processed data
└── metadata/[filename].md        # Data documentation
```

### Dependencies
- [ ] No new dependencies required
- [ ] New Python packages required: [list packages]
- [ ] System dependencies required: [list dependencies]

### Configuration Changes
[Describe any configuration file updates needed]

## Documentation

### Documentation Added
- [ ] Data dictionary created
- [ ] Processing documentation updated
- [ ] README files updated
- [ ] Metadata files created

### Data Dictionary
| Field Name | Data Type | Description | Example Values | Notes |
|------------|-----------|-------------|----------------|-------|
| [field1] | [type] | [description] | [examples] | [notes] |
| [field2] | [type] | [description] | [examples] | [notes] |

## Testing and Verification

### Data Integrity Tests
```bash
# Commands used to verify data integrity
[verification_commands]
```

### Validation Results
- **Records Count**: [expected vs actual]
- **Column Count**: [expected vs actual]
- **Data Types**: [all match schema]
- **Constraints**: [all constraints satisfied]

### Sample Data Review
```
[Show first few rows or representative sample of the data]
```

## Legal and Licensing

### Data Rights and Licensing
- **Data License**: [License type and terms]
- **Usage Rights**: [What we're allowed to do with the data]
- **Attribution Requirements**: [How to cite/attribute the data]
- **Redistribution Rights**: [Whether we can share the data]

### Legal Documentation
- [ ] Data use agreement signed
- [ ] Terms of service reviewed
- [ ] Attribution requirements documented
- [ ] Legal team approval obtained (if required)

**Legal Contact**: [Legal team contact for questions]

## Impact Assessment

### Downstream Impact
- [ ] No impact on existing analyses
- [ ] Existing analyses will be enhanced
- [ ] Some analyses may need updates
- [ ] Breaking changes to existing workflows

### Resource Impact
- **Storage Requirements**: [Additional storage needed]
- **Processing Requirements**: [Additional compute resources]
- **Network Impact**: [Data transfer considerations]

## Monitoring and Maintenance

### Data Monitoring Plan
- [ ] Automated data quality checks
- [ ] Regular manual reviews
- [ ] Update notifications configured
- [ ] Deprecation plan established

### Update Process
[Describe how this data will be updated or refreshed]

## Stakeholder Approval

### Required Approvals
- [ ] Data owner approval
- [ ] Legal team approval (if required)
- [ ] Security team approval (if required)
- [ ] Privacy team approval (if required)
- [ ] Project manager approval

### Stakeholder Contacts
- **Data Owner**: [Name] ([Email])
- **Legal Contact**: [Name] ([Email])
- **Privacy Contact**: [Name] ([Email])

## Post-Merge Actions

### Immediate Actions
- [ ] Verify data accessibility
- [ ] Run data quality checks
- [ ] Update team on data availability
- [ ] Document any issues found

### Follow-up Actions
- [ ] Schedule regular data updates
- [ ] Set up monitoring alerts
- [ ] Plan data refresh cycle
- [ ] Review and update documentation

## Additional Information

### Related Datasets
- [Dataset 1]: [Relationship description]
- [Dataset 2]: [Relationship description]

### Future Enhancements
- [Planned enhancement 1]
- [Planned enhancement 2]

### Contact Information
- **Data Steward**: [Name] ([Email])
- **Technical Contact**: [Name] ([Email])
- **Business Contact**: [Name] ([Email])

## Checklist

### Pre-Submission Checklist
- [ ] Data classification completed
- [ ] Privacy review completed
- [ ] Legal approval obtained (if required)
- [ ] Data quality validated
- [ ] Documentation complete
- [ ] File integrity verified

### Review Requirements
- [ ] Data team review required
- [ ] Legal team review required (for restricted data)
- [ ] Security team review required (for sensitive data)
- [ ] Business stakeholder approval

---

**Data Contributor**: [YOUR_NAME]
**Data Steward**: [STEWARD_NAME]
**Classification**: [PUBLIC/INTERNAL/RESTRICTED]
**Approval Required From**: [List required approvers]