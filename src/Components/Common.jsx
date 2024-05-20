/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  useInView,
  motion
} from "framer-motion";
import "../Style/Component/Component.css";
import { useRef } from "react";



export const ProductList = ({ products }) => {
  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { staggerChildren: 0.5, duration: 0.6 },
  };
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const prodVariants = {
    hidden: { opacity: 0, y: 50 },
    visible,
  };
  return (
    <motion.ul className="list" variants={prodVariants}>
      <motion.span
        ref={ref}
        className="wipe"
        style={{
          "--wipe-position": isInView
            ? "100%"
            : "calc(-1 * var(--gradient-length))",
        }}
      >
        <svg
          width="16"
          height="1009"
          viewBox="0 0 16 1009"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" transform="rotate(90 8 8)" fill="black" />
          <rect
            x="9"
            y="8"
            width="1992"
            height="2"
            transform="rotate(90 9 8)"
            fill="black"
          />
          <circle
            cx="8"
            cy="1001"
            r="8"
            transform="rotate(90 8 1001)"
            fill="black"
          />
        </svg>
      </motion.span>
      {products.map((product, index) => (
        <motion.li className="listItem" key={index} variants={prodVariants}>
          <div className="imgWrap">
            <img loading="lazy" src={product.imageSrc} alt={product.title} />
            <a href={product.link} className="button">
              {product.linktext}
            </a>
          </div>
          <h5>{product.title}</h5>
        </motion.li>
      ))}
    </motion.ul>
  );
};
export const ProductList2 = ({ products }) => {
  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { staggerChildren: 0.5, duration: 0.6 },
  };
  
  const prodVariants = {
    hidden: { opacity: 0, y: 50 },
    visible,
  };
  return (
    <motion.ul className="list" variants={prodVariants}>
      {products.map((product, index) => (
        <motion.li className="listItem" key={index} variants={prodVariants}>
          <div className="imgWrap2">
            <img loading="lazy" src={product.imageSrc} alt={product.title} />
            {/* <a href={product.link} className="button">
              {product.linktext}
            </a> */}
          </div>
          <h4>{product.title}</h4>
        </motion.li>
      ))}
    </motion.ul>
  );
};
