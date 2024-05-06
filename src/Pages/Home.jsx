/* eslint-disable no-unused-vars */
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import MagneticBtn, { SpotBtn } from "../Components/magnetBtn";
import Scene from "../Scene/Scene";
import "../Style/Home/Home.css";
import logo from "/logodark.png";
import arrow from "/arrow.webp";
import { useEffect, useRef } from "react";
import Paragraph from "../Components/Character";
import "../Style/Component/Component.css";
import { Section } from "../Components/inView";
import { ProductList } from "../Components/Common";
import h1 from "/h1.png";
import h2 from "/h2.png";
import h3 from "/h3.png";
import h4 from "/h4.png";

const paragraph = `Fournir 
les 
solutions 
d’emballage 
les 
plus 
efficaces`;

export default function Home() {
  const scrollRef = useRef(null);

  const TargetRef = useRef();
  const speed = 1 / 1.5;
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
      <ScaleSection />
      <Vid />
      <Product/>
    </>
  );
}

const ScaleSection = () => {
  const scaleRef = useRef();

  const { scrollYProgress } = useScroll({
    target: scaleRef,
    offset: ["start end", "end end"],
  });
  console.log(scrollYProgress.get());
  const scalee = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const bgg = useTransform(scrollYProgress, [0,0.2, 0.6, 0.95, 1], ["#ffffff","#ffffff", "#000000", "#000000","#ffffff"]);
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
      <RedText />
      <section style={{height:'50vh'}}></section>
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
  const vRef = useRef();

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
    <motion.section
      className="videoSec"
      ref={vidRef}
      // initial="hidden"
      // animate="visible"
      // exit={{ opacity: 0, transition: { duration: 1 } }}
      // variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.video
        // variants={vidVariants}
        ref={vRef}
        {...(!isInView && { muted: true })}
        loop
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
        {/* <source src="maleo.webm" type="video/webm" /> */}
        <source src="maleo.mp4" type="video/mp4" />
      </motion.video>


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
          d`emballage pour l`expédition et la protection des
          marchandises à nos clients partout en France.
        </h3>
        <div className="redOverlay"></div>
      </div>
    </section>
  );
};


export const Product = () => {

  const products = [
    { imageSrc: h1, title: 'Ruban Adhésif' },
    { imageSrc: h2, title: 'Film Etirable' },
    { imageSrc: h3, title: 'Carton' },
    { imageSrc: h4, title: 'Feuillard' },
  ];
  return (
<section className="product">
  <div className="prodHead">
    <div className="prodBtn">
      <img loading="lazy" src={arrow} />
    <SpotBtn text={"QUOTE NOW"} />
    </div>
    <h1>NOS PRODUITS</h1>
    <h2 className="hollow">sont les meilleurs</h2>
    <p>Découvrez tous nos produits de qualité</p>
  </div>
  <ProductList products={products} />
</section>
    )
}

