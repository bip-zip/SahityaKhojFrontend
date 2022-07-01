import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function SetNewPassword() {
    const navigate = useNavigate()
    const [validurl, setValidurl] = useState(false);
    const { userId } = useParams();
    const { token } = useParams();

    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const checkUrl = async () => {
        const res = await axios.get(
            "http://localhost:8080/api/users/" + userId + "/" + token
        );
        setValidurl(res.status);
    };

    const submitNewPassword = (e) => {
        e.preventDefault();
        if (password == cpassword) {
            axios
                .post(
                    "http://localhost:8080/api/users/reset-password/" +
                    userId +
                    "/" +
                    token,
                    { password: password }
                )
                .then((res) => {
                    console.log(res)
                    if (res.data.status) {
                        toast.success(res.data.message);
                        navigate("/login")
                    } else {
                        toast.error(res.data.message);
                    }
                });
        } else {
            toast.error("Password doesn't match.");
        }
    };

    // useeffect call
    useEffect(() => {
        checkUrl();
    }, []);

    return (
        <>
            {validurl ? (
                <div className="container ">
                    <div className="row">
                        <div className="col my-4 text-center">
                            <img
                                src="/images/newpassword.svg"
                                height={350}
                                className="my-5"
                            />
                        </div>
                        <div className="col  rounded my-5 ">
                            <h3 className="p-4 fw-lighter text-center ">
                                Set New Password |{" "}
                                <span className="fs-4 fw-light ">
                                    Sahitya <span className="text-danger">Khoj</span>{" "}
                                    <i className="fas fa-feather-alt"></i>
                                </span>
                            </h3>

                            <form className="p-4" method="POST" id="loginForm">
                                <div className="form-floating mb-3 ">
                                    <input
                                        type="text"
                                        className="form-control fs-6"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label for="penname ">
                                        <i className="fa fa-key fs-6 "></i>&nbsp; Password
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="cpassword"
                                        placeholder="Confirm Password"
                                        value={cpassword}
                                        onChange={(e) => setCPassword(e.target.value)}
                                    />
                                    <label for="cpassword">
                                        <i className="fa-solid fa-key fs-6 "></i>&nbsp; Confirm
                                        Password
                                    </label>
                                </div>
                                <div className="mb-2 mt-4 d-flex justify-content-center">
                                    <button
                                        className="btn btn-danger col-lg-4"
                                        id="loginBtn"
                                        onClick={submitNewPassword}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <h3 className="text-center p-4"> ! Seems like the link is broken</h3>
                    <img
                        src="https://i.pinimg.com/originals/cf/37/f3/cf37f3f0cf9dd8b13443fa86ea136c45.gif"
                        height={400}
                    />
                </div>
            )}
        </>
    );
}

export default SetNewPassword;
