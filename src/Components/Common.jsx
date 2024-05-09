/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  useInView,
  useMotionValue,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import "../Style/Component/Component.css";
import { useEffect, useRef } from "react";
import { Section } from "./inView";
import MagneticBtn, { ArrowBtn } from "./magnetBtn";

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
            <img loading="lazy" src={product.imageSrc} alt={product.title} />
            <button>VIEW MORE</button>
          </div>
          <h5>{product.title}</h5>
        </li>
      ))}
    </ul>
  );
};

export const BlogSec = ({ posts }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["0%", "10%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { staggerChildren: 1, duration: 0.6 },
  };
  const postVariants = {
    hidden: { opacity: 0, y: 50 },
    visible,
  };

  return (
    <Section
      className="blog"
      variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
    >
      <motion.h3 variants={postVariants}>derniers articles</motion.h3>
      <motion.ul className="blogList" variants={postVariants}>
        {posts.map((post, index) => (
          <motion.a
            href={post.link}
            ref={ref}
            key={index}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="postItem"
          >
            <motion.li className="post" variants={postVariants}>
              <div className="metaInfo">
                <h6>{post.category}</h6>
                <p>- {post.date}</p>
              </div>
              <h4 className="blogTitle">{post.title}</h4>
              <motion.div
                className="prodBtn"
                // variants={prodVariants}
              >
                <ArrowBtn />
              </motion.div>
              <motion.img
                style={{
                  top,
                  left,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                variants={{
                  initial: { scale: 0, rotate: "-12.5deg" },
                  whileHover: { scale: 1, rotate: "12.5deg" },
                }}
                transition={{ type: "spring" }}
                src={post.imgSrc}
                className="postImg"
                alt={`Featured Image for blog post ${post.index}`}
              />
            </motion.li>
          </motion.a>
        ))}
      </motion.ul>
    </Section>
  );
};
