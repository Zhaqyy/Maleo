/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { SpotBtn } from "../Components/magnetBtn";
// import Scene from "../Scene/Scene";
import "../Style/Home/Home.css";
import { lazy, useEffect, useRef } from "react";
import "../Style/Component/Component.css";

import logo from "/logobig.png";

const Scene = lazy(() => import("../Scene/Scene"));
const HeroText = lazy(() =>
  import("../HomeComponents/Scale.jsx").then((module) => ({
    default: module.HeroText,
  }))
);

export default function Hero() {
  const scrollRef = useRef(null);

  const TargetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: TargetRef,
    offset: ["end end", "end start"],
  });
  // Log for timeline Sequence

  // useEffect(() => {
  //   // Function to log the rounded scroll progress
  //   const unsubscribe = scrollYProgress.on("change", (latest) => {
  //     const rounded = Math.round(latest * 1000) / 1000; // Round to three decimal places
  //     console.log(rounded);
  //   });

  //   // Clean up the subscription on unmount
  //   return () => unsubscribe();
  // }, [scrollYProgress]);

  const smooth = easeInOut;

  const MoveY = useTransform(scrollYProgress, [0, 0.1], ["0vh", "-115vh"], {
    ease: smooth,
  });

  const bg = useTransform(scrollYProgress, (bg) => {
    return bg === 1 ? "#ffffff" : "#000000";
  });

  const bg1 = useTransform(
    scrollYProgress,
    [0, 0.45, 0.5],
    ["#000000", "#000000", "#dcdcdc"]
  );

  const z = useTransform(scrollYProgress, (z) => {
    return z === 1 ? 2 : 0;
  });
  // Define transformations for desktop
  const MoveVidYDesktop = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.25],
    ["10%", "0%", "0%", "5%"],
    { ease: smooth }
  );

  const wideDesktop = useTransform(
    scrollYProgress,
    [0, 0.08, 0.15, 0.2, 0.25],
    ["20%", "100%", "100%", "100%", "40%"],
    { ease: smooth }
  );

  const xDesktop = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.2, 0.25],
    ["50%", "50%", "50%", "50%", "25%"],
    { ease: smooth }
  );

  const tallDesktop = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.25],
    ["40vh", "70vh", "70vh", "90vh"],
    { ease: smooth }
  );

  // Define transformations for mobile
  const MoveVidYMobile = useTransform(
    scrollYProgress,
    [0.1, 0.11, 0.99, 1],
    ["15%", "15%", "15%", "15%"],
    { ease: smooth }
  );

  const wideMobile = useTransform(
    scrollYProgress,
    [0.1, 0.11, 0.6, 1],
    ["45%", "80%", "80%", "80%"],
    { ease: smooth }
  );

  const xMobile = useTransform(
    scrollYProgress,
    [0.1, 0.105, 0.11, 1],
    ["70%", "60%", "50%", "50%"],
    { ease: smooth }
  );

  const tallMobile = useTransform(
    scrollYProgress,
    [0.1, 0.11, 0.59, 0.6],
    ["200px", "250px", "250px", "250px"],
    { ease: smooth }
  );

  // Choose transforms based on viewport width
  const isMobile = window.innerWidth < 770;

  return (
    <motion.section
      className="wrapper"
      ref={scrollRef}
      style={{
        padding: "0",
        backgroundColor: bg,
        // '--bg-variable': bg
      }}
    >
      <motion.section
        id="hero"
        className="hero"
        ref={TargetRef}
        style={{
          backgroundColor: bg1,
        }}
      >
        <motion.div className="hero-head" style={{ y: MoveY }}>
          <h1 className="hollowdark">
            QUALITÉ
            <br />
            EMBALLAGE
            <br />
            POUR
          </h1>
        </motion.div>
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="hero-vid"
          style={{
            top: isMobile ? MoveVidYMobile : MoveVidYDesktop,
            width: isMobile ? wideMobile : wideDesktop,
            height: isMobile ? tallMobile : tallDesktop,
            left: isMobile ? xMobile : xDesktop,
          }}
        >
          <source src="hero.webm" type="video/webm" />
          <source src="hero.mp4" type="video/mp4" />
        </motion.video>
        <motion.div className="hero-cta" style={{ y: MoveY }}>
          <h3>
            PROTÉGER
            <br />
            VOS
            <br />
            PRODUITS
          </h3>
          <SpotBtn text={"QUOTE NOW"} url={"/Contact"} />
        </motion.div>
        <motion.img loading="lazy" src={logo} style={{ y: MoveY }} />
      </motion.section>
      <motion.section
        className="vid"
        style={{
          backgroundColor: bg1,
        }}
      ></motion.section>

      <motion.section id="canvasWrapper" style={{ zIndex: z }}>
        <Scene />
      </motion.section>
      <HeroText />
    </motion.section>
  );
}
