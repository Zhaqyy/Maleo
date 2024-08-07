/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { Section } from "./inView";

import logo from "/logobig.png";
import "../Style/Contact/contact.css";
import "../Style/Component/Component.css";
import { useRef } from "react";

const visible = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  transition: { staggerChildren: 0.25, duration: 0.5 },
};

const LVariants = {
  hidden: { opacity: 0, y: 20 },
  visible,
};

const Legal = ({ content }) => {
  const {
    title,
    titleText,
    subtitleText,
    subtitle,
    listTitle,
    listSubTitle,
    Linfo,
  } = content;

  const ref = useRef(null);

  const light = [
    `var(--bg-dark)`,
    `var(--bg-dark)`,
    `var(--bg-color)`,
    `var(--bg-color)`,
    `var(--bg-color)`,
  ];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.15"],
  });
  const bg = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 0.85, 1],
    light,
    easeInOut
  );
  const op = useTransform(scrollYProgress, [0, 0.1], [0, 1], easeInOut);
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

  return (
    <>
      <Section className="legalHead">
        <motion.h1 className="hollowdark" variants={LVariants}>
          {title}
        </motion.h1>
        <motion.p variants={LVariants}>{titleText}</motion.p>
        <motion.img loading="lazy" src={logo} />
      </Section>
      <motion.section
        ref={ref}
        style={{
          backgroundColor: bg,
          // "--bg-variable": bg,
        }}
        className="flexy"
        variants={LVariants}
      >
        <motion.h3
          style={{
            opacity: op,
          }}
          variants={LVariants}
        >
          {subtitle}
        </motion.h3>
        <motion.p variants={LVariants}>{subtitleText}</motion.p>
        <div className="cont-detail">
          <ul>
            <motion.li>
              <motion.svg
                variants={LVariants}
                width="60"
                height="69"
                viewBox="0 0 60 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.9955 0L25.2905 0.0174999L25.438 0.0375003L25.5905 0.0700003L25.868 0.155C26.0596 0.225658 26.2418 0.319702 26.4105 0.435L26.6705 0.64L27.308 1.185C32.3512 5.37391 38.7251 7.62326 45.2805 7.5275L46.1355 7.5025C46.6945 7.477 47.2458 7.63977 47.7013 7.96475C48.1569 8.28973 48.4902 8.75814 48.648 9.295C49.8765 13.4739 50.2524 17.8572 49.7534 22.1843C49.2544 26.5114 47.8907 30.694 45.7433 34.4837C43.5959 38.2733 40.7087 41.5927 37.2531 44.2444C33.7975 46.8962 29.8442 48.8263 25.628 49.92C25.2164 50.0267 24.7845 50.0267 24.373 49.92C20.1565 48.8266 16.2029 46.8967 12.7471 44.245C9.29121 41.5934 6.40367 38.2741 4.25603 34.4844C2.10839 30.6947 0.744469 26.512 0.245329 22.1848C-0.253811 17.8575 0.122013 13.4741 1.35047 9.295C1.50824 8.75814 1.84157 8.28973 2.29709 7.96475C2.75261 7.63977 3.30398 7.477 3.86297 7.5025C10.7066 7.81533 17.4206 5.56247 22.6905 1.185L23.348 0.6225L23.588 0.435C23.7566 0.319702 23.9388 0.225658 24.1305 0.155L24.4105 0.0700003C24.5084 0.0463344 24.6078 0.0288 24.708 0.0174999L24.9955 0ZM25.0005 17.5C23.739 17.4996 22.5241 17.976 21.5991 18.8337C20.6741 19.6915 20.1076 20.8671 20.013 22.125L20.0005 22.5L20.013 22.875C20.0746 23.6865 20.3334 24.4707 20.7669 25.1595C21.2004 25.8483 21.7955 26.4209 22.5005 26.8275V31.25L22.518 31.5425C22.5932 32.1752 22.9073 32.7554 23.3959 33.1643C23.8845 33.5733 24.5109 33.7803 25.147 33.7429C25.7831 33.7056 26.3809 33.4268 26.8183 32.9634C27.2558 32.5001 27.4998 31.8872 27.5005 31.25L27.503 26.83C28.4563 26.2795 29.2013 25.4298 29.6224 24.4127C30.0436 23.3956 30.1172 22.2679 29.832 21.2047C29.5469 20.1414 28.9187 19.202 28.0451 18.5322C27.1716 17.8623 26.1013 17.4995 25.0005 17.5Z"
                  fill="black"
                />
              </motion.svg>

              <motion.h5 variants={LVariants}>{listTitle}</motion.h5>
              <motion.p variants={LVariants}>{listSubTitle}</motion.p>
            </motion.li>
            <motion.li>
              <motion.svg
                variants={LVariants}
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1282_3248)">
                  <path
                    d="M37.5 20C39.0525 21.1643 40.3125 22.6741 41.1803 24.4098C42.0482 26.1455 42.5 28.0594 42.5 30C42.5 31.9406 42.0482 33.8545 41.1803 35.5902C40.3125 37.3259 39.0525 38.8357 37.5 40"
                    fill="none"
                    stroke="black"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M44.25 12.5C46.8599 14.6091 48.965 17.2753 50.4112 20.3033C51.8573 23.3313 52.6079 26.6444 52.6079 30C52.6079 33.3556 51.8573 36.6687 50.4112 39.6967C48.965 42.7247 46.8599 45.3909 44.25 47.5"
                    fill="none"
                    stroke="black"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 37.4986H10C9.33696 37.4986 8.70107 37.2352 8.23223 36.7664C7.76339 36.2975 7.5 35.6616 7.5 34.9986V24.9986C7.5 24.3355 7.76339 23.6997 8.23223 23.2308C8.70107 22.762 9.33696 22.4986 10 22.4986H15L23.75 11.2486C23.9685 10.8242 24.3316 10.4919 24.7737 10.3118C25.2158 10.1317 25.7078 10.1157 26.1606 10.2667C26.6135 10.4177 26.9974 10.7256 27.2431 11.1349C27.4887 11.5443 27.5798 12.0279 27.5 12.4986V47.4986C27.5798 47.9692 27.4887 48.4529 27.2431 48.8622C26.9974 49.2716 26.6135 49.5795 26.1606 49.7305C25.7078 49.8814 25.2158 49.8654 24.7737 49.6854C24.3316 49.5053 23.9685 49.173 23.75 48.7486L15 37.4986Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1282_3248">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </motion.svg>

              <motion.h5 variants={LVariants}>{listTitle}</motion.h5>
              <motion.p variants={LVariants}>{listSubTitle}</motion.p>
            </motion.li>
            <motion.li>
              <motion.svg
                variants={LVariants}
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0625 1.53496C22.2146 0.899643 23.5009 0.546427 24.8158 0.504274C26.1308 0.462122 27.4371 0.732234 28.6275 1.29246L29.1025 1.53496L46.04 11.5225L46.28 11.68L46.51 11.8725L46.7775 12.06C47.6464 12.7115 48.3746 13.5319 48.9185 14.4718C49.4623 15.4118 49.8107 16.452 49.9425 17.53L49.9875 18.035L50 18.545V36.755C50 39.52 48.575 42.0775 46.365 43.4875L45.94 43.7375L28.9325 54.4925C26.6375 55.7525 23.885 55.83 21.4225 54.6625L20.9325 54.4125L4.195 43.82C3.0037 43.1686 1.99618 42.227 1.26589 41.0824C0.535602 39.9378 0.106195 38.6273 0.0174999 37.2725L0 36.755V18.5425C0 15.7775 1.425 13.2225 3.69 11.78L21.0625 1.53496ZM25.025 35.5L24.7075 35.5175C24.0999 35.5897 23.5399 35.8824 23.1335 36.3399C22.7272 36.7974 22.5028 37.3881 22.5028 38C22.5028 38.6119 22.7272 39.2025 23.1335 39.6601C23.5399 40.1176 24.0999 40.4102 24.7075 40.4825L25 40.5L25.3175 40.4825C25.9251 40.4102 26.4851 40.1176 26.8915 39.6601C27.2978 39.2025 27.5222 38.6119 27.5222 38C27.5222 37.3881 27.2978 36.7974 26.8915 36.3399C26.4851 35.8824 25.9251 35.5897 25.3175 35.5175L25.025 35.5ZM25 15.5C24.3877 15.5 23.7967 15.7249 23.3391 16.1318C22.8815 16.5387 22.5891 17.0993 22.5175 17.7075L22.5 18V28L22.5175 28.2925C22.5898 28.9001 22.8824 29.4601 23.3399 29.8664C23.7974 30.2728 24.3881 30.4972 25 30.4972C25.6119 30.4972 26.2026 30.2728 26.6601 29.8664C27.1176 29.4601 27.4102 28.9001 27.4825 28.2925L27.5 28V18L27.4825 17.7075C27.4109 17.0993 27.1185 16.5387 26.6609 16.1318C26.2033 15.7249 25.6123 15.5 25 15.5Z"
                  fill="black"
                />
                <defs>
                  <clipPath id="clip0_1364_9401">
                    <rect width="80" height="80" />
                  </clipPath>
                </defs>
              </motion.svg>

              <motion.h5 variants={LVariants}>{listTitle}</motion.h5>
              <motion.p variants={LVariants}>{listSubTitle}</motion.p>
            </motion.li>
          </ul>
        </div>
        <motion.p variants={LVariants}>{Linfo}</motion.p>
      </motion.section>
    </>
  );
};
export default Legal;
