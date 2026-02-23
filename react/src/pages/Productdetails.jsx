import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Productdetails.css";

function Productdetails() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("1kg");

  useEffect(() => {
    fetch("/dog.json")   
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        const foundProduct = data.find(
          (item) => item.id === parseInt(id)
        );

        setProduct(foundProduct);
        if (foundProduct) {
          setMainImage(foundProduct.image);
        }
      });
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }
const handleAddToCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(
    (item) => item.id === product.id && item.size === size
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity,
      size,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to Cart!");
};
  return (
    <div className="product-container">
      <div className="product-top">

        {/* LEFT SIDE */}
        <div className="product-images">
          <img src={mainImage} alt={product.name} className="main-image" />

          <div className="thumbnail-container">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                className="thumbnail"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <p><b>Brand:</b> {product.brand}</p>
          <p className="price">₹ {product.price}</p>

          <div className="size-section">
            <p><b>Size:</b></p>
            <button
              className={size === "1kg" ? "active" : ""}
              onClick={() => setSize("1kg")}
            >
              1kg
            </button>
            <button
              className={size === "2kg" ? "active" : ""}
              onClick={() => setSize("2kg")}
            >
              2kg
            </button>
          </div>

          <div className="quantity-section">
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <div className="button-section">
           <button className="cart-btn" onClick={handleAddToCart}>
  Add to Cart
</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="description-section">
        <h3>Description</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Productdetails;