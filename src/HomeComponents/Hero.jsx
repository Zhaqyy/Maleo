/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { SpotBtn } from "../Components/magnetBtn";
import Scene from "../Scene/Scene";
import "../Style/Home/Home.css";
import { useRef } from "react";
import Paragraph from "../Components/Character";
import "../Style/Component/Component.css";

import logo from "/logobig.png";


const paragraph = `Fournir 
les 
solutions 
d’emballage 
les 
plus 
efficaces`;


export default function Hero()  {
    const scrollRef = useRef(null);
  
    const TargetRef = useRef();
    const speed = 1 / 1.5;
    const { scrollYProgress } = useScroll({
      target: TargetRef,
      offset: ["end end", "end start"],
    });
  
    // console.log(scrollYProgress.get());
  
    const MoveY = useTransform(scrollYProgress, [0, 0.1], ["0vh", "-100vh"]);
  
    const position = useTransform(scrollYProgress, (pos) => {
      return pos === 1 ? "relative" : "fixed";
    });
    const canvasPosition = useTransform(scrollYProgress, (pos) => {
      return pos >= 1 ? "relative" : "fixed";
    });
    const bg = useTransform(scrollYProgress, (bg) => {
      return bg === 1 ? "#ffffff" : "#000000";
    });
    const z = useTransform(scrollYProgress, (z) => {
      return z === 1 ? 2 : 0;
    });
  
    // Define transformations for desktop
    const MoveVidYDesktop = useTransform(
      scrollYProgress,
      [0.1, 0.2, 0.99, 1],
      ["10%", "0%", "0%", "5%"]
    );
  
    const wideDesktop = useTransform(
      scrollYProgress,
      [0.1, 0.2, 0.6, 1],
      ["15%", "100%", "100%", "30%"]
    );
  
    const xDesktop = useTransform(
      scrollYProgress,
      [0.1, 0.2, 0.6, 1],
      ["50%", "50%", "50%", "20%"]
    );
  
    const tallDesktop = useTransform(
      scrollYProgress,
      [0.1, 0.2, 0.59, 0.6],
      ["300px", "500px", "500px", "700px"]
    );
  
    // Define transformations for mobile
    const MoveVidYMobile = useTransform(
      scrollYProgress,
      [0.1, 0.2, 0.99, 1],
      ["15%", "15%", "15%", "15%"]
    );
  
    const wideMobile = useTransform(
      scrollYProgress,
      [0.1, 0.2, 0.6, 1],
      ["45%", "80%", "80%", "80%"]
    );
  
    const xMobile = useTransform(
      scrollYProgress,
      [0.1, 0.2, 0.6, 1],
      ["70%", "60%", "50%", "50%"]
    );
  
    const tallMobile = useTransform(
      scrollYProgress,
      [0.1, 0.2, 0.59, 0.6],
      ["200px", "250px", "250px", "250px"]
    );
  
    // Choose transforms based on viewport width
    const isMobile = window.innerWidth < 770;
  
    return (
      <motion.section
        className="wrapper"
        ref={scrollRef}
        style={{ padding: "0", backgroundColor: bg }}
      >
        <motion.section className="hero" ref={TargetRef}>
          <motion.div className="hero-head" style={{ y: MoveY }}>
            <h1 className="hollowdark">
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
              PROTECT
              <br />
              YOUR
              <br />
              PRODUCTS
            </h3>
            <SpotBtn text={"QUOTE NOW"} />
          </motion.div>
          <motion.img loading="lazy" src={logo} style={{ y: MoveY }} />
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
    );
  }
  