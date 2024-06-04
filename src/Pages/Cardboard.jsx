import { useLayoutEffect } from "react";
import { PContact, PHero, PModel } from "../Components/ProductPage";
import h1 from "/product/cb1.png";
import h2 from "/product/cb2.png";
import h3 from "/product/cb3.png";

const productData = {
  title: "CARTON",
  imageUrl: "/product/cardb.png",
  features: [
    {
      title: "déclinaisons",
      detail:
        "simple - double - triple cannelures, boite poste - papier kraft",
    },
  ],
  subtitle: "caisses américaines",
};

const pageTitle = "MODÈLE DE CARTON";
const products = [
  { imageSrc: h1, title: "simple cannelures", linktext: "Citation" },
  { imageSrc: h2, title: "double cannelures", linktext: "Citation" },
  { imageSrc: h3, title: "triple cannelures", linktext: "Citation" }
];

const Cardboard = () => {
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
          title: "personnalize CARTON",
          subtitle: null,
        }}
      />
      <PContact products={products} />
    </>
  );
};

export default Cardboard;
