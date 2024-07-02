import { useState } from "react";
import ProductList from "./components/ProductList.jsx";

function App() {
  const [selectedValue, setSelectedValue] = useState("all");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value="all">all</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
      </select>
      <p>Selected Value: {selectedValue}</p>
      <ProductList category={selectedValue} />
    </div>
  );
}

export default App;
