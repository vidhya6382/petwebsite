import React, { useState } from "react";
import "./Login.css";

function Contact() {

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  // Register Change
  const handleRegisterChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    });
  };

  // Login Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (login.email === "" || login.password === "") {
      alert("Please fill all required fields!");
      return;
    }

    alert("Login Successful!");
    setLogin({ email: "", password: "" });
  };

  // Register Submit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (
      register.firstName === "" ||
      register.lastName === "" ||
      register.email === "" ||
      register.password === ""
    ) {
      alert("Please fill all fields!");
      return;
    }

    alert("Account Created Successfully!");
    setShowPopup(false);
    setRegister({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  return (
    <div className="account-container">

      <h2>Account</h2>

      <div className="account-box">

        {/* Returning Customer */}
        <form className="returning" onSubmit={handleSubmit}>
          <h3>Returning customer</h3>

          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={login.email}
            onChange={handleChange}
          />

          <label>Password*</label>
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
          />

          <button type="submit" className="btn">
            Log in
          </button>
        </form>

        {/* New Customer */}
        <div className="new-customer">
          <h3>New customer</h3>
          <p>
            Register with us for faster checkout,
            to track your order status and more.
          </p>

          <button
            className="btn"
            onClick={() => setShowPopup(true)}
          >
            Create an account
          </button>
        </div>

      </div>

      {/* ===== POPUP MODAL ===== */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">

            <h3>Create Account</h3>

            <form onSubmit={handleRegisterSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={register.firstName}
                onChange={handleRegisterChange}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={register.lastName}
                onChange={handleRegisterChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={register.email}
                onChange={handleRegisterChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={register.password}
                onChange={handleRegisterChange}
              />

              <button type="submit" className="btn">
                Create Account
              </button>

              <button
                type="button"
                className="close-btn"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

export default Contact;