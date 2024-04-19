import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import WebApi from "./WebApi";
import { toast } from "react-toastify";

function SignIn() {
    const emailInput = useRef();
    const passwordInput = useRef();
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const email = emailInput.current.value;
            const password = passwordInput.current.value;

            const response = await axios.post(WebApi.userSignIn, { email, password });
            console.log(response.data.data);
            let user = response.data.data;
            delete user.password;
            console.log(user);
            saveUser(user);
            if (response.status === 201) {
                toast.success(
                    `Sign-in successful! welcome ${response.data.data.username}`
                );
                navigate("/products");
            } else {
                toast.error("Sign-in failed. Please check your Details.");
            }
        } catch (err) {
            console.log(err);
            toast.error("Oops! Something went wrong during sign-in.");
        }
    };
    const saveUser = (user) => {
        sessionStorage.setItem("Current-User", JSON.stringify(user));
    };

    return (
        <>
            <div className="sign-in-component">
                <div
                    className="bg-danger text-white d-flex justify-content-center align-items-center"
                    style={{ height: "60px" }}
                >
                    <h4>Sign In</h4>
                </div>
                <div className="form-group p-2 mt-3">
                    <input
                        ref={emailInput}
                        type="text"
                        placeholder="Enter email"
                        className="form-control"
                    />
                </div>
                <div className="form-group p-2">
                    <input
                        ref={passwordInput}
                        type="password"
                        placeholder="Enter password"
                        className="form-control"
                    />
                </div>
                <div className="form-group p-2">
                    <button onClick={handleSignIn} className="btn btn-danger">
                        Sign in
                    </button>
                    <span
                        onClick={() => navigate("/signup")}
                        style={{ cursor: "pointer" }}
                        className="text-primary ml-3"
                    >
                        New user ?
                    </span>
                </div>
            </div>
        </>
    );
}

export default SignIn;
