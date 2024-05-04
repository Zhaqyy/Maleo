/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import "../Style/Component/Component.css";
import { useEffect, useRef } from "react";

export const ProductList = ({ products }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  //   useEffect(() => {
  //     console.log("Element is in view: ", isInView);
  //   }, [isInView]);
  return (
    <ul className="list">
      <motion.span
        ref={ref}
        className="wipe"
        style={{
          "--wipe-position": isInView
            ? "100%"
            : "calc(-1 * var(--gradient-length))",
        }}
        transition={{ duration: 5, ease: "linear" }}
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
        <li className="listItem" key={index}>
          <div className="imgWrap">
            <img src={product.imageSrc} alt={product.title} />
            <button>VIEW MORE</button>
          </div>
          <h5>{product.title}</h5>
        </li>
      ))}
    </ul>
  );
};
