import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  // Load cart
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Calculate total
  useEffect(() => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(subtotal);
  }, [cartItems]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    for (let key in formData) {
      if (!formData[key].trim()) {
        alert("Please fill all details before placing order.");
        return;
      }
    }

    localStorage.setItem("orderDetails", JSON.stringify(formData));
    localStorage.removeItem("cart");
    navigate("/order-success");
  };

  return (
    <div className="checkout-container">

      <div className="checkout-left">
        <h2>Contact Information</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <h2>Delivery</h2>

        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />

        <div className="row">
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            onChange={handleChange}
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <button className="order-btn" onClick={handleOrder}>
          Place Order
        </button>
      </div>

      <div className="checkout-right">
        <h3>Order Summary</h3>

        {cartItems.map((item, index) => (
          <div key={index} className="summary-item">
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>₹ {item.price * item.quantity}</p>
            </div>
          </div>
        ))}

        <hr />

        <p>Subtotal: ₹ {total}</p>
        <p>Shipping: ₹ 99</p>
        <h2>Total: ₹ {total + 99}</h2>
      </div>
    </div>
  );
}

export default Checkout;