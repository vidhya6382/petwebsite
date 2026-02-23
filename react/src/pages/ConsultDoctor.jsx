import React from "react";
import "./ConsultDoctor.css";
import c1 from "../assets/c1.png"; 
function ConsultDoctor() {
  return (
    <div className="consult-container">

      {/* Top Section */}
      <div className="consult-wrapper">

        {/* Left Image */}
        <div className="consult-image">
          <img src={c1} alt="Doctor with Dog" />
        </div>

        {/* Right Service Details */}
        <div className="consult-details">
          <h2>Services</h2>
          <p className="subtitle">Instant Consultation (10 AM to 7 PM)</p>

          <div className="price-box">
            <button className="book-btn">Book consultation</button>
            <div className="price">
              ₹299 <span>₹499</span>
              <p className="offer">40% OFF</p>
            </div>
          </div>

          <ul className="service-info">
            <li>Bank offers and coupons</li>
            <li>Currently, cash on delivery is not available on this product.</li>
            <li>Free delivery on orders above ₹599</li>
          </ul>

          <button className="cart-btn">Add to cart</button>
        </div>

      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h3>Customer Reviews</h3>

        <div className="reviews-grid">

          {[
            { name: "Ajith Kumar AK", date: "31/01/2025", review: "Very good experience doctors" },
            { name: "R", date: "24/06/2024", review: "The doctors are knowledgeable and compassionate." },
            { name: "P", date: "24/06/2024", review: "Really take the time to listen to concerns." },
            { name: "Prem Singh", date: "12/04/2024", review: "Talking to the doctor felt comfortable." },
            { name: "priya", date: "31/05/2024", review: "Good doctor." },
            { name: "Aby Varghese", date: "05/06/2024", review: "Very friendly and solved quickly." }
          ].map((item, index) => (
            <div className="review-card" key={index}>
              <div className="review-header">
                <strong>{item.name}</strong>
                <span>{item.date}</span>
              </div>
              <div className="stars">★★★★★</div>
              <p>{item.review}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default ConsultDoctor;