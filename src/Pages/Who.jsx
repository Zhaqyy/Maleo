import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import { Section } from "../Components/inView";
import "../Style/who.css";
import who from "/who.webp";

const visible = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  transition: { staggerChildren: 0.5, duration: 0.6 },
};

const whoVariants = {
  hidden: { opacity: 0, y: 50 },
  visible,
};
const isMobile = window.innerWidth < 770;

const Who = () => {



  const TargetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: TargetRef,
    offset: ["end end", "end start"],
  });

  const smooth = easeInOut;

  const MoveY = useTransform(scrollYProgress, [0, 0.11], ["0vh", "-10vh"], {
    ease: smooth,
  });
  const MovepY = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25],
    ["-5vh", "-5vh", "0vh"],
    {
      ease: smooth,
    }
  );
  const opac = useTransform(scrollYProgress, [0, 0.12, 0.25], [0, 0, 1], {
    ease: smooth,
  });

  const asp = useTransform(scrollYProgress, [0, 0.1, 0.125], [2, 2, 2.4], {
    ease: smooth,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.11], [1, 0]);

  return (
    <>
      <motion.section
        className="who"
        ref={TargetRef}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
      >
        <motion.h1
          className="hollow"
          variants={whoVariants}
          
          style={isMobile ? {} : { y: MoveY, opacity: opacity }}
        >
          Qui sommes nous?
        </motion.h1>
        <div className="whoImg">
          <motion.img
            loading="lazy"
            src={who}
            alt="who we are"
            variants={isMobile ? whoVariants : null }
            style={isMobile ? {} : { aspectRatio: asp }}
          />
          <motion.h5 variants={whoVariants}>
            MALEO est née en 2019, de la contraction de Marine & Léon, mon
            premier fils.
          </motion.h5>
          <motion.p variants={isMobile ? whoVariants : null } style={isMobile ? {} : { y: MovepY, opacity: opac }}>
            Nous avons pour mission d’apporter les meilleures solutions
            d’emballages pour l’expédition et la protection de la marchandise
            pour nos clients dans toute la France.
          </motion.p>
        </div>
      </motion.section>
      <Value />
      <Section className="collab">
        <motion.h1 className="hollow" variants={whoVariants}>
          COLLABORATION
        </motion.h1>
        <div className="collabInfo">
          <div>
            <motion.p variants={whoVariants}>
              nous investissons pleinement dans notre mission: être le
              partenaire indispensable pour le packaging. Nous sélectionnons
              avec soin nos produits et nous apportons une solution
              personnalisée à chaque client.
            </motion.p>
            <motion.img
              variants={whoVariants}
              loading="lazy"
              src="/collab2.webp"
              alt="collab"
            />
          </div>
          <motion.img
            variants={whoVariants}
            loading="lazy"
            src="/collab.webp"
            alt="collab2"
          />
        </div>
      </Section>
      <Section className="surpass">
        <motion.h1 variants={whoVariants} className="hollow">
          surpass
        </motion.h1>

        <motion.p variants={whoVariants}>
          Notre détermination nous permet de repousser les limites et de relever
          les challenges. Nous sommes acteurs de nos objectifs et de nos
          résultats. Nous faisons ce kilomètre supplémentaire qui nous permet
          d’être un partenaire indispensable.
        </motion.p>
        <motion.img variants={whoVariants} loading="lazy" src={who} alt="" />
      </Section>
    </>
  );
};

export default Who;

export const Value = () => {
  // VALUES SECTION

  const ref = useRef(null);

  const dark = [
    `var(--bg-white)`,
    `var(--bg-white)`,
    `var(--bg-black)`,
    `var(--bg-black)`,
    `var(--bg-white)`,
  ];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.15"],
  });
  const bg = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.85, 1], dark);
  // console.log(scrollYProgress.get());

  return (
    <motion.section
      className="value"
      ref={ref}
      style={{
        backgroundColor: bg,
        "--bg-variable": bg,
      }}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={whoVariants}
    >
      <motion.h3 variants={whoVariants}>Nos valeurs</motion.h3>
      <motion.h1 variants={whoVariants} className="hollowdark">
        EXPERTISE
      </motion.h1>
      <ul>
        <motion.li variants={whoVariants}>
          <motion.p variants={whoVariants}>
            nous investissons pleinement dans notre mission: être le partenaire
            indispensable pour le packaging. Nous sélectionnons avec soin nos
            produits et nous apportons une solution personnalisée à chaque
            client.
          </motion.p>
          <motion.img
            variants={whoVariants}
            loading="lazy"
            src="/expert.webp"
            alt="expert"
          />
        </motion.li>
        <motion.li variants={whoVariants} className="care">
          <div>
            <motion.h1 variants={whoVariants} className="hollowdark">
              CARE
            </motion.h1>
            <motion.p variants={whoVariants}>
              Nous prenons soin de chaque collaboration. Nos partenaires
              comptent pour nous et nous les accompagnons au quotidien.
            </motion.p>
          </div>
          <motion.img
            variants={whoVariants}
            loading="lazy"
            src="/care.webp"
            alt="care"
          />
        </motion.li>
      </ul>
    </motion.section>
  );
};
