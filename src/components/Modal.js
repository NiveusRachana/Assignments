import React from "react";
import "./Modal.css";

function Modal(props) {
  const { setModalOpenFunc, setCheckoutModalOpenFunc } = props;
  return (
    <div className="modalBackground">
      <div className="row modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalOpenFunc(false);
            }}
          ></button>
        </div>
        <div className="title">
          <h1>Login as Guest User</h1>
        </div>

        <div className=" row footer">
          <button
            onClick={() => {
              setModalOpenFunc(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            className="openLoginBtn"
            onClick={() => {
              setModalOpenFunc(false);
              setCheckoutModalOpenFunc(true);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
