import React from "react";
import "./Aboutpage.css";
import a1 from "../assets/a1.png"; 
import a2 from "../assets/a2.png"; 
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";  
import a5 from "../assets/a5.png"; 
function Aboutpage() {
  return (
    <div className="about-container">
      <section className="mission-section">
        <img
          src={a1}
          alt="Mission"
          className="mission-image"
        />

        <div className="mission-overlay">
          <h2>Our Mission</h2>
          <p>
            Every day with every connection, Petpalozza passionate associates
            help bring pet parents closer to their pets so they can live more
            fulfilled lives
          </p>
        </div>
      </section>

      {/* ================= GREEN TEXT SECTION ================= */}
      <section className="attitude-section">
        <h3>ANYTHING FOR PETS</h3>
        <p>
          We love pets, and we believe they make us better people. Through our
          wide range of high quality products and services, we are committed to
          providing pet parents everything they need to keep their pets happy,
          healthy and safe. Our associates are dedicated to delivering the best
          experience to our customers and ensuring that pets get the love and
          care they deserve every single day.
        </p>
      </section>

      {/* ================= 3 CARD SECTION ================= */}
      <section className="cards-section">

        <div className="info-card">
          <img src={a2} alt="Our Story" />
          <button>Our story</button>
        </div>

        <div className="info-card">
          <img src={a3} alt="Media Resources" />
          <button>Media resources</button>
        </div>

        <div className="info-card">
          <img src={a4} alt="Charities" />
          <button>Charities</button>
        </div>

      </section>

      {/* ================= BOTTOM SECTION ================= */}
      <section className="bottom-section">

        <div className="bottom-text">
          <h4>10 Reasons to Love #LovePetsSmart</h4>
          <p>
            Since 2020, we’ve encouraged pet parents to share how their pets
            make them smile every day. From playful moments to heartwarming
            companionship, pets bring joy into our lives in countless ways.
            Discover how they make your world better and celebrate the bond
            between you and your furry friend.
          </p>
        </div>

        <div className="bottom-image">
          <img src={a5} alt="Family with pet" />
        </div>

      </section>

    </div>
  );
}

export default Aboutpage;