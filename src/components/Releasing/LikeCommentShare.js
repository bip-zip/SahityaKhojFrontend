import React from 'react'
// import CommentFeed from '../Feeds/CommentFeed'
// import ShareReleasing from './ShareReleasing'

function LikeCommentShare({release, likeClick, unlikeClick, likecount, userId, commentPost, commentText, setCommentText}) {
  return (
    <>
    {/* for big screen */}
    <div className="col-md-1 d-none d-sm-none d-md-block bg-white shadow rounded ms-1 pt-2 mb-2">
                <div className="py-2">
                {release.Likes.includes(userId) ? (
                  <div className="justify-content-center align-items-center text-center" style={{ 'cursor': 'pointer' }} onDoubleClick={() => { unlikeClick(release._id) }}>
                    <i className="fa-solid fa-clover fs-4 text-success" type="button"></i>
                    <p className="text text-secondary">{likecount}</p>
                  </div>):
                  <div className="justify-content-center align-items-center text-center" style={{ 'cursor': 'pointer' }} onDoubleClick={() => { likeClick(release._id) }}>
                  <i className="fa-solid fa-clover fs-4 " type="button"></i>
                  <p className="text text-secondary">{likecount}</p>
                </div>}

                </div>
                <div className="py-2">
                  <div className="justify-content-center align-items-center text-center">
                    <i className="fa fa-comment fs-4" type="button" data-bs-toggle="modal" data-bs-target={"#exampleModal"+release._id}></i>
                    {/* <p className="text text-secondary">{release.Comments.length}</p> */}
                  </div>
                </div>
                <div className="py-2">
                  <div className="justify-content-center align-items-center text-center">
                  <i className="fa fa-share-square-o fs-4 " data-bs-toggle="modal" data-bs-target={"#exampleModalshare"+release._id} type="button"></i>
                     
                  <small className="text text-secondary fw-light" style={{"font-size":'0.7em'}}>Share</small>
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
        {/* <CommentFeed feed={release} commentText={commentText} commentPost={commentPost} setCommentText={setCommentText}  />
        <ShareReleasing release={release}/> */}

              {/*  */}
    </>
  )
}

export default LikeCommentShare