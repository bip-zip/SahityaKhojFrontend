
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

    

  )
}

export default BookRecommendation