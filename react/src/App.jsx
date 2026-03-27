import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Consultvet from "./pages/Consultvet";
import Aboutpage from "./pages/Aboutpage";
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import Petservice from "./pages/Petservice";
import Dog from "./pages/Dog";
import Cat from "./pages/Cat";
import Smallpet from "./pages/Smallpet";
import Productdetails from "./pages/Productdetails";
import Cartpage from "./pages/Cartpage";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import ConsultDoctor from "./pages/ConsultDoctor";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactpage" element={<Contactpage />} />
        <Route path="/consultdoctor" element={<ConsultDoctor />} />
        <Route path="/consult" element={<Consultvet />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/petservice" element={<Petservice />} />
        <Route path="/smallpet" element={<Smallpet />} /> 
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;