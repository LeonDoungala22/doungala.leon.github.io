// Create global loading indicator for Jupyter notebooks
(function() {
  // Create the loading overlay
  function createLoader() {
    // Check if it already exists
    if (document.getElementById('jupyterGlobalLoader')) return;
    
    const loader = document.createElement('div');
    loader.id = 'jupyterGlobalLoader';
    loader.className = 'jupyter-global-loader hidden';
    loader.innerHTML = `
      <div class="jupyter-loader-content">
        <div class="jupyter-loader-spinner">
          <div class="jupyter-circles">
            <div class="jupyter-circle jupyter-circle-1"></div>
            <div class="jupyter-circle jupyter-circle-2"></div>
            <div class="jupyter-circle jupyter-circle-3"></div>
          </div>
        </div>
        <div class="jupyter-loader-text">
          <h3>Loading Jupyter Notebook</h3>
          <p>Please wait while we prepare the notebook content...</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(loader);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .jupyter-global-loader {
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
        transition: opacity 0.4s ease-out, visibility 0.4s;
      }
      
      .jupyter-global-loader.hidden {
        opacity: 0;
        visibility: hidden;
      }
      
      .jupyter-loader-content {
        background: white;
        padding: 2.5rem;
        border-radius: 1rem;
        box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 2.5rem;
        max-width: 550px;
        width: 90%;
        border: 1px solid #f1f1f1;
      }
      
      .jupyter-loader-spinner {
        position: relative;
        width: 90px;
        height: 90px;
        flex-shrink: 0;
      }
      
      .jupyter-circles {
        position: relative;
        width: 100%;
        height: 100%;
        animation: spin 2.5s linear infinite;
      }
      
      .jupyter-circle {
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        animation: pulse 1.8s ease-in-out infinite;
      }
      
      .jupyter-circle-1 {
        background: #F37626; /* Jupyter orange */
        top: 0;
        left: calc(50% - 12px);
        animation-delay: 0s;
      }
      
      .jupyter-circle-2 {
        background: #6E6E6E; /* Gray */
        bottom: 12px;
        left: calc(25% - 12px);
        animation-delay: 0.5s;
      }
      
      .jupyter-circle-3 {
        background: #4E4E4E; /* Dark gray */
        bottom: 12px;
        right: calc(25% - 12px);
        animation-delay: 1s;
      }
      
      .jupyter-loader-text h3 {
        margin: 0 0 0.8rem 0;
        font-size: 1.4rem;
        color: #333;
      }
      
      .jupyter-loader-text p {
        margin: 0;
        font-size: 1rem;
        color: #666;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 0.7;
          transform: scale(0.85);
        }
        50% {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      /* Mobile responsiveness */
      @media (max-width: 768px) {
        .jupyter-loader-content {
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
          padding: 2rem;
        }
        
        .jupyter-loader-spinner {
          width: 70px;
          height: 70px;
        }
      }
    `;
    
    document.head.appendChild(style);
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createLoader);
  } else {
    createLoader();
  }
  
  // Define global methods for showing/hiding the loader
  window.showJupyterLoader = function() {
    const loader = document.getElementById('jupyterGlobalLoader');
    if (loader) {
      loader.classList.remove('hidden');
    }
  };
  
  window.hideJupyterLoader = function() {
    const loader = document.getElementById('jupyterGlobalLoader');
    if (loader) {
      loader.classList.add('hidden');
    }
  };
})();