import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const CategoryDetail = () => {
  const category = useContext(CategoryContext);
  return (
    <div>
      <h4>This is your category detail</h4>
      <h5>Selected category: {category}</h5>
    </div>
  );
};

export default CategoryDetail;
