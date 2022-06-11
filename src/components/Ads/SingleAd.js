
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"


function SingleAd() {
    const [ads, setAds] = useState([])

    const getAds = async () => {
        const adsFromServer = await fetchAds()
        setAds(adsFromServer.data)
      }
      useEffect(() => {
    
        getAds()
      }, [])

       // Fetch Ads
  const fetchAds = async () => {
    const res = await axios.get('http://localhost:8080/api/ads/verified-ads')
    return res.data
  }



    return (
        <>
         {ads.map((ad, index) => (
               <a href={ad.link} target="_blank" className='text-decoration-none'>
               <div className='p-4 text-center shadow-sm mb-3 bg-white'>
                   <img src={"http://localhost:8080/" + ad.picture} alt="picture"  height={160} />
       
                  
                  <div className='border text-center p-1 mt-2 text-secondary'>
                       <h5 className=''>{ad.title}</h5>
                       <p className='mb-0 text-secondary'>{ad.content}</p>
                   </div>
       
               </div>
                  </a>
              ))}
        </>
        
    )
}


export default SingleAd