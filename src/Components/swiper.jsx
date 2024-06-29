 /* eslint-disable react/prop-types */
 import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useInView } from "framer-motion";
import "../Style/Component/Component.css";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const Swiper = ({ products }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);
  const isMobile = window.innerWidth < 770;

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((prevIndex) => (prevIndex + 1) % products.length);
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, products.length]);

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

  return (
    <div className="swiperNoswiping">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{
          translateX: `-${Math.min(imgIndex, products.length - itemsToShow) * (100 / itemsToShow)}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="motionDiv active"
      >
        <ProductList imgIndex={imgIndex} products={products} itemsToShow={itemsToShow} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} products={products} />
    </div>
  );
};

const ProductList = ({ imgIndex, products, itemsToShow }) => {
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
    <motion.ul className="list" variants={prodVariants} style={{ width: `${products.length * (100 / itemsToShow)}%` }}>
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
       
        <img src="/line.png"/>
       
      </motion.span>
    </>
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
