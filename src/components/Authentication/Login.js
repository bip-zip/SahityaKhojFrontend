import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import userpic from '../../statics/user.jpg'
import RecommendCard from './RecommendCard'
import toast from 'react-hot-toast';

import axios from "axios";
import { useState } from 'react';



function Login() {
    let navigate =useNavigate();
    const [penname, setPenname]=useState('');
    const [password, setPassword]=useState('');

    function loginUser(e){
        e.preventDefault(); //stops the default behaviour i.e refresh
        const userData = {
            penname, password
        }
        axios.post("http://localhost:8080/api/users/login", userData).then(
            result=>{
                if(result.data.token){
                    toast.success('Login success')
                    localStorage.setItem('token',result.data.token)
                    localStorage.setItem('penname',result.data.penname)
                    localStorage.setItem('_id',result.data.uid)
                    console.log(localStorage.getItem('token'))
                    // localStorage.setItem('pp',result.data.pp)
                    
                    if(result.data.isAdmin){
                    localStorage.setItem('isAdmin',true)
                        window.location.href='/admin'
                        toast.success('Logged in as an Admin')

                    }
                    else if(result.data.isPublisher){
                        localStorage.setItem('isPublisher',true)
                        window.location.href='/publication'
                        toast.success('Logged in as Publisher')

                    }
                    else if(result.data.isWriter){
                        localStorage.setItem('isWriter',true)
                        window.location.href='/portfolio'
                        toast.success('Logged in as a Writer')

                    }
                    else{
                        navigate('/profile')
                    }
               
                    
                }
                else{
                    // alert("Invalid Credentials")
                    toast.error('Invalid Credentials')
                    // setMessage("Invalid Credentials")
                    
                }
            }
        ).catch(e=>{
            toast.error('Someting went wrong!!')
        })


    }

    



    return (
        <div className='container '>
            <div className='row'>
                <div className='col my-4'>
                    <div className='row'>

                        <RecommendCard />
                        <RecommendCard />
                        <RecommendCard />



                    </div>
                    <div className='row'>

                        <RecommendCard />
                        <RecommendCard />
                        <RecommendCard />




                    </div>
                    <div className='row'>

                        <RecommendCard />
                        <RecommendCard />
                        <RecommendCard />



                    </div>



                </div>
                <div className='col  rounded my-5 '>
                    <h3 className='p-4 fw-lighter text-center '>Login | <span className="fs-4 fw-light " >Sahitya <span className='text-danger'>Khoj</span> <i className="fas fa-feather-alt"></i></span></h3>

                    <form className='p-4' method='POST' id='loginForm'>
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control fs-6" id="penname" placeholder="name@example.com" value={penname}
                                    onChange={(e)=>setPenname(e.target.value)} />
                            <label for="penname "><i className='fa fa-user-alt fs-6 '></i>&nbsp; Penname</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="password" placeholder="Password" value={password}
                                    onChange={(e)=>setPassword(e.target.value)} />
                            <label for="password"><i className='fa-solid fa-key fs-6 '></i>&nbsp; Password</label>
                        </div>
                        <div className='mb-2 mt-4 d-flex justify-content-center'>
                            <button className='btn btn-danger col-lg-4' id='loginBtn' onClick={loginUser}>
                                Login
                            </button>
                        </div>
                        <div className='text-center'>
                   
                    </div>
                    </form>
                   
                    <div className='mt-2 mb-3 text-center '>
                        <span>Have not registered? <Link className='text-decoration-none' to='/register'>Register now.</Link></span><br />
                        <Link className='text-decoration-none' to='/register' >Forgot Password?</Link>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login