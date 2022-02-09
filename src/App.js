import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SignInandSignUpPage from "./pages/SignInandSignUpPage/SignInandSignUpPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignInandSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
