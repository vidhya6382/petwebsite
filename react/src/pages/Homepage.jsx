import React from "react";
import { useNavigate } from "react-router-dom";
import h1 from "../assets/h1.png"; 
import h2 from "../assets/h2.png"; 
import h3 from "../assets/h3.png"; 
import h4 from "../assets/h4.png"; 
import h5 from "../assets/h5.png"; 
import h6 from "../assets/h6.png"; 
import h7 from "../assets/h7.png"; 
import h8 from "../assets/h8.png"; 
import h9 from "../assets/h9.png"; 
import h10 from "../assets/h10.png"; 
import h11 from "../assets/h11.png"; 
import h12 from "../assets/h12.png"; 
import h13 from "../assets/h13.png"; 
import h14 from "../assets/h14.png"; 
import home1 from "../assets/home1.jpeg";
import p1 from "../assets/p1.png";
import "./Homepage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-left">
          <img src={home1} alt="Dog Banner" className="slide" />
          <img src={p1} alt="Dog Banner" className="slide" />
        </div>

        <div className="hero-right">
          <h2>Premium Pet Care</h2>
          <p>Everything your furry friend needs</p>
          <button onClick={() => navigate("/dog")}>Shop Now</button>
        </div>
      </section>

      {/* SHOP BY PET */}
      <section className="shop-pet">
        <h3>Shop by Pet</h3>

        <div className="pet-icons">
          <div className="pet-item">
            <img src={h1} alt="Dog" />
            <span>Dog</span>
          </div>

          <div className="pet-item">
            <img src={h2} alt="Cat" />
            <span>Cat</span>
          </div>

          <div className="pet-item">
            <img src={h3} alt="Small Pet" />
            <span>Small Pet</span>
          </div>

          <div className="pet-item">
            <img src={h4} alt="Bird" />
            <span>Bird</span>
          </div>

          <div className="pet-item">
            <img src={h5} alt="Fish" />
            <span>Fish</span>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured-products">
        <h3>Top Rated Customer Favorites</h3>

        <div className="product-grid">
          <div className="product-card">
            <img src={h6} alt="Product" />
            <p>Premium Dog Food</p>
            <p>⭐⭐⭐⭐⭐</p>
            <span>$25.00</span>
          </div>

          <div className="product-card">
            <img src={h7} alt="Product" />
            <p>Chew Toy</p>
            <p>⭐⭐⭐⭐<span className="star">☆</span></p>
            <span>$8.00</span>
          </div>

          <div className="product-card">
            <img src={h8} alt="Product" />
            <p>Cat Litter</p>
            <p>⭐⭐⭐⭐⭐</p>
            <span>$18.00</span>
          </div>

          <div className="product-card">
            <img src={h9} alt="Product" />
            <p>Pet Shampoo</p>
            <p>⭐⭐⭐⭐<span className="star">☆</span></p>
            <span>$12.00</span>
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="promo-banner">
        <div className="promo-left">
          <h2>Because Your Pet Deserves the Best</h2>
          <p>High quality products & expert care</p>
          <button>Shop & Save</button>
        </div>

        <div className="promo-right">
          <img src={h10} alt="Happy Dog" />
        </div>
      </section>

      {/* GREEN STRIP */}
      <section className="green-strip">
        <p>Join 10,000+ Happy Pet Parents</p>
        <button onClick={() => navigate("/dog")} className="shop">Shop Now</button>
      </section>

      {/* PET SERVICES */}
      <section className="services-section">
        <h3>Pet Services</h3>

        <div className="services-grid">
          <div className="service-card">
            <img src={h11} alt="Grooming" />
            <button>Grooming</button>
          </div>

          <div className="service-card">
            <img src={h12} alt="Training" />
            <button>Training</button>
          </div>

          <div className="service-card">
            <img src={h13} alt="Boarding" />
            <button>Boarding</button>
          </div>

          <div className="service-card">
            <img src={h14} alt="Vet Care" />
            <button>Vet Care</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;