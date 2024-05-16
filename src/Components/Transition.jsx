import { motion } from 'framer-motion'
import "../App.css";

const Transition = (Page) => {

  return (
<>
<Page/>


<motion.div 
className='slideIn'
initial={{scaleY:0}}
animate={{scaleY:0}}
exit={{scaleY:1}}
transition={{duration:1, ease:[0.25, 1, 0.35, 1], delay: 5}}
/>


<motion.div
className='slideOut'
initial={{scaleY:1}}
animate={{scaleY:0}}
exit={{scaleY:0}}
transition={{duration:1, ease:[0.25, 1, 0.35, 1], delay: 5}}
/>
</>
    )
}

export default Transition