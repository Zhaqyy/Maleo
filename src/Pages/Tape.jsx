import { useLayoutEffect } from "react";
import { PContact, PHero, PModel, PModel2, PTable } from "../Components/ProductPage";
import h1 from "/product/ts1.png";
import h2 from "/product/ts2.png";
import h3 from "/product/ts3.png";
import h4 from "/product/ts4.png";

import p1 from "/product/tc1.png";
import p2 from "/product/tc2.png";
import p3 from "/product/tc3.png";

import m1 from "/product/tm1.png";
// import m2 from "/product/tm2.png";
import m3 from "/product/tm3.png";

const productData = {
  title: "BANDE",
  imageUrl: "/product/tape.png",
  features: [
    {
      title: "déclinaisons",
      detail:
        "PVC, Polypropylène Acrylique, hot melt, solvant, solvant, papier kraft, masking",
    },
    {
      title: "couleur",
      detail:
        "transparent - havane - blanc - autres couleurs",
    },
    {
      title: "DIMENSIONS",
      detail:
        "largeur 48 - 75mm / longueur 66 - 100 - 1000m",
    },
    {
      title: "conditionnement",
      detail:
        "36 rouleaux / carton - palette de 2160 rouleaux",
    },
    {
      title: "dévidoirs",
      detail:
        "plastique - acier",
    },
  ],
  subtitle: "Ruban adhésif neutre & imprimé",
};

const pageTitle = "TAILLE DE LA BANDE";
const pageTitle2 = "MODÈLE DE BANDE";
const products = [
  { imageSrc: h1, title: "12 mm", link: "#", linktext: "Citation" },
  { imageSrc: h2, title: "19 mm", link: "#", linktext: "Citation" },
  { imageSrc: h3, title: "50 mm", link: "#", linktext: "Citation" },
  { imageSrc: h4, title: "75 mm", link: "#", linktext: "Citation" }
];
const products2 = [
  { imageSrc: p1, title: "transparent", link: "#", linktext: "Citation" },
  { imageSrc: p2, title: "Havane", link: "#", linktext: "Citation" },
  { imageSrc: p3, title: "white", link: "#", linktext: "Citation" },
];
const products3 = [
  { imageSrc: m1, title: "PP solvant    25-28-32m", link: "#", linktext: "Citation" },
  { imageSrc: m1, title: "PP acrylique 25-28-32-35m", link: "#", linktext: "Citation" },
  { imageSrc: m3, title: "PP hot melt 25-28m", link: "#", linktext: "Citation" },
  { imageSrc: m3, title: "Pvc 33m", link: "#", linktext: "Citation" },
  { imageSrc: m3, title: "papier kraft", link: "#", linktext: "Citation" },
];

const Tape = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PHero product={productData} />
      <PModel modelTitle={pageTitle} products={products} />
      <PModel2 modelTitle={pageTitle2} products={products2} theme={"light"} />
      <PModel2 modelTitle={pageTitle2} products={products3} model={false} theme={"dark"} />
      <PHero
        product={{
          ...productData,
          title: "personnalize BANDE",
          subtitle: null,
          imageUrl: "/product/tape2.png",
        }}
      />
      <PContact products={products3} products2={products2} />
      <PTable product={productData}/>
    </>
  );
};

export default Tape;
