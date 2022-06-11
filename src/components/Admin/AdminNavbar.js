import React from 'react'
import {Link} from 'react-router-dom'

function AdminNavbar() {
  return (
    <>
    <div className=" bg-purple text-white">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
         
             <Link className="navbar-brand  mb-3 text-center fs-5 logo-name text-decoration-none" to="/admin">Sahitya <span className='text-danger'>Khoj</span> <i className="fas fa-feather-alt animate-quill"></i></Link>
         
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mx-auto"
            id="menu"
          >
            <li className="nav-item">
              <Link to="#" className="nav-link text-align-right px-0">
                <i className="fs-6 fa fa-home" />{" "}
                <span className="ms-1 d-none d-sm-inline">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="#submenu1"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
              >
                <i className="fs-4 bi-speedometer2" />{" "}
                <span className="ms-1 d-none d-sm-inline">Users</span>{" "}
              </Link>
              
            </li>
            <li>
              <Link to="/admin/publications" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-table" />{" "}
                <span className="ms-1 d-none d-sm-inline">Publications</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/writers"
                
                className="nav-link px-0 align-middle "
              >
                <i className="fs-4 bi-bootstrap" />{" "}
                <span className="ms-1 d-none d-sm-inline">Writers</span>
              </Link>
            </li>
            <li>
              <Link
                to="#submenu2"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle "
              >
                <i className="fs-4 bi-bootstrap" />{" "}
                <span className="ms-1 d-none d-sm-inline">Books</span>
              </Link>
              {/* <ul
                className="collapse nav flex-column ms-1"
                id="submenu2"
                data-bs-parent="#menu"
              >
                <li className="w-100">
                  <Link to="#" className="nav-link px-0">
                    {" "}
                    <span className="d-none d-sm-inline">Item</span> 1
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link px-0">
                    {" "}
                    <span className="d-none d-sm-inline">Item</span> 2
                  </Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link
                to="#submenu3"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
              >
                <i className="fs-4 bi-grid" />{" "}
                <span className="ms-1 d-none d-sm-inline">Feeds</span>{" "}
              </Link>
              <ul
                className="collapse nav flex-column ms-1"
                id="submenu3"
                data-bs-parent="#menu"
              >
                <li className="w-100">
                  <Link to="#" className="nav-link px-0">
                    {" "}
                    <span className="d-none d-sm-inline">Comments</span> 
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link px-0">
                    {" "}
                    <span className="d-none d-sm-inline">Comment Reports</span> 
                  </Link>
                </li>
                
              </ul>
            </li>
            <li>
              <Link to="/admin/ads" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-people" />{" "}
                <span className="ms-1 d-none d-sm-inline">Ads</span>{" "}
              </Link>
            </li>
          </ul>
          <hr />
         
        </div>
      </div>
      
    </>
  )
}

export default AdminNavbar