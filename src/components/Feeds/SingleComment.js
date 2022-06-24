import React, { useState } from 'react'
import dateFormat from 'dateformat';
import axios from 'axios';
import toast from 'react-hot-toast';
import CommentFeed from './CommentFeed';
import { Link } from 'react-router-dom';



function SingleComment({ comment, feed, cindex, setCommentText, setCommentEdit, setCindex, deleteComment, setCommentId}) {
  // const [commentText, setCommentText] = useState();
  const userId = localStorage.getItem('_id')
  setCommentId(comment._id)
  console.log(comment._id,'This is the comment id')

  
  const editComment=()=>{
    console.log(comment.Text,'this is the comment')
    setCommentEdit(true)
    setCommentText(comment.Text)
    setCindex(cindex)
    
  }

  const deleteCommentButton=()=>{
    setCommentId(comment._id)
    setCindex(cindex)
    deleteComment()
  }



  return (<>
    <div className="container col-md-12 ">
      <div className="d-flex justify-content-start align-items-start bg-white p-2 mb-3">

        {comment.PostedBy.isWriter ? <a className="text-decoration-none text-dark" href={"/writer/" + comment.PostedBy._id}><img
          src={"http://localhost:8080/" + comment.PostedBy.profilePic}
          alt="dp"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        /></a>:<a className="text-decoration-none text-dark" href={"/user/" + comment.PostedBy._id}>
          <img
          src={"http://localhost:8080/" + comment.PostedBy.profilePic}
          alt="dp"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "50%",
          }}/>
          
          </a>}
        <div className="ms-3 w-100 ">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center">

              {comment.PostedBy.isWriter ?
               <a className="text-decoration-none text-dark" href={"/writer/" + comment.PostedBy._id}>
                <p className="text text-dark mb-0 me-2">{comment.PostedBy.penname}</p></a>:<a className="text-decoration-none text-dark" href={"/user/" + comment.PostedBy._id}>
                <p className="text text-dark mb-0 me-2">{comment.PostedBy.penname}</p>
                  </a>}

              <small className="d-block text-secondary" style={{ fontSize: '0.7em' }}> {dateFormat(comment.date, "dS mmmm , yyyy")}</small>
            </div>
            {comment.PostedBy._id == userId?<div className="dropdown">
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
                  <a className="dropdown-item" href="#">
                    <div className="d-flex justify-content-start align-items-center" onClick={editComment}>
                      <i className="fa fa-edit text-secondary me-2"></i>
                      <p className="text text-secondary mb-0" >Edit</p>
                    </div>
                  </a>
                </li>
                <li>
                  <button
                    className="btn btn-link text-decoration-none dropdown-item"
                    href="#"
                  >
                    <div className="d-flex justify-content-start align-items-center" onClick={deleteCommentButton}>
                      <i className="fa fa-trash-o text-secondary me-2"></i>
                      <p className="text text-secondary mb-0">Delete</p>
                    </div>
                  </button>
                </li>
              </ul>
              {/*  */}
            </div>:null}
          </div>
          <p className="text  text-secondary mb-0" style={{ fontSize: '0.87em' }}>
            {comment.Text}
          </p>
        </div>
      </div>
    </div>

  </>
    // <div>{comment.PostedBy.penname} {comment.Text}</div>

  )
}

export default SingleComment