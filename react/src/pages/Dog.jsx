import React, { useState, useEffect } from "react";
import "./Dog.css";
import { useNavigate } from "react-router-dom";

function Dog() {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState([]);
  const [selectedLifeStage, setSelectedLifeStage] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);

  const [sortOption, setSortOption] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/dog.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {

    let updated = [...products];

    // Search
    if (search !== "") {
      updated = updated.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Brand filter
    if (selectedBrand.length > 0) {
      updated = updated.filter((item) =>
        selectedBrand.includes(item.brand)
      );
    }

    // Size filter
    if (selectedSize.length > 0) {
      updated = updated.filter((item) =>
        selectedSize.includes(item.size)
      );
    }

    // Breed filter
    if (selectedBreed.length > 0) {
      updated = updated.filter((item) =>
        selectedBreed.includes(item.breed)
      );
    }

    // Life Stage filter
    if (selectedLifeStage.length > 0) {
      updated = updated.filter((item) =>
        selectedLifeStage.includes(item.lifeStage)
      );
    }

    // Rating filter
    if (selectedRating.length > 0) {
      updated = updated.filter((item) =>
        selectedRating.includes(item.rating)
      );
    }

    // Sorting
    if (sortOption === "low") {
      updated.sort((a, b) => a.price - b.price);
    }

    if (sortOption === "high") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);

  }, [
    search,
    selectedBrand,
    selectedSize,
    selectedBreed,
    selectedLifeStage,
    selectedRating,
    sortOption,
    products
  ]);

  // Brand
  const handleBrand = (brand) => {
    setSelectedBrand((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  // Size
  const handleSize = (size) => {
    setSelectedSize((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  // Breed
  const handleBreed = (breed) => {
    setSelectedBreed((prev) =>
      prev.includes(breed)
        ? prev.filter((b) => b !== breed)
        : [...prev, breed]
    );
  };

  // Life Stage
  const handleLifeStage = (stage) => {
    setSelectedLifeStage((prev) =>
      prev.includes(stage)
        ? prev.filter((s) => s !== stage)
        : [...prev, stage]
    );
  };

  // Rating
  const handleRating = (rating) => {
    setSelectedRating((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  return (
    <div className="dog-page">

      {/* Sidebar */}
      <div className="sidebar">

        <h3>Filters</h3>

        {/* Brand */}
        <div className="filter-section">
          <h4>Brand</h4>

          <label>
            <input type="checkbox" onChange={() => handleBrand("Bayer")} />
            Bayer
          </label>

          <br /><br />

          <label>
            <input type="checkbox" onChange={() => handleBrand("Beaphar")} />
            Beaphar
          </label>

          <br /><br />

          <label>
            <input type="checkbox" onChange={() => handleBrand("Pedigree")} />
            Pedigree
          </label>

        </div>

        {/* Size */}
        <div className="filter-section">

          <h4>Size</h4>

          <label>
            <input type="checkbox" onChange={() => handleSize("Small")} />
            Small
          </label>

          <br /><br />

          <label>
            <input type="checkbox" onChange={() => handleSize("Medium")} />
            Medium
          </label>

          <br /><br />

          <label>
            <input type="checkbox" onChange={() => handleSize("Large")} />
            Large
          </label>

        </div>

        {/* Breed */}
        <div className="filter-section">

          <h4>Breed</h4>

          <label>
            <input type="checkbox" onChange={() => handleBreed("Labrador")} />
            Labrador
          </label>

          <br /><br />

          <label>
            <input type="checkbox" onChange={() => handleBreed("Beagle")} />
            Beagle
          </label>

          <br /><br />

          <label>
            <input type="checkbox" onChange={() => handleBreed("Pug")} />
            Pug
          </label>

        </div>

        {/* Life Stage */}
        <div className="filter-section">

          <h4>Life Stage</h4>

          <label>
            <input type="checkbox" onChange={() => handleLifeStage("Puppy")} />
            Puppy
          </label>

          <br /><br />

          <label>
            <input type="checkbox" onChange={() => handleLifeStage("Adult")} />
            Adult
          </label>

        </div>

        {/* Rating */}
        <div className="filter-section">

          <h4>Rating</h4>

          <label>
            <input type="checkbox" onChange={() => handleRating(4)} />
            4 ★ & above
          </label>

          <br /><br />

          <label>
            <input type="checkbox" onChange={() => handleRating(3)} />
            3 ★ & above
          </label>

        </div>

      </div>

      {/* Products */}
      <div className="products-section">

        <div className="top-bar">

          <h2>Dog Products</h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Sort */}
          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Sort By</option>
            <option value="low">Price Low → High</option>
            <option value="high">Price High → Low</option>
          </select>

        </div>

        {/* Product Grid */}
        <div className="products-grid">

          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((item) => (
              <div className="card" key={item.id}>

                <img src={item.image} alt={item.name} />

                <h4>{item.name}</h4>

                <p>₹ {item.price}</p>

                <button
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  Add to Cart
                </button>

              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default Dog;