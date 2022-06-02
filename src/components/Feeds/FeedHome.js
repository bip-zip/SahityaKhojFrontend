import SinglePost from './SinglePost'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import SingleAd from '../Ads/SingleAd'
function FeedHome() {


  const [feeds, setFeeds] = useState([])
  const [ads, setAds] = useState([])
  const [comments, setComments] = useState([]);
  
  const getFeeds = async () => {
    const feedsFromServer = await fetchFeeds()
    setFeeds(feedsFromServer.data)
    setComments(feedsFromServer.data.Comments)
  }
  const getAds = async () => {
    const adsFromServer = await fetchAds()
    setAds(adsFromServer.data)
  }
  useEffect(() => {
    
    getFeeds()
    getAds()
  }, [])

  // Fetch Books
  const fetchFeeds = async () => {
    const res = await axios.get('http://localhost:8080/api/feeds')
    return res.data
  }
  // Fetch Ads
  const fetchAds = async () => {
    const res = await axios.get('http://localhost:8080/api/ads')
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
     
            {ads.map((ad, index) => (
                < SingleAd key={index} ad={ad} getAds={getAds} comments={comments} />

              ))}
          

          </div>

          </div>
           

        </div>
  

    
    
    </>
  )
}

export default FeedHome