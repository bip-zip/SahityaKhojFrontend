import React from 'react'

function CommentReleasing({release, commentText, commentPost, setCommentText}) {
  return (
    <>
      <div class="modal fade" id={"exampleModal"+release._id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><i className="fa fa-comments"></i> {release.Comments.length} Comments </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-light ">
        {release.Comments.length>0?<>
          {release.Comments.map((comment, index) => (
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
  )
}

export default CommentReleasing