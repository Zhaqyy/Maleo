import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "../Style/Component/Component.css";
import { Link } from "react-router-dom";


const Overlay = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  // Function to handle scrolling and trigger animations
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Define the scroll threshold where animations should trigger (300px)
    const scrollThreshold = 300;

    // Trigger fade-out-left animation
    if (scrollPosition >= scrollThreshold) {
      controlsLeft.start({
        opacity: 0,
        x: "-30vw",
        transition: { ease: "easeOut", duration: 0.5 }
      });
    } else {
      controlsLeft.start({ opacity: 1, x: 0 });
    }

    // Trigger fade-out-right animation
    if (scrollPosition >= scrollThreshold) {
      controlsRight.start({
        opacity: 0,
        x: "30vw",
        transition: { ease: "easeOut", duration: 0.5 }
      });
    } else {
      controlsRight.start({ opacity: 1, x: 0 });
    }
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the user has already scrolled past the threshold on load
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return (
    <aside className="fixed-aside">
      <motion.span className="over-cont" animate={controlsRight}>
        <p>
          <span>
            <Link to="https://www.linkedin.com/company/maleo-emballage/" target="_blank">Linkedin</Link>
          </span> X <span>
            <Link to="/Contact">Contact</Link>
          </span>
        </p>
      </motion.span>
      <motion.span className="over-scroll" animate={controlsLeft}>
        <p>
          <a href={'#footer'}>descendre</a>
        </p>
      </motion.span>
    </aside>
  );
};


export default Overlay;
