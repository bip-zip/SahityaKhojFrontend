import React, { useState } from "react";
import SinglePost from "../Feeds/SinglePost";
import Awards from "./Awards";
import BooksAwards from "./BooksAwards";
import Posts from "./Posts";

function Portfolio() {
  const [awardDiv, setAwardDiv] = useState(true);
  const [feedsDiv, setFeedsDiv] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <div className="container col-md-12">
          <div className="row">
            <div className="col-md-8 px-0">
              <div className="py-1 my-2 px-0 ms-0 me-1 bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  {awardDiv ? (
                    <div className="p-2">
                      <h4>Books & awards</h4>
                      <hr />
                    </div>
                  ) : null}
                  {feedsDiv ? (
                    <div className="p-2">
                      <h4>Posts</h4>
                      <hr />
                    </div>
                  ) : null}
                  <div className="btn-group p-2" role="group">
                    <button
                      type="button"
                      onClick={() => {
                        setAwardDiv(true);
                        setFeedsDiv(false);
                      }}
                      className={
                        awardDiv
                          ? "btn btn-danger btn-sm"
                          : "btn btn-outline-danger btn-sm"
                      }
                    >
                      Awards
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFeedsDiv(true);
                        setAwardDiv(false);
                      }}
                      className={
                        feedsDiv
                          ? "btn btn-danger btn-sm"
                          : "btn btn-outline-danger btn-sm"
                      }
                    >
                      Posts
                    </button>
                  </div>
                </div>
                {feedsDiv ? (
                  <div className="p-2">
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                  </div>
                ) : null}
                {awardDiv ? (
                  <>
                  <div className="row p-2">
                    
                    
                    <p>bookawards content</p>

             
                    
                
                  </div>
                  <div className="p-3">
                  <div className="d-flex align-items-center  mb-3">
                  <p
                    className="bg-secondary h5"
                    style={{ width: "100%", height: "1px" }}
                  ></p>
                  <p className="text mx-2 h5">Awards</p>
                  <p
                    className="bg-secondary h5"
                    style={{ width: "100%", height: "1px" }}
                  ></p>
                </div>
                    <p>Awards content</p>
             
                  </div>
                  </>
                ) : null}
              </div>
            </div>
            <div className="col px-0   "  >
              <div className="py-1 my-2  px-5 ms-2 me-0 bg-white position-fixed " style={{width:'27.5%'}}>
                <p className="h4 px-2 pt-2 mb-0 pb-0 text-center">
                  Writer's info
                </p>
                <hr className="container col-md-6 pt-0 mt-0" />
                <div
                  className="pp-img text-center"
                  style={{ position: "relative" }}
                >
                  <img
                    src="/images/user.jpg"
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
                  Krishna Murahari Gautam
                </p>
                <p className="text text-secondary h6 text-center">
                  Pen name: lorem lorem
                </p>
                <p className="text text-secondary h6 text-center">
                  Pen name: lorem lorem
                </p>
                <p className="text text-secondary h6 text-center">
                  Pen name: lorem lorem
                </p>
                <p className="text text-secondary h6 text-center">
                  Pen name: lorem lorem
                </p>
                <div className="d-flex justify-content-center align-items-center mt-3 py-2">
                  <button className="btn btn-purple px-3 btn-sm text-white"> <i className="fa fa-eye me-2"></i> 100 profile visits</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
