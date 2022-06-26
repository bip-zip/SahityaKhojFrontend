import dateFormat from "dateformat";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SingleAd from "../../Ads/SingleAd";
import SingleComments from "../../Feeds/SingleFeed/SingleComments";
import ShareReleasing from '../ShareReleasing'



function SingleReleasePage() {

  const { releaseId } = useParams();
  console.log(releaseId);
  const userId = localStorage.getItem("_id");
  let navigate = useNavigate();
  const [profilePic, setProfilePic] = useState();
  const [penname, setPenname] = useState();
  const [date, setDate] = useState();
  const [bookName, setBookName] = useState();
  const [bookWriter, setBookWriter] = useState();
  const [bookCover, setBookCover] = useState();
  const [releasingDate, setReleasingDate] = useState();
  const [isPublisher, setIsPublisher] = useState(false);
  const [userID, setUserID] = useState();
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [release, setRelease] = useState([]);
  const [commentText, setCommentText] = useState('')


  const getRelease = async () => {
    const releaseFromServer = await fetchRelease();
    console.log(releaseFromServer.data[0]);
    setRelease(releaseFromServer.data[0]);
  
    setBookWriter(releaseFromServer.data[0].bookWriter);
    setBookName(releaseFromServer.data[0].bookName);
    setBookCover(releaseFromServer.data[0].bookCover);
    setDate(releaseFromServer.data[0].date);
    setReleasingDate(releaseFromServer.data[0].releasingDate);
    setIsPublisher(releaseFromServer.data[0].user.isPublisher);
    setUserID(releaseFromServer.data[0].user._id);
    setPenname(releaseFromServer.data[0].user.penname);
    setProfilePic(releaseFromServer.data[0].user.profilePic);
    setComments(releaseFromServer.data[0].Comments);
    setLikes(releaseFromServer.data[0].Likes);
  };

  useEffect(() => {
    getRelease();
  }, []);

  // Fetch Feed
  const fetchRelease = async () => {
    const res = await axios.get(
      "http://localhost:8080/api/books/release/" + releaseId
    );
    return res.data;
  };

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem('token')
    }
  }

  // post like
  const likeClick = () => {
    const data = {
      "bookId":releaseId
    }
    axios.put('http://localhost:8080/api/books/release/like', data, config).then(result => {
      if (result.data.success) {
        toast.success("Post liked", { position: 'bottom-right' })
        getRelease();

      } else {
        toast("Something went wrong")
      }
    })

  }

   // post unlike
   const unlikeClick = () => {
    const data = {
      "bookId":releaseId
    }
    axios.put('http://localhost:8080/api/books/release/unlike', data, config).then(result => {
      if (result.data.success) {
        getRelease();
      } else {
        toast.error("Something went wrong")
      }
    })
  }


// comment text
  const commentPost = (e) => {
    e.preventDefault();

    if (commentText == '') {
        toast.error("write something..", { "position": "top-left" })
        return
    }
    
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
       <div className='container mt-2 mx-auto '>
    {/* <h3 className='text-center'>Sahitya Khoj Feeds</h3> */}
   
    <div className='row '>
      <div className='col-lg-8 p-3  '>
      <div className="row">
        <div className=" mb-1">
          <div className="p-0">
            <div className="row">
              <div className="col m-0 bg-white rounded shadow-sm me-1 mb-2">
                <div className="px-4 py-3 m-0">
                  <div className="d-flex justify-content-start align-items-start">
                    <img
                       src={"http://localhost:8080/" + profilePic}
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
                            {penname}
                            </p>
                            {isPublisher?<i style={{fontSize:'0.7em'}} title='Verified Publisher' className="fa fa-check-circle text-success"></i>:null}

                          </div>
                          {/* dropdown */}
                          {(userID == userId) ? (
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
                                <Link className="dropdown-item fs-6" to={"/edit-release/"+releaseId}>
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
                          {dateFormat(date, "dS mmmm , yyyy")}
                          </small>
                        </div>
                       
                         
                            <div className="col-md-12">
                              <div className="p-1 text-center">
                                <img
                                  src={"http://localhost:8080/" +bookCover}
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
                              {bookName}
                                  </p>
                                  <p className="text text-secondary mb-0">
                                  {bookWriter}
                                  </p>
                                </div>
                              </div>
                              <div className=" text-center  bg-purple">
                                <p className="text text-white mb-0 fw-light">
                                  Releasing On:
                                </p>
                                <p className="text text-white  fs-5"><i className="fa-regular fa-calendar"></i>&nbsp; 
                                {dateFormat(releasingDate, "dS mmmm , yyyy")}
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
              
     
                            {/* <LikeCommentShare release={release} likeClick={likeClick} unlikeClick={unlikeClick} userId={userId} likecount={likecount}
                            commentText={commentText} commentPost={commentPost} setCommentText={setCommentText} /> */}
            </div>
          </div>
          

        </div>
        <div className=" col-lg-12 bg-white shadow-sm rounded pt-2 mx-0 p-2 ">
            <div className="  d-flex justify-content-around align-items-center">
              <div className="py-2">
              {likes.includes(userId) ? (
                  <div className="d-flex justify-content-center align-items-center text-center" style={{ 'cursor': 'pointer' }} onDoubleClick={() => { unlikeClick()}}>
                    <i className="fa-solid fa-hands-clapping  fs-4 me-2 text-warning" type="button"></i>
                    <p className="text text-secondary mb-0">{likes.length}</p>
                  </div>):
                  <div className="d-flex justify-content-center align-items-center text-center" style={{ 'cursor': 'pointer' }} onDoubleClick={() => { likeClick()}}>
                  {/* <i className="fa-solid fa-feather-pointed fs-4 " type="button"></i> */}
                  <i className="fa-solid fa-hands-clapping fs-4 me-2 text-muted " type="button"></i>
                  <p className="text text-secondary mb-0">{likes.length}</p>
                </div>}
              </div>
              <div className="py-2">
                <div className=" d-flex justify-content-center align-items-center text-center">
                  <i
                    className="fa fa-comment-o fs-4 me-2 text-muted "
                    type="button"
                  ></i>
                  <p className="text text-secondary mb-0">{comments.length}</p>
                </div>
              </div>
              <div className="py-2">
                <div className=" d-flex justify-content-center align-items-center text-center">
                  <i
                    className="fa fa-share-square-o fs-4 me-2 text-muted "
                    type="button"
                    data-bs-toggle="modal" data-bs-target={"#exampleModalshare"+releaseId}
                  ></i>
                  <p className="text text-secondary fw-light mb-0">Share</p>
                </div>
              </div>
            </div><hr/>
            <div className="mx-0 my-2" >
                  <form>
                    <div className="input-group mb-3 border ">
                      <textarea
                        type="text"
                        rows={2}
                        className="form-control sendmessage bg-light"
                        placeholder="Post your comment..."
                        aria-label="Post your comment..."
                        aria-describedby="sendMessageButton"
                        value={commentText}
                         onChange={(e)=>{
                          setCommentText(e.target.value)}}
                      />
                     
                      <button
                        className="btn btn-purple text-white text-decoration-none"
                        type="button"
                        id="sendMessageButton"
                        style={{"border-radius":0}}
                        onClick={commentPost}
                      >Post &nbsp;
                        <i className="fa fa-paper-plane"></i> 
                      </button>
                    </div>
                  </form>
                </div>
            </div>

      </div>
      <hr />
            <h4 className="mb-4"> <i className="fa fa-comments me-2 "></i>{comments.length} Comments </h4>
            <SingleComments comments={comments} getFeed={getRelease} />
            <ShareReleasing release={release}/>
         
   


      

      </div>
      
      <div className='col pe-0 pt-3'>
        <SingleAd/>
   
      

      </div>
       

    </div>
</div>
  
   </>
  )
}

export default SingleReleasePage