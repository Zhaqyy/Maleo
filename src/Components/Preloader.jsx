import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as Pace from "pace-js";
import "./preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for Pace.js completion event
    Pace.on('done', () => {
      setLoading(false);
    });
  }, []);

  if (!loading) {
    return null; // Hide preloader when not loading
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          width: 50,
          height: 50,
          border: '5px solid #000',
          borderTop: '5px solid transparent',
          borderRadius: '50%',
        }}
      />
    </motion.div>
  );
};

export default Preloader;

// LoadingBar.js
// import { useEffect, useState } from 'react';
// import './LoadingBar.css';

// const LoadingBar = () => {
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const images = document.images;
//     const totalImages = images.length;
//     let loadedImages = 0;

//     if (totalImages === 0) {
//       setLoading(false);
//       setTimeout(() => setLoading(false), 3000);
//       return;
//     }

//     const updateProgress = () => {
//       loadedImages += 1;
//       const percent = ((100 / totalImages) * loadedImages) << 0;
//       setProgress(percent);
//       if (loadedImages === totalImages) {
//         setTimeout(() => setLoading(false), 3000);
//         // setLoading(false);
//       }
//     };

//     for (let i = 0; i < totalImages; i++) {
//       const tempImg = new Image();
//       tempImg.onload = updateProgress;
//       tempImg.onerror = updateProgress;
//       tempImg.src = images[i].src;
//     }
//   }, []);

//   if (!loading) {
//     return null;
//   }

//   return (
//     <div id="overlay">
//       <div id="progstat">Loading {progress}%</div>
//       <div id="progress" style={{ width: `${progress}%` }}></div>
//     </div>
//   );
// };

// export default LoadingBar;
