/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { motion, useScroll, useTransform } from "framer-motion";
import { ProductList, ProductList2 } from "./Common";
import { Section } from "./inView";
import logo from "/logobig.png";
import { SpotBtn } from "./magnetBtn";

import "../Style/ProductPage.css";
import "../Style/Contact/contact.css";
import "../Style/Component/Component.css";
import { useRef } from "react";

const visible = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  transition: { staggerChildren: 0.6, duration: 0.7 },
};

const prodVariants = {
  hidden: { opacity: 0, y: 20 },
  visible,
};

export const PHero = ({ product }) => {
  const { title, imageUrl, features, subtitle } = product;
  return (
    <Section className="prodHero">
      <motion.h1 className="hollow" variants={prodVariants}>
        {title}
      </motion.h1>
      <div className="pInfo">
        <motion.div variants={prodVariants}>
          <img src={imageUrl} alt={title} loading="lazy" />
        </motion.div>
        <div className="pFeature">
          <motion.ul variants={prodVariants}>
            {features &&
              features.map((feature, index) => (
                <motion.li key={index} variants={prodVariants}>
                  <h5>{feature.title}</h5>
                  <h6>{feature.detail}</h6>
                </motion.li>
              ))}
          </motion.ul>
          <motion.h3 variants={prodVariants}>{subtitle}</motion.h3>
        </div>
      </div>
    </Section>
  );
};

export const PModel = ({ modelTitle, products, theme = 'dark' }) => {
  const ref = useRef(null);

const dark = [`var(--bg-white)`, `var(--bg-white)`, `var(--bg-black)`, `var(--bg-black)`, `var(--bg-white)`]
const light = [`var(--bg-black)`, `var(--bg-black)`, `var(--bg-white)`, `var(--bg-white)`, `var(--bg-black)`]

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.15"],
  });
  const bg = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.97, 1],
    theme === 'dark' ? dark : light
  );

  return (
    <motion.section
    ref={ref}
      className="pModel"
      style={{
        backgroundColor: bg,
        '--bg-variable': bg,
      }}
    >
      <div className="pModelHeader">
        <motion.h1 className={`pModelTitle ${theme === 'dark' ? 'hollowdark' : 'hollow'}`} variants={prodVariants}>
          {modelTitle}
        </motion.h1>
      </div>
      <motion.div className={`pModelContent ${theme === 'light' ? 'light' : ''}`} variants={prodVariants}>
        <ProductList products={products} />
      </motion.div>
      <motion.img loading="lazy" src={logo} />
    </motion.section>
  );
};
export const PModel2 = ({ modelTitle, products, theme = 'dark' }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.15"],
  });

  const dark = [`var(--bg-white)`, `var(--bg-white)`, `var(--bg-black)`, `var(--bg-black)`, `var(--bg-white)`]
const light = [`var(--bg-black)`, `var(--bg-black)`, `var(--bg-white)`, `var(--bg-white)`, `var(--bg-black)`]

  const bg = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.97, 1],
    theme === 'dark' ? dark : light
  );

  return (
    <motion.section
    ref={ref}
      className="pModel"
      style={{
        backgroundColor: bg,
        '--bg-variable': bg,
      }}
    >
      <div className="pModelHeader">
        <motion.h1 className={`pModelTitle ${theme === 'dark' ? 'hollowdark' : 'hollow'}`} variants={prodVariants}>
          {modelTitle}
        </motion.h1>
      </div>
      <motion.div className={`pModelContent ${theme === 'light' ? 'light' : ''}`} variants={prodVariants}>
        <ProductList2 products={products} />
      </motion.div>
      <motion.img loading="lazy" src={logo} />
    </motion.section>
  );
};

export const PTable = () => {
  return (
    <Section className="pTable">
      <motion.h3 variants={prodVariants}>Sheet about feuillard</motion.h3>
      <div className="table"></div>
    </Section>
  );
};

export const PContact = ({ products,products2 }) => {
  return (
    <Section className="pCont">
      <motion.h1 className="hollow" variants={prodVariants}>
        Let's Talk
      </motion.h1>
      <div className="cont-form">
        <motion.div id="contact-form">
          <motion.div className="inp-field" variants={prodVariants}>
            <input
              name="name"
              autoComplete="name"
              type="text"
              placeholder="Nom Complet"
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
            />
            <span></span>
          </motion.div>

          <motion.div className="inp-field" variants={prodVariants}>
            <input
              name="email"
              autoComplete="email"
              type="email"
              placeholder="E-mail"
              //   value={email}
              required
              //   onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
          </motion.div>
          <motion.div className="inp-field choice" variants={prodVariants}>
            <label htmlFor="Choice">choisir une option</label>
            <select name="Choice" id="Choice">
              {products &&
                products.map((product, index) => (
                  <option key={index} value={product.title}>
                    {product.title}
                  </option>
                ))}
            </select>

            {/* onChange={(e) => setPhone(e.target.value)} */}
            <span></span>
          </motion.div>


          {products2 && products2.length > 0 && (
        <motion.div className="inp-field choice" variants={prodVariants}>
          <label htmlFor="Choice2">Impression</label>
          <select name="Choice2" id="Choice2">
            {products2.map((product2, index) => (
              <option key={index} value={product2.title}>
                {product2.title}
              </option>
            ))}
          </select>
          <span></span>
        </motion.div>
      )}

          <motion.textarea
            placeholder="Montant"
            variants={prodVariants}
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
          ></motion.textarea>

          {/* <button onClick={submit}>
            Send Message
          </button> */}
          <motion.div variants={prodVariants}>
            <SpotBtn
              text={"Quote Now"}
              // submit={submit}
            />
          </motion.div>

          {/* <span className={emailSent ? "visible" : "not-visible"}>
            <p>Thank you for your message, we will be in touch in no time!</p>
          </span>
          <span className={emailSent ? "not-visible" : "visible"}>
            <p>Please Fill in all Fields</p>
          </span> */}
        </motion.div>
      </div>
    </Section>
  );
};
