import "./preloader.css";

export const loadPreloader = () => {
    // Define paceOptions
    window.paceOptions = {
      startOnPageLoad: false,
      restartOnRequestAfter: false,
    };
  
    // Load Pace.js
    const paceScript = document.createElement('script');
    paceScript.src = 'https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js';
    document.head.appendChild(paceScript);
  
    paceScript.onload = () => {
      // Pace event listeners
      Pace.on('progress', function (progress) {
        const paceProgressInner = document.querySelector('.pace-progress-inner');
        if (paceProgressInner) {
          paceProgressInner.style.width = `${progress}%`;
        }
      });
  
      Pace.on('done', function () {
        setTimeout(function () {
          const paceProgress = document.querySelector('.pace-progress');
  
          // Modify styles of the parent element which affects the pseudo-elements
          if (paceProgress) {
            paceProgress.style.setProperty('--progress-top', '-13px');
            paceProgress.style.setProperty('--progress-opacity', '0');
          }
  
          setTimeout(function () {
            if (paceProgress) {
              paceProgress.classList.add('translate-up');
            }
          }, 1500);
        }, 500);
      });
  
      // Start Pace manually
      Pace.start();
    };
  };
  