import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orderDetails"));
    if (data) {
      setOrderDetails(data);
    }
  }, []);

  if (!orderDetails) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="success-container">
      <div className="success-card">
        <h2>Thank you for your purchase!</h2>

        <p className="success-text">
          Your order will be processed within 24 hours during working days.
          We will notify you by email once it has been shipped.
        </p>

        <h3>Billing Address</h3>

        <div className="details">
          <p><strong>Name:</strong> {orderDetails.firstName} {orderDetails.lastName}</p>
          <p><strong>Address:</strong> {orderDetails.address}</p>
          <p><strong>City:</strong> {orderDetails.city}</p>
          <p><strong>State:</strong> {orderDetails.state}</p>
          <p><strong>Pincode:</strong> {orderDetails.pincode}</p>
          <p><strong>Phone:</strong> {orderDetails.phone}</p>
          <p><strong>Email:</strong> {orderDetails.email}</p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;