/**
 * Thesis Page Animations and Interactions
 * Author: Leon Doungala
 * Year: 2025
 * Description: Handles animations and interactive elements for the thesis presentation page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollTrigger for scroll-based animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        initAnimations();
    }
    
    // Initialize current year
    updateCopyrightYear();
    
    // Add modal animation
    initModalEffects();
});

/**
 * Initialize all page animations
 */
function initAnimations() {
    // Header animations
    animateHeader();
    
    // Section animations
    animateSections();
    
    // Timeline animations
    animateTimeline();
    
    // Technology cards animations
    animateTechCards();
    
    // Finding cards animations
    animateFindingCards();
    
    // Contribution items animations
    animateContributions();
    
    // Future work items animations
    animateFutureWork();
}

/**
 * Animate header elements
 */
function animateHeader() {
    // Paper metadata fade in
    gsap.from('.paper-metadata span', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.3,
        ease: 'power2.out'
    });
    
    // Paper title reveal
    gsap.from('.paper-title', {
        opacity: 0,
        y: -30,
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.out'
    });
    
    // Author name fade in
    gsap.from('.paper-author', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.8,
        ease: 'power2.out'
    });
    
    // Keywords popping
    gsap.from('.thesis-keyword', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 1,
        ease: 'back.out(1.7)'
    });
    
    // View thesis button appear
    gsap.from('.view-full-thesis', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.5,
        ease: 'power2.out'
    });
}

/**
 * Animate main content sections on scroll
 */
function animateSections() {
    // Section titles slide in
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%"
            },
            opacity: 0,
            x: -50,
            duration: 1,
            ease: 'power3.out'
        });
        
        // Animate the underline
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%"
            },
            "--after-width": "0px",
            duration: 1.2,
            delay: 0.3,
            ease: 'power2.out'
        });
    });
    
    // Subsection titles fade in
    gsap.utils.toArray('.subsection-title').forEach(subtitle => {
        gsap.from(subtitle, {
            scrollTrigger: {
                trigger: subtitle,
                start: "top 85%"
            },
            opacity: 0,
            x: -30,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
    
    // Key highlights slide in
    gsap.utils.toArray('.key-highlight').forEach(highlight => {
        gsap.from(highlight, {
            scrollTrigger: {
                trigger: highlight,
                start: "top 85%"
            },
            opacity: 0,
            x: -40,
            duration: 1,
            ease: 'power2.out'
        });
    });
    
    // Abstract content fade in
    gsap.from('.abstract-content p', {
        scrollTrigger: {
            trigger: '.abstract-content',
            start: "top 80%"
        },
        opacity: 0,
        y: 20,
        stagger: 0.3,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Dedication reveal
    gsap.from('.paper-dedication', {
        scrollTrigger: {
            trigger: '.paper-dedication',
            start: "top 80%"
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power2.out'
    });
    
    // Closing remarks fade in
    gsap.from('.closing-remarks', {
        scrollTrigger: {
            trigger: '.closing-remarks',
            start: "top 80%"
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out'
    });
}

/**
 * Animate timeline items
 */
function animateTimeline() {
    // Timeline line drawing
    gsap.from('.research-timeline::before', {
        scrollTrigger: {
            trigger: '.research-timeline',
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none"
    });
    
    // Timeline markers pop in
    gsap.from('.timeline-marker', {
        scrollTrigger: {
            trigger: '.research-timeline',
            start: "top 80%"
        },
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back.out(1.7)'
    });
    
    // Timeline content slide in
    gsap.from('.timeline-content', {
        scrollTrigger: {
            trigger: '.research-timeline',
            start: "top 80%"
        },
        opacity: 0,
        x: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
    });
}

/**
 * Animate technology cards
 */
function animateTechCards() {
    // Tech category titles
    gsap.from('.category-title', {
        scrollTrigger: {
            trigger: '.technologies-wrapper',
            start: "top 80%"
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Tech items appearing in a grid pattern
    gsap.utils.toArray('.tech-category').forEach(category => {
        gsap.from(category.querySelectorAll('.tech-item'), {
            scrollTrigger: {
                trigger: category,
                start: "top 80%"
            },
            opacity: 0,
            y: 30,
            stagger: {
                amount: 0.6,
                grid: "auto",
                from: "start"
            },
            duration: 0.8,
            ease: 'back.out(1.2)'
        });
    });
}

/**
 * Animate finding cards
 */
function animateFindingCards() {
    gsap.utils.toArray('.findings-grid').forEach(grid => {
        gsap.from(grid.querySelectorAll('.finding-card'), {
            scrollTrigger: {
                trigger: grid,
                start: "top 80%"
            },
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 0.8,
            ease: 'back.out(1.2)'
        });
    });
}

/**
 * Animate contribution items
 */
function animateContributions() {
    // Contribution numbers counting effect
    gsap.utils.toArray('.contribution-number').forEach((numElement, index) => {
        gsap.from(numElement, {
            scrollTrigger: {
                trigger: numElement,
                start: "top 85%"
            },
            textContent: 0,
            duration: 1.5,
            snap: { textContent: 1 },
            ease: 'power2.out',
            onUpdate: function() {
                const padding = "0";
                numElement.textContent = padding.substring(0, padding.length - String(Math.floor(this.targets()[0].textContent)).length) + Math.floor(this.targets()[0].textContent);
            }
        });
    });
    
    // Contribution content slide in
    gsap.from('.contribution-item', {
        scrollTrigger: {
            trigger: '.contributions-container',
            start: "top 80%"
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
    });
}

/**
 * Animate future work items
 */
function animateFutureWork() {
    gsap.from('.future-work-item', {
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

/**
 * Initialize modal effects
 */
function initModalEffects() {
    const pdfModal = document.getElementById('pdfModal');
    if (pdfModal) {
        pdfModal.addEventListener('show.bs.modal', function (event) {
            // Scale in animation when modal opens
            gsap.fromTo('.modal-content', 
                { scale: 0.8, opacity: 0 }, 
                { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.2)' }
            );
        });
        
        // Fade animation when modal closes
        pdfModal.addEventListener('hide.bs.modal', function (event) {
            gsap.to('.modal-content', { opacity: 0, duration: 0.3, ease: 'power2.in' });
        });
    }
}

/**
 * Update copyright year to current year
 */
function updateCopyrightYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}
