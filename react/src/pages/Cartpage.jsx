import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cartpage.css";

function Cartpage() {

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

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

  // ✅ APPLY COUPON
  const applyCoupon = () => {

    if (coupon === "231") {
      setDiscount(50);
      alert("Coupon Applied! ₹50 Discount");
    } 
    else {
      alert("Invalid Coupon Code");
      setDiscount(0);
    }

  };

  return (

    <div className="cart-container">

      <div className="cart-left">

        <div className="shipping-bar">
          <p>Your order qualifies for free shipping!</p>
          <div className="progress"></div>
        </div>

        <table className="cart-table">

          <thead>
            <tr>
              <th>Remove</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </tr>
          </thead>

          <tbody>

            {cartItems.map((item, index) => (

              <tr key={index}>

                <td>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(index)}
                  >
                    ✕
                  </button>
                </td>

                <td className="product-info">
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </td>

                <td>₹ {item.price}</td>

                <td>

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

                </td>

                <td>₹ {item.price * item.quantity}</td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* COUPON SECTION */}

        <div className="coupon-section">

          <input
            type="text"
            placeholder="Coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />

          <button onClick={applyCoupon}>
            Apply coupon
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="cart-right">

        <h3>Cart Totals</h3>

        <div className="summary-row">
          <span>Sub total</span>
          <span>₹ {total}</span>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span>₹ 99</span>
        </div>

        <div className="summary-row">
          <span>Discount</span>
          <span>- ₹ {discount}</span>
        </div>

        <div className="summary-row total">
          <span>Total</span>
          <span>₹ {total + 99 - discount}</span>
        </div>

        <button
          className="checkout-btn"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>

        <div className="payment-icons">

          <img src="https://img.icons8.com/color/48/google-pay.png" />
          <img src="https://img.icons8.com/color/48/phone-pe.png" />
          <img src="https://img.icons8.com/color/48/mastercard.png" />
          <img src="https://img.icons8.com/color/48/paypal.png" />
          <img src="https://img.icons8.com/color/48/visa.png" />

        </div>

        <p className="delivery-info">
          Delivery information: Refund available within 14 days of purchase.
        </p>

      </div>

    </div>

  );

}

export default Cartpage;