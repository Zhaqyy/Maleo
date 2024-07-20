/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";


export const Section = ({ children, className, ...prop }) => {

      
    const visible = {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { staggerChildren: 0.1, duration: 0.5,ease:"easeInOut" },
    };
    
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();
  useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [controls, isInView]);


  return (

     <motion.section
     className={`${className}`}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{visible}}
        {...prop}
      >
       {children}
      </motion.section>
  );
}
