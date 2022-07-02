import BookRow from './BookRow'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function BookTable() {


    const [books, setBooks] = useState([])
    // Fetch Books
    const fetchBooks = async () => {
        const res = await axios.get('http://localhost:8080/api/books')
        console.log(res.data.data)
        return res.data
    }
    const getBooks = async () => {
        const booksFromServer = await fetchBooks()
        setBooks(booksFromServer.data)
    }

    useEffect(() => {
        getBooks()
    }, [])



  return (
    <>
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

                                    <BookRow key={index} book={book} getBooks={getBooks} />

                                ))}


                            </tbody>
                        </table>


    
    
    
    </>
  )
}

export default BookTable