# 12. Incident Response

If something goes wrong (e.g., sensitive data committed):

1. **Stop and Report**  
   - Do **not** try to fix it quietly.  
   - Notify: Org Owners + compliance/security contact.

2. **Technical Containment**  
   - Temporarily restrict repo access if needed.  
   - Use GitHub tools to remove sensitive data from history.  

3. **Key Rotation** (if secrets exposed)  
   - Revoke and regenerate any exposed keys or tokens.  

4. **Documentation**  
   - File a formal incident report:  
     - What happened?  
     - When?  
     - Who was involved?  
     - What was exposed?  
     - What actions were taken?  

5. **Review and Improve**  
   - Update robots or SOP if needed to prevent recurrence.

---
