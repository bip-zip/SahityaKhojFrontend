import React from 'react'
import { Link } from 'react-router-dom'
import userpic from '../../statics/user.jpg'

function RecommendCard() {
    return (
        <div className='col shadow-sm p-2 me-2  rounded-3 text-center'>
            <img src={userpic} alt="pic" className='rounded-circle shadow-sm' height={60} />
            <p className='mt-2'>Chatyang Master</p>
            <Link to='/' className='btn btn-purple text-white btn-sm'><i className='fa fa-eye'></i> 100 visits</Link>
        </div>
    )
}

export default RecommendCard