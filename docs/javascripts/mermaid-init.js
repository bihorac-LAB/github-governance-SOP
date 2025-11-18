/* Initialize Mermaid diagrams */
document.addEventListener('DOMContentLoaded', function() {
    // Configure Mermaid
    mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        themeVariables: {
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: '14px',
            primaryColor: '#f9f9f9',
            primaryTextColor: '#333',
            primaryBorderColor: '#333',
            lineColor: '#333',
            secondaryColor: '#f0f0f0',
            tertiaryColor: '#fff'
        },
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
        },
        sequence: {
            useMaxWidth: true
        },
        gantt: {
            useMaxWidth: true
        }
    });

    // Find and render all mermaid diagrams
    const mermaidElements = document.querySelectorAll('.mermaid');
    mermaidElements.forEach((element, index) => {
        // Ensure each diagram has a unique ID
        if (!element.id) {
            element.id = `mermaid-diagram-${index}`;
        }
        
        // Add loading indicator
        element.innerHTML = `<div style="text-align: center; padding: 2em; color: #666;">
            📊 Loading diagram...
        </div>` + element.innerHTML;
    });

    // Re-run mermaid on any dynamically loaded content
    if (typeof mermaid !== 'undefined') {
        mermaid.init();
    }
});