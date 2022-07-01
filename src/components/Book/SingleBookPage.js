import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import dateFormat from 'dateformat';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BookRecommendation from './BookRecommendation';
import CommentOnBook from './CommentOnBook';
import StarRating from './StarRating';



function SingleBookPage() {
    const{bookId}=useParams()
    const[book, setBook] = useState()
    const[rating,setRating] =useState()

    const getBooks = async () => {
      const booksFromServer = await fetchBooks()
      setBook(booksFromServer.data)
      setRating(booksFromServer.rating)
     
    }

    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:8080/api/books/book/'+bookId)
      console.log(res.data)
      return res.data
    }

    useEffect(() => {
      console.log(book)
      getBooks()
    }, [])





}

export default SingleBookPage