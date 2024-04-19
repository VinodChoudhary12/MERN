import { Link } from "react-router-dom";

function Header() {
    return <>
        <div className="header d-flex justify-content-around align-items-center">
            <Link to="/"><span>Home</span></Link>
            <Link to="/Users"><span>Users</span></Link>
            <Link to="/contact"><span>Contact us</span></Link>
            <Link to="/Cart"><span>Cart</span></Link>
            <Link to="/products"><span>Products</span></Link>
        </div>
    </>
}

export default Header;