import React, { useEffect, useState } from 'react'
import SingleBookItem from './SingleBookItem'
import { Link } from 'react-router-dom'
import axios from "axios"
import dateFormat from 'dateformat';
import BookModal from '../Book/BookModal';

function AllBooks() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await fetchBooks()
      setBooks(booksFromServer.data)
    }
    getBooks()
  }, [])

  // Fetch Books
  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:8080/api/books')
    return res.data
  }

  return (
    <>
      <div className="col-md-12 container my-3 ">
        <div className="card border-0 py-2 px-2 mx-0">
          <p className="h5 text text-secondary mb-0 mt-2">
            Added Books Lists
          </p><hr />

         {books.length>0? <table className="table table-hover">
            <thead>
              <tr className='text-center'>

                <th>Book Cover</th>
                <th>Book Title</th>
                <th>Request Date</th>
                <th>Verification</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {books.map((book, index) => (
                <SingleBookItem key={index} book={book} />

              ))}

            </tbody>
          </table>:<div>
          <p className='h5 text-center '>No added books.</p>
          <div className="d-flex justify-content-center">

          <Link className='btn btn-outline-dark text-purple my-2' to="/add-books"><i className='fa fa-plus'></i> Add Book</Link>
          </div>
          </div>}
        </div>
      </div>
   


    </>
  )
}

export default AllBooks