// src/App.js
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList";
const App = () => (
  <Routes>
    <Route path="/:id" element={<ProductsList />} />
    <Route path="/" element={<ProductsList />} />
  </Routes>
);

export default App;
