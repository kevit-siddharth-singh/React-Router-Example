import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Product = () => {
  useEffect(() => {
    document.title = "Product";
  }, []);

  const PRODUCTS = [
    {
      id: "p1",
      name: "Gaming Console",
    },
    {
      id: "p2",
      name: "Gaming PC",
    },
    {
      id: "p3",
      name: "Gaming Phone",
    },
  ];

  return (
    <div>
      <h1>The Products Page</h1>

      <ul>
        {PRODUCTS.map((product) => (
          <NavLink key={product.id} to={`/product/${product.name}`}>
            <li>{product.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Product;
