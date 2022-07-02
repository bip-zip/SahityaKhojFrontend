import axios from 'axios'
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import AdminBook from './BooksStuff/AdminBook'
import BookRow from './BooksStuff/BookRow'
import BookTable from './BooksStuff/BookTable'
import NavbarAdmin from './NavbarAdmin'

function AdminDashboard() {



  const [dashboard, setDashboard] = useState([])
  const navigate = useNavigate;
  const config = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }
}
    
 

  const getDetails = async () => {
    const detailsFromServer = await fetchDetails()
    setDashboard(detailsFromServer)
  }

  useEffect(() => {
    getDetails();

  }, [])

 


  // Fetch Dashboard item
  const fetchDetails = async () => {
    const res = await axios.get('http://localhost:8080/api/users/admin-dashboard',config)
    console.log(res)
    return res.data
  }






  return (
    <>
    <div className="container-fluid p-0 m-0">
        <div className="row">
            <div className="col-2 shadow-sm p-0 m-0">
                <AdminNavbar/>
            </div>
            <div className="col p-0 m-0">
                <NavbarAdmin NavName={'Admin Dashboard'} />
                {/* Content */}
                <div className="container col-md-11 my-4">
        <div className="row mb-2 ">
          <div className="col-md-3 mb-4">
            <div className="px-1 py-3 shadow rounded bg-white">
              <div className="d-flex justify-content-around">
                <div>
                  <p className="text text-secondary fs-5">Total users</p>
                  <p className="text text-dark h2">{dashboard.totaluser}</p>
                </div>
                <div className="d-flex align-items-end mb-2"><i className="fas fa-users fs-2"></i></div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="px-1 py-3 shadow rounded bg-white">
              <div className="d-flex justify-content-around">
                <div>
                  <p className="text text-secondary fs-5">Total publications</p>
                  <p className="text text-dark h2">{dashboard.totalpublication}</p>
                </div>
                <div className="d-flex align-items-end mb-2"><i className="fa fa-building fs-2"></i></div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="px-1 py-3 shadow rounded bg-white">
              <div className="d-flex justify-content-around">
                <div>
                  <p className="text text-secondary fs-5">Total writers</p>
                  <p className="text text-dark h2">{dashboard.totalwriter}</p>
                </div>
                <div className="d-flex align-items-end mb-2"><i className="fas fa-user-edit fs-2"></i></div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="px-1 py-3 shadow rounded bg-white">
              <div className="d-flex justify-content-around">
                <div>
                  <p className="text text-secondary fs-5">Total books</p>
                  <p className="text text-dark h2">{dashboard.totalbook}</p>
                </div>
                <div className="d-flex align-items-end mb-2"><i className="fas fa-book fs-2"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div className="p-3 shadow bg-white rounded">
              <p className="text text-dark px-2 h5 mb-3">Recent requested books</p><hr/>
              {/*  */}
             <BookTable/>
              {/*  */}
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 shadow bg-white rounded">
            <div className="d-flex justify-content-around">
                <div>
                  <p className="text text-secondary fs-5">Running Ads</p>
                  <p className="text text-dark h2">{dashboard.totalad}</p>
                </div>
                <div className="d-flex align-items-end mb-2"><i className="fas fa-ad fs-2"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminDashboard