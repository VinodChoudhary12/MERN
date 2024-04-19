// // // import { useParams } from "react-router-dom";
// // // import Header from "./Header";
// // // import axios from "axios";
// // // import WebApi from "./WebApi";

// // // function ProductDetail() {
// // //   const param = useParams();
// // //   const getData = async () => {
// // //     console.log(param.productId);
// // //     const productId = param.productId;
// // //     const response = await axios.get(WebApi.getPrudctById, { params: { productId } })
// // //     console.log(response.data)
// // //   }

// // //   getData()

// // //   return (
// // //     <>
// // //       <Header />
// // //       <div>
// // //         <ul>
// // //           <li></li>
// // //         </ul>
// // //       </div>

// // //     </>
// // //   )
// // // }

// // // export default ProductDetail

// // import { useParams } from "react-router-dom";
// // import Header from "./Header";
// // import axios from "axios";
// // import WebApi from "./WebApi";

// // function ProductDetail() {
// //   const param = useParams();

// //   console.log(param.productId);
// //   const productId = param.productId;

// //   var response = axios.get(WebApi.getPrudctById, { params: { productId } })
// //     .then(response => {
// //       console.log(response.data.args);
// //       console.log(response.data);
// //     })
// //     .catch(error => {
// //       console.error("Error fetching product data:", error);
// //     });

// //   console.log(response.data);

// //   return (
// //     <>
// //       <Header />
// //       <div>
// //         <ul>
// //           <li></li>
// //         </ul>
// //       </div>
// //     </>
// //   );
// // }

// // export default ProductDetail;

// import { useParams } from "react-router-dom";
// import Header from "./Header";
// import axios from "axios";
// import WebApi from "./WebApi";
// import { useEffect, useState } from "react";


// function ProductDetail() {
//   const [product, setProduct] = useState({});
//   const param = useParams();

//   console.log(param.productId);
//   const productId = param.productId;

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${WebApi.getPrudctById}/${productId}`);
//       console.log(response.data.product);
//       setProduct(response.data.product)
//     } catch (error) {
//       console.error("Error fetching product data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [])

//   return (
//     <>
//       <Header />
//       <div className="d-flex ">

//         {/* <div className="col-md-6 border-2 " style={{ border: "1px solid black" }}>
//           {product.images && product.images.split(" ").map((imageUrl, index) => (
//             <img key={index} style={{ height: "120px", width: "120px" }} src={imageUrl} alt={`Product Image ${index + 1}`} />
//           ))}
//         </div> */}
//         <div className="col-md-6 border-2" style={{ border: "1px solid black" }}>
//           {product.images && (
//             <>
//               <img
//                 key={0}
//                 style={{ width: "100%", marginBottom: "10px" }}
//                 src={product.images.split(" ")[0]}
//                 alt={`Product Image 1`}
//               />
//               <div style={{ display: "flex", flexWrap: "wrap" }}>
//                 {product.images.split(" ").slice(1).map((imageUrl, index) => (
//                   <img
//                     key={index + 1}
//                     style={{ width: "calc(50% - 5px)", marginBottom: "10px", marginRight: "10px" }}
//                     src={imageUrl}
//                     alt={`Product Image ${index + 2}`}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>

//         <div className="col-md-6 " style={{ height: "400px", width: "200px", border: "1px solid black" }}>
//           <div>
//             {product.id}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductDetail;

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

