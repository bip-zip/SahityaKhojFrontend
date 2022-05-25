import React from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import toast from 'react-hot-toast';




export default function Navbar() {

    let navigate = useNavigate();

    // logout function
    const userLogout = () => {

        localStorage.clear();
        localStorage.removeItem('token');

        navigate('/login')
        toast.success('Logged Out!!')

    }

    // condition for logged in and logged out users

    if (localStorage.getItem('token')) {
        var menu = (
            <>
                <ul className="navbar-nav ms-auto">

                   
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className='fa fa-user-circle'></i>    {localStorage.getItem("penname")}
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/add-books">Add book</Link></li>
                            <li><Link className="dropdown-item" to="/added-books">Added books</Link></li>
                            <li><Link className="dropdown-item" to="/all-books">All books</Link></li>
                            <hr/>
                            <li><Link className="dropdown-item" to="/add-feed">Add post</Link></li>
                            <li><div className="dropdown-item" onClick={userLogout} >Logout</div></li>

                        </ul>
                    </li>
                </ul>

            </>
        )
    } else {
         menu = (
            <>
                <ul className="navbar-nav ms-auto">

                    <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-link" to="/register">Sign up</NavLink>

                    </li>
                    
                </ul>

            </>
        )
    }




    return (


        <nav className="navbar  navbar-expand-lg navbar-dark bg-purple sticky-top container ">
            <div className="container">
                <a className="navbar-brand fs-5 logo-name" href="/">Sahitya <span className='text-danger'>Khoj</span> <i className="fas fa-feather-alt animate-quill"></i></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item me-md-5 me-0 me-sm-0 text-center">
                            <NavLink className='nav-link ' exact activeClassName="active" to="/">
                                <i className="fa fa-home-alt fs-4 animate-me"></i><br />
                                Home</NavLink>

                        </li>
                        <li className="nav-item me-md-5 me-0  me-sm-0 text-center">
                            <NavLink className='nav-link ' exact activeClassName="active" to="/feeds">
                                <i className="fas fa-feather-alt fs-4 animate-me"></i>
                                <br />
                                Feeds</NavLink>
                        </li>
                        <li className="nav-item me-md-5 me-0 me-sm-0 text-center">
                            <NavLink className='nav-link' exact activeClassName="active" to="/release">
                                <i className="far fa-star fs-4 animate-me"></i><br />

                                Releasing</NavLink>

                        </li>

                    </ul>
                    {menu}
                </div>
            </div>
        </nav>


    )
}
