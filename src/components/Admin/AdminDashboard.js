import axios from 'axios'
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import BookRow from './BooksStuff/BookRow'
import NavbarAdmin from './NavbarAdmin'

function AdminDashboard() {

  const navigate = useNavigate;
    

  const [books, setBooks] = useState([])

  const getBooks = async () => {
    const booksFromServer = await fetchBooks()
    setBooks(booksFromServer.data)
  }

  useEffect(() => {
    
    getBooks()
  }, [])

 

  // Fetch Books
  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:8080/api/books')
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
                  <p className="text text-dark h2">1098</p>
                </div>
                <div className="d-flex align-items-end mb-2">Icon</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="px-1 py-3 shadow rounded bg-white">
              <div className="d-flex justify-content-around">
                <div>
                  <p className="text text-secondary fs-5">Total users</p>
                  <p className="text text-dark h2">1098</p>
                </div>
                <div className="d-flex align-items-end mb-2">Icon</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="px-1 py-3 shadow rounded bg-white">
              <div className="d-flex justify-content-around">
                <div>
                  <p className="text text-secondary fs-5">Total users</p>
                  <p className="text text-dark h2">1098</p>
                </div>
                <div className="d-flex align-items-end mb-2">Icon</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="px-1 py-3 shadow rounded bg-white">
              <div className="d-flex justify-content-around">
                <div>
                  <p className="text text-secondary fs-5">Total users</p>
                  <p className="text text-dark h2">1098</p>
                </div>
                <div className="d-flex align-items-end mb-2"><i className='fa fa-user fs-3'></i></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div className="p-3 shadow bg-white rounded">
              <p className="text text-dark px-2 h5 mb-3">Recent requested books</p><hr/>
              {/*  */}
              <table className="table">
                <thead>
                  <tr className='text-center'>
                    <th scope="col">Bookname</th>
                    <th scope="col">Requested by</th>
                    <th scope="col">Date</th>
                    <th scope="col">Verified</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  
                  {books.map((book, index) => (
              
                <BookRow key={index} book={book} getBooks={getBooks}/>

              ))}
                  
                  
                </tbody>
              </table>
              {/*  */}
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-1 shadow bg-white rounded">
                <p className="text text-secondary mb-0 text-center">Recent Added books</p>
                <hr className="container col-md-7 mt-0 mb-4"/>
                <div className="d-flex justify-content-around align-items-center bg-light rounded mb-3 mx-3">
                    <p className="text text-secondary h6">Manab</p>
                    <div className="">i</div>
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