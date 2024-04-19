import axios from "axios";
import { useEffect, useState } from "react";

const GetData = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/user");
            console.log("Response wala", response);
            setData(response.data.users);
            console.log("Data fetch Successfully");
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <>
                <h3 className="bg-dark text-light text-center">Users Details</h3>
                <div className="card-container d-flex flex-wrap justify-content-center align-items-stretch gap-3" style={{ boxShadow: "0px 0px 10px grey" }}>
                    {/* <div className=" card-container d-flex flex-wrap justify-content-center align-items-center row row-cols-1 row-cols-md-4 g-4"> */}
                    {data.map((user) => (
                        <div key={user.id} className="card my-2">
                            <div className="card-body">
                                <h5 className="card-title">User ID: {user.id}</h5>
                                <img className="card-title" src={user.image} height={"30px"} alt={`User ${user.id}`} />
                                <p className="card-text">
                                    <strong>First Name:</strong> {user.firstName}<br />
                                    <strong>Maiden Name:</strong> {user.maidenName}<br />
                                    <strong>Last Name:</strong> {user.lastName}<br />
                                    <strong>Age:</strong> {user.age}<br />
                                    <strong>Gender:</strong> {user.gender}<br />
                                    <strong>Email:</strong> {user.email}<br />
                                    <strong>Phone:</strong> {user.phone}<br />
                                    <strong>Username:</strong> {user.username}<br />
                                    <strong>Password:</strong> {user.password}<br />
                                    <strong>Birth Date:</strong> {user.birthDate}<br />
                                    <strong>City:</strong> {user.address.city}<br />
                                    <strong>Address:</strong> {user.address.address}<br />
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </>
        </>
    );
};

export default GetData;
