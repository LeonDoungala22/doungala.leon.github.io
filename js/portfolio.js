// Add to your existing loadProject function

function loadProject(projectId) {
  // Show loading animation first
  const projectContent = document.getElementById('project-content');
  projectContent.innerHTML = `
    <div class="loading-indicator">
      <div class="loading-spinner"></div>
      <div class="loading-text">Loading Jupyter Notebook...</div>
    </div>
  `;
  
  // Display the active project section
  document.getElementById('project-explorer').classList.add('d-none');
  document.getElementById('active-project').classList.remove('d-none');
  
  // Find the selected project
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    projectContent.innerHTML = '<div class="alert alert-danger">Project not found</div>';
    return;
  }
  
  // Create project content with notebook iframe
  const projectHTML = `
    <article class="project-article">
      <header class="project-article-header">
        <h1 class="project-article-title">${project.title}</h1>
        <div class="project-article-meta">
          <div class="project-meta-left">
            <div class="project-article-tags">
              ${project.tags.map(tag => `<span class="tech-pill tech-advanced">${tag}</span>`).join('')}
            </div>
          </div>
          <div class="project-meta-right">
            <button class="project-info-btn" onclick="toggleProjectInfo()">
              <i class="fas fa-info-circle"></i> View Project Details
            </button>
          </div>
        </div>
      </header>
      
      <div class="notebook-frame-container-max">
        <div class="notebook-top-controls">
          <div class="notebook-info">
            <span>Authored by <span class="notebook-author">Leon Doungala</span></span>
          </div>
          <div class="notebook-actions">
            <a href="${project.githubUrl}" target="_blank" class="action-btn github-btn">
              <i class="fab fa-github"></i> <span>View on GitHub</span>
            </a>
            <a href="${project.notebookUrl}" target="_blank" class="action-btn fullscreen-btn">
              <i class="fas fa-expand"></i> <span>Fullscreen</span>
            </a>
            <button class="action-btn refresh-btn" onclick="refreshNotebook('${project.notebookUrl}')">
              <i class="fas fa-sync-alt"></i> <span>Refresh</span>
            </button>
          </div>
        </div>
        
        <iframe src="${project.notebookUrl}" class="notebook-iframe" 
                id="notebookFrame" 
                onload="hideLoadingIndicator()"
                title="${project.title}"></iframe>
                
        <div class="loading-indicator" id="notebookLoadingIndicator">
          <div class="loading-spinner"></div>
          <div class="loading-text">Loading Jupyter Notebook...</div>
        </div>
      </div>
    </article>
    
    <!-- Project Info Panel -->
    <div class="project-description-panel" id="projectInfoPanel">
      <div class="description-panel-content">
        <div class="panel-header">
          <h3>Project Details</h3>
          <button class="close-panel-btn" onclick="toggleProjectInfo()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="panel-body">
          ${project.detailedDescription}
          
          <div class="tech-section">
            <h4>Technologies Used</h4>
            <div class="tech-pills">
              ${generateTechLevels(project.tags)}
            </div>
          </div>
          
          <div class="author-section">
            <h4>Author</h4>
            <div class="author-info">
              <div class="author-name">Leon Doungala</div>
              <div class="author-title">AI/ML Engineer & Data Scientist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Set project content
  projectContent.innerHTML = projectHTML;
  
  // Add this function to the global scope
  window.hideLoadingIndicator = function() {
    const loadingIndicator = document.getElementById('notebookLoadingIndicator');
    if (loadingIndicator) {
      loadingIndicator.style.opacity = '0';
      setTimeout(() => {
        loadingIndicator.style.display = 'none';
      }, 500);
    }
  };
  
  // Add refresh function to the global scope
  window.refreshNotebook = function(notebookUrl) {
    const iframe = document.getElementById('notebookFrame');
    const loadingIndicator = document.getElementById('notebookLoadingIndicator');
    
    // Show loading indicator again
    if (loadingIndicator) {
      loadingIndicator.style.display = 'flex';
      loadingIndicator.style.opacity = '1';
    }
    
    // Reload iframe
    iframe.src = notebookUrl;
  };
  
  // Add toggle function for project info panel
  window.toggleProjectInfo = function() {
    const panel = document.getElementById('projectInfoPanel');
    panel.classList.toggle('panel-open');
  };
}

//<!-- Add this to the DOMContentLoaded event listener to handle direct project links -->

document.addEventListener('DOMContentLoaded', function() {
  // Check URL for direct project links
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  
  if (projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      // Load the project directly
      setTimeout(() => {
        loadProject(projectId);
      }, 500);
    }
  }
  
  // Rest of your initialization code...
});

//<!-- Update the loadProject function to implement article-style presentation -->
   
function loadProject(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  const projectContent = document.getElementById('project-content');
  
  // Keep original notebookUrl without modifications
  let notebookUrl = project.notebookUrl;
  
  // Get current date in formatted style
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  projectContent.innerHTML = `
    <div class="project-article">
      <div class="project-article-header">
        <h1 class="project-article-title">${project.title}</h1>
        
        <div class="project-article-meta">
          <div class="project-article-author">
            <div class="author-avatar">
              <img src="images/Foto_LEON_DOUGALA-removebg-preview-removebg-preview.png" alt="Leon Doungala">
            </div>
            <div class="author-info">
              <div class="author-name">Leon Doungala</div>
              <div class="author-role">AI/ML Engineer & Data Scientist</div>
            </div>
          </div>
          
          <div class="project-article-date">
            <i class="far fa-calendar-alt"></i> ${formattedDate}
          </div>
          
          <div class="project-article-tags">
            ${project.tags.map(tag => `<span class="badge ${project.category === 'generative' ? 'bg-info' : 'bg-primary'}">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
      
      <div class="project-article-content">
        <div class="project-article-image">
          <img src="${project.image || 'images/placeholder.jpg'}" alt="${project.title}" class="img-fluid">
        </div>
        
        <div class="project-article-body">
          <div class="article-sidebar">
            <div class="article-sidebar-section">
              <h3 class="article-sidebar-title">Project Links</h3>
              <div class="article-links">
                <a href="${project.githubUrl}" class="article-link" target="_blank">
                  <i class="fab fa-github"></i> GitHub Repository
                </a>
                <a href="${notebookUrl}" class="article-link" target="_blank">
                  <i class="fas fa-external-link-alt"></i> Open Notebook
                </a>
              </div>
            </div>
            
            <div class="article-sidebar-section">
              <h3 class="article-sidebar-title">Technologies</h3>
              <div class="article-tech-list">
                ${generateTechLevels(project.tags)}
              </div>
            </div>
          </div>
          
          <div class="article-main">
            <div class="article-content">
              ${project.detailedDescription}
            </div>
            
            <div class="notebook-container">
              <h2 class="notebook-title">Project Implementation</h2>
              <div class="notebook-controls">
                <a href="${notebookUrl}" class="notebook-control-btn" target="_blank">
                  <i class="fas fa-external-link-alt"></i> Open in Full Screen
                </a>
                <button class="notebook-control-btn refresh-notebook">
                  <i class="fas fa-sync-alt"></i> Refresh Notebook
                </button>
                <button class="notebook-control-btn" onclick="shareNotebook('${project.title}', '${notebookUrl}')">
                  <i class="fas fa-share-alt"></i> Share Notebook
                </button>
              </div>
              <div class="notebook-frame-container">
                <div class="loading-indicator">
                  
                </div>
                <iframe class="notebook-iframe" src="${notebookUrl}" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Hide project explorer, show active project
  document.getElementById('project-explorer').classList.add('d-none');
  document.getElementById('active-project').classList.remove('d-none');
  
  // Scroll to top of active project
  window.scrollTo(0, document.getElementById('active-project').offsetTop - 100);
}

// Function to generate tech level indicators
function generateTechLevels(tags) {
  // Map tags to tech levels (you can customize this based on your expertise)
  const techLevels = {
    "K-Means": "advanced",
    "Clustering": "advanced",
    "Machine Learning": "advanced",
    "scikit-learn": "advanced",
    "PCA": "advanced",
    "Data Analysis": "advanced",
    "HR Analytics": "intermediate",
    "Ensemble Learning": "advanced",
    "Medical ML": "advanced",
    "SVM": "advanced",
    "NLP": "intermediate",
    "Classification": "advanced",
    "KNN": "advanced",
    "Linear Regression": "advanced",
    "Forecasting": "intermediate",
    "Decision Trees": "advanced",
    "LangChain": "intermediate",
    "RAG": "intermediate",
    "Generative AI": "intermediate"
  };
  
  return tags.map(tag => {
    const level = techLevels[tag] || "intermediate";
    return `
      <div class="article-tech-item">
        <span>${tag}</span>
        <div class="tech-level ${level}"></div>
      </div>
    `;
  }).join('');
}

// Function to share project (can be expanded with actual social sharing)
function shareProject(title, id) {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: `Check out this project: ${title}`,
      url: window.location.href.split('#')[0] + `?project=${id}`
    })
    .catch(err => {
      console.error('Share failed:', err);
    });
  } else {
    alert('Use the copy link function to share this project');
  }
}

// Function to copy project link to clipboard
function copyLink(id) {
  const linkToCopy = window.location.href.split('#')[0] + `?project=${id}`;
  
  navigator.clipboard.writeText(linkToCopy)
    .then(() => {
      // Show a notification or toast
      const projectContent = document.getElementById('project-content');
      const notification = document.createElement('div');
      notification.className = 'copy-notification';
      notification.innerHTML = '<i class="fas fa-check"></i> Link copied to clipboard';
      projectContent.appendChild(notification);
      
      // Remove notification after a delay
      setTimeout(() => {
        notification.remove();
      }, 3000);
    })
    .catch(err => {
      console.error('Could not copy text: ', err);
    });
}

// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#4285f4" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#4285f4",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          out_mode: "out"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 }
        }
      }
    });
  }
});

// Check if we need to update the portfolio link in the main index page
function updateMainNavLink() {
  const portfolioLinks = document.querySelectorAll('a[href="_portfolio.html"]');
  portfolioLinks.forEach(link => {
    link.href = "ml_and_ds_portfolio.html";
  });
}

// This will only execute if this script runs on the index page
if (window.location.pathname.includes('index.html')) {
  document.addEventListener('DOMContentLoaded', updateMainNavLink);
}

// Project data structure with all projects including images
const projects = [
  {
    id: "customer-segmentation",
    title: "Customer Segmentation using K-Means",
    description: "Clustering analysis for customer segmentation using K-Means algorithm.",
    category: "ml",
    tags: ["K-Means", "Clustering", "Machine Learning", "scikit-learn"],
    image: "images/download (1).jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/advanced-customer-segmentation-ai/blob/main/Customer_Segmentation_K_Means.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/advanced-customer-segmentation-ai/blob/main/Customer_Segmentation_K_Means.ipynb",
    detailedDescription: `
      <p>This project demonstrates how to implement customer segmentation using K-Means clustering in Python with scikit-learn. Customer segmentation is a common business strategy that involves grouping customers with similar characteristics or behaviors to target marketing campaigns more effectively.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>K-Means Clustering</li>
        <li>Data Preprocessing and Feature Engineering</li>
        <li>Dimensionality Reduction</li>
        <li>Data Visualization</li>
      </ul>
      <h3>Business Impact</h3>
      <p>The analysis helps businesses to better understand different customer groups, personalize marketing strategies, optimize resource allocation, and improve customer satisfaction by meeting specific needs of different segments.</p>
    `
  },
  {
      id: "hr-analytics",
      title: "Human Resources Analytics",
      description: "PCA and clustering for HR data analysis to identify employee patterns.",
      category: "ml",
      tags: ["PCA", "Data Analysis", "HR Analytics", "Employee Retention"],
      image: "images/HR-Analytics.jpeg",
      notebookUrl: "https://nbviewer.org/github/leondoungala22/employee-clustering-analysis/blob/main/main.ipynb",
      githubUrl: "https://github.com/leondoungala22/employee-clustering-analysis/blob/main/main.ipynb",
      detailedDescription: `
        <p>This project uses Principal Component Analysis (PCA) and clustering techniques to analyze HR data and identify patterns related to employee satisfaction, performance, and retention.</p>
        <h3>Key Techniques</h3>
        <ul>
          <li>Principal Component Analysis (PCA)</li>
          <li>Hierarchical Clustering</li>
          <li>Feature Importance Analysis</li>
          <li>Correlation Analysis</li>
        </ul>
        <h3>Business Applications</h3>
        <p>Human Resources departments can use these insights to develop better retention strategies, improve workplace satisfaction, and identify factors that contribute to employee turnover.</p>
      `
    },
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction and Characterization",
    description: "Ensemble learning methods for medical prediction of diabetes risk.",
    category: "ml",
    tags: ["Ensemble Learning", "Medical ML", "Random Forest", "XGBoost"],
    image: "images/diabete.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Msc-Thesis-AI-ML-for-Diabetes-Characterization/blob/main/Diabetes_Prediction.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Msc-Thesis-AI-ML-for-Diabetes-Characterization/blob/main/Diabetes_Prediction.ipynb",
    detailedDescription: `
      <p>This project implements ensemble learning methods to predict diabetes risk based on various health metrics and patient data.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Random Forest Classification</li>
        <li>XGBoost</li>
        <li>Feature Importance Analysis</li>
        <li>Cross-Validation</li>
        <li>Hyperparameter Tuning</li>
      </ul>
      <h3>Healthcare Applications</h3>
      <p>The models developed in this project can help healthcare providers identify patients at high risk for diabetes, allowing for earlier intervention and preventative care measures.</p>
    `
  },
  {
    id: "heart-disease",
    title: "Heart Disease Prediction",
    description: "SVM and NLP techniques for medical diagnosis and risk assessment.",
    category: "ml",
    tags: ["SVM", "Medical ML", "Classification", "scikit-learn"],
    image: "images/8_Main_Types_of_Heart_Disease.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/SVM%20(%20Linear%20and%20non%20linear%20)/Heart%20Disease%20Prediction/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/SVM%20(%20Linear%20and%20non%20linear%20)/Heart%20Disease%20Prediction/main.ipynb",
    detailedDescription: `
      <p>This project focuses on heart disease prediction using Support Vector Machines (SVM) and explores various medical indicators to assess risk factors.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Support Vector Machines (SVM)</li>
        <li>Feature Selection and Engineering</li>
        <li>Model Evaluation and Validation</li>
        <li>Medical Data Analysis</li>
      </ul>
      <h3>Healthcare Applications</h3>
      <p>The predictive models can assist cardiologists in early diagnosis, risk stratification, and treatment planning for heart disease patients, potentially saving lives through early intervention.</p>
    `
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis on IMDb Reviews",
    description: "NLP-based classification of movie reviews using Naive Bayes.",
    category: "ml",
    tags: ["NLP", "Naive Bayes", "Text Classification", "scikit-learn"],
    image: "images/sentiment-analysis.png",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Naive%20Bayes/Sentiment%20Analysis%20(NLP)/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Naive%20Bayes/Sentiment%20Analysis%20(NLP)/main.ipynb",
    detailedDescription: `
      <p>This project applies Natural Language Processing techniques to analyze sentiment in IMDb movie reviews, classifying them as positive or negative using Naive Bayes algorithms.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Natural Language Processing (NLP)</li>
        <li>Text Preprocessing and Tokenization</li>
        <li>Feature Extraction with TF-IDF</li>
        <li>Naive Bayes Classification</li>
        <li>Model Performance Evaluation</li>
      </ul>
      <h3>Business Applications</h3>
      <p>This sentiment analysis approach can be adapted for various business applications including brand monitoring, customer feedback analysis, and social media sentiment tracking.</p>
    `
  },
  {
    id: "breast-cancer",
    title: "Breast Cancer Classification",
    description: "KNN algorithm for diagnosing breast tumors as malignant or benign.",
    category: "ml",
    tags: ["KNN", "Medical ML", "Classification", "scikit-learn"],
    image: "images/breast-cancer.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/KNN%20(%20K%20Nearest%20Neighbors%20)/Breast%20Cancer%20Classification/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/KNN%20(%20K%20Nearest%20Neighbors%20)/Breast%20Cancer%20Classification/main.ipynb",
    detailedDescription: `
      <p>This project uses the K-Nearest Neighbors (KNN) algorithm to classify breast cancer tumors as malignant or benign based on features extracted from digitized images of breast mass.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>K-Nearest Neighbors Algorithm</li>
        <li>Medical Image Feature Analysis</li>
        <li>Hyperparameter Optimization</li>
        <li>Feature Scaling and Preprocessing</li>
        <li>Evaluation Metrics for Medical Diagnostics</li>
      </ul>
      <h3>Healthcare Impact</h3>
      <p>Early and accurate breast cancer detection can significantly improve patient outcomes. This model demonstrates how machine learning can assist in medical diagnostics by providing a second opinion to pathologists.</p>
    `
  },
  {
    id: "salary-prediction",
    title: "Salary Prediction",
    description: "Linear regression model for salary forecasting based on experience and skills.",
    category: "ml",
    tags: ["Linear Regression", "Forecasting", "scikit-learn"],
    image: "images/salary-prediction.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Linear%20Regression/Salary%20Prediction/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Linear%20Regression/Salary%20Prediction/main.ipynb",
    detailedDescription: `
      <p>This project develops a linear regression model to predict salaries based on years of experience, education level, and other relevant factors that influence compensation.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Linear Regression</li>
        <li>Feature Engineering</li>
        <li>Data Visualization</li>
        <li>Statistical Analysis</li>
        <li>Model Validation and Residual Analysis</li>
      </ul>
      <h3>Business Applications</h3>
      <p>HR departments and recruiting firms can use this model to establish fair salary ranges, conduct market comparisons, and improve compensation strategies to attract and retain talent.</p>
    `
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    description: "Decision Trees for detecting fraudulent transactions in credit card data.",
    category: "ml",
    tags: ["Decision Trees", "Anomaly Detection", "Financial ML"],
    image: "images/1637FraudDetection.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Advanced-Credit-Card-Fraud-Detection/blob/main/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Advanced-Credit-Card-Fraud-Detection/blob/main/main.ipynb",
    detailedDescription: `
      <p>This project focuses on detecting fraudulent credit card transactions using Decision Tree algorithms, addressing the challenges of imbalanced datasets in financial fraud detection.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Decision Tree Classification</li>
        <li>Handling Imbalanced Datasets</li>
        <li>Feature Selection and Importance</li>
        <li>Cost-Sensitive Learning</li>
        <li>Performance Metrics for Fraud Detection</li>
      </ul>
      <h3>Financial Industry Applications</h3>
      <p>Financial institutions can implement similar systems to detect and prevent fraudulent transactions in real-time, reducing losses and protecting customers while maintaining a seamless experience for legitimate transactions.</p>
    `
  },
  {
    id: "housing-prices",
    title: "Predicting Housing Prices",
    description: "Decision Tree Regressor for real estate price prediction.",
    category: "ml",
    tags: ["Decision Tree Regression", "Real Estate", "Forecasting"],
    image: "images/housing-prices.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Decision%20Tree%20Regression/Housing%20Price%20Prediction/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Decision%20Tree%20Regression/Housing%20Price%20Prediction/main.ipynb",
    detailedDescription: `
      <p>This project develops a Decision Tree Regression model to predict housing prices based on various features like location, size, amenities, and other relevant factors that influence real estate valuation.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Decision Tree Regression</li>
        <li>Feature Engineering and Selection</li>
        <li>Regression Analysis</li>
        <li>Cross-Validation Techniques</li>
        <li>Model Evaluation Metrics for Regression</li>
      </ul>
      <h3>Real Estate Applications</h3>
      <p>Real estate agencies, appraisers, and property investors can use this model to estimate property values, identify undervalued properties, and make data-driven investment decisions in the housing market.</p>
    `
  },
  {
    id: "spam-email",
    title: "Spam Email Classification",
    description: "Logistic Regression for filtering spam emails from legitimate communications.",
    category: "ml",
    tags: ["Logistic Regression", "NLP", "Email Filtering"],
    image: "images/spam-detection.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Logistic%20Regression/Spam%20Email%20Classification/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Logistic%20Regression/Spam%20Email%20Classification/main.ipynb",
    detailedDescription: `
      <p>This project implements Logistic Regression to classify emails as spam or legitimate (ham) based on their content and header information, creating an effective email filtering system.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Logistic Regression</li>
        <li>Text Preprocessing and Vectorization</li>
        <li>Feature Engineering for Email Content</li>
        <li>Model Evaluation and Threshold Optimization</li>
        <li>Confusion Matrix Analysis</li>
      </ul>
      <h3>Practical Applications</h3>
      <p>The techniques demonstrated in this project can be applied to develop email filtering systems that protect users from phishing attempts, malware, and unwanted marketing communications while ensuring important messages reach their inbox.</p>
    `
  },
  {
    id: "virtual-doctor",
    title: "Virtual Doctor AI Assistant",
    description: "AI-powered system for medical guidance based on symptoms.",
    category: "generative",
    tags: ["LangChain", "Medical AI", "NLP", "Generative AI"],
    image: "images/virtual-doctor-ai.png",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/AI-Health-Assistant/blob/main/AI_Health_Assistant.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/AI-Health-Assistant",
    detailedDescription: `
      <p>The Virtual Doctor AI Assistant is a generative AI application built with LangChain that provides medical guidance based on user-reported symptoms.</p>
      <h3>Key Technologies</h3>
      <ul>
        <li>LangChain Framework</li>
        <li>Large Language Models</li>
        <li>Medical Knowledge Base Integration</li>
        <li>Conversational AI</li>
      </ul>
      <h3>Features</h3>
      <p>The assistant can understand symptom descriptions, ask relevant follow-up questions, provide potential conditions that match the symptoms, and suggest when to seek professional medical help.</p>
      <p class="note">Note: This system is designed for educational purposes only and does not replace professional medical advice.</p>
    `
  },
  {
    id: "ats-system",
    title: "AI Semantic ATS System for CV Matching",
    description: "RAG-based system for CV-job description matching.",
    category: "generative",
    tags: ["RAG", "Resume Analysis", "NLP", "Semantic Search"],
    image: "images/imag1.png",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/RAG-ATS-Semantic-matching-search-cv-ai-v1.0.0/blob/main/ATS_System.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/RAG-ATS-Semantic-matching-search-cv-ai-v1.0.0",
    detailedDescription: `
      <p>This project implements a semantic Applicant Tracking System (ATS) using Retrieval Augmented Generation (RAG) to match CVs/resumes with job descriptions.</p>
      <h3>Key Technologies</h3>
      <ul>
        <li>Retrieval Augmented Generation (RAG)</li>
        <li>Semantic Search</li>
        <li>Document Processing</li>
        <li>Vector Embeddings</li>
      </ul>
      <h3>Applications</h3>
      <p>The system helps recruiters efficiently identify qualified candidates by semantically matching resume content with job requirements, going beyond simple keyword matching to understand skills and experiences in context.</p>
    `
  },
  {
    id: "diabetes-chatbot",
    title: "Conversational AI for Diabetes Prediction",
    description: "Medical assistant using RAG workflows for diabetes analysis.",
    category: "generative",
    tags: ["RAG", "Healthcare AI", "Conversational AI", "LangChain"],
    image: "images/Screenshot 2025-01-02 at 21.08.13.png",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Msc-Thesis-AI-ML-for-Diabetes-Characterization/blob/main/Diabetes_Chatbot.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Msc-Thesis-AI-ML-for-Diabetes-Characterization",
    detailedDescription: `
      <p>This project integrates conversational AI with diabetes prediction models to create an interactive system that helps assess diabetes risk through natural language conversation.</p>
      <h3>Key Technologies</h3>
      <ul>
        <li>RAG (Retrieval Augmented Generation)</li>
        <li>LangChain for Workflow Orchestration</li>
        <li>Diabetes Prediction Models</li>
        <li>Conversational UI</li>
      </ul>
      <h3>Healthcare Applications</h3>
      <p>This system can be deployed in healthcare settings to help patients understand their diabetes risk, provide educational content about diabetes prevention, and support healthcare providers in efficient patient screening.</p>
    `
  }
];

document.addEventListener('DOMContentLoaded', function() {
  // Populate project grids
  populateProjects('projectGrid', projects);
  populateProjects('mlProjectGrid', projects.filter(p => p.category === 'ml'));
  populateProjects('genProjectGrid', projects.filter(p => p.category === 'generative'));
  
  // Set up event listeners
  document.getElementById('back-to-projects').addEventListener('click', function() {
    document.getElementById('active-project').classList.add('d-none');
    document.getElementById('project-explorer').classList.remove('d-none');
    window.scrollTo(0, document.getElementById('project-explorer').offsetTop - 100);
  });
  
  // Search functionality
  document.getElementById('projectSearch').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    filterProjects(searchTerm);
  });

  // Add fullscreen toggle event listener - delegate to the document
  document.addEventListener('click', function(e) {
    if (e.target.matches('.notebook-fullscreen-btn') || e.target.closest('.notebook-fullscreen-btn')) {
      e.preventDefault();
      
      const container = document.querySelector('.notebook-frame-container');
      if (container) {
        // Instead of toggling fullscreen, we'll open in a new tab
        const iframe = container.querySelector('iframe');
        if (iframe && iframe.src) {
          window.open(iframe.src, '_blank');
        }
      }
    }
  });
  
  // Add this to the DOMContentLoaded event listener for direct project link handling
  // Check URL for direct project links
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  
  if (projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      // Load the project directly
      setTimeout(() => {
        loadProject(projectId);
      }, 500);
    }
  }
});

// Populate project cards in the specified grid with the modern design
function populateProjects(gridId, projectsList) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  
  // Clear the grid first
  grid.innerHTML = '';
  
  // Display empty state if no projects
  if (projectsList.length === 0) {
    grid.innerHTML = `
      <div class="empty-projects">
        <i class="fas fa-folder-open"></i>
        <h3>No projects found</h3>
        <p>Try adjusting your search or select a different category.</p>
      </div>
    `;
    return;
  }
  
  // Create a card for each project
  projectsList.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.dataset.id = project.id;
    projectCard.dataset.category = project.category;
    projectCard.dataset.tags = project.tags.join(',').toLowerCase();
    
    // Calculate variation class based on index to create visual variety
    const colorVariant = index % 4; // Creates 4 different card styles
    projectCard.classList.add(`card-variant-${colorVariant}`);
    
    const displayTags = project.tags.slice(0, 3);
    const remainingTagsCount = project.tags.length > 3 ? project.tags.length - 3 : 0;
    
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image || 'images/placeholder.jpg'}" alt="${project.title}" loading="lazy">
        <div class="project-category ${project.category === 'generative' ? 'cat-gen' : 'cat-ml'}">
          ${project.category === 'generative' ? 'Generative AI' : 'Machine Learning'}
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${displayTags.map(tag => `<span class="tech-badge">${tag}</span>`).join('')}
          ${remainingTagsCount > 0 ? `<span class="tech-badge more-badge">+${remainingTagsCount} more</span>` : ''}
        </div>
        <div class="project-links">
          <button class="btn btn-view-project" data-id="${project.id}">
            <i class="fas fa-eye"></i> View Project
          </button>
        </div>
      </div>
    `;
    
    grid.appendChild(projectCard);
    
    // Add event listener to view project button
    projectCard.querySelector('.btn-view-project').addEventListener('click', function() {
      loadProject(this.dataset.id);
    });
  });
}

function loadProject(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  const projectContent = document.getElementById('project-content');
  
  // Keep original notebookUrl as requested
  let notebookUrl = project.notebookUrl;
  
  // Get current date in formatted style
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  projectContent.innerHTML = `
    <div class="project-article">
      <!-- Minimal Project Header with Info Button -->
      <div class="project-article-header">
        <h1 class="project-article-title">${project.title}</h1>
        <div class="project-article-meta">
          <div class="project-meta-left">
            <div class="project-article-date">
              <i class="far fa-calendar-alt"></i> ${formattedDate}
            </div>
            <div class="project-article-tags">
              ${project.tags.map(tag => `<span class="badge ${project.category === 'generative' ? 'bg-info' : 'bg-primary'}">${tag}</span>`).join('')}
            </div>
          </div>
          <div class="project-meta-right">
            <button class="project-info-btn toggle-description-btn" onclick="toggleDescription()">
              <i class="fas fa-info-circle"></i> Project Information
            </button>
          </div>
        </div>
      </div>
      
      <!-- Top Control Bar -->
      <div class="notebook-top-controls">
        <div class="notebook-info">
          <span class="notebook-author">Implementation by Leon Doungala, AI/ML Engineer</span>
        </div>
        <div class="notebook-actions">
          <a href="${project.githubUrl}" class="action-btn github-btn" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="${notebookUrl}" class="action-btn fullscreen-btn" target="_blank">
            <i class="fas fa-external-link-alt"></i> Open in New Tab
          </a>
          <button class="action-btn refresh-btn refresh-notebook">
            <i class="fas fa-sync-alt"></i> Refresh
          </button>
          <button class="action-btn share-btn" onclick="shareNotebook('${project.title}', '${notebookUrl}')">
            <i class="fas fa-share-alt"></i> Share Notebook
          </button>
        </div>
      </div>
      
      <!-- Maximum Width/Height Notebook Container -->
      <div class="notebook-frame-container-max">
        <iframe class="notebook-iframe" src="${notebookUrl}" allowfullscreen></iframe>
      </div>
      
      <!-- Project Information Panel -->
      <div class="project-description-panel" id="projectDescription">
        <div class="description-panel-content">
          <div class="panel-header">
            <h3>Project Details</h3>
            <button class="close-panel-btn" onclick="toggleDescription()">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="panel-body">
            ${project.detailedDescription}
            
            <div class="tech-section">
              <h4>Technologies</h4>
              <div class="tech-pills">
                ${project.tags.map(tag => {
                  const level = getTechLevel(tag);
                  return `<span class="tech-pill tech-${level}">${tag}</span>`;
                }).join('')}
              </div>
            </div>
            
            <div class="author-section">
              <h4>Implementation by</h4>
              <div class="author-info">
                <div class="author-name">Leon Doungala</div>
                <div class="author-title">AI/ML Engineer & Data Scientist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Set up notebook loading behavior
  const iframe = projectContent.querySelector('.notebook-iframe');
  const loadingIndicator = projectContent.querySelector('.loading-indicator');
  
  iframe.onload = function() {
    // Hide loading indicator when iframe is loaded
    if (loadingIndicator) {
      loadingIndicator.style.display = 'none';
    }
  };
  
  // Set up refresh notebook button
  const refreshButton = projectContent.querySelector('.refresh-notebook');
  if (refreshButton) {
    refreshButton.addEventListener('click', function() {
      // Show loading indicator
      if (loadingIndicator) {
        loadingIndicator.style.display = 'flex';
      }
      
      // Reload the iframe
      iframe.src = iframe.src;
    });
  }
  
  // Hide project explorer, show active project
  document.getElementById('project-explorer').classList.add('d-none');
  document.getElementById('active-project').classList.remove('d-none');
  
  // Scroll to top of active project
  window.scrollTo(0, document.getElementById('active-project').offsetTop - 100);
}

// Function to generate tech level indicators
function generateTechLevels(tags) {
  // Map tags to tech levels
  const techLevels = {
    "K-Means": "advanced",
    "Clustering": "advanced",
    "Machine Learning": "advanced",
    "scikit-learn": "advanced",
    "PCA": "advanced",
    "Data Analysis": "advanced",
    "HR Analytics": "intermediate",
    "Ensemble Learning": "advanced",
    "Medical ML": "advanced",
    "Random Forest": "advanced",
    "XGBoost": "advanced",
    "SVM": "advanced",
    "NLP": "intermediate",
    "Classification": "advanced",
    "Text Classification": "intermediate",
    "Naive Bayes": "advanced",
    "KNN": "advanced",
    "Linear Regression": "advanced",
    "Forecasting": "intermediate",
    "Decision Trees": "advanced",
    "Anomaly Detection": "advanced",
    "Financial ML": "intermediate",
    "Decision Tree Regression": "advanced",
    "Real Estate": "intermediate",
    "Logistic Regression": "advanced",
    "Email Filtering": "intermediate",
    "LangChain": "intermediate",
    "Medical AI": "intermediate",
    "Generative AI": "intermediate",
    "RAG": "intermediate",
    "Resume Analysis": "intermediate", 
    "Semantic Search": "intermediate",
    "Healthcare AI": "intermediate",
    "Conversational AI": "intermediate",
    "Document Processing": "intermediate",
    "Vector Embeddings": "intermediate"
  };
  
  return tags.map(tag => {
    const level = techLevels[tag] || "intermediate";
    return `
      <div class="article-tech-item">
        <span>${tag}</span>
        <div class="tech-level ${level}"></div>
      </div>
    `;
  }).join('');
}

// Function to share project
function shareProject(title, id) {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: `Check out this project: ${title}`,
      url: window.location.href.split('#')[0] + `?project=${id}`
    })
    .catch(err => {
      console.error('Share failed:', err);
    });
  } else {
    alert('Use the copy link function to share this project');
  }
}

// Function to copy project link to clipboard
function copyLink(id) {
  const linkToCopy = window.location.href.split('#')[0] + `?project=${id}`;
  
  navigator.clipboard.writeText(linkToCopy)
    .then(() => {
      // Show a notification
      const notification = document.createElement('div');
      notification.className = 'copy-notification';
      notification.innerHTML = '<i class="fas fa-check"></i> Link copied to clipboard';
      document.body.appendChild(notification);
      
      // Remove notification after a delay
      setTimeout(() => {
        notification.remove();
      }, 3000);
    })
    .catch(err => {
      console.error('Could not copy text: ', err);
    });
}

// Helper function to get tech level
function getTechLevel(tag) {
  const advancedTechs = ["K-Means", "Clustering", "Machine Learning", "scikit-learn", "PCA", "Data Analysis", 
    "Ensemble Learning", "Medical ML", "Random Forest", "XGBoost", "SVM", "Classification", "KNN", 
    "Linear Regression", "Decision Trees", "Naive Bayes"];
    
  const intermediateTechs = ["NLP", "Text Classification", "Forecasting", "HR Analytics", "Financial ML", 
    "Real Estate", "Email Filtering", "LangChain", "Medical AI", "Generative AI", "RAG", "Healthcare AI"];
  
  if (advancedTechs.includes(tag)) return "advanced";
  if (intermediateTechs.includes(tag)) return "intermediate";
  return "basic";
}

// Function to toggle description panel
function toggleDescription() {
  const panel = document.getElementById('projectDescription');
  panel.classList.toggle('panel-open');
}

// Add this to your DOMContentLoaded event to update the stats counters
document.addEventListener('DOMContentLoaded', function() {
  // Populate project grids
  populateProjects('projectGrid', projects);
  populateProjects('mlProjectGrid', projects.filter(p => p.category === 'ml'));
  populateProjects('genProjectGrid', projects.filter(p => p.category === 'generative'));
  
  // Update stats counters with animation
  updateStatsCounters();
  
  // Rest of your initialization code...
});

// Function to animate counting up for stats
function updateStatsCounters() {
  const totalProjects = projects.length;
  const mlProjects = projects.filter(p => p.category === 'ml').length;
  const genProjects = projects.filter(p => p.category === 'generative').length;
  
  animateCounter('totalProjects', totalProjects);
  animateCounter('mlProjects', mlProjects);
  animateCounter('genProjects', genProjects);
}

function animateCounter(elementId, targetValue) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  let currentValue = 0;
  const duration = 1500; // ms
  const stepTime = 30; // ms
  const totalSteps = duration / stepTime;
  const stepValue = targetValue / totalSteps;
  
  const counterAnimation = setInterval(() => {
    currentValue += stepValue;
    if (currentValue >= targetValue) {
      currentValue = targetValue;
      clearInterval(counterAnimation);
    }
    element.textContent = Math.floor(currentValue);
  }, stepTime);
}

// Enhanced project card creation
function populateProjects(gridId, projectsList) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  
  grid.innerHTML = '';
  
  if (projectsList.length === 0) {
    grid.innerHTML = `
      <div class="empty-projects">
        <i class="fas fa-folder-open"></i>
        <h3>No projects found</h3>
        <p>Try adjusting your search or select a different category.</p>
      </div>
    `;
    return;
  }
  
  projectsList.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.dataset.id = project.id;
    projectCard.dataset.category = project.category;
    projectCard.dataset.tags = project.tags.join(',').toLowerCase();
    
    // Calculate variation class based on index to create visual variety
    const colorVariant = index % 4; // Creates 4 different card styles
    projectCard.classList.add(`card-variant-${colorVariant}`);
    
    const displayTags = project.tags.slice(0, 3);
    const remainingTagsCount = project.tags.length > 3 ? project.tags.length - 3 : 0;
    
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image || 'images/placeholder.jpg'}" alt="${project.title}" loading="lazy">
        <div class="project-category ${project.category === 'generative' ? 'cat-gen' : 'cat-ml'}">
          ${project.category === 'generative' ? 'Generative AI' : 'Machine Learning'}
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${displayTags.map(tag => `<span class="tech-badge">${tag}</span>`).join('')}
          ${remainingTagsCount > 0 ? `<span class="tech-badge more-badge">+${remainingTagsCount} more</span>` : ''}
        </div>
        <div class="project-links">
          <button class="btn btn-view-project" data-id="${project.id}">
            <i class="fas fa-eye"></i> View Project
          </button>
        </div>
      </div>
    `;
    
    grid.appendChild(projectCard);
    
    projectCard.querySelector('.btn-view-project').addEventListener('click', function() {
      loadProject(this.dataset.id);
    });
  });
}

// Function to toggle description panel
function toggleDescription() {
  const panel = document.getElementById('projectDescription');
  panel.classList.toggle('panel-open');
}

// Define a single DOMContentLoaded event handler that combines all initialization
document.addEventListener('DOMContentLoaded', function() {
  // Check URL for direct project links
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  
  // Initialize particles.js if available
  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#4285f4" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#4285f4",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          out_mode: "out"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 }
        }
      }
    });
  }
  
  // Check if we need to update the portfolio link in the main index page
  if (window.location.pathname.includes('index.html')) {
    updateMainNavLink();
  }
  
  // Populate project grids if the elements exist
  if (document.getElementById('projectGrid')) {
    populateProjects('projectGrid', projects);
    populateProjects('mlProjectGrid', projects.filter(p => p.category === 'ml'));
    populateProjects('genProjectGrid', projects.filter(p => p.category === 'generative'));
    
    // Update stats counters with animation
    updateStatsCounters();
  }
  
  // Set up event listeners for project interaction
  if (document.getElementById('back-to-projects')) {
    document.getElementById('back-to-projects').addEventListener('click', function() {
      document.getElementById('active-project').classList.add('d-none');
      document.getElementById('project-explorer').classList.remove('d-none');
      window.scrollTo(0, document.getElementById('project-explorer').offsetTop - 100);
    });
  }
  
  // Search functionality
  const projectSearch = document.getElementById('projectSearch');
  if (projectSearch) {
    projectSearch.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      filterProjects(searchTerm);
    });
  }
  
  // Handle direct project loading if URL parameter exists
  if (projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      // Load the project directly
      setTimeout(() => {
        loadProject(projectId);
      }, 500);
    }
  }
});

// Function to animate counting up for stats
function updateStatsCounters() {
  const totalProjects = projects.length;
  const mlProjects = projects.filter(p => p.category === 'ml').length;
  const genProjects = projects.filter(p => p.category === 'generative').length;
  
  animateCounter('totalProjects', totalProjects);
  animateCounter('mlProjects', mlProjects);
  animateCounter('genProjects', genProjects);
}

function animateCounter(elementId, targetValue) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  let currentValue = 0;
  const duration = 1500; // ms
  const stepTime = 30; // ms
  const totalSteps = duration / stepTime;
  const stepValue = targetValue / totalSteps;
  
  const counterAnimation = setInterval(() => {
    currentValue += stepValue;
    if (currentValue >= targetValue) {
      currentValue = targetValue;
      clearInterval(counterAnimation);
    }
    element.textContent = Math.floor(currentValue);
  }, stepTime);
}

// Filter projects based on search term
function filterProjects(searchTerm) {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const title = card.querySelector('.project-title').textContent.toLowerCase();
    const description = card.querySelector('.project-description').textContent.toLowerCase();
    const tags = card.dataset.tags.toLowerCase();
    
    if (title.includes(searchTerm) || description.includes(searchTerm) || tags.includes(searchTerm)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
  
  // Check for empty state in each tab
  const tabs = ['projectGrid', 'mlProjectGrid', 'genProjectGrid'];
  tabs.forEach(tabId => {
    const grid = document.getElementById(tabId);
    if (!grid) return;
    
    const visibleCards = grid.querySelectorAll('.project-card[style="display: flex;"]');
    
    if (visibleCards.length === 0 && !grid.querySelector('.empty-search-results')) {
      grid.innerHTML += `
        <div class="empty-search-results empty-projects">
          <i class="fas fa-search"></i>
          <h3>No matching projects</h3>
          <p>Try different search terms or clear your search</p>
        </div>
      `;
    } else if (visibleCards.length > 0) {
      const emptyState = grid.querySelector('.empty-search-results');
      if (emptyState) emptyState.remove();
    }
  });
}

// Update portfolio links in navigation
function updateMainNavLink() {
  const portfolioLinks = document.querySelectorAll('a[href="_portfolio.html"]');
  portfolioLinks.forEach(link => {
    link.href = "ml_and_ds_portfolio.html";
  });
}

/* Add this to your portfolio.js file or script section */
document.addEventListener('DOMContentLoaded', function() {
  // Particles.js configuration
  if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 40,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#4285f4"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 0.5,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#4285f4",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.4
            }
          },
          "bubble": {
            "distance": 400,
            "size": 4,
            "duration": 2,
            "opacity": 0.8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 2
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
});

// Define projects array at the global scope first to ensure it exists
if (typeof projects === 'undefined') {
  console.log('Initializing projects array...');
  window.projects = [
    // Your project data will be here - keeping your existing project definitions
  ];
}

// Ensure project cards are populated after DOM loads with better error handling
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, preparing to populate projects...');
  
  // Add helpful debug information
  if (typeof projects !== 'undefined') {
    console.log('Projects array found with ' + projects.length + ' projects');
  } else {
    console.error('Projects array not found! This will cause the cards not to load.');
  }
  
  // Wait a brief moment to ensure all scripts are loaded
  setTimeout(function() {
    try {
      // Double-check if projects array exists and has content
      if (typeof projects !== 'undefined' && projects.length > 0) {
        // Get references to grids, checking if they exist first
        const projectGrid = document.getElementById('projectGrid');
        const mlProjectGrid = document.getElementById('mlProjectGrid');
        const genProjectGrid = document.getElementById('genProjectGrid');
        
        // Only try to populate grids that exist in the DOM
        if (projectGrid) {
          console.log('Populating main project grid...');
          populateProjects('projectGrid', projects);
        }
        
        if (mlProjectGrid) {
          console.log('Populating ML project grid...');
          populateProjects('mlProjectGrid', projects.filter(p => p.category === 'ml'));
        }
        
        if (genProjectGrid) {
          console.log('Populating generative AI project grid...');
          populateProjects('genProjectGrid', projects.filter(p => p.category === 'generative'));
        }
        
        console.log('Successfully loaded ' + projects.length + ' projects');
      } else {
        console.error('Projects array not found or empty. Check your projects data and make sure it\'s defined before this code runs.');
      }
    } catch (error) {
      console.error('Error populating projects:', error);
    }
  }, 800); // Increased timeout to ensure everything is loaded
  
  // URL parameter handling with error handling
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    
    if (projectId) {
      // Wait longer for projects to load when directly accessing a project
      setTimeout(function() {
        try {
          if (typeof loadProject === 'function') {
            console.log('Loading project with ID:', projectId);
            loadProject(projectId);
          } else {
            console.error('loadProject function not found');
          }
        } catch (err) {
          console.error('Error loading project:', err);
        }
      }, 1200);
    }
  } catch (err) {
    console.error('Error handling URL parameters:', err);
  }
});

// Add this function to handle notebook sharing
function shareNotebook(title, notebookUrl) {
  if (navigator.share) {
    navigator.share({
      title: `Jupyter Notebook: ${title}`,
      text: `Check out this data science notebook: ${title}`,
      url: notebookUrl
    })
    .catch(err => {
      console.error('Could not share notebook:', err);
    });
  } else {
    // Fallback for browsers that don't support the Web Share API
    navigator.clipboard.writeText(notebookUrl)
      .then(() => {
        // Show a notification
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.innerHTML = '<i class="fas fa-check"></i> Notebook URL copied to clipboard';
        document.body.appendChild(notification);
        
        // Remove notification after a delay
        setTimeout(() => {
          notification.remove();
        }, 3000);
      })
      .catch(err => {
        console.error('Could not copy notebook URL:', err);
        alert('Please copy this URL manually: ' + notebookUrl);
      });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Existing code...
  
  // Add the under development notification
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
          <h3>Projects Under Revision</h3>
          <p>My portfolio is currently being updated. New projects will be progressively published in the coming weeks. Thank you for your interest!</p>
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

// Add this to the CSS section or update your existing media queries
document.addEventListener('DOMContentLoaded', function() {
  // Add dynamic style for ultrawide screens
  const style = document.createElement('style');
  style.textContent = `
    @media (min-width: 2560px) {
      .project-grid.modern {
        grid-template-columns: repeat(4, 1fr);
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    
    @media (min-width: 1920px) and (max-width: 2559px) {
      .project-grid.modern {
        grid-template-columns: repeat(3, 1fr);
        max-width: 1680px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  `;
  document.head.appendChild(style);
});

// Update the loadProject function to handle generative AI projects differently

function loadProject(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  const projectContent = document.getElementById('project-content');
  
  // Get current date in formatted style
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  // Check if it's a generative AI project with a complex structure
  const isGenerativeProject = project.category === 'generative';
  const isPrivateRepo = project.isPrivate === true;
  
  // For generative AI projects, use GitHub1s for code exploration
  // For regular ML projects, use the notebook viewer
  const embedUrl = isGenerativeProject 
    ? project.githubUrl.replace('github.com', 'github1s.com') 
    : project.notebookUrl;
  
  projectContent.innerHTML = `
    <div class="project-article">
      <!-- Project Header -->
      <div class="project-article-header">
        <h1 class="project-article-title">${project.title}</h1>
        <div class="project-article-meta">
          <div class="project-meta-left">
            <div class="project-article-date">
              <i class="far fa-calendar-alt"></i> ${formattedDate}
            </div>
            <div class="project-article-tags">
              ${project.tags.map(tag => `<span class="badge ${isGenerativeProject ? 'bg-info' : 'bg-primary'}">${tag}</span>`).join('')}
            </div>
          </div>
          <div class="project-meta-right">
            <button class="project-info-btn toggle-description-btn" onclick="toggleDescription()">
              <i class="fas fa-info-circle"></i> Project Information
            </button>
          </div>
        </div>
      </div>
      
      <!-- Top Control Bar -->
      <div class="notebook-top-controls">
        <div class="notebook-info">
          <span class="notebook-author">Implementation by Leon Doungala, AI/ML Engineer</span>
        </div>
        <div class="notebook-actions">
          <a href="${project.githubUrl}" class="action-btn github-btn" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="${embedUrl}" class="action-btn fullscreen-btn" target="_blank">
            <i class="fas fa-external-link-alt"></i> Open in New Tab
          </a>
          <button class="action-btn refresh-btn refresh-notebook">
            <i class="fas fa-sync-alt"></i> Refresh
          </button>
          <button class="action-btn share-btn" onclick="shareProject('${project.title}', '${project.id}')">
            <i class="fas fa-share-alt"></i> Share Project
          </button>
        </div>
      </div>
      
      <!-- NEW: External Loading Animation -->
      <div class="external-loading-animation" id="notebookExternalLoader">
        <div class="loading-animation-content">
          <div class="jupyter-logo-spinner">
            <div class="jupyter-circles">
              <div class="jupyter-circle jupyter-circle-1"></div>
              <div class="jupyter-circle jupyter-circle-2"></div>
              <div class="jupyter-circle jupyter-circle-3"></div>
            </div>
          </div>
          <div class="loading-text">
            <h3>Loading Jupyter Notebook</h3>
            <p>Please wait while the notebook content is being prepared...</p>
          </div>
        </div>
      </div>
      
      <!-- Label to indicate content type -->
      <div class="content-type-indicator">
        <i class="${isGenerativeProject ? 'fas fa-code' : 'fas fa-chart-line'}"></i>
        <span>${isGenerativeProject ? 'Exploring Project Code Structure' : 'Jupyter Notebook'}</span>
      </div>
      
      ${isPrivateRepo ? `
      <!-- Private Repository Message -->
      <div class="private-repo-message">
        <div class="private-repo-content">
          <div class="private-icon">
            <i class="fas fa-lock"></i>
          </div>
          <div class="private-text">
            <h3>Private Repository</h3>
            <p>This project's source code is stored in a private repository and requires authorized access.</p>
            <p>If you're interested in learning more about this project or requesting access, please contact me directly.</p>
            <a href="mailto:doungala.leon@gmail.com" class="btn-contact">
              <i class="fas fa-envelope"></i> Request Access
            </a>
          </div>
        </div>
      </div>
      ` : `
      <!-- Maximum Width/Height Container for embedded content -->
      <div class="notebook-frame-container-max">
        <iframe class="notebook-iframe" id="notebookFrame" src="${embedUrl}" allowfullscreen onload="hideNotebookLoader()"></iframe>
      </div>
      `}
      
      <!-- Project Information Panel remains the same -->
      <div class="project-description-panel" id="projectDescription">
        <div class="description-panel-content">
          <div class="panel-header">
            <h3>Project Details</h3>
            <button class="close-panel-btn" onclick="toggleDescription()">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="panel-body">
            ${project.detailedDescription}
            
            <div class="tech-section">
              <h4>Technologies</h4>
              <div class="tech-pills">
                ${project.tags.map(tag => {
                  const level = getTechLevel(tag);
                  return `<span class="tech-pill tech-${level}">${tag}</span>`;
                }).join('')}
              </div>
            </div>
            
            <div class="author-section">
              <h4>Implementation by</h4>
              <div class="author-info">
                <div class="author-name">Leon Doungala</div>
                <div class="author-title">AI/ML Engineer & Data Scientist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Set up refresh notebook button
  const refreshButton = projectContent.querySelector('.refresh-notebook');
  if (refreshButton) {
    refreshButton.addEventListener('click', function() {
      const iframe = projectContent.querySelector('.notebook-iframe');
      if (iframe) {
        // Show loading animation again when refreshing
        showNotebookLoader();
        iframe.src = iframe.src; // Refresh by reassigning the src
      }
    });
  }
  
  // Add these functions to the global scope for iframe onload access
  window.hideNotebookLoader = function() {
    const loader = document.getElementById('notebookExternalLoader');
    if (loader) {
      loader.classList.add('loading-complete');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500); // Fade out animation duration
    }
  };
  
  window.showNotebookLoader = function() {
    const loader = document.getElementById('notebookExternalLoader');
    if (loader) {
      loader.style.display = 'flex';
      loader.classList.remove('loading-complete');
    }
  };
  
  // Hide project explorer, show active project
  document.getElementById('project-explorer').classList.add('d-none');
  document.getElementById('active-project').classList.remove('d-none');
  
  // Scroll to top of active project
  window.scrollTo(0, document.getElementById('active-project').offsetTop - 100);
}

// build.js - Add to your build scripts
const fs = require('fs');

// Create a config file from environment variables
const config = {
  github: {
    token: process.env.GITHUB_TOKEN || ''
  }
};

// Write to a file that's used by your app
fs.writeFileSync('./js/config.js', `const config = ${JSON.stringify(config)};`);

// Add this function to your portfolio.js
function fetchFromGitHub(url) {
  // Check if config is available
  if (typeof config === 'undefined') {
    console.warn('GitHub config is not defined. Make sure config.js is loaded before portfolio.js');
  }

  // Safely check if config exists and has a token
  const token = (typeof config !== 'undefined' && 
                config.github && 
                config.github.token) ? config.github.token : '';
                
  console.log('Using GitHub authentication:', token ? 'Yes (token available)' : 'No (no token)');
  
  return fetch(url, {
    headers: {
      'Authorization': token ? `token ${token}` : '',
      'Accept': 'application/vnd.github.v3+json'
    }
  })
  .then(response => {
    if (!response.ok) {
      console.warn(`GitHub API error: ${response.status}`);
      if (response.status === 403 || response.status === 503) {
        console.error('Rate limit likely exceeded. Check if token is working.');
      }
      return response.json().then(err => {
        throw new Error(`GitHub API: ${err.message || 'Unknown error'}`);
      });
    }
    return response.json();
  });
}

// Update your GitHub content loading functions to use this
function loadGitHubRepoContent(owner, repo, path) {
  return fetchFromGitHub(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`);
}

// Example function for loading notebook content
function loadNotebook(repo, path) {
  return fetchFromGitHub(`https://api.github.com/repos/${repo}/contents/${path}`)
    .then(data => {
      if (data.encoding === 'base64') {
        return atob(data.content); // Decode base64 content
      }
      return null;
    })
    .catch(error => {
      console.error('Error loading notebook:', error);
      return null;
    });
}

// Add this to your DOMContentLoaded event or wherever you add styles dynamically
document.addEventListener('DOMContentLoaded', function() {
  // Add the CSS for the external loader
  const style = document.createElement('style');
  style.textContent = `
    /* External Jupyter Notebook Loader */
    .external-loading-animation {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 2rem 1rem;
      background: #f8f9fa;
      border-radius: 8px;
      margin-bottom: 1rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }
    
    .external-loading-animation.loading-complete {
      opacity: 0;
      transform: translateY(-20px);
    }
    
    .loading-animation-content {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    
    .jupyter-logo-spinner {
      position: relative;
      width: 80px;
      height: 80px;
    }
    
    .jupyter-circles {
      position: relative;
      width: 100%;
      height: 100%;
      animation: spin 2s linear infinite;
    }
    
    .jupyter-circle {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      animation: pulse 1.5s ease-in-out infinite;
    }
    
    .jupyter-circle-1 {
      background: #F37626; /* Orange */
      top: 0;
      left: calc(50% - 10px);
      animation-delay: 0s;
    }
    
    .jupyter-circle-2 {
      background: #6E6E6E; /* Gray */
      bottom: 10px;
      left: calc(25% - 10px);
      animation-delay: 0.5s;
    }
    
    .jupyter-circle-3 {
      background: #4E4E4E; /* Dark gray */
      bottom: 10px;
      right: calc(25% - 10px);
      animation-delay: 1s;
    }
    
    .loading-text h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
      color: #333;
    }
    
    .loading-text p {
      margin: 0;
      font-size: 0.9rem;
      color: #666;
    }
    
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 0.6;
        transform: scale(0.8);
      }
      50% {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    /* Mobile responsiveness for the loader */
    @media (max-width: 768px) {
      .loading-animation-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
      
      .jupyter-logo-spinner {
        width: 60px;
        height: 60px;
      }
    }
  `;
  document.head.appendChild(style);
});

// Execute immediately when script loads to ensure projects are properly initialized
(function() {
  console.log('Portfolio loader initializing...');
  
  // Make sure projects array exists before proceeding
  if (typeof window.projects === 'undefined') {
    console.error('Projects array not defined! Check your scripts loading order.');
    // Define an empty array to prevent errors
    window.projects = window.projects || [];
  }
  
  // Single consolidated initialization function
  function initializePortfolio() {
    console.log('Initializing portfolio with', projects.length, 'projects');
    
    try {
      // Get references to grids
      const projectGrid = document.getElementById('projectGrid');
      const mlProjectGrid = document.getElementById('mlProjectGrid');
      const genProjectGrid = document.getElementById('genProjectGrid');
      
      // Populate project grids if they exist
      if (projectGrid) {
        console.log('Populating main project grid...');
        populateProjects('projectGrid', projects);
      }
      
      if (mlProjectGrid) {
        populateProjects('mlProjectGrid', projects.filter(p => p.category === 'ml'));
      }
      
      if (genProjectGrid) {
        populateProjects('genProjectGrid', projects.filter(p => p.category === 'generative'));
      }
      
      // Update stats if they exist
      updateStatsCounters();
      
      // Check for direct project links in URL
      const urlParams = new URLSearchParams(window.location.search);
      const projectId = urlParams.get('project');
      
      if (projectId) {
        console.log('Direct project link detected:', projectId);
        const project = projects.find(p => p.id === projectId);
        if (project) {
          setTimeout(() => loadProject(projectId), 300);
        }
      }
    } catch (error) {
      console.error('Error initializing portfolio:', error);
    }
  }
  
  // Execute when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
  } else {
    // DOM already loaded, run immediately
    initializePortfolio();
  }
  
})();

// Add these styles to your document head
document.addEventListener('DOMContentLoaded', function() {
  const notebookLoaderStyles = document.createElement('style');
  notebookLoaderStyles.textContent = `
    /* External Jupyter Notebook Loader */
    .external-loading-animation {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.9);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity 0.5s ease-out;
    }
    
    .loading-animation-content {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      display: flex;
      align-items: center;
      gap: 2rem;
      max-width: 500px;
      width: 90%;
    }
    
    .jupyter-logo-spinner {
      position: relative;
      width: 80px;
      height: 80px;
      flex-shrink: 0;
    }
    
    .jupyter-circles {
      position: relative;
      width: 100%;
      height: 100%;
      animation: spin 2s linear infinite;
    }
    
    .jupyter-circle {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      animation: pulse 1.5s ease-in-out infinite;
    }
    
    .jupyter-circle-1 {
      background: #F37626; /* Orange */
      top: 0;
      left: calc(50% - 10px);
      animation-delay: 0s;
    }
    
    .jupyter-circle-2 {
      background: #6E6E6E; /* Gray */
      bottom: 10px;
      left: calc(25% - 10px);
      animation-delay: 0.5s;
    }
    
    .jupyter-circle-3 {
      background: #4E4E4E; /* Dark gray */
      bottom: 10px;
      right: calc(25% - 10px);
      animation-delay: 1s;
    }
    
    .loading-text h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
      color: #333;
    }
    
    .loading-text p {
      margin: 0;
      font-size: 0.9rem;
      color: #666;
    }
    
    .external-loading-animation.loading-complete {
      opacity: 0;
      pointer-events: none;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 0.6;
        transform: scale(0.8);
      }
      50% {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    /* Mobile responsiveness */
    @media (max-width: 768px) {
      .loading-animation-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
        padding: 1.5rem;
      }
      
      .jupyter-logo-spinner {
        width: 60px;
        height: 60px;
      }
    }
  `;
  document.head.appendChild(notebookLoaderStyles);
});

// Update your showNotebookLoader and hideNotebookLoader functions
window.showNotebookLoader = function() {
  // Check if loader exists, if not create it
  let loader = document.getElementById('notebookExternalLoader');
  if (!loader) {
    loader = document.createElement('div');
    loader.id = 'notebookExternalLoader';
    loader.className = 'external-loading-animation';
    loader.innerHTML = `
      <div class="loading-animation-content">
        <div class="jupyter-logo-spinner">
          <div class="jupyter-circles">
            <div class="jupyter-circle jupyter-circle-1"></div>
            <div class="jupyter-circle jupyter-circle-2"></div>
            <div class="jupyter-circle jupyter-circle-3"></div>
          </div>
        </div>
        <div class="loading-text">
          <h3>Loading Jupyter Notebook</h3>
          <p>Please wait while the notebook content is being prepared...</p>
        </div>
      </div>
    `;
    document.body.appendChild(loader);
  } else {
    loader.style.display = 'flex';
    loader.classList.remove('loading-complete');
  }
};

window.hideNotebookLoader = function() {
  const loader = document.getElementById('notebookExternalLoader');
  if (loader) {
    loader.classList.add('loading-complete');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
};

function loadProject(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  // Show loader immediately when loading a project
  if (window.showJupyterLoader) {
    window.showJupyterLoader();
  }
  
  // Rest of your loadProject code...
  
  // Update iframe onload to hide the loader
  const notebookUrl = getOptimizedNotebookUrl(project.notebookUrl);
  
  // Generate project HTML...
  projectContent.innerHTML = `
    <!-- Your existing HTML -->
    ${isPrivateRepo ? `
    <!-- Private Repository Message -->
    <!-- ... -->
    ` : `
    <!-- Maximum Width/Height Container for embedded content -->
    <div class="notebook-frame-container-max">
      <iframe 
        class="notebook-iframe" 
        id="notebookFrame" 
        src="${notebookUrl}" 
        allowfullscreen 
        onload="if(window.hideJupyterLoader) window.hideJupyterLoader()"
      ></iframe>
    </div>
    `}
    <!-- Rest of your HTML -->
  `;
  
  // Set up refresh notebook button
  const refreshButton = projectContent.querySelector('.refresh-notebook');
  if (refreshButton) {
    refreshButton.addEventListener('click', function() {
      const iframe = projectContent.querySelector('.notebook-iframe');
      if (iframe) {
        // Show loading animation again when refreshing
        if (window.showJupyterLoader) {
          window.showJupyterLoader();
        }
        iframe.src = iframe.src; // Refresh by reassigning the src
      }
    });
  }
  
  // Hide project explorer, show active project
  document.getElementById('project-explorer').classList.add('d-none');
  document.getElementById('active-project').classList.remove('d-none');
  
  // Scroll to top of active project
  window.scrollTo(0, document.getElementById('active-project').offsetTop - 100);
}

// Helper function to optimize notebook loading
function getOptimizedNotebookUrl(url) {
  // If GitHub URL, use nbviewer which is faster and doesn't count against API limits
  if (url.includes('github.com') && url.includes('.ipynb')) {
    return url.replace('github.com', 'nbviewer.org/github')
              .replace('/blob/', '/');
  }
  return url;
}

// Add these functions at the bottom of your portfolio.js file
// Consolidated Jupyter notebook loading system

// 1. Create a single global loader that works across the site
function createGlobalNotebookLoader() {
  // Only create the loader if it doesn't already exist
  if (!document.getElementById('globalNotebookLoader')) {
    const loader = document.createElement('div');
    loader.id = 'globalNotebookLoader';
    loader.className = 'global-notebook-loader';
    loader.innerHTML = `
      <div class="loader-content">
        <div class="jupyter-spinner">
          <div class="jupyter-circles">
            <div class="jupyter-circle circle-1"></div>
            <div class="jupyter-circle circle-2"></div>
            <div class="jupyter-circle circle-3"></div>
          </div>
        </div>
        <div class="loader-text">
          <h3>Loading Jupyter Notebook</h3>
          <p>Please wait while the content is being prepared...</p>
        </div>
      </div>
    `;
    
    // Add the loader to the body
    document.body.appendChild(loader);
    
    // Add the required CSS
    const style = document.createElement('style');
    style.textContent = `
      .global-notebook-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.92);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.4s ease, visibility 0.4s ease;
        visibility: hidden;
        opacity: 0;
      }
      
      .global-notebook-loader.visible {
        visibility: visible;
        opacity: 1;
      }
      
      .loader-content {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 2rem;
        max-width: 500px;
        width: 90%;
      }
      
      .jupyter-spinner {
        position: relative;
        width: 80px;
        height: 80px;
        flex-shrink: 0;
      }
      
      .jupyter-circles {
        position: relative;
        width: 100%;
        height: 100%;
        animation: jupyter-spin 2s linear infinite;
      }
      
      .jupyter-circle {
        position: absolute;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        animation: jupyter-pulse 1.5s ease-in-out infinite;
      }
      
      .circle-1 {
        background: #F37626; /* Jupyter orange */
        top: 0;
        left: calc(50% - 11px);
        animation-delay: 0s;
      }
      
      .circle-2 {
        background: #6E6E6E; /* Gray */
        bottom: 10px;
        left: calc(25% - 11px);
        animation-delay: 0.5s;
      }
      
      .circle-3 {
        background: #4E4E4E; /* Dark gray */
        bottom: 10px;
        right: calc(25% - 11px);
        animation-delay: 1s;
      }
      
      .loader-text {
        flex: 1;
      }
      
      .loader-text h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
        color: #333;
      }
      
      .loader-text p {
        margin: 0;
        font-size: 0.9rem;
        color: #666;
      }
      
      @keyframes jupyter-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes jupyter-pulse {
        0%, 100% {
          opacity: 0.6;
          transform: scale(0.85);
        }
        50% {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @media (max-width: 768px) {
        .loader-content {
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
          padding: 1.5rem;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// 2. Show the loader
function showJupyterLoader() {
  createGlobalNotebookLoader(); // Ensure loader exists
  const loader = document.getElementById('globalNotebookLoader');
  if (loader) {
    loader.classList.add('visible');
  }
}

// 3. Hide the loader
function hideJupyterLoader() {
  const loader = document.getElementById('globalNotebookLoader');
  if (loader) {
    loader.classList.remove('visible');
  }
}

// 4. Optimize notebook URL for faster loading
function getOptimizedNotebookUrl(url) {
  // Convert GitHub URLs to nbviewer for faster loading and no API limits
  if (url && url.includes('github.com') && url.includes('.ipynb')) {
    return url.replace('github.com', 'nbviewer.org/github')
              .replace('/blob/', '/');
  }
  return url;
}

// 5. Update loadProject function to use the optimized loading
function loadProject(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  // Show the loader immediately
  showJupyterLoader();
  
  const projectContent = document.getElementById('project-content');
  
  // Get current date in formatted style
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  // Check if it's a generative AI project with a complex structure
  const isGenerativeProject = project.category === 'generative';
  const isPrivateRepo = project.isPrivate === true;
  
  // Use optimized URL for faster loading
  const embedUrl = isGenerativeProject 
    ? project.githubUrl.replace('github.com', 'github1s.com') 
    : getOptimizedNotebookUrl(project.notebookUrl);
  
  // Generate the project HTML with proper onload handler
  projectContent.innerHTML = `
    <div class="project-article">
      <!-- Project Header -->
      <div class="project-article-header">
        <h1 class="project-article-title">${project.title}</h1>
        <div class="project-article-meta">
          <div class="project-meta-left">
            <div class="project-article-date">
              <i class="far fa-calendar-alt"></i> ${formattedDate}
            </div>
            <div class="project-article-tags">
              ${project.tags.map(tag => `<span class="badge ${isGenerativeProject ? 'bg-info' : 'bg-primary'}">${tag}</span>`).join('')}
            </div>
          </div>
          <div class="project-meta-right">
            <button class="project-info-btn toggle-description-btn" onclick="toggleDescription()">
              <i class="fas fa-info-circle"></i> Project Information
            </button>
          </div>
        </div>
      </div>
      
      <!-- Top Control Bar -->
      <div class="notebook-top-controls">
        <div class="notebook-info">
          <span class="notebook-author">Implementation by Leon Doungala, AI/ML Engineer</span>
        </div>
        <div class="notebook-actions">
          <a href="${project.githubUrl}" class="action-btn github-btn" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="${embedUrl}" class="action-btn fullscreen-btn" target="_blank">
            <i class="fas fa-external-link-alt"></i> Open in New Tab
          </a>
          <button class="action-btn refresh-btn refresh-notebook">
            <i class="fas fa-sync-alt"></i> Refresh
          </button>
          <button class="action-btn share-btn" onclick="shareProject('${project.title}', '${project.id}')">
            <i class="fas fa-share-alt"></i> Share Project
          </button>
        </div>
      </div>
      
      <!-- Label to indicate content type -->
      <div class="content-type-indicator">
        <i class="${isGenerativeProject ? 'fas fa-code' : 'fas fa-chart-line'}"></i>
        <span>${isGenerativeProject ? 'Exploring Project Code Structure' : 'Jupyter Notebook'}</span>
      </div>
      
      ${isPrivateRepo ? `
      <!-- Private Repository Message -->
      <div class="private-repo-message">
        <div class="private-repo-content">
          <div class="private-icon">
            <i class="fas fa-lock"></i>
          </div>
          <div class="private-text">
            <h3>Private Repository</h3>
            <p>This project's source code is stored in a private repository and requires authorized access.</p>
            <p>If you're interested in learning more about this project or requesting access, please contact me directly.</p>
            <a href="mailto:doungala.leon@gmail.com" class="btn-contact">
              <i class="fas fa-envelope"></i> Request Access
            </a>
          </div>
        </div>
      </div>
      ` : `
      <!-- Maximum Width/Height Container for embedded content -->
      <div class="notebook-frame-container-max">
        <iframe class="notebook-iframe" id="notebookFrame" src="${embedUrl}" allowfullscreen onload="hideJupyterLoader()"></iframe>
      </div>
      `}
      
      <!-- Project Information Panel remains the same -->
      <div class="project-description-panel" id="projectDescription">
        <div class="description-panel-content">
          <div class="panel-header">
            <h3>Project Details</h3>
            <button class="close-panel-btn" onclick="toggleDescription()">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="panel-body">
            ${project.detailedDescription}
            
            <div class="tech-section">
              <h4>Technologies</h4>
              <div class="tech-pills">
                ${project.tags.map(tag => {
                  const level = getTechLevel(tag);
                  return `<span class="tech-pill tech-${level}">${tag}</span>`;
                }).join('')}
              </div>
            </div>
            
            <div class="author-section">
              <h4>Implementation by</h4>
              <div class="author-info">
                <div class="author-name">Leon Doungala</div>
                <div class="author-title">AI/ML Engineer & Data Scientist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Set up refresh notebook button
  const refreshButton = projectContent.querySelector('.refresh-notebook');
  if (refreshButton) {
    refreshButton.addEventListener('click', function() {
      const iframe = projectContent.querySelector('.notebook-iframe');
      if (iframe) {
        // Show loading animation again when refreshing
        showJupyterLoader();
        iframe.src = iframe.src; // Refresh by reassigning the src
      }
    });
  }
  
  // Hide project explorer, show active project
  document.getElementById('project-explorer').classList.add('d-none');
  document.getElementById('active-project').classList.remove('d-none');
  
  // Scroll to top of active project
  window.scrollTo(0, document.getElementById('active-project').offsetTop - 100);
}

// Make the functions globally available
window.showJupyterLoader = showJupyterLoader;
window.hideJupyterLoader = hideJupyterLoader;

// Initialize the loader when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  createGlobalNotebookLoader();
});

