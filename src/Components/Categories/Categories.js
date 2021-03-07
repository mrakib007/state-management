import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../App";
import CategoryDetail from "../CategoryDetail/CategoryDetail";

const allProducts = [
  { name: "Lenove", category: "laptop" },
  { name: "Dell", category: "laptop" },
  { name: "Asus", category: "laptop" },
  { name: "Samsung", category: "mobile" },
  { name: "Nokia", category: "mobile" },
  { name: "Apple", category: "mobile" },
  { name: "Sony", category: "camera" },
  { name: "Nikkon", category: "camera" },
  { name: "Nokia", category: "camera" },
];
const Categories = () => {
  const [category] = useContext(CategoryContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const matchedProducts = allProducts.filter(
      (pd) => pd.category.toLowerCase() === category.toLowerCase()
    );
    setProducts(matchedProducts);
  }, [category]);
  return (
    <div>
      <h2>Select Categories: {category}</h2>
      {/* <CategoryDetail></CategoryDetail> */}
      {products.map((pd) => (
        <CategoryDetail product={pd}></CategoryDetail>
      ))}
    </div>
  );
};

export default Categories;
