import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">  {/* 🔥 ADD THIS DIV */}

        <div className="footer-section">
          <h4>PetPalozza</h4>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Shop</p>
          <p>Blog</p>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <p>Dog</p>
          <p>Cat</p>
          <p>Fish</p>
          <p>Birds</p>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <p>Privacy policy</p>
          <p>Shipping policy</p>
          <p>Terms & conditions</p>
        </div>

        <div className="footer-section">
          <h4>Subscribe</h4>
           <button className="subscribe-btn">Email</button>
          <button className="subscribe-btn">Subscribe Now</button>
        </div>

      </div>
    </div>
  );
}

export default Footer;