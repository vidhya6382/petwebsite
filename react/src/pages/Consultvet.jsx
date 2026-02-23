import React from "react";
import { useNavigate } from "react-router-dom";
import "./Consultvet.css";
import c1 from "../assets/c1.png"; 
function Consultvet() {
  const navigate=useNavigate();
  return (
    
    <div className="contact-page">

      {/* HERO SECTION */}
      <section className="hero">
        <img src={c1}
         
        />
      </section>

      {/* BLUE INFO STRIP */}
      <section className="info-strip">
        <div>✔ Verified Doctors</div>
        <div>✔ Free follow up</div>
        <div>✔ Medicine delivery</div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="categories">
        <div className="category-item">
          <div className="circle">+</div>
          <p>General Checkup</p>
        </div>

        <div className="category-item">
          <div className="circle">🐶</div>
          <p>Skin Issues</p>
        </div>

        <div className="category-item">
          <div className="circle">🦴</div>
          <p>Digestive Issues</p>
        </div>

        <div className="category-item">
          <div className="circle">🦷</div>
          <p>Dental Issues</p>
        </div>

        <div className="category-item">
          <div className="circle">👂</div>
          <p>Ear Issues</p>
        </div>

        <div className="category-item">
          <div className="circle">👁</div>
          <p>Eye Issues</p>
        </div>

        <div className="category-item">
          <div className="circle">✂</div>
          <p>Neutering</p>
        </div>
      </section>

      {/* IMAGE CARD SECTION */}
      <section className="middle-section">
        <div className="image-card">
          <img
           
          />
        </div>

        <div className="green-box">
          <p>Get advice from the best vets from the comfort of your home.</p>
          <button className="consult-btn" onClick={()=>navigate("/consultdoctor")}>Consult Now</button>
        </div>
      </section>

      {/* DOCTOR SECTION */}
      <section className="doctor-section">
        <h2>Access our expert vets from anywhere</h2>

        <div className="doctor-cards">
          <div className="doctor-card">
            <div className="doctor-img">👩‍⚕️</div>
            <p>20+ years of veterinary experience</p>
          </div>

          <div className="doctor-card">
            <div className="doctor-img">👨‍⚕️</div>
            <p>Expert in pet health & wellness</p>
          </div>

          <div className="doctor-card">
            <div className="doctor-img">👩‍⚕️</div>
            <p>Specialist in surgery & animal care</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Consultvet;
