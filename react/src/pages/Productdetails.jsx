import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Productdetails.css";

function Productdetails() {

const { id } = useParams();

const [product, setProduct] = useState(null);
const [mainImage, setMainImage] = useState("");
const [quantity, setQuantity] = useState(1);
const [size, setSize] = useState("1kg");

const [reviews, setReviews] = useState([]);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [reviewText, setReviewText] = useState("");
const [rating, setRating] = useState(0);

useEffect(() => {

fetch("/dog.json")
.then((res) => res.json())
.then((data) => {
const found = data.find((item) => item.id === parseInt(id));
setProduct(found);
if (found) setMainImage(found.image);
});

const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
setReviews(savedReviews);

}, [id]);

if (!product) return <h2>Loading...</h2>;


// ADD TO CART
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


// SUBMIT REVIEW
const handleReviewSubmit = () => {

if (!name || !email || !reviewText || rating === 0) {
alert("Please fill all fields and rating");
return;
}

const newReview = {
name,
email,
reviewText,
rating
};

const updatedReviews = [...reviews, newReview];

setReviews(updatedReviews);

localStorage.setItem("reviews", JSON.stringify(updatedReviews));

setName("");
setEmail("");
setReviewText("");
setRating(0);

alert("Review Submitted");

};


// DELETE REVIEW
const handleDeleteReview = (index) => {

const updatedReviews = reviews.filter((_, i) => i !== index);

setReviews(updatedReviews);

localStorage.setItem("reviews", JSON.stringify(updatedReviews));

};

return (

<div className="product-page">

<p className="breadcrumb">
Home / Dog / {product.name}
</p>

<div className="product-layout">

{/* IMAGE SECTION */}

<div className="product-gallery">

<img
src={mainImage}
className="main-image"
alt={product.name}
/>

<div className="thumbnail-row">

{product.images?.map((img, i) => (

<img
key={i}
src={img}
className="thumbnail"
onClick={() => setMainImage(img)}
alt=""
/>

))}

</div>

</div>

{/* PRODUCT DETAILS */}

<div className="product-details">

<h2>{product.name}</h2>

<p className="brand">Brand: {product.brand}</p>

<p className="price">₹ {product.price}<p>Coupen code:231</p></p>

<p className="desc">
This premium dog food is specially designed to support the daily
nutritional needs of small breed dogs. It contains high quality
protein sources like turkey and eggs that help build strong muscles.
Healthy grains including quinoa, oats, and barley provide balanced
energy throughout the day. Natural fiber ingredients support healthy
digestion and gut health. Omega fatty acids help maintain healthy
skin and a shiny coat. Essential vitamins and minerals strengthen
the immune system. Carefully selected ingredients ensure better
nutrition and taste. Free from artificial colors and preservatives.
Made with natural ingredients for healthy growth. Your pet will
enjoy a delicious and nutritious meal every day.
</p>

{/* SIZE */}

<div className="size-box">

<p>Available Size:</p>

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


{/* QUANTITY */}

<div className="quantity-box">

<button onClick={()=>setQuantity(quantity>1?quantity-1:1)}>
-
</button>

<span>{quantity}</span>

<button onClick={()=>setQuantity(quantity+1)}>
+
</button>

</div>


{/* BUTTONS */}

<div className="action-buttons">

<button className="add-cart" onClick={handleAddToCart}>
Add to Cart
</button>

<button className="buy-now">
Buy Now
</button>

</div>

</div>

</div>


{/* REVIEW FORM */}

<div className="review-form">

<h3>Customer Review</h3>

{/* STAR RATING */}

<div className="star-rating">

{[1,2,3,4,5].map((star)=>(
<span
key={star}
onClick={()=>setRating(star)}
style={{
fontSize:"25px",
cursor:"pointer",
color: star <= rating ? "gold" : "gray"
}}
>
★
</span>
))}

</div>

<textarea
placeholder="Your Review"
value={reviewText}
onChange={(e)=>setReviewText(e.target.value)}
></textarea>

<input
type="text"
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Your Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<button onClick={handleReviewSubmit}>
Submit Review
</button>

</div>


{/* REVIEW LIST */}

<div className="review-list">

{reviews.map((r,index)=>(

<div key={index} className="review-card">

<h4>{r.name}</h4>

<p>{"★".repeat(r.rating)}</p>

<p>{r.reviewText}</p>

<button
className="delete-btn"
onClick={()=>handleDeleteReview(index)}
>
Delete
</button>

</div>

))}

</div>

</div>

);

}

export default Productdetails;