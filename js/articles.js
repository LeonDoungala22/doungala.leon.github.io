// Add this to the beginning of your articles.js file to ensure there are no conflicts
(function() {
    // Safely check if ScrollReveal exists
    const hasScrollReveal = typeof ScrollReveal !== 'undefined';
    
    // Store a reference to the original ScrollReveal if it exists
    const originalScrollReveal = hasScrollReveal ? ScrollReveal : null;
    
    // Continue with the rest of your script
    document.addEventListener('DOMContentLoaded', function() {
        // Add loading indicator for particles
        if (document.getElementById('particles-js')) {
            const particlesEl = document.getElementById('particles-js');
            particlesEl.innerHTML = '<div class="particles-loading">Initializing visualization...</div>';
            
            // Set a timeout in case particles.js fails to load
            setTimeout(() => {
                const loadingEl = document.querySelector('.particles-loading');
                if (loadingEl) loadingEl.style.display = 'none';
            }, 3000);
        }

        // Initialize particles.js in header
        if (document.getElementById('particles-js')) {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#4285f4'
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        }
                    },
                    opacity: {
                        value: 0.15,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.05,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#4285f4',
                        opacity: 0.1,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 0.5
                            }
                        },
                        push: {
                            particles_nb: 3
                        }
                    }
                },
                retina_detect: true
            });
        }
        
        // Article filtering functionality
        const filterButtons = document.querySelectorAll('[data-filter]');
        const articleItems = document.querySelectorAll('.article-item');
        const topicLinks = document.querySelectorAll('.topic-list a');
        
        // Handle filter button clicks
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                
                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter articles
                filterArticles(filterValue);
            });
        });
        
        // Handle topic links in sidebar
        topicLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const filterValue = this.getAttribute('data-filter');
                
                // Update active states in main filter
                filterButtons.forEach(btn => {
                    if (btn.getAttribute('data-filter') === filterValue) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
                
                // Filter articles
                filterArticles(filterValue);
                
                // Scroll to the article section
                document.querySelector('.article-filters').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
        
        // Filter articles function
        function filterArticles(filter) {
            const articleItems = document.querySelectorAll('.article-item');
            
            articleItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                // Just set visibility property rather than display style
                if (filter === 'all' || filter === category) {
                    item.setAttribute('data-visible', 'true');
                } else {
                    item.setAttribute('data-visible', 'false');
                }
            });
            
            // Update topic counts based on new filtering
            updateTopicCounts();
            
            // Reset and setup pagination with filtered articles
            setupPagination();
        }
        
        // Search functionality
        const searchInput = document.getElementById('articleSearch');
        
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase().trim();
                
                // If empty, reset to showing all
                if (searchTerm === '') {
                    // Find the active filter
                    const activeFilter = document.querySelector('.filter-tabs .nav-link.active');
                    filterArticles(activeFilter ? activeFilter.getAttribute('data-filter') : 'all');
                    return;
                }
                
                // Reset active state on filter buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelector('[data-filter="all"]').classList.add('active');
                
                // Show all articles for searching
                articleItems.forEach(item => {
                    item.style.display = '';
                });
                
                // Search through title and excerpt
                articleItems.forEach(item => {
                    const title = item.querySelector('.article-title').textContent.toLowerCase();
                    const excerpt = item.querySelector('.article-excerpt').textContent.toLowerCase();
                    const tags = Array.from(item.querySelectorAll('.article-tag'))
                        .map(tag => tag.textContent.toLowerCase());
                    
                    // Check if any of the text contains the search term
                    const matchesSearch = 
                        title.includes(searchTerm) || 
                        excerpt.includes(searchTerm) || 
                        tags.some(tag => tag.includes(searchTerm));
                    
                    // Show or hide based on search
                    if (matchesSearch) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        }
        
        // Use the SafeScrollReveal for animations
        if (hasScrollReveal) {
            try {
                const srArticles = originalScrollReveal({
                    origin: 'bottom',
                    distance: '30px',
                    duration: 800,
                    delay: 100,
                    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                    reset: false
                });
                
                srArticles.reveal('.article-card', { interval: 100 });
                srArticles.reveal('.sidebar-widget', { interval: 150, delay: 200 });
            } catch (e) {
                console.warn('ScrollReveal error:', e);
                // Apply fallback animations
                document.querySelectorAll('.article-card, .sidebar-widget').forEach(el => {
                    el.classList.add('fade-in-animation');
                });
            }
        } else {
            // Apply fallback animations
            document.querySelectorAll('.article-card, .sidebar-widget').forEach(el => {
                el.classList.add('fade-in-animation');
            });
        }
        
        // Subscribe form handling
        const subscribeForm = document.querySelector('.subscribe-form');
        
        if (subscribeForm) {
            subscribeForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get the email input
                const emailInput = this.querySelector('input[type="email"]');
                const email = emailInput.value.trim();
                
                // Basic validation
                if (!email || !isValidEmail(email)) {
                    createToast('Please enter a valid email address', 'error');
                    return;
                }
                
                // Simulate subscription (replace with actual API call)
                createToast('Thanks for subscribing! Check your email to confirm.', 'success');
                emailInput.value = '';
            });
        }
        
        // Helper function to validate email
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        // Toast notification function
        function createToast(message, type = 'info') {
            // Create toast container if not exists
            let toastContainer = document.querySelector('.toast-container');
            
            if (!toastContainer) {
                toastContainer = document.createElement('div');
                toastContainer.className = 'toast-container';
                document.body.appendChild(toastContainer);
                
                // Add styles
                toastContainer.style.position = 'fixed';
                toastContainer.style.bottom = '20px';
                toastContainer.style.right = '20px';
                toastContainer.style.zIndex = '9999';
                toastContainer.style.maxWidth = '300px';
            }
            
            // Create toast element
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.innerHTML = `
                <div class="toast-content">
                    <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
                    <p>${message}</p>
                </div>
                <button class="toast-close"><i class="fas fa-times"></i></button>
            `;
            
            // Style toast
            toast.style.backgroundColor = type === 'success' ? 'rgba(10, 207, 151, 0.95)' : 'rgba(66, 133, 244, 0.95)';
            toast.style.color = 'white';
            toast.style.padding = '15px';
            toast.style.borderRadius = '8px';
            toast.style.marginTop = '10px';
            toast.style.display = 'flex';
            toast.style.justifyContent = 'space-between';
            toast.style.alignItems = 'center';
            toast.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            toast.style.transform = 'translateY(20px)';
            toast.style.opacity = '0';
            toast.style.transition = 'all 0.3s ease';
            
            // Add to container
            toastContainer.appendChild(toast);
            
            // Animate in
            setTimeout(() => {
                toast.style.transform = 'translateY(0)';
                toast.style.opacity = '1';
            }, 10);
            
            // Close button
            toast.querySelector('.toast-close').addEventListener('click', () => {
                toast.style.transform = 'translateY(20px)';
                toast.style.opacity = '0';
                
                setTimeout(() => {
                    toast.remove();
                }, 300);
            });
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.style.transform = 'translateY(20px)';
                    toast.style.opacity = '0';
                    
                    setTimeout(() => {
                        toast.remove();
                    }, 300);
                }
            }, 5000);
        }
        
        // Initialize the animation for AI background elements
        document.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const scrollPercentage = scrollPosition / (docHeight - viewportHeight);
            
            // Move nodes based on scroll percentage
            document.querySelectorAll('.ai-particle.node').forEach(node => {
                const randomOffset = parseFloat(node.style.getPropertyValue('--delay')) * 10;
                const xMovement = Math.sin(scrollPercentage * Math.PI * 2 + randomOffset) * 5;
                const yMovement = Math.cos(scrollPercentage * Math.PI * 2 + randomOffset) * 5;
                
                node.style.transform = `translate(${xMovement}px, ${yMovement}px)`;
            });
        });

        // Handle image loading errors
        document.querySelectorAll('.article-image img').forEach(img => {
            img.onerror = function() {
                // Replace with a generated placeholder if image fails to load
                const category = this.closest('.article-card').querySelector('.article-category').textContent;
                this.src = `https://via.placeholder.com/600x400/1c2331/ffffff?text=${encodeURIComponent(category + ' Article')}`;
            };
        });
        
        // Author image fallback
        const authorImg = document.querySelector('.author-image img');
        if (authorImg) {
            authorImg.onerror = function() {
                this.src = 'https://ui-avatars.com/api/?name=Leon+Doungala&background=4285f4&color=fff&size=150';
            };
        }

        // Initialize dynamic category counts
        updateTopicCounts();
        
        // Initialize pagination
        setupPagination();
    });

    // Fix for all implementation buttons
    document.addEventListener('DOMContentLoaded', function() {
        // Force all article buttons to be visible
        document.querySelectorAll('.article-buttons').forEach(function(buttonsContainer) {
            // Override any CSS that might be hiding buttons
            buttonsContainer.style.cssText = `
                display: flex !important; 
                visibility: visible !important; 
                opacity: 1 !important;
                position: relative !important;
                z-index: 100 !important;
                pointer-events: auto !important;
                margin-top: 15px !important;
            `;
            
            // Force all links inside to be visible
            buttonsContainer.querySelectorAll('a').forEach(function(button) {
                button.style.cssText = `
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    position: relative !important;
                    z-index: 101 !important;
                    pointer-events: auto !important;
                `;
            });
        });
        
        // Fix for heart disease link
        const heartDiseaseButtons = document.querySelectorAll('.article-item[data-category="healthcare"] .article-buttons');
        heartDiseaseButtons.forEach(function(btnContainer) {
            const linkEl = btnContainer.querySelector('a[href*="heart-disease"]');
            if (linkEl) {
                linkEl.href = "ml_and_ds_portfolio.html?project=heart-disease-prediction";
            }
        });
        
        // Fix for breast cancer link
        const breastCancerButtons = document.querySelectorAll('.article-item[data-category="healthcare"] .article-buttons');
        breastCancerButtons.forEach(function(btnContainer) {
            const linkEl = btnContainer.querySelector('a[href*="breast-cancer"]');
            if (linkEl) {
                linkEl.href = "ml_and_ds_portfolio.html?project=breast-cancer-classification";
            }
        });
        
        // Fix image loading errors with professional fallbacks
        document.querySelectorAll('.article-image img').forEach(img => {
            img.addEventListener('error', function() {
                const category = this.closest('.article-card').querySelector('.article-category').textContent;
                const iconMap = {
                    'Machine Learning': 'fa-brain',
                    'Generative AI': 'fa-robot',
                    'AI in Healthcare': 'fa-heartbeat',
                    'NLP': 'fa-language',
                    'Data Analytics': 'fa-chart-pie',
                    'Featured': 'fa-star'
                };
                
                const icon = iconMap[category] || 'fa-microchip';
                
                // Create a clean placeholder with the category name and an icon
                this.src = `https://dummyimage.com/800x400/1c2331/ffffff&text=${encodeURIComponent(category)}`;
                
                // Add icon overlay
                const iconOverlay = document.createElement('div');
                iconOverlay.className = 'icon-overlay';
                iconOverlay.innerHTML = `<i class="fas ${icon}"></i>`;
                iconOverlay.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                    pointer-events: none;
                `;
                
                iconOverlay.querySelector('i').style.cssText = `
                    font-size: 3rem;
                    color: rgba(255, 255, 255, 0.7);
                `;
                
                this.parentNode.appendChild(iconOverlay);
            });
        });
    });

    // Add this function after your DOMContentLoaded event
    function updateTopicCounts() {
        // Get all categories
        const categories = {
            'machine-learning': 0,
            'generative-ai': 0,
            'healthcare': 0,
            'nlp': 0,
            'clustering': 0,
            'all': 0
        };
        
        // Count articles in each category
        document.querySelectorAll('.article-item').forEach(item => {
            const category = item.getAttribute('data-category');
            if (category) {
                if (categories[category] !== undefined) {
                    categories[category]++;
                }
                categories['all']++;
            }
        });
        
        // Update the counts in the sidebar
        document.querySelectorAll('.topic-list a').forEach(link => {
            const filterValue = link.getAttribute('data-filter');
            const countSpan = link.querySelector('span');
            
            if (countSpan && categories[filterValue] !== undefined) {
                countSpan.textContent = `(${categories[filterValue]})`;
            }
        });
    }

    // Add this function to implement pagination
    function setupPagination() {
        const articlesPerPage = 6; // Show 6 articles per page
        const articleItems = document.querySelectorAll('.article-item');
        const paginationContainer = document.querySelector('.pagination');
        
        if (!paginationContainer) return;
        
        // Calculate total pages
        const totalArticles = articleItems.length;
        const totalPages = Math.ceil(totalArticles / articlesPerPage);
        
        // Clear existing pagination
        paginationContainer.innerHTML = '';
        
        // Add previous button
        const prevButton = document.createElement('li');
        prevButton.className = 'page-item';
        prevButton.innerHTML = `<a class="page-link" href="#" aria-label="Previous"><i class="fas fa-chevron-left"></i></a>`;
        paginationContainer.appendChild(prevButton);
        
        // Add page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = 'page-item' + (i === 1 ? ' active' : '');
            pageItem.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
            paginationContainer.appendChild(pageItem);
        }
        
        // Add next button
        const nextButton = document.createElement('li');
        nextButton.className = 'page-item';
        nextButton.innerHTML = `<a class="page-link" href="#" aria-label="Next"><i class="fas fa-chevron-right"></i></a>`;
        paginationContainer.appendChild(nextButton);
        
        // Set initial page
        showPage(1);
        
        // Add event listeners to pagination buttons
        paginationContainer.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const pageLinks = paginationContainer.querySelectorAll('.page-link[data-page]');
                const currentPage = parseInt(paginationContainer.querySelector('.page-item.active .page-link').getAttribute('data-page'));
                
                if (this.getAttribute('aria-label') === 'Previous') {
                    if (currentPage > 1) {
                        showPage(currentPage - 1);
                    }
                } else if (this.getAttribute('aria-label') === 'Next') {
                    if (currentPage < totalPages) {
                        showPage(currentPage + 1);
                    }
                } else {
                    const pageNum = parseInt(this.getAttribute('data-page'));
                    showPage(pageNum);
                }
            });
        });
        
        // Function to show specified page
        function showPage(pageNum) {
            // Update active class on pagination
            paginationContainer.querySelectorAll('.page-item').forEach(item => {
                item.classList.remove('active');
            });
            
            paginationContainer.querySelector(`.page-link[data-page="${pageNum}"]`).parentNode.classList.add('active');
            
            // Enable/disable prev/next buttons
            prevButton.classList.toggle('disabled', pageNum === 1);
            nextButton.classList.toggle('disabled', pageNum === totalPages);
            
            // Show only articles for current page
            articleItems.forEach((item, index) => {
                const startIndex = (pageNum - 1) * articlesPerPage;
                const endIndex = pageNum * articlesPerPage - 1;
                
                if (index >= startIndex && index <= endIndex) {
                    item.style.display = '';
                    // Add a fade-in animation
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transition = 'opacity 0.3s ease';
                    }, 50 * (index - startIndex));
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Scroll to top of articles
            document.getElementById('articleGrid').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
})();