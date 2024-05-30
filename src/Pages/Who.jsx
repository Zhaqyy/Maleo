import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "../Components/inView";
import "../Style/who.css";

const Who = () => {
  const scrollRef = useRef(null);

  const TargetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: TargetRef,
    offset: ["end end", "end start"],
  });

  console.log(scrollYProgress.get());

  const smooth = easeInOut;

  const MoveY = useTransform(scrollYProgress, [0, 0.11], ["0vh", "-10vh"], {
    ease: smooth,
  });
  const scalee = useTransform(scrollYProgress, [0, 0.11, 0.2], [1, 1, 1.2]);
  // const height = useTransform(scrollYProgress, [0, 0.11], ['500px', '500px', '600px']);
  const headScale = useTransform(scrollYProgress, [0, 0.11], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.11], [1, 0]);
  return (
    <>
      <motion.section className="who" ref={TargetRef}>
        <motion.h1 className="hollow" style={{ y: MoveY, opacity: opacity }}>
          Qui sommes nous?
        </motion.h1>
        <div className="whoImg">
          <motion.img
            src="/who.webp"
            alt="who we are"
            // style={{ scaleX: scalee }}
          />
          <h5>
            MALEO est née en 2019, de la contraction de Marine & Léon, mon
            premier fils.
          </h5>
          <p>
            Nous avons pour mission d’apporter les meilleures solutions
            d’emballages pour l’expédition et la protection de la marchandise
            pour nos clients dans toute la France.
          </p>
        </div>
      </motion.section>
      <Section className="value">
        <h3>Nos valeurs</h3>
        <h2 className="hollow">EXPERTISE</h2>
        <ul>
          <li>
            <p>
              nous investissons pleinement dans notre mission: être le
              partenaire indispensable pour le packaging. Nous sélectionnons
              avec soin nos produits et nous apportons une solution
              personnalisée à chaque client.
            </p>
            <img src="" alt="" />
          </li>
          <li>
            <div>
              <h2 className="hollow">CARE</h2>
              <p>
                Nous prenons soin de chaque collaboration. Nos partenaires
                comptent pour nous et nous les accompagnons au quotidien.
              </p>
            </div>
            <img src="" alt="" />
          </li>
        </ul>
      </Section>
      <Section className="collab">
        <h2 className="hollow">COLLABORATION</h2>
        <div>
          <p>
            nous investissons pleinement dans notre mission: être le partenaire
            indispensable pour le packaging. Nous sélectionnons avec soin nos
            produits et nous apportons une solution personnalisée à chaque
            client.
          </p>
          <img src="" alt="" />
        </div>
        <img src="" alt="" />
      </Section>
      <Section className="surpass">
        <h2 className="hollow">surpass</h2>

        <p>
          Notre détermination nous permet de repousser les limites et de relever
          les challenges. Nous sommes acteurs de nos objectifs et de nos
          résultats. Nous faisons ce kilomètre supplémentaire
          qui nous permet d’être un partenaire indispensable.
        </p>
        <img src="" alt="" />
      </Section>
    </>
  );
};

export default Who;
