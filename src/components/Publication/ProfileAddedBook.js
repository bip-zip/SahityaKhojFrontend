import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BooksAwards from '../Portfolio/BooksAwards'
import SingleRelease from '../Releasing/SingleRelease'

function ProfileAddedBook() {
  const [books, setBooks] = useState([])

  // Fetch Books
  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:8080/api/books/added-books/'+ localStorage.getItem("_id"),config)
    return res.data
  }
  useEffect(() => {
    getBooks()
  }, [])

  const config = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }
}

     const getBooks = async () => {
    const booksFromServer = await fetchBooks()
    setBooks(booksFromServer.data)
  }
    

  return (
    <>
     <div className="row p-1 mx-2">
                    {books.map((book, index) => (
                <BooksAwards key={index} book={book} />

              ))}
                      
                      
                   
  
               
                      
                  
                    </div>
    </>
  )
}

export default ProfileAddedBook