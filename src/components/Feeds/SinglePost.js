import "./feeds.css";
import dateFormat from 'dateformat';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import EditFeed from "./EditFeed";
import SingleComment from "./SingleComment";


function SinglePost({ feed, getFeeds, comments }) {
  const userId = localStorage.getItem('_id')
  let navigate = useNavigate();
  const [show, setShow] = useState(false)
  const [ishow, setIshow] = useState(true)
  // const [commentcount, setCommentcount] = useState(0);
  const [commentText, setCommentText] = useState('')


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

  const commentPost = (e) => {
    e.preventDefault();

    if (commentText == '') {
        toast.error("write something..", { "position": "top-left" })
        return
    }
    
    const feedId = feed._id

    const data = {
      feedId,
        commentText
    }

    axios.post("http://localhost:8080/api/feeds/comment", data, config).then((res) => {
        console.log(res.data)
        if (res.data.success) {
            toast.success("Comment Posted.", { "position": "top-left" })
            setCommentText("");
            // setCommentcount(res.data.commentcount + 1)
            getFeeds();
        }
        else {
            toast.error("Error while posting.", { "position": "top-left" })
        }

    })



}


  return (
    <>

      <div className="row">
        <div className=" mb-3">
          <div className="p-0">
            <div className="row">
              <div className="col m-0 bg-white rounded shadow-sm me-1 mb-2">
                <div className="px-4 py-3 m-0">
                  <div className="d-flex justify-content-start align-items-start">
                    <img
                       src={"http://localhost:8080/" + feed.user.profilePic}
                      alt=""
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="ms-3 w-100">
                      <div className="">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="d-flex justify-content-start align-items-center">
                            <p className="text   mb-0 me-1">
                            {feed.user.penname}
                            </p>
                            <i className="fa fa-check-circle"></i>
                          </div>
                          {/* dropdown */}
                          {(feed.user._id == userId) ? (
                          <div className="dropdown">
                            <i
                              className="fa fa-ellipsis-h fs-6 text-secondary"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            ></i>
                            {/* list items */}
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <Link className="dropdown-item fs-6" to={"/edit-feed/"+feed._id}>
                                  <div className="d-flex justify-content-start align-items-center">
                                    <i className="fa fa-edit text-secondary me-2"></i>
                                    <p className="text text-secondary mb-0">
                                      Edit
                                    </p>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <button
                                  className="btn btn-link text-decoration-none dropdown-item fs-6"
                                  href="#"
                                >
                                  <div className="d-flex justify-content-start align-items-center">
                                    <i className="fa fa-trash-o text-secondary me-2"></i>
                                    <p className="text text-secondary mb-0">
                                      Delete
                                    </p>
                                  </div>
                                </button>
                              </li>
                            </ul>
                            {/*  */}
                          </div>):<></>}
                          {/*  */}
                        </div>
                        <div className="d-flex justify-content-start align-items-center mb-1">
                          <i className="fa fa-clock me-1 text-secondary" style={{fontSize:"0.7em"}}></i>
                          <small className="text text-secondary mb-0"style={{fontSize:"0.7em"}} >
                          {dateFormat(feed.date, "dS mmmm , yyyy")}
                          </small>
                        </div>
                        <div className="d-flex justify-content-start align-items-center">
                          <i className="fa fa-edit me-1 text-secondary text-bold"></i>
                          <small className="text text-dark mb-0">
                          {feed.title}
                          </small>
                        </div>
                      </div>
                      <hr />
                      <div className="" style={{ maxWidth: "300px" }}>
                      {ishow ? <p className=" fw-light text-justify" style={{fontSize:"0.9em"}}>
              {feed.content.substring(0, 150)}
            </p> : null}
            {
              show ? <p className="fw-light text-justify">
                {feed.content}
              </p> : null
            }
            {feed.content.length > 150 ? <button
              className="btn btn-link btn-sm text-decoration-none"
              onClick={() => setShow(!show) || setIshow(!ishow)}

            >{!show ? 'Read more...' : 'Show less...'}</button> : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* for big screen */}
              <div className="col-md-1 d-none d-sm-none d-md-block bg-white shadow rounded ms-1 pt-2 mb-2">
                <div className="py-2">
                {feed.Likes.includes(userId) ? (
                  <div className="justify-content-center align-items-center text-center" style={{ 'cursor': 'pointer' }} onDoubleClick={() => { unlikeClick(feed._id) }}>
                    <i className="fa-solid fa-feather-pointed fs-4 text-danger" type="button"></i>
                    <p className="text text-secondary">{likecount}</p>
                  </div>):
                  <div className="justify-content-center align-items-center text-center" style={{ 'cursor': 'pointer' }} onDoubleClick={() => { likeClick(feed._id) }}>
                  <i className="fa-solid fa-feather-pointed fs-4 " type="button"></i>
                  <p className="text text-secondary">{likecount}</p>
                </div>}

                </div>
                <div className="py-2">
                  <div className="justify-content-center align-items-center text-center" data-bs-toggle="modal" data-bs-target={"#exampleModal"+feed._id}>
                    <i className="fa fa-comment fs-4" type="button"></i>
                    <p className="text text-secondary">{feed.Comments.length}</p>
                  </div>
                </div>
                <div className="py-2">
                  <div className="justify-content-center align-items-center text-center">
                    <i className="fa fa-share fs-4" type="button"></i>
                    <p className="text text-secondary">3</p>
                  </div>
                </div>
              </div>
              {/*  */}
              {/* for small screen */}
              <div className="col-md-1 d-block d-sm-block d-md-none bg-white shadow rounded pt-2 d-flex justify-content-between align-items-center">
                <div className="py-2">
                  <div className=" d-flex justify-content-center align-items-center text-center">
                    <i className="fa fa-leaf fs-4 me-2" type="button"></i>
                    <p className="text text-secondary">3</p>
                  </div>
                </div>
                <div className="py-2">
                  <div className=" d-flex justify-content-center align-items-center text-center">
                    <i className="fa fa-comment fs-4 me-2" type="button"></i>
                    <p className="text text-secondary">3</p>
                  </div>
                </div>
                <div className="py-2">
                  <div className=" d-flex justify-content-center align-items-center text-center">
                    <i className="fa fa-share fs-4 me-2" type="button"></i>
                    <p className="text text-secondary">3</p>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>

      </div>



<div class="modal fade" id={"exampleModal"+feed._id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><i className="fa fa-comments"></i> {feed.Comments.length} Comments </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-light ">
        {feed.Comments.length>0?<>
          {feed.Comments.map((comment, index) => (
                < SingleComment key={index}  comment={comment} />

              ))}



        
        
        
        </>: <div className="text-center">
          <img src="/images/ghost.png" className="mb-0" alt="img" height={100} />
          <p className="text-center p-2" >No comments yet !</p>
          </div>}
      </div>
      <div class="modal-footer">
        <div className="input-group">
        <input type="text" className="form-control" placeholder="Post your comment here" value={commentText} onChange={(e)=>{
          setCommentText(e.target.value)
        }} />
        <div className="input-group-append ms-2">
        <button type="button" class="btn btn-purple text-white " onClick={commentPost}>Post</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>

  );
}

export default SinglePost;
