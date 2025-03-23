/**
 * Articles.js - JavaScript for the articles page
 * Provides filtering, search, pagination, and interactive features
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js for the header background
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
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
                    value: "#4285f4"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
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
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.3,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#4285f4",
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.8
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

    // ----- Article Data -----
    // This would normally come from a database or API
    // For now, we'll use static data for demonstration
    const articles = [
        {
            id: 1,
            title: "Multimodal Diabetes Prediction: Combining ML Ensembles with RAG-Enhanced LLMs",
            excerpt: "Explore how machine learning ensembles and retrieval-augmented generation can be combined to create more accurate and interpretable diabetes prediction systems.",
            image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            date: "2025-03-15",
            readTime: "15 min read",
            author: "Leon Doungala",
            categories: ["machine-learning", "healthcare", "generative-ai"],
            tags: ["ML Ensembles", "RAG", "Healthcare AI", "Diabetes", "LLMs"],
            featured: true,
            status: "coming-soon"
        },
        {
            id: 2,
            title: "Customer Segmentation: Unsupervised Learning for Business Intelligence",
            excerpt: "A detailed walkthrough of customer segmentation techniques using K-means clustering and hierarchical clustering for business intelligence applications.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2025-02-28",
            readTime: "12 min read",
            author: "Leon Doungala",
            categories: ["clustering", "machine-learning"],
            tags: ["K-means", "Clustering", "Business Intelligence", "Market Segmentation"],
            status: "coming-soon"
        },
        {
            id: 3,
            title: "Heart Disease Prediction: Ensemble Learning Approaches",
            excerpt: "An in-depth analysis of various ensemble learning techniques for predicting heart disease, with comparisons of Random Forest, XGBoost, and stacking methods.",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2025-02-15",
            readTime: "18 min read",
            author: "Leon Doungala",
            categories: ["healthcare", "machine-learning"],
            tags: ["Ensemble Learning", "Heart Disease", "Random Forest", "XGBoost", "Healthcare AI"],
            status: "coming-soon"
        },
               {
                id: 4,
                title: "Building a Healthcare Assistant Chatbot Using RAG and Clinical Guidelines",
                excerpt: "A step-by-step guide to creating a reliable healthcare chatbot assistant by combining retrieval-augmented generation with structured clinical guidelines.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                date: "2025-01-30",
                readTime: "20 min read",
                author: "Leon Doungala",
                categories: ["generative-ai", "healthcare", "nlp"],
                tags: ["Healthcare Chatbot", "RAG", "LLMs", "Healthcare AI", "Clinical Guidelines"],
                status: "coming-soon"
            },
        {
            id: 5,
            title: "Advanced RAG-Based ATS Systems for HR",
            excerpt: "Implementing a sophisticated applicant tracking system that leverages retrieval-augmented generation to better match candidates with job requirements.",
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2025-01-15",
            readTime: "16 min read",
            author: "Leon Doungala",
            categories: ["generative-ai", "nlp"],
            tags: ["ATS", "Recruitment", "RAG", "HR Tech", "Resume Parsing"],
            status: "coming-soon"
        },
        {
            id: 6,
            title: "Sentiment Analysis for Market Research",
            excerpt: "Techniques for implementing sentiment analysis on social media data to extract insights for market research and competitive intelligence.",
            image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2024-12-20",
            readTime: "14 min read",
            author: "Leon Doungala",
            categories: ["nlp", "machine-learning"],
            tags: ["Sentiment Analysis", "NLP", "Market Research", "Social Media Analytics"],
            status: "coming-soon"
        },
        {
            id: 7,
            title: "Breast Cancer Classification Using Deep Learning",
            excerpt: "A detailed approach to using convolutional neural networks for the classification of histopathological images to detect breast cancer.",
            image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2024-12-05",
            readTime: "22 min read",
            author: "Leon Doungala",
            categories: ["healthcare", "machine-learning"],
            tags: ["Deep Learning", "CNN", "Breast Cancer", "Medical Imaging", "Classification"],
            status: "coming-soon"
        },
        {
            id: 8,
            title: "Optimizing Housing Price Prediction Models",
            excerpt: "Strategies for feature engineering and model selection to create more accurate housing price prediction systems with reduced overfitting.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2024-11-20",
            readTime: "13 min read", 
            author: "Leon Doungala",
            categories: ["machine-learning"],
            tags: ["Regression", "Feature Engineering", "Housing Prices", "Model Selection"],
            status: "coming-soon"
        },
        {
            id: 9,
            title: "Email Spam Classification with NLP Techniques",
            excerpt: "Advanced approaches to email spam detection combining traditional machine learning with modern natural language processing methods.",
            image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2024-11-05",
            readTime: "15 min read",
            author: "Leon Doungala",
            categories: ["machine-learning", "nlp"],
            tags: ["Spam Detection", "NLP", "Classification", "Email Security"],
            status: "coming-soon"
        },
        {
            id: 10,
            title: "Fraud Detection in Financial Transactions",
            excerpt: "Implementing real-time fraud detection systems using anomaly detection and supervised learning with imbalanced datasets.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2024-10-20",
            readTime: "17 min read",
            author: "Leon Doungala",
            categories: ["machine-learning"],
            tags: ["Fraud Detection", "Anomaly Detection", "Financial AI", "Imbalanced Learning"],
            status: "coming-soon"
        },
        {
            id: 11,
            title: "Salary Prediction with Advanced Regression Techniques",
            excerpt: "Exploring various regression models to predict salary based on experience, location, education, and other factors for HR analytics.",
            image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2024-10-05",
            readTime: "14 min read",
            author: "Leon Doungala",
            categories: ["machine-learning"],
            tags: ["Regression", "Salary Prediction", "HR Analytics", "Feature Importance"],
            status: "coming-soon"
        },
        {
            id: 12,
            title: "HR Analytics: Employee Retention Prediction",
            excerpt: "Using clustering and classification techniques to identify patterns in employee attrition and build retention prediction models.",
            image: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            date: "2024-09-20",
            readTime: "16 min read",
            author: "Leon Doungala",
            categories: ["clustering", "machine-learning"],
            tags: ["HR Analytics", "Employee Retention", "Clustering", "Classification"],
            status: "coming-soon"
        }
    ];

    // ----- DOM Elements -----
    const articleGrid = document.getElementById('articleGrid');
    const articleSearch = document.getElementById('articleSearch');
    const filterButtons = document.querySelectorAll('.filter-tabs button');
    const topicList = document.querySelectorAll('.topic-list a');
    const paginationContainer = document.querySelector('.pagination-container ul');

    // Add this after the articleGrid element is defined
    function addArticlesBanner() {
        if (window.location.pathname.includes('articles.html')) {
            const banner = document.createElement('div');
            banner.className = 'articles-banner mb-5';
            banner.innerHTML = `
                <div class="articles-banner-content">
                    <div class="banner-icon">
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    <div class="banner-text">
                        <h3>Technical Articles Coming Soon</h3>
                        <p>I'm currently writing in-depth technical articles based on my AI/ML projects and research. 
                        The cards below represent planned content that will be published in the coming months. 
                        In the meantime, you can explore functioning project implementations through the "See Implementation" links.</p>
                    </div>
                </div>
            `;
            
            // Add to page before the article grid
            if (articleGrid && articleGrid.parentNode) {
                articleGrid.parentNode.insertBefore(banner, articleGrid);
                
                // Add styles for the banner
                const style = document.createElement('style');
                style.textContent = `
                    .articles-banner {
                        background: linear-gradient(135deg, rgba(66, 133, 244, 0.1) 0%, rgba(15, 23, 42, 0.25) 100%);
                        border-radius: 10px;
                        padding: 25px;
                        border-left: 4px solid #4285f4;
                    }
                    
                    .articles-banner-content {
                        display: flex;
                        align-items: flex-start;
                    }
                    
                    .banner-icon {
                        font-size: 2rem;
                        color: #4285f4;
                        margin-right: 20px;
                        padding-top: 5px;
                    }
                    
                    .banner-text h3 {
                        margin: 0 0 10px 0;
                        font-size: 1.4rem;
                    }
                    
                    .banner-text p {
                        margin: 0;
                        line-height: 1.6;
                    }
                    
                    @media (max-width: 768px) {
                        .articles-banner-content {
                            flex-direction: column;
                            text-align: center;
                        }
                        
                        .banner-icon {
                            margin: 0 0 15px 0;
                        }
                    }
                `;
                
                document.head.appendChild(style);
            }
        }
    }

    // ----- State Variables -----
    let currentFilter = 'all';
    let currentPage = 1;
    let searchQuery = '';

    // Dynamic function to determine articles per page based on screen width
    function getArticlesPerPage() {
        const width = window.innerWidth;
        if (width >= 1600) return 6;      // xxl+: 6 cards (2 rows of 3) - only on very large screens
        if (width >= 992) return 4;       // lg: 4 cards (2 rows of 2) - better readability
        if (width >= 768) return 4;       // md: 4 cards (2 rows of 2)
        return 2;                         // sm: 2 cards (2 rows of 1)
    }

    // Dynamic function to determine column width based on screen size
    function getColumnClass() {
        const width = window.innerWidth;
        if (width >= 1600) return 'col-xxl-4';           // 3 per row only on very large screens
        if (width >= 768) return 'col-lg-6 col-md-6';    // 2 per row on large and medium
        return 'col-12';                                 // 1 per row on small
    }

    // ----- Initialize -----
    // Update category counts
    updateCategoryCounts();
    
    // Render articles with initial filter
    renderArticles();
    
    // Generate pagination
    renderPagination();

    // Call this function after initializing page elements
    addArticlesBanner();

    // ----- Event Listeners -----
    // Filter tabs click event
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter and reset page
            currentFilter = this.getAttribute('data-filter');
            currentPage = 1;
            
            // Re-render articles and pagination
            renderArticles();
            renderPagination();
        });
    });

    // Topic list click event
    topicList.forEach(topic => {
        topic.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update filter and reset page
            currentFilter = this.getAttribute('data-filter');
            currentPage = 1;
            
            // Update active class in filter tabs
            filterButtons.forEach(btn => {
                if (btn.getAttribute('data-filter') === currentFilter) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            // Re-render articles and pagination
            renderArticles();
            renderPagination();
        });
    });

    // Search input event
    articleSearch.addEventListener('input', function() {
        searchQuery = this.value.toLowerCase().trim();
        currentPage = 1;
        renderArticles();
        renderPagination();
    });

    // Add after other event listeners
    // Window resize event for responsive pagination
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Check if the number of articles per page has changed
            const oldArticlesPerPage = getArticlesPerPage();
            
            // Force reflow to get new width
            document.body.offsetHeight;
            
            const newArticlesPerPage = getArticlesPerPage();
            
            // If articles per page changed, we need to recalculate current page
            if (oldArticlesPerPage !== newArticlesPerPage) {
                // Adjust current page to keep approximate scroll position
                const filteredArticles = getFilteredArticles();
                const currentItemIndex = (currentPage - 1) * oldArticlesPerPage;
                currentPage = Math.floor(currentItemIndex / newArticlesPerPage) + 1;
                
                // Make sure we don't exceed total pages
                const totalPages = Math.ceil(filteredArticles.length / newArticlesPerPage);
                currentPage = Math.min(currentPage, totalPages);
                
                // Re-render articles
                renderArticles();
            }
            
            // Always update pagination
            renderPagination();
        }, 250);
    });

    // ----- Functions -----
    // Get filtered articles based on current filter and search query
    function getFilteredArticles() {
        return articles.filter(article => {
            // Filter by category
            const categoryMatch = currentFilter === 'all' || article.categories.includes(currentFilter);
            
            // Filter by search query
            const searchMatch = searchQuery === '' || 
                article.title.toLowerCase().includes(searchQuery) || 
                article.excerpt.toLowerCase().includes(searchQuery) ||
                article.tags.some(tag => tag.toLowerCase().includes(searchQuery));
            
            return categoryMatch && searchMatch;
        });
    }

    // Render articles based on current filter, search, and pagination
    function renderArticles() {
        const filteredArticles = getFilteredArticles();
        const articlesPerPage = getArticlesPerPage();
        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
        
        // Clear the grid
        articleGrid.innerHTML = '';
        
        // Show "no articles found" message if no results
        if (paginatedArticles.length === 0) {
            articleGrid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="empty-state">
                        <i class="fas fa-search fa-3x mb-3 text-muted"></i>
                        <h3>No articles found</h3>
                        <p>Try adjusting your search or filter criteria</p>
                    </div>
                </div>
            `;
            return;
        }
        
        // Get the appropriate column class
        const columnClass = getColumnClass();
        
        // Render each article
        paginatedArticles.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.className = `${columnClass} article-item mb-4`;
            articleCard.setAttribute('data-category', article.categories.join(' '));
            
            // Generate tags HTML
            const tagsHTML = article.tags.map(tag => 
                `<span class="article-tag">${tag}</span>`
            ).join('');
            
            // Generate metadata HTML
            const metaHTML = `
                <div class="article-date"><i class="far fa-calendar-alt"></i> ${formatDate(article.date)}</div>
                <div class="article-read-time"><i class="far fa-clock"></i> ${article.readTime}</div>
            `;
            
            // Map article IDs to project links
            // This maps each article to a specific project in the portfolio
            const projectMappings = {
                1: "diabetes-chatbot",  // Diabetes Prediction to diabetes-chatbot project
                2: "customer-segmentation", // Customer Segmentation to related project
                3: "heart-disease",    // Heart Disease Prediction to related project
                4: "virtual-doctor",   // Healthcare Assistant to related project
                5: "ats-system",       // RAG-Based ATS to related project
                6: "sentiment-analysis", // Sentiment Analysis to related project
                7: "breast-cancer",    // Breast Cancer to related project
                8: "housing-prices",   // Housing Price Prediction to related project
                9: "spam-email",       // Email Spam to related project
                10: "fraud-detection", // Fraud Detection to related project
                11: "salary-prediction", // Salary Prediction to related project
                12: "hr-analytics"     // HR Analytics to related project
            };
            
            // Get the corresponding project ID for the implementation link
            const projectId = projectMappings[article.id] || "";
            
            articleCard.innerHTML = `
                <div class="article-card h-100 d-flex flex-column">
                    ${article.status === 'coming-soon' ? '<div class="coming-soon-badge">Coming Soon</div>' : ''}
                    <div class="article-image">
                        <img src="${article.image}" alt="${article.title}" class="img-fluid">
                    </div>
                    <div class="article-content d-flex flex-column flex-grow-1">
                        <h3 class="article-title">${article.title}</h3>
                        <div class="article-meta">
                            ${metaHTML}
                        </div>
                        <p class="article-excerpt flex-grow-1">${article.excerpt}</p>
                        <div class="article-tags mb-3">
                            ${tagsHTML}
                        </div>
                        <div class="article-buttons mt-auto d-flex gap-2">
                            <button class="btn btn-primary flex-grow-1" ${article.status === 'coming-soon' ? 'disabled' : ''}>
                                <i class="fas fa-book-reader me-1"></i> Read Article
                            </button>
                            <a href="ml_and_ds_portfolio.html?project=${projectId}" class="btn btn-outline-light flex-grow-1">
                                <i class="fas fa-code me-1"></i> See Implementation
                            </a>
                        </div>
                    </div>
                </div>
            `;
            
            articleGrid.appendChild(articleCard);
        });
        
        // Add animation to the cards
        animateArticleCards();
    }

    // Format date in a readable format
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }
    
    // Add staggered animation to article cards
    function animateArticleCards() {
        const cards = document.querySelectorAll('.article-item');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animated', 'fadeInUp');
            }, index * 100);
        });
    }

    // Render pagination based on filtered articles
    function renderPagination() {
        const filteredArticles = getFilteredArticles();
        const articlesPerPage = getArticlesPerPage();
        const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
        
        // Clear pagination
        paginationContainer.innerHTML = '';
        
        // Don't show pagination if only one page
        if (totalPages <= 1) return;
        
        // Previous button
        const prevButton = document.createElement('li');
        prevButton.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
        prevButton.innerHTML = `
            <a class="page-link" href="#" aria-label="Previous">
                <i class="fas fa-chevron-left"></i>
            </a>
        `;
        prevButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                renderArticles();
                renderPagination();
                scrollToTop();
            }
        });
        paginationContainer.appendChild(prevButton);
        
        // Dynamic visible pages based on screen size
        const screenWidth = window.innerWidth;
        const maxVisiblePages = screenWidth < 768 ? 3 : (screenWidth < 992 ? 5 : 7);
        
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        // Adjust startPage if endPage is maxed out
        if (endPage === totalPages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        // First page if not visible
        if (startPage > 1) {
            const firstPage = document.createElement('li');
            firstPage.className = 'page-item';
            firstPage.innerHTML = `<a class="page-link" href="#">1</a>`;
            firstPage.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = 1;
                renderArticles();
                renderPagination();
                scrollToTop();
            });
            paginationContainer.appendChild(firstPage);
            
            // Ellipsis if needed
            if (startPage > 2) {
                const ellipsis = document.createElement('li');
                ellipsis.className = 'page-item disabled';
                ellipsis.innerHTML = `<span class="page-link">...</span>`;
                paginationContainer.appendChild(ellipsis);
            }
        }
        
        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = i;
                renderArticles();
                renderPagination();
                scrollToTop();
            });
            paginationContainer.appendChild(pageItem);
        }
        
        // Last page if not visible
        if (endPage < totalPages) {
            // Ellipsis if needed
            if (endPage < totalPages - 1) {
                const ellipsis = document.createElement('li');
                ellipsis.className = 'page-item disabled';
                ellipsis.innerHTML = `<span class="page-link">...</span>`;
                paginationContainer.appendChild(ellipsis);
            }
            
            const lastPage = document.createElement('li');
            lastPage.className = 'page-item';
            lastPage.innerHTML = `<a class="page-link" href="#">${totalPages}</a>`;
            lastPage.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = totalPages;
                renderArticles();
                renderPagination();
                scrollToTop();
            });
            paginationContainer.appendChild(lastPage);
        }
        
        // Next button
        const nextButton = document.createElement('li');
        nextButton.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
        nextButton.innerHTML = `
            <a class="page-link" href="#" aria-label="Next">
                <i class="fas fa-chevron-right"></i>
            </a>
        `;
        nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                renderArticles();
                renderPagination();
                scrollToTop();
            }
        });
        paginationContainer.appendChild(nextButton);
    }

    // Smooth scroll to top of article list
    function scrollToTop() {
        const articleListSection = document.querySelector('.articles-list');
        if (articleListSection) {
            window.scrollTo({
                top: articleListSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }

    // Update category counts in sidebar
    function updateCategoryCounts() {
        // Count articles in each category
        const categoryCounts = {
            'all': articles.length,
            'machine-learning': 0,
            'generative-ai': 0,
            'healthcare': 0,
            'nlp': 0,
            'clustering': 0
        };
        
        // Count articles in each category
        articles.forEach(article => {
            article.categories.forEach(category => {
                if (categoryCounts.hasOwnProperty(category)) {
                    categoryCounts[category]++;
                }
            });
        });
        
        // Update sidebar topic counts
        topicList.forEach(topic => {
            const category = topic.getAttribute('data-filter');
            const countSpan = topic.querySelector('span');
            if (countSpan && categoryCounts.hasOwnProperty(category)) {
                countSpan.textContent = `(${categoryCounts[category]})`;
            }
        });
    }

    // Handle author section
    const authorWidget = document.querySelector('.author-widget');
    if (authorWidget) {
        const authorImage = authorWidget.querySelector('.author-image');
        if (authorImage) {
            authorImage.innerHTML = `<img src="images/Untitled_design-removebg-preview__1_-removebg-preview (1).png" alt="Leon Doungala">`;
        }
        
        const authorInfo = authorWidget.querySelector('.author-info');
        if (authorInfo) {
            authorInfo.innerHTML = `
                <div class="author-name">Leon Doungala</div>
                <div class="author-title">AI/ML Engineer & Data Scientist</div>
            `;
        }
    }

    // Handle subscribe form
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        const formGroup = subscribeForm.querySelector('.form-group');
        if (formGroup) {
            formGroup.innerHTML = `
                <input type="email" class="form-control" placeholder="Your email address" required>
                <small class="text-muted">We'll never share your email with anyone else.</small>
            `;
        }
        
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value) {
                // In a real application, you would send this to your server
                console.log('Subscription request for:', emailInput.value);
                
                // Show success message
                const formGroup = this.querySelector('.form-group');
                formGroup.innerHTML = `
                    <div class="alert alert-success">
                        <i class="fas fa-check-circle"></i> Thank you for subscribing!
                    </div>
                `;
                
                // Disable the button
                const submitButton = this.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.textContent = 'Subscribed';
            }
        });
    }

    // Initialize any bootstrap tooltips
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltips.map(function (tooltip) {
            return new bootstrap.Tooltip(tooltip);
        });
    }

    // Set up "View Implementation" button
    const viewImplementationBtns = document.querySelectorAll('.btn-outline-light');
    viewImplementationBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // This would typically take the user to the specific project
            // For now, just navigate to the portfolio page
            window.location.href = 'ml_and_ds_portfolio.html';
        });
    });

    // Handle footer navigation
    const footerNav = document.querySelectorAll('.footer-nav');
    if (footerNav.length >= 2) {
        footerNav[0].innerHTML = `
            <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
            <li><a href="index.html#about"><i class="fas fa-user"></i> About Me</a></li>
            <li><a href="index.html#education"><i class="fas fa-graduation-cap"></i> Education</a></li>
        `;
        
        footerNav[1].innerHTML = `
            <li><a href="ml_and_ds_portfolio.html"><i class="fas fa-project-diagram"></i> Portfolio</a></li>
            <li><a href="thesi.html"><i class="fas fa-clipboard-check"></i> Thesis</a></li>
            <li><a href="index.html#cv"><i class="fas fa-file-alt"></i> Resume</a></li>
        `;
    }

    // Set portfolio showcase button
    const portfolioBtn = document.querySelector('.project-showcase .btn');
    if (portfolioBtn) {
        portfolioBtn.innerHTML = `
            <i class="fas fa-laptop-code"></i> View AI/ML Portfolio
        `;
    }

    // Add special effects to article cards on hover
    function addCardHoverEffects() {
        const cards = document.querySelectorAll('.article-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const title = this.querySelector('.article-title');
                if (title) {
                    gsap.to(title, {
                        y: -5,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
                
                const image = this.querySelector('.article-image img');
                if (image) {
                    gsap.to(image, {
                        scale: 1.05,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const title = this.querySelector('.article-title');
                if (title) {
                    gsap.to(title, {
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
                
                const image = this.querySelector('.article-image img');
                if (image) {
                    gsap.to(image, {
                        scale: 1,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }

    // If GSAP is available, add hover effects
    if (typeof gsap !== 'undefined') {
        addCardHoverEffects();
        
        // Re-add effects whenever articles are rendered
        const renderArticlesOriginal = renderArticles;
        renderArticles = function() {
            renderArticlesOriginal();
            setTimeout(addCardHoverEffects, 100);
        };
    }

    // Add this function to the end of your DOM content loaded event handler
    // Website under development notification
    function addUnderDevelopmentNotice() {
        // Check if we're on one of the pages that needs the notice
        const currentPath = window.location.pathname;
        const pagesToNotify = [
            '/articles.html',
            '/ml_and_ds_portfolio.html',
            '/projects.html',
            '/repository.html'
        ];
        
        // Extract page name for custom message
        let pageName = "This page";
        if (currentPath.includes('articles')) pageName = "Articles section";
        if (currentPath.includes('portfolio')) pageName = "Portfolio";
        if (currentPath.includes('projects')) pageName = "Projects section";
        if (currentPath.includes('repository')) pageName = "Repository";
        
        // Only add the notice if we're on one of the target pages
        if (pagesToNotify.some(page => currentPath.includes(page.replace('/', '')))) {
            // Create the notification element
            const notice = document.createElement('div');
            notice.className = 'development-notice';
            notice.innerHTML = `
                <div class="notice-content">
                    <div class="notice-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <div class="notice-text">
                        <h3>${pageName} is currently under development</h3>
                        <p>I'm actively building out this section with detailed content and case studies. Check back soon for updates!</p>
                    </div>
                    <button class="notice-close" aria-label="Close notification">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            
            // Add styles
            const style = document.createElement('style');
            style.textContent = `
                .development-notice {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    max-width: 400px;
                    background: rgba(15, 23, 42, 0.95);
                    border-left: 4px solid #4285f4;
                    border-radius: 6px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                    z-index: 1000;
                    backdrop-filter: blur(8px);
                    animation: slide-in 0.5s ease-out forwards;
                    color: white;
                }
                
                .notice-content {
                    display: flex;
                    padding: 20px;
                    position: relative;
                }
                
                .notice-icon {
                    font-size: 1.8rem;
                    color: #4285f4;
                    margin-right: 15px;
                    display: flex;
                    align-items: center;
                }
                
                .notice-text h3 {
                    margin: 0 0 8px 0;
                    font-size: 1.1rem;
                }
                
                .notice-text p {
                    margin: 0;
                    font-size: 0.9rem;
                    opacity: 0.85;
                }
                
                .notice-close {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.6);
                    cursor: pointer;
                    font-size: 0.9rem;
                    transition: color 0.2s;
                }
                
                .notice-close:hover {
                    color: white;
                }
                
                @keyframes slide-in {
                    from {
                        transform: translateY(100px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                @media (max-width: 576px) {
                    .development-notice {
                        bottom: 0;
                        right: 0;
                        left: 0;
                        max-width: 100%;
                        border-radius: 0;
                        border-left: none;
                        border-top: 4px solid #4285f4;
                    }
                }
            `;
            
            // Add elements to the DOM
            document.head.appendChild(style);
            document.body.appendChild(notice);
            
            // Add event listener to close button
            const closeButton = notice.querySelector('.notice-close');
            closeButton.addEventListener('click', function() {
                // Store in sessionStorage so it stays closed during this session
                sessionStorage.setItem('developmentNoticeClosed', 'true');
                notice.remove();
            });
            
            // Don't show if user already closed it in this session
            if (sessionStorage.getItem('developmentNoticeClosed') === 'true') {
                notice.remove();
            }
        }
    }

    // Call the function at the end of your DOMContentLoaded event
    addUnderDevelopmentNotice();

    // Add this to your existing DOMContentLoaded event handler

    function addProjectsRevisionNotice() {
        // Don't show if user already closed it in this session
        if (sessionStorage.getItem('projectsNoticeShown') === 'true') {
            return;
        }
        
        const notice = document.createElement('div');
        notice.className = 'projects-revision-notice';
        notice.innerHTML = `
            <div class="notice-content">
                <div class="notice-icon">
                    <i class="fas fa-tools"></i>
                </div>
                <div class="notice-text">
                    <h3>Articles & Projects Being Updated</h3>
                    <p>New content is being progressively added to the site. Check back soon for more articles and projects!</p>
                </div>
                <button class="notice-close" aria-label="Close notification">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notice);
        
        // Add event listener to close button
        const closeButton = notice.querySelector('.notice-close');
        closeButton.addEventListener('click', function() {
            sessionStorage.setItem('projectsNoticeShown', 'true');
            notice.classList.add('closing');
            setTimeout(() => {
                notice.remove();
            }, 500);
        });
        
        // No auto-hide timeout - notification stays until user closes it
    }

    // Show the notice
    addProjectsRevisionNotice();
});