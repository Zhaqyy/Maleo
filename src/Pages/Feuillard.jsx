import { useLayoutEffect } from "react";
import { PContact, PHero, PModel, PTable } from "../Components/ProductPage";
import h1 from "/product/Fh1.png";
import h2 from "/product/Fh2.png";
import h3 from "/product/Fh3.png";
import h4 from "/product/Fh4.png";

const productData = {
  title: "Feuillard",
  imageUrl: "/product/feui.png",
  features: [
    {
      title: "déclinaisons",
      detail:
        "acier (ow - rw) plastique (polyester - polypropylène) textile (fil à fil - composite - tissé)",
    },
  ],
  subtitle: "Feuillard",
};

const pageTitle = "MODÈLE DE FEUILLARD";
const products = [
  { imageSrc: h1, title: "acier", linktext: "Citation" },
  { imageSrc: h2, title: "polypropylene", linktext: "Citation" },
  { imageSrc: h3, title: "textile", linktext: "Citation" },
  { imageSrc: h4, title: "Polyester", linktext: "Citation" },
];

const Feuillard = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PHero product={productData} />
      <PModel modelTitle={pageTitle} products={products} />
      <PTable product={productData} />
      <PHero
        product={{
          ...productData,
          title: "personnalize Feuillard",
          subtitle: null,
        }}
      />
      <PContact products={products} />
    </>
  );
};

export default Feuillard;
