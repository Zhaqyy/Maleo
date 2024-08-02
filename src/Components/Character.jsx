/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef, useMemo } from 'react';
import "../Style/Component/Component.css";

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const isMobile = window.innerWidth < 770;
  
  // Single useScroll hook
  const { scrollYProgress, scrollY } = useScroll({
    target: container,
    offset: isMobile ? ["start end", "end 0.9"] : ["start 0.75", "start 0.05"]
  });

  const speed = 1 / 1.5;
  const y = useTransform(scrollY, (value) => value * speed);
  const MoveTextY = useTransform(scrollYProgress, [0.9, 1], ["0vh", "-100vh"]);

  const words = useMemo(() => paragraph.split(" "), [paragraph]);

  return (
    <motion.h2 
      ref={container}         
      className='paragraph'
      // style={{ y: y }} // Uncomment if necessary
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <MemoizedWord key={i} progress={scrollYProgress} range={[start, end]}>{word}</MemoizedWord>;
      })}
    </motion.h2>
  );
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className='word'>
      {children.split("").map((char, i) => {
        const start = range[0] + (i * step);
        const end = range[0] + ((i + 1) * step);
        return <MemoizedChar key={`c_${i}`} progress={progress} range={[start, end]}>{char}</MemoizedChar>;
      })}
    </span>
  );
};

// Memoize Word component to prevent unnecessary re-renders
const MemoizedWord = React.memo(Word);

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span className='shadow'>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

// Memoize Char component to prevent unnecessary re-renders
const MemoizedChar = React.memo(Char);
