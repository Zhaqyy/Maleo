import { motion, useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import "../Style/Component/Component.css";
import { Link } from "react-router-dom";


const Overlay = () => {

  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  function update(latest) {

    if (latest > 100) {
      setHidden(true);
    } else {
      setHidden(false)
    }
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    update(latest);
  });

  useEffect(() => {
    const animate = async () => {
      if (hidden) {
        await controlsLeft.start({
          opacity: 0,
          x: "-30vw",
          transition: { ease: "easeOut", duration: 0.5 },
        });
        await controlsRight.start({
          opacity: 0,
          x: "30vw",
          transition: { ease: "easeOut", duration: 0.5 },
        });
      } else {
        await controlsLeft.start({
          opacity: 1,
          x: 0,
          transition: { ease: "easeOut", duration: 0.5 },
        });
        await controlsRight.start({
          opacity: 1,
          x: 0,
          transition: { ease: "easeOut", duration: 0.5 },
        });
      }
    };

    animate();
  }, [hidden, controlsLeft, controlsRight]);

  function handleScrollDown() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }

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
      <motion.span className="over-scroll" onClick={handleScrollDown} animate={controlsLeft}>
        <p>
          <a>descendre</a>
        </p>
      </motion.span>
    </aside>
  );
};


export default Overlay;
