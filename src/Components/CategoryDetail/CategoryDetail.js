import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const CategoryDetail = (props) => {
  // const category = useContext(CategoryContext);
  const {name} = props.product;
  return (
    <div>
      <h4>This is your category detail</h4>
      <h5>Selected Product: {name}</h5>
    </div>
  );
};

export default CategoryDetail;
