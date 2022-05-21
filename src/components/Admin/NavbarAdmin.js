import React from 'react'
import toast from 'react-hot-toast';
import {Link} from 'react-router-dom'

function NavbarAdmin({NavName}) {
   // logout function
   const userLogout = () => {

    localStorage.clear();
    localStorage.removeItem('token');

    window.location.href='/login'
    toast.success('Logged Out!!')
}
  return (
   <>

<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{NavName}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <div className="dropdown ms-auto d-flex align-items-center">
            <Link
              to="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle "
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="hugenerd"
                width={30}
                height={30}
                className="rounded-circle"
              />
              <span className="d-none d-sm-inline mx-1 text-secondary">{localStorage.getItem('penname')}</span>
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <Link className="dropdown-item" onClick={userLogout} to="#">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
    </div>
  </div>
</nav>
   </>
  )
}

export default NavbarAdmin