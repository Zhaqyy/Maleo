/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ProductList, ProductList2, ProductList3 } from "./Common";
import { Section } from "./inView";
import logo from "/logobig.png";
import { SpotBtn } from "./magnetBtn";
import Table, { Table2 } from "./Table";
import data from "./data.json";

import "../Style/ProductPage.css";
import "../Style/Contact/contact.css";
import "../Style/Component/Component.css";

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

export const PHero = ({ product, theme = "light" }) => {
  const { title, imageUrl, features, subtitle } = product;

  const [visibleIndexes, setVisibleIndexes] = React.useState([]);

  const handleAnimationComplete = (index) => {
    setVisibleIndexes((prev) => [...prev, index]);
  };

  return (
    <Section className="prodHero">
      <motion.h1
        className={`${theme === "dark" ? "hollowdark" : "hollow"}`}
        // variants={prodVariants}
      >
        {title}
      </motion.h1>
      <div className="fade pInfo">
        <motion.div variants={prodVariants}>
          <img src={imageUrl} alt={title} loading="lazy" />
        </motion.div>
        <div className={`pFeature ${theme === "dark" ? "dark" : ""}`}>
          <motion.ul variants={prodVariants}>
            {features &&
              features.map((feature, index) => (
                <motion.li
                  key={index}
                  className={` ${
                    visibleIndexes.includes(index) ? "animate" : ""
                  }`}
                  variants={prodVariants}
                  onAnimationComplete={() => handleAnimationComplete(index)}
                >
                  <h5>{feature.title}</h5>
                  <h6>{feature.detail}</h6>
                </motion.li>
              ))}
          </motion.ul>
          <motion.h3 variants={prodVariants}>{subtitle}</motion.h3>
        </div>
      </div>
      <motion.img loading="lazy" className="fade bgLogo" src={logo} />
    </Section>
  );
};

export const PModel = ({ modelTitle, products, theme = "dark" }) => {
  return (
    <motion.section className="pModel">
      <div className="pModelHeader">
        <motion.h1
          className={`pModelTitle ${
            theme === "dark" ? "hollowdark" : "hollow"
          }`}
          // variants={prodVariants}
        >
          {modelTitle}
        </motion.h1>
      </div>
      <motion.div
        className={`fade pModelContent ${theme === "light" ? "light" : ""}`}
        variants={prodVariants}
      >
        <ProductList products={products} />
      </motion.div>
      <motion.img loading="lazy" className="fade bgLogo" src={logo} />
    </motion.section>
  );
};
export const PModel2 = ({
  modelTitle,
  products,
  theme = "dark",
  model = true,
}) => {
  return (
    <motion.section className="pModel">
      <div className="pModelHeader">
        <motion.h1
          className={`pModelTitle ${
            theme === "dark" ? "hollowdark" : "hollow"
          }`}
          // variants={prodVariants}
        >
          {modelTitle}
        </motion.h1>
      </div>
      <motion.div
        className={`fade pModelContent ${theme === "light" ? "light" : ""}`}
        variants={prodVariants}
      >
        {model ? (
          <ProductList2 products={products} />
        ) : (
          <ProductList3 products={products} />
        )}
      </motion.div>
      <motion.img loading="lazy" className="fade bgLogo" src={logo} />
    </motion.section>
  );
};

export const PTable = ({ product, set }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (set === "tape") {
      setTableData(data.Tape);
    } else if (set === "feuillard") {
      setTableData(data.feuillard);
    }
  }, [set]);

  return (
    <Section className="pTable">
      <motion.h3
      // variants={prodVariants}
      >
        FEUILLE À PROPOS DE {product.title}
      </motion.h3>
      <motion.div className="fade table">
        {set === "tape" ? (
          <Table data={tableData} />
        ) : (
          <Table2 data={tableData} />
        )}
      </motion.div>
    </Section>
  );
};

export const PContact = ({ products, products2, theme }) => {
  return (
    <Section className="pCont">
      <motion.h1
        className={`${theme === "dark" ? "hollowdark" : "hollow"}`}
        // variants={prodVariants}
      >
        PARLONS-EN
      </motion.h1>
      <motion.div
        id="citation"
        className={`fade cont-form ${theme === "dark" ? "dark" : ""}`}
      >
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
              text={"DEVISER MAINTENANT"}
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
      </motion.div>
    </Section>
  );
};

// export const Pwrap = ({ children, bgSequence, timeline }) => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   // Log for timeline Sequence

//   // useEffect(() => {
//   //   // Function to log the rounded scroll progress
//   //   const unsubscribe = scrollYProgress.onChange((latest) => {
//   //     const rounded = Math.round(latest * 1000) / 1000; // Round to three decimal places
//   //     console.log(rounded);
//   //   });

//   //   // Clean up the subscription on unmount
//   //   return () => unsubscribe();
//   // }, [scrollYProgress]);

//   const bg = useTransform(scrollYProgress, timeline, bgSequence);

//   return (
//     <motion.section
//       ref={ref}
//       className="Pwrap"
//       style={{
//         backgroundColor: bg,
//         "--bg-variable": bg,
//       }}
//     >
//       {React.Children.map(children, (child, index) => {
//         const isLastChild = index === React.Children.count(children) - 1;

//         const ChildWrapper = (props) => {
//           const childRef = useRef(null);
//           const isInView = useInView(childRef, {
//             margin: isLastChild ? "0% 0px -50% 0px" : "-50% 0px -50% 0px",
//           });

//           useEffect(() => {
//             console.log("ChildWrapper mounted");
//             return () => {
//               console.log("ChildWrapper unmounted");
//             };
//           }, []);
        
//           const addTestingClassToFade = (element) => {
//             // console.log("Checking element:", element);
            
//             if (React.isValidElement(element)) {
//               // console.log("Valid element found:", element);
        
//               // Check if the element has a className containing "fade"
//               const { className } = element.props;
//               if (className) {
                
//                 console.log(className);
//               }
//               if (className && className.includes("fade")) {
//                 console.log("Found element with className 'fade':", element);
//                 return React.cloneElement(element, {
//                   className: `${className} testing`
//                 });
//               } else {
//                 // Recursively process children of elements without "fade" className
//                 const { children } = element.props;
//                 if (children) {
//                   return React.cloneElement(element, {
//                     ...element.props,
//                     children: React.Children.map(children, child => 
//                       addTestingClassToFade(child))
//                   });
//                 }
//               }
//             }
//             return element;
//           };
//           return (
//             <motion.div
//               ref={childRef}
//               style={{
//                 // opacity: isInView ? 1 : 0,
//                 // transition: "opacity 0.5s ease",
//                 "--op-variable": isInView ? 1 : 0,
//               }}
//               className="secWrap"
//             >
//         {React.Children.map(children, (child, index) => {
//           if (child.props) {
//             console.log(child.props.section)
//         }
//           return addTestingClassToFade(child);
//         })}
//             </motion.div>
//           );
//         };
//         return <ChildWrapper />;
//       })}
//     </motion.section>
//   );
// };

export const Pwrap = ({ children, bgSequence, timeline }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bg = useTransform(scrollYProgress, timeline, bgSequence);
  // const bgVariable = `var(--bg-${bg})`;
  // const titleClass = bg === 'var(--bg-white)' ? 'titleDark' : bg === 'var(--bg-black)' ? 'titleLight' : '';

  // const addClassToH1 = (element) => {
  //   if (React.isValidElement(element)) {
  //     if (element.type === 'div') {
  //       console.log("h1 seen");
  //       return React.cloneElement(element, {
  //         className: `${element.props.className || ''} test`,
  //       });
  //     }
  //     if (element.props && element.props.children) {
  //       console.log("h1 class added");
  //       return React.cloneElement(element, {
  //         children: React.Children.map(element.props.children, addClassToH1),
  //       });
  //     }
  //   }
  //   return element;
  // };

  return (
    <motion.section
      ref={ref}
      className="Pwrap"
      style={{
        backgroundColor: bg,
        "--bg-variable": bg,
      }}
    >
      {React.Children.map(children, (child, index) => {
        const isLastChild = index === React.Children.count(children) - 1;

        const ChildWrapper = (props) => {
          const childRef = useRef(null);
          const isInView = useInView(childRef, {
            margin: isLastChild ? '0% 0px -50% 0px' : '-50% 0px -50% 0px',
          });

          return (
            <motion.div
              ref={childRef}
              style={{
                '--op-variable': isInView ? 1 : 0,
              }}
              className="secWrap"
            >
              {React.cloneElement(child, { ...props })}
            </motion.div>
          );
        };
        return <ChildWrapper key={index} />;
      })}
    </motion.section>
  );
};
