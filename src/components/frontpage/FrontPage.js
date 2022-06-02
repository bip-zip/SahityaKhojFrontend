import React, { useState } from 'react'
import './style.css';
import logo from '../../statics/logo.png';
import book from '../../statics/book.png';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



function FrontPage() {
    let navigate = useNavigate();
    const [keyword, setKeyword] = useState('');

    function onFormSubmit(e){
        e.preventDefault();
        if(keyword.length<=3){
            toast.error('Give some proper hints.')

        }else{

            navigate('/results/' + keyword)
        }
    };
    

      


    return (
       <div className="container-fluid">
            <div className='frontpage mx-auto my-2 container bg-purple p-2 rounded-3'>
            <div className='d-flex justify-content-center my-3'>
                <img className='logoimage ' src={logo} alt="logo" />

            </div>
            <form >
                <div className='mx-auto col-lg-5' >
                    <input id="input" type="text" required onChange={(e) => setKeyword(e.target.value)}  className="form-control fs-5 " placeholder="Book hints..." />
                </div>
                <div className='d-flex justify-content-center mx-auto my-4' >
                    <button type="button" onClick={onFormSubmit} className="btn btn-danger col-lg-2 fs-5 ">
                    <i className="fas fa-search"></i> &nbsp; Search 
                    </button>
                </div>

            </form>
            <div className='d-flex justify-content-center my-2'>
                <img className='bookimage' src={book} alt="logo" />

            </div>

        </div>
       </div>
    )
}

export default FrontPage