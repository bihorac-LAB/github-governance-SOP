# Getting Started Quiz

Complete this quiz to verify you understand our GitHub policies. You need **80% or higher** to get access.

!!! info "Quiz Information"
    - **10 questions** covering basic rules and safety
    - **80% required** to pass (8 out of 10 correct)
    - **Unlimited attempts** - retake if needed
    - **No data stored** - quiz runs in your browser only

---

<form id="quiz-form">

## Data Safety

### 1. Can you upload patient data to GitHub?

<label><input type="radio" name="q1" value="a"> Yes, if the repository is private</label><br>
<label><input type="radio" name="q1" value="b"> <strong>No, never upload patient data to GitHub</strong></label><br>
<label><input type="radio" name="q1" value="c"> Yes, if you remove names first</label><br>

### 2. What should you do if you accidentally upload sensitive information?

<label><input type="radio" name="q2" value="a"> Delete the file and hope no one saw it</label><br>
<label><input type="radio" name="q2" value="b"> <strong>Contact the governance team immediately</strong></label><br>
<label><input type="radio" name="q2" value="c"> Make the repository private</label><br>

### 3. Which data types are safe to upload?

<label><input type="radio" name="q3" value="a"> <strong>Public datasets and synthetic data</strong></label><br>
<label><input type="radio" name="q3" value="b"> De-identified patient records</label><br>
<label><input type="radio" name="q3" value="c"> Any research data</label><br>

## Security Requirements

### 4. What security feature is required for all users?

<label><input type="radio" name="q4" value="a"> <strong>Two-factor authentication (2FA)</strong></label><br>
<label><input type="radio" name="q4" value="b"> A strong password only</label><br>
<label><input type="radio" name="q4" value="c"> VPN connection</label><br>

### 5. Where should passwords and API keys be stored?

<label><input type="radio" name="q5" value="a"> In private GitHub repositories</label><br>
<label><input type="radio" name="q5" value="b"> <strong>In secure password managers, never in GitHub</strong></label><br>
<label><input type="radio" name="q5" value="c"> In encrypted files on GitHub</label><br>

## Collaboration Rules

### 6. What's the recommended way to make changes?

<label><input type="radio" name="q6" value="a"> Edit files directly on the main branch</label><br>
<label><input type="radio" name="q6" value="b"> <strong>Create a pull request for review</strong></label><br>
<label><input type="radio" name="q6" value="c"> Work in your own copy forever</label><br>

### 7. Who can get GitHub access?

<label><input type="radio" name="q7" value="a"> Anyone in the organization</label><br>
<label><input type="radio" name="q7" value="b"> <strong>Only people who need it for their job</strong></label><br>
<label><input type="radio" name="q7" value="c"> Anyone who passes this quiz</label><br>

### 8. When must you do a data classification review?

<label><input type="radio" name="q8" value="a"> Only for public repositories</label><br>
<label><input type="radio" name="q8" value="b"> <strong>Before creating any repository</strong></label><br>
<label><input type="radio" name="q8" value="c"> Only if asked by administrators</label><br>

## Public vs Private

### 9. What content is appropriate for public repositories?

<label><input type="radio" name="q9" value="a"> <strong>Open source code and educational materials</strong></label><br>
<label><input type="radio" name="q9" value="b"> Internal company documents</label><br>
<label><input type="radio" name="q9" value="c"> Research data with personal information removed</label><br>

### 10. If you find a policy violation, what should you do?

<label><input type="radio" name="q10" value="a"> Ignore it if it's not your project</label><br>
<label><input type="radio" name="q10" value="b"> <strong>Report it to the governance team</strong></label><br>
<label><input type="radio" name="q10" value="c"> Fix it yourself without telling anyone</label><br>

---

<div style="text-align: center; margin: 2rem 0;">
  <button type="button" onclick="checkQuiz()" style="background-color: #28a745; color: white; padding: 12px 24px; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; margin-right: 10px;">Check My Answers</button>
  <button type="button" onclick="resetQuiz()" style="background-color: #6c757d; color: white; padding: 8px 16px; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;">Start Over</button>
</div>

</form>

<div id="quiz-result" style="margin-top:1rem;font-weight:bold;"></div>
<div id="quiz-details" style="margin-top:1rem;"></div>

<script>
function checkQuiz() {
  const answers = { 
    q1: 'b', q2: 'b', q3: 'a', q4: 'a', q5: 'b',
    q6: 'b', q7: 'b', q8: 'b', q9: 'a', q10: 'b'
  };
  
  const explanations = {
    q1: "Patient data must NEVER be stored in GitHub, regardless of privacy settings.",
    q2: "Immediate reporting allows the team to minimize damage and take corrective action.",
    q3: "Only public datasets and synthetic (fake) data are safe for GitHub storage.",
    q4: "Two-factor authentication prevents account takeover if passwords are compromised.",
    q5: "Secrets should never be committed to any repository, even private ones.",
    q6: "Pull requests enable review and discussion before changes are merged.",
    q7: "Access follows the principle of least privilege - only what's needed for the job.",
    q8: "Every repository must have a completed data classification before creation.",
    q9: "Public repositories should only contain non-sensitive, shareable content.",
    q10: "Reporting violations quickly prevents bigger problems and protects everyone."
  };
  
  let score = 0;
  let total = 10;
  let incorrect = [];
  
  // Check if all questions answered
  for (let i = 1; i <= 10; i++) {
    const q = 'q' + i;
    if (!document.querySelector(`input[name="${q}"]:checked`)) {
      document.getElementById('quiz-result').innerHTML = 
        '<div style="color: #dc3545;">❗ Please answer all 10 questions before checking your score.</div>';
      return;
    }
  }
  
  // Calculate score
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
    result.innerHTML = `<div style="color: #28a745; font-size: 18px;">🎉 Excellent! You scored ${score}/${total} (${percentage}%)</div>
    <div style="margin-top: 0.5rem;">You passed! You can now request GitHub access.</div>`;
    
    if (incorrect.length > 0) {
      details.innerHTML = `<div style="margin-top: 1rem; padding: 1rem; background-color: #f8f9fa; border-radius: 6px; border-left: 4px solid #ffc107;">
      <strong>📚 Review these topics:</strong>${incorrect.map(item => '<br>• ' + item.explanation).join('')}</div>`;
    } else {
      details.innerHTML = `<div style="margin-top: 1rem; padding: 1rem; background-color: #d4edda; border-radius: 6px; border-left: 4px solid #28a745;">
      <strong>🏆 Perfect score!</strong> You have excellent understanding of our GitHub policies.
      <br><br><strong>Next step:</strong> <a href="request-access.html" style="color: #155724; font-weight: bold;">Request Access →</a></div>`;
    }
  } else {
    result.innerHTML = `<div style="color: #dc3545; font-size: 18px;">📖 You scored ${score}/${total} (${percentage}%)</div>
    <div style="margin-top: 0.5rem;">You need 80% or higher. Please review the material and try again.</div>`;
    
    details.innerHTML = `<div style="margin-top: 1rem; padding: 1rem; background-color: #f8d7da; border-radius: 6px; border-left: 4px solid #dc3545;">
    <strong>📚 Please review:</strong>${incorrect.map(item => '<br>• ' + item.explanation).join('')}
    <br><br><strong>Study these sections:</strong><br>
    • <a href="../rules/data-safety.html" style="color: #721c24;">Data Safety Rules</a><br>
    • <a href="../rules/security.html" style="color: #721c24;">Security Requirements</a><br>
    • <a href="../rules/index.html" style="color: #721c24;">Basic Rules Overview</a></div>`;
  }
}

function resetQuiz() {
  document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
  document.getElementById('quiz-result').innerHTML = '';
  document.getElementById('quiz-details').innerHTML = '';
  document.getElementById('quiz-form').scrollIntoView({ behavior: 'smooth' });
}
</script>

---

## Next Steps

### ✅ If You Passed (80%+)

Great work! Now you can:

1. **[Request Access](request-access.md)** to our GitHub organization
2. **Save your score** (take a screenshot) 
3. **Bookmark this guide** for future reference

### 📚 If You Need to Study More

Review these sections and retake the quiz:

- **[Basic Rules](../rules/index.md)** - Core policies and principles
- **[Data Safety](../rules/data-safety.md)** - What data is safe to use
- **[Security Requirements](../rules/security.md)** - How to stay secure

### ❓ Questions About the Quiz?

- **Technical problems**: [Contact IT](../help/contact.md)
- **Policy clarification**: [Contact Governance Team](../help/contact.md)
- **Can't find information**: Check our [FAQ](../help/faq.md)