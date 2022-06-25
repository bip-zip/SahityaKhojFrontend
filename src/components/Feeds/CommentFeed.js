import "./feeds.css";
import dateFormat from 'dateformat';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SingleComment from "./SingleComment";
import toast from "react-hot-toast";

function CommentFeed({feed, commentText, commentPost, setCommentText, getFeeds}) {

const [cindex, setCindex] = useState('')
  const [commentId, setCommentId] = useState('')
  const [commentedit, setCommentEdit]=useState(false)

  const saveEditedComment = () => {
    // e.preventDefault();
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
  
    const data = {
      "feedId": feed._id,
      "commentText": commentText,
      "commentId": commentId ,
      "cindex":cindex
    }

    axios.put("http://localhost:8080/api/feeds/edit-comment", data, config).then(result => {
      console.log(result)
      if (result.data.success) {
        toast.success("Comment updated")
        getFeeds()
        setCommentEdit(false)
        setCommentText("");
    
      }
      else {
        toast.error("Something went wrong!!")
      }
    }).catch(e => {
      toast.error("Something went wrong!!")
    })
  }

  const deleteComment = () => {
    // e.preventDefault();
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
  
    const data = {
      "feedId": feed._id,
      "commentId": commentId ,
      "cindex":cindex
    }

    axios.put("http://localhost:8080/api/feeds/delete-comment", data, config).then(result => {
      console.log(result)
      if (result.data.success) {
        toast.success("Comment deleted")
        getFeeds()
    
      }
      else {
        toast.error("Something went wrong!!")
      }
    }).catch(e => {
      toast.error("Something went wrong!!")
    })
  }


  return (
    <>
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
                < SingleComment key={index} cindex={index}  comment={comment} feed={feed} setCommentText={setCommentText} setCommentEdit={setCommentEdit} setCindex={setCindex} setCommentId={setCommentId} deleteComment={deleteComment}  />

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
        {commentedit?
        <button type="button" class="btn btn-purple text-white " onClick={saveEditedComment}>Update</button>:
        <button type="button" class="btn btn-purple text-white " onClick={commentPost}>Post</button>
        }
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
    
    
    
    </>
  )
}

export default CommentFeed