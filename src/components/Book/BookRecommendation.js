
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
function BookRecommendation() {
    const[books, setBooks] = useState()

    const getBooks = async () => {
      const booksFromServer = await fetchBooks()
      setBooks(booksFromServer.data)
     
    }

    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:8080/api/books/recommendation')
      console.log(res.data)
      return res.data
    }

    useEffect(() => {
      console.log(books)
      getBooks()
    }, [])





  return (

    
    <>
    {books?<div className="container col-md-11 bg-white mb-3 p-4">
          <div className="d-flex justify-content-between align-items-center mb-0">
            <p className="text text-purple mb-0">You may be interested in</p>
            
          </div>
          <hr
            className="bg-purple mt-1"
            style={{ width: "100%", height: "2px" }}
          />
          <div className="row">
          {books.map((book, index) => (
           <a className="col mb-3 p-0 me-1" href={"/book/"+book._id}>
           <div >
              <div className="p-0">
                <img
                  src={"http://localhost:8080/"+book.bookCover}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
           </a>
             ))}
           
           
          </div>
         
        </div>:<p>Fetching data</p>}
    </>
  )
}

export default BookRecommendation