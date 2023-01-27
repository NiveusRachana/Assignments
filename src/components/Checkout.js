import React from "react";
import "./Modal.css";

function CheckoutModal({ setCheckoutModalOpenFunc }) {
  return (
    <div className="modalBackground">
      <div className="row modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setCheckoutModalOpenFunc(false);
            }}
          ></button>
        </div>
        <div className="body">
          <input type="text" placeholder="Name" />
          &emsp;
          <input type="text" placeholder="Address Line 1" />
        </div>
        <div className="rowblock"></div>
        <div className="body">
          <input type="text" placeholder="Address Line 2" />
          &emsp;
          <input type="number" placeholder="PIN" />
        </div>
        <div className="rowblock"></div>
        <div className="body">
          <input
            type="number"
            placeholder="Credit Card Number"
            maxlength="16"
          />
          &emsp;
          <input type="password" placeholder="cvv" maxlength="3" />
        </div>

        <div className=" row footer">
          <button
            onClick={() => {
              setCheckoutModalOpenFunc(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            className="openLoginBtn"
            onClick={() => {
              setCheckoutModalOpenFunc(false);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;
