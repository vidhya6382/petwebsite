import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cartpage.css";

function Cartpage() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Calculate total when cart changes
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    setTotal(newTotal);
  }, [cartItems]);

  const updateQuantity = (index, newQty) => {
    if (newQty < 1) return;

    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQty;

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2>Your Cart</h2>

        {cartItems.length === 0 && <p>Your cart is empty.</p>}

        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} />

            <div className="item-info">
              <h4>{item.name}</h4>
              <p>Size: {item.size}</p>
              <p>₹ {item.price}</p>

              <div className="quantity">
                <button
                  onClick={() =>
                    updateQuantity(index, item.quantity - 1)
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(index, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeItem(index)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-right">
        <h3>Cart Totals</h3>
        <p>Subtotal: ₹ {total}</p>
        <p>Shipping: ₹ 99</p>
        <h2>Total: ₹ {total + 99}</h2>
       <button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Proceed to Checkout
</button>
      </div>
    </div>
  );
}

export default Cartpage;