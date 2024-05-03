/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// import "./styles.css";

export const Section = ({ children, className }) => {

    const mainControl = useAnimation();

      
  const ref = useRef(null);
//   const vpRef = useRef(null);
  const isInView = useInView(ref, { amount:"some", margin: "0% 0px 0px 0px" });

    useEffect(() => {
     if (isInView){
      mainControl.start("visible")
     }
    }, [isInView, mainControl]);
  
    const visible = {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.25 },
    };
  
  return (

     <motion.section
     className={`${className}`}
        ref={ref}
        initial="hidden"
        animate= {mainControl}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
       {children}
      </motion.section>
  );
}
