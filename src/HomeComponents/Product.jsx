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
      { imageSrc: h1, title: "Ruban Adhésif", link: "#", linktext: "View More" },
      { imageSrc: h2, title: "Film Etirable", link: "#", linktext: "View More" },
      { imageSrc: h3, title: "Carton", link: "#", linktext: "View More" },
      { imageSrc: h4, title: "Feuillard", link: "#", linktext: "View More" },
    ];
    const isMobile = window.innerWidth < 768;
    return (
      <>
        {isMobile ? (
          <motion.section className="product">
            <motion.div className="prodHead" variants={hprodVariants}>
              <motion.div className="prodBtn" variants={hprodVariants}>
                <ArrowBtn />
                <SpotBtn text={"QUOTE NOW"} />
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
        ) : (
          <Section
            className="product"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
          >
            <motion.div className="prodHead" variants={hprodVariants}>
              <motion.div className="prodBtn" variants={hprodVariants}>
                <ArrowBtn />
                <SpotBtn text={"QUOTE NOW"} />
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
          </Section>
        )}
      </>
    );
  };
  
  export const LogoDisp = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    // useEffect(() => {
    //   console.log("Element is in view: ", isInView);
    // }, [isInView]);
    return (
      <Section className="LogoDisp">
        <motion.img
          ref={ref}
          src={flogo}
          loading="lazy"
          alt="Maleo Emballage"
          style={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.2,
            y: isInView ? 0 : 200,
          }}
        />
      </Section>
    );
  };