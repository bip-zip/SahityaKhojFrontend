import SingleAd from './SingleAd'
import SinglePost from './SinglePost'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
function FeedHome() {

  const [feeds, setFeeds] = useState([])
  const getFeeds = async () => {
    const feedsFromServer = await fetchFeeds()
    setFeeds(feedsFromServer.data)
  }
  useEffect(() => {
    
    getFeeds()
  }, [])

  // Fetch Books
  const fetchFeeds = async () => {
    const res = await axios.get('http://localhost:8080/api/feeds')
    return res.data
  }


  return (
    <>
    <div className='container mt-2 mx-auto '>
        {/* <h3 className='text-center'>Sahitya Khoj Feeds</h3> */}
       
        <div className='row '>
          <div className='col-lg-8 p-3  '>
          {feeds.map((feed, index) => (
                <SinglePost key={index} feed={feed} getFeeds={getFeeds} />

              ))}
          

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