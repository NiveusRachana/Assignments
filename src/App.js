import "./App.css";
import Header from "./components/Home";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import CheckoutModal from "./components/Checkout";
import Modal from "./components/Modal";
import "./components/Modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import { useState } from "react";
function App() {
  const { products } = data;
  const [count, setCount] = useState([0]);
  const [cartItems, setCartItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [CheckoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [pointerStyle, setPointerStyle] = useState("auto");
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const setModalOpenFunc = (val) => {
    console.log("setModalOpenFunc");
    setModalOpen(val);
    if (val) {
      setPointerStyle("none");
    } else {
      setPointerStyle("auto");
    }
  };
  const setCheckoutModalOpenFunc = (val) => {
    console.log("setCheckoutModalOpenFunc");
    setCheckoutModalOpen(val);
    if (val) {
      setPointerStyle("none");
    } else {
      setPointerStyle("auto");
    }
    //setCartItems( cartItems.forEach(x) => cartItems.filter((x)));
  };
  const onAddWish = (add) => {
    if (add === 0) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    console.log(count);
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <>
      <Header
        countCartItems={cartItems.length}
        countWishlist={onAddWish.length}
      ></Header>
      <div style={{ "pointer-events": pointerStyle }} className="row">
        <Categories products={products} onAdd={onAdd} onAddWish={onAddWish} />

        <Cart
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          setModalOpenFunc={setModalOpenFunc}
        ></Cart>
      </div>
      <div>
        {" "}
        {modalOpen && (
          <Modal
            setModalOpenFunc={setModalOpenFunc}
            setCheckoutModalOpenFunc={setCheckoutModalOpenFunc}
          />
        )}
      </div>
      <div>
        {" "}
        {CheckoutModalOpen && (
          <CheckoutModal setCheckoutModalOpenFunc={setCheckoutModalOpenFunc} />
        )}
      </div>
    </>
  );
}

export default App;
