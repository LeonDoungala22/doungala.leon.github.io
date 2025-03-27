// =====================
// Portfolio.js
// =====================

// ---------------------
// Projects Data
// ---------------------
const projects = [
  {
    id: "customer-segmentation",
    title: "Customer Segmentation using K-Means",
    description: "Clustering analysis for customer segmentation using K-Means algorithm.",
    category: "ml",
    status: "ready", // Ready projects do not show status badge
    tags: ["K-Means", "Clustering", "Machine Learning", "scikit-learn"],
    image: "images/download (1).jpeg",
    // Note: This URL is already an nbviewer link
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/advanced-customer-segmentation-ai/blob/main/Customer_Segmentation_K_Means.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/advanced-customer-segmentation-ai/blob/main/Customer_Segmentation_K_Means.ipynb",
    detailedDescription: `
      <p>This project demonstrates how to implement customer segmentation using K-Means clustering in Python with scikit-learn. It groups customers based on similarities to target marketing campaigns effectively.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>K-Means Clustering</li>
        <li>Data Preprocessing and Feature Engineering</li>
        <li>Dimensionality Reduction</li>
        <li>Data Visualization</li>
      </ul>
      <h3>Business Impact</h3>
      <p>The analysis helps businesses understand different customer groups and optimize marketing strategies.</p>
    `
  },
  {
    id: "hr-analytics",
    title: "Human Resources Analytics",
    description: "PCA and clustering for HR data analysis to identify employee patterns.",
    category: "ml",
    status: "ready",
    tags: ["PCA", "Data Analysis", "HR Analytics", "Employee Retention"],
    image: "images/HR-Analytics.jpeg",
    notebookUrl: "https://nbviewer.org/github/leondoungala22/employee-clustering-analysis/blob/main/main.ipynb",
    githubUrl: "https://github.com/leondoungala22/employee-clustering-analysis/blob/main/main.ipynb",
    detailedDescription: `
      <p>This project uses PCA and clustering techniques to analyze HR data and identify employee patterns for better retention strategies.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Principal Component Analysis (PCA)</li>
        <li>Hierarchical Clustering</li>
        <li>Feature Importance Analysis</li>
        <li>Correlation Analysis</li>
      </ul>
      <h3>Business Applications</h3>
      <p>HR departments can use these insights to improve retention and employee satisfaction.</p>
    `
  },
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction and Characterization",
    description: "Ensemble learning methods for medical prediction of diabetes risk.",
    category: "ml",
    status: "review", // Under review: badge should appear
    tags: ["Ensemble Learning", "Medical ML", "Random Forest", "XGBoost"],
    image: "images/diabete.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Msc-Thesis-AI-ML-for-Diabetes-Characterization/blob/main/Diabetes_Prediction.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Msc-Thesis-AI-ML-for-Diabetes-Characterization/blob/main/Diabetes_Prediction.ipynb",
    detailedDescription: `
      <p>This project implements ensemble learning methods to predict diabetes risk using various health metrics.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Random Forest Classification</li>
        <li>XGBoost</li>
        <li>Feature Importance Analysis</li>
        <li>Cross-Validation</li>
        <li>Hyperparameter Tuning</li>
      </ul>
      <h3>Healthcare Applications</h3>
      <p>The model helps identify patients at high risk for early intervention.</p>
    `
  },
  {
    id: "heart-disease",
    title: "Heart Disease Prediction",
    description: "SVM and NLP techniques for medical diagnosis and risk assessment.",
    category: "ml",
    status: "review", // Under review: badge should appear
    tags: ["SVM", "Medical ML", "Classification", "scikit-learn"],
    image: "images/8_Main_Types_of_Heart_Disease.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(ML%20models)/SVM%20(Linear%20and%20non-linear)/Heart%20Disease%20Prediction/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(ML%20models)/SVM%20(Linear%20and%20non-linear)/Heart%20Disease%20Prediction/main.ipynb",
    detailedDescription: `
      <p>This project focuses on predicting heart disease risk using SVM and NLP methods.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Support Vector Machines (SVM)</li>
        <li>Feature Selection and Engineering</li>
        <li>Model Evaluation and Validation</li>
        <li>Medical Data Analysis</li>
      </ul>
      <h3>Healthcare Applications</h3>
      <p>The model assists in early diagnosis and risk stratification for heart disease.</p>
    `
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis on IMDb Reviews",
    description: "NLP-based classification of movie reviews using Naive Bayes.",
    category: "ml",
    status: "review", // Under review: badge should appear
    tags: ["NLP", "Naive Bayes", "Text Classification", "scikit-learn"],
    image: "images/sentiment-analysis.png",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn(ML)/Naive%20Bayes/Sentiment%20Analysis/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn(ML)/Naive%20Bayes/Sentiment%20Analysis/main.ipynb",
    detailedDescription: `
      <p>This project applies NLP techniques to classify IMDb reviews using Naive Bayes.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Text Preprocessing and Tokenization</li>
        <li>TF-IDF Feature Extraction</li>
        <li>Naive Bayes Classification</li>
        <li>Model Performance Evaluation</li>
      </ul>
      <h3>Business Applications</h3>
      <p>The approach can be adapted for brand monitoring and customer sentiment analysis.</p>
    `
  },
  {
    id: "breast-cancer",
    title: "Breast Cancer Classification",
    description: "KNN algorithm for diagnosing breast tumors as malignant or benign.",
    category: "ml",
    status: "review", // Under review: badge should appear
    tags: ["KNN", "Medical ML", "Classification", "scikit-learn"],
    image: "images/breast-cancer.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn(ML)/KNN/Breast%20Cancer%20Classification/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn(ML)/KNN/Breast%20Cancer%20Classification/main.ipynb",
    detailedDescription: `
      <p>This project uses the KNN algorithm to classify breast cancer tumors as malignant or benign.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>K-Nearest Neighbors</li>
        <li>Medical Image Analysis</li>
        <li>Hyperparameter Optimization</li>
        <li>Model Evaluation Metrics</li>
      </ul>
      <h3>Healthcare Impact</h3>
      <p>Accurate detection can aid early diagnosis and improve patient outcomes.</p>
    `
  },
  {
    id: "salary-prediction",
    title: "Salary Prediction",
    description: "Linear regression model for salary forecasting based on experience and skills.",
    category: "ml",
    status: "review", // Under review: badge should appear
    tags: ["Linear Regression", "Forecasting", "scikit-learn"],
    image: "images/salary-prediction.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn(ML)/Linear%20Regression/Salary%20Prediction/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn(ML)/Linear%20Regression/Salary%20Prediction/main.ipynb",
    detailedDescription: `
      <p>This project develops a linear regression model to predict salaries using experience and skill data.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Linear Regression</li>
        <li>Feature Engineering</li>
        <li>Data Visualization</li>
        <li>Model Validation</li>
      </ul>
      <h3>Business Applications</h3>
      <p>The model helps HR departments and recruiters set fair salary ranges.</p>
    `
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    description: "Decision Trees for detecting fraudulent transactions in credit card data.",
    category: "ml",
    status: "ready", // Ready projects appear first
    tags: ["Decision Trees", "Anomaly Detection", "Financial ML"],
    image: "images/1637FraudDetection.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Advanced-Credit-Card-Fraud-Detection/blob/main/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Advanced-Credit-Card-Fraud-Detection/blob/main/main.ipynb",
    detailedDescription: `
      <p>This project focuses on detecting fraudulent credit card transactions using decision tree algorithms.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Decision Tree Classification</li>
        <li>Handling Imbalanced Data</li>
        <li>Feature Importance</li>
        <li>Cost-Sensitive Learning</li>
      </ul>
      <h3>Financial Applications</h3>
      <p>It assists in real-time fraud detection and prevention, protecting customers and reducing losses.</p>
    `
  },
  {
    id: "housing-prices",
    title: "Predicting Housing Prices",
    description: "Decision Tree Regressor for real estate price prediction.",
    category: "ml",
    status: "review", // Under review: badge should appear
    tags: ["Decision Tree Regression", "Real Estate", "Forecasting"],
    image: "images/housing-prices.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn(ML)/Decision%20Tree%20Regression/Housing%20Price%20Prediction/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn(ML)/Decision%20Tree%20Regression/Housing%20Price%20Prediction/main.ipynb",
    detailedDescription: `
      <p>This project uses a decision tree regression model to predict housing prices based on various property features.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Decision Tree Regression</li>
        <li>Feature Engineering</li>
        <li>Cross-Validation</li>
        <li>Model Evaluation</li>
      </ul>
      <h3>Real Estate Applications</h3>
      <p>The model assists in estimating property values for investors and real estate professionals.</p>
    `
  },
  {
    id: "spam-email",
    title: "Spam Email Classification",
    description: "Logistic Regression for filtering spam emails from legitimate communications.",
    category: "ml",
    status: "review", // Under review: badge should appear
    tags: ["Logistic Regression", "NLP", "Email Filtering"],
    image: "images/spam-detection.jpeg",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn(ML)/Logistic%20Regression/Spam%20Email%20Classification/main.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn(ML)/Logistic%20Regression/Spam%20Email%20Classification/main.ipynb",
    detailedDescription: `
      <p>This project implements logistic regression to classify emails as spam or legitimate.</p>
      <h3>Key Techniques</h3>
      <ul>
        <li>Text Preprocessing</li>
        <li>Vectorization</li>
        <li>Logistic Regression</li>
        <li>Model Evaluation</li>
      </ul>
      <h3>Applications</h3>
      <p>The model can be used to build effective email filters that protect users from spam and phishing.</p>
    `
  },
  {
    id: "virtual-doctor",
    title: "Virtual Doctor AI Assistant",
    description: "AI-powered system for medical guidance based on symptoms.",
    category: "generative",
    status: "ready",
    tags: ["LangChain", "Medical AI", "NLP", "Generative AI"],
    image: "images/virtual-doctor-ai.png",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/AI-Health-Assistant/blob/main/AI_Health_Assistant.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/AI-Health-Assistant",
    detailedDescription: `
      <p>The Virtual Doctor AI Assistant provides medical guidance based on user symptoms using a conversational AI interface.</p>
      <h3>Key Technologies</h3>
      <ul>
        <li>LangChain Framework</li>
        <li>Large Language Models</li>
        <li>Medical Knowledge Integration</li>
        <li>Conversational AI</li>
      </ul>
      <h3>Note</h3>
      <p>This system is for educational purposes only and does not replace professional medical advice.</p>
    `
  },
  {
    id: "ats-system",
    title: "AI Semantic ATS System for CV Matching",
    description: "RAG-based system for CV-job description matching.",
    category: "generative",
    status: "ready",
    tags: ["RAG", "Resume Analysis", "NLP", "Semantic Search"],
    image: "images/imag1.png",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/RAG-ATS-Semantic-matching-search-cv-ai-v1.0.0/blob/main/ATS_System.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/RAG-ATS-Semantic-matching-search-cv-ai-v1.0.0",
    detailedDescription: `
      <p>This project implements a semantic ATS that matches CVs with job descriptions using RAG.</p>
      <h3>Key Technologies</h3>
      <ul>
        <li>Retrieval Augmented Generation (RAG)</li>
        <li>Semantic Search</li>
        <li>Document Processing</li>
        <li>Vector Embeddings</li>
      </ul>
      <h3>Applications</h3>
      <p>The system assists recruiters in identifying qualified candidates by going beyond simple keyword matching.</p>
    `
  },
  {
    id: "diabetes-chatbot",
    title: "Conversational AI for Diabetes Prediction",
    description: "Medical assistant using RAG workflows for diabetes analysis.",
    category: "generative",
    status: "ready",
    tags: ["RAG", "Healthcare AI", "Conversational AI", "LangChain"],
    image: "images/Screenshot 2025-01-02 at 21.08.13.png",
    notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Msc-Thesis-AI-ML-for-Diabetes-Characterization/blob/main/Diabetes_Chatbot.ipynb",
    githubUrl: "https://github.com/LeonDoungala22/Msc-Thesis-AI-ML-for-Diabetes-Characterization",
    detailedDescription: `
      <p>This project integrates conversational AI with diabetes prediction models to create an interactive system that assesses diabetes risk.</p>
      <h3>Key Technologies</h3>
      <ul>
        <li>RAG (Retrieval Augmented Generation)</li>
        <li>LangChain Workflow Orchestration</li>
        <li>Diabetes Prediction Models</li>
        <li>Conversational UI</li>
      </ul>
      <h3>Applications</h3>
      <p>This system can be deployed to educate patients about diabetes risk and prevention.</p>
    `
  }
];

// ---------------------
// Helper Functions
// ---------------------

// Embed notebook URL using nbviewer for robustness. For generative projects, use GitHub1s.
function getEmbedUrl(project) {
  if (project.category === 'generative') {
    return project.githubUrl.replace('github.com', 'github1s.com');
  }
  if (project.notebookUrl.indexOf("nbviewer.org") !== -1) {
    return project.notebookUrl;
  }
  return project.notebookUrl.replace('github.com', 'nbviewer.org/github').replace('/blob/', '/');
}

// Generate HTML for tech level indicators (if used in the project info panel)
function generateTechLevels(tags) {
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

// ---------------------
// Main Function: loadProject
// ---------------------
function loadProject(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  // Show loader immediately
  showJupyterLoader();
  
  const projectContent = document.getElementById('project-content');
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  
  const isPrivateRepo = project.isPrivate === true;
  const embedUrl = getEmbedUrl(project);
  
  projectContent.innerHTML = `
    <div class="project-article">
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
      
      <div class="content-type-indicator">
        <i class="${project.category === 'generative' ? 'fas fa-code' : 'fas fa-chart-line'}"></i>
        <span>${project.category === 'generative' ? 'Exploring Project Code Structure' : 'Jupyter Notebook'}</span>
      </div>
      
      ${
        isPrivateRepo
          ? `<div class="private-repo-message">
               <div class="private-repo-content">
                 <div class="private-icon"><i class="fas fa-lock"></i></div>
                 <div class="private-text">
                   <h3>Private Repository</h3>
                   <p>This project's source code is stored in a private repository and requires authorized access.</p>
                   <p>If you're interested in learning more or requesting access, please contact me directly.</p>
                   <a href="mailto:doungala.leon@gmail.com" class="btn-contact">
                     <i class="fas fa-envelope"></i> Request Access
                   </a>
                 </div>
               </div>
             </div>`
          : `<div class="notebook-frame-container-max">
               <iframe class="notebook-iframe" id="notebookFrame" src="${embedUrl}" allowfullscreen onload="hideJupyterLoader()"></iframe>
               <button class="notebook-fullscreen-toggle" title="Toggle fullscreen mode">
                 <i class="fas fa-expand"></i>
               </button>
             </div>`
      }
      
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
                ${generateTechLevels(project.tags)}
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
  
  const refreshButton = projectContent.querySelector('.refresh-notebook');
  if (refreshButton) {
    refreshButton.addEventListener('click', function() {
      const iframe = projectContent.querySelector('.notebook-iframe');
      if (iframe) {
        showJupyterLoader();
        iframe.src = iframe.src;
      }
    });
  }
  
  document.getElementById('project-explorer').classList.add('d-none');
  document.getElementById('active-project').classList.remove('d-none');
  window.scrollTo(0, document.getElementById('active-project').offsetTop - 100);
}

// ---------------------
// Populate Project Cards
// ---------------------
function populateProjects(gridId, projectsList) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  
  grid.innerHTML = '';
  
  // Sort so that "ready" projects come first
  projectsList.sort((a, b) => {
    if (a.status.toLowerCase() === "ready" && b.status.toLowerCase() !== "ready") return -1;
    if (a.status.toLowerCase() !== "ready" && b.status.toLowerCase() === "ready") return 1;
    return 0;
  });
  
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
    
    const colorVariant = index % 4;
    projectCard.classList.add(`card-variant-${colorVariant}`);
    
    const displayTags = project.tags.slice(0, 3);
    const remainingTagsCount = project.tags.length > 3 ? project.tags.length - 3 : 0;
    
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image || 'images/placeholder.jpg'}" alt="${project.title}" loading="lazy">
        <div class="project-category ${project.category === 'generative' ? 'cat-gen' : 'cat-ml'}">
          ${project.category === 'generative' ? 'Generative AI' : 'Machine Learning'}
        </div>
        ${
          // Display Under Review badge for ML projects with status "review" (except customer-segmentation)
          (project.category === 'ml' &&
           project.status.toLowerCase() === 'review' &&
           project.id !== 'customer-segmentation')
            ? `<div class="project-status-badge"><i class="fas fa-clock"></i> Under Review</div>`
            : ''
        }
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

// ---------------------
// Stats Counters and Search Functionality
// ---------------------
function animateCounter(elementId, targetValue) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  let currentValue = 0;
  const duration = 1500;
  const stepTime = 30;
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

function updateStatsCounters() {
  const totalProjects = projects.length;
  const mlProjects = projects.filter(p => p.category === 'ml').length;
  const genProjects = projects.filter(p => p.category === 'generative').length;
  
  animateCounter('totalProjects', totalProjects);
  animateCounter('mlProjects', mlProjects);
  animateCounter('genProjects', genProjects);
}

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
  
  ['projectGrid', 'mlProjectGrid', 'genProjectGrid'].forEach(tabId => {
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

// ---------------------
// Sharing and Navigation Functions
// ---------------------
function shareProject(title, id) {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: `Check out this project: ${title}`,
      url: window.location.href.split('#')[0] + `?project=${id}`
    }).catch(err => console.error('Share failed:', err));
  } else {
    alert('Use the copy link function to share this project');
  }
}

function copyLink(id) {
  const linkToCopy = window.location.href.split('#')[0] + `?project=${id}`;
  navigator.clipboard.writeText(linkToCopy)
    .then(() => {
      const notification = document.createElement('div');
      notification.className = 'copy-notification';
      notification.innerHTML = '<i class="fas fa-check"></i> Link copied to clipboard';
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 3000);
    })
    .catch(err => console.error('Could not copy text:', err));
}

function shareNotebook(title, notebookUrl) {
  if (navigator.share) {
    navigator.share({
      title: `Jupyter Notebook: ${title}`,
      text: `Check out this data science notebook: ${title}`,
      url: notebookUrl
    }).catch(err => console.error('Could not share notebook:', err));
  } else {
    navigator.clipboard.writeText(notebookUrl)
      .then(() => {
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.innerHTML = '<i class="fas fa-check"></i> Notebook URL copied to clipboard';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
      })
      .catch(err => {
        console.error('Could not copy notebook URL:', err);
        alert('Please copy this URL manually: ' + notebookUrl);
      });
  }
}

function updateMainNavLink() {
  const portfolioLinks = document.querySelectorAll('a[href="_portfolio.html"]');
  portfolioLinks.forEach(link => link.href = "ml_and_ds_portfolio.html");
}

// ---------------------
// Global Notebook Loader (nbviewer-based, no GitHub API call)
// ---------------------
function createGlobalNotebookLoader() {
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
    document.body.appendChild(loader);
    
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
        background: #F37626;
        top: 0;
        left: calc(50% - 11px);
        animation-delay: 0s;
      }
      .circle-2 {
        background: #6E6E6E;
        bottom: 10px;
        left: calc(25% - 11px);
        animation-delay: 0.5s;
      }
      .circle-3 {
        background: #4E4E4E;
        bottom: 10px;
        right: calc(25% - 11px);
        animation-delay: 1s;
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
        0%, 100% { opacity: 0.6; transform: scale(0.85); }
        50% { opacity: 1; transform: scale(1); }
      }
      @media (max-width: 768px) {
        .loader-content { flex-direction: column; gap: 1.5rem; text-align: center; }
      }
    `;
    document.head.appendChild(style);
  }
}

function showJupyterLoader() {
  createGlobalNotebookLoader();
  const loader = document.getElementById('globalNotebookLoader');
  if (loader) loader.classList.add('visible');
}

function hideJupyterLoader() {
  const loader = document.getElementById('globalNotebookLoader');
  if (loader) loader.classList.remove('visible');
}

// ---------------------
// Toggle Project Description Panel
// ---------------------
function toggleDescription() {
  const panel = document.getElementById('projectDescription');
  if (panel) panel.classList.toggle('panel-open');
}

// ---------------------
// Initialization (DOMContentLoaded)
// ---------------------
document.addEventListener('DOMContentLoaded', function() {
  updateMainNavLink();
  
  if (document.getElementById('projectGrid')) {
    populateProjects('projectGrid', projects);
    populateProjects('mlProjectGrid', projects.filter(p => p.category === 'ml'));
    populateProjects('genProjectGrid', projects.filter(p => p.category === 'generative'));
    updateStatsCounters();
  }
  
  const backBtn = document.getElementById('back-to-projects');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      document.getElementById('active-project').classList.add('d-none');
      document.getElementById('project-explorer').classList.remove('d-none');
      window.scrollTo(0, document.getElementById('project-explorer').offsetTop - 100);
    });
  }
  
  const projectSearch = document.getElementById('projectSearch');
  if (projectSearch) {
    projectSearch.addEventListener('input', function(e) {
      filterProjects(e.target.value.toLowerCase());
    });
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  if (projectId) {
    setTimeout(() => loadProject(projectId), 500);
  }
  
  if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#4285f4" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#4285f4", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: true, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
        modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
      }
    });
  }
  
  createGlobalNotebookLoader();
});

// ---------------------
// Fullscreen Toggle for Notebook Iframe
// ---------------------
document.addEventListener('click', function(e) {
  if (e.target.matches('.notebook-fullscreen-toggle') || e.target.closest('.notebook-fullscreen-toggle')) {
    const container = document.querySelector('.notebook-frame-container-max');
    if (container) {
      container.classList.toggle('fullscreen-mode');
      const btn = e.target.closest('.notebook-fullscreen-toggle');
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = container.classList.contains('fullscreen-mode') ? 'fas fa-compress' : 'fas fa-expand';
      }
    }
  }
});
