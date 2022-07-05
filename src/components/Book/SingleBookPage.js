import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import dateFormat from 'dateformat';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BookRecommendation from './BookRecommendation';
import BookRating from './BookRating';
import CommentOnBook from './CommentOnBook';
import StarRating from './StarRating';

import _ from "lodash";



function SingleBookPage() {
  const { bookId } = useParams()
  const [book, setBook] = useState()
  const [rating, setRating] = useState()
  const [reviwlength, setReviewLength] = useState(0)

  const getBooks = async () => {
    const booksFromServer = await fetchBooks()
    setBook(booksFromServer.data)
    setRating(booksFromServer.rating)

  }

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:8080/api/books/book/' + bookId)
    console.log(res.data)
    return res.data
  }

  useEffect(() => {
    console.log(book)
    getBooks()
  }, [])




  return (
    <>
      {book ? <div className="container col-md-11 bg-white mt-3 p-4">
        <div className="row">
          <div className="col-md-3">
            <div className="p-1">
              <img
                src={"http://localhost:8080/" + book.bookCover}
                alt="image"
                className='mb-3'
                style={{ width: "100%" }}
              />

              <StarRating bookId={bookId} />

            </div>
          </div>
          <div className="col-md-9">
            <div className="px-1 py-2">
              <p className="text text-dark text-start mb-1 fs-3">
                {book.bookName}
              </p>
              <Link to="/" className="fs-5 mt-3">
                {book.bookWriter}
              </Link>
              <div className="d-flex justify-content-start align-items-center my-3">
                <div className="d-flex justify-content-start align-items-center me-4">
                  {_.times(rating?rating:1, (i) => (
                    <i key={i} className="fa fa-star text-warning me-2"></i>
                  ))}
                  {_.times(5-rating, (i) => (
                    <i key={i} className="fa fa-star text-secondary me-2"></i>
                  ))}


                  {/* <p className="text mb-0">
                      <span className="text-warning">{rating?rating:1} </span>/
                      <span className="text-success"> 5.0</span>
                    </p> */}
                </div>
                <div className="d-flex justify-content-start align-items-center me-4">
                  <i className="fa fa-comment-o me-2"></i>
                  <p className="text mb-0">{reviwlength} reviews</p>
                </div>
                <i className="fa fa-heart me-4"></i>
                <i class="fa fa-bookmark"></i>
              </div>
              <p className="text text-dark">

              </p>
              <p className="text text-dark fs-5 text-uppercase mb-2 mt-2">
                Abstract
              </p>
              <p className="text mb-4">
                {book.abstract || <Skeleton />}
              </p><hr /><br />
              {/* <div className="d-flex justify-content-around align-items-center mb-4">
                  <hr
                    className="text-center mb-1 d-md-block d-sm-none d-none"
                    style={{ width: "100%", height: "1px" }}
                  />
                  <p
                    className="text text-center"
                    style={{ width: "50%", height: "1px" }}
                  >
                    Click to read more
                  </p>
                  <hr
                    className="text-center mb-1 d-md-block d-sm-none d-none"
                    style={{ width: "100%", height: "1px" }}
                  />
                </div> */}
              <div className="row">
                <div className="col-md-6 fw-light">
                  <div className="p-1 text-start">
                    <p className="text text-dark mb-1">
                      Categories:{" "}
                      <span className="">
                        {book.category}
                      </span>
                    </p>
                    <p className="text text-dark mb-1">Edition: 1</p>
                    <p className="text text-dark mb-1">Language: Nepali</p>
                    <p className="text text-dark mb-1">ISBN: {book.isbn}</p>
                    {/* <p className="text text-dark mb-1">File: EPUB, 656 KB</p> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-1 text-start">
                    <p className="text text-dark mb-1">Year: {dateFormat(book.publishedDate, "yyyy")}</p>
                    {book.verifiedPublication ?<p className='text text-dark mb-1'>Publisher: {book.verifiedPublication.name}</p>:null}

                    {/* <p className="text text-dark mb-1">
                      Publisher: {book.verifiedPublication}
                    </p> */}
                    <p className="text text-dark mb-1">Pages: {book.pages}</p>
                    <p className="text text-dark mb-1">
                      Price : Rs. {book.price}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div> : <div className='container col-md-11 bg-white mt-3 p-4'>
        <Skeleton count={22} />
      </div>}
      <BookRecommendation />

      <CommentOnBook bookId={bookId} setReviewLength={setReviewLength} />






    </>
  )
}

export default SingleBookPage