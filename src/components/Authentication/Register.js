import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userpic from '../../statics/user.jpg'

import { useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';

function Register() {
    const navigate= useNavigate();
    const [penname, setPenname] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [email, setEmail] = useState('');

    const registerUser=(e)=>{
        e.preventDefault(); //stops the default behaviour i.e refresh
        if(password === cpassword){

        const userData = {
            penname, password, email
        }
        axios.post("http://localhost:8080/api/users/user/registration", userData).then(
            result=>{
                    if(result.data.status){
                        toast.success("Registration Success. Verify your email.");
                        localStorage.setItem('email',email)
                        navigate('/verifytoken')
                    }
                    else{
                        toast.error(result.data.message) 
                    }
                }
        ).catch(e=>{
            toast.error(e)
        })
    }
    else{
        toast.error("Password doesn't match!")

    }
    }




    return (
        <div className='container '>
            <div className='row'>
                <div className='col my-4'>
                    <div className='row'>
                        
                        <div className='col shadow-sm p-2 me-2  rounded-3 text-center'>
                            <img src={userpic} alt="pic" className='rounded-circle shadow-sm' height={60} />
                            <p className='mt-2'>Chatyang Master</p>
                            <Link to='/' className='btn btn-purple text-white btn-sm'><i className='fa fa-eye'></i> 100 visits</Link>
                        </div>
                        <div className='col shadow-sm p-2 me-2  rounded-3 text-center'>
                            <img src={userpic} alt="pic" className='rounded-circle shadow-sm' height={60} />
                            <p className='mt-2'>Chatyang Master</p>
                            <Link to='/' className='btn btn-purple text-white btn-sm'><i className='fa fa-eye'></i> 100 visits</Link>
                        </div>
                        <div className='col shadow-sm p-2 me-2  rounded-3 text-center'>
                            <img src={userpic} alt="pic" className='rounded-circle shadow-sm' height={60} />
                            <p className='mt-2'>Chatyang Master</p>
                            <Link to='/' className='btn btn-purple text-white btn-sm'><i className='fa fa-eye'></i> 100 visits</Link>
                        </div>
                      
                        

                    </div>
                    <div className='row'>
                        
                        <div className='col shadow-sm p-2 me-2  rounded-3 text-center'>
                            <img src={userpic} alt="pic" className='rounded-circle shadow-sm' height={60} />
                            <p className='mt-2'>Chatyang Master</p>
                            <Link to='/' className='btn btn-purple text-white btn-sm'><i className='fa fa-eye'></i> 100 visits</Link>
                        </div>
                        <div className='col shadow-sm p-2 me-2  rounded-3 text-center'>
                            <img src={userpic} alt="pic" className='rounded-circle shadow-sm' height={60} />
                            <p className='mt-2'>Chatyang Master</p>
                            <Link to='/' className='btn btn-purple text-white btn-sm'><i className='fa fa-eye'></i> 100 visits</Link>
                        </div>
                        <div className='col shadow-sm p-2 me-2  rounded-3 text-center'>
                            <img src={userpic} alt="pic" className='rounded-circle shadow-sm' height={60} />
                            <p className='mt-2'>Chatyang Master</p>
                            <Link to='/' className='btn btn-purple text-white btn-sm'><i className='fa fa-eye'></i> 100 visits</Link>
                        </div>
                      
                        

                    </div>
                    <div className='row'>
                        
                        <div className='col shadow-sm p-2 me-2  rounded-3 text-center'>
                            <img src={userpic} alt="pic" className='rounded-circle shadow-sm' height={60} />
                            <p className='mt-2'>Chatyang Master</p>
                            <Link to='/' className='btn btn-purple text-white btn-sm'><i className='fa fa-eye'></i> 100 visits</Link>
                        </div>
                        <div className='col shadow-sm p-2 me-2  rounded-3 text-center'>
                            <img src={userpic} alt="pic" className='rounded-circle shadow-sm' height={60} />
                            <p className='mt-2'>Chatyang Master</p>
                            <Link to='/' className='btn btn-purple text-white btn-sm'><i className='fa fa-eye'></i> 100 visits</Link>
                        </div>
                        <div className='col shadow-sm p-2 me-2  rounded-3 text-center'>
                            <img src={userpic} alt="pic" className='rounded-circle shadow-sm' height={60} />
                            <p className='mt-2'>Chatyang Master</p>
                            <Link to='/' className='btn btn-purple text-white btn-sm'><i className='fa fa-eye'></i> 100 visits</Link>
                        </div>
                      
                        

                    </div>
                   
                    

                </div>
                <div className='col  rounded my-5 '>
                    <h3 className='p-4 fw-lighter text-center '>Register | <span className="fs-4 fw-light " >Sahitya <span className='text-danger'>Khoj</span> <i className="fas fa-feather-alt"></i></span></h3>
                   
                   <form className='p-4' id='registerForm'>
                   <div className="form-floating mb-3">
                        <input type="email"  value={penname} onChange={(e)=>setPenname(e.target.value)} className="form-control" id="penname" placeholder="Your unique id" />
                        <label for="penname">Penname*</label>
                    </div>
                   <div className="form-floating mb-3">
                        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email" placeholder="name@example.com" />
                        <label for="email">Email address*</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="password" placeholder="Password" />
                        <label for="floatingPassword">Password*</label>
                    </div>
                    <div className="form-floating">
                        <input type="password"  value={cpassword} onChange={(e)=>setCpassword(e.target.value)} className="form-control" id="cPassword" placeholder="Confirm Password" />
                        <label for="cPassword">Confirm Password*</label>
                    </div>
                    <div className='mb-2 mt-4 d-flex justify-content-center'>
                        <button className='btn btn-danger col-lg-4' id="registerBtn"
                        onClick={registerUser}>
                            Sign Up
                        </button>
                    </div>
                   </form>
                   <div className='mt-2 mb-3 text-center '>
                       <span>Already registered? <Link className='text-decoration-none' to='/register'>Login here.</Link></span><br/>
                       <Link className='text-decoration-none' to='/register' >Need help?</Link>
                   </div>

                </div>

            </div>

        </div>
    )
}

export default Register