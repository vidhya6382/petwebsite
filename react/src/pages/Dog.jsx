import React, { useState, useEffect } from "react";
import "./Dog.css";
import { useNavigate } from "react-router-dom";
function Dog() {
const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [selectedBreed, setSelectedBreed] = useState([]);
const [selectedLifeStage, setSelectedLifeStage] = useState([]);
const [selectedRating, setSelectedRating] = useState([]);

  useEffect(() => {
    fetch("/dog.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

 useEffect(() => {

  let updated = [...products];

  if (selectedBrand.length > 0) {
    updated = updated.filter(item =>
      selectedBrand.includes(item.brand)
    );
  }

  if (selectedSize.length > 0) {
    updated = updated.filter(item =>
      selectedSize.includes(item.size)
    );
  }

  if (selectedBreed.length > 0) {
    updated = updated.filter(item =>
      selectedBreed.includes(item.breed)
    );
  }

  if (selectedLifeStage.length > 0) {
    updated = updated.filter(item =>
      selectedLifeStage.includes(item.lifeStage)
    );
  }

  if (selectedRating.length > 0) {
    updated = updated.filter(item =>
      selectedRating.includes(item.rating)
    );
  }

  if (sortOption === "low") {
    updated.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high") {
    updated.sort((a, b) => b.price - a.price);
  }

  setFilteredProducts(updated);

}, [
  selectedBrand,
  selectedSize,
  selectedBreed,
  selectedLifeStage,
  selectedRating,
  sortOption,
  products
]);

  const handleBrand = (brand) => {
    setSelectedBrand(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleSize = (size) => {
    setSelectedSize(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };
const handleBreed = (breed) => {
  setSelectedBreed(prev =>
    prev.includes(breed)
      ? prev.filter(b => b !== breed)
      : [...prev, breed]
  );
};

const handleLifeStage = (stage) => {
  setSelectedLifeStage(prev =>
    prev.includes(stage)
      ? prev.filter(s => s !== stage)
      : [...prev, stage]
  );
};

const handleRating = (rating) => {
  setSelectedRating(prev =>
    prev.includes(rating)
      ? prev.filter(r => r !== rating)
      : [...prev, rating]
  );
};

 return (
  <div className="dog-page">

    {/* Sidebar */}
    <div className="sidebar">
      <h3>Filters</h3><br></br>

      {/* Brand */}
      <div className="filter-section">
        <h4>Brand</h4>
        <label>
          <input type="checkbox" onChange={() => handleBrand("Bayer")} />
          Bayer
        </label><br></br><br></br>
        <label>
          <input type="checkbox" onChange={() => handleBrand("Beaphar")} />
          Beaphar
        </label><br></br><br></br>
        <label>
          <input type="checkbox" onChange={() => handleBrand("Pedigree")} />
          Pedigree
        </label><br></br><br></br>
      </div>

      {/* Size */}
      <div className="filter-section">
        <h4>Size</h4>
        <label>
          <input type="checkbox" onChange={() => handleSize("Small")} />
          Small
        </label><br></br><br></br>
        <label>
          <input type="checkbox" onChange={() => handleSize("Medium")} />
          Medium
        </label><br></br><br></br>
        <label>
          <input type="checkbox" onChange={() => handleSize("Large")} />
          Large
        </label><br></br><br></br>
      </div>

      {/* Breed */}
      <div className="filter-section">
        <h4>Breed</h4>
        <label>
          <input type="checkbox" onChange={() => handleBreed("Labrador")} />
          Labrador
        </label><br></br><br></br>
        <label>
          <input type="checkbox" onChange={() => handleBreed("Beagle")} />
          Beagle
        </label><br></br><br></br>
        <label>
          <input type="checkbox" onChange={() => handleBreed("Pug")} />
          Pug
        </label><br></br><br></br>
      </div>

      {/* Life Stage */}
      <div className="filter-section">
        <h4>Life Stage</h4>
        <label>
          <input type="checkbox" onChange={() => handleLifeStage("Puppy")} />
          Puppy
        </label><br></br><br></br>
        <label>
          <input type="checkbox" onChange={() => handleLifeStage("Adult")} />
          Adult
        </label><br></br><br></br>
      </div>

      {/* Rating */}
      <div className="filter-section">
        <h4>Rating</h4>
        <label>
          <input type="checkbox" onChange={() => handleRating(4)} />
          4 ★ & above
        </label><br></br><br></br>
        <label>
          <input type="checkbox" onChange={() => handleRating(3)} />
          3 ★ & above
        </label><br></br>
      </div>

    </div>

    {/* Products */}
    <div className="products-section">

      <div className="top-bar">
        <h2>Dog Products</h2>

        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort by</option>
          <option value="low">Price: Low - High</option>
          <option value="high">Price: High - Low</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>₹ {item.price}</p>
              <button onClick={() => navigate(`/product/${item.id}`)}>
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