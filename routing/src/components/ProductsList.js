// src/components/ProductsList.js
import React, { useState } from "react";
import Product from "./Product";
import productsData from "../data/products";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  const navigate = useNavigate(); // Get the navigation function

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    // Update the URL with the page number
    navigate(`/${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="product-list">
        {currentProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={productsData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductsList;
