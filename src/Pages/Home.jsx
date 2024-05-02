/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticBtn, { SpotBtn } from "../Components/magnetBtn";
import Scene from "../Scene/Scene";
import "../Style/Home/Home.css";
import logo from "/logodark.png";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Paragraph from "../Components/Character";
import "../Style/Component/Component.css";


const paragraph = `Fournir 
les 
solutions 
d’emballage 
les 
plus 
efficaces`

export default function Home() {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 10, delay: 10 });

  const TargetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: TargetRef,
    offset: ["end end", "end start"],
  });
  const MoveY = useTransform(scrollYProgress, [0, 0.1], ["0vh", "-100vh"]);
  const MoveVidY = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.99, 1],
    ["10%", "0%", "0%", "5%"]
  );
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });
  const wide = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.6, 1],
    ["15%", "100%", "100%", "40%"]
  );
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.6, 1],
    ["50%", "50%", "50%", "25%"]
  );
  const tall = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.59, 0.6],
    ["300px", "500px", "500px", "700px"]
  );
  const bright = useTransform(scrollYProgress, [0.1, 0.2], ["0.25", "0.75"]);
  // const fil = filter=`brightness(${bright})`;
  return (
    <>
      <motion.section
        className="wrapper"
        ref={scrollRef}
        style={{ padding: "0" }}
      >
        <motion.section className="hero" ref={TargetRef}>
          <motion.div className="hero-head" style={{ y: MoveY }}>
            <h1 className="hollow">
              QUALITY
              <br />
              PACKAGING
              <br />
              TO
            </h1>
          </motion.div>
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="hero-vid"
            style={{
              top: MoveVidY,
              width: wide,
              height: tall,
              left: x,
            //   position,
            }}
          >
            <source src="hero.webm" type="video/webm" />
            <source src="hero.mp4" type="video/mp4" />
          </motion.video>
          <motion.div className="hero-cta" style={{ y: MoveY }}>
            <h3>
              PROTECT
              <br />
              YOUR
              <br />
              PRODUCTS
            </h3>
            <SpotBtn text={"QUOTE NOW"} />
          </motion.div>
          <motion.img src={logo} style={{ y: MoveY }} />
        </motion.section>
        <section id="canvasWrapper">
          <Scene />
        </section>
        <motion.section className="vid"></motion.section>
        <section className="textline">
        <Paragraph paragraph={paragraph} />
          {/* <h2>
            Fournir <br />
            les <br />
            solutions <br />
            d’emballage <br />
            les <br />
            plus <br />
            efficaces
          </h2> */}
        </section>
      </motion.section>
    </>
  );
}
