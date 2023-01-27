import React from "react";
import Product from "./Product";
//import "./App.css";

function Categories(props) {
  const { products, onAdd, onAddWish } = props;
  return (
    <main className="blockproduct col-8">
      <h2>Products</h2>
      <div className="row">
        <div className="container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAdd={onAdd}
              onAddWish={onAddWish}
            ></Product>
          ))}
        </div>
      </div>
    </main>
  );
}
export default Categories;
