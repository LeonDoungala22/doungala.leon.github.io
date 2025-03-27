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
  // If the notebookUrl already starts with nbviewer, return it unchanged.
  if (project.notebookUrl.startsWith("https://nbviewer.org/")) {
    return project.notebookUrl;
  }
  // If the notebookUrl is a GitHub URL, convert it to nbviewer format.
  if (project.notebookUrl.startsWith("https://github.com/")) {
    let nbUrl = project.notebookUrl.replace('https://github.com/', 'https://nbviewer.org/github/');
    nbUrl = nbUrl.replace('/blob/', '/');
    return nbUrl;
  }
  return project.notebookUrl;
}

// ---------------------
// Helper: Generate a Status Badge with a visible background using a configuration object
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

  // For "ready" projects using nbviewer, augment the notebook container height
  if (project.status.toLowerCase() === "ready") {
    const container = document.querySelector('.notebook-frame-container-max');
    if (container) {
      container.style.height = "90vh";
    }
  }

  // Add event listener to refresh button (using cached projectContent)
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
  
  // Sort projects: ready projects first
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
    
    // Color variation based on index (4 variants)
    const colorVariant = index % 4;
    projectCard.classList.add(`card-variant-${colorVariant}`);
    
    const displayTags = project.tags.slice(0, 3);
    const remainingTagsCount = project.tags.length > 3 ? project.tags.length - 3 : 0;
    
    // Get the status badge HTML
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
  
  // Populate project grids (All, ML, Generative)
  if (document.getElementById('projectGrid')) {
    populateProjects('projectGrid', projects);
    populateProjects('mlProjectGrid', projects.filter(p => p.category === 'ml'));
    populateProjects('genProjectGrid', projects.filter(p => p.category === 'generative'));
    // Uncomment next line if you have stats counters in your HTML
    // updateStatsCounters();
  }
  
  // "Back to Projects" button event
  const backBtn = document.getElementById('back-to-projects');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      domCache.activeProject.classList.add('d-none');
      domCache.projectExplorer.classList.remove('d-none');
      window.scrollTo(0, domCache.projectExplorer.offsetTop - 100);
    });
  }
  
  // Use debounced search filtering
  if (domCache.projectSearch) {
    domCache.projectSearch.setAttribute('aria-label', 'Search projects');
    domCache.projectSearch.addEventListener('input', e => {
      debouncedFilterProjects(e.target.value.toLowerCase());
    });
  }
  
  // Check URL parameter for direct project link
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  if (projectId) {
    setTimeout(() => loadProject(projectId), 500);
  }
  
  // Initialize particles.js if available
  if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#4285f4" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true, distance: 150, color: "#4285f4",
          opacity: 0.4, width: 1
        },
        move: {
          enable: true, speed: 2, direction: "none",
          random: true, out_mode: "out"
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
  
  // Create the global notebook loader
  createGlobalNotebookLoader();
});
