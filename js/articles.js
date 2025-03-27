// =====================
// portfolio.js (Complete)
// =====================

// ---------------------
// Projects Data
// ---------------------
const projects = [
    {
      id: "customer-segmentation",
      title: "Customer Segmentation with K-Means, PCA, and AI-Driven Marketing",
      description: "A comprehensive project combining K-Means clustering, PCA for dimensionality reduction, and generative AI to create personalized marketing recommendations.",
      category: "ml",
      status: "ready",
      tags: ["K-Means", "PCA", "Cosine Similarity", "Clustering", "Machine Learning", "scikit-learn", "LangChain", "OpenAI"],
      image: "images/download (1).jpeg",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/advanced-customer-segmentation-ai/blob/main/Customer_Segmentation_K_Means.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/advanced-customer-segmentation-ai/blob/main/Customer_Segmentation_K_Means.ipynb",
      detailedDescription: `
        <p>This project demonstrates sophisticated customer segmentation techniques by integrating K-Means clustering, PCA for dimensionality reduction, and AI-driven marketing recommendations. The analysis of the Mall Customers dataset identifies distinct customer groups for targeted marketing strategies.</p>
        <h3>Key Techniques</h3>
        <ul>
          <li>K-Means Clustering</li>
          <li>Principal Component Analysis (PCA)</li>
          <li>Cosine Similarity for measuring cluster similarity</li>
          <li>Generative AI via LangChain &amp; OpenAI</li>
          <li>Data Preprocessing &amp; Visualization</li>
        </ul>
        <h3>Business Impact</h3>
        <p>Optimizes marketing strategies by identifying distinct customer segments and tailoring communications to drive engagement and conversion.</p>
      `
    },
    {
      id: "hr-analytics",
      title: "HR Analytics: Employee Segmentation with PCA and K-Means",
      description: "PCA simplifies HR data while K-Means clustering with cosine similarity segments employees by demographics, compensation, and satisfaction.",
      category: "ml",
      status: "ready",
      tags: ["PCA", "K-Means", "Clustering", "HR Analytics", "Employee Retention"],
      image: "images/HR-Analytics.jpeg",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/employee-clustering-analysis/blob/main/main.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/employee-clustering-analysis/blob/main/main.ipynb",
      detailedDescription: `
        <p>This project leverages PCA and K-Means clustering with cosine similarity to analyze HR data and identify distinct employee segments.</p>
        <h3>Key Techniques</h3>
        <ul>
          <li>Principal Component Analysis (PCA)</li>
          <li>K-Means Clustering with Cosine Similarity</li>
          <li>Feature Importance &amp; Correlation Analysis</li>
        </ul>
        <h3>Business Applications</h3>
        <p>Provides actionable insights to optimize HR strategies and improve employee retention.</p>
      `
    },
    {
      id: "diabetes-prediction",
      title: "Diabetes Prediction and Characterization",
      description: "Ensemble learning methods for medical prediction of diabetes risk.",
      category: "ml",
      status: "review",
      tags: ["Ensemble Learning", "Medical ML", "Random Forest", "XGBoost"],
      image: "images/diabete.jpeg",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Msc-Thesis-AI-ML-for-Diabetes-Characterization/blob/main/Diabetes_Prediction.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/Msc-Thesis-AI-ML-for-Diabetes-Characterization/blob/main/Diabetes_Prediction.ipynb",
      detailedDescription: `
        <p>This project implements ensemble learning methods to predict diabetes risk based on patient health metrics.</p>
        <h3>Key Techniques</h3>
        <ul>
          <li>Random Forest</li>
          <li>XGBoost</li>
          <li>Feature Importance Analysis</li>
          <li>Cross-Validation</li>
        </ul>
        <h3>Healthcare Applications</h3>
        <p>Helps providers identify high-risk patients for early intervention.</p>
      `
    },
    {
      id: "heart-disease",
      title: "Heart Disease Prediction",
      description: "SVM and NLP techniques for medical diagnosis and risk assessment.",
      category: "ml",
      status: "review",
      tags: ["SVM", "Medical ML", "Classification", "scikit-learn"],
      image: "images/8_Main_Types_of_Heart_Disease.jpeg",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/SVM%20(%20Linear%20and%20non%20linear%20)/Heart%20Disease%20Prediction/main.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/SVM%20(%20Linear%20and%20non%20linear%20)/Heart%20Disease%20Prediction/main.ipynb",
      detailedDescription: `
        <p>This project focuses on heart disease prediction using SVM and explores various medical indicators to assess risk factors.</p>
        <h3>Key Techniques</h3>
        <ul>
          <li>Support Vector Machines (SVM)</li>
          <li>Feature Selection and Engineering</li>
          <li>Model Evaluation and Validation</li>
          <li>Medical Data Analysis</li>
        </ul>
        <h3>Healthcare Applications</h3>
        <p>Assists in early diagnosis and risk stratification for heart disease patients.</p>
      `
    },
    {
      id: "sentiment-analysis",
      title: "Sentiment Analysis on IMDb Reviews",
      description: "NLP-based classification of movie reviews using Naive Bayes.",
      category: "ml",
      status: "review",
      tags: ["NLP", "Naive Bayes", "Text Classification", "scikit-learn"],
      image: "images/sentiment-analysis.png",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Naive%20Bayes/Sentiment%20Analysis%20on%20IMDb%20Movie%20Reviews/Bernoulli%20Naive%20Bayes/main.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Naive%20Bayes/Sentiment%20Analysis%20on%20IMDb%20Movie%20Reviews/Bernoulli%20Naive%20Bayes/main.ipynb",
      detailedDescription: `
        <p>This project applies NLP techniques to classify IMDb reviews using Naive Bayes algorithms.</p>
        <h3>Key Techniques</h3>
        <ul>
          <li>Text Preprocessing and Tokenization</li>
          <li>TF-IDF Feature Extraction</li>
          <li>Naive Bayes Classification</li>
          <li>Model Performance Evaluation</li>
        </ul>
        <h3>Business Applications</h3>
        <p>Useful for brand monitoring, customer feedback analysis, and social media sentiment tracking.</p>
      `
    },
    {
      id: "breast-cancer",
      title: "Breast Cancer Classification",
      description: "KNN algorithm for diagnosing breast tumors as malignant or benign.",
      category: "ml",
      status: "review",
      tags: ["KNN", "Medical ML", "Classification", "scikit-learn"],
      image: "images/breast-cancer.jpeg",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/K-Nearest%20Neighbors%20(KNN)/Breast%20Cancer%20Classification%20with%20K-Nearest%20Neighbors%20(KNN)/main.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/K-Nearest%20Neighbors%20(KNN)/Breast%20Cancer%20Classification%20with%20K-Nearest%20Neighbors%20(KNN)/main.ipynb",
      detailedDescription: `
        <p>This project uses the K-Nearest Neighbors (KNN) algorithm to classify breast cancer tumors as malignant or benign.</p>
        <h3>Key Techniques</h3>
        <ul>
          <li>K-Nearest Neighbors</li>
          <li>Medical Image Feature Analysis</li>
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
      status: "review",
      tags: ["Linear Regression", "Forecasting", "scikit-learn"],
      image: "images/salary-prediction.jpeg",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Linear%20Regression/Salary%20Prediction/main.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Linear%20Regression/Salary%20Prediction/main.ipynb",
      detailedDescription: `
        <p>This project develops a linear regression model to predict salaries using years of experience, education, and other factors.</p>
        <h3>Key Techniques</h3>
        <ul>
          <li>Linear Regression</li>
          <li>Feature Engineering</li>
          <li>Data Visualization</li>
          <li>Model Validation</li>
        </ul>
        <h3>Business Applications</h3>
        <p>Helps HR departments set fair salary ranges and improve compensation strategies.</p>
      `
    },
    {
      id: "fraud-detection",
      title: "Credit Card Fraud Detection",
      description: "Advanced ML techniques using Decision Trees and Random Forest with SMOTE and PCA to detect fraud in a highly imbalanced credit card dataset.",
      category: "ml",
      status: "ready",
      tags: ["Decision Trees", "Random Forest", "Anomaly Detection", "Financial ML"],
      image: "images/1637FraudDetection.jpeg",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Advanced-Credit-Card-Fraud-Detection/blob/main/main.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/Advanced-Credit-Card-Fraud-Detection/blob/main/main.ipynb",
      detailedDescription: `
        <p>This project implements advanced machine learning techniques to detect fraudulent credit card transactions. Using PCA-transformed features, SMOTE for balancing, and tuning both Decision Tree and Random Forest classifiers, the approach is designed for high precision and recall on an extremely imbalanced dataset.</p>
        <h3>Key Techniques</h3>
        <ul>
          <li>Decision Tree &amp; Random Forest Classification with Hyperparameter Tuning</li>
          <li>Data Preprocessing with Robust Scaling and SMOTE Oversampling</li>
          <li>PCA for Feature Transformation</li>
          <li>Model Evaluation: Confusion Matrix, ROC-AUC, and Precision-Recall Analysis</li>
        </ul>
        <h3>Financial Applications</h3>
        <p>This approach accurately identifies fraudulent transactions, reducing financial losses and enhancing security.</p>
      `
    },
    {
      id: "housing-prices",
      title: "Predicting Housing Prices",
      description: "Decision Tree Regressor for real estate price prediction.",
      category: "ml",
      status: "review",
      tags: ["Decision Tree Regression", "Real Estate", "Forecasting"],
      image: "images/housing-prices.jpeg",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Decision%20Trees/Predicting%20Housing%20Prices%20with%20Gaussian%20Naive%20Bayes/main.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/Decision%20Trees/Predicting%20Housing%20Prices%20with%20Gaussian%20Naive%20Bayes/main.ipynb",
      detailedDescription: `
        <p>This project develops a Decision Tree Regression model to predict housing prices based on property features.</p>
        <h3>Key Techniques</h3>
        <ul>
          <li>Decision Tree Regression</li>
          <li>Feature Engineering</li>
          <li>Cross-Validation</li>
          <li>Model Evaluation</li>
        </ul>
        <h3>Real Estate Applications</h3>
        <p>Helps investors and real estate professionals estimate property values more accurately.</p>
      `
    },
    {
      id: "spam-email",
      title: "Spam Email Classification",
      description: "Logistic Regression for filtering spam emails from legitimate communications.",
      category: "ml",
      status: "review",
      tags: ["Logistic Regression", "NLP", "Email Filtering"],
      image: "images/spam-detection.jpeg",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/%20Logistic%20Regression%20(sigmoid%20functions)/Spam%20Email%20Classification/main.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/Practical_AI_ML_DL_DataScience_Portfolio/blob/main/code/Module%202_Scikit-Learn%2C%20Basic%20ML%20Models%2C%20EDA%2C%20and%20ML%20Practice%20Projects/Practical%20projects%20(%20ML%20models%20)%20%20/%20Logistic%20Regression%20(sigmoid%20functions)/Spam%20Email%20Classification/main.ipynb",
      detailedDescription: `
        <p>This project implements Logistic Regression to classify emails as spam or legitimate based on their content and headers.</p>
        <h3>Key Techniques</h3>
        <ul>
          <li>Logistic Regression</li>
          <li>Text Preprocessing and Vectorization</li>
          <li>Model Evaluation and Threshold Optimization</li>
          <li>Confusion Matrix Analysis</li>
        </ul>
        <h3>Practical Applications</h3>
        <p>Can be used to develop email filters that protect users from phishing and unwanted marketing communications.</p>
      `
    },
    {
      id: "virtual-doctor",
      title: "AI Health Assistant",
      description: "Generative AI system using LangChain, Onpai, and advanced techniques to deliver actionable health insights.",
      category: "generative",
      status: "ready",
      tags: ["LangChain", "Generative AI", "Onpai"],
      image: "images/virtual-doctor-ai.png",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/AI-Health-Assistant/blob/main/AI_Health_Assistant.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/AI-Health-Assistant",
      detailedDescription: `
        <p>The AI Health Insight Engine leverages LangChain and Onpai to generate interactive, AI-driven health insights based on user inputs. This system provides dynamic guidance for medical inquiries while showcasing my expertise as an AI/ML Engineer.</p>
        <h3>Key Technologies</h3>
        <ul>
          <li>LangChain</li>
          <li>Generative AI</li>
          <li>Onpai Integration</li>
        </ul>
        <h3>Disclaimer</h3>
        <p>This system is for educational and experimental purposes only and does not replace professional medical advice.</p>
      `
    },
    {
      id: "ats-system",
      title: "TalentMatch ATS: Semantic CV Matching and Semantic Search with RAG",
      description: "AI Applicant Tracking System utilizing semantic search and Retrieval-Augmented Generation (RAG) to match resumes effectively with job descriptions.",
      category: "generative",
      status: "ready",
      tags: ["Semantic Search", "RAG", "OpenAI", "LangChain", "Vector Search", "Anthropic"],
      image: "images/imag1.png",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/RAG-ATS-Semantic-matching-search-cv-ai-v1.0.0/blob/main/ATS_System.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/RAG-ATS-Semantic-matching-search-cv-ai-v1.0.0",
      detailedDescription: `
        <p>TalentMatch ATS is a sophisticated AI-driven Applicant Tracking System designed to intelligently match resumes with job descriptions using advanced semantic search and Retrieval-Augmented Generation (RAG). Leveraging OpenAI LLMs and LangChain, it automates CV parsing, semantic similarity analysis, and candidate scoring to enhance recruitment efficiency and accuracy.</p>
        <h3>Key Technologies</h3>
        <ul>
          <li>Retrieval-Augmented Generation (RAG)</li>
          <li>Semantic Vector Search</li>
          <li>OpenAI (GPT-4o, text-embedding-ada-002)</li>
          <li>LangChain</li>
          <li>Vector Databases (Chroma)</li>
        </ul>
        <h3>Applications</h3>
        <p>Streamlines recruitment by intelligently identifying top candidates beyond keyword matching, optimizing hiring processes.</p>
      `
    },
    {
      id: "diabetes-chatbot",
      title: "Advanced Predictive, Conversational AI & Semantic Search for Diabetes Prediction",
      description: "Medical assistant using advanced NLP workflows, semantic search, XGBoost, and Random Forest for diabetes analysis.",
      category: "generative",
      status: "private",
      tags: ["RAG", "Semantic Search", "Healthcare AI", "Conversational AI", "LangChain", "Machine Learning", "XGBoost", "Random Forest"],
      image: "images/Screenshot 2025-01-02 at 21.08.13.png",
      notebookUrl: "https://nbviewer.org/github/LeonDoungala22/Msc-Thesis-AI-ML-for-Diabetes-Characterization/blob/main/Diabetes_Chatbot.ipynb",
      githubUrl: "https://github.com/LeonDoungala22/Msc-Thesis-AI-ML-for-Diabetes-Characterization",
      detailedDescription: `
        <p>This project integrates advanced conversational AI with diabetes prediction models—leveraging RAG workflows, semantic search, and XGBoost alongside Random Forest—to create an interactive system that assesses diabetes risk and offers actionable insights.</p>
        <h3>Key Technologies</h3>
        <ul>
          <li>Retrieval-Augmented Generation (RAG)</li>
          <li>Semantic Search</li>
          <li>LangChain Workflow Orchestration</li>
          <li>Diabetes Prediction Models</li>
          <li>XGBoost</li>
          <li>Random Forest</li>
          <li>Conversational UI</li>
        </ul>
        <h3>Applications</h3>
        <p>This system can be deployed to educate patients on diabetes risk, support early intervention strategies, and enhance overall patient engagement.</p>
      `
    }
  ];
  
  // ---------------------
  // Helper: Convert GitHub URL to an embeddable nbviewer URL (or use GitHub1s for generative projects)
  // ---------------------
  function getEmbedUrl(project) {
    if (project.category === 'generative') {
      // For generative projects, use GitHub1s to show code structure
      return project.githubUrl.replace('github.com', 'github1s.com');
    }
    if (project.notebookUrl.startsWith("https://nbviewer.org/")) {
      return project.notebookUrl;
    }
    if (project.notebookUrl.startsWith("https://github.com/")) {
      let nbUrl = project.notebookUrl.replace('https://github.com/', 'https://nbviewer.org/github/');
      nbUrl = nbUrl.replace('/blob/', '/');
      return nbUrl;
    }
    return project.notebookUrl;
  }
  
  // ---------------------
  // Helper: Generate a Status Badge using configuration object for flexibility
  // ---------------------
  const statusStyles = {
    review: {
      text: "Under Review",
      icon: "fas fa-clock",
      background: "rgba(255,193,7,0.9)"
    },
    ready: {
      text: "Ready",
      icon: "fas fa-check-circle",
      background: "rgba(0,230,118,0.9)"
    },
    private: {
      text: "Private",
      icon: "fas fa-lock",
      background: "rgba(244,67,54,0.9)"
    }
  };
  
  function getStatusBadge(status) {
    const key = status.toLowerCase();
    const style = statusStyles[key];
    if (style) {
      return `
        <div class="project-status-badge" role="status" aria-label="${style.text}" style="position:absolute; top:15px; left:15px; background: ${style.background}; color: white; font-weight:600; padding:5px 12px; border-radius:20px; z-index:4;">
          <i class="${style.icon}" aria-hidden="true"></i> ${style.text}
        </div>
      `;
    }
    return '';
  }
  
  // ---------------------
  // Cache Frequently Used DOM Elements for Performance
  // ---------------------
  const domCache = {
    projectExplorer: document.getElementById('project-explorer'),
    activeProject: document.getElementById('active-project'),
    projectContent: document.getElementById('project-content'),
    projectSearch: document.getElementById('projectSearch')
  };
  
  // ---------------------
  // Debounce Function for Search Input
  // ---------------------
  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // ---------------------
  // Debounced Filter Function
  // ---------------------
  const debouncedFilterProjects = debounce(filterProjects, 300);
  
  // ---------------------
  // loadProject: Display project details in the active section (with ARIA improvements and DOM caching)
  // ---------------------
  function loadProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
  
    showJupyterLoader();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const embedUrl = getEmbedUrl(project);
  
    domCache.projectContent.innerHTML = `
      <div class="project-article">
        <div class="project-article-header">
          <h1 class="project-article-title">${project.title}</h1>
          <div class="project-article-meta">
            <div class="project-meta-left">
              <div class="project-article-date">
                <i class="far fa-calendar-alt" aria-hidden="true"></i> ${formattedDate}
              </div>
              <div class="project-article-tags">
                ${project.tags.map(tag => `<span class="badge ${project.category === 'generative' ? 'bg-info' : 'bg-primary'}">${tag}</span>`).join('')}
              </div>
            </div>
            <div class="project-meta-right">
              <button class="project-info-btn toggle-description-btn" onclick="toggleDescription()" aria-label="Toggle project information">
                <i class="fas fa-info-circle" aria-hidden="true"></i> Project Information
              </button>
            </div>
          </div>
        </div>
        
        <div class="notebook-top-controls">
          <div class="notebook-info">
            <span class="notebook-author">Implementation by Leon Doungala, AI/ML Engineer</span>
          </div>
          <div class="notebook-actions">
            <a href="${project.githubUrl}" class="action-btn github-btn" target="_blank" role="button" aria-label="Open GitHub repository">
              <i class="fab fa-github" aria-hidden="true"></i> GitHub
            </a>
            <a href="${embedUrl}" class="action-btn fullscreen-btn" target="_blank" role="button" aria-label="Open notebook in new tab">
              <i class="fas fa-external-link-alt" aria-hidden="true"></i> Open in New Tab
            </a>
            <button class="action-btn refresh-btn refresh-notebook" role="button" aria-label="Refresh notebook">
              <i class="fas fa-sync-alt" aria-hidden="true"></i> Refresh
            </button>
            <button class="action-btn share-btn" onclick="shareProject('${project.title}', '${project.id}')" role="button" aria-label="Share project">
              <i class="fas fa-share-alt" aria-hidden="true"></i> Share Project
            </button>
          </div>
        </div>
        
        <div class="content-type-indicator">
          <i class="${project.category === 'generative' ? 'fas fa-code' : 'fas fa-chart-line'}" aria-hidden="true"></i>
          <span>${project.category === 'generative' ? 'Exploring Project Code Structure' : 'Jupyter Notebook'}</span>
        </div>
        
        ${
          project.status.toLowerCase() === "private" ? `
            <div class="private-repo-message">
              <div class="private-repo-content">
                <div class="private-icon"><i class="fas fa-lock" aria-hidden="true"></i></div>
                <div class="private-text">
                  <h3>Private Repository</h3>
                  <p>This project's source code is stored in a private repository.</p>
                  <p>If you're interested in learning more or requesting access, please contact me directly.</p>
                  <a href="mailto:doungala.leon@gmail.com" class="btn-contact" role="button" aria-label="Request access via email">
                    <i class="fas fa-envelope" aria-hidden="true"></i> Request Access
                  </a>
                </div>
              </div>
            </div>` : `
            <div class="notebook-frame-container-max">
              <iframe class="notebook-iframe" id="notebookFrame" src="${embedUrl}" allowfullscreen onload="hideJupyterLoader()"></iframe>
              <button class="notebook-fullscreen-toggle" title="Toggle fullscreen mode" role="button" aria-label="Toggle fullscreen mode">
                <i class="fas fa-expand" aria-hidden="true"></i>
              </button>
            </div>`
        }
        
        <div class="project-description-panel" id="projectDescription">
          <div class="description-panel-content">
            <div class="panel-header">
              <h3>Project Details</h3>
              <button class="close-panel-btn" onclick="toggleDescription()" role="button" aria-label="Close project details">
                <i class="fas fa-times" aria-hidden="true"></i>
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
                  <div class="author-title">AI/ML Engineer &amp; Data Scientist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  
    if (project.status.toLowerCase() === "ready") {
      const container = document.querySelector('.notebook-frame-container-max');
      if (container) {
        container.style.height = "90vh";
      }
    }
  
    const refreshButton = domCache.projectContent.querySelector('.refresh-notebook');
    if (refreshButton) {
      refreshButton.addEventListener('click', () => {
        const iframe = domCache.projectContent.querySelector('.notebook-iframe');
        if (iframe) {
          showJupyterLoader();
          iframe.src = iframe.src;
        }
      });
    }
  
    domCache.projectExplorer.classList.add('d-none');
    domCache.activeProject.classList.remove('d-none');
    window.scrollTo(0, domCache.activeProject.offsetTop - 100);
  }
  
  // ---------------------
  // generateTechLevels: Build technology indicators for the detailed panel
  // ---------------------
  function generateTechLevels(tags) {
    const techLevels = {
      "K-Means": "advanced",
      "Clustering": "advanced",
      "Machine Learning": "advanced",
      "scikit-learn": "advanced",
      "PCA": "advanced",
      "Data Analysis": "advanced",
      "HR Analytics": "intermediate",
      "Employee Retention": "intermediate",
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
          <div class="tech-level tech-${level}"></div>
        </div>
      `;
    }).join('');
  }
  
  // ---------------------
  // populateProjects: Fill project grids (All, ML, and Generative) with sorting by status ("ready" first)
  // ---------------------
  function populateProjects(gridId, projectsList) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    projectsList.sort((a, b) => {
      if (a.status.toLowerCase() === 'ready' && b.status.toLowerCase() !== 'ready') return -1;
      if (a.status.toLowerCase() !== 'ready' && b.status.toLowerCase() === 'ready') return 1;
      return 0;
    });
    
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
      
      const colorVariant = index % 4;
      projectCard.classList.add(`card-variant-${colorVariant}`);
      
      const displayTags = project.tags.slice(0, 3);
      const remainingTagsCount = project.tags.length > 3 ? project.tags.length - 3 : 0;
      
      const statusBadgeHTML = getStatusBadge(project.status);
      
      projectCard.innerHTML = `
        <div class="project-image">
          <img src="${project.image || 'images/placeholder.jpg'}" alt="${project.title}" loading="lazy">
          <div class="project-category ${project.category === 'generative' ? 'cat-gen' : 'cat-ml'}">
            ${project.category === 'generative' ? 'Generative AI' : 'Machine Learning'}
          </div>
          ${statusBadgeHTML}
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${displayTags.map(tag => `<span class="tech-badge">${tag}</span>`).join('')}
            ${remainingTagsCount > 0 ? `<span class="tech-badge more-badge">+${remainingTagsCount} more</span>` : ''}
          </div>
          <div class="project-links">
            <button class="btn btn-view-project" data-id="${project.id}" role="button" aria-label="View project">
              <i class="fas fa-eye" aria-hidden="true"></i> View Project
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
  // Optional: Shuffle array (if needed for random order)
  // ---------------------
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // ---------------------
  // Stats Counters & Search Functionality
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
  // Sharing & Navigation Functions
  // ---------------------
  function shareProject(title, id) {
    const sharedURL = window.location.origin + window.location.pathname + `?project=${id}`;
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out this project: ${title}`,
        url: sharedURL
      }).catch(err => console.error('Share failed:', err));
    } else {
      alert('Copy this link to share the project: ' + sharedURL);
    }
  }
  
  function copyLink(id) {
    const linkToCopy = window.location.origin + window.location.pathname + `?project=${id}`;
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
    portfolioLinks.forEach(link => {
      link.href = "ml_and_ds_portfolio.html";
    });
  }
  
  // ---------------------
  // Global Notebook Loader
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
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(255,255,255,0.92);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: opacity 0.4s ease, visibility 0.4s ease;
          visibility: hidden; opacity: 0;
        }
        .global-notebook-loader.visible {
          visibility: visible; opacity: 1;
        }
        .loader-content {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          display: flex; align-items: center; gap: 2rem;
          max-width: 500px; width: 90%;
        }
        .jupyter-spinner {
          position: relative;
          width: 80px; height: 80px;
          flex-shrink: 0;
        }
        .jupyter-circles {
          position: relative; width: 100%; height: 100%;
          animation: jupyter-spin 2s linear infinite;
        }
        .jupyter-circle {
          position: absolute;
          width: 22px; height: 22px;
          border-radius: 50%;
          animation: jupyter-pulse 1.5s ease-in-out infinite;
        }
        .circle-1 { background: #F37626; top:0; left:calc(50% - 11px); animation-delay:0s; }
        .circle-2 { background: #6E6E6E; bottom:10px; left:calc(25% - 11px); animation-delay:0.5s; }
        .circle-3 { background: #4E4E4E; bottom:10px; right:calc(25% - 11px); animation-delay:1s; }
        .loader-text h3 {
          margin: 0 0 0.5rem 0; font-size:1.25rem; color:#333;
        }
        .loader-text p {
          margin: 0; font-size:0.9rem; color:#666;
        }
        @keyframes jupyter-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes jupyter-pulse {
          0%,100% { opacity:0.6; transform: scale(0.85); }
          50% { opacity:1; transform: scale(1); }
        }
        @media (max-width:768px) {
          .loader-content { flex-direction: column; gap:1.5rem; text-align:center; }
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
    if (panel) {
      panel.classList.toggle('panel-open');
    }
  }
  
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
  
  // ---------------------
  // DOMContentLoaded: Initialize everything
  // ---------------------
  document.addEventListener('DOMContentLoaded', function() {
    updateMainNavLink();
    
    if (document.getElementById('projectGrid')) {
      populateProjects('projectGrid', projects);
      populateProjects('mlProjectGrid', projects.filter(p => p.category === 'ml'));
      populateProjects('genProjectGrid', projects.filter(p => p.category === 'generative'));
    }
    
    const backBtn = document.getElementById('back-to-projects');
    if (backBtn) {
      backBtn.addEventListener('click', function() {
        domCache.activeProject.classList.add('d-none');
        domCache.projectExplorer.classList.remove('d-none');
        window.scrollTo(0, domCache.projectExplorer.offsetTop - 100);
      });
    }
    
    if (domCache.projectSearch) {
      domCache.projectSearch.setAttribute('aria-label', 'Search projects');
      domCache.projectSearch.addEventListener('input', e => {
        debouncedFilterProjects(e.target.value.toLowerCase());
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
          events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
          modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
        }
      });
    }
    
    createGlobalNotebookLoader();
  });
  
  // =====================
  // Articles.js - JavaScript for the articles page
  // Provides filtering, search, pagination, and interactive features
  // =====================
  document.addEventListener('DOMContentLoaded', function() {
      // Initialize particles.js for header background if available
      if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
          particlesJS('particles-js', {
              particles: {
                  number: { value: 40, density: { enable: true, value_area: 800 } },
                  color: { value: "#4285f4" },
                  shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
                  opacity: {
                      value: 0.15,
                      random: true,
                      anim: { enable: true, speed: 1, opacity_min: 0.05, sync: false }
                  },
                  size: {
                      value: 3,
                      random: true,
                      anim: { enable: true, speed: 2, size_min: 0.3, sync: false }
                  },
                  line_linked: {
                      enable: true,
                      distance: 150,
                      color: "#4285f4",
                      opacity: 0.1,
                      width: 1
                  },
                  move: { enable: true, speed: 1, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
              },
              interactivity: {
                  detect_on: "canvas",
                  events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
                  modes: { grab: { distance: 140, line_linked: { opacity: 0.8 } }, push: { particles_nb: 3 } }
              },
              retina_detect: true
          });
      }
  
      // ----- Article Data -----
      // Updated article titles based on portfolio changes
      const articles = [
          {
              id: 2,
              title: "Advanced Customer Segmentation for Targeted Marketing",
              excerpt: "An in-depth look at modern customer segmentation combining K-Means clustering, PCA, and AI-driven insights to optimize marketing strategies.",
              image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              date: "2025-03-24",
              readTime: "12 min read",
              author: "Leon Doungala",
              categories: ["clustering", "machine-learning"],
              tags: ["Customer Segmentation", "K-Means", "Clustering", "Business Intelligence", "Market Analysis"],
              featured: true,
              status: "coming-soon"
          },
          {
              id: 1,
              title: "Multimodal Diabetes Prediction with Ensemble Methods",
              excerpt: "Discover how combining machine learning ensembles with advanced NLP workflows can enhance diabetes prediction accuracy.",
              image: "https://placehold.co/800x450/264653/ffffff?text=Diabetes+Prediction",
              date: "2025-03-15",
              readTime: "15 min read",
              author: "Leon Doungala",
              categories: ["machine-learning", "healthcare", "generative-ai"],
              tags: ["ML Ensembles", "RAG", "Healthcare AI", "Diabetes", "LLMs"],
              featured: false,
              status: "coming-soon"
          },
          {
              id: 3,
              title: "Ensemble Learning for Heart Disease Risk Assessment",
              excerpt: "Explore ensemble methods like Random Forest and XGBoost for predicting heart disease risk with comprehensive evaluation metrics.",
              image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              date: "2025-02-15",
              readTime: "18 min read",
              author: "Leon Doungala",
              categories: ["healthcare", "machine-learning"],
              tags: ["Ensemble Learning", "Heart Disease", "Random Forest", "XGBoost", "Healthcare AI"],
              status: "coming-soon"
          },
          {
              id: 4,
              title: "Building a Healthcare Chatbot with Clinical Guidelines",
              excerpt: "A step-by-step guide to creating an intelligent healthcare chatbot using RAG and clinical guidelines for robust medical support.",
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              date: "2025-01-30",
              readTime: "20 min read",
              author: "Leon Doungala",
              categories: ["generative-ai", "healthcare", "nlp"],
              tags: ["Healthcare Chatbot", "RAG", "LLMs", "Healthcare AI", "Clinical Guidelines"],
              status: "coming-soon"
          },
          {
              id: 5,
              title: "RAG-Based ATS: Transforming Recruitment with AI",
              excerpt: "Implementing a cutting-edge applicant tracking system that uses retrieval-augmented generation for smarter candidate matching.",
              image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              date: "2025-01-15",
              readTime: "16 min read",
              author: "Leon Doungala",
              categories: ["generative-ai", "nlp"],
              tags: ["ATS", "Recruitment", "RAG", "HR Tech", "Resume Parsing"],
              status: "coming-soon"
          },
          {
              id: 6,
              title: "Sentiment Analysis for Market Intelligence",
              excerpt: "Leverage sentiment analysis on social media to extract critical insights for market research and competitive intelligence.",
              image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              date: "2024-12-20",
              readTime: "14 min read",
              author: "Leon Doungala",
              categories: ["nlp", "machine-learning"],
              tags: ["Sentiment Analysis", "NLP", "Market Research", "Social Media Analytics"],
              status: "coming-soon"
          },
          {
              id: 7,
              title: "Deep Learning for Breast Cancer Diagnosis",
              excerpt: "A detailed approach using convolutional neural networks to classify histopathological images and detect breast cancer.",
              image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
              excerpt: "Techniques for feature engineering and model selection to enhance housing price predictions while reducing overfitting.",
              image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              date: "2024-11-20",
              readTime: "13 min read",
              author: "Leon Doungala",
              categories: ["machine-learning"],
              tags: ["Regression", "Feature Engineering", "Housing Prices", "Model Selection"],
              status: "coming-soon"
          },
          {
              id: 9,
              title: "Email Spam Detection Using NLP",
              excerpt: "Advanced approaches to email spam detection combining traditional ML and modern NLP techniques.",
              image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              date: "2024-11-05",
              readTime: "15 min read",
              author: "Leon Doungala",
              categories: ["machine-learning", "nlp"],
              tags: ["Spam Detection", "NLP", "Classification", "Email Security"],
              status: "coming-soon"
          },
          {
              id: 10,
              title: "Real-Time Fraud Detection in Financial Transactions",
              excerpt: "Implementing anomaly detection and supervised learning techniques for real-time fraud detection on imbalanced datasets.",
              image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              date: "2024-10-20",
              readTime: "17 min read",
              author: "Leon Doungala",
              categories: ["machine-learning"],
              tags: ["Fraud Detection", "Anomaly Detection", "Financial AI", "Imbalanced Learning"],
              status: "coming-soon"
          },
          {
              id: 11,
              title: "Advanced Salary Prediction Using Regression Techniques",
              excerpt: "Exploring multiple regression models and feature importance for accurate salary forecasting in HR analytics.",
              image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              date: "2024-10-05",
              readTime: "14 min read",
              author: "Leon Doungala",
              categories: ["machine-learning"],
              tags: ["Regression", "Salary Prediction", "HR Analytics", "Feature Importance"],
              status: "coming-soon"
          },
          {
              id: 12,
              title: "Predicting Employee Retention with Clustering & Classification",
              excerpt: "Combining clustering and classification techniques to analyze employee attrition and build retention prediction models.",
              image: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              date: "2024-09-20",
              readTime: "16 min read",
              author: "Leon Doungala",
              categories: ["clustering", "machine-learning"],
              tags: ["HR Analytics", "Employee Retention", "Clustering", "Classification"],
              status: "coming-soon"
          }
      ];
  
      // Add shuffle function to randomize articles
      function shuffleArticles(array) {
        // Create a copy of the array to avoid modifying the original
        const shuffled = [...array];
        // Fisher-Yates shuffle algorithm
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      }

      // Use the above function in getFilteredArticles
      function getFilteredArticles() {
          const filtered = articles.filter(article => {
              const categoryMatch = currentFilter === 'all' || article.categories.includes(currentFilter);
              const searchMatch = searchQuery === '' || 
                  article.title.toLowerCase().includes(searchQuery) || 
                  article.excerpt.toLowerCase().includes(searchQuery) ||
                  article.tags.some(tag => tag.toLowerCase().includes(searchQuery));
              return categoryMatch && searchMatch;
          });
          
          // Shuffle the filtered articles
          return shuffleArticles(filtered);
      }
      
      // The rest of the functions remain the same
  
      // ----- DOM Elements for Articles -----
      const articleGrid = document.getElementById('articleGrid');
      const articleSearch = document.getElementById('articleSearch');
      const filterButtons = document.querySelectorAll('.filter-tabs button');
      const topicList = document.querySelectorAll('.topic-list a');
      const paginationContainer = document.querySelector('.pagination-container ul');
  
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
                          <p>I'm currently writing in-depth technical articles based on my AI/ML projects and research. In the meantime, explore functioning project implementations through the "See Implementation" links.</p>
                      </div>
                  </div>
              `;
              if (articleGrid && articleGrid.parentNode) {
                  articleGrid.parentNode.insertBefore(banner, articleGrid);
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
  
      let currentFilter = 'all';
      let currentPage = 1;
      let searchQuery = '';
  
      function getArticlesPerPage() {
          return 4;
      }
  
      function getColumnClass() {
          return 'col-md-6';
      }
  
      function updateCategoryCounts() {
          const categoryCounts = {
              'all': articles.length,
              'machine-learning': 0,
              'generative-ai': 0,
              'healthcare': 0,
              'nlp': 0,
              'clustering': 0
          };
          articles.forEach(article => {
              article.categories.forEach(category => {
                  if (categoryCounts.hasOwnProperty(category)) {
                      categoryCounts[category]++;
                  }
              });
          });
          topicList.forEach(topic => {
              const category = topic.getAttribute('data-filter');
              const countSpan = topic.querySelector('span');
              if (countSpan && categoryCounts.hasOwnProperty(category)) {
                  countSpan.textContent = `(${categoryCounts[category]})`;
              }
          });
      }
  
      function renderArticles() {
          const filteredArticles = getFilteredArticles();
          const articlesPerPage = getArticlesPerPage();
          const startIndex = (currentPage - 1) * articlesPerPage;
          const endIndex = startIndex + articlesPerPage;
          const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
          
          articleGrid.innerHTML = '';
          
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
          
          const columnClass = 'col-md-6';
          const projectMappings = {
              1: "diabetes-chatbot",
              2: "customer-segmentation",
              3: "heart-disease",
              4: "virtual-doctor",
              5: "ats-system",
              6: "sentiment-analysis",
              7: "breast-cancer",
              8: "housing-prices",
              9: "spam-email",
              10: "fraud-detection",
              11: "salary-prediction",
              12: "hr-analytics"
          };
          const fallbackImage = "https://placehold.co/800x450/264653/ffffff?text=AI+%26+ML+Article";
          
          paginatedArticles.forEach(article => {
              const articleCard = document.createElement('div');
              articleCard.className = `${columnClass} article-item mb-4`;
              articleCard.setAttribute('data-category', article.categories.join(' '));
              
              const tagsHTML = article.tags.map(tag => 
                  `<span class="article-tag">${tag}</span>`
              ).join('');
              
              const metaHTML = `
                  <div class="article-date"><i class="far fa-calendar-alt"></i> ${formatDate(article.date)}</div>
                  <div class="article-read-time"><i class="far fa-clock"></i> ${article.readTime}</div>
              `;
              
              const projectId = projectMappings[article.id] || "";
              const img = new Image();
              img.onerror = function() {
                  renderArticleCard(fallbackImage);
              };
              img.onload = function() {
                  renderArticleCard(article.image);
              };
              img.src = article.image;
              
              function renderArticleCard(imageSrc) {
                  articleCard.innerHTML = `
                      <div class="article-card h-100 d-flex flex-column">
                          ${article.status === 'coming-soon' ? '<div class="coming-soon-badge">Coming Soon</div>' : ''}
                          <div class="article-image">
                              <img src="${imageSrc}" alt="${article.title}" class="img-fluid" 
                                  onerror="if (!this.hasAttribute('data-error-shown')) { this.setAttribute('data-error-shown', 'true'); this.src='${fallbackImage}'; }">
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
              }
              
              articleGrid.appendChild(articleCard);
          });
          
          animateArticleCards();
      }
  
      function formatDate(dateString) {
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          return new Date(dateString).toLocaleDateString('en-US', options);
      }
      
      function animateArticleCards() {
          const cards = document.querySelectorAll('.article-item');
          cards.forEach((card, index) => {
              setTimeout(() => {
                  card.classList.add('animated', 'fadeInUp');
              }, index * 100);
          });
      }
  
      function renderPagination() {
          const filteredArticles = getFilteredArticles();
          const articlesPerPage = getArticlesPerPage();
          const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
          
          paginationContainer.innerHTML = '';
          if (totalPages <= 1) return;
          
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
          
          const screenWidth = window.innerWidth;
          const maxVisiblePages = screenWidth < 768 ? 3 : (screenWidth < 992 ? 5 : 7);
          
          let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
          let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
          if (endPage === totalPages) {
              startPage = Math.max(1, endPage - maxVisiblePages + 1);
          }
          
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
              if (startPage > 2) {
                  const ellipsis = document.createElement('li');
                  ellipsis.className = 'page-item disabled';
                  ellipsis.innerHTML = `<span class="page-link">...</span>`;
                  paginationContainer.appendChild(ellipsis);
              }
          }
          
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
          
          if (endPage < totalPages) {
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
  
      function scrollToTop() {
          const articleListSection = document.querySelector('.articles-list');
          if (articleListSection) {
              window.scrollTo({
                  top: articleListSection.offsetTop - 100,
                  behavior: 'smooth'
              });
          }
      }
  
      addArticlesBanner();
      updateCategoryCounts();
      renderArticles();
      renderPagination();
  
      filterButtons.forEach(button => {
          button.addEventListener('click', function() {
              filterButtons.forEach(btn => btn.classList.remove('active'));
              this.classList.add('active');
              currentFilter = this.getAttribute('data-filter');
              currentPage = 1;
              renderArticles();
              renderPagination();
          });
      });
  
      topicList.forEach(topic => {
          topic.addEventListener('click', function(e) {
              e.preventDefault();
              currentFilter = this.getAttribute('data-filter');
              currentPage = 1;
              filterButtons.forEach(btn => {
                  if (btn.getAttribute('data-filter') === currentFilter) {
                      btn.classList.add('active');
                  } else {
                      btn.classList.remove('active');
                  }
              });
              renderArticles();
              renderPagination();
          });
      });
  
      articleSearch.addEventListener('input', function() {
          searchQuery = this.value.toLowerCase().trim();
          currentPage = 1;
          renderArticles();
          renderPagination();
      });
  
      let resizeTimeout;
      window.addEventListener('resize', function() {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(function() {
              const oldArticlesPerPage = getArticlesPerPage();
              document.body.offsetHeight;
              const newArticlesPerPage = getArticlesPerPage();
              if (oldArticlesPerPage !== newArticlesPerPage) {
                  const filteredArticles = getFilteredArticles();
                  const currentItemIndex = (currentPage - 1) * oldArticlesPerPage;
                  currentPage = Math.floor(currentItemIndex / newArticlesPerPage) + 1;
                  const totalPages = Math.ceil(filteredArticles.length / newArticlesPerPage);
                  currentPage = Math.min(currentPage, totalPages);
                  renderArticles();
              }
              renderPagination();
          }, 250);
      });
  
      function ensureProperGridLayout() {
          let styleElement = document.getElementById('articles-grid-style');
          if (!styleElement) {
              styleElement = document.createElement('style');
              styleElement.id = 'articles-grid-style';
              document.head.appendChild(styleElement);
          }
          styleElement.textContent = `
              #articleGrid {
                  display: flex;
                  flex-wrap: wrap;
                  margin-left: -15px;
                  margin-right: -15px;
              }
              .article-item {
                  flex: 0 0 50%;
                  max-width: 50%;
                  padding: 15px;
                  box-sizing: border-box;
              }
              .article-card {
                  height: 100%;
                  display: flex;
                  flex-direction: column;
              }
              .article-content {
                  flex: 1 1 auto;
                  display: flex;
                  flex-direction: column;
              }
              .article-excerpt {
                  flex-grow: 1;
              }
              @media (max-width: 767px) {
                  .article-item {
                      flex: 0 0 100%;
                      max-width: 100%;
                  }
              }
          `;
      }
  
      ensureProperGridLayout();
  
      function addCardHoverEffects() {
          const cards = document.querySelectorAll('.article-card');
          cards.forEach(card => {
              card.addEventListener('mouseenter', function() {
                  const title = this.querySelector('.article-title');
                  if (title) {
                      gsap.to(title, { y: -5, duration: 0.3, ease: 'power2.out' });
                  }
                  const image = this.querySelector('.article-image img');
                  if (image) {
                      gsap.to(image, { scale: 1.05, duration: 0.5, ease: 'power2.out' });
                  }
              });
              card.addEventListener('mouseleave', function() {
                  const title = this.querySelector('.article-title');
                  if (title) {
                      gsap.to(title, { y: 0, duration: 0.3, ease: 'power2.out' });
                  }
                  const image = this.querySelector('.article-image img');
                  if (image) {
                      gsap.to(image, { scale: 1, duration: 0.5, ease: 'power2.out' });
                  }
              });
          });
      }
  
      if (typeof gsap !== 'undefined') {
          addCardHoverEffects();
          const renderArticlesOriginal = renderArticles;
          renderArticles = function() {
              renderArticlesOriginal();
              setTimeout(addCardHoverEffects, 100);
          };
      }
  
      function addUnderDevelopmentNotice() {
          const currentPath = window.location.pathname;
          const pagesToNotify = ['/articles.html', '/ml_and_ds_portfolio.html', '/projects.html', '/repository.html'];
          let pageName = "This page";
          if (currentPath.includes('articles')) pageName = "Articles section";
          if (currentPath.includes('portfolio')) pageName = "Portfolio";
          if (currentPath.includes('projects')) pageName = "Projects section";
          if (currentPath.includes('repository')) pageName = "Repository";
          if (pagesToNotify.some(page => currentPath.includes(page.replace('/', '')))) {
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
                      from { transform: translateY(100px); opacity: 0; }
                      to { transform: translateY(0); opacity: 1; }
                  }
                  @media (max-width: 768px) {
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
              document.head.appendChild(style);
              document.body.appendChild(notice);
              const closeButton = notice.querySelector('.notice-close');
              closeButton.addEventListener('click', function() {
                  sessionStorage.setItem('developmentNoticeClosed', 'true');
                  notice.remove();
              });
              if (sessionStorage.getItem('developmentNoticeClosed') === 'true') {
                  notice.remove();
              }
          }
      }
  
      addUnderDevelopmentNotice();
  
      function addProjectsRevisionNotice() {
          if (sessionStorage.getItem('projectsNoticeShown') === 'true') return;
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
          const closeButton = notice.querySelector('.notice-close');
          closeButton.addEventListener('click', function() {
              sessionStorage.setItem('projectsNoticeShown', 'true');
              notice.classList.add('closing');
              setTimeout(() => { notice.remove(); }, 500);
          });
      }
  
      addProjectsRevisionNotice();
  });
