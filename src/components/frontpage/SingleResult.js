import React from 'react'
import BookModal from '../Book/BookModal'

function SingleResult({book}) {
    return (
        <>
            <tr className="rounded text-center">
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
            </tr>
            <BookModal book={book} />

        </>
    )
}

export default SingleResult