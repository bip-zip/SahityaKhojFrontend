
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import dateFormat from 'dateformat';
import toast from 'react-hot-toast';


function CommentOnBook({ bookId, setReviewLength }) {

    const [reviews, setReviews] = useState([])
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')


    const getReviews = async () => {
        const reviewsFromServer = await fetchReviews()
        setReviews(reviewsFromServer.data)
        setReviewLength(reviewsFromServer.data.length)
    }


    useEffect(() => {
        getReviews()
 
    }, [])

    const fetchReviews = async () => {
        const res = await axios.get('http://localhost:8080/api/book-review/review/' + bookId)
        return res.data
    }

    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }

    // posting review
    const postReview=(e)=>{
        e.preventDefault();
        const data={
            "bookId":bookId,
            'comment':comment,
            "name":name
        }
        if (name== "" || comment == ''){
            toast.error("Fill out name and comment both.")
        }
        else{
            axios.post("http://localhost:8080/api/book-review/post",data, config).then(res=>{
                if(res.data.success){
                    getReviews()
                    setComment('')
                    setName('')
                    toast.success(res.data.message)
                }else{
            toast.error(res.data.message)

                }

            })
        }

    }


    return (
        <>
            <div className='container col-md-11 bg-white mt-3 p-4'>
                <p className='h3 text-secondary mb-4'> Book Reviews </p>

               

                {reviews.length>0?<>{reviews.map((review, index) => (
                    <div className="shadow-sm  border border-muted py-3 px-4 mb-4">
                        {review.name?<h6 className="text text-dark">{review.name}</h6>:<h6>No Name</h6>}
                        <p className="text text-secondary" style={{ "fontSize": "13px" }}>
                            {review.comment}
                        </p>
                        <p
                            className="text text-secondary text-end mb-0"
                            style={{ fontStyle: "italic", "fontSize": "11px" }}
                        >
                            {/* 2079/03/20 (7:26 PM) */}
                            {dateFormat(review.date, "dS mmmm , yyyy")}
                        </p>
                    </div>

                ))}</>:<h5 className='text-secondary p-4'>No reviews yet.</h5>}






                <br />
                <div className="formmm ">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="p-1">
                                <form>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name..."
                                            style={{ "borderRadius": "0px" }}
                                            value={name}

                                            onChange={e=>{setName(e.target.value)}}

                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            cols="30"
                                            rows="3"
                                            className="form-control"
                                            placeholder="Type your comment..."
                                            value={comment}
                                            onChange={e=>{setComment(e.target.value)}}
                                            style={{ "borderRadius": "0px" }}

                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <button onClick={postReview} className="btn btn-purple text-white btn-sm px-4 me-md-5 me-sm-2 me-1"
                                                style={{ "borderRadius": "0px" }}
                                            >
                                                Post a Review
                                            </button>
                                            <p className="text text-danger mb-0 fs-6">
                                                To post a review, please{" "}
                                                <span className="text">
                                                    <a href="/login" className="text-decoration-none">
                                                        sign in
                                                    </a>
                                                </span>{" "}
                                                or{" "}
                                                <span className="text">
                                                    <a href="/register" className="text-decoration-none">
                                                        sign up
                                                    </a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-1">

                            <div className="p-0 bg-secondary" style={{ width: "1px", height: "100%" }}></div>

                        </div>
                        <div className="col-md-4">
                            <div className="p-0 ">
                                <p className="text text-secondary" style={{ "fontSize": "14px" }}>
                                    By giving reviews to book helps other users to know about the book much more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CommentOnBook