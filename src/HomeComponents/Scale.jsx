/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  easeInOut,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

import "../Style/Home/Home.css";
import { useEffect, useRef, useState } from "react";
import "../Style/Component/Component.css";
import Paragraph from "../Components/Character";

const paragraph = `
Les 
meilleures 
solutions 
d'emballage
`;
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
  //   const unsubscribe = scrollYProgress.on("change", (latest) => {
  //     const rounded = Math.round(latest * 1000) / 1000; // Round to three decimal places
  //     console.log(rounded);
  //   });

  //   // Clean up the subscription on unmount
  //   return () => unsubscribe();
  // }, [scrollYProgress]);

  const shift = useTransform(
    scrollYProgress,
    isMobile ? [0.85, 1] : [0.6, 1],
    [0, 1200],
    {
      ease: smooth,
    }
  );
  const bgg = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.3, 0.54, 0.95, 1] : [0, 0.2, 0.4, 0.825, 0.9],
    ["#dcdcdc", "#dcdcdc", "#000000", "#000000", "#ffffff"]
  );
  const bgCol = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.3, 0.54, 0.95, 1] : [0, 0.2, 0.4, 0.825, 0.9],
    ["#dcdcdc", "#dcdcdc", "#000000", "#000000", "#000000"]
  );
  // const opac = useTransform(
  //   scrollYProgress,
  //   isMobile ? [0, 0.15] : [0, 0.0001],
  //   [0, 1]
  // );
  const position = useTransform(scrollYProgress, (pos) => {
    return isMobile
      ? pos >= 0.25
        ? "fixed"
        : "relative"
      : pos >= 0.18
      ? "fixed"
      : "relative";
  });

  // const display = useTransform(scrollYProgress, (pos) => {
  //   return pos === 1 ? "none" : "block";
  // });

  return (
    <motion.section ref={scaleRef} className="scaleSec">
      <motion.section
        className="scale"
        // ref={scaleRef}
        style={{
          position: position,
          background: bgg,
          // display: display,
          // opacity: isMobile ? opac : 1,
        }}
      ></motion.section>
      <motion.section
        style={
          isMobile
            ? { backgroundColor: bgCol }
            : {
                backgroundColor: "#dcdcdc",
              }
        }
        className="scaleExt"
      ></motion.section>
      <RedText shift={shift} bgCol={bgCol} />
      <Vid />
    </motion.section>
  );
};

const RedText = ({ shift, bgCol }) => {
  return (
    <motion.section
      className="redText"
      style={isMobile ? { backgroundColor: bgCol } : undefined}
    >
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
    </motion.section>
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

  const scalee = useTransform(scrollYProgress, [0, 0.1], [0.8, 1], easeInOut);

  const isInView = useInView(vRef);

  //autoplay logic

  // useEffect(() => {
  //   const video = vRef.current;

  //   if (isInView) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }
  // }, [isInView]);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isInView) {
      vRef.current.pause();
    }
  }, [isInView]);

  const togglePlay = () => {
    if (vRef.current.paused || vRef.current.ended) {
      vRef.current.play();
    } else {
      vRef.current.pause();
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <motion.section className="videoSec" ref={vidRef}>
      <div className="control">
        <motion.video
          ref={vRef}
          // {...(!isInView && { muted: true })}
          // muted
          // autoPlay
          // loop
          playsInline
          className="mainVid"
          style={{
            scale: isMobile ? 1 : scalee,
          }}
          preload="none"
          poster="/who.webp"
          // controls
          disableRemotePlayback
          // x-webkit-airplay="deny"
          onPlay={handlePlay}
          onPause={handlePause}
        >
          {/* <source src="maleo.webm" type="video/webm" /> */}
          <source src="maleo.mp4" type="video/mp4" />
        </motion.video>
        <motion.div
          title="Play video"
          id="circle-play-b"
          onClick={togglePlay}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            opacity: isPlaying ? 0 : 1,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
            <path d="M40 0a40 40 0 1040 40A40 40 0 0040 0zM26 61.56V18.44L64 40z" />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
};
