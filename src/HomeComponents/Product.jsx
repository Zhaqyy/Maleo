/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { ArrowBtn, SpotBtn } from "../Components/magnetBtn";
import "../Style/Home/Home.css";
import { useRef } from "react";
import "../Style/Component/Component.css";
import { Section } from "../Components/inView";
import { ProductList } from "../Components/Common";
import flogo from "/flogo.svg";
import h1 from "/h1.png";
import h2 from "/h2.png";
import h3 from "/h3.png";
import h4 from "/h4.png";


const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { staggerChildren: 0.5, duration: 0.6 },
  };
  
  export const Product = () => {
    const hprodVariants = {
      hidden: { opacity: 0, y: 50 },
      visible,
    };
  
    const products = [
      { imageSrc: h1, title: "Ruban Adhésif", link: "/Tape", linktext: "View More" },
      { imageSrc: h2, title: "Film Etirable", link: "/Sfilm", linktext: "View More" },
      { imageSrc: h3, title: "Carton", link: "/Cardboard", linktext: "View More" },
      { imageSrc: h4, title: "Feuillard", link: "/feuillard", linktext: "View More" },
    ];
    const isMobile = window.innerWidth < 768;
    return (
      <>
        (
          <motion.section
            className="product"
            id="product"
          >
            <motion.div className="prodHead" variants={hprodVariants}>
              <motion.div className="prodBtn" variants={hprodVariants}>
                <ArrowBtn />
                <SpotBtn text={"DEVISER MAINTENANT"} />
              </motion.div>
              <motion.h1 variants={hprodVariants}>NOS PRODUITS</motion.h1>
              <motion.h2 className="hollow" variants={hprodVariants}>
                sont les meilleurs
              </motion.h2>
              <motion.p variants={hprodVariants}>
                Découvrez tous nos produits de qualité
              </motion.p>
            </motion.div>
            <ProductList products={products} />
          </motion.section>
        )
      </>
    );
  };
  
  export const LogoDisp = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
  
    return (
      <Section className="LogoDisp">
        <motion.img
          ref={ref}
          src={flogo}
          loading="lazy"
          alt="Maleo Emballage"
          style={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.5,
            y: isInView ? 0 : 200,
            transitionDuration:'0.5s'
          }}
        />
      </Section>
    );
  };