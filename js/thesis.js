// Clean and optimized thesis animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Main section animations
    gsap.from('.thesis-title', { 
        opacity: 0, 
        y: -30, 
        duration: 1, 
        delay: 0.3
    });
    
    gsap.from('.thesis-subtitle', { 
        opacity: 0, 
        y: -20, 
        duration: 1, 
        delay: 0.6
    });
    
    gsap.from('.thesis-keywords .thesis-keyword', { 
        opacity: 0, 
        y: 20, 
        duration: 0.8, 
        stagger: 0.1,
        delay: 0.9
    });
    
    gsap.from('.thesis-dedication', { 
        opacity: 0, 
        scale: 0.95, 
        duration: 1.2, 
        delay: 1.5
    });
    
    // Animate content sections on scroll
    const sections = document.querySelectorAll('.thesis-content-section');
    
    sections.forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%"
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
    
    // Animate methodology steps
    const methodologySteps = document.querySelectorAll('.methodology-step');
    if (methodologySteps.length > 0) {
        gsap.set(methodologySteps, { opacity: 0, x: -30 });
        
        methodologySteps.forEach((step, index) => {
            gsap.to(step, {
                scrollTrigger: {
                    trigger: step,
                    start: "top 80%"
                },
                opacity: 1,
                x: 0,
                duration: 0.8,
                delay: index * 0.15,
                ease: 'back.out(1.2)'
            });
        });
    }
    
    // Animate technology cards
    const techCards = document.querySelectorAll('.tech-card');
    if (techCards.length > 0) {
        gsap.from(techCards, {
            scrollTrigger: {
                trigger: '.tech-grid',
                start: "top 80%"
            },
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'back.out(1.2)'
        });
    }
    
    // Animate result metrics
    const metricCards = document.querySelectorAll('.metric-card');
    if (metricCards.length > 0) {
        gsap.from(metricCards, {
            scrollTrigger: {
                trigger: '.results-grid',
                start: "top 80%"
            },
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 0.8,
            ease: 'back.out(1.4)'
        });
        
        // Animate metric values counting up
        const metricValues = document.querySelectorAll('.metric-value');
        
        metricValues.forEach(metric => {
            let originalText = metric.innerText;
            let hasPct = originalText.includes('%');
            let hasDecimal = originalText.includes('.');
            
            let numericValue = parseFloat(originalText.replace('%', ''));
            let startValue = hasDecimal ? 0 : 0;
            let format = hasDecimal ? 
                (value) => value.toFixed(2) : 
                (value) => Math.round(value) + (hasPct ? '%' : '');
            
            metric.innerText = format(startValue);
            
            ScrollTrigger.create({
                trigger: metric,
                start: "top 80%",
                onEnter: () => {
                    gsap.to({value: startValue}, {
                        value: numericValue,
                        duration: 2,
                        ease: 'power2.out',
                        onUpdate: function() {
                            metric.innerText = format(this.targets()[0].value);
                        }
                    });
                },
                once: true
            });
        });
    }
    
    // Animate future work items
    const futureWorkItems = document.querySelectorAll('.future-work-item');
    if (futureWorkItems.length > 0) {
        gsap.from(futureWorkItems, {
            scrollTrigger: {
                trigger: '.future-work-container',
                start: "top 80%"
            },
            opacity: 0,
            x: -40,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power2.out'
        });
    }
    
    // Enhance PDF viewer with subtle animation
    const pdfViewer = document.querySelector('.thesis-pdf-viewer');
    if (pdfViewer) {
        gsap.from(pdfViewer, {
            scrollTrigger: {
                trigger: pdfViewer,
                start: "top 80%"
            },
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: 'power2.out'
        });
    }
    
    // Update copyright year
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
