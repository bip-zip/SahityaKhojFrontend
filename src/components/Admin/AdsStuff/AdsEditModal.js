import React, { useState } from 'react'
import dateFormat from 'dateformat';
import axios from 'axios';
import toast from 'react-hot-toast';

function AdsEditModal({ ad, getAds }) {

    const [approved, setApproved] = useState(ad.approved)

    const adsVerification = (e) => {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }
        const data = {
            "adsId": ad._id,
            'approved': approved
        }


        axios.put("http://localhost:8080/api/ads/verify", data, config).then(result => {
            console.log(result)
            if (result.data.status) {
                toast.success("ad successfully updated.")
                getAds();


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
            <div className="modal fade" id={"exampleModal" + ad._id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><strong>{ad.title}</strong> </h5>{ad.approved ? <small className='px-2  py-1 fw-light  text-success rounded-3'>Verified</small> :
              <small className='fw-light px-2 py-1 text-danger rounded-3'>Unverified</small>}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex justify-content-center'>

                                <img className='' alt="ad cover" src={"http://localhost:8080/" + ad.picture} height={300} />
                            </div>
                            <hr />

                           
         
                            <p className='h6'>Published Date: {dateFormat(ad.publishedDate, "dS mmmm , yyyy")}</p>
                            <hr />
                            <p className='h6'>Content: </p>

                            <p className='fw-light'>
                            {ad.content}
                            </p>

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
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Discard</button>
                            <button type="button" class="btn btn-purple text-white btn-sm" onClick={adsVerification}>Save changes</button>
                        </div>

                    </div>
                </div>
            </div>








        </>
    )
}

export default AdsEditModal