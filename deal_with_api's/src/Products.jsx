import axios from "axios";
import { useEffect, useState, } from "react";

import { Link, useNavigate } from "react-router-dom";

function Products() {
    // const [product, setProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState()
    const navigate = useNavigate();
    function handleViewMore(id) {
        alert(id)
        setSelectedProducts(id)
        navigate('ViewMore', { state: { selectedProducts: id } });

    }
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products");
            setProducts(response.data.products);
        } catch (error) {
            console.log("Failed to fetch data", error);
        }
    };
    return (
        <>

            <div className="bg-dark text-light text-center">Products</div>

            <div className="container d-flex justify-content-center align-items-center  flex-wrap gap-4 m-4">
                {products.map((product) => (
                    <div key={product.id} className="card" style={{ width: "300px" }}>

                        <img src={product.thumbnail} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">Price: {product.price} &#8377;
                            </p>
                            <p className="card-text">Brand: {product.brand}</p>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                                <Link to="cart"> <button className="btn btn-primary">Add to Cart</button></Link>
                                <Link to="ViewMore">  <button className="btn btn-primary" onClick={() => handleViewMore(product.id)} >View More</button></Link>
                                {/* <button onClick={() => { navigate('ViewMore') }}>Click Here </button> */}
                            </div>

                            {/* {console.log(setSelectedProducts(product.id))} */}
                        </div>

                    </div>
                ))}
            </div>


        </>
    );
}

export default Products;
