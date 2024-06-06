/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { easeInOut, motion, useInView, useScroll, useTransform } from "framer-motion";

import "../Style/Home/Home.css";
import { useEffect, useRef } from "react";
import "../Style/Component/Component.css";
import Paragraph from "../Components/Character";


const paragraph = `Fournir 
les 
solutions 
d’emballage 
les 
plus 
efficaces`;



export const ScaleSection = () => {
    const scaleRef = useRef();
    const smooth = easeInOut;
  
    const { scrollYProgress } = useScroll({
      target: scaleRef,
      offset: ["start end", "end end"],
    });
    console.log(scrollYProgress.get());
    const scalee = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const shift = useTransform(scrollYProgress, [0.6, 1], [0, 1200],
      {ease: smooth});
    const bgg = useTransform(
      scrollYProgress,
      [0, 0.2, 0.4, 0.99, 1],
      ["#ffffff", "#ffffff", "#000000", "#000000", "#ffffff"]
    );
    const position = useTransform(scrollYProgress, (pos) => {
      return pos >= 0.22 ? "fixed" : "relative";
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
        <section></section>
        <RedText shift={shift} />
        <section style={{ height: "10vh" }}></section>
      </motion.section>
    );
  };
  
  const RedText = ({ shift }) => {
    return (
      <section className="redText">
        <div className="text">
          <h3>
            MALEO est né en 2019, de la contraction de Marine & Léon, mon premier
            enfant.
            <br />
            <br />
            Notre mission est de fournir les meilleures solutions d`emballage pour
            l`expédition et la protection des marchandises à nos clients partout
            en France.
          </h3>
          <motion.div
            className="redOverlay"
            style={{ translateX: shift }}
          ></motion.div>
        </div>
      </section>
    );
  };
  
  export const HeroText = () => {
    return (
      <>
      <motion.section className="vid2 "></motion.section>
      <section className="textline">
        <Paragraph paragraph={paragraph} />
      </section>
      </>
    )
  }

  export const Vid = () => {
    const vidRef = useRef();
    const vRef = useRef();
  
    const { scrollYProgress } = useScroll({
      target: vidRef,
      offset: ["start end", "end end"],
    });
    // console.log(scrollYProgress.get());
  
    const scalee = useTransform(scrollYProgress, [0, 0.1], [0.7, 1]);
    const bdr = useTransform(scrollYProgress, [0, 0.1], [10, 50]);
    const wide = useTransform(scrollYProgress, [0, 0.1], ["20%", "80%"]);
    const MoveY = useTransform(scrollYProgress, [0, 0.5], ["100vh", "0vh"]);
  
    const isInView = useInView(vRef);
  
    useEffect(() => {
      const video = vRef.current;
  
      if (isInView) {
        video.play();
      } else {
        video.pause();
      }
    }, [isInView]);
  
    return (
      <motion.section className="videoSec" ref={vidRef}>
        <motion.video
          ref={vRef}
          {...(!isInView && { muted: true })}
          loop
          playsInline
          className="mainVid"
          style={{
            // top: MoveY,
            width: wide,
            scale: scalee,
            borderRadius: bdr,
          }}
        >
          {/* <source src="maleo.webm" type="video/webm" /> */}
          <source src="maleo.mp4" type="video/mp4" />
        </motion.video>
      </motion.section>
    );
  };
  