/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "../Style/Component/Component.css";
import arrow from "/arrow.webp";
import { Link } from "react-router-dom";

export default function MagneticBtn({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 10, mass: 0.01 }}
    >
      {children}
    </motion.div>
  );
}

export const SpotBtn = ({ text, variant, submit, url }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { staggerChildren: 0.4, duration: 0.5 },
  };

  const homeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible,
  };

  const contVariants = {
    hidden: { opacity: 0, y: 20 },
    visible,
  };

  return (
    <Link to={`${url}`}>
    <motion.button
      className="primary-btn base-input"
      variants={variant}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={submit}
      
    >
      <span
        className="overlay-input"
        ref={divRef}
        style={{
          opacity,
          WebkitMaskImage: `radial-gradient(50% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
        aria-hidden="true"
      ></span>
      {text}
    </motion.button>
    </Link>
  );
};

export const ArrowBtn = () => {
  return (
    <MagneticBtn>
      <img loading="lazy" src={arrow} className="arrow" />
    </MagneticBtn>
  );
};
