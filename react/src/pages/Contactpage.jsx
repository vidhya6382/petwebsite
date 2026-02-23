import React from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";
import { FaTruck, FaUndo, FaComments, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="contact-container">
    
      <p className="breadcrumb">Home / Contact</p>

    
      <h2 className="page-title">Contact Us</h2>

    
      <div className="signin-box">
        <div className="signin-left">
          <div className="user-icon">👤</div>
          <div>
            <h4>Getting help is easy</h4>
            <p>Sign in to get help with recent orders</p>
          </div>
        </div>
          <button className="signin-btn"><Link to="/login" className="nav-item">Sign in</Link> 
       </button>
      </div>

      {/* Quick Links */}
      <h3 className="section-title">Quick Links</h3>
      <div className="quick-links">
        <div className="quick-card">
          <FaTruck className="icon" />
          <div>
            <h4>Track order</h4>
            <p>Learn the status of your order</p>
          </div>
          <span className="arrow">›</span>
        </div>

        <div className="quick-card">
          <FaUndo className="icon" />
          <div>
            <h4>Return order</h4>
            <p>Return or exchange items</p>
          </div>
          <span className="arrow">›</span>
        </div>

        <div className="quick-card">
          <FaComments className="icon" />
          <div>
            <h4>Chat with us!</h4>
            <p>Have you checked your order?</p>
          </div>
          <span className="arrow">›</span>
        </div>
      </div>

      {/* Browse Topics */}
      <h3 className="section-title">Browse Topics</h3>
      <div className="topics">
        <div className="topic-card">Order issues <span>›</span></div>
        <div className="topic-card">Returns & refunds <span>›</span></div>
        <div className="topic-card">Payment & account <span>›</span></div>
        <div className="topic-card">Contact enquiry <span>›</span></div>
      </div>

      {/* Get in Touch */}
      <div className="get-touch">
        <h3>Get in touch</h3>
        <p>If you have any questions, feel free to contact us.</p>

        <div className="contact-info">
          <p><FaPhoneAlt /> Call us: 98765 43210</p>
          <p><FaEnvelope /> support@perfume.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;