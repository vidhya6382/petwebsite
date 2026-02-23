import React from "react";
import "./Petservice.css";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import {
  FaCut,
  FaHome,
  FaBone,
  FaDog,
  FaHeartbeat,
  FaHeart
} from "react-icons/fa";

function Petservice() {
  return (
    <div className="pet-container">

      {/* Hero Section */}
      <div className="hero">
        <img src={p1} alt="Hero" />
        <div className="hero-overlay">
          <h2>PetPalozza</h2>
        </div>
      </div>

      {/* Services Icons Box */}
      <div className="services-box">
        <div className="service-card"><FaCut /><p>Grooming</p></div>
        <div className="service-card"><FaHome /><p>Pet Hotel</p></div>
        <div className="service-card"><FaBone /><p>Doggie Day Camp</p></div>
        <div className="service-card"><FaDog /><p>Training</p></div>
        <div className="service-card"><FaHeartbeat /><p>Veterinary Care</p></div>
        <div className="service-card"><FaHeart /><p>Adoption</p></div>
      </div>

      {/* Pet Services Description */}
      <div className="pet-services">
        <h3>Pet Services</h3>
        <p>
          Whether it’s a pamper day, obedience classes, training class or
          veterinary visit, we provide the best in pet services with highly
          trained, professional associates.
        </p>
      </div>

      {/* Promo Section */}
      <div className="promo-section">

        <div className="summer">
          <h3>Summer Special</h3>
          <p>Upgrade a salon visit or overnight stay.</p>
          <button>Book Now</button>
        </div>

        <div className="promo-image">
          <img src={p2} alt="Promo" />
        </div>

        <div className="monthly">
          <h3>Monthly specials</h3>
          <p>Check out deals, offers & events.</p>
          <button>Get Details</button>
        </div>

      </div>

      {/* Bottom Cards */}
      <div className="bottom-cards">
        <div className="info-card">
          <p>Yappy Hour<br />$5 OFF walk-in services</p>
          <button>Learn more</button>
        </div>

        <div className="info-card">
          <p>ONLY $109 any 6-wk Training Class</p>
          <button>Enroll Now</button>
        </div>

        <div className="info-card">
          <p>Traveling without your pet this summer?</p>
          <button>Book Stay</button>
        </div>
      </div>

    </div>
  );
}

export default Petservice;