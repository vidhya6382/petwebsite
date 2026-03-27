import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveMenu(null); // Also close any open mega-menus
  };

  return (
    <header>
      {/* ===== MAIN HEADER ===== */}
      <div className="main-header">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            PetPalozza
          </Link>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <div className="nav-links">
          {/* Top-level links for all screen sizes, now part of the collapsible menu */}
          <Link to="/" className="nav-item" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/aboutpage" className="nav-item" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contactpage" className="nav-item" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/login" className="nav-item" onClick={closeMenu}>
            Log In
          </Link>
          <Link to="/cart" className="nav-item" onClick={closeMenu}>
            Cart
          </Link>

          {/* Existing "Dog" menu item */}
          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("dog")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/dog" className="nav-item-main-link">
              Dog ▼
            </Link>
            {activeMenu === "dog" && (
              <div className="mega-menu">
                <div className="mega-column">
                  <h4>Dry & Wet Food</h4>
                  <Link to="/dog-dry-food" onClick={closeMenu}>
                    Dry Dog Food
                  </Link>
                  <Link to="/dog-wet-food" onClick={closeMenu}>
                    Wet Dog Food
                  </Link>
                  <Link to="/dog-grain-free" onClick={closeMenu}>
                    Grain Free Food
                  </Link>
                  <Link to="/dog-puppy-food" onClick={closeMenu}>
                    Puppy Food
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Clothing</h4>
                  <Link to="/dog-tshirts" onClick={closeMenu}>
                    T-Shirts
                  </Link>
                  <Link to="/dog-raincoat" onClick={closeMenu}>
                    Raincoat
                  </Link>
                  <Link to="/dog-sweaters" onClick={closeMenu}>
                    Sweaters
                  </Link>
                  <Link to="/dog-jackets" onClick={closeMenu}>
                    Jackets
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Toys</h4>
                  <Link to="/dog-rope-toys" onClick={closeMenu}>
                    Rope Toys
                  </Link>
                  <Link to="/dog-chew-toys" onClick={closeMenu}>
                    Chew Toys
                  </Link>
                  <Link to="/dog-interactive" onClick={closeMenu}>
                    Interactive Toys
                  </Link>
                  <Link to="/dog-balls" onClick={closeMenu}>
                    Ball Toys
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Health Care</h4>
                  <Link to="/dog-skin-care" onClick={closeMenu}>
                    Skin Care
                  </Link>
                  <Link to="/dog-dental" onClick={closeMenu}>
                    Dental Care
                  </Link>
                  <Link to="/dog-supplements" onClick={closeMenu}>
                    Supplements
                  </Link>
                  <Link to="/dog-medicine" onClick={closeMenu}>
                    Antibiotics
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Beds & Mats</h4>
                  <Link to="/dog-beds" onClick={closeMenu}>
                    Dog Beds
                  </Link>
                  <Link to="/dog-cushions" onClick={closeMenu}>
                    Dog Cushions
                  </Link>
                  <Link to="/dog-blankets" onClick={closeMenu}>
                    Dog Blankets
                  </Link>
                  <Link to="/dog-tents" onClick={closeMenu}>
                    Dog Tents
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* ... repeat for other nav-item divs ... */}
          {/* Existing "Cat" menu item */}
          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("cat")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/cat" className="nav-item-main-link">
              Cat ▼
            </Link>
            {activeMenu === "cat" && (
              <div className="mega-menu">
                <div className="mega-column">
                  <h4>Dry & Wet Food</h4>
                  <Link to="/cat-dry-food" onClick={closeMenu}>
                    Dry Cat Food
                  </Link>
                  <Link to="/cat-wet-food" onClick={closeMenu}>
                    Wet Cat Food
                  </Link>
                  <Link to="/kitten-food" onClick={closeMenu}>
                    Kitten Food
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Toys</h4>
                  <Link to="/cat-catnip" onClick={closeMenu}>
                    Catnip
                  </Link>
                  <Link to="/cat-plush" onClick={closeMenu}>
                    Plush Toys
                  </Link>
                  <Link to="/cat-interactive" onClick={closeMenu}>
                    Interactive Toys
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Grooming</h4>
                  <Link to="/cat-shampoo" onClick={closeMenu}>
                    Cat Shampoo
                  </Link>
                  <Link to="/cat-nail-care" onClick={closeMenu}>
                    Nail Care
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Litter</h4>
                  <Link to="/cat-litter-box" onClick={closeMenu}>
                    Litter Box
                  </Link>
                  <Link to="/cat-litter-sand" onClick={closeMenu}>
                    Litter Sand
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Existing "Small Pets" menu item */}
          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("Small Pets")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/smallpet" className="nav-item-main-link">
              Small Pets ▼
            </Link>
            {activeMenu === "Small Pets" && (
              <div className="mega-menu">
                <div className="mega-column">
                  <h4>Small pets</h4>
                  <Link to="/cat-dry-food" onClick={closeMenu}>
                    Hamstar
                  </Link>
                  <Link to="/cat-wet-food" onClick={closeMenu}>
                    Guinea Pigs
                  </Link>
                  <Link to="/kitten-food" onClick={closeMenu}>
                    Rappit
                  </Link>
                  <Link to="/kitten-food" onClick={closeMenu}>
                    Rat
                  </Link>
                  <Link to="/kitten-food" onClick={closeMenu}>
                    Fish
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Existing "Shop by Brand" menu item */}
          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("Shop by Brand")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/productpage" className="nav-item-main-link">
              Shop by Brand ▼
            </Link>
            {activeMenu === "Shop by Brand" && (
              <div className="mega-menu">
                <div className="mega-column">
                  <h4>Dry & Wet Food</h4>
                  <Link to="/cat-dry-food" onClick={closeMenu}>
                    Dry Cat Food
                  </Link>
                  <Link to="/cat-wet-food" onClick={closeMenu}>
                    Wet Cat Food
                  </Link>
                  <Link to="/kitten-food" onClick={closeMenu}>
                    Kitten Food
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Toys</h4>
                  <Link to="/cat-catnip" onClick={closeMenu}>
                    Catnip
                  </Link>
                  <Link to="/cat-plush" onClick={closeMenu}>
                    Plush Toys
                  </Link>
                  <Link to="/cat-interactive" onClick={closeMenu}>
                    Interactive Toys
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Grooming</h4>
                  <Link to="/cat-shampoo" onClick={closeMenu}>
                    Cat Shampoo
                  </Link>
                  <Link to="/cat-nail-care" onClick={closeMenu}>
                    Nail Care
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Litter</h4>
                  <Link to="/cat-litter-box" onClick={closeMenu}>
                    Litter Box
                  </Link>
                  <Link to="/cat-litter-sand" onClick={closeMenu}>
                    Litter Sand
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Existing "Pet Service" menu item */}
          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("petservice")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/petservice" className="nav-item-main-link">
              Pet Service ▼
            </Link>
            {activeMenu === "petservice" && (
              <div className="mega-menu">
                <div className="mega-column">
                  <h4>Dry & Wet Food</h4>
                  <Link to="/cat-dry-food" onClick={closeMenu}>
                    Dry Cat Food
                  </Link>
                  <Link to="/cat-wet-food" onClick={closeMenu}>
                    Wet Cat Food
                  </Link>
                  <Link to="/kitten-food" onClick={closeMenu}>
                    Kitten Food
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Toys</h4>
                  <Link to="/cat-catnip" onClick={closeMenu}>
                    Catnip
                  </Link>
                  <Link to="/cat-plush" onClick={closeMenu}>
                    Plush Toys
                  </Link>
                  <Link to="/cat-interactive" onClick={closeMenu}>
                    Interactive Toys
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Grooming</h4>
                  <Link to="/cat-shampoo" onClick={closeMenu}>
                    Cat Shampoo
                  </Link>
                  <Link to="/cat-nail-care" onClick={closeMenu}>
                    Nail Care
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Litter</h4>
                  <Link to="/cat-litter-box" onClick={closeMenu}>
                    Litter Box
                  </Link>
                  <Link to="/cat-litter-sand" onClick={closeMenu}>
                    Litter Sand
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Existing "Shop by Breed" menu item */}
          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("Shop by Breed")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="/productpage" className="nav-item-main-link">
              Shop by Breed ▼
            </Link>
            {activeMenu === "Shop by Breed" && (
              <div className="mega-menu">
                <div className="mega-column">
                  <h4>Dry & Wet Food</h4>
                  <Link to="/cat-dry-food" onClick={closeMenu}>
                    Dry Cat Food
                  </Link>
                  <Link to="/cat-wet-food" onClick={closeMenu}>
                    Wet Cat Food
                  </Link>
                  <Link to="/kitten-food" onClick={closeMenu}>
                    Kitten Food
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Toys</h4>
                  <Link to="/cat-catnip" onClick={closeMenu}>
                    Catnip
                  </Link>
                  <Link to="/cat-plush" onClick={closeMenu}>
                    Plush Toys
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Grooming</h4>
                  <Link to="/cat-shampoo" onClick={closeMenu}>
                    Cat Shampoo
                  </Link>
                  <Link to="/cat-nail-care" onClick={closeMenu}>
                    Nail Care
                  </Link>
                </div>

                <div className="mega-column">
                  <h4>Litter</h4>
                  <Link to="/cat-litter-box" onClick={closeMenu}>
                    Litter Box
                  </Link>
                  <Link to="/cat-litter-sand" onClick={closeMenu}>
                    Litter Sand
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/consult" className="nav-item" onClick={closeMenu}>
            Consult a Vet
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;