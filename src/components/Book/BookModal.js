import React from 'react'
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';


function BookModal({ book }) {
    return (
        <>
            <div className="modal fade" id={"exampleModal" + book._id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><strong>{book.bookName}</strong> <span className='fw-light'>by</span> {book.bookWriter}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex justify-content-center'>

                                <img className='' alt="book cover" src={"http://localhost:8080/" + book.bookCover} height={300} />
                            </div>
                            <hr/>
                            <p className='h6'>Category: {book.category}</p>
                        {book.verifiedPublication ?<p className='h6'>Publisher: {book.verifiedPublication.name}</p>:null}
                            <p className='h6'>ISBN: {book.isbn}</p>
                            
                            <p className='h6'>Published Date: {dateFormat(book.publishedDate,"dS mmmm , yyyy")}</p>
                            <p className='h6'>Price: {book.price}</p>
                            <hr/>
                            <p className='h6'>Abstract: </p>
                            
                            <p className='fw-light'>
                                {book.abstract}
                            </p>

                        </div>
                        <div className="modal-footer">
                            <a className='btn btn-sm btn-outline-primary '  href={'/book/'+book._id} >More Details </a>

                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default BookModal