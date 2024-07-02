import { useEffect, useState } from "react";

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Determine the URL based on the category
    const url =
      category === "all" // Assuming 'all' indicates all categories
        ? `https://fakestoreapi.com/products`
        : `https://fakestoreapi.com/products/category/${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, [category]);

  return (
    <ul>
      {products.map(({ title, id, category }) => (
        <li key={id}>
          <strong>{title}</strong> - {category}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
