
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Error from "./Error";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppContext from "./utils/context";
import Login from "./Login"
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
