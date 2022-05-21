import React from 'react'

function PublicationInfo() {
  return (
    <div className="py-1 my-2  px-5 ms-2 me-0 bg-white position-fixed " style={{width:'27.5%'}}>
    <p className="h4 px-2 pt-2 mb-0 pb-0 text-center">
      Publication's info
    </p>
    <hr className="container col-md-6 pt-0 mt-0" />
    <div
      className="pp-img text-center"
      style={{ position: "relative" }}
    >
      <img
        src="/images/logooriental.jpg"
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
      Oriental Publication House
    </p>
    <p className="text text-secondary h6 text-center">
      Email: oriental.publi@gmail.com
    </p>
    <p className="text text-secondary h6 text-center">
      Contact: 01-4535232
    </p>
    <p className="text text-secondary h6 text-center">
      Address: Bagbazar
    </p>
    <p className="text text-secondary h6 text-center">
      CEO: Hari Gautam
    </p>
    <div className="d-flex justify-content-center align-items-center mt-3 py-2">
      <button className="btn btn-purple px-3 btn-sm text-white"> <i className="fa fa-eye me-2"></i> 100 profile visits</button>
    </div>
  </div>
  )
}

export default PublicationInfo