import React from "react";
import Modal from "./Modal";
import { useState } from "react";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove, setModalOpenFunc } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
  return (
    <div className="block col-3">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row col-12">
            <div className="col-2">{item.name}</div>
            <div className="col-4">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              &nbsp;
              {item.qty}
              &nbsp;
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-5 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>

            <div className="row col-12">
              <div className="col-4">
                <strong>Total Price</strong>
              </div>
              <div className="col-4 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row col-6 center block">
              <button
                className="openModalBtn"
                onClick={() => {
                  setModalOpenFunc(true);
                }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
