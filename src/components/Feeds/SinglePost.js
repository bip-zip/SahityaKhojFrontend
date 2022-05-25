import "./feeds.css";
import dateFormat from 'dateformat';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';


function SinglePost({feed,getFeeds}) {
  const userId = localStorage.getItem('_id')
  let navigate = useNavigate();
  const[show, setShow] = useState(false)
  const[ishow, setIshow] = useState(true)

  // const [likes, setLikes] = useState([feed.Likes]);
  // console.log("likes",likes)
  console.log(feed.Likes)
  const [likecount, setLikecount] = useState(feed.Likes.length);

  const config = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }
}

 // post like
 const likeClick = (feedId) => {
  const data = {
      feedId
  }
  axios.put('http://localhost:8080/api/feeds/like', data, config).then(result => {
      if (result.data.success) {
          toast.success("Post liked", { position: 'bottom-right' })
          setLikecount(result.data.likecount)
          getFeeds();

      } else {
          toast("Something went wrong")
      }
  })

}

// post unlike
const unlikeClick = (feedId) => {

  const data = {
      feedId
  }
  axios.put('http://localhost:8080/api/feeds/unlike', data, config).then(result => {
      if (result.data.success) {
          setLikecount(result.data.likecount)
          getFeeds();

      } else {
          toast.error("Something went wrong")

      }
  })

}


  return (
    <div className="mb-3 ps-2 row ">
      <div className=" col-lg-11 p-3 row shadow-sm bg-white post">
        <div className="col-lg-2">
          <img
             src={"http://localhost:8080/" + feed.user.profilePic}
            alt="pp"
            className="rounded-circle border  "
            height={60}
          />
        </div>

        <div className="col-lg-6 mt-2" title="Verified writer">
          <span className="ms-3">
            {feed.user.penname}{" "}
            <i className="fa fa-circle-check fs-6 text-success"></i>{" "}
          </span>
          {/* {(feed.user._id == userId) ? (
                        <div className='btn-group col-lg-4 me-auto'>
                            <button className='btn btn-outline-danger btn-sm' ><i className='fa fa-trash'></i></button>
                            <Link className='btn btn-primary btn-sm mx-1' to={'/edit-feed/' + feed._id}>Update</Link>
                            <button className='btn btn-primary btn-sm mx-1' onClick={()=>{<EditFeed feed={feed}/>}}>Update</button>

                        </div>
                    ) : (
                        <></>
                    )} */}
          <br />
          <span>
            <small className="fa fa-clock ms-3 text-secondary"></small>{" "}
            <small className="fw-lighter">{dateFormat(feed.date,"dS mmmm , yyyy")}</small>
          </span>
          <br />
          <span className=" mt-5 fs-6 ms-3">
            <i className="fa fa-pen text-purple"></i> {feed.title}{" "}
            <small>({feed.category})</small>
          </span>
          <hr />

      { ishow?<p className=" fw-light text-justify">
        {feed.content.substring(0, 150)}
      </p>:null}
      {
        show?<p className="fw-light text-justify">
          {feed.content}
        </p>:null
      }
          {feed.content.length > 150 ? <button
            className="btn btn-link btn-sm"
            onClick={()=>setShow(!show)|| setIshow(!ishow)}
           
          >{!show?'Read more...':'Show less...'}</button>:null}
         
        </div>
      </div>



      <div className="col ms-3  shadow-sm  bg-white action">
        <div className="d-flex flex-column align-items-center justify-content-center ">

        {feed.Likes.includes(userId) ? (
                             <div className="text-center" style={{'cursor':'pointer'}} onDoubleClick={() => { unlikeClick(feed._id) }}>
                             <i className="fa-solid fa-feather-pointed text-warning p-2 fs-4 "></i>
                             <p>{likecount}</p>
                           </div>
                        ) : (
                          <div className="text-center" style={{'cursor':'pointer'}} onDoubleClick={() => { likeClick(feed._id) }}>
                          <i className="fa-solid fa-feather-pointed text-secondary p-2 fs-4 "></i>
                          <p>{likecount}</p>
                        </div>

                        )}




          
          <hr />
          <div className="text-center">
            <i className="fa fa-comment text-primary p-2 fs-4 "></i>
            <p>32</p>
          </div>
          <hr />
          <div className="text-center">
            <i className="fa fa-share p-2 fs-4 text-secondary "></i>
            <p>8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
