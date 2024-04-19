import axios from "axios"
import WebApi from "./WebApi"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Products() {

    const [productList, setProductList] = useState([])
    const navigate = useNavigate()


    const loadProducts = async () => {

        try {
            const response = await axios.get(WebApi.getAllProductApi)
            console.log(response.data);
            setProductList(response.data.products)
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong")
        }

    }

    useEffect(() => {
        loadProducts()
    }, [])
    return (
        <>
            <ToastContainer />
            <Header />
            <div className="row ">


                {productList.map((product, index) => (
                    <div key={index} className="col-md-4 p-3" >
                        <div className="d-flex flex-column align-items-center p-2" style={{ boxShadow: "0 0 5px grey", height: "400px" }}>
                            <img src={product.thumbnail} width="200px" height="200px" style={{ borderRadius: "50%" }} />
                            <h3 className="mt-3">{product.title}</h3>
                            <p>Price :  <label className="text-success" style={{ fontSize: "20px" }}> {product.price} Rs</label></p>
                            <span onClick={() => { navigate(`/ProductDetail/${product.id}`) }} style={{ cursor: "pointer" }} className="text-primary" >View More</span>
                            <button style={{ width: "90%", margin: "auto" }} className="btn btn-secondary">Add to cart </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products