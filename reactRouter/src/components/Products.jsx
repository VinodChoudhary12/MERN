// import Navbar from "./Navbar"
// import { Link, Outlet, useNavigate } from "react-router-dom";


// function Products() {
//   const navigate = useNavigate()
//   return (
//     <>
//       <Navbar />
//       <div className="container mt-5">
//         <button onClick={() => navigate("/")} className="btn btn-warning">Home</button>
//         <button className="btn btn-info " onClick={() => navigate('/contactUs')}>Contact Us</button>
//         <h1>Product Component...</h1>
//         <Link to=""><button className="btn btn-info">Recent Product</button></Link>
//         <Link to="feature-product"><button className="btn btn-secondary ml-2">Feature Product</button></Link>
//       </div>
//       <hr />
//       <Outlet />
//     </>
//   )
// }

// export default Products

import Navbar from "./Navbar"
import { Link, Outlet, useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <button onClick={() => navigate("/")} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Home
        </button>
        <button onClick={() => navigate('/contactUs')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
          Contact Us
        </button>
        <h1 className="text-3xl font-bold mt-5 mb-2">Product Component...</h1>
        <Link to="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Recent Product
        </Link>
        <Link to="feature-product" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
          Feature Product
        </Link>
      </div>
      <hr className="my-8" />
      <Outlet />
    </>
  );
}

export default Products;
