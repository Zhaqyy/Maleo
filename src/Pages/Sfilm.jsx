import { useLayoutEffect } from "react";
import { PContact, PHero, PModel } from "../Components/ProductPage";
import h1 from "/product/cb1.png";
import h2 from "/product/cb2.png";
import h3 from "/product/cb3.png";

const productData = {
  title: "STRECH FILM",
  imageUrl: "/product/cardb.png",
  features: [
    {
      title: "composition",
      detail:
        "film polyéthylène",
    },
    {
      title: "couleur",
      detail:
        "transparent - noir - blanc - autres - couleurs opaque",
    },
    {
      title: "DIMENSIONS",
      detail:
        "largeur 125 - 450MM / longueur 150m - 270M - 300M",
    },
    {
      title: "epaisseur",
      detail:
        "13-15-17-20-23-30",
    },
    {
      title: "conditionnement",
      detail:
        "6 bobines / carton - palette de 180 bobines",
    },
  ],
  subtitle: "Film Étirable MANUEL",
};

const pageTitle = "Model of the sTRECH FILM";
const products = [
  { imageSrc: h1, title: "simple cannelures", link: "#", linktext: "Citation" },
  { imageSrc: h2, title: "double cannelures", link: "#", linktext: "Citation" },
  { imageSrc: h3, title: "triple cannelures", link: "#", linktext: "Citation" }
];

const Sfilm = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PHero product={productData} />
      <PModel modelTitle={pageTitle} products={products} />
      <PHero
        product={{
          ...productData,
          title: "personnalize STRECH FILM",
          subtitle: null,
        }}
      />
      <PContact products={products} />
    </>
  );
};

export default Sfilm;
