import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../services";
import "./index.scss";
import Button from "../../components/button";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await getProductById(id);
        setProduct(response.data);
      } catch (error) {
        setError("Məhsul məlumatlari əldə edilə bilmədi.");
        console.error(
          "Məhsul haqqinda məlumat əldə edilərkən xəta baş verdi:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="spinner"></div>;
  if (error) return <div>{error}</div>;

  return (
    <div id="product-details">
      {product ? (
        <>
          <div className="product-details">
            <div className="image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="body">
              <h1>{product.title}</h1>
              <p>{product.desc}</p>
              <p className="price">Qiymət: ${product.price}</p>
              {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
              <Button onClick={() => navigate(-1)}>Go Back</Button>
            </div>
          </div>
        </>
      ) : (
        <p>Məhsul tapilmadi.</p>
      )}
    </div>
  );
};

export default ProductDetails;
