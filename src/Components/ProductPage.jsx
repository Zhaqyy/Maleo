/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { ProductList } from "./Common";
import { Section } from "./inView";
import logo from "/logobig.png";
import { SpotBtn } from "./magnetBtn";

import "../Style/ProductPage.css";
import "../Style/Contact/contact.css";
import "../Style/Component/Component.css";


// const ProductsPage = ({ product, products }) => {
//   const { title, imageUrl, features, subtitle } = product;

//   return (
//     <>
//       <PHero title={title} imageUrl={imageUrl} features={features} subtitle={subtitle} />
//       <PModel modelTitle={title} products={products} />
//     </>
//   );
// };

// export default ProductsPage;

export const PHero = ({ product }) => {
  const { title, imageUrl, features, subtitle } = product;
  return (
    <section className="prodHero">
      <h1 className="hollow">{title}</h1>
      <div className="pInfo">
        <div>
          <img src={imageUrl} alt={title} />
        </div>
        <div className="pFeature">
          <ul>
            {features &&
              features.map((feature, index) => (
                <li key={index}>
                  <h5>{feature.title}</h5>
                  <h6>{feature.detail}</h6>
                </li>
              ))}
          </ul>
          <h3>{subtitle}</h3>
        </div>
      </div>
    </section>
  );
};

export const PModel = ({ modelTitle, products }) => {
  return (
    <section className="pModel">
      <div className="pModelHeader">
        <h1 className="pModelTitle hollow">{modelTitle}</h1>
      </div>
      <div className="pModelContent">
        <ProductList products={products} />
      </div>
      <motion.img loading="lazy" src={logo} />
    </section>
  );
};

export const PTable = () => {
  return (
    <Section className="pTable">
      <h3>Sheet about feuillard</h3>
      <div className="table">

      </div>
    </Section>
  );
};

export const PContact = ({ products }) => {
  return (
    <Section className="pCont">
      <h1 className="hollow">Let's Talk</h1>
      <div className="cont-form">
        <div id="contact-form">
          <div className="inp-field">
            <input
              name="name"
              autoComplete="name"
              type="text"
              placeholder="Nom Complet"
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
            />
            <span></span>
          </div>

          <div className="inp-field">
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
          </div>
          <div className="inp-field choice">
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
          </div>
          <textarea
            placeholder="Montant"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          {/* <button onClick={submit}>
            Send Message
          </button> */}
          <SpotBtn
            text={"Quote Now"}
            // submit={submit}
          />

          {/* <span className={emailSent ? "visible" : "not-visible"}>
            <p>Thank you for your message, we will be in touch in no time!</p>
          </span>
          <span className={emailSent ? "not-visible" : "visible"}>
            <p>Please Fill in all Fields</p>
          </span> */}
        </div>
      </div>
    </Section>
  );
};
