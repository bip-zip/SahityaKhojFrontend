import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast';
import axios from "axios";
import { useState } from 'react';

function ForgetPassword() {

    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    // const email = localStorage.getItem('email')


    function sentLink(e) {
        e.preventDefault(); //stops the default behaviour i.e refresh
        const userData = {
            email: email,
        }
        axios.post("http://localhost:8080/api/users/send-link", userData).then(
            result => {
                if (result.data.status) {
                    toast.success(result.data.message, {position: 'top-right'})
                    // navigate("/login")

                }
                else {
                    toast.error(result.data.message, {position: 'top-right'})
                }
            }
        ).catch(e => {
            toast.error('Someting went wrong!!')
        })


    }
    return (
        <div className='container '>
            <div className='row'>
                <div className='col my-5 text-center'>
                    <img alt='image' className='text-center mt-5' src="images/forgot_password.svg" height={250} />


                </div>
                <div className='col  rounded my-5 py-5 '>
                    <h3 className='p-4 fw-lighter text-center '>Forget Password | <span className="fs-4 fw-light " >Sahitya <span className='text-danger'>Khoj</span> <i className="fas fa-feather-alt"></i></span></h3>

                    <form className='p-4' method='POST' id='loginForm'>
                        <div className="form-floating mb-3 ">
                            <input type="email" className="form-control fs-6" id="token" placeholder="Email"
                            value={email} onChange={e=>setEmail(e.target.value)}
                            />
                            <label for="token "><i className='fa fa-mail fs-6 '></i>&nbsp; Enter your email here</label>
                        </div>

                        <div className='mb-2 mt-4 d-flex justify-content-center'>
                            <button className='btn btn-danger col-lg-4' onClick={sentLink} id='loginBtn' >
                                Send Link
                            </button>
                        </div>
                    </form>


                </div>

            </div>

        </div>
    )
}

export default ForgetPassword