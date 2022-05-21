import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminNavbar'
import NavbarAdmin from '../NavbarAdmin'
import PublicationRequestEdit from './PublicationRequestEdit'
import dateFormat from 'dateformat';


function AdminPublication() {

  const [prequests, setPrequests] = useState([])
  const getPRequests = async () => {
    const reqsFromServer = await fetchPrequests()
    setPrequests(reqsFromServer.data)
  }

  useEffect(() => {
    
    getPRequests()
  }, [])

  // Fetch Books
  const fetchPrequests = async () => {
    const res = await axios.get('http://localhost:8080/api/publications')
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
            <NavbarAdmin NavName={"Publication"} />
            {/* Content */}
            <div className="p-3 mt-3 shadow bg-white rounded">
              <p className="text text-dark px-2 h5 mb-3">Recent publication requests</p><hr />
              {/*  */}
              <table className="table">
                <thead>
                  <tr className='text-center'>
                    <th scope="col">Publication Name</th>
                    <th scope="col">PAN/VAT No.</th>
                    <th scope="col">Requested Date</th>
                    <th scope="col">Verified</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className='text-center'>

                  {prequests.map((pub, index) => (
              
              <tr className="rounded my-3 ">
              <td>{pub.name}</td>
              <td>{pub.pan}</td>
              <td>{dateFormat(pub.requestedDate,"dS mmmm , yyyy")}</td>
              {pub.verified?<td><i className='fa fa-circle-check text-success'></i></td>:<td><i className='fa fa-circle-xmark text-danger'></i></td>}

            

              <td><button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target={"#exampleModal"+pub._id}>Edit</button></td>
      <PublicationRequestEdit key={index} pub={pub} getPub={getPRequests}/>

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

export default AdminPublication