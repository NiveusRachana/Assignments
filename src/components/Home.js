import React from "react";
import { useState } from "react";
// import ReactDOM from 'react-dom';

function Header(props) {
  return (
    <header className="row block center">
      <div className="row col-lg-12">
        <div className="col-lg-10">
          <h1>Shopping Cart</h1>
        </div>
        <div className="col-lg-2">
          <a href="#/wishlist">
            wishlist{" "}
            {props.countWishlist ? (
              <button className="badges">{props.countWishlist}</button>
            ) : (
              ""
            )}
          </a>{" "}
          &emsp;
          <a href="#/cart">
            Cart{" "}
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ""
            )}
          </a>{" "}
        </div>
      </div>
    </header>
  );
}
export default Header;
