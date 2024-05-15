/* eslint-disable no-unused-vars */
import React from "react";
import Map from "../Components/Map";
import "../Style/Contact/contact.css";
import { SpotBtn } from "../Components/magnetBtn";
import { Section } from "../Components/inView";
import { motion } from "framer-motion";


export default function Contact() {
  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { staggerChildren: 0.5, duration: 0.6 },
  };
  
    const contVariants = {
      hidden: { opacity: 0, y: 50 },
      visible,
    };
  
  return (
    <>
      <Section className="contact-main">
        <motion.div className="cont-map" variants={{
              hidden: { opacity: 0, scale: 0.7 },
              visible,
            }}>
          <Map />
        </motion.div>

        <motion.div className="cont-form">
          <motion.h1 className="hollow" variants={contVariants}>Contactez -nous</motion.h1>
          <motion.h4 variants={contVariants}>laissez-nous un message</motion.h4>
          <motion.div id="contact-form">
            <motion.div className="inp-field" variants={contVariants}>
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
            <motion.div className="inp-field" variants={contVariants}>
              <input
                name="tel"
                autoComplete="tel"
                type="tel"
                placeholder="Téléphone"
                required
                // onChange={(e) => setPhone(e.target.value)}
              />
              <span></span>
            </motion.div>
            <motion.div className="inp-field" variants={contVariants}>
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

            <motion.textarea
            variants={contVariants}
              placeholder="Message"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
            ></motion.textarea>

            {/* <button onClick={submit}>
            Send Message
          </button> */}
          <motion.div variants={contVariants} style={{textAlign: "center"}}>
            <SpotBtn
            text={"ENVOYER"}
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
      <Section className="cont-info">
        <motion.div className="cont-info-text">
          <motion.h3 variants={contVariants}>
            assistance <br /> rapide
          </motion.h3>
          <motion.h1 className="hollow" variants={contVariants}>CONTACT</motion.h1>
        </motion.div>
        <div className="cont-detail">
          <ul>
            <motion.li>
              <motion.svg variants={contVariants}
                width="60"
                height="69"
                viewBox="0 0 60 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M51.2135 9.45482C56.7213 14.9619 59.8713 22.3952 59.9976 30.1829C60.1239 37.9705 57.2165 45.502 51.8902 51.1848L51.2135 51.8848L37.0702 66.0248C35.2756 67.8183 32.8664 68.8625 30.3307 68.9461C27.795 69.0296 25.3223 68.1462 23.4135 66.4748L22.9335 66.0248L8.78685 51.8815C3.16073 46.2554 0 38.6247 0 30.6682C0 22.7116 3.16073 15.0809 8.78685 9.45482C14.413 3.82869 22.0436 0.667969 30.0002 0.667969C37.9567 0.667969 45.5874 3.82869 51.2135 9.45482ZM30.0002 20.6682C28.687 20.6682 27.3866 20.9268 26.1734 21.4294C24.9601 21.9319 23.8577 22.6685 22.9291 23.5971C22.0005 24.5257 21.2639 25.6281 20.7614 26.8413C20.2588 28.0546 20.0002 29.3549 20.0002 30.6682C20.0002 31.9814 20.2588 33.2817 20.7614 34.495C21.2639 35.7082 22.0005 36.8106 22.9291 37.7392C23.8577 38.6678 24.9601 39.4044 26.1734 39.9069C27.3866 40.4095 28.687 40.6682 30.0002 40.6682C32.6524 40.6682 35.1959 39.6146 37.0713 37.7392C38.9466 35.8639 40.0002 33.3203 40.0002 30.6682C40.0002 28.016 38.9466 25.4724 37.0713 23.5971C35.1959 21.7217 32.6524 20.6682 30.0002 20.6682Z" />
              </motion.svg>

              <motion.h5 variants={contVariants}>Rendez nous visite</motion.h5>
              <motion.p variants={contVariants}>12 avenue de la Motte Picquet 75007 Paris</motion.p>
            </motion.li>
            <motion.li>
              <motion.svg variants={contVariants}
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.0013 1.30134e-07C24.5989 -0.000166832 25.1856 0.160329 25.6999 0.464686C26.2142 0.769042 26.6372 1.20607 26.9246 1.73L27.0946 2.09667L33.7613 18.7633C34.0298 19.4339 34.0732 20.1735 33.8851 20.8708C33.6969 21.5682 33.2873 22.1855 32.718 22.63L32.3846 22.8567L26.8046 26.2033L27.0146 26.5467C29.6705 30.7633 33.238 34.3308 37.4546 36.9867L37.7946 37.1933L41.1446 31.62C41.5159 31.0003 42.0784 30.5179 42.7475 30.2456C43.4167 29.9733 44.1561 29.9257 44.8546 30.11L45.238 30.24L61.9046 36.9067C62.4596 37.1281 62.9448 37.4946 63.3096 37.9678C63.6743 38.441 63.9052 39.0036 63.978 39.5967L64.0013 40V53.3333C64.0013 58.8567 59.5246 63.3333 53.8013 63.3267C25.2046 61.59 2.40797 38.7933 0.667969 10C0.667827 7.4493 1.64239 4.99495 3.39225 3.13913C5.14211 1.28331 7.53499 0.166308 10.0813 0.0166672L10.668 1.30134e-07H24.0013Z" />
              </motion.svg>

              <motion.h5 variants={contVariants}>appelle-nous</motion.h5>
              <motion.p variants={contVariants}>01 88 33 85 82</motion.p>
            </motion.li>
            <motion.li>
              <motion.svg variants={contVariants}
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1364_9401)">
                  <path d="M73.3346 25.1172V56.6672C73.3348 59.2179 72.3602 61.6722 70.6104 63.5281C68.8605 65.3839 66.4676 66.5009 63.9213 66.6505L63.3346 66.6672H16.668C14.1173 66.6673 11.6629 65.6928 9.8071 63.9429C7.95128 62.1931 6.83428 59.8002 6.68464 57.2539L6.66797 56.6672V25.1172L38.1513 46.1072L38.538 46.3272C38.9937 46.5498 39.4941 46.6656 40.0013 46.6656C40.5085 46.6656 41.009 46.5498 41.4646 46.3272L41.8513 46.1072L73.3346 25.1172Z" />
                  <path d="M63.3337 13.332C66.9337 13.332 70.0904 15.232 71.8504 18.0887L40.0004 39.322L8.15039 18.0887C8.98616 16.7313 10.1344 15.5934 11.4994 14.77C12.8644 13.9466 14.4065 13.4616 15.9971 13.3554L16.6671 13.332H63.3337Z" />
                </g>
                <defs>
                  <clipPath id="clip0_1364_9401">
                    <rect width="80" height="80" />
                  </clipPath>
                </defs>
              </motion.svg>

              <motion.h5 variants={contVariants}>Envoyez-nous un e-mail</motion.h5>
              <motion.p variants={contVariants}>contact@maleo-emballage.fr</motion.p>
            </motion.li>
          </ul>
        </div>
      </Section>
    </>
  );
}
