import BookRow from './BookRow'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar'
import NavbarAdmin from '../NavbarAdmin'
import BookTable from './BookTable'



function AdminBook() {
    

    return (
        <div className="container-fluid p-0 m-0">
            <div className="row">
                <div className="col-2 shadow-sm p-0 m-0">
                    <AdminNavbar />
                </div>
                <div className="col p-0 m-0">
                    <NavbarAdmin NavName={"Books"} />
                    {/* Content */}
                    <div className="p-3 mt-3 shadow bg-white rounded">
                        <p className="text text-dark px-2 h5 mb-3">All Books</p><hr />
                      <BookTable/>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default AdminBook