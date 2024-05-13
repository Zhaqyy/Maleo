/* eslint-disable react/prop-types */

import "../Style/ProductPage.css"

const ProductsPage = ({ product }) => {
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
            {features.map((feature, index) => (
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

export default ProductsPage;
