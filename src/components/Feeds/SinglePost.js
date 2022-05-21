import React, { useState } from "react";
import userpic from "../../statics/user.jpg";
import "./feeds.css";

function SinglePost() {
  const[show, setShow] = useState(false)
  const[ishow, setIshow] = useState(true)

  return (
    <div className="mb-3 ps-2 row ">
      <div className=" col-lg-11 p-3 row shadow-sm bg-white post">
        <div className="col-lg-2">
          <img
            src={userpic}
            alt="pp"
            className="rounded-circle border  "
            height={60}
          />
        </div>

        <div className="col-lg-6 mt-2" title="Verified writer">
          <span className="ms-3">
            Chatyang Master{" "}
            <i className="fa fa-circle-check fs-6 text-success"></i>{" "}
          </span>
          <br />
          <span>
            <small className="fa fa-clock ms-3 text-secondary"></small>{" "}
            <small className="fw-lighter">January 21, 2022</small>
          </span>
          <br />
          <span className=" mt-5 fs-6 ms-3">
            <i className="fa fa-pen text-purple"></i> Manabrupi neta{" "}
            <small>(Hasya-byanga)</small>
          </span>
          <hr />
         { ishow?<p className=" fw-light text-justify">
            all in all is all we are all in all is all we are all in all is all
            we are all in all is all we are all in all is all we are all in all
            is all we are all in all is all we are...
          </p>:null}
          {
            show?<p className="fw-light text-justify">
              all in all is all we are all in all is all we are all in all is all
            we are all in all is all we are all in all is all we are all in all
            is all we are all in all is all we are 
            These contents were added afterwards.
            These contents were added afterwards.
            These contents were added afterwards.
            These contents were added afterwards.
            These contents were added afterwards.
            These contents were added afterwards.
            These contents were added afterwards.
            These contents were added afterwards.
            These contents were added afterwards.
            These contents were added afterwards.
            These contents were added afterwards.

              

            </p>:null
          }
          <button
            className="btn btn-link"
            onClick={()=>setShow(!show)|| setIshow(!ishow)}
           
          >{!show?'Read more...':'Show less...'}</button>
         
        </div>
      </div>
      <div className="col ms-3  shadow-sm  bg-white action">
        <div className="d-flex flex-column align-items-center justify-content-center ">
          <div className="text-center">
            <i className="fa-solid fa-feather-pointed text-warning p-2 fs-4 "></i>
            <p>100</p>
          </div>
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
