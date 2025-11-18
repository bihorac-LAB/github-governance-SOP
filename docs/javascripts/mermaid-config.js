// Simple Mermaid initialization
document.addEventListener('DOMContentLoaded', function() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true
            }
        });
        console.log('Mermaid initialized');
    } else {
        console.warn('Mermaid not loaded');
    }
});