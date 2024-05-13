import ProductsPage from "../Components/ProductPage";

const productData = {
  title: "Feuillard",
  imageUrl: "/feui.png",
  features: [
    {
      title: "déclinaisons",
      detail: "acier (ow - rw) plastique (polyester - polypropylène) textile (fil à fil - composite - tissé)",
    },
  ],
  subtitle: "Feuillard",
};

const Feuillard = () => {
  return <ProductsPage product={productData} />;
};

export default Feuillard;
