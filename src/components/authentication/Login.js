import React from 'react'
import { Link } from 'react-router-dom'
import userpic from '../../statics/user.jpg'
import RecommendCard from './RecommendCard'

function Login() {
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

                    <form className='p-4'>
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control fs-6" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput "><i className='fa fa-user-alt fs-6 '></i>&nbsp; Penname</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword"><i className='fa-solid fa-key fs-6 '></i>&nbsp; Password</label>
                        </div>
                        <div className='mb-2 mt-4 d-flex justify-content-center'>
                            <button className='btn btn-danger col-lg-4'>
                                Login
                            </button>
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