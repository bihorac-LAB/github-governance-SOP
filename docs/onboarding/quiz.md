# GitHub Governance Onboarding Quiz

Complete this quiz after reading the required SOP sections. You must achieve **80% or higher** to be eligible for GitHub access.

!!! info "Quiz Information"
    - **Required Score**: 80% (8 out of 10 questions)
    - **Attempts**: Unlimited retakes allowed
    - **Privacy**: Quiz runs entirely in your browser - no data is stored
    - **Purpose**: Verify understanding before requesting access

---

<form id="quiz-form">

## Section 1: Data Safety & Classification

### 1. Can we store real clinical data (PHI/PII) in any GitHub repository?

<label><input type="radio" name="q1" value="a"> Yes, if the repository is private and access is restricted</label><br>
<label><input type="radio" name="q1" value="b"> <strong>No, clinical data must never be stored in GitHub</strong></label><br>
<label><input type="radio" name="q1" value="c"> Yes, but only in repositories with special encryption</label><br>

### 2. What should you do if you accidentally commit a file containing sensitive information?

<label><input type="radio" name="q2" value="a"> Delete the file and make a new commit</label><br>
<label><input type="radio" name="q2" value="b"> <strong>Immediately contact the governance team and follow incident response procedures</strong></label><br>
<label><input type="radio" name="q2" value="c"> Make the repository private and hope no one noticed</label><br>

### 3. Which data types are generally acceptable for GitHub repositories?

<label><input type="radio" name="q3" value="a"> <strong>De-identified research data, synthetic data, and public datasets</strong></label><br>
<label><input type="radio" name="q3" value="b"> Any data as long as it's for research purposes</label><br>
<label><input type="radio" name="q3" value="c"> Only code files, no data of any kind</label><br>

## Section 2: Security & Access Control

### 4. Where should API keys, passwords, and authentication tokens be stored?

<label><input type="radio" name="q4" value="a"> In a private GitHub repository, but not in the README</label><br>
<label><input type="radio" name="q4" value="b"> <strong>In a secure secret manager or approved institutional system</strong></label><br>
<label><input type="radio" name="q4" value="c"> In environment variables committed to the repository</label><br>

### 5. What is required for all GitHub organization members?

<label><input type="radio" name="q5" value="a"> <strong>Two-factor authentication (2FA) must be enabled</strong></label><br>
<label><input type="radio" name="q5" value="b"> A strong password is sufficient</label><br>
<label><input type="radio" name="q5" value="c"> SSH key authentication only</label><br>

## Section 3: Workflows & Governance

### 6. What is the recommended way to make changes to a repository?

<label><input type="radio" name="q6" value="a"> Commit directly to the main branch for speed</label><br>
<label><input type="radio" name="q6" value="b"> <strong>Create a feature branch and submit a Pull Request for review</strong></label><br>
<label><input type="radio" name="q6" value="c"> Work in a fork and never merge back</label><br>

### 7. Who should get access to the GitHub organization?

<label><input type="radio" name="q7" value="a"> Anyone affiliated with the institution</label><br>
<label><input type="radio" name="q7" value="b"> <strong>Only people whose role requires it, following principle of least privilege</strong></label><br>
<label><input type="radio" name="q7" value="c"> Anyone who completes this quiz</label><br>

### 8. When should you complete a data classification assessment?

<label><input type="radio" name="q8" value="a"> Only for repositories containing sensitive data</label><br>
<label><input type="radio" name="q8" value="b"> <strong>Before creating any new repository</strong></label><br>
<label><input type="radio" name="q8" value="c"> Only when requested by administrators</label><br>

## Section 4: Public Repositories & Compliance

### 9. Which content is acceptable in a public governance repository?

<label><input type="radio" name="q9" value="a"> <strong>Policies, SOPs, templates, and educational materials</strong></label><br>
<label><input type="radio" name="q9" value="b"> Anonymized case studies with clinical details removed</label><br>
<label><input type="radio" name="q9" value="c"> Internal meeting notes and contact lists</label><br>

### 10. If you discover a potential policy violation in a repository, what should you do?

<label><input type="radio" name="q10" value="a"> Ignore it if it doesn't affect your work</label><br>
<label><input type="radio" name="q10" value="b"> <strong>Report it immediately to the governance team</strong></label><br>
<label><input type="radio" name="q10" value="c"> Try to fix it yourself without telling anyone</label><br>

---

<div style="text-align: center; margin: 2rem 0;">
  <button type="button" onclick="checkQuiz()" style="background-color: #2563eb; color: white; padding: 12px 24px; border: none; border-radius: 6px; font-size: 16px; cursor: pointer;">Check My Answers</button>
  <br><br>
  <button type="button" onclick="resetQuiz()" style="background-color: #64748b; color: white; padding: 8px 16px; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;">Reset Quiz</button>
</div>

</form>

<div id="quiz-result" style="margin-top:1rem;font-weight:bold;"></div>
<div id="quiz-details" style="margin-top:1rem;"></div>

<script>
function checkQuiz() {
  // Correct answers (marked with ** in the quiz)
  const answers = { 
    q1: 'b',   // No PHI/PII ever
    q2: 'b',   // Contact governance team for incidents  
    q3: 'a',   // De-identified data acceptable
    q4: 'b',   // Secure secret manager
    q5: 'a',   // 2FA required
    q6: 'b',   // PR workflow
    q7: 'b',   // Least privilege
    q8: 'b',   // Always classify before creating
    q9: 'a',   // Public governance content
    q10: 'b'   // Report violations
  };
  
  // Check if all questions are answered
  const totalQuestions = Object.keys(answers).length;
  const answeredQuestions = Object.keys(answers).filter(q => 
    document.querySelector(`input[name="${q}"]:checked`)
  ).length;
  
  if (answeredQuestions < totalQuestions) {
    const result = document.getElementById('quiz-result');
    result.innerHTML = '<div style="color: #dc2626;">⚠️ Please answer all ' + totalQuestions + ' questions before checking your score.</div>';
    return;
  }
  
  const explanations = {
    q1: "PHI/PII must never be stored in GitHub, regardless of privacy settings or access controls.",
    q2: "Immediate incident response is critical. The governance team has procedures to minimize damage.",
    q3: "De-identified and synthetic data are generally safe, but always complete classification first.",
    q4: "Credentials should never be committed to repositories. Use approved secret management systems.",
    q5: "Two-factor authentication is mandatory for all organization members to prevent account compromise.",
    q6: "Pull requests enable review, discussion, and approval before changes affect the main branch.",
    q7: "Access should be limited to what each person needs for their specific role and responsibilities.",
    q8: "Every repository must have a completed data classification before creation, regardless of content.",
    q9: "Public repositories should only contain non-sensitive governance, educational, and policy materials.",
    q10: "Prompt reporting enables quick response and prevents policy violations from causing larger problems."
  };
  
  let score = 0;
  let total = Object.keys(answers).length;
  let incorrect = [];
  
  for (const [q, correct] of Object.entries(answers)) {
    const chosen = document.querySelector(`input[name="${q}"]:checked`);
    if (chosen && chosen.value === correct) {
      score++;
    } else {
      incorrect.push({ question: q, explanation: explanations[q] });
    }
  }
  
  const percentage = Math.round((score / total) * 100);
  const result = document.getElementById('quiz-result');
  const details = document.getElementById('quiz-details');
  
  if (percentage >= 80) {
    result.innerHTML = '<div style="color: green; font-size: 18px;">✅ Excellent! You scored ' + score + '/' + total + ' (' + percentage + '%)</div><div style="margin-top: 0.5rem;">You understand the governance requirements and are eligible to request GitHub access.</div>';
    
    if (incorrect.length > 0) {
      details.innerHTML = '<div style="margin-top: 1rem; padding: 1rem; background-color: #f3f4f6; border-radius: 6px;"><strong>Review these topics:</strong>' + 
        incorrect.map(item => '<br>• ' + item.explanation).join('') + '</div>';
    } else {
      details.innerHTML = '<div style="margin-top: 1rem; padding: 1rem; background-color: #ecfdf5; border-radius: 6px;"><strong>Perfect score!</strong> You have a complete understanding of our GitHub governance policies.</div>';
    }
  } else {
    result.innerHTML = '<div style="color: #dc2626; font-size: 18px;">📚 You scored ' + score + '/' + total + ' (' + percentage + '%)</div><div style="margin-top: 0.5rem;">You need 80% or higher. Please review the SOP sections and retake the quiz.</div>';
    
    details.innerHTML = '<div style="margin-top: 1rem; padding: 1rem; background-color: #fef2f2; border-radius: 6px;"><strong>Please review:</strong>' + 
      incorrect.map(item => '<br>• ' + item.explanation).join('') + 
      '<br><br><strong>Recommended reading:</strong><br>' +
      '• <a href="../sop/02_fundamentals.md">GitHub Fundamentals</a><br>' +
      '• <a href="../sop/05_data_policy.md">Data Classification & Policy</a><br>' +
      '• <a href="../sop/06_repo_governance.md">Repository Governance</a><br>' +
      '• <a href="../sop/10_security_compliance.md">Security & Compliance</a></div>';
  }
}

function resetQuiz() {
  // Clear all radio button selections
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => radio.checked = false);
  
  // Clear result displays
  document.getElementById('quiz-result').innerHTML = '';
  document.getElementById('quiz-details').innerHTML = '';
  
  // Scroll to top of quiz
  document.getElementById('quiz-form').scrollIntoView({ behavior: 'smooth' });
}
</script>

---

## Next Steps

### ✅ If You Scored 80% or Higher

Congratulations! You're ready to proceed with access request:

1. **Save your score**: Take a screenshot or note your completion
2. **Continue onboarding**: Return to [Onboarding Start page](index.md)
3. **Request access**: Follow the "Requesting Access" instructions
4. **Keep learning**: Bookmark the [SOP manual](../sop/master_manual.md) for reference

### 📚 If You Need to Improve Your Score

**Review these essential sections**:
- [GitHub Fundamentals](../sop/02_fundamentals.md) - Basic concepts and terminology
- [Data Classification & Policy](../sop/05_data_policy.md) - What data can and cannot go in GitHub
- [Repository Governance](../sop/06_repo_governance.md) - Rules for creating and managing repositories
- [Security & Compliance](../sop/10_security_compliance.md) - Security requirements and best practices

**Then retake the quiz** - you can attempt it as many times as needed.

### ❓ Questions or Need Help?

- **Policy questions**: Review the [FAQ](../faq/index.md)
- **Technical help**: Contact your local GitHub administrator
- **Quiz issues**: Report problems to the governance team

---

!!! tip "Pro Tip"
    Even after passing, keep the SOP documentation bookmarked. You'll reference it regularly as you work with GitHub in our organization.