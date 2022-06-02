import React from 'react'

function SingleAd({ad, getAds}) {
    return (
        <a href={ad.link} target="_blank" className='text-decoration-none'>
        <div className='p-4 text-center shadow-sm mb-3 bg-white'>
            <img src={"http://localhost:8080/" + ad.picture} alt="picture"  height={160} />

           
           <div className='border text-center p-1 mt-2 text-secondary'>
                <h5 className=''>{ad.title}</h5>
                <p className='mb-0 text-secondary'>{ad.content}</p>
            </div>

        </div>
           </a>
    )
}

export default SingleAd