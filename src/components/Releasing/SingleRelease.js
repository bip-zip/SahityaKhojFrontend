import dateFormat from 'dateformat';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
// import EditFeed from "../Feeds/EditFeed";
import LikeCommentShare from './LikeCommentShare';

function SingleRelease({release,getRelease}) {
  const userId = localStorage.getItem('_id')
  let navigate = useNavigate();
  const[show, setShow] = useState(false)
  const[ishow, setIshow] = useState(true)
  const [commentText, setCommentText] = useState('')


  console.log(release.Likes)
  const [likecount, setLikecount] = useState(release.Likes.length);

  const config = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }
}

 // post like
 const likeClick = (bookId) => {
  const data = {
      bookId
  }
  axios.put('http://localhost:8080/api/books/release/like', data, config).then(result => {
      if (result.data.success) {
          toast.success("Blessing added", { position: 'bottom-right' })
          setLikecount(result.data.likecount)
          getRelease();

      } else {
          toast("Something went wrong")
      }
  })

}

// post unlike
const unlikeClick = (bookId) => {
  const data = {
      bookId
  }
  axios.put('http://localhost:8080/api/books/release/unlike', data, config).then(result => {
      if (result.data.success) {
          setLikecount(result.data.likecount)
          getRelease();

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
  
  const releaseId = release._id

  const data = {
    releaseId,
      commentText
  }

  axios.post("http://localhost:8080/api/books/comment", data, config).then((res) => {
      console.log(res.data)
      if (res.data.success) {
          toast.success("Comment Posted.", { "position": "top-left" })
          setCommentText("");
          // setCommentcount(res.data.commentcount + 1)
          getRelease();
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
                       src={"http://localhost:8080/" + release.user.profilePic}
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
                            {release.user.penname}
                            </p>
                            {release.user.isPublisher?<i style={{fontSize:'0.7em'}} title='Verified Publisher' className="fa fa-check-circle text-success"></i>:null}

                          </div>
                          {/* dropdown */}
                          {(release.user._id == userId) ? (
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
                                <Link className="dropdown-item fs-6" to={"/edit-release/"+release._id}>
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
                          {dateFormat(release.date, "dS mmmm , yyyy")}
                          </small>
                        </div>
                       
                         
                            <div className="col-md-12">
                              <div className="p-1 text-center">
                                <img
                                  src={"http://localhost:8080/" + release.bookCover}
                                  alt="image"
                                  height={200}
                                  // style={{
                                  //   width: "80%",
                                  //   height: "auto",
                                  //   // objectFit: "cover",
                                  //   // borderRadius: "50%",
                                  // }}
                                />
                                <div className=" text-center  py-3">
                                  <p className="text text-dark fw-bold mb-0 fs-6">
                              {release.bookName}
                                  </p>
                                  <p className="text text-secondary mb-0">
                                  {release.bookWriter}
                                  </p>
                                </div>
                              </div>
                              <div className=" text-center  bg-purple">
                                <p className="text text-white mb-0 fw-light">
                                  Releasing On:
                                </p>
                                <p className="text text-white  fs-5"><i className="fa-regular fa-calendar"></i>&nbsp; 
                                {dateFormat(release.releasingDate, "dS mmmm , yyyy")}
                                </p>
                              </div>
                            </div>
                            
                      </div>
                      <div className="" style={{ maxWidth: "300px" }}>
                      <p className=" fw-light text-justify" style={{fontSize:"0.9em"}}>
            </p> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
     
                            <LikeCommentShare release={release} likeClick={likeClick} unlikeClick={unlikeClick} userId={userId} likecount={likecount}
                            commentText={commentText} commentPost={commentPost} setCommentText={setCommentText} />
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default SingleRelease;
