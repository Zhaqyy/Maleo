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
import { Section } from "../Components/inView";

const paragraph = `Fournir 
les 
solutions 
d’emballage 
les 
plus 
efficaces`;

export default function Home() {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 10, delay: 10 });

  const TargetRef = useRef();
  const speed = 1 / 1.5;
  const { scrollYProgress } = useScroll({
    target: TargetRef,
    offset: ["end end", "end start"],
  });
  // const MoveVidX = useTransform(scrollYProgress, (x) => {
  //   return x === 1 ? "-100vw" : "-50vw";
  // });
  // const MoveVidX = useTransform(scrollYProgress, (x) => x * -100 + "vw");
  // const lerp = (a, b, t) => a * (1 - t) + b * t;
  // const threshold = 0.999;

  // const MoveVidX = useTransform(scrollYProgress, (x) => {
  //   if (x < threshold) {
  //     return "0";
  //   } else {
  //     return `${lerp(0, -100, (x - threshold) / (1 - threshold))}vw`;
  //   }
  // });
  // const MoveVidX = useTransform(scrollYProgress, [0.9, 1], ["0vw", "-100vw"]);
  const MoveY = useTransform(scrollYProgress, [0, 0.1], ["0vh", "-100vh"]);
  const MoveVidY = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.99, 1],
    ["10%", "0%", "0%", "5%"]
  );
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });
  const bg = useTransform(scrollYProgress, (bg) => {
    return bg === 1 ? "#ffffff" : "#000000";
  });
  const z = useTransform(scrollYProgress, (z) => {
    return z === 1 ? 2 : 0;
  });

  const wide = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.6, 1],
    ["15%", "100%", "100%", "30%"]
  );
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.6, 1],
    ["50%", "50%", "50%", "20%"]
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
        style={{ padding: "0", backgroundColor: bg }}
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
              // x: MoveVidX,
              // position,
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
        <motion.section className="vid"></motion.section>

        <motion.section id="canvasWrapper" style={{ zIndex: z }}>
          <Scene />
        </motion.section>
        <motion.section className="vid2"></motion.section>
        <section className="textline">
          <Paragraph paragraph={paragraph} />
        </section>
      </motion.section>
      <ScaleSection />
      <Vid />
    </>
  );
}

const ScaleSection = () => {
  const scaleRef = useRef();

  const { scrollYProgress } = useScroll({
    target: scaleRef,
    offset: ["start end", "end end"],
  });
  const scalee = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const bgg = useTransform(scrollYProgress, [0,0.2, 0.6, 0.95, 1], ["#ffffff","#ffffff", "#000000", "#000000","#ffffff"]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.3 ? "fixed" : "relative";
  });
  const bg = useTransform(scrollYProgress, (bg) => {
    return bg >= 0.31 ? "#000000" : "#ffffff";
  });
  return (
    <motion.section ref={scaleRef} className="scaleSec">
      <motion.section
        className="scale"
        // ref={scaleRef}
        style={{ position: position, background: bgg }}
      ></motion.section>
      <motion.section></motion.section>
      <RedText />
      <motion.section></motion.section>
    </motion.section>
  );
};

const visible = {
  // opacity: 1,
  // x: 0,
  // y: 0,
  // scale: 1,
  top: `100%`,
  transition: { staggerChildren: 0.4, duration: 0.5 },
};

const vidVariants = {
  hidden: {  top: `0%` },
  visible,
};

const Vid = () => {
  const vidRef = useRef();

  const { scrollYProgress } = useScroll({
    target: vidRef,
    offset: ["start end", "end end"],
  });

  const scalee = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const bdr = useTransform(scrollYProgress, [0, 0.9], [10, 50]);
  const wide = useTransform(
    scrollYProgress,
    [0, 0.9],
    ["20%", "80%"]
  );
  const MoveY = useTransform(scrollYProgress, [0, 0.5], ["100vh", "0vh"]);
  return (
    <motion.section
      className="videoSec"
      ref={vidRef}
      // initial="hidden"
      // animate="visible"
      // exit={{ opacity: 0, transition: { duration: 1 } }}
      // variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      {/* <motion.section> */}
      <motion.video
        // variants={vidVariants}
        
        autoPlay
        loop
        muted
        playsInline
        className="mainVid"
        style={
          {
            top: MoveY,
            width: wide,
            scale:scalee,
            borderRadius:bdr
            // height: tall,
            // left: x,
            // x: MoveVidX,
            // position,
          }
        }
      >
        <source src="hero.webm" type="video/webm" />
        <source src="hero.mp4" type="video/mp4" />
      </motion.video>

      {/* </motion.section> */}

    </motion.section>
  );
};
const RedText = () => {
  return (
    <section className="redText">
      <div className="text">
        <h3>
          MALEO est né en 2019, de la contraction de Marine & Léon, mon premier
          enfant. Notre mission est de fournir les meilleures solutions
          d`apos`emballage pour l`apos`expédition et la protection des
          marchandises à nos clients partout en France.
        </h3>
        <div className="redOverlay"></div>
      </div>
    </section>
  );
};
