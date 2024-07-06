/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  easeInOut,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

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
const isMobile = window.innerWidth < 770;

export const ScaleSection = () => {
  const scaleRef = useRef();
  const smooth = easeInOut;

  const { scrollYProgress } = useScroll({
    target: scaleRef,
    offset: ["start end", "end end"],
  });

  // Log for timeline Sequence

  // useEffect(() => {
  //   // Function to log the rounded scroll progress
  //   const unsubscribe = scrollYProgress.onChange((latest) => {
  //     const rounded = Math.round(latest * 1000) / 1000; // Round to three decimal places
  //     console.log(rounded);
  //   });

  //   // Clean up the subscription on unmount
  //   return () => unsubscribe();
  // }, [scrollYProgress]);

  // const scalee = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  // const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const shift = useTransform(scrollYProgress, [0.6, 1], [0, 1200], {
    ease: smooth,
  });
  const bgg = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.2, 0.4, 0.95, 1] : [0, 0.2, 0.4, 0.89, 0.93],
    ["#dcdcdc", "#dcdcdc", "#000000", "#000000", "#ffffff"]
  );
  const position = useTransform(scrollYProgress, (pos) => {
    return pos >= 0.18 ? "fixed" : "relative";
  });
  // const bg = useTransform(scrollYProgress, (bg) => {
  //   return bg >= 0.31 ? "#000000" : "#ffffff";
  // });
  return (
    <motion.section ref={scaleRef} className="scaleSec">
      <motion.section
        className="scale"
        // ref={scaleRef}
        style={{ position: position, background: bgg }}
      ></motion.section>
      <section></section>
      <RedText shift={shift} />
      <Vid />
      {/* <section style={{ height: "10vh" }}></section> */}
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
      <motion.section
        className="vid2"
        style={{
          backgroundColor: "#dcdcdc",
        }}
      ></motion.section>
      <motion.section
        className="textline"
        style={{
          background: "#dcdcdc",
        }}
      >
        <Paragraph paragraph={paragraph} />
      </motion.section>
    </>
  );
};

export const Vid = () => {
  const vidRef = useRef();
  const vRef = useRef();

  const { scrollYProgress } = useScroll({
    target: vidRef,
    offset: ["start 0.3", "end end"],
  });

  // Log for timeline Sequence

  // useEffect(() => {
  //   // Function to log the rounded scroll progress
  //   const unsubscribe = scrollYProgress.onChange((latest) => {
  //     const rounded = Math.round(latest * 1000) / 1000; // Round to three decimal places
  //     console.log(rounded);
  //   });

  //   // Clean up the subscription on unmount
  //   return () => unsubscribe();
  // }, [scrollYProgress]);

  const scalee = useTransform(
    scrollYProgress,
    [0, 0.1, 0.65, 0.8],
    [0.6, 0.8, 0.8, 1],
    easeInOut
  );
  // const bdr = useTransform(scrollYProgress, [0, 0.3], [10, 50]);
  // const wide = useTransform(scrollYProgress, [0, 0.3], ["40%", "80%"]);
  // const MoveY = useTransform(scrollYProgress, [0, 0.5], ["100vh", "0vh"]);

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
          // width: wide,
          scale: isMobile ? 1 : scalee,
          // borderRadius: bdr,
        }}
        preload="none"
        poster="/who.webp"
        disableremoteplayback
        x-webkit-airplay="deny"
      >
        {/* <source src="maleo.webm" type="video/webm" /> */}
        <source src="maleo.mp4" type="video/mp4" />
      </motion.video>
    </motion.section>
  );
};
