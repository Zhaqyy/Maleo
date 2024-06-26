/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";


export const Section = ({ children, className }) => {

    const mainControl = useAnimation();

      
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

    useEffect(() => {
     if (isInView){
      mainControl.start("visible")
      // console.log("is in view");
     }
    }, [isInView, mainControl]);
  
    const visible = {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { staggerChildren: 0.5, duration: 0.4 },
    };
  
  return (

     <motion.section
     className={`${className}`}
        ref={ref}
        initial="hidden"
        animate= {mainControl}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        variants={{ visible }}
      >
       {children}
      </motion.section>
  );
}
