/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useInView } from "framer-motion";
import "../Style/Component/Component.css";
import { blogData } from "../Pages/Blog/blogData.js";
import { Link } from "react-router-dom";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const Swiper = ({ products, variant }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);
  const isMobile = window.innerWidth < 770;
  const swiperRef = useRef(null);
  const isInView = useInView(swiperRef, {
    once: false,
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (!isInView) return;

    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((prevIndex) => (prevIndex + 1) % products.length);
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, products.length, isInView]);

  const onDragEnd = () => {
    const x = dragX.get();
    const itemsToShow = isMobile ? 2 : products.length;

    if (x <= -DRAG_BUFFER && imgIndex < products.length - itemsToShow) {
      setImgIndex((prevIndex) => prevIndex + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prevIndex) => prevIndex - 1);
    }
  };

  const itemsToShow = isMobile ? 2 : products.length;

  const renderProductList = () => {
    switch (variant) {
      case 2:
        return <ProductList2 products={products} itemsToShow={itemsToShow} />;
      case 3:
        return <ProductList3 products={products} itemsToShow={itemsToShow} />;
      default:
        return <ProductList products={products} itemsToShow={itemsToShow} />;
    }
  };

  return (
    <div className="swiperNoswiping">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{
          translateX: `-${
            Math.min(imgIndex, products.length - itemsToShow) *
            (100 / itemsToShow)
          }%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="motionDiv active"
      >
        {renderProductList()}
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} products={products} />
    </div>
  );
};

const ProductList = ({ products, itemsToShow }) => {
  const isMobile = window.innerWidth < 770;

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
    <>
      <motion.ul
        className="list"
        variants={prodVariants}
        style={{ width: `${products.length * (100 / itemsToShow)}%` }}
      >
        {products.map((product, index) => (
          <motion.li
            className="listItem"
            initial={{
              opacity: 0.25,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: isMobile ? index / 6 : index / 1.1,
                easings: "easeIn",
              },
            }}
            viewport={{ once: true }}
            key={index}
            style={{ width: `${100 / itemsToShow}%` }}
          >
            <div className="imgWrap">
              <img loading="lazy" src={product.imageSrc} alt={product.title} />
              <a href={product.link || "#contact-form"} className="button">
                {product.linktext}
              </a>
            </div>
            <h5>{product.title}</h5>
          </motion.li>
        ))}
      </motion.ul>
      <motion.span
        ref={ref}
        className="wipe"
        style={{
          "--wipe-position": isInView
            ? "100%"
            : "calc(-1 * var(--gradient-length))",
        }}
      >
        <img src="/line.png" />
      </motion.span>
    </>
  );
};

export const ProductList2 = ({ products, itemsToShow }) => {
  const isMobile = window.innerWidth < 770;

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
    <motion.ul
      className="list var2"
      variants={prodVariants}
      style={{ width: `${products.length * (100 / itemsToShow)}%` }}
    >
      {products.map((product, index) => (
        <motion.li
          className="listItem"
          initial={{
            opacity: 0,
            y: isMobile ? 50 : 150,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: isMobile ? index / 6 : index / 1.1,
              easings: "easeIn",
            },
          }}
          viewport={{ once: true }}
          key={index}
          style={{ width: `${100 / itemsToShow}%` }}
        >
          <div className="imgWrap2">
            <img loading="lazy" src={product.imageSrc} alt={product.title} />
          </div>
          <h4>{product.title}</h4>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export const ProductList3 = ({ products, itemsToShow }) => {
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
    <motion.ul
      className="list"
      variants={prodVariants}
      style={{ width: `${products.length * (100 / itemsToShow)}%` }}
    >
      {products.map((product, index) => (
        <motion.li
          className="listItem2"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: index / 10,
              easings: "easeIn",
            },
          }}
          viewport={{ once: true }}
          key={index}
          style={{ width: `${100 / itemsToShow}%` }}
        >
          <div className="imgWrap2">
            <img loading="lazy" src={product.imageSrc} alt={product.title} />
          </div>
          <h5>{product.title}</h5>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export const BlogSwiper = () => {
  const [blogIndex, setBlogIndex] = useState(0);
  const dragX = useMotionValue(0);
  const isMobile = window.innerWidth < 770;
  // const swiperRef = useRef(null);
  const { ref, inView: isInView } = useInView({ threshold: 0.5 });
  const itemsToShow = isMobile ? 1 : 3;

  useEffect(() => {
    if (!isInView) return;

    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setBlogIndex((prevIndex) => (prevIndex + 1) % itemsToShow);
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX,itemsToShow, isInView]);

  const onDragEnd = () => {
    const x = dragX.get();
    const itemsToShow = isMobile ? 1 : 3;

    if (x <= -DRAG_BUFFER && blogIndex < blogData.length - itemsToShow) {
      setBlogIndex((prevIndex) => prevIndex + 1);
    } else if (x >= DRAG_BUFFER && blogIndex > 0) {
      setBlogIndex((prevIndex) => prevIndex - 1);
    }
  };


  const handlePrevClick = () => {
    if (blogIndex > 0) {
      setBlogIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (blogIndex < blogData.length - itemsToShow) {
      setBlogIndex((prevIndex) => prevIndex + 1);
    }
  };

  const renderProductList = () => {
    return blogData.map((item, index) => (
      <div className="blog-item" key={item.id}>
        <img src={item.image} alt={item.title} />
        <div className="blogswipe-info">
          <p className="swipe-date">{item.date}</p>
          <Link to={`/post/${item.id}`} className="Blogswiper-link">
           <h6>{item.title}</h6> 
          </Link>
          <Link to={`/post/${item.id}`} className="Blogswiper-link">
          <p>Read More</p>
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div className="swiperNoswiping" ref={ref}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{
          translateX: `-${
            Math.min(blogIndex, blogData.length - itemsToShow) *
            (100 / itemsToShow)
          }%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="motionDiv active"
      >
        {renderProductList()}
      </motion.div>
      <div className="arrow-ctrl">
      <button className="prev-arrow" onClick={handlePrevClick}>
      ←
      </button>
      <button className="next-arrow" onClick={handleNextClick}>
      →
      </button>
      </div>
    </div>
  );
};

const Dots = ({ imgIndex, setImgIndex, products }) => {
  return (
    <div className="dots">
      {products.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`dot ${idx === imgIndex ? "active" : "inactive"}`}
        />
      ))}
    </div>
  );
};
