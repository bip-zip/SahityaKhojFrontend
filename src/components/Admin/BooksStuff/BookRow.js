import React from 'react'
import BookEditModal from './BookEditModal'

function BookRow({book, getBooks }) {
  return (
   <>
   
      <tr className=" rounded my-3">
      <td>{book.bookName}</td>
      <td>{book.requestedBy}</td>
      <td>{book.requestedDate}</td>
      {book.approved?<td><i className='fa fa-circle-check text-success'></i></td>:<td><i className='fa fa-circle-xmark text-danger'></i></td>}

      <td><button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target={"#exampleModal"+book._id}>
  Edit
</button></td>
      
    </tr>

   
    <BookEditModal book={book} getBooks={getBooks}/>

   
   </>
  )
}

export default BookRow