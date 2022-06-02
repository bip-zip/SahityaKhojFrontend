import React from 'react'
import BookModal from '../Book/BookModal'

function SingleResult({book}) {
    return (
        <>
            {/* <tr className="rounded text-center">
              <td scope="row">
              <img  data-bs-toggle="modal" data-bs-target={"#exampleModal"+book._id}  className='img' alt="book cover" src={"http://localhost:8080/" + book.bookCover} height={80} />
              </td>
              <th>{book.bookName}</th>
              <td>{book.bookWriter}</td>
              <td>{book.publication}</td>
              <td>{book.category}</td>
              <td>
                <button className="btn btn-danger">Rs. {book.price}</button>
              </td>
            </tr> */}
             <div className="col-md-4 mb-1 p-1 mt-2">
              <div className="row bg-white me-3 rounded ">
                <div className="col-md-6 m-0 p-0 ">
                  <div className="book my-0" data-bs-toggle="modal" data-bs-target={"#exampleModal"+book._id}>
                    <img
                    
                      src="/images/books.png"
                      alt="bookbg"
                      className="mx-0  my-0"
                      style={{
                        width: "100%", 
                      }}
                    />
                    <div>
                      <img
                        src={"http://localhost:8080/" + book.bookCover}
                        alt="bookCover picture"
                        className="overlapImg"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mx-0 p-0 mt-3">
                  {/* <div className="m-0 p-0">Hello there,</div> */}
                  <p className="text text-dark fs-6 fw-bold mx-0 mb-1">
                    {book.bookName} 
                  </p>
                  
                  <p className="text text-info mx-0 fs-6 mb-1">
                    By {book.bookWriter}
                  </p>
                  <p className="text text-secondary my-0 mx-0 fw-light">
                    {book.category}
                  </p>
                 
                  <p className="text text-secondary my-0 mx-0 fw-light">
                    {book.publication} Nepal Publication
                  </p>
                  <small className="text text-secondary my-0 mx-0 fw-light" >Rs. {book.price}</small>
                  <p className="text text-secondary my-0 mx-0 fw-light">
                    <i></i>
                  </p>
                </div>
              </div>
            </div>
            <BookModal book={book} />

        </>
    )
}

export default SingleResult