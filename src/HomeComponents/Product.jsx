/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowBtn, SpotBtn } from "../Components/magnetBtn";
import "../Style/Home/Home.css";
import { useEffect, useRef } from "react";
import "../Style/Component/Component.css";
import { Section } from "../Components/inView";
import { ProductList } from "../Components/Common";
import flogo from "/fullpink.png";
import h1 from "/h1.png";
import h2 from "/h2.png";
import h3 from "/h3.png";
import h4 from "/h4.png";

const visible = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  transition: { staggerChildren: 0.5, duration: 0.7 },
};

export const Product = () => {
  const hprodVariants = {
    hidden: { opacity: 0, y: 50 },
    visible,
  };
  const imgVariants = {
    hidden: { opacity: 0, x: "-600px" },
    visible,
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();
  useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [controls, isInView]);

  const products = [
    {
      imageSrc: h1,
      title: "Ruban Adhésif",
      link: "/Tape",
      linktext: "Voir Plus",
    },
    {
      imageSrc: h2,
      title: "Film Étirable",
      link: "/Sfilm",
      linktext: "Voir Plus",
    },
    {
      imageSrc: h3,
      title: "Carton",
      link: "/Cardboard",
      linktext: "Voir Plus",
    },
    {
      imageSrc: h4,
      title: "Feuillard",
      link: "/feuillard",
      linktext: "Voir Plus",
    },
  ];
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <Section
        className="product"
        id="product"
        // ref={ref}
        // animate={controls}
        // initial="hidden"
        // variants={{visible}}
      >
        <motion.div className="prodHead" variants={hprodVariants}>
          <motion.div className="prodBtn" variants={hprodVariants}>
            <ArrowBtn />
            <SpotBtn text={"DEVISER MAINTENANT"} />
          </motion.div>
          <motion.h1 variants={hprodVariants}>
            NOS PRODUITS
            <motion.img ref={ref} variants={imgVariants} src="/mal.svg" loading="lazy" />
          </motion.h1>
          <motion.h2 className="hollow" variants={hprodVariants}>
            sont les meilleurs
          </motion.h2>
          <motion.p variants={hprodVariants}>
            Découvrez tous nos produits de qualité
          </motion.p>
        </motion.div>
        <ProductList products={products} />
      </Section>
    </>
  );
};

export const LogoDisp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section className="LogoDisp">
      <motion.img
        ref={ref}
        src={flogo}
        loading="lazy"
        alt="Maleo Emballage"
        style={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.5,
          y: isInView ? 0 : 200,
          transitionDuration: "0.5s",
          aspectRatio: 1,
        }}
      />
    </motion.section>
  );
};
