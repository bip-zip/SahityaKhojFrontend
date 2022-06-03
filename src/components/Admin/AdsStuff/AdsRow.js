import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminNavbar'
import NavbarAdmin from '../NavbarAdmin'
import dateFormat from 'dateformat';
import AdsEditModal from './AdsEditModal';


function AdsRow() {

    const [arequests, setArequests] = useState([])
    const getARequests = async () => {
        const reqsFromServer = await fetchArequests()
        setArequests(reqsFromServer.data)
    }

    useEffect(() => {
        getARequests()
    }, [])

    // Fetch Ads
    const fetchArequests = async () => {
        const res = await axios.get('http://localhost:8080/api/ads')
        return res.data
    }

    return (
        <>
            <div className="container-fluid p-0 m-0">
                <div className="row">
                    <div className="col-2 shadow-sm p-0 m-0">
                        <AdminNavbar />
                    </div>
                    <div className="col p-0 m-0">
                        <NavbarAdmin NavName={"Advertisements"} />
                        {/* Content */}
                        <div className="p-3 mt-3 shadow bg-white rounded">
                            <p className="text text-dark px-2 h5 mb-3">Recent ads requests</p><hr />
                            {/*  */}
                            <table className="table">
                                <thead>
                                    <tr className='text-center'>
                                        <th scope="col">Requested by</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Requested Date</th>
                                        <th scope="col">Verified</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>

                                    {arequests.map((ad, index) => (

                                        <tr className="rounded my-3 ">
                                            <td>{ad.requestedBy}</td>
                                            <td>{ad.title}</td>
                                            <td>{dateFormat(ad.requestedDate, "dS mmmm , yyyy")}</td>
                                            {ad.approved ? <td><i className='fa fa-circle-check text-success'></i></td> : <td><i className='fa fa-circle-xmark text-danger'></i></td>}



                                            <td><button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target={"#exampleModal" + ad._id}>Edit</button></td>
                                            <AdsEditModal key={index} ad={ad} getAds={getARequests}/>

                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                            {/*  */}
                        </div>



                    </div>
                </div>
            </div>






        </>
    )
}

export default AdsRow