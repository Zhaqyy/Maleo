/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    useMotionValue,
    motion,
    useSpring,
    useTransform,
  } from "framer-motion";
  // import { useNavigate } from 'react-router-dom';
  import "../Style/Component/Component.css";
  import { useRef } from "react";
  // import { Section } from "./inView";
  import { ArrowBtn } from "./magnetBtn";
import { Section } from "./inView";

  
export const BlogSec = ({ posts }) => {
    const visible = {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { staggerChildren: 0.5, duration: 0.6 },
      };
      
    const ref = useRef(null);
  
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const mouseXSpring = useSpring(x, { damping: 10 });
    const mouseYSpring = useSpring(y, { damping: 10 });
  
    const top = useTransform(mouseYSpring, [0.5, -0.5], ["49%", "51%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["9%", "11%"]);
  
    // const handleMouseMove = (e) => {
    //   const rect = ref.current.getBoundingClientRect();
  
    //   const width = rect.width;
    //   const height = rect.height;
  
    //   const mouseX = e.clientX - rect.left;
    //   const mouseY = e.clientY - rect.top;
  
    //   const xPct = mouseX / width - 0.5;
    //   const yPct = mouseY / height - 0.5;
  
    //   x.set(xPct);
    //   y.set(yPct);
    // };
  
    const postVariants = {
      hidden: { opacity: 0, y: 50 },
      visible,
    };
    const limitedPosts = posts.slice(0, 3); // Limit the number of posts to 3
    // const history = useNavigate();

    // const handleClick = (id) => {
    //   history.push(`/post/${id}`);
    // };
  
    return (
      <Section
        className="blog"
      >
        <motion.h3 variants={postVariants}>derniers articles</motion.h3>
        <motion.ul className="blogList" variants={postVariants}>
          {limitedPosts.map((post, id) => (
        <motion.a
          href={`/post/${post.id}`}
          ref={ref}
          key={id}
          // onMouseMove={handleMouseMove}
          initial="initial"
          whileHover="whileHover"
          className="postItem"
          // onClick={(e) => {
          //   e.preventDefault();
          //   handleClick(post.id);
          // }}
            >
              <motion.li className="post" variants={postVariants}>
                <div className="metaInfo">
                  <h6>{post.category}</h6>
                  <p>- {post.date}</p>
                </div>
                <h4 className="blogTitle">{post.title}</h4>
                <motion.div
                  className="prodBtn"
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
                  src={post.image}
                  loading="lazy"
                  className="postImg"
                  alt={`Featured Image for blog post ${post.id}`}
                />
              </motion.li>
            </motion.a>
          ))}
        </motion.ul>
      </Section>
    );
  };
  