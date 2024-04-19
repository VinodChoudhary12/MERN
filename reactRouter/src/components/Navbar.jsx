import { Link } from "react-router-dom"


function Navbar() {
    return (
        <div className="header d-flex justify-content-around align-items-center">
            <Link to="/"><span>Home</span></Link>
            <Link to="/contactUs" ><span>ContactUs</span></Link>
            <Link to='/portfolio'> <span>Portfolio</span></Link>
            <Link to='/products'><span>Products</span></Link>
            <Link to='/about'><span>About</span></Link>




        </div>
    )
}

export default Navbar