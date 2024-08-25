import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { getAllDataProduct } from "../../services";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllDataProduct();
        setProducts(response.data);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="cards">
      {products.map((product) => (
        <div key={product.id} className="card">
          <button
            onClick={() => navigate("/about/product-details/" + product.id)}
          >
            <img src={product.image} alt={product.name} />
            <div className="body">
              <h2>{product.title}</h2>
              <p>{product.desc}</p>
              <p>${product.price}</p>
            </div>
            <div className="icons">
              <FaShoppingBasket className="icon" />
              <CiHeart className="icon" />
              <FaEye className="icon" />
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
