import SinglePost from '../Feeds/SinglePost'
import dateFormat from 'dateformat';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';


function Profile() {
    const userId = localStorage.getItem('_id')

    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }

    const [feeds, setFeeds] = useState([])
    const [info, setInfo] = useState([])
    const getFeeds = async () => {
        const feedsFromServer = await fetchFeeds()
        setFeeds(feedsFromServer.data)
      }

    const getInfo = async () => {
        const infoFromServer = await fetchInfo()
        setInfo(infoFromServer.data)
      }
    useEffect(() => {
      
      getFeeds()
      getInfo()
    }, [])
  
    // Fetch Feeds
    const fetchFeeds = async () => {
      const res = await axios.get('http://localhost:8080/api/feeds/ind-feeds/'+userId)
      return res.data
    }
    // Fetch info
    const fetchInfo = async () => {
      const res = await axios.get('http://localhost:8080/api/users/info',config)
      return res.data
    }

  return (
    <>
      <div className="container-fluid">
        <div className="container col-md-12">
          <div className="row">
            <div className="col-md-8 px-0 ">
              <div className="py-1 my-2 px-0 ms-0 me-1  ">
                {/* <div className="d-flex justify-content-between align-items-center p-2 rounded-3 bg-white">
                  <p className='h4 p-1 '>Timeline</p>
                  
                
                </div> */}
                
                  <div className="p-3">

                  {feeds.map((feed, index) => (
                <SinglePost key={index} feed={feed} getFeeds={getFeeds} />

              ))}
                   
                   
                  </div>
                
               
              </div>
            </div>
            <div className="col px-0   "  >
              <div className="py-1 my-2  px-5 ms-2 me-0 bg-white position-fixed " style={{width:'27.5%'}}>
                <p className="h4 px-2 pt-2 mb-0 pb-0 text-center">
                  User's info 
                </p>
                <hr className="container col-md-6 pt-0 mt-0" />
                <div
                  className="pp-img text-center"
                  style={{ position: "relative" }}
                >
                  <img
                    src={"http://localhost:8080/" + info.profilePic}
                    className=""
                    alt=""
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="text-center"
                    style={{ position: "absolute", bottom: "0px", left: "53%" }}
                  >
                    <img
                      src="/images/quill.png"
                      className=""
                      alt=""
                      style={{
                        width: "75px",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  
                </div>

                <p className="text text-danger h5 text-center py-2">
                  {info.penname}
                </p>
                <p className="text text-secondary h6 text-center">
                  First name: 
                </p>
                <p className="text text-secondary h6 text-center">
                  Last name: 
                </p>
                <p className="text text-secondary h6 text-center">
                  Email: {info.email}
                </p>
                <p className="text text-secondary h6 text-center">
                  Contact: {info.contact}
                </p>
                
                <div className="d-flex justify-content-center align-items-center mt-3 py-2">
                <button className='btn btn-sm btn-outline-danger'>edit</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile