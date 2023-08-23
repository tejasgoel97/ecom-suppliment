"use client";

import ProductList from "@/container/ProductList/ProductList";

const Content = (props) => {
  const { products, category, catData } = props;

  let longDescription = `Garcinia Cambogia Tablets are a natural weight management supplement derived from a tropical fruit.
  These tablets contain Hydroxy Citric Acid (HCA), which is believed to block an enzyme that helps the body store fat.
  Regular use of Garcinia Tablets may help to reduce appetite, improve metabolism, and promote weight loss.
  These tablets are easy to use and can be incorporated into a healthy lifestyle.
  Discover the benefits of Garcinia Tablets and start your weight management journey today!`;
  console.log("sadsad",catData);

  return (
      <ProductList
        heading={"All categories"}
        longDescription={longDescription}
        subForms={catData}
        products={products}
        type="ALL_CATEGORY"
      />
  );
};

export default Content;
