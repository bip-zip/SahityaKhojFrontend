import React, { useState } from 'react'
import dateFormat from 'dateformat';
import toast from 'react-hot-toast';
import axios from 'axios';



function PublicationRequestEdit({pub, getPub}) {
    const [approved, setApproved] = useState(pub.verified)

  const pubVerification = (e) => {
    e.preventDefault();
    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }
    const data={
      "pubid":pub._id,
      'approved':approved,
      'email':pub.email
    }


    axios.put("http://localhost:8080/api/publications/verify", data, config).then(result => {
        console.log(result)
        if (result.data.status) {
            toast.success("Publication verification successfully updated.")
            getPub();
        }
        else {
          getPub();
          toast.error("Something went wrong!!")
        }
    }).catch(e => {
        toast.error("Something went wrong!!")
    })

}

  return (
    <div className="modal fade" id={"exampleModal" + pub._id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"><strong>{pub.name}</strong>{pub.verified? <small className='px-2  py-1 fw-light  text-success rounded-3'>Verified</small>:
               <small className='fw-light px-2 py-1 text-danger rounded-3'>Unverified</small>
               } </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className='d-flex justify-content-center'>

                    <img className='img-fluid' alt="pub cover" src={"http://localhost:8080/" + pub.companyReg}  />
                </div>
                <hr/>
                <p className='h6'>Address: {pub.address}</p>
                <p className='h6'>Contact: {pub.contact}</p>
                
                <p className='h6'>Requested Date: {dateFormat(pub.requestedDate,"dS mmmm , yyyy")}</p>
                <p className='h6'>Email: {pub.email}</p>
                <hr/>
                <p className='h6'>PAN/VAT No.: {pub.pan}</p>
                <hr/>

              <div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheckDefault"  checked={approved}
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
              <button type="button" class="btn btn-purple text-white btn-sm" onClick={pubVerification}>Save changes</button>


            </div>
        </div>
    </div>
</div>)
}

export default PublicationRequestEdit