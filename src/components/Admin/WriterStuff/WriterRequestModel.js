import React, { useState } from 'react'
import dateFormat from 'dateformat';
import toast from 'react-hot-toast';
import axios from 'axios';

function WriterRequestModel({ writer, getWriter }) {

    const [approved, setApproved] = useState(writer.verified)

    const writerVerification = (e) => {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }
        const data = {
            "userId": writer.requestedBy,
            'approved': approved,
            
        }


        axios.put("http://localhost:8080/api/writers/verify", data, config).then(result => {
            console.log(result)
            if (result.data.status) {
                toast.success("Writer verification successfully updated.")
                getWriter();
            }
            else {
                getWriter();
                toast.error("Something went wrong!!")
            }
        }).catch(e => {
            toast.error("Something went wrong!!")
        })
    }
    return (
        <>
         <div className="modal fade" id={"exampleModal" + writer._id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"><strong>{writer.name}</strong>{writer.verified ? <small className='px-2  py-1 fw-light  text-success rounded-3'>Verified</small> :
              <small className='fw-light px-2 py-1 text-danger rounded-3'>Unverified</small>
            } </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className='d-flex justify-content-center'>

              <img className='img-fluid' alt="citizenship" src={"http://localhost:8080/" + writer.citizenship} />
            </div>
            <hr />
            <p className='h6'>Bookname: {writer.bookName}</p>
            <p className='h6'>Publication: {writer.bookPublisher}</p>

            <p className='h6'>Requested Date: {dateFormat(writer.requestedDate, "dS mmmm , yyyy")}</p>
          
            <hr />

            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="flexCheckDefault" checked={approved}
                onChange={() => {
                  setApproved(!approved)
                }} />
              <label class="form-check-label" for="flexCheckDefault">
                Verification
              </label>
            </div>




          </div>
          <div className="modal-footer">
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Discard</button>
            <button type="button" class="btn btn-purple text-white btn-sm" onClick={writerVerification}>Save changes</button>


          </div>
        </div>
      </div>
    </div>





        </>
    )
}

export default WriterRequestModel