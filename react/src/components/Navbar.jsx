import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header>

      {/* ===== MAIN HEADER ===== */}
      <div className="main-header">
        <div className="logo">
          <Link to="/">PetPalozza</Link>
        </div>

        <input
          type="text"
          placeholder="Search for products"
          className="search-bar"
        />

        <div className="right-links">
          <Link to="/">Home</Link>
          <Link to="/aboutpage">About</Link>
          <Link to="/contactpage">Contact</Link>
          <Link to="/login">Log In</Link>
          <Link to="/cart">Cart</Link>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <div className="nav-links">
          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("dog")}
            onMouseLeave={() => setActiveMenu(null)}
          >
           <Link to="/dog" className="nav-item">Dog ▼</Link> 

            {activeMenu === "dog" && (
              <div className="mega-menu">

                <div className="mega-column">
                  <h4>Dry & Wet Food</h4>
                  <Link to="/dog-dry-food">Dry Dog Food</Link>
                  <Link to="/dog-wet-food">Wet Dog Food</Link>
                  <Link to="/dog-grain-free">Grain Free Food</Link>
                  <Link to="/dog-puppy-food">Puppy Food</Link>
                </div>

                <div className="mega-column">
                  <h4>Clothing</h4>
                  <Link to="/dog-tshirts">T-Shirts</Link>
                  <Link to="/dog-raincoat">Raincoat</Link>
                  <Link to="/dog-sweaters">Sweaters</Link>
                  <Link to="/dog-jackets">Jackets</Link>
                </div>

                <div className="mega-column">
                  <h4>Toys</h4>
                  <Link to="/dog-rope-toys">Rope Toys</Link>
                  <Link to="/dog-chew-toys">Chew Toys</Link>
                  <Link to="/dog-interactive">Interactive Toys</Link>
                  <Link to="/dog-balls">Ball Toys</Link>
                </div>

                <div className="mega-column">
                  <h4>Health Care</h4>
                  <Link to="/dog-skin-care">Skin Care</Link>
                  <Link to="/dog-dental">Dental Care</Link>
                  <Link to="/dog-supplements">Supplements</Link>
                  <Link to="/dog-medicine">Antibiotics</Link>
                </div>

                <div className="mega-column">
                  <h4>Beds & Mats</h4>
                  <Link to="/dog-beds">Dog Beds</Link>
                  <Link to="/dog-cushions">Dog Cushions</Link>
                  <Link to="/dog-blankets">Dog Blankets</Link>
                  <Link to="/dog-tents">Dog Tents</Link>
                </div>

              </div>
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("cat")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/cat" className="nav-item">Cat ▼</Link> 
            {activeMenu === "cat" && (
              <div className="mega-menu">

                <div className="mega-column">
                  <h4>Dry & Wet Food</h4>
                  <Link to="/cat-dry-food">Dry Cat Food</Link>
                  <Link to="/cat-wet-food">Wet Cat Food</Link>
                  <Link to="/kitten-food">Kitten Food</Link>
                </div>

                <div className="mega-column">
                  <h4>Toys</h4>
                  <Link to="/cat-catnip">Catnip</Link>
                  <Link to="/cat-plush">Plush Toys</Link>
                  <Link to="/cat-interactive">Interactive Toys</Link>
                </div>

                <div className="mega-column">
                  <h4>Grooming</h4>
                  <Link to="/cat-shampoo">Cat Shampoo</Link>
                  <Link to="/cat-nail-care">Nail Care</Link>
                </div>

                <div className="mega-column">
                  <h4>Litter</h4>
                  <Link to="/cat-litter-box">Litter Box</Link>
                  <Link to="/cat-litter-sand">Litter Sand</Link>
                </div>

              </div>
            )}
          </div>
 <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("Small Pets")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/smallpet" className="nav-item">Small Pets ▼</Link> 
            {activeMenu === "Small Pets" && (
              <div className="mega-menu">

                <div className="mega-column">
                  <h4>Small pets</h4>
                  <Link to="/cat-dry-food">Hamstar</Link>
                  <Link to="/cat-wet-food">Guinea Pigs</Link>
                  <Link to="/kitten-food">Rappit</Link>
                  <Link to="/kitten-food">Rat</Link>
                  <Link to="/kitten-food">Fish</Link>
                </div>
              </div>
            )}
          </div>
           <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("Shop by Brand")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/productpage" className="nav-item">Shop by Brand ▼</Link>

            {activeMenu === "Shop by Brand" && (
              <div className="mega-menu">

                <div className="mega-column">
                  <h4>Dry & Wet Food</h4>
                  <Link to="/cat-dry-food">Dry Cat Food</Link>
                  <Link to="/cat-wet-food">Wet Cat Food</Link>
                  <Link to="/kitten-food">Kitten Food</Link>
                </div>

                <div className="mega-column">
                  <h4>Toys</h4>
                  <Link to="/cat-catnip">Catnip</Link>
                  <Link to="/cat-plush">Plush Toys</Link>
                  <Link to="/cat-interactive">Interactive Toys</Link>
                </div>

                <div className="mega-column">
                  <h4>Grooming</h4>
                  <Link to="/cat-shampoo">Cat Shampoo</Link>
                  <Link to="/cat-nail-care">Nail Care</Link>
                </div>

                <div className="mega-column">
                  <h4>Litter</h4>
                  <Link to="/cat-litter-box">Litter Box</Link>
                  <Link to="/cat-litter-sand">Litter Sand</Link>
                </div>

              </div>
            )}
          </div>
           <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("petservice")}
            onMouseLeave={() => setActiveMenu(null)}
          >
 <Link to="/petservice" className="nav-item">Pet Service ▼</Link>
            {activeMenu === "petservice" && (
              <div className="mega-menu">

                <div className="mega-column">
                  <h4>Dry & Wet Food</h4>
                  <Link to="/cat-dry-food">Dry Cat Food</Link>
                  <Link to="/cat-wet-food">Wet Cat Food</Link>
                  <Link to="/kitten-food">Kitten Food</Link>
                </div>

                <div className="mega-column">
                  <h4>Toys</h4>
                  <Link to="/cat-catnip">Catnip</Link>
                  <Link to="/cat-plush">Plush Toys</Link>
                  <Link to="/cat-interactive">Interactive Toys</Link>
                </div>

                <div className="mega-column">
                  <h4>Grooming</h4>
                  <Link to="/cat-shampoo">Cat Shampoo</Link>
                  <Link to="/cat-nail-care">Nail Care</Link>
                </div>

                <div className="mega-column">
                  <h4>Litter</h4>
                  <Link to="/cat-litter-box">Litter Box</Link>
                  <Link to="/cat-litter-sand">Litter Sand</Link>
                </div>

              </div>
            )}
          </div>
           <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("Shop by Breed")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/productpage" className="nav-item">Shop by Breed ▼</Link>

            {activeMenu === "Shop by Breed" && (
              <div className="mega-menu">

                <div className="mega-column">
                  <h4>Dry & Wet Food</h4>
                  <Link to="/cat-dry-food">Dry Cat Food</Link>
                  <Link to="/cat-wet-food">Wet Cat Food</Link>
                  <Link to="/kitten-food">Kitten Food</Link>
                </div>

                <div className="mega-column">
                  <h4>Toys</h4>
                  <Link to="/cat-catnip">Catnip</Link>
                  <Link to="/cat-plush">Plush Toys</Link>
                  <Link to="/cat-interactive">Interactive Toys</Link>
                </div>

                <div className="mega-column">
                  <h4>Grooming</h4>
                  <Link to="/cat-shampoo">Cat Shampoo</Link>
                  <Link to="/cat-nail-care">Nail Care</Link>
                </div>

                <div className="mega-column">
                  <h4>Litter</h4>
                  <Link to="/cat-litter-box">Litter Box</Link>
                  <Link to="/cat-litter-sand">Litter Sand</Link>
                </div>

              </div>
            )}
          </div>
          <Link to="/consult" className="nav-item">Consult a Vet</Link>

        </div>
      </nav>

    </header>
  );
}

export default Navbar;