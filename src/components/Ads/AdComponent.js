import React from 'react'

function AdComponent() {
  return (
    <div className='p-4 shadow-sm rounded bg-white'>
        <div className='d-flex justify-content-center'>
        <img  src='/images/books.jpg' alt='ads' height={150} />

        </div>
        <p className='h5 text-center mt-2'>Book Name</p>
        <p className='h6 text-center my-0'>Book Writer</p>
    </div>
  )
}

export default AdComponent