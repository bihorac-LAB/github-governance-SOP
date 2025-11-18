# Onboarding Quiz

Please complete this short quiz after reading the key SOP sections.

> **Note:** This quiz runs entirely in your browser.  
> Your answers are *not* stored anywhere automatically.  
> Use it to self-check your understanding before requesting access.

---

<form id="quiz-form">

### 1. Can we store real clinical data (PHI/PII) in any GitHub repository?

<label><input type="radio" name="q1" value="a"> Yes, if the repo is private and access is restricted.</label><br>
<label><input type="radio" name="q1" value="b"> No, clinical data must never be stored in GitHub.</label><br>

---

### 2. Where should API keys, passwords, and tokens be stored?

<label><input type="radio" name="q2" value="a"> In a private GitHub repo, but not in the README.</label><br>
<label><input type="radio" name="q2" value="b"> In a secure secret manager or approved secure system.</label><br>

---

### 3. What is the recommended way to make changes to a repository?

<label><input type="radio" name="q3" value="a"> Commit directly to the main branch.</label><br>
<label><input type="radio" name="q3" value="b"> Create a branch and submit a Pull Request (PR) for review.</label><br>

---

### 4. Who should get access to our GitHub organization?

<label><input type="radio" name="q4" value="a"> Anyone who asks, as long as they promise to be careful.</label><br>
<label><input type="radio" name="q4" value="b"> Only people whose role and responsibilities require it, following least-privilege.</label><br>

---

### 5. Which of the following is acceptable in a public governance repo like this one?

<label><input type="radio" name="q5" value="a"> Policies, SOPs, templates, and synthetic examples.</label><br>
<label><input type="radio" name="q5" value="b"> Real clinical cases with identifying details.</label><br>

---

<button type="button" onclick="checkQuiz()">Check my answers</button>

</form>

<div id="quiz-result" style="margin-top:1rem;font-weight:bold;"></div>

<script>
function checkQuiz() {
  const answers = { q1: 'b', q2: 'b', q3: 'b', q4: 'b', q5: 'a' };
  let score = 0;
  let total = Object.keys(answers).length;
  for (const [q, correct] of Object.entries(answers)) {
    const chosen = document.querySelector(`input[name="${q}"]:checked`);
    if (chosen && chosen.value === correct) {
      score++;
    }
  }
  const result = document.getElementById('quiz-result');
  if (score === total) {
    result.innerHTML = `✅ You scored ${score} / ${total}. Great job! You are ready to request access.`;
  } else {
    result.innerHTML = `⚠️ You scored ${score} / ${total}. Please review the SOP sections and try again.`;
  }
}
</script>

---

## After the Quiz

If you scored well and feel confident about the rules:

- Go back to the [Onboarding Start page](index.md).
- Follow the instructions under **“Requesting Access”**.
