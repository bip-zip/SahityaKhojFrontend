import React from 'react'
import SingleAd from './SingleAd'
import SinglePost from './SinglePost'

function FeedHome() {
  return (
    <>
    <div className='container mt-2 mx-auto '>
        {/* <h3 className='text-center'>Sahitya Khoj Feeds</h3> */}
       
        <div className='row '>
          <div className='col-lg-8 p-3  '>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>

          </div>
          <div className='col pe-0 pt-3'>
            <SingleAd/>
            <SingleAd/>

          </div>
           

        </div>
    </div>

    
    
    </>
  )
}

export default FeedHome