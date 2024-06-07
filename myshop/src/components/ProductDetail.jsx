

import { useParams } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import WebApi from "./WebApi";
import { useEffect, useState } from "react";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState('');
  const param = useParams();

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${WebApi.getPrudctById}/${param.productId}`);
      setProduct(response.data.product);
      setSelectedImage(response.data.product.images.split(" ")[0]); // Set first image as default selected image
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="col-md-6 border-2" style={{ border: "1px solid black" }}>
          <img
            style={{ width: "250px", height: "290px", marginBottom: "10px" }}
            src={selectedImage}
            alt="Product Main Image"
          />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {product.images &&
              product.images.split(" ").slice(1).map((imageUrl, index) => (
                <img
                  key={index + 1}
                  style={{ width: "200px", height: "200px", margin: "5px", cursor: "pointer" }}
                  src={imageUrl}
                  alt={`Product Image ${index + 2}`}
                  onClick={() => handleImageClick(imageUrl)}
                />
              ))}
          </div>
        </div>
        <div className="col-md-6" style={{ height: "400px", width: "200px", border: "1px solid black" }}>
          <div>{product.id}</div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

