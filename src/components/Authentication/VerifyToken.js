import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

import toast from 'react-hot-toast';
import axios from "axios";
import { useState } from 'react';

function VerifyToken() {
  let navigate =useNavigate();
  const [token, setToken]=useState('');
  const email = localStorage.getItem('email')


  function tokenValidate(e){
      e.preventDefault(); //stops the default behaviour i.e refresh
      const userData = {
        email:email,
          otp:token
      }
      axios.post("http://localhost:8080/api/users/verifyemail", userData).then(
          result=>{
              if(result.data.success){
                  toast.success('Email verified.')
                  navigate("/login")
                 
              }
              else{
                  toast.error(result.data.message)
              }
          }
      ).catch(e=>{
          toast.error('Someting went wrong!!')
      })


  }
  return (
    <div className='container '>
            <div className='row'>
                <div className='col my-5'>
                  <img alt='image' src="images/verification.png" height={400} />
                    
                    
                </div>
                <div className='col  rounded my-5 py-5 '>
                    <h3 className='p-4 fw-lighter text-center '>Verify Email | <span className="fs-4 fw-light " >Sahitya <span className='text-danger'>Khoj</span> <i className="fas fa-feather-alt"></i></span></h3>

                    <form className='p-4' method='POST' id='loginForm'>
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control fs-6" id="token" placeholder="Enter your token here." value={token}
                                    onChange={(e)=>setToken(e.target.value)} />
                            <label for="token "><i className='fa fa-ticket fs-6 '></i>&nbsp; Enter your token here</label>
                        </div>
                       
                        <div className='mb-2 mt-4 d-flex justify-content-center'>
                            <button className='btn btn-danger col-lg-4' id='loginBtn' onClick={tokenValidate}>
                                Verify
                            </button>
                        </div>
                    </form>
                   

                </div>

            </div>

        </div>
  )
}

export default VerifyToken