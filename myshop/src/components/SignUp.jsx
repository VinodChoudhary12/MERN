import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import WebApi from "./WebApi";
function SignUp() {


    const navigate = useNavigate();
    const nameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const contactInput = useRef();
    const handleSignUp = async () => {
        try {
            let username = nameInput.current.value;
            let email = emailInput.current.value;
            let password = passwordInput.current.value;
            let contact = contactInput.current.value;
            var response = await axios.post(WebApi.userSignUp, { username, email, password, contact });
            console.log(response);
            toast.success("Sign up success! Please sign in.");
        }
        catch (err) {
            console.log(err);
            if (err.response && err.response.status === 409) {
                toast.error("User Already Exists");
            } else {
                toast.error("Oops! Something went wrong.");
            }
        }

    }

    // useEffect(() => { handleSignUp() }, [])
    return <>
        <ToastContainer />
        <div className="sign-in-component">
            <div className="bg-secondary text-white d-flex justify-content-center align-items-center" style={{ height: "60px" }}>
                <h4>Sign Up</h4>
            </div>

            <div className="form-group p-2 mt-3">
                <input ref={nameInput} type="text" placeholder="Enter name" className="form-control" />
            </div>
            <div className="form-group p-2">
                <input ref={emailInput} type="text" placeholder="Enter email" className="form-control" />
            </div>
            <div className="form-group p-2">
                <input ref={passwordInput} type="password" placeholder="Enter password" className="form-control" />
            </div>
            <div className="form-group p-2">
                <input ref={contactInput} type="text" placeholder="Enter Contact" className="form-control" />
            </div>
            <div className="form-group p-2">
                <button onClick={handleSignUp} className="btn btn-danger">Sign up</button>
                <span onClick={() => navigate("/SingIn")} className="text-primary ml-3" style={{ cursor: "pointer" }}>Already have account ?</span>
            </div>
        </div>
    </>
}

export default SignUp;