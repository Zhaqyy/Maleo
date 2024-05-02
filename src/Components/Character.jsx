/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import "../Style/Component/Component.css";


export default function Paragraph({paragraph}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.65", "start 0.25"]
  })

  const words = paragraph.split(" ")
  return (
    <h2 
      ref={container}         
      className='paragraph'
    >
    {
      words.map( (word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })
    }
    </h2>
  )
}

const Word = ({children, progress, range}) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className='word'>
      {
        children.split("").map((char, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
        })
      }
    </span>
  )
}

const Char = ({children, progress, range}) => {
  const opacity = useTransform(progress, range, [0,1])
  return (
    <span>
      <span className='shadow'>{children}</span>
      <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>
  )
}
