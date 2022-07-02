import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <>
      <div
        className=" bg-purple text-white"
        style={{ position: "sticky", top: "0" }}
      >
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <div className="d-flex justify-content-center align-items-center mb-0 mx-auto">
            <Link
              className="navbar-brand mb-3 text-center fs-5 logo-name text-decoration-none text-white"
              to="/admin"
            >
              Sahitya <span className="text-danger">Khoj</span>{" "}
              <i className="fas fa-feather-alt animate-quill"></i>
            </Link>
            
          </div>
          <hr className="bg-white mt-0 pt-0 text-white" style={{"width":"100%", "height":"1px"}}/>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mx-auto"
            id="menu"
          >
            <li className="nav-item">
              <Link
                to="/admin"
                className="nav-link text-align-right px-0 text-decoration-none text-white"
              >
                <i className="fs-6 fa fa-home" />{" "}
                <span className="ms-1 d-none d-sm-inline ">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="nav-link px-0 align-middle text-decoration-none text-white"
              >
                <i className="fs-4 bi-speedometer2" />{" "}
                <span className="ms-1 d-none d-sm-inline ">
                  <i className="fas fa-users"></i>&nbsp; Users
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/publications"
                className="nav-link px-0 align-middle text-decoration-none text-white"
              >
                <i className="fs-4 bi-table" />{" "}
                <span className="ms-1 d-none d-sm-inline">
                  <i className="fa fa-building"></i>&nbsp; Publications
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/writers"
                className="nav-link px-0 align-middle text-decoration-none text-white "
              >
                <i className="fs-4 bi-bootstrap" />{" "}
                <span className="ms-1 d-none d-sm-inline">
                  <i className="fas fa-user-edit"></i> &nbsp; Writers
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/books"
                className="nav-link px-0 align-middle text-decoration-none text-white"
              >
                <i className="fs-4 bi-bootstrap" />{" "}
                <span className="ms-1 d-none d-sm-inline">
                  <i className="fas fa-book"></i> &nbsp;Books
                </span>
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
                to="/admin/ads"
                className="nav-link px-0 align-middle text-decoration-none text-white"
              >
                <i className="fs-4 bi-people" />{" "}
                <span className="ms-1 d-none d-sm-inline">
                  <i className="fas fa-ad"></i> &nbsp; Ads
                </span>{" "}
              </Link>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
}

export default AdminNavbar;
