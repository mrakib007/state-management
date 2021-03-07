import React, { createContext, useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Shipment from "./Components/Shipment.js/Shipment";

export const CategoryContext = createContext();
function App() {
  const [category, setCategory] = useState('laptop');
  return (
    <div>
      <CategoryContext.Provider value={[category, setCategory]}>
        <p>Count value : {category}</p>
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
