import React from "react";
import { useState } from "react";

function Product(props) {
  const { product, onAdd, onAddWish } = props;
  const [state, setState] = useState([]);

  const updateWish = (product) => {
   
    if (product.wishlist === 1) {
      setState((product.wishlist = 0));
      onAddWish(1);
    } else {
      setState((product.wishlist = 1));
      onAddWish(0);
    }
  };

  return (
    <div className="row col-lg-12 blockproduct ">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        {product.wishlist === 0 ? (
          <button type="button" onClick={() => updateWish(product)}>
            Add to wishlist
          </button>
        ) : (
          <button type="button" onClick={() => updateWish(product)}>
            Remove from wishlist
          </button>
        )}
        &emsp;
        <button onClick={() => onAdd(product)}>
          Add To <br />
          Cart
        </button>
      </div>
    </div>
  );
}
export default Product;
