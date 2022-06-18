
import SingleRelease from './SingleRelease'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdComponent from '../Ads/AdComponent'
import SingleAd from '../Ads/SingleAd'


function ReleaseHome() {
  const [releases, setRelease] = useState([])
  const getRelease = async () => {
    const releaseFromServer = await fetchRelease()
    setRelease(releaseFromServer.data)
  }
  useEffect(() => {
    
    getRelease()
  }, [])

  // Fetch Release
  const fetchRelease = async () => {
    const res = await axios.get('http://localhost:8080/api/books/releases')
    return res.data
  }
  






  return (
    <div className='container mt-2 mx-auto '>
    {/* <h3 className='text-center'>Sahitya Khoj Feeds</h3> */}
   
    <div className='row '>
      <div className='col-lg-8 p-3  '>
      {releases.map((release, index) => (
            <SingleRelease key={index} release={release} getRelease={getRelease} />

          ))}
      

      </div>
      <div className='col pe-0 pt-3'>
        <SingleAd/>
   
      

      </div>
       

    </div>
</div>
  )
}

export default ReleaseHome